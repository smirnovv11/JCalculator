# TASK

Task: [https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit#heading=h.5dt3hghpa22f](#)

# HOW TO RUN

### Eng:

1. After cloning the repository, install all dependencies by running: `npm i`
2. Build the project with: `npm run build`
    - The final optimized version of the application will be located in the dist folder at the root of the repository.
3. Open `index.html` from the `dist` folder.

### Rus:

1. После клонирования репозитория, установите все зависимости командой: `npm i`
2. Соберите приложение командой: `npm run build`

    - Готовая версия будет находиться в папке `dist` в корне репозитория.

3. Запустите файл `index.html` из папки `dist`.

## FILE STRUCTURE

-   **dist/**: Contains the optimized build of the application.
    -   `bundle.js`: Bundled JavaScript file.
    -   `index.html`: Entry point of the application.
-   **node_modules/**: Dependencies installed via npm.

-   **src/**: Source files of the project.

    -   **images/**: Stores image assets.

        -   `icon.png`: Application icon.

    -   **modules/**: Contains JavaScript modules.
        -   `calculator.js`: Handles calculator logic.
        -   `facts.js`: Displays fun facts.
        -   `theme.js`: Manages themes and styles.
        -   `index.js`: Main entry point for app logic.
    -   `style.css`: Main stylesheet for the application.
    -   `index.html`: Development HTML file for testing before bundling.

-   **.gitignore**: Specifies files to be ignored by Git.
-   **.prettierrc**: Configuration for Prettier code formatting.
-   **eslint.config.mjs**: ESLint configuration for linting JavaScript.
-   **package.json**: Project metadata and dependencies.
-   **package-lock.json**: Locks npm dependencies versions.
-   **README.md**: The current file with project instructions.
-   **webpack.config.js**: Webpack configuration file.
