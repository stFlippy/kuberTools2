
import styles from "./Header.module.css"
import logo from "./img/Logo.png" 
import type { userInterface } from "./types"
import UserBlock from "./UserBlock"
import ControlPanel from "./ControlPanel"



const Header = (user: userInterface) => {


    return (
        <header className={styles.header}>

            <div className={styles.logo}>
                <img src={logo} alt="QUABER" className={styles.img} />
                <span className={styles.title} >Quaber</span>
            </div>

            <ControlPanel />

            <UserBlock
                username={user.username}
            />



            {/* <nav className={styles.nav}>
                <Link style={styles.link} to="/pods">Pods</Link>
                <Link style={styles.link} to="/deployments">Deployments</Link>
                <p>Navigation</p>
            </nav> */}

        </header>
    )
}



export default Header