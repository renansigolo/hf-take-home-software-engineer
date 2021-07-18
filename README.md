# Hello Fresh Take Home Application

This application uses [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) to render the Frontend of the Take Home Application.

## About

Create a take home single-page application (SPA) which allows to manage weekly menu and associated recipies.

## Features

Context

- A weekly menu contains a set of recipies. Each week different set of recipies are selected. See example menu for this week.
- A recipe contains ingredients, step-by-step instructions, nutirtional information, classification, and other metadata. See examples recipes here 1, 2, 3.
- A customer can review weekly menu as well as recipe by assigning ratings and/or adding comments.

## Contributing

For contributing to this project please read through our contributing guidelines to learn about our submission process, coding rules and more.

Open issues, bugs, and feature requests are all listed on the issues tab and labeled accordingly. Feel free to open bug tickets and make feature requests.

View [CONTRIBUTING.md](CONTRIBUTING.md) to learn about the style guide, scripts, and how to contribute.

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework

## Dev tools

- [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
- [Husky](https://github.com/typicode/husky.git) - Git hooks made easy.
- [NPM](https://www.npmjs.com/) - Build amazing things.
- [Cypress](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser.

## Contributors

- [Renan Sigolo](https://github.com/renansigolo)

## License

- This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## TODO

1. Create a single-page application (SPA) which allows an end user

   1.1 create/<s>read</s>/update/<s>delete</s> recipies. Render recipies as paginated list, display a selected data points.

   1.2 create/read/update/delete weekly menu. Render weekly menu as paginated list (typically 52 weeks in a year).

   1.3 assign recipies to weekly weekly menu

<s>2. You can use mock data or APIs, else you create REST/GraphQL endpoints</s>

3. Write a few unit tests and <s>end-to-end tests</s> for components

<s>4. Write CI/CD pipeline using Github action and deploy app to Github Pages</s>

5. Bonus point if you add Google Authentication and protect routes.
