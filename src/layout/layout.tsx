

import { Link, Outlet } from "react-router-dom";
import Header from "./Header";


const Layout = () => {
  return (

    <div>
      <Header 
        username="Ivan Ivanych"
      />

      {/* {
        [...Array(100)].map((_, i) => (
          <p key={i}>Hello</p>
        ))
      } */}
      {/* <main style={styles.main}>
        <Outlet />
      </main> */}

    </div>
  );
}



export default Layout;

const styles = {
  nav: {
    border: "2px solid shite",
    // display: "flex",
    gap: "20px"
  },
  main: {
    padding: "20px"
  }
};