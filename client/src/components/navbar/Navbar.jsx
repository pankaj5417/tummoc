import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.css";
export const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState("false");
  const { loading, userDetail, error } = useSelector(
    (state) => ({
      loading: state.loginState.loading,
      userDetail: state.loginState.userDetail,
      error: state.loginState.error,
    }))
    console.log(userDetail)
  const handlOpenSidebar = () => {
    openSidebar ? setOpenSidebar(false) : setOpenSidebar(true);
  };
  return (
    <>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="navbarContainer">
        <div>
          <ul className="navbarLeft">
            <li className="navbarLeft">
             
              <i onClick={handlOpenSidebar} class="fa fa-th-large fa-2x hamBar" aria-hidden="true"></i>
              <Link to="/">
              
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="navbarRight">
           
            <div className="loginRegisterButtonContainer">
              {userDetail?
              <>
              <span style={{color:"white"}}>{userDetail.name}</span>&nbsp;
               <button className="login-button">Logout</button>

              </>:
              <button className="login-button">Login</button>
              
              }
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
