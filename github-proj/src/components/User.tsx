import { UserProps } from "../types/user";

import {MdLocationPin} from "react-icons/md";

const User = ({login, avatar_url, followers, following, location}: UserProps) => {
    return(
        <div>
            <img src={avatar_url} alt={login}/>
            <h2>{login}</h2>
            <p>
                <MdLocationPin/>
                <span>{location}</span>
            </p>
            <div>
                <div>
                    <p>Seguidores:</p>
                    <p>{followers}</p>
                </div>
                
            </div>
        </div>
    )
}

export default User