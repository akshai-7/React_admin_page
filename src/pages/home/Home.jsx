import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss"
import Chart from "../../components/chart/Chart";
import Features from "../../components/featured/Features";

const Home = () => {
  return (
      <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              <Widget type="user"/>
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
            </div>
            <div className="charts">
              <Features/>  
              <Chart />
            </div>
        </div>
          
        
    </div>
  )
}

export default Home