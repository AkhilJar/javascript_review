import React, {useState} from "react";
import axios from "axios";
import "./App.css";

//function prints to the console once it successfully gets the promise from the api
function App() {

  //re render as state changes
  //[state, setState] = useState(initial)
  //set state is function to update the state and replaces state value
  const[joke, setJoke] = useState("");

  const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        setJoke(response.data.setup + "..." + response.data.punchline);
      },
    );
  };
  //when you click button it will call get from API
  return (
<div>
      Hello Youtube <button onClick={getJoke}>Get Joke Right now</button>
      {joke}
    </div>
  );
}

export default App;
