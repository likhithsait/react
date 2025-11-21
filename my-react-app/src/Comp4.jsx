import { useContext } from "react";
import NameContext from "./NameContext";
export const Comp4=()=>{
    const usedname = useContext(NameContext);
    return(
        <div>
            <h2>
            Component 4 recived name from Context is : {usedname}
            </h2>
        </div>
    )
}