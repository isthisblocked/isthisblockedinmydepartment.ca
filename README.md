_This site is an [Ottawa Civic Tech](http://ottawacivictech.ca/) volunteer project. It is not affiliated with the Government of Canada._

<h1 align="center">
  Is this blocked in my department.ca
</h1>

This repository powers [isthisblockedinmydepartment.ca](https://isthisblockedinmydepartment.ca/). 

It's based on [Gatsby](https://www.gatsbyjs.org), a fast, high-performance static site builder built with [React](https://reactjs.org/). 

This site uses the [Gatsby default starter](https://www.gatsbyjs.org/starters/gatsby-starter-default).

Before following the installation steps below, make sure that an up-to-date version of [Node.js](https://nodejs.org/) is installed on your computer. For more details on the development environment, see the [Gatsby introductory tutorial](https://www.gatsbyjs.org/tutorial/part-zero/).

## How it works

Isthisblocked uses the [gatsby-transformer-csv](https://www.gatsbyjs.org/packages/gatsby-transformer-csv/) plugin to parse CSV files that contain data on departments and services.

The source data displayed on the website is in CSV format in the [`/src/data`](https://github.com/isthisblocked/isthisblockedinmydepartment.ca/tree/master/src/data) folder. 

The `organization_status.csv` file is updated with new information on services that are open, restricted, or blocked in each department. 

This data is anonymously crowdsourced from the Google Forms linked at <https://isthisblockedinmydepartment.ca/suggest>. 

Raw data from these forms is manually added to the `organization_status.csv` file. 

Scores for each department are calculated using the criteria described on the [Scoring](https://isthisblockedinmydepartment.ca/scoring) page. 

Future feature possibilities include:

-   built-in data collection using Firebase or other back-end services
-   embedded previews of services to quickly review which are blocked
-   automatic tallying and averaging of crowdsourced data

For questions or feedback on this website, email [isthisblockedinmydepartment@gmail.com](mailto:isthisblockedinmydepartment@gmail.com).

## Local installation

1.  **Install the Gatsby CLI.**

    ```sh
    # Install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2.  **Clone this repository.**

    ```sh
    # Clone the repository 
    git clone git@github.com:isthisblocked/isthisblockedinmydepartment.ca.git isthisblocked
    ```

3.  **Install package dependencies.**

    This may take several minutes to install.

    ```sh
    cd isthisblocked/
    npm install
    ```

3.  **Start developing.**

    Once all packages are installed successfully, start it up!

    ```sh
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the `isthisblocked` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
    
5.  **Deployment via GitHub Pages**

    This site is hosted by GitHub Pages, and uses the [gh-pages](https://github.com/tschaub/gh-pages) package for deployments. The Gatsby documentation includes [detailed steps for using Gatsby with GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/). 
    
    If you fork this repository and use it with a different domain name, change the CNAME file in the [`static`](https://github.com/isthisblocked/isthisblockedinmydepartment.ca/tree/master/static) folder, and enable GitHub Pages in your repository settings to match the domain name you specify, and to use the `gh-pages` branch. 

    To deploy new updates to the [live version](https://isthisblockedinmydepartment.ca/), run: 
    ```sh
    npm run deploy
    ```
