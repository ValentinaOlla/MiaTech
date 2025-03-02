import { useRef } from "react";

const UncontrolledInput = () => {
const inputRef = useRef(null);

    return (
        <>
        <input type="text" ref={inputRef} placeholder="Scrivi qui" />
        </>
    )
}

export default UncontrolledInput;