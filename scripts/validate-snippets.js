const fs = require("fs");
const path = require("path");

const catalogs = [
    {
        path: "snippets/snippets.json",
        label: "shared",
        expectedPrefix: "pt* (excluding ptj-*/ptd-*)",
        prefixValidator: (prefix) =>
            prefix.startsWith("pt") &&
            !prefix.startsWith("ptj-") &&
            !prefix.startsWith("ptd-"),
    },
    {
        path: "snippets/jinja-snippets.json",
        label: "jinja",
        expectedPrefix: "ptj-*",
        prefixValidator: (prefix) => prefix.startsWith("ptj-"),
    },
    {
        path: "snippets/django-snippets.json",
        label: "django",
        expectedPrefix: "ptd-*",
        prefixValidator: (prefix) => prefix.startsWith("ptd-"),
    },
];

const errors = [];
const seenPrefixes = new Map();

function addError(message) {
    errors.push(message);
}

function validateRequiredString(snippet, fieldName) {
    return typeof snippet[fieldName] === "string" && snippet[fieldName].trim().length > 0;
}

for (const catalog of catalogs) {
    const absolutePath = path.resolve(catalog.path);
    let parsedCatalog;

    try {
        const rawCatalog = fs.readFileSync(absolutePath, "utf8");
        parsedCatalog = JSON.parse(rawCatalog);
    } catch (error) {
        if (error && error.code) {
            addError(`${catalog.path}: failed to read file (${error.message})`);
        } else {
            addError(`${catalog.path}: invalid JSON (${error.message})`);
        }
        continue;
    }

    if (
        parsedCatalog === null ||
        typeof parsedCatalog !== "object" ||
        Array.isArray(parsedCatalog)
    ) {
        addError(`${catalog.path}: root must be a JSON object keyed by snippet name`);
        continue;
    }

    for (const [snippetName, snippet] of Object.entries(parsedCatalog)) {
        if (snippet === null || typeof snippet !== "object" || Array.isArray(snippet)) {
            addError(`${catalog.path} > "${snippetName}": snippet definition must be an object`);
            continue;
        }

        if (!validateRequiredString(snippet, "prefix")) {
            addError(`${catalog.path} > "${snippetName}": missing or invalid "prefix"`);
            continue;
        }

        const prefix = snippet.prefix;

        if (!Array.isArray(snippet.body) || snippet.body.length === 0) {
            addError(`${catalog.path} > "${snippetName}": missing or invalid "body" (must be a non-empty array)`);
        } else if (!snippet.body.every((line) => typeof line === "string")) {
            addError(`${catalog.path} > "${snippetName}": invalid "body" (all entries must be strings)`);
        }

        if (!validateRequiredString(snippet, "description")) {
            addError(`${catalog.path} > "${snippetName}": missing or invalid "description"`);
        }

        if (!catalog.prefixValidator(prefix)) {
            addError(
                `${catalog.path} > "${snippetName}": invalid prefix "${prefix}" for ${catalog.label} catalog (expected ${catalog.expectedPrefix})`
            );
        }

        const existing = seenPrefixes.get(prefix);
        if (existing) {
            addError(
                `duplicate prefix "${prefix}" found in ${catalog.path} > "${snippetName}" and ${existing.catalogPath} > "${existing.snippetName}"`
            );
        } else {
            seenPrefixes.set(prefix, {
                catalogPath: catalog.path,
                snippetName,
            });
        }
    }
}

if (errors.length > 0) {
    console.error("Snippet validation failed:\n");
    errors.forEach((error, index) => {
        console.error(`${index + 1}. ${error}`);
    });
    process.exit(1);
}

console.log(`Snippet validation passed (${catalogs.length} catalogs, ${seenPrefixes.size} prefixes checked).`);
