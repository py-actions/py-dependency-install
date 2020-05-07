# py-actions/py-dependency-install GitHub Action

This GitHub Action installs Python package dependencies from a user-defined `requirements.txt` file path with optional `pip`, `setuptools`, and `wheel` installs/updates during execution.

## Inputs

### `path`

**Optional** The `requirements.txt` file path relative to the root of your source repository. Default = `"requirements.txt`.

### `update-pip`

**Optional** A boolean string indicating that a `pip` package update should occur before the dependency installation. Options: [`"true"`, `"false"`].  Default=`"true"`

### `update-setuptools`

**Optional** A boolean string indicating that a `setuptools` package update should occur before the dependency installation. Options: [`"true"`, `"false"`].  Default=`"false"`

### `update-wheel`

**Optional** A boolean string indicating that a `wheel` package update should occur before the dependency installation. Options: [`"true"`, `"false"`].  Default=`"false"`

## Outputs

None

## Example usage

### Default

Uses path `requirements.txt` and updates `pip` before the install.

```yaml
uses: py-actions/py-dependency-install@v1
```

### Disable `pip` update before install

```yaml
uses: py-actions/py-dependency-install@v1
with:
  update-pip: "false"
```

### Configure `setuptools` and `wheel` installs/updates

```yaml
uses: py-actions/py-dependency-install@v1
with:
  update-pip: "true"
  update-setuptools: "true"
  update-wheel: "true"
```

## License

[Apache License, v2.0](LICENSE)