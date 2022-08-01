const hotels = require('./hotels');
const reserved = require('./reserved');

const combinedRoutes = {
  hotels: hotels.hotels,
  reserved: reserved.reserved,
};

module.exports = () => combinedRoutes;
