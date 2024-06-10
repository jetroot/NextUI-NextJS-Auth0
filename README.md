This project is a simple single-page application with support for both dark and light themes. It's built using [Next.js](https://nextjs.org/) and utilizes the styling framework [TailWind](https://tailwindcss.com/), as well as components from [NextUI](https://nextui.org/), [SWR](https://swr.vercel.app/) React Hook for fetching data and authentication services provided by [Auth0](https://auth0.com/).

Also it is preconfigured with Prettier + Eslint + Husky for formatting and linting.

![screen shot 1](/public/sc_1.png)

## Install

First, install Prettier:

```bash
npm install --save-exact -D prettier prettier-plugin-tailwindcss eslint-config-prettier eslint-plugin-prettier
```

`--save-exact`: This flag tells npm to save the exact versions of the installed packages in the package.json file, rather than using version ranges. It ensures that the same versions are installed when others use your project.

`-D`: This flag specifies that the listed packages should be saved as development dependencies. These are packages required during development but not needed for production.

`prettier`: This is the core Prettier package, which is a code formatter that helps maintain consistent code style across your project.

`prettier-plugin-tailwindcss`: This is a Prettier plugin specifically designed to format Tailwind CSS code.

`eslint-config-prettier`: This package disables all ESLint rules that are unnecessary or might conflict with Prettier. It's typically used to ensure ESLint and Prettier work together seamlessly.

`eslint-plugin-prettier`: This ESLint plugin runs Prettier as an ESLint rule and reports differences as ESLint issues. It helps ensure code consistency by integrating Prettier into ESLint workflows.

## Configure ESLint 🔗

- By default, Next.JS comes with ESLint preconfigured when create a Next.JS project.
- You can customize eslint as you wish in `eslintrc.json` file.

## Configure Prettier 🦋

- You can customize the rules of prettier in `.prettierrc` file.

## Install NextUI

- Check this documentation [NextUI Docs](https://nextui.org/docs/frameworks/nextjs).

## Configure Auth0

There are a couple of steps you need to take to implement Auth0 in your project. but in our case we have implemented Auth0, so the only thing you need to do is to create a `.env` file and copy .env variables from `.env.example` file to your `.env` file you just created and make sure to get those variables from your Auth0 account.

## What is required ?

The only thing is required here is `Configure Auth0` step, sure if you want to use Authentication feature from Auth0. All the other steps i just wrote them here just in case you want to add them to your project, `THEY ARE NOT REQUIRED HERE` to run the project.

Have a nice day!
