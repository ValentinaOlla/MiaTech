import { useState, useEffect } from "react";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import UncontrolledInput from "./UncontrolledInput";
import ItemList from "./ItemList";

const App = () => {
  
    return (
      <>
        <TextInput />
        <LoginForm />
        <UncontrolledInput />
        <ItemList items={["Viola", "Blu", "Nero"]}/>
      </>
    )
  };

export default App;
