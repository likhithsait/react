export const UserDetails = ({name, isOnline, isPremium, isnew, role})=>{
    /*if(isOnline){
        return(
    <div>
        <h1>
            {name}
        </h1>
        <p>
            Status: Online
        </p>
        <small> Available for chat</small>
        <button>send message</button>
    </div>

    )
    }
    return(
    <div>
        <h1>
            {name}
        </h1>
        <p>
            Status: offline
        </p>
        <small> Checkback later</small>
    </div>

    )*/
   let rolebadge = null;
   if(role == "hero") rolebadge="🕷️🕸️";
   else if (role == "admin") rolebadge="🛡️";
   else if(role == "ViP") rolebadge="💎";

    return(
        <div>
        <h3>{name}
            {rolebadge}
            {isPremium && <span>🌟</span>}
            {isnew&& <span>🎉</span>}

        </h3>
        <p>{isOnline?"Online":"Offline"}</p>
        <p>{isOnline?"Available for chat":"Not Availble"}</p>
        {isOnline ? (<button>Send message</button>):
                (<small>Check Back later</small>)}

        </div>
    )


}