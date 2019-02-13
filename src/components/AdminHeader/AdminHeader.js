import React from 'react';
import AdminNav from '../AdminNav/AdminNav';

const AdminHeader = () => (
  <header className="adminHeader">
    <div className="adminNav">
      <AdminNav />
    </div>
      <h1>
        Pan Outreach Admin Portal
      </h1>
  </header>
);

export default AdminHeader;