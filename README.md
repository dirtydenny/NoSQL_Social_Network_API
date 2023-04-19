

# NoSql Social Network API
![License](https://img.shields.io/badge/License-MIT-blue.svg)


## Table of Contents  
[Description](#description)
  
[Installation](#installation)
  
[Usage](#usage)
  
[Questions](#questions)
  
[Tests](#tests)
    

  ## License 
     For more info, please follow the link below.
  [LINK](https://opensource.org/license/MIT)

  ## Description

  The purpose of the exercise is: 
  AS A social media startup
  I WANT an API for my social network that uses a NoSQL database
  SO THAT my website can handle large amounts of unstructured dataAS A social media startup

  Technologies used in this repo are MongoDB, Express.js, and Mongoose.

  ## Installation

  npm i

  ## Usage

  Please navigate to the root directory, add the packages, and NPM start. 
  Once you have started the database you can test it on Insomnia to check it function.

  Routes to use in Insomnia:
  - Get all Users GET: http://localhost:3001/api/users/
  - Add a User POST: http://localhost:3001/api/users/
  - Get User by id GET: http://localhost:3001/api/users/ - insert userId here -
  - Update User by id PUT: http://localhost:3001/api/users/ - insert userId here -
  - Delete a User by id DELETE: http://localhost:3001/api/users/ - insert userId here -
  - Delete a Friend by id DELETE: http://localhost:3001/api/users/ - insert userId here - /friends/ - insert friendId here -
  - Add a Friend by user id POST: http://localhost:3001/api/users/ - insert userId here - /friends/
  - Delete a Thought by id DELETE: http://localhost:3001/api/thought/ - insert thoughId here -
  - Update a Thought by id PUT: http://localhost:3001/api/thought/ - insert thoughId here -
  - Get a single Thought by id GET: http://localhost:3001/api/thought/ - insert thoughId here -
  - Get all Thoughts GET: http://localhost:3001/api/thought/
  - Add a Thought POST: http://localhost:3001/api/thought/ - insert userId here -
  - Delete a Reaction DELETE: http://localhost:3001/api/thought/- insert thoughId here -/reactions/- insert reactionId here -
  - Add a Reaction POST: http://localhost:3001/api/thought/- insert userId here -/reactions/  
  
  ## Tests

  none

  ## Questions

  Thank you for using my application.  Please submit questions to dallen7@socal.rr.com.  Also, visit me at 
    [dirtydenny](https://github.com/dirtydenny/) to see my other programs.

