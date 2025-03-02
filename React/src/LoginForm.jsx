import { useState } from "react";

const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleUsername(event) {
        setUserName(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Hai inserito username: ${userName}; password: ${password}.`)
    }

    return (
        <>
        <div>
            <label>Username: </label>
            <input type="text" value={userName} onChange={handleUsername} placeholder="Inserisci username" />
            <label>Password: </label>
            <input type="text" value={password} onChange={handlePassword} placeholder="Inserisci password" />
        </div>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default LoginForm;