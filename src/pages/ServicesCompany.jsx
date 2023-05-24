import React from 'react';
import CompanyServiceTable from '../components/CompanyServiceTable';
import CompanySideBar from '../components/CompanySideBar';

function ServicesCompany() {
  return (
    <main>
      <div className="flex flex-row">
        <CompanySideBar />
        <CompanyServiceTable />
      </div>
    </main>
  );
}

export default ServicesCompany;
