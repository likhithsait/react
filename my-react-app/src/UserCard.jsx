import { UserInfo } from "./UserInfo";

export const UserCard = (props)=>{
    return(
        <div>
            <h3>User DETAILS</h3>
            <UserInfo {...props} />
        </div>
    );

} 