import { useRef } from "react";

const UncontrolledInput = () => {
const inputRef = useRef(null);

function handleButton() {
    alert(`Hai scritto: ${inputRef.current.value}`)
}

    return (
        <>
        <input type="text" ref={inputRef} placeholder="Scrivi qui" /><br />
        <button onClick={handleButton}>Click</button>
        </>
    )
}

export default UncontrolledInput;