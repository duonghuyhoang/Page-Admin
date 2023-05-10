import { NavLink, useNavigate } from "react-router-dom";
import "./Navigator.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navigator() {
  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-link activated" : "nav-link";
  };
  const location = useLocation();
  const locationPart = location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (locationPart === "/") {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <div className='wrapper-nav'>
      <span className='title-header'>Admin</span>
      <div className='nav'>
        <NavLink className={navLinkClass} to={"/dashboard"}>
          <span className='bullet'></span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink className={navLinkClass} to={"/post-management"}>
          <span className='bullet'></span>
          <span>Posts Management</span>
        </NavLink>
        <NavLink className={navLinkClass} to={"/settings"}>
          <span className='bullet'></span>
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigator;
