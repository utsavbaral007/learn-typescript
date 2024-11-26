import { useState } from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import HeaderMessage from "./components/HeaderMessage";
import Button from "./components/Button";
import Input from "./components/Input";
import TickedBooking from "./components/TickedBooking";
import MultipleDropdown from "./components/MultipleDropdown";
import DeleteList from "./components/DeleteList";
import Todo from "./components/Todo";
import Debounce from "./components/Debounce";

function App() {
  const [username, setUsername] = useState<string>("Utsav Baral");
  const [messageLength, setMessageLength] = useState<number>(100);
  const [loggedIn, setLoggedIn] = useState<boolean>(true);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Debounce />
      {/* <Todo /> */}
      {/* <DeleteList /> */}
      {/* <MultipleDropdown /> */}
      {/* <TickedBooking /> */}
      {/* <Greet
        username={username}
        messageLength={messageLength}
        loggedIn={loggedIn}
      />
      <Header styles={{ border: "1px solid", padding: "1rem" }}>
        <HeaderMessage />
      </Header>
      <Button
        handleClick={(e, id) => console.log("Button clicked with event", e, id)}
      />
      <Input handleChange={(e) => setUsername(e.target.value)} /> */}
    </div>
  );
}

export default App;
