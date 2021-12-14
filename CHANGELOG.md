# Changelog

## v3.0.0

- add cPython 3.10.x interpreter support
- drop cPython 3.6.x interpreter support
- remove pypy3 interpreter CI tests (appears to be a bug in the actions/setup-python pypy3 install pipeline at the moment)
- update eslint-plugin-import to ^2.25.3
- update eslint-plugin-jsx-a11y to ^6.5.1
- update eslint-plugin-prettier to ^3.4.1
- update eslint-plugin-promise to ^4.3.1
- update eslint-plugin-react to ^7.27.1
- update jest to ^27.4.5

## v2.1.0

- add cPython 3.9 interpreter CI testing
- add daily cron schedule CI testing
- update @actions/core dependency to v1.2.6
- update @zeit/ncc dependency to v0.22.3
- update eslint-config-airbnb-base dependency to v14.2.1
- update eslint-plugin-import dependency to v2.22.1
- update eslint-plugin-jsx-a11y dependency to v6.4.1
- update eslint-plugin-prettier dependency to v3.1.4
- update eslint-plugin-react dependency to v7.21.5
- update jest dependency to v26.6.3

## v2.0.2

- add Quick Start section at the front of the docs
- expand documentation examples
- fix documentation of defaults in Action yaml file
- add cross-platform CI testing

## v2.0.1

- expand documentation with examples of non-default `requirements.txt` file paths and optional install toggle definitions in the Action configuration

## v2.0.0

- install/upgrade wheel by default (with option to toggle off)
- install/upgrade setuptools by default (with option to toggle off)
- refactor order of wheel install relative to other packages so that wheels can be built of all packages, including pip/setuptools

## v1.0.3

Auto-updated during Action execution when you use the `v1` action tag

- Add `name` field in the Action documentation

## v1.0.2

Auto-updated during Action execution when you use the `v1` action tag

- Minor documentation update

## v1.0.1

Auto-updated during Action execution when you use the `v1` action tag

- Minor documentation update

## v1.0.0

Auto-updated during Action execution when you use the `v1` action tag

- Initial release
