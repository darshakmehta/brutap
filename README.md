# Tap your Beer

Goal: The application is developed to tap your beer from Huge Beer database

# Implement MVC Design Pattern to structure the web application.

	Model - JavaScript Data Objects to implement the business layer of the application
	View -  React Components to present the view to the browser
	Control - Using Routes to control the flow of the application

# Client Side

1. React Components is the view to the client and defined inside `src/components`. It is built upon `create-react-app`.
2. React Tables are used for rendering the BEER database, which supports feature to Search/Sort and highlight.
3. Axios is used for Promise based HTTP Client for the browser and the Node.js 
4. React-router is used for Navigation between Components and defined inside `src/routers`
5. All Component Styles are present inside `src/styles` and Custom colors are defined in root css as CSS variables.

# Server Sider
 
1. Express App is used for handling HTTP requests, and all the API endpoints are followed by /api
2. Mongoose Models are implemented for Object Data Modeling (ODM) library for MongoDB and Node.js
3. `cors` is required for handling the Cross-origin resource sharing policy.

# Deploymment

The application is deployed on Heroku and the NoSQL database is managed by mLab.

# Testing

1. Validation of HTML5 pages by following tool: http://html5.validator.nu/
2. { TODO: React test - to be updated soon }
3. { TODO: css3 styles validation }
4. { TODO: Complete Sanitization / Validation of Resources flowing through app }

# Design Principles

1. Complete separation of CSS into separate files. No inline styles.
2. Complete separation of JS into separate files. No inline scripting.
3. All resources(locally stored within the web application) like local copies of JS libraries
4. Coding efficient and design choices, which includes coding elegance or style.
5. Good code design is followed for maintenance, understanding, reusability, and extensibility of applications.
6. Proper indentation for nested elements.

# Fundamental Standards for Web page design

1. All the pages are valid HTML5 standard
2. Cross-browser Compatibility
3. { TODO: Mobile Responsive }

# User Stories

1. As a user I would like to view my 'Draft menu'
2. As a user I would like to add beers to the draft menu
3. As a user I would like to remove beer from the draft menu
4. As a user I would like to Browse a beer database and search/sort a beer by Brewery Name
5. As a user I would like to Browse a beer database and search/sort a beer by Beer Name
6. As a user I would like to Browse a beer database and search/sort a beer by Beer Style
7. As a user I would like to Browse a beer database and search/sort a beer by ABV
8. As a user I would like to Browse a beer database and search/sort a beer by IBU

# # Steps to install Project

1. Before cloning the project, you should install node, mongodb libraries.
2. Clone the project
3. npm install
4. Use the beerdata.json file to insert the documents in the mongodb database
5. Run mongod in cmd
6. inside the server folder => nodemon app
7. inside the client folder => npm start

Happy Coding :)
