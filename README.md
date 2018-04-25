# Vegan Cookbook

This is a **[netlify CMS](https://gatsby-netlify-cms.netlify.com/)** driven website, which is deployed by Netlify.
The design is my own, and it uses **[Gatsby](https://www.gatsbyjs.org/)** to generate static files using **[React](https://reactjs.org/)** and **[GraphQL](https://graphql.org/)** 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Installing

### Access Locally
```
$ git clone https://github.com/louMoxy/vegan-cookbook.git
$ cd vegan-cookbook
$ yarn 
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

If you are using windows, I personally found it easier to use npm install rather than yarn due to enviroment permissions with the Sharp plugin, it may take a bit longer but using npm should fix any issues. 

## Tests

Test to be added.... (hopefully)

## Deployment

Deployment is handled via netlify on the production branch

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
