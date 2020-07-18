## React Odoo Template

React Odoo Template is a webpack config that makes using React inside Odoo possible 

### Get Started

First install [nodejs](https://github.com/nvm-sh/nvm) (using nvm)

Next clone the project and install dependencies
```
git clone https://github.com/honohunter/react-odoo-template.git <your-project-name>
cd <your-project-name> 
npm install
```

### Setup

1. Open `package.json` and change the `name` of the project by your `<your-project-name>`.

2. In the same file `package.json` change the path where the content of dist folder would be copied to `"copy": "cpx 'dist/**' ../<path/to/module>/static/js/lib/"`.

3. Open `.env` and change the `ODOO_HOST`, `ODOO_PORT` and `ODOO_MODULE_NAME`.

4. Finally run one of the following commands to start using React with odoo `npm run dev` or `npm run dev-odoo` (to see the difference check [this](https://link)).

### What's inside?

A quick look at the top-level files and directories you'll see in this project

    .
    ├── src
        ├── api
        ├── assets
        ├── components
        ├── containers
        ├── features
        ├── store
        ├── themes
        ├── app.jsx
        ├── index.html
        ├── index.jsx
        ├── index.scss
    ├── .babelrc.js
    ├── .env
    ├── .eslintignore
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── jsconfig.json
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── webpack.common.js
    ├── webpack.dev.js
    ├── webpack.dev.odoo.js
    ├── webpack.prod.js


1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) 
such as your site header or a page template. `src` is a convention for “source code” (we will dive deep in this folder structure [here](https://link)).

2.  **`.babelrc.js`**: This is a configuration js file for [Babel](https://babeljs.io/). Babel is a toolchain that is mainly used to convert ECMAScript 2015+ 
code into a backwards compatible version of JavaScript in current and older browsers or environments.

3. **`.env`**: This file contain nodejs custom [environment variables](https://github.com/motdotla/dotenv#readme).

4. **`.eslintignore`**: (See `.eslintrc.js` below, first). This file tells eslint which files it should not lint.

5. **`.eslintrc.js`**: This is a configuration js file for [ESLint](https://eslint.org/). ESLint is an open source JavaScript linting utility which is a
type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines.

5. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7. **`.jsconfig.json`**: (Optional). This file used by specifies the root files and the options for the features provided by the [JavaScript language service](https://github.com/microsoft/TypeScript/wiki/JavaScript-Language-Service-in-Visual-Studio).

8. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. 
**(You won’t change this file directly).**

10. **`README.md`**: A text file containing useful reference information about your project.

11. **`webpack.common.js`**: This is a common configuration file for [Webpack](https://webpack.js.org/) (used in all of the environments which they: production, development, and odoo development)(check [this](https://link)).
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

12. **`webpack.dev.js`**: This file contains a special configuration used in [development](https://link) environment .

13. **`webpack.dev.odoo.js`**: This file contains a special configuration used in [Odoo development](https://link) environment .

14. **`webpack.prod.js`**:  This file contains a special configuration used in [production](https://link) environment .

