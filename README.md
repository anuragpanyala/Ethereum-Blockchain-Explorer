Powered by Etherscan.io APIs

Name: Anurag Panyala

This node server application hosts an express server that provides the capability to interact with etherscan APIs while managing, creating and querying functions on a MongoDB database.

The application uses a MongoDb instance hosted on mLab. It can also be run on a local MongoDB instance by modifing the URL parameter in config/db.js.

The database name is defined in the server.js file. This database was precreated on mLab.

To run the server application, execute the following commands at the root of the project folder:

npm install
npm run dev

The server runs on port 8000, see API documentation below for interacting with the server.

API documentation:

Request Type: POST
URL: http://localhost:8000/transactions
Body: Accepts JSON object, with value for key named, address
Response: Returns a JSON object, with an array of the transactions associated with the address value in the Body

Request Type: GET
URL: http://localhost:8000/transactions?address=<enter address here>&blockNumber=<enter blockNumber here>&gasUsed=<enter gasUsed here>
Body: Accepts JSON object, with value for keys named, address, blockNumber and gasUsed
Response: Returns a JSON object, with an array of the transactions associated with the address value in the Body OR transactions greater than or equal to a block number OR transcations greater than or equal to an amount of gasUsed

Search parameters:
address: returns the balance in wei upto 1000 transactions associated with the address
blockNumber: returns associated transactions for a given block and every block greater than the specified block number
gasUsed: returns associated transactions for a given amount/greater of gasUSed

The query will overall function on any of the search parameters provided because of the OR operator

frameworks/libraries:
express 
mongodb 
node-etherscan-api
request
nodemon

Tools:
PostMan
mLab
GitHub

Resources:
https://etherscan.io/apis
https://www.npmjs.com/package/node-etherscan-api
https://github.com/danakt/node-etherscan-api
https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
https://mlab.com
https://docs.mongodb.com/manual/reference/operator/query-logical/
https://www.getpostman.com/