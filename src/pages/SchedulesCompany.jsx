import React from 'react';
import CompanySchedulesTable from '../components/CompanySchedulesTable';
import CompanySideBar from '../components/CompanySideBar';

function SchedulesCompany() {
  return (
    <main>
      <div className="flex flex-row">
        <CompanySideBar />
        <CompanySchedulesTable />
      </div>
    </main>
  );
}

export default SchedulesCompany;
