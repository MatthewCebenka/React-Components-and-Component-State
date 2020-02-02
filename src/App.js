import React, {useState} from "react";
import './App.css';

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {

  const [lightOn, setLightOn ] = useState(true);

  console.log(lightOn);

  return (
    <div className="App">
      {lightOn ? <img src={white} /> : <img src={yellow} />}
      <button onClick={() => setLightOn(!lightOn)}>light switch</button>
    </div>
  );
}

export default App;
