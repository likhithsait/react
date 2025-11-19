import { ActionButton } from "./ActionButton";
export const NewsLetter = ()=>{
    const handleSubscribe=()=>{
        alert("You are subscrbed");
    }
    return(
        <div>
            <h2>Subscribe to Newsletter</h2>
            <ActionButton text="Subscribe" onClick={handleSubscribe}></ActionButton>
        </div>
    )
}