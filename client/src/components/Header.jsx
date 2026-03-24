import { NavLink, useNavigate} from "react-router-dom";
import { useState, useEffect} from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

function Header ({ onScrollToEvents, onScrollToServices, scrollTop}) {
const navigate = useNavigate();
const  [mobileNavOpen, setMobileNavOpen] =  useState(false);


const {loading, error, useLogin, useLogout, user, isAuthenticated} = useAuth();

useEffect(() => {
    mobileNavOpen && setMobileNavOpen(false);
}, [scrollTop]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md  border-b transition-all transition-200 border-gray-200`}>
          <div className="layout-container flex h-[70px] grow flex-col">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="layout-content-container flex flex-col md:flex-row gap-4 w-full max-w-[1200px] items-center justify-between py-4">
          <div className="flex items-center gap-4 text-slate-900" onClick={
           () => {navigate("/")}
          }>
              <div className="size-8 text-primary hidden md:block">
                  <img src="https://res.cloudinary.com/dslzm3lo6/image/upload/v1771483783/logo_rbnlbh.jpg" alt="D Wave Entertainment Logo" className="w-full h-full object-contain"/>
              </div>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <div className="flex items-center gap-9">
                  <a className="text-sm text-white font-medium transition-colors cursor-pointer" onClick={() => onScrollToEvents()}>Upcoming Events</a>
                  <NavLink className="text-sm text-white font-medium transition-colors" to="/about-us">About Us</NavLink>
                  <a className="text-sm text-white font-medium transition-colors cursor-pointer" onClick={() => onScrollToServices()}>Services</a>
                  <NavLink className="text-sm text-white font-medium transition-colors" to="/contact">Contact</NavLink>
              </div>
              { !isAuthenticated && (
              <button className="bg-white hover:scale-105 transition-all text-primary text-sm font-bold h-10 px-6 rounded-lg shadow-[0_0_20px_rgba(40,24,40,0.4)] hover:shadow-[0_0_30px_rgba(40,24,40,0.6)]" onClick={ () =>
                navigate("/auth")
              }>
                                        Sign In
              </button> )}
              {
                isAuthenticated && (
                  <> 
                  <span className="text-white cursor-pointer" onClick={() => {
                    if (user.role === "admin") {
                      navigate("/admin");
                    } else if (user.role === "user") {
                      navigate("/dashboard");
                    }
                  }}>
                    {user.role === "user" ? "Dashboard" : "Admin"}</span>
                  <button className="bg-white hover:scale-105 transition-all text-primary text-sm font-bold h-10 px-6 rounded-lg shadow-[0_0_20px_rgba(40,24,40,0.4)] hover:shadow-[0_0_30px_rgba(40,24,40,0.6)]" onClick={
                    () => useLogout()
                  }>Logout</button>
                  </>
                )
              }
          </div>
          {/* <!-- Mobile Menu Icon --> */}
          <div className={` text-white opacity-85 bg-primary flex justify-center items-center rounded-sm p-1 md:hidden transition-all transition-200 text-bold`}>
          <span className="material-symbols-outlined" onClick={ () => {
            setMobileNavOpen(!mobileNavOpen)
          } 
          }>
            menu
          </span>
          </div>
          </div>
          </div>
          </div>
          {/* {Mobile Nav} */}
          <nav className={`${mobileNavOpen ? 'opacity-1 py-4' : 'opacity-1 h-[0px] py-0'}  md:hidden w-full bg-white absolute top-[71px] text-primary font-medium transition-all duration-250 flex`}>
            <ul className={`${mobileNavOpen ? "" : "h-[0px]"} flex flex-col items-center gap-2 m-auto`}>
              <li className={`${mobileNavOpen ? "" : "translate-y-[-60px] opacity-0"} transition-all duration-200`}><NavLink to={mobileNavOpen && "/"}>Home</NavLink></li>
              <li className={`${mobileNavOpen ? "" : "translate-y-[-30px] opacity-0"} transition-all duration-200`}><a onClick={ () => mobileNavOpen && onScrollToEvents()}>Upcoming Events</a></li>
              <li className={`${mobileNavOpen ? "" : "translate-y-[-60px] opacity-0"} transition-all duration-200`}><NavLink to={mobileNavOpen && "/about-us"}>About Us</NavLink></li>
              <li className={`${mobileNavOpen ? "" : "translate-y-[-90px] opacity-0"} transition-all duration-200`}><a onClick={() => mobileNavOpen && onScrollToEvents()}>Services</a></li>
              <li className={`${mobileNavOpen ? "" : "translate-y-[-120px] opacity-0"} transition-all duration-200`}><NavLink to={mobileNavOpen && "/contact"}>Contact</NavLink></li>
              {
                !isAuthenticated ?
                (
                  <li className={`${mobileNavOpen ? "" : "translate-y-[-150px] opacity-0"} transition-all duration-200`} onClick={() => {
                    navigate("/auth")
                  }}>
                    Sign In
                  </li>
                ) :
                (
                  <>
                  <li className={`${mobileNavOpen ? "" : "translate-y-[-150px] opacity-0"} transition-all duration-200`} onClick={() => {
                    if (user.role === "admin") {
                      navigate("/admin");
                    } else if (user.role === "user") {
                      navigate("/dashboard");
                    }
                  }
                  }>
                      {user.role === "user" ? "Dashboard" : "Admin"}
                  </li>
                  <li className={`${mobileNavOpen ? "" : "translate-y-[-150px] opacity-0"} transition-all duration-200`} onClick={
                    () => useLogout()
                  }>
                    Logout
                  </li>
                  </>
                )
              }
            </ul>
          </nav>
      </nav>
    </>
  )
}

export default Header