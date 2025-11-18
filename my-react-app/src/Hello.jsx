import React from "react";

export const Hello = ()=>{
    return(<div id="dontainer">
                <h1>Hello likhith</h1>

            </div>);
}

export const HellloNojsx = ()=>{
    return React.createElement("div",{id:"dontainer"}, 
        React.createElement("h1",null,"Hello likhith")
    );
    
}