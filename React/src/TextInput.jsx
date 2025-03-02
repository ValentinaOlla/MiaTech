import { useState } from "react";

const TextInput = () => {
    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    return (
        <>
        <div>
        <input type="text" value={input} onChange={handleChange} placeholder="Scrivi qui" />
        </div>
        </>
    )
}

export default TextInput;