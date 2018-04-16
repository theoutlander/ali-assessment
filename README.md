# Poké-MongoDB

You are going to build a Pokémon API with Node, Express, and MongoDB. Your API will allow users to perform CRUD operations on each of the 151 original Pokémon, and power a front-end.


# RECORDING

## How to Record Your Screen
This document details how to create a recording of your screen.
* [Mac](#mac)
* [PC](#pc)
* [Linux](#linux)
*NOTE: Recording several hours of screen capture will use a large amount of data, up 4GB PER HOUR. Please make sure you have enough free storage space to accommodate your screen capture data!*
## Mac
### To begin recording
*  Launch QuickTime Player from Finder or Alfred/Spotlight.
* In QuickTime Player, go to the `File -> New screen recording`
* Click the down arrow next to the record button and enable `Show Mouse Clicks in Recording`
![screen shot 2016-05-25 at 4 15 41 pm](https://cloud.githubusercontent.com/assets/6980359/15559089/16ed9072-2294-11e6-8348-0c8ad7a1d963.png)
* Click the red record button to initiate the screen recording
* QuickTime will show you a notice in the middle of the screen as show in the screen shot below -- click on it confirm the screen capture and begin recording
![screen shot 2016-05-25 at 4 15 48 pm](https://cloud.githubusercontent.com/assets/6980359/15559088/16ecd8e4-2294-11e6-8d3d-a3ed5302e856.png)
To check that QuickTime is actively recording, look for the black stop button (square) inside a circle, in the system tray:
![screen shot 2016-05-25 at 4 16 03 pm](https://cloud.githubusercontent.com/assets/6980359/15559090/16ee19b6-2294-11e6-8c9b-260c4e7afa23.png)
### To stop recording
Open QuickTime Player by clicking the the black stop button (square inside a circle) in the system tray
![screen shot 2016-05-25 at 4 16 03 pm](https://cloud.githubusercontent.com/assets/6980359/15559090/16ee19b6-2294-11e6-8c9b-260c4e7afa23.png)
Choose `File -> export`, choose 480p quality, and name your video file `firstname-lastname-yyyy-mm-dd`
## PC
Download and install [OBS Classic](https://obsproject.com/). It's free and open source!
### To start recording
Update the following Settings (click `Apply` between each step):
| Encoding | Broadcast Settings |
|-------------------------|----------------------------------------|
| Max Bitrate (kb/s): 192 | Mode: File Output Only |
|  | File Path: firstname-lastname-yyyy-mm-dd.mp4 |
|  | Video: FPS: 15 |
Add a Monitor Capture source:
* Right click the `Sources:` box and click `Add -> Monitor Capture`
* Give it any name, the default is fine
* Click `OK`, the default options are fine
From the main screen, click `Start Recording`, and minimize the program.
### To stop recording
Simply click `Stop Recording` and your screen recording will show up at the `File Path` you specified.
## Linux
We recommend [SimpleScreenRecorder](http://www.maartenbaert.be/simplescreenrecorder/)

## How to start this app

* `npm install`
* `npm start`
* FILL ME IN WITH ADDTIONAL STEPS AS PART OF SUBMISSION PROCESS

## Requirements

In addition to your frequent commits, **make a commit after completing each of the following steps** (marked by check boxes), indicating that you have just completed it. It may not be the case that you have time to complete all of the following steps, but regardless, **you must work on them in order** (though there is an escape hatch for the back-end if you need).

- Back-end
- Front-end
- Middleware
- Testing

### Back-end

> **Pro tip:** Install and use [Postman](https://www.getpostman.com/) to test your API routes for this section

Using the existing code provided in `server/`, follow the steps below to build out a Pokémon API:

|      URL             | HTTP Verb | Request Body |                         Result                                           |
|:--------------------:|:---------:|:------------:|:------------------------------------------------------------------------:|
| /api/pokemon         |    GET    |    empty     |                                               Respond with JSON of all Pokémon |
| /api/pokemon         |    POST   |     JSON     |                    Create new Pokémon and respond with JSON of created Pokémon |
| /api/pokemon         |   DELETE  |    empty     |                 Delete all Pokémon in database and respond with JSON of deleted Pokémon |
| /api/pokemon/:number |    GET    |    empty     |                     Respond with JSON of single Pokémon with matching `number` |
| /api/pokemon/:number |    PUT    |     JSON     | Update Pokémon with matching `number` and respond with JSON of updated Pokémon |
| /api/pokemon/:number |   DELETE  |    empty     | Delete Pokémon with matching `number` and respond with JSON of deleted Pokémon |


- [ ] Connect Mongoose to your local Mongo database in `db/index.js`
- [ ] Create a Pokémon model in `resources/pokemon/Pokemon.js` and register it with Mongoose as the `Pokemon` collection with the following properties:
  - [ ] `number`, a unique number
  - [ ] `name`, a unique string
  - [ ] `types`, an array of strings
  - [ ] `imageUrl`, a string
- [ ] In `insertAllPokemon.js`, write a function that can populate your Mongo database with the 151 original Pokémon found in `data/pokemon.json`, then run the script/invoke the function so that the database is populated.
- [ ] Complete the controller in `resources/pokemon/pokemonController.js` that interacts with your Pokémon model.
- [ ] Create a router in `resources/pokemon/pokemonRouter.js` that utilizes each of your controller's methods. Be sure to handle errors appropriately!
- [ ] Import `pokemonRouter` into `server.js` and assign it to the correct route
- [ ] Write at least two tests in `test/api-spec.js` that will help assure future developers that the API is working as intended.

### Front-end

> **Escape hatch:** If you have a showstopping bug in your server, mock it out with [json-server](https://github.com/typicode/json-server). You'll have to change the structure of `data/pokemon.json` slightly to make this work.

Inside of `client/`, implement a single page front end to interact with this API using either Angular or React. There is a webpack config file already set up if you are choosing react - please read the `webpack.config.js` carefully before starting.

Your front end should be served from Express and should allow the user to:
- [ ] Display all Pokémon (with their images)
- [ ] Add a new Pokémon
- [ ] Filter Pokémon based on their type (but NOT on other properties)

### Middleware

> **Important:** You must complete all of the steps in [back-end](#back-end) before moving onto this section.

Inside of `server/middleware/rateLimiter.js`, create a custom middleware function in which you implement rate limiting for your API with the following guidelines.

- [ ] Require each request to `/api/pokemon` to include a `User` property in the header
- [ ] Only allow a single user to make 100 requests per hour
- [ ] Mount your middleware in an appropriate location in `server/server.js`
- [ ] Update your front-end to send `user` property with each request

### Available Resources

You may visit each of these resources directly, or search for them on Google with the [`site:`](https://support.google.com/websearch/answer/2466433?hl=en) operator:

* [MDN](https://developer.mozilla.org/en-US/)
* [Express docs](https://expressjs.com/)
* [Mongo docs](https://docs.mongodb.com/)
* [Mongoose docs](http://mongoosejs.com/docs/index.html)
* [React docs](https://facebook.github.io/react/docs/getting-started.html)
* [Angular docs](https://docs.angularjs.org/api)
* [Webpack docs](https://webpack.github.io/docs/)
* Official documentation for any npm package that you install


