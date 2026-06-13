import { useState } from 'react';
import Sidebar from './Sidebar';
import IncredibleAdmin from './IncredibleAdmin';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('incredible');

  const sections = {
    incredible: <IncredibleAdmin />,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="flex-1 p-6 overflow-auto">
        <div className="bg-white rounded-lg shadow p-6">
          {sections[activeSection]}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;