import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import AdminLessons from '../AdminLessons/AdminLessons';
// import AdminMusic from '../AdminMusic/AdminMusic';
// import AdminSchools from '../AdminSchools/AdminSchools';
import AdminNav from '../AdminNav/AdminNav';
import LogOutButton from '../LogOutButton/LogOutButton';

const music = require('./music.jpg');

const AdminDashboard = () => (
  <div>
    <div>
      <header className="adminHeader">Pan Outreach Admin Portal</header>
        <AdminNav />
        <div className="adminDashDisplay">
        <div className="dashBox">
        <img className="dashImages" src={music} /> <br></br>
        <Link to="/music">
        <button className="dashButtons">Sheet Music</button>  
        </Link>
        </div>
        <div className="dashBox">
        <img className="dashImages" src={music} /> <br></br>
        <Link to="/lessons">
        <button className="dashButtons">Lesson Plans</button>  
        </Link> 
        </div>
        <div className="dashBox">
        <img className="dashImages" src={music} /> <br></br>
        <Link to="/schools">
        <button className="dashButtons">Schools</button>  
        </Link> 
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
