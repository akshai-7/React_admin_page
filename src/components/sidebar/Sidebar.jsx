import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from "react-router-dom";
import DarkModeContext from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
          <div className="top">   
              <Link to="/" style={{textDecoration:"none"}}>
                   <span className="logo">Lamadmin</span>
              </Link>
        </div>
        <hr />
        <div className="center">
              <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration:"none"}}>
                <li><DashboardIcon className="icon" />
                      <span>Dasboard</span>
                </li>  
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li><PersonOutlineOutlinedIcon className="icon" />
                      <span>Users</span>
                </li> 
                </Link> 
                <Link to="/products" style={{textDecoration:"none"}}>
                <li><StoreIcon className="icon"/>
                    <span>Products</span>
                </li>
                </Link>
                  
                <li><CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>  
                <li><LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>  
                <p className="title">USEFULL</p>
                <li><InsertChartIcon className="icon" />
                    <span>Stats</span>
                </li>   
                <li><NotificationsNoneIcon className="icon"/>
                    <span>Notifications</span>
                </li>  
                <p className="title">SERVICE</p>
                <li><SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>System Helth</span>
                </li>  
                <li><PsychologyAltOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>  
                <li><SettingsApplicationsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>  
                <p className="title">USER</p>
                <li><AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>  
                <li><ExitToAppOutlinedIcon className="icon"/>
                    <span>LogOut</span>
                </li>  
            </ul> 
        </div>
          <div className="bottom">
              <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
              <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
        </div>
    </div> 
  )
}

export default Sidebar