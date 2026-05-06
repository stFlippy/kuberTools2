import type { userInterface } from "./types"



const UserBlock = (user: userInterface) => {
    return (
        <div style={style.main}>
            <span>{user.username}</span>
            <span > Log out </span>
        </div>
    )
}



export default UserBlock


const style = {
    main: {
        width: "12vw",
        display: "flex",
        flexDirection: "column" as const,
        fontSize: "2vh",
        
    }
}