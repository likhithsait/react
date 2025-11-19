export const CustomButton=({text})=>{
    const name = "peter";

    const handlClick=()=>{
        console.log(`${text}`)
        
    };

    return (<button onClick={handlClick}>{text}</button>);

}