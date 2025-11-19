import { ActionButton } from "./ActionButton";

export const ContactUs = ()=>{
    const handleSendMessage=()=>{
        alert("sending message");
    };
    return(<>
        <h2>Contac Us</h2>
        <ActionButton text="send message" onClick={handleSendMessage}></ActionButton>
        
        
        </>
        
    );
}