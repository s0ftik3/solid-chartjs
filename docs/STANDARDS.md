<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-chartjs&background=tiles&project=%20" alt="solid-chartjs">
</p>

# Standards Guide

Listed here are the standards that are used for the Solid-ChartJS project. These standards are used to ensure that the project is consistent and easy to understand.

## Table of Contents

- [Standards Guide](#standards-guide)
  - [Table of Contents](#table-of-contents)
  - [Code Standards](#code-standards)
    - [General](#general)
    - [Git Commit Style](#git-commit-style)

## Code Standards

### General

It is by design that we use a light wrapper around the Chart.js library, we prefer to have no deep-linking into the Chart.js library. This is to ensure that we can easily update the Chart.js library without having to update the Solid-ChartJS library.

We have only a few rules for the documentation site:

- All code should be written in English.
- All code should be written in a way that is easy to understand.
- All code should be written in a way that is easy to maintain.
- All code should be written in a way that is easy to extend.
- Our git commit style is to be followed, in english only.

### Git Commit Style

We use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for our git commit style. This is to ensure that our git commits are easy to understand and easy to maintain. This is also to ensure that our git commits are easy to extend.

Git commits are used to with the [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) tool to automatically generate the changelog and versioning for the project. As such, it is important that we follow the Conventional Commits standard, with our own rule customizations.

The following is a list of the customizations that we have made to the Conventional Commits standard:

- We use the `BREAKING CHANGE(S)` or `BREAKING` text to indicate a breaking change.

Our git commit style is as follows:

```bash
<type>[(<type>-optional scope)]: <description>

[optional body]

[optional footer(s)]
```

The following is a list of the types that we use:

- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation only changes.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing or correcting existing tests.
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm, yarn, actions).
- `ci`: Changes to our CI configuration files and scripts (example scopes: GH-Actions, yml, YAML).
- `chore`: Other changes that don't modify src or test files.
- `revert`: Reverts a previous commit.
- `BREAKING CHANGE`: Indicate a breaking change.
- `no-release`: This commit will not trigger a release.

An example of our git commit style is as follows:

> **Note**: Scopes are optional, and are not required. They only need to be used when it makes sense to use them to provide more context to the commit.

```bash
feat(feat-SomeScope): add a new feature # commit message
# empty space, this is required
- added new thing # commit details (optional but recommended if commit message is not enough)
# empty space, this is required
BREAKING CHANGE: this is a breaking change # breaking change (optional but recommended if commit breaks previous functionality)
```

An example of our git commit style without a scope is as follows:

```bash
feat: add a new feature # commit message
- added new thing # commit details (optional but recommended if commit message is not enough)
# empty space, this is required
BREAKING CHANGE: this is a breaking change # breaking change (optional but recommended if commit breaks previous functionality)
```

[Top](#standards-guide)
