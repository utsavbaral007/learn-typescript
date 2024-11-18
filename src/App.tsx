import { useState } from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import HeaderMessage from "./components/HeaderMessage";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [username, setUsername] = useState<string>("Utsav Baral");
  const [messageLength, setMessageLength] = useState<number>(100);
  const [loggedIn, setLoggedIn] = useState<boolean>(true);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Greet
        username={username}
        messageLength={messageLength}
        loggedIn={loggedIn}
      />
      <Header>
        <HeaderMessage />
      </Header>
      <Button
        handleClick={(e, id) => console.log("Button clicked with event", e, id)}
      />
      <Input handleChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}

export default App;
