# py-actions/py-dependency-install GitHub Action

![Version](https://img.shields.io/github/v/release/py-actions/py-dependency-install?sort=semver)
[![Linux CI](https://github.com/py-actions/py-dependency-install/workflows/Linux%20CI/badge.svg)](https://github.com/py-actions/py-dependency-install/actions?query=workflow%3A%22Linux+CI%22)
[![macOS CI](https://github.com/py-actions/py-dependency-install/workflows/macOS%20CI/badge.svg)](https://github.com/py-actions/py-dependency-install/actions?query=workflow%3A%22macOS+CI%22)
[![Windows CI](https://github.com/py-actions/py-dependency-install/workflows/Windows%20CI/badge.svg)](https://github.com/py-actions/py-dependency-install/actions?query=workflow%3A%22Windows+CI%22)
[![Lint](https://github.com/py-actions/py-dependency-install/workflows/Lint/badge.svg)](https://github.com/py-actions/py-dependency-install/actions?query=workflow%3ALint)
[![CodeQL](https://github.com/py-actions/py-dependency-install/actions/workflows/codeql.yml/badge.svg)](https://github.com/py-actions/py-dependency-install/actions/workflows/codeql.yml)

This GitHub Action installs Python package dependencies from a user-defined `requirements.txt` file path with `pip`, `setuptools`, and `wheel` installs/updates during execution.  A Python package environment report is displayed at the end of Action execution.

This Action is tested nightly with cPython v3.8.x - v3.11.x in the latest Linux, macOS, and Windows GitHub Actions runner environments.

## Quick Start

Insert a dependency installation step under the `steps:` field in a GitHub workflow job with a configuration like this:

### Default

Uses path `requirements.txt` and updates `pip`, `setuptools`, and `wheel` before the install.

```yaml
steps:
  # this Action should follow steps to set up Python build environment
  - name: Install Python dependencies
    uses: py-actions/py-dependency-install@v4
```

### Define the `requirements.txt` path

Define a requirements.txt file on a path relative to the root of your repository.

```yaml
steps:
  # this Action should follow steps to set up Python build environment
  - name: Install Python dependencies
    uses: py-actions/py-dependency-install@v4
    with:
      path: "path/to/requirements.txt"
```

### Toggle `pip`, `setuptools`, and `wheel` installs/updates off

The `pip`, `setuptools`, and `wheel` install/updates can be toggled off in your configuration. Use one or more of the `update-pip`, `update-setuptools`, and `update-wheel` settings with a boolean string to customize the default behavior:

```yaml
steps:
  # this Action should follow steps to set up Python build environment
  - name: Install Python dependencies
    uses: py-actions/py-dependency-install@v4
    with:
      update-pip: "false"
      update-setuptools: "false"
      update-wheel: "false"
```

## Inputs

### `path`

**Optional** The `requirements.txt` file path relative to the root of your source repository. Default = `"requirements.txt"`.

### `update-pip`

**Optional** A boolean string indicating that a `pip` package update should occur before the dependency installation. Options: [`"true"`, `"false"`].  Default=`"true"`

### `update-setuptools`

**Optional** A boolean string indicating that a `setuptools` package update should occur before the dependency installation. Options: [`"true"`, `"false"`].  Default=`"true"`

### `update-wheel`

**Optional** A boolean string indicating that a `wheel` package update should occur before the dependency installation. Options: [`"true"`, `"false"`].  Default=`"true"`

## Outputs

None

## License

[Apache License, v2.0](LICENSE)
