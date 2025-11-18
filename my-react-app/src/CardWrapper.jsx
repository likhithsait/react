export const CardWrapper=({Title,children})=>{
    return(
        <div className="card">
            <h2>{Title}</h2>
            <div className="cardcontainer">
                {children}
            </div>
        </div>
    );

};