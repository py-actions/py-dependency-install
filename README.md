# py-actions/py-dependency-install GitHub Action

This GitHub Action installs Python package dependencies from a user-defined `requirements.txt` file path with `pip`, `setuptools`, and `wheel` installs/updates during execution.  A Python package environment report is displayed at the end of Action execution.

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

## Example usage

### Default

Uses path `requirements.txt` and updates `pip` before the install.

```yaml
- name: Install Python dependencies
  uses: py-actions/py-dependency-install@v2
```

### Disable `pip` update before install

```yaml
- name: Install Python dependencies
  uses: py-actions/py-dependency-install@v2
  with:
    update-pip: "false"
```

### Toggle `pip`, `setuptools`, and `wheel` installs/updates off

```yaml
- name: Install Python dependencies
  uses: py-actions/py-dependency-install@v2
  with:
    update-pip: "false"
    update-setuptools: "false"
    update-wheel: "false"
```

## License

[Apache License, v2.0](LICENSE)
