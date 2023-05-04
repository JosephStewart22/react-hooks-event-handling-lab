import react from "react";

function EyesOnMe() {
    function handleEyes() {
        console.log("Good!");
    }

    function handleBlur() {
        console.log("Hey! Eyes on me!");
    }

    return (
        <button onFocus={handleEyes} onBlur={handleBlur}>
            Eyes on me
        </button>
    );
}

export default EyesOnMe;