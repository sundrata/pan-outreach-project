import React from 'react';
import { Link } from 'react-router-dom';

import AdminLessons from '../AdminLessons/AdminLessons';
import AdminMusic from '../AdminMusic/AdminMusic';
import AdminSchools from '../AdminSchools/AdminSchools';
import AdminNav from '../AdminNav/AdminNav';
import LogOutButton from '../LogOutButton/LogOutButton';

const AdminDashboard = () => (
  <div>
    <div>
      <p>
        Admin Dashboard  
        <Link to="/schools">
        <button>Schools</button>  
        </Link>
        <LogOutButton />  
      </p>
    </div>
  </div>
);

export default AdminDashboard;
