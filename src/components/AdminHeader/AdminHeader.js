import React from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const AdminHeader = () => (
  <header className="adminHeader">
    <div className="adminNav">
      <AdminNav />
    </div>
      <h1>
        <Link className="adminHeaderLink" to="/home">
          Pan Outreach Admin Portal
        </Link>
      </h1>
  </header>
);

export default AdminHeader;