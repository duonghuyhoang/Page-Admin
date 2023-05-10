import React, { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/page-admin") {
      navigate("/");
    }
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/subcription");
    }
  }, [location.pathname, navigate]);

  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-link-sub activated-sub" : "nav-link-sub";
  };
  return (
    <div className='wrapper-dashboard'>
      <div className='title-dashboard'>Overview dashboard</div>
      <div className='demo-btn-ground1'>
        <span>7 Days</span>
        <span>1 Month</span>
        <span>3 Month</span>
      </div>
      <div className='demo-btn-ground2'>
        <span>24 Mar 2019 - 24 Mar 2019 </span>
      </div>
      <div className='nav-dashbroard'>
        <NavLink className={navLinkClass} to='/dashboard/subcription'>
          <span className='sub-title'>Subcription</span>
        </NavLink>
        <NavLink className={navLinkClass} to={"/dashboard/revenue"}>
          <span className='sub-title'>Revenue</span>
        </NavLink>
      </div>
      <div className='cut-line'></div>
    </div>
  );
}

export default Dashboard;
