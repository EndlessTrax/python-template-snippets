<div align="center">
  <img src="logo.png" alt="Python Template Snippets Logo" width="200"/>
  
  # Python Template Snippets

  ✨ **Supercharge your template development workflow** ✨

  A comprehensive VS Code snippet collection for **Jinja2** and **Django** template engines.

  [![GitHub stars](https://img.shields.io/github/stars/EndlessTrax/python-template-snippets?style=social)](https://github.com/EndlessTrax/python-template-snippets)
  [![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue?logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=RickyWhite.python-template-snippets)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## 🚀 Why Use This Extension?

Writing template code can be tedious with all those brackets, tags, and syntax. This extension eliminates the repetitive typing by providing **smart, tab-completion snippets** for common Jinja2 and Django template patterns.

**Stop typing this:**
```html
{% for item in items %}
  <!-- your code -->
{% endfor %}
```

**Start typing this:**
```
ptfor → Tab → Fill in the blanks!
```

### ✨ Features

- 🎯 **20+ carefully crafted snippets** for Jinja2 and Django
- ⚡ **Lightning-fast** - Type `pt` prefix and let IntelliSense do the rest
- 🎨 **Smart cursor positioning** - Jump to exactly where you need to type
- 🔄 **Multi-cursor support** - Tab between placeholders seamlessly
- 🛠️ **Framework-agnostic** - Works with Flask, Django, FastAPI, and any Python web framework
- 📦 **Zero configuration** - Works out of the box

---

## 📦 Installation

### From VS Code Marketplace (Recommended)

1. Open VS Code
2. Press `Ctrl+P` / `Cmd+P`
3. Type `ext install RickyWhite.python-template-snippets`
4. Press Enter and reload VS Code

### Manual Installation

1. Download the latest `.vsix` from [Releases](https://github.com/EndlessTrax/python-template-snippets/releases)
2. Open VS Code
3. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
4. Click the `...` menu → `Install from VSIX`
5. Select the downloaded file

---

## 🎯 Quick Start

1. Open any HTML file in VS Code
2. Type `pt` to see available snippets
3. Select a snippet from the IntelliSense menu (or type the full prefix)
4. Press `Tab` to trigger the snippet
5. Fill in the placeholders and press `Tab` to jump between them

### 💡 Pro Tip
Enable tab completion in your VS Code settings for the best experience:
```json
{
  "editor.tabCompletion": "on"
}
```

---

## 📚 Snippet Reference

All snippets use the `pt` prefix (short for "Python Template"). Here's the complete reference:

### 🌐 General Snippets
*Works with both Jinja2 and Django*

| Prefix | Description | Output |
|--------|-------------|---------|
| `ptnew` | New HTML template file | Complete template with extends and blocks |
| `ptvar` | Template variable | `{{ variable }}` |
| `ptfilt` | Variable with filter | `{{ variable \| filter }}` |
| `ptcode` | Code block tag | `{% code %}` |
| `ptcom` | Comment | `{# comment #}` |
| `ptblock` | Block tag | `{% block name %}...{% endblock %}` |
| `ptext` | Extends tag | `{% extends 'base.html' %}` |
| `ptsup` | Super function | `{{ super() }}` |
| `ptfor` | For loop | `{% for item in items %}...{% endfor %}` |
| `ptif` | If statement | `{% if condition %}...{% endif %}` |
| `ptifel` | If/else statement | `{% if %}...{% else %}...{% endif %}` |
| `ptelif` | If/elif/else statement | `{% if %}...{% elif %}...{% else %}...{% endif %}` |
| `ptwith` | With statement | `{% with variable %}...{% endwith %}` |

### 🔧 Jinja2-Specific Snippets
*For Flask, FastAPI, and other Jinja2 projects*

| Prefix | Description | Output |
|--------|-------------|---------|
| `ptj-url` | Static file URL | `{{ url_for('static', filename='file.css') }}` |
| `ptj-mac` | Macro definition | `{% macro name %}...{% endmacro %}` |
| `ptj-set` | Set variable | `{% set var = value %}` |

### 🎨 Django-Specific Snippets
*For Django projects*

| Prefix | Description | Output |
|--------|-------------|---------|
| `ptd-url` | URL tag | `{% url 'view-name' args %}` |
| `ptd-load` | Load tag library | `{% load static %}` |
| `ptd-stat` | Static file | `{% static 'path/to/file' %}` |
| `ptd-inc` | Include template | `{% include 'template.html' %}` |
| `ptd-firstof` | First of variables | `{% firstof var1 var2 %}` |

---

## 💻 Usage Examples

### Creating a New Template

Type `ptnew` and press Tab:

```html
{% extends 'base.html' %}

{% block content %}
  <!-- Your cursor starts here -->
{% endblock content %}

{% block scripts %}
{% endblock scripts %}
```

### Adding a For Loop

Type `ptfor` and press Tab:

```html
{% for item in items %}
  <!-- Your cursor starts here -->
{% endfor %}
```

Then tab through: `item` → `items` → loop body

### Django Static File

Type `ptd-stat` and press Tab:

```html
{% static 'css/style.css' %}
```

---

## 🤝 Contributing

Found a bug? Want a new snippet? Contributions are welcome!

1. **Report Issues**: [Open an issue](https://github.com/EndlessTrax/python-template-snippets/issues)
2. **Request Features**: Have an idea? Share it!
3. **Submit PRs**: Fork, code, and submit a pull request

### Continuous Integration

Every pull request runs a small validation suite on Node.js 20:

1. `npm ci`
2. Parse all snippet catalogs as JSON
3. `npx vsce package`

If you want to mirror CI locally before opening a PR, run the same commands from the repository root.

### Suggesting New Snippets

When requesting a new snippet, please include:
- The template syntax you want added
- Which framework it's for (Jinja2/Django/both)
- A brief description of what it does

---

## 📝 Release Notes

See [GitHub Releases](https://github.com/EndlessTrax/python-template-snippets/releases) for the detailed version history and changelog.

---

## 💖 Support This Project

This extension is free and open source. If you find it helpful, consider:

- ⭐ [Starring the repo](https://github.com/EndlessTrax/python-template-snippets)
- 💰 [Sponsoring on GitHub](https://github.com/sponsors/EndlessTrax)
- 🐦 [Sharing on social media](https://twitter.com/intent/tweet?text=Check%20out%20Python%20Template%20Snippets%20for%20VS%20Code!&url=https://github.com/EndlessTrax/python-template-snippets)
- 📝 [Writing a review](https://marketplace.visualstudio.com/items?itemName=RickyWhite.python-template-snippets&ssr=false#review-details)

---

## 📜 License

MIT © [Ricky White](https://github.com/EndlessTrax)

---

## 🙏 Acknowledgments

Created and maintained by [Ricky White](https://twitter.com/endlesstrax)

Special thanks to all [contributors](https://github.com/EndlessTrax/python-template-snippets/graphs/contributors) who have helped improve this extension!

---

<div align="center">

**Happy Coding! 🎉**

Made with ❤️ for the Python community

</div>
