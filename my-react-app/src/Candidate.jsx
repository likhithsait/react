    

export const Candidate = ()=>{
    const Name  = "Peter park r";
    const age = 40;
    return(
        <>
        <p>hi iam <span>{Name}</span>, im {age} years old, iam your guid</p>
        <p> i was born in {2025-age}</p>
        <p>My email is {Name.toLocaleLowerCase().replaceAll(' ','.')}@email.com</p>

        </>
    )
}