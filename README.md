# CODEGRANITES | FRONTEND

## Table of Contents ✨

- [Description](#description)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- [Merging](#merging)
- [API](#api)

# Description

Revolutionary insights and Productivity

# Installation

First, run:

```bash
npm install
```

To activate husky(If needed)

```bash
npm run prepare
```

Then run:

```bash
npm run dev
```

# Dependencies

- Husky(Anti Beans)
- Prettiersky(Anti Beans)
- React Icons
- React Toastify(for any alert or toast)
- Tailwindcss
- Sass
- Tw-merge + clsx(for conditional classes)

# Usage

## FONT

- Work Sans ---> usage "font-Worksans"

## Dev Server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Contributing

CodeGranite is open to contributions, but I recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

## Contribution Guidelines

3. Pull origin `git pull origin dev`

4. Create a new branch for the task you were assigned to, eg `Assigned page - Name` : `git checkout -b Vxrcel`

5. After making changes, format codes with `npm run format`

6. Then stage your files `git add .`

7. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.

8. IMPORTANT: To make sure there are no conflicts, run `git pull origin dev`.

9. Push changes to your new branch, E.g: run `git push -u origin Vxrcel`.

10. Create a pull request to the `dev` branch not `main`.

11. Ensure to describe your pull request.

12. > If you've added code that should be tested, add some test examples.

# Merging

Under no circumstances should you merge a pull requests on a specific branch to the `dev` or `main` branch

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify , frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the , frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.

# API

A separate folder called `api` is created withing the app folder here, to make an **API** Call:

- create a new folder within the `app/api` dir
- within the created folder create a `route.ts` file
- within the `route.ts` file you make either a **GET** or **POST** Request

> ❗❗Do not create any custom http calls inside a components. Whatever calls that need to be processed by the server should be called within the `route.ts` file.
