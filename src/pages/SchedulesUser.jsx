/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SchedulesTable from '../components/UserSchedulesTable';
import UserSideBar from '../components/UserSideBar';

export default function SchedulesUser() {
  return (
    <main>
      <div className="flex flex-row">
        <UserSideBar />
        <SchedulesTable />
      </div>
    </main>
  );
}
