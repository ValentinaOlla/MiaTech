import { useState } from "react";

const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleUsername(event) {
        setUserName(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
        console.log(password);
    }


    return (
        <>
        <div>
            <label>Username: </label>
            <input type="text" value={userName} onChange={handleUsername} placeholder="Inserisci username" />
            <label>Password: </label>
            <input type="text" value={password} onChange={handlePassword} placeholder="Inserisci password" />
        </div>
        
        </>
    )
}

export default LoginForm;