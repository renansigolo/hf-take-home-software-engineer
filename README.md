# Hello Fresh Take Home Application

This application uses [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) to render the Frontend of the Take Home Application.

## About

Create a take home single-page application (SPA) which allows to manage weekly menu and associated recipies available at [hf.renansigolo.com](https://hf.renansigolo.com) or [hf-take-home-software-engineer.vercel.app](https://hf-take-home-software-engineer.vercel.app)

## Getting Started

## Install

In order to get the code up and running use `npm install` to install the dependencies necessary for this project.

### Local Development

To test the application locally run

```bash
npm run all
```

### Testing

Running tests with Cypress is easy as running

```bash
npm test
```

To simulate a production environment use

```bash
npm run build

npm start
```

### Deploying

To deploy the application just push the code to github and a new environment will be automatically created by vercel and an integrated CI will test the code with cypress for eventual errors.

In order to **deploy to production** make a pull request to merge the code to the **main branch**.

> Before deploying to production make sure to run `npm run lint` to check the code for any issues.

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Vercel](https://vercel.com/) - Hosting
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework
- [Node.js](https://nodejs.org/en/) & [Express](https://expressjs.com/) - Backend
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/) - Hosting MongoDB in the cloud with MongoDB Atlas

## Dev tools

- [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
- [NPM](https://www.npmjs.com/) - Build amazing things.
- [Cypress](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser.

## Contributors

- [Renan Sigolo](https://github.com/renansigolo)

## License

- This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
