const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibWFobW91ZDA1IiwiYSI6ImNsNmE2MWlidDE5N2wzaW81azd6NzRpcGIifQ.91zNShU7ziTXn_8KKNwtqQ";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable find location !. Try search agian.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].text,
      });
    }
  });
};

module.exports = geoCode;
