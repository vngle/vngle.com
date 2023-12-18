# Contribute to vngle.com

Thank you for considering contributing to Vnlge's current engineering efforts and learning more about our software internals! This guide will show you how to kick start vngle.com on your local environment as well as some brief explanation on the website's internals.

## Get Started

Before you could start contributing, let's first get the project up and running on your computer.

### Software Prerequisites

vngle.com currently uses [Gatsby.js](https://www.gatsbyjs.com/) as its underlying static site generator framework. Their site contains docs that shows how to [Set Up Your Development Environment](https://www.gatsbyjs.com/docs/tutorial/part-zero) for Gatsby. In summary:

1. Install Node.js
2. Install Yarn
3. Install Git
4. Install Gatsby CLI
5. Install a code editor (we recommend VS Code) & the [Prettier](https://prettier.io/) plugin on the code editor

Check out the aforementioned tutorial for details on how to install these tools on your specific operating system.

**Set up AWS Amplify**

We use [AWS Amplify](https://aws.amazon.com/amplify/) to connect our Gatsby frontend with AWS backend services (S3, DynamoDB, Cognito, etc.) without too much hassle configurating them.

Work in progress.

### Running the Website

In your terminal:

1. Clone this repo with command `git clone https://github.com/vngle/vngle.com.git`
2. `cd` into the project root directory and run `npm install`

   - If this step fails for whatever reason, you may want to try another version of Node and NPM (Node 12 should work) as your current version is either too old or too new.

3. Add development and production environment variables. To give you a rough idea of what env variables are needed by the website, we included a file `.env.example` which contains the names of the variables needed for **development**.

   1. Create 2 new files: `.env.development` and `.env.production`
   2. The env filees contain sensitive information that we cannot push to a remote repository. Contact us via GitHub issues or dev@vngle.com to request the content of these 2 files.

4. Run `gatsby develop`. Gatsby CLI will run the site build process and host the site on `localhost:8000` by default. Open `localhost:8000` on your browser and if everything works properly, our site should show up!

# Vngle Internals

Here we will briefly talk about how vngle.com is run on the client and server side.

## Client

vngle.com is mostly written in Javascript and React, so having some familiarity of both is essential for contributing.

vngle.com uses Gatsby.js as its static site generator and frontend framework. The **main advantage** of using Gatsby is because of it makes the website fast to load and use for website visitors. Because vngle.com contains mostly static content (data that does not change often and is mainly used to display content to users), we can use a technique called "pre-rendering", which Gatsby.js enables, to render the actual HTML from React and _hydrate_ it with our data before the website is served to the users when they visits the site. Gatsby does this with a **build process** that usually happens before you deploy the website live. The output of the process is then added to a build folder, which is what's being served to the site visitors.

A big advantage of having a static build folder is it can be hosted on a Content Distribution Network (CDN). AWS has a CDN that we are using right now. A CDN has _edge servers_ distributed across the globe. Your website's speed is already enhanced by having static over dynamic content, but by deploying onto a CDN, vngle.com is speedy for users almost anywhere in the world with Internet access.

vngle.com has static pages such as `vngle.com/about` or `vngle.com/coverage`. These are declared in the `/src/pages` folder in the source code. Some pages share similar React components, which are stored in the `/src/components` folder. Some pages such as news stories are dynamically generated (we can't make 1 file in the pages folder for each of our hundreds of stories), and the logic for that is stored in `gatsby-node.js`. The steps for dynamically generate pages is as follows:

1. Gatsby uses GraphQL (an API data query format) to fetch story data.
2. Once all stories are fetchedFor each story, call the `createPage` function provided natively by Gatsby to create the pages.
3. We provide the `createPage` function a path to a React template in `/src/template`, so all the story pages will have the same layout but different data.

All of this code is run during the build process, so when the user wants to read a story on vngle.com, all of our stories will be generated and ready to be shown.

If you are curious where the vngle story data is coming from, read the part under the Server section of this doc.

## Server

The majority of the server configuration is done on Amazon Web Service. AWS has a service called **AWS Amplify** that makes setting up server-side configurations like user authentication/permission, database storage, data fetching, and app hosting easy for frontend web developers.

vngle.com uses an Amplify plugin to create a pipeline for managing vngle stories. There is a very rudimentary page called `admin` that lets Vngle admins to log in and upload videos and metadata like its author and caption. When a video is uploaded, the raw video file is stored in an AWS S3 input bucket. Then, with the combination of AWS Lambda (serverless functions) and AWS MediaConvert, these input videos gets converted to various video streaming formats and image thumbnails. An entry is also made in AWS DynamoDB, the database we are using to store video and vngle story metadata.

In order to fetch the videos and data stored in DyanmoDB back to the client, AWS first uses AppSync to create GraphQL configs that can be sourced by Gatsby via. the `gatsby-source-graphql` plugin (you can find how it's configured in the `gatsby-config.js` file). Then, on any of the client-side React.js files with gatsby imported, you can use GraphQL to fetch the exact data you want from the pool of all vngle stories.
