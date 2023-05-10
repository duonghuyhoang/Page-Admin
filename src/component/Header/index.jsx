import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useClickOutside from "./useClickOutside";
import "./Header.css";

function Header() {
  const [showLogout, setShowLogout] = useState(false);
  const logoutRef = useRef(null);
  const handleLogoutClick = () => {
    setShowLogout(!showLogout);
  };
  useClickOutside(logoutRef, () => setShowLogout(false));
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
    <>
      <header className='wrapper-header'>
        <div className='content-header'>
          <div className='nav-mobile'>
            <div className='dropdown'>
              <button
                className='btn btn-secondary '
                type='button'
                style={{ backgroundColor: "transparent", border: "none" }}
                data-bs-toggle='dropdown'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fillRule='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                  />
                </svg>
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <NavLink className={"nav-link-mobile"} to={"/dashboard"}>
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"nav-link-mobile"}
                    to={"/post-management"}
                  >
                    <span>Posts Management</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"nav-link-mobile"} to={"/settings"}>
                    <span>Dashboard</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className='seperate2'></div>
          <div className='search-header'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='23'
              height='23'
              fill='currentColor'
              class='bi bi-search'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
            <input placeholder='Search...' />
          </div>
          <div className='icon-bell'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              class='bi bi-bell'
              viewBox='0 0 16 16'
            >
              <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z' />
            </svg>
          </div>
          <div className='seperate'></div>
          <div className='icon-header'>
            <span className='icon-user ' onClick={handleLogoutClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-person-circle'
                viewBox='0 0 16 16'
              >
                <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                <path
                  fillRule='evenodd'
                  d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
                />
              </svg>
              {"   "}
              <span className='user-name'>User</span>
            </span>
            <span className='drop-down-logout' onClick={handleLogoutClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                />
              </svg>
            </span>
            {showLogout && (
              <div className='log-out' ref={logoutRef}>
                <ul>
                  <li>
                    {" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='25'
                      fill='currentColor'
                      className='bi bi-person-circle'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                      <path
                        fillRule='evenodd'
                        d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
                      />
                    </svg>
                    <span>User</span>
                  </li>
                  <li>Settings & Privacy</li>
                  <li>Help & support</li>
                  <li>Display</li>
                  <li>Comment</li>
                  <li>Log out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
