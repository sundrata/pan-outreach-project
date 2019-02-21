# Pan Outreach - (Group Project For Prime Academy)
This repo contains the complete project code for a Prime Academy group project client, Pan Outreach. Four developement students created a virtual steel drum simulation as well as a centralized lesson material portal. This version uses React, Redux, Express, Passport, PostgreSQL and AWS file hosting (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:
- An IDE [VSCode is recommended](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `pan_outreach` and create the following tables:

```SQL
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN default false,
    "creation_date" DATE,
    "active" BOOLEAN default true,
    "school_name" VARCHAR(500)
);


CREATE TYPE instrument AS ENUM ('Tenor', 'Seconds', 'Cello', 'Bass');
CREATE TYPE difficulty AS ENUM ('1', '2', '3', '4', '5');
CREATE TABLE "sheet_music" (
	"id" SERIAL PRIMARY KEY,
	"url" varchar(200),
	"instrument" instrument,
	"difficulty" difficulty,
	"name" varchar(200)
);


CREATE TABLE "category" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(200)
);

CREATE TABLE "lesson_plan" (
    "id" SERIAL PRIMARY KEY,
    "url" varchar(200),
    "name" varchar(200),
    "category_id" integer REFERENCES category(id)
);
```

If you would like to name your database something else, you will need to change `pan_outreach` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this template into the file. You will need to register an account with AWS, and generate your own set of keys here: [https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/]
    ```
    S3_BUCKET= [your bucket name]
    AWS_ACCESS_KEY_ID= [your access key id]
    AWS_SECRET_ACCESS_KEY= [your secret access key]
    ```
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

* src/components
  * App/App
  * ProtectedRoute/ProtectedRoute 
  * AdminRoute/AdminRoute
  * Split/Split
  * AdminNav/AdminNav
  * AdminDashboard/AdminDashboard
  * StudentNav/StudentNav
  * StudentDashboard/StudentDashboard
  * LoginPage/LoginPage
  * LogOutButton/LogOutButton
  
## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. In the deploy section, select manual deploy

## Authors
 * **Carson Otto** - *Initial work* - (https://github.com/sundrata)
 * **Vang Xiong** - *Initial work* - (https://github.com/vxiong029)
 * **Anders Ryden** - *Initial work* - (https://github.com/rydena021)
 * **John Worley** - *Initial work* - (https://github.com/JohnAWorley)
