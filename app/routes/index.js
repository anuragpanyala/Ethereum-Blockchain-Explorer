const etherscanRoutes = require('./etherscan_routes');
module.exports = function(app, db) {
  etherscanRoutes(app, db);
  // Other route groups could go here, in the future
};