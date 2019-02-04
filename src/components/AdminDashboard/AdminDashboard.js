import React from 'react';
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
        <LogOutButton />  
      </p>
    </div>
  </div>
);

export default AdminDashboard;
