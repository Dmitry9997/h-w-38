import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [clicks, setClicks] = useState(0);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="ButtonFirst">
      <h1>HomeWork38</h1>
      <Input
        placeholder={"введите текст"}
        onChenge={(e) => setInputValue(e.target.value)}
      />
      {inputValue && <p>Вы написали: {inputValue}</p>}
      <p>Кликов {clicks}</p>
      <Button text="Нажимай" onClick={() => setClicks(clicks + 1)} />
    </div>
  );
}

export default App;
