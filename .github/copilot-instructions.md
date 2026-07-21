# Python Template Snippets

## Project structure

This is a declarative VS Code snippets extension, not a Python application. `package.json` registers all three snippet catalogs for the `html` language scope:

- `snippets/snippets.json`: syntax shared by Jinja2 and Django.
- `snippets/jinja-snippets.json`: Jinja2-only syntax.
- `snippets/django-snippets.json`: Django-only syntax.

The extension has no activation code. Changes to a snippet catalog take effect through the `contributes.snippets` entries in `package.json`.

## Snippet conventions

- Keep shared template syntax in `snippets/snippets.json`; add engine-specific syntax only to its matching Jinja or Django catalog.
- Snippet prefixes are intentionally namespaced: shared snippets use `pt`, Jinja snippets use `ptj-`, and Django snippets use `ptd-`.
- Each entry is keyed by a readable display name and defines `scope`, `prefix`, `body`, and `description`. All current snippets use `"scope": "html"`.
- Write `body` as an array of lines. Preserve VS Code snippet placeholders: numbered placeholders control tab order, repeated placeholder numbers mirror the same value, and `$0` is the final cursor position. Use `\t` for indentation and explicit `"\n"` elements for blank lines, following the existing catalog style.
- Update the README snippet reference when adding, removing, renaming, or changing a user-visible prefix or generated output.

## Commands

There are no npm scripts, automated tests, or lint configuration. The PR workflow mirrors these local validation commands:

```bash
# Install the locked packaging dependency
npm ci

# Validate all snippet catalogs parse as JSON
node -e "for (const f of ['snippets/snippets.json','snippets/jinja-snippets.json','snippets/django-snippets.json']) JSON.parse(require('fs').readFileSync(f, 'utf8'))"

# Build a VSIX package (also validates the extension manifest)
npx vsce package
```

`npx vsce package` creates a `.vsix` file in the repository root; it is ignored by Git. The PR workflow runs the same commands on Node.js 20, and the release workflow uses `npx vsce package` for tag publishes.

## Pull request checks

PRs should keep the snippet catalogs parseable and the package manifest valid. The CI workflow runs `npm ci`, JSON parsing for all three snippet catalogs, and `npx vsce package` on every pull request.

## Releases

Releases are triggered by pushing a `v*` tag. Before creating a release tag, keep the tag version exactly equal to `package.json`'s `version`; the workflow fails when they differ. It then packages and publishes the extension to the VS Code Marketplace and attaches the generated VSIX to the GitHub release.

Agents must not create releases or push tags. Both actions are maintainer-only responsibilities.

## Commit and pull request titles

Use Conventional Commits strictly for every commit message and pull request title (for example, `feat: add Django cycle snippet` or `fix: correct Jinja static URL placeholder`).
