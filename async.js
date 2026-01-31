const axios = require("axios");

//replacement for promises
const fetchData = async () => {
  try {
    const data = await axios.get("https://catfact.ninja/facts");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
