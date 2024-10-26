# `setup-rearm-cli`

## About
This action, sets up the RelizaHub CLI, [`rearm-cli`](https://github.com/relizaio/rearm-cli), on GitHub's hosted Actions runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `rearm-cli` CLI on the runner environment.

## Usage

Setup the `rearm-cli` CLI:

```yaml
steps:
- uses: relizaio/setup-rearm-cli@1.0
```

A specific version of the `rearm-cli` CLI can be installed:

```yaml
steps:
- uses: relizaio/setup-rearm-cli@1.0
  with:
    version:
      2022.12.5
```

## Inputs
The actions supports the following inputs:

- `version`: The version of `rearm-cli` to install, defaulting to `2022.12.5`

## Compile
use ncc to compile
```
ncc build index.js
```
