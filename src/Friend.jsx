import Friends from "./Friends"

export default function Friend({friend}){
    const {name,email}=friend;
return(
    <div className="box">
        <h4>Name:{name}</h4>
        <p>Emails:{email}</p>
    </div>
)
}