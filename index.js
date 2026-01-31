//promises - class that waits for something to be done
//resolve - what you want to happen if promise is sucess else reject
const event = new Promise((resolve, reject) => {
  var name = "JOHN";
  if (name == "Pedro") {
    resolve(name);
  } else {
    reject("Name not Pedro");
  }
});

//then is function for if resolve and .catch if reject
//almost like a try catch
//finally executed regardless
event
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise fulfilled");
  });
