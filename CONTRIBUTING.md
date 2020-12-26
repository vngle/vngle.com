# Contribute to vngle.com

Thank you for considering contributing to Vnlge's current engineering efforts and learning more about our software internals! This guide will show you how to kick start vngle.com on your local environment as well as some brief explanation on the website's internals.

## Get Started

Before you could start contributing, let's first get the project up and running on your computer.

### Software Prerequisites

vngle.com currently uses [Gatsby.js](https://www.gatsbyjs.com/) as its underlying static site generator framework. Their site contains docs that shows how to [Set Up Your Development Environment](https://www.gatsbyjs.com/docs/tutorial/part-zero) for Gatsby. In summary:

1. Install Node.js
2. Install Git
3. Install Gatsby CLI
4. Install a code editor (we recommend VS Code) & the [Prettier](https://prettier.io/) plugin on the code editor

Check out the aforementioned tutorial for details on how to install these tools on your specific operating system.

**Optional**: vngle.com also uses features provided by [Netlify](https://www.netlify.com/), which requires the installation of Netlify CLI to work with them on your local machine. If you are planning to contribute to aspects of the website that requires Netlify CLI, run `npm install netlify-cli -g` on your terminal to install.

- Once installed, you need to authenticate with Netlify using `netlify login`. Contact us via GitHub issues or dev@vngle.com for us to provide you with the credentials.

### Running the Website

In your terminal:

1. Clone this repo with command `git clone https://github.com/vngle/vngle.com.git`
2. `cd` into the project root directory and run `npm install`

   - If this step fails for whatever reason, you may want to try another version of Node and NPM (Node 12 should work) as your current version is either too old or too new.

3. Add development and production environment variables. To give you a rough idea of what env variables are needed by the website, we included a file `.env.example` which contains the names of the variables needed for **development**.

   1. Create 2 new files: `.env.development` and `.env.production`
   2. The env filees contain sensitive information that we cannot push to a remote repository. Contact us via GitHub issues or dev@vngle.com to request the content of these 2 files.

4. Run `gatsby develop`. Gatsby CLI will run the site build process and host the site on `localhost:8000` by default. Open `localhost:8000` on your browser and if everything works properly, our site should show up!

## Vngle Internals

Work in Progress!
