# miniProjectsTS
Every folder in this repo contains a project in Typescript.
(Initially I thought to push a project into every branch of the repo, but decided to place them just into folders and make a descriptive README. This way it is simpler.)

Pre-project 1:
The main idea here is to introduce basic commands to start a small TS project.
All the commands are written in a txt file. 

    P.S:
    npm start in the folder of the project, not outside. 
    When the page opens go to the directory: http://localhost:5500/*/


Pre-project 2:
The main idea of the project to introduce other commands that can help to create a more complex project including JS libraries. 
Here Snowpack bundle is used. All the commands are written in a txt file. 

    (
        npx create snowpack-app  . --template @snowpack/app-template-blank-typescript --force

        #if it does start inside a folder with . , you may cd .. and create a project with a new folder:
        npx create-snowpack-app Pre-project2 --template @snowpack/app-template-blank-typescript
    )



Project 1: 
A simple to-do list. The main purpose is to get used to coding in TS style after JS. 

In html file dont forget to include the right src file inside script tag.
 <script src="./dist/index.js" type="module" ></script> 
You will not see the dist folder in the project folder in the developer's mode. It is hidden.
It will appear during build into production. 

You may delete in JSON the start options:
"test": "echo \"This template does not include a test runner by default.\" && exit 1",
"format": "prettier --write \"src/**/*.{ts,js}\"",
"lint": "prettier --check \"src/**/*.{ts,js}\""


If GIT sees a folder as a file especially after deleting .git inside a project folder, it is recommended to clear the git cache. 

Some error to fix inside tsconfig.json:
    // "importsNotUsedAsValues": "error",
    "verbatimModuleSyntax": true,





