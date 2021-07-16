# Contributing

# Contribution Guidelines

TakeNote is an open source project, and contributions of any kind are welcome and appreciated. Open issues, bugs, and enhancements are all listed on the [issues](https://github.com/renansigolo/hf-take-home-software-engineer/issues) tab and labeled accordingly. Feel free to open bug tickets and make feature requests. Easy bugs and features will be tagged with the `good first issue` label.

## Issues

If you encounter a bug, please file a bug report. If you have a feature to request, please open a feature request. If you would like to work on an issue or feature, there is no need to request permission. Please add tests to any new features.

## Pull Requests

In order to create a pull request, follow the GitHub instructions for [Creating a pull request from a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Please link your pull request to an existing issue.

## Scripts

An explanation of the `package.json` scripts.

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `dev`           | Run HelloFresh in a development environment |
| `dev:test`      | Run HelloFresh in a testing environment     |
| `client`        | Start a webpack dev server for the frontend |
| `server`        | Start a nodemon dev server for the backend  |
| `build`         | Create a production build of HelloFresh     |
| `start`         | Start a production server for HelloFresh    |
| `test`          | Run unit and component tests                |
| `test:e2e`      | Run end-to-end tests in the command line    |
| `test:e2e:open` | Open end-to-end tests in a browser          |
| `test:coverage` | Get test coverage                           |

## Technologies

This project is possible thanks to all these open source languages, libraries, and frameworks.

| Tech                               | Description                  |
| ---------------------------------- | ---------------------------- |
| [React](https://reactjs.org/)      | Front end user interface     |
| [Webpack](https://webpack.js.org/) | Asset bundler                |
| [ESLint](https://eslint.org/)      | TypeScript linting           |
| [Jest](https://jestjs.io/)         | Unit testing framework       |
| [Cypress](https://www.cypress.io/) | End-to-end testing framework |

## Styleguide

Coding conventions are enforced by [ESLint](.eslintrc.js) and [Prettier](.prettierrc) with the [Nextjs](.prettierrc)

- No semicolons
- Single quotes
- Two space indentation
- Trailing commas in arrays and objects
- [Non-default exports](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/) are preferred for components
- Module imports are ordered and separated: **built-in** -> **external** -> **internal** -> **css/assets/other**
- TypeScript: strict mode, with no implicitly any
- React: functional style with Hooks (no classes)
- `const` preferred over `let`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
