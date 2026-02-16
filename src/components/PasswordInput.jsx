// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange() {
        console.log("Entering password...");
    }
    return(
        <>
        Password: <input type="password" onChange={()=>handleChange()}></input>
        </>
    )
}

export default PasswordInput;