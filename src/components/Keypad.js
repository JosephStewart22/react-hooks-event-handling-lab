// Code Keypad Component Here

function Keypad (){
    
    function handleClick() {
        console.log("Entering password...")
    }
    
    return (
        <input type="password" onChange={handleClick} />
    )
}

export default Keypad;