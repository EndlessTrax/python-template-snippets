# Python Template Snippets

This VS Code snippet extension includes snippets for both the Jinja2 and Django template engines.

Quickly add snippets to HTML template files in your project. 

If there is a snippet that is not included in this extension, please open an issue on the [repo here](https://github.com/EndlessTrax/python-template-snippets).

## Setup

Just hit install!

If installing this extension directly from the repo, copy it into your local `<user home>/.vscode/extensions` folder and restart VS Code.

Works best with `editor.tabCompletion` enabled (`on`) in your VS Code `Settings`.

## Usage

Simply type `pt` to start using any of the snippets. The full documentation is below.

This extension works best with `editor.tabCompletion` enabled (`on`) in your VS Code `Settings`.

## Changelog

The full changelog can be found [here](CHANGELOG.md).

## Documentation

See the tables below for general, jinja, django snippets. The `*` denotes where the cursor will start so you can start typing your variables etc. straight the way without wasting key strokes! A `*2` denotes the second position upon hitting the `tab` key again.

### General Snippets

Prefix | Output
-------|-------
ptnew | Creates a simple base template for any Jinja/Django HTML file
ptvar | {{ `*` }}
ptfilt | {{ `* | *2` }}
ptcode | {% `*` %}
ptblock | {% block `*` %} {% endblock `*` %}
ptext | {% extends ' `*` ' %}
ptsup | {{ `super()` }}
ptfor | Adds a `for` loop block
ptif | Adds an `if` statement block
ptifel | Adds an `if/else` statement block
ptelif | Adds an `if/elif/else` statement block
ptwith | Adds a `with` statement block

### Jinja Specific Snippets

Prefix | Output
-------|-------
ptj-url | {{ url_for('static', filename=' `*` ') }}
ptj-mac | {% macro `*` %} {% endmacro %}

### Django Specific Snippets

Prefix | Output
-------|-------
ptd-url | {% url ' `*` ' `*2` %}
ptd-load | {% load `*` %}
ptd-stat | {% static ' `*` ' %}
ptd-inc | {% include ' `*` ' %}

## Release Notes

### 1.1

- Extra Snippet added. See the [Changelog](https://github.com/EndlessTrax/python-template-snippets/blob/master/CHANGELOG.md)

### 1.0.0

- Initial release! Yay me!

---

This snippet was authored by [Ricky White](https://rickywhite.net/), and is an open-source extension. Please help to improve this by [submitting issues here](https://github.com/EndlessTrax/python-template-snippets/issues).

**Happy Coding!**
