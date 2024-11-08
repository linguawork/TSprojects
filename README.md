[Typescript image](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)

# Typescript Projects Repository

Every folder in this repository contains a standalone project written in TypeScript. Initially, I planned to use separate branches for each project but opted to organize them into folders instead, with a descriptive README for simplicity.

## Contents

- [Pre-Project 1: Basic Commands for a TypeScript Project](#pre-project-1-basic-commands-for-a-typescript-project)
- [Pre-Project 2: Introducing More Complex Commands and Snowpack](#pre-project-2-introducing-more-complex-commands-and-snowpack)
- [Project 1: Simple To-Do List](#project-1-simple-to-do-list)

---

## Pre-Project 1: Basic Commands for a TypeScript Project

This pre-project introduces the basic commands needed to start a small TypeScript project. All commands are documented in a text file within the folder.

### Running the Project
- **Run the project**: Use `npm start` inside the project folder.
- *Access the project*: Once started, open your browser and go to [http://localhost:5500/](http://localhost:5500/) to view the project.

---

## Pre-Project 2: Introducing More Complex Commands and Snowpack

This pre-project introduces additional commands and the use of Snowpack to manage JavaScript libraries, enabling more complex project structures. Commands are documented in a text file within the folder.

### Snowpack Setup
To create a Snowpack project, use the following commands:

```bash
npx create-snowpack-app . --template @snowpack/app-template-blank-typescript 
```
or (to force it in case ...):
```bash
npx create-snowpack-app . --template @snowpack/app-template-blank-typescript  --force 
```

Note: If the above command doesn’t work in the current directory, you can create a new project folder as follows:

```bash
cd ..
npx create-snowpack-app Pre-project2 --template @snowpack/app-template-blank-typescript
```

---
## Project 1: Simple To-Do List

This project is a basic to-do list application intended to help familiarize oneself with TypeScript after working with JavaScript.

Important Setup Details:
Dont forget to include src file in the script:

```html
<script src="./dist/index.js" type="module"></script>
```


Hidden "dist" folder: The dist folder, where the project’s production build is stored, may not be visible in the project directory during development. It will appear during the build process.

Optional JSON Cleanup: \
You may choose to delete the following entries in package.json, if not needed:

```json
"test": "echo \"This template does not include a test runner by default.\" && exit 1",
"format": "prettier --write \"src/**/*.ts,js\"",
"lint": "prettier --check \"src/**/*.ts,js\""
```

Clearing Git Cache: \
If Git mistakenly identifies a folder as a file after deleting a .git folder inside a project directory, clear the cache with:

```bash
git rm --cached -r .
```

TypeScript Configuration Error:\
To fix issues in tsconfig.json, consider adjusting the following settings:

```json
"importsNotUsedAsValues": "error",
"verbatimModuleSyntax": true
```

After cloning do not forget to re-install Snowpack dependences:
```bash
npm install snowpack --save-dev
npm start
```
