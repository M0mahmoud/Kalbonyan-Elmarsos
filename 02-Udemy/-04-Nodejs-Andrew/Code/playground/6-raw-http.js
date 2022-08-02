const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=cd78191ee20058c24f128d8f18294596&query=45,-75&units=m";

const request = http.request(url, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  res.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (err) => {
  console.log("Error", err);
});

request.end();
