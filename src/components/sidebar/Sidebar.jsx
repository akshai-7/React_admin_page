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

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Lamadmin</span>
        </div>
        <hr />
        
        <div className="center">
              <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icon" />
                      <span>Dasboard</span>
                </li>  
                <p className="title">LISTS</p>
                <li><PersonOutlineOutlinedIcon className="icon" />
                      <span>Users</span>
                </li>  
                <li><StoreIcon className="icon"/>
                    <span>Products</span>
                </li>  
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
              <div className="colorOption"></div>
              <div className="colorOption"></div>
        </div>
    </div> 
  )
}

export default Sidebar