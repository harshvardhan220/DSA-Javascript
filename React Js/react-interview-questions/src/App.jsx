import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PartOne from "./components/CatherineLi/PartOne";
import PartTwo from "./components/CatherineLi/PartTwo";
import PartThree from "./components/CatherineLi/PartThree";
import SixtySquare from "./components/VanillaNetworks/SixtySquare";
import RandomColorButton from "./components/VanillaNetworks/RandomColorButton";
import CircularInputList from "./components/VanillaNetworks/CircularInputList";
import Intellizign from "./components/Intellizign/Intellizign";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <PartOne />  */}
      {/* <PartTwo/> */}
      <SixtySquare />
      <RandomColorButton />
      <CircularInputList />
      <Intellizign />
    </>
  );
}

export default App;
