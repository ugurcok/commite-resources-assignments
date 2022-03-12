import React, { useState } from "react";

import Heading from "./components/Heading";
import Button from "./components/Button";
import { hex, getRandomNumber } from "./utils/utils";

const headingStyle =
  "flex flex-col justify-center w-50 items-center my-auto mx-auto";

function App() {
  const [color, setColor] = useState("#ffffff");

  const handleChangeColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    setColor(hexColor);
  };

  const handleResetColor = () => {
    setColor("#ffffff");
  };

  return (
    <div>
      <style>{`body {background-color: ${color}}`}</style>
      <Heading
        className="text-center bg-white mt-5 py-2 px-4"
        color={color}
        text={"Full Stack Proje Grubu 3. Hafta"}
      />
      <div className={headingStyle}>
        <Button
          className={"bg-blue-500 rounded-lg mx-auto py-2 px-4 mt-2"}
          onClick={handleChangeColor}
          label={"Flip Color"}
        />
        <Button
          label={"Reset Color"}
          onClick={handleResetColor}
          className={"bg-blue-500 rounded-lg py-6 px-8 mt-2"}
        />
      </div>
    </div>
  );
}

export default App;
