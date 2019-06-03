<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's starter for Origen Studio
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

## 🚀 Quick start

1.  **Clone the project repo**

    You don't have to work on the original repo. You have to create a new one for each project. 
    
    If it hasn't been created for the project you are about to start check step TBD-WIP. 

    If it has been created you have to clone the project repo. You can use a git GUI tool such as GitKraken or the `git clone {project url}` command.

1.  **Install dependencies.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-new-project/
    yarn install
    ```

1.  **Run de development environment**

    ```sh
    yarn develop
    ```
    You can also use 
    ```sh
    yarn develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-new-project` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## ⚙️ Starter Configuration

Common parts for the configurations are tagged with the comment `GatsbyStarterConfig:`, followed by a short description of the configuration. That way it is easy to see where every piece of configuration is.

### Configuration CheckList
- [ ] Gitlab branches config
- [ ] Prismic project created
- [ ] CI / CD
  - [ ] Gitlab notifications
  - [ ] Netlify deploys
  - [ ] Netlify notifications
  - [ ] Prismic Release lambda function configured
  - [ ] Cloudflare purging configuration

### Gitlab

The project repository will likely to stored in Gitlab. If stored on another service ask the ask the admins.

For the right use of git and additional configurations the repository requires at least 2 branches: `master` & `develop`.

1. *Create basic branches*: ensure `master` & `develop` are created, otherwise create them.

1. *Protect these branches*: protect these branches in `Settings > Repository`.

<img src=https://i.imgur.com/uHbWUlD.png width="800" alt="Branches config"/>


### Prismic

The starter is prepared to work with [Prismic](https://prismic.io/) as a headless CMS to retrieve data from, and it includes some features to provide easy configuration for:

- dynamic page creation for content
- node i18n (translated pages for nodes, linked between them)

Prismic configuration is located in `/config/prismic`.

### Material UI 

We normally use [Material-UI](https://material-ui.com) library even for projects we that not use material design.

Material UI configuration is located in `/config/material-ui`.

### Layout

Most of our projects Material-UI-Layout hence we are also using the following plugin to make sure the layout is wrapped around the different pages:

- [gatsby-plugin-layout](https://www.gatsbyjs.org/packages/gatsby-plugin-layout/#handling-multiple-layouts)

For _handling multiple layouts_ check [this documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-layout/#handling-multiple-layouts)

### Fonts

The fonts defined in `/config/material-ui/fonts.js` will be loaded using [gatsby-plugin-web-font-loader](https://github.com/escaladesports/gatsby-plugin-web-font-loader#readme).

Also, the fonts will need to be set in the theme `/config/material-ui/theme.js`.

### Babel

We are using a custom Babel configuration, defined in `.babelrc`, and it should not be changed between projects.

### Flow Type

This project uses [Flow](https://flow.org/en/) for static typing.

### ESLint

This starter also uses [ESLint](https://eslint.org) to ensure the code style and quality is maintained.

We use [gatsby-plugin-eslint](https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/) to ensure ESLint is used during development. So if develop doesn't work it is probably because there ESLint is throwing an error.

### GraphQL queries

GraphQL queries validation is handled at 2 levels:

- ESLint ensures that the queries are valid using [eslint-plugin-graphql](https://github.com/apollographql/eslint-plugin-graphql) against the `schema.json` file.
- Flow **MUST** be used to ensure that data is properly accessed inside the React components. The schema Flow types can be imported from `src/schema.flow.js`. Note that all fields are defined as optional and nullable, so nested access with optional chaining is allowed and recommended (ex: `data.prismicHomePage?.data?.title?.text`)

### Test

Currently the test will:
- Check linting with ESLint
- Check typing with Flow
- Check typing coverage with Flow coverage

ToDo:
- Unit testing with Jest
- End-to-end testing with Cypress?


### Continous Integration / Continous Deployment - CI / CD

#### GitLab Pipelines

There is the GitLab CI config in `.gitlab-ci.yml`

The CI/CD process is separated in different `stages`:
- setup
- test
- build
- post-build-test
- deploy

Which are executed in this order. Different `jobs` are defined for this `stages` depending on the trigger of the `pipeline`. e.g. `merge_request`, commit to `develop`, commit to `master`, API `trigger` from a Prismic release.

Some of the scripts on these jobs require additional configuration to work properly. Follow steps below.

#### Deploy with Netlify

1. Link Repo with Netlify
1. Generate a *Personal Access Token* on Netlify’s. https://app.netlify.com/user/applications. This step probably needs to be done by @polguixe
1. On Gitlab CICD settings, add an Env Variable named `NETLIFY_AUTH_TOKEN` with the *Personal Access Token* generated above.
1. Also generate another Env Variable named `NETLIFY_SITE_ID`. Its value is the *API ID* of the Netlify project. It can be found under the *Site Information* on `Settings > General`.
1. Ensure the deploy context is as below. This will ensure that the deployments are only triggered by the CLI. Right now we are not making use of some of the deploy functionalities for Netlify.

<img src=https://i.imgur.com/v9P3cHm.png width="800" alt="Netlify deploy context"/>


#### Prismic deployment using webhooks

It is possible to configure Prismic's webhook to trigger the CD from GitLab. Since Prismic triggers the webhook on **ANY** change in the project, directly connecting Prismic with GitLab will perform a lot of useless pipelines and deploys. It is recommended to use a lambda function to filter the event that triggered the webhook and run the CD only for new Prismic releases.

See the lambda function repo for more info about how to configure it: [trigger-gitlab-pipeline-on-prismic-release](https://gitlab.com/origenstudio/trigger-gitlab-pipeline-on-prismic-release)

#### Configure Cloudflare Cache purging:

For most projects we'll use Cloudflare as DNS. If not the case then the `.gitlab-ci.yml` needs to be modified to either implement the right purging script or remove it from the CI/CD process. 

In case of using Cloudflare the configuration steps are:

1. Search for the script: file name `purge-production-cache.js`.
1. Update the hosts that need to be purged. Around line 20.
```js
//...
    },
    body: '{ "purge_everything": true }', // Configure accordingly normally will purge everything 
    // body: '{ "hosts": ["gatsby-starter.origen.studio"] }', // Configure accordingly with the hosts to purge. In this example we are just purging a subdomain
  })
//....

```
3. Set-up the CI/CD env variables in `Gitlab > Project Repo > Settings > CI/CD > Variables`:
    1. `CF_KEY`: the API token key. @polguixe needs to add that one.
    1. `CF_USER`: the user email for the API. i.e. *pol@origen.studio*
    1. `CF_ZONE_ID`:  in the Cloudflare domain dashboard  go to Overview tab. Look for API, the parameter required is named *Zone ID*.
1. Test the deploy pipeline.

#### Configure Gitlab Notifications to Slack
We can use notifications to let us know of different events happening in Gitlab. Merge request, failed pipelines, succesful pipelines, etc.

The default Gitlab —> Slack notifications are fairly good. To configure them:
1. In the project Gitlab Repo: `Settings > Integrations`
2. Under Project Services search for Slack notifications. Enter its configuration.
3. Follow instructions:
    1. Set to active
    2. Activate: *Merge request* and *Pipeline*. Other if required but to many notifications can be overwhelming.
    3. Webhook: can be obtained from slack settings. However we have one configured that posts to the *#p-gatsby* channel. The current webhook is: https://hooks.slack.com/services/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 however test it as it may outdated. We’ll try to keep it up-to-date.
    4. Username: Gitlab -{PROJECT NAME} 


#### Configure Netlify Notifications

At the moment we are not using the build feature of Netlify, the site is build in Gitlab pipelines and files are deployed to Netlify using the CLI. 
The default Netlify —> Slack notifications are a bit poor at the moment. It may change in the future. If rich notifications are required - are recomended- we can use Zappier to do so. 

Each Netlify site needs its own  “Zap”.  We can use the one that is generated for the Gatsby Starter as a reference.

To configure it follow Zappier instructions. 

We could create a Lambda function to emulate the Zappier script.



-----------------



## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── config
    ├── flow-typed
    ├── src
    |   ├── plugins
    |   └── schema.flow.js
    ├── scripts
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-config.mjs
    ├── gatsby-node.js
    ├── gatsby-node.mjs
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    ├── schema.json
    ├── yarn.lock
    └── README.md

### Gatsby files/folders

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

11. **`yarn.lock`** This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

12. **`README.md`**: A text file containing useful reference information about your project.

### Custom files/folders

1.  **`/config`**: This directory contains the configuration for the most common features of each project, including i18n, the theme, Prismic credentials and site metadata. Note that each project may use other Gatsby plugins or NPM packages that will need to be configured manually.

2.  **`/flow-typed`**: This directory contains Flow type annotations for external packages. Install or create them using [flow-typed](https://github.com/flow-typed/flow-typed).

3.  **`/scripts`**: This directory contains scripts used during DevOps.

4.  **`/src/plugins`**: This directory contains code considered candidate to be packaged into a Gatsby plugin, and it is of common use for all applications that will be created from the starter. These plugins may provide a different range of features, from helper function for bootstrapping Gatsby to React components to be reused accross the applications. **(IMPORTANT: avoid changing content of this project directly once the Starter is forked)**

5.  **`/src/schema.flow.js`**: This is an automatically generated file that contains the `Flow` types for the Gatsby schema. **(You won't change this file directly).**

6.  **`schema.json`**: This is an automatically generated file that contains the [introspection](https://graphql.org/learn/introspection/) schema. Generated by [gatsby-plugin-extract-schema](https://github.com/NickyMeuleman/gatsby-plugin-extract-schema). **(you won't change this file directly)**

7.  **`gatsby-config.mjs`**: ES6 version of `gatsby-config.js`

8.  **`gatsby-node.mjs`**: ES6 version of `gatsby-config.js`

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Useful resources

<!-- AUTO-GENERATED-CONTENT:END -->
