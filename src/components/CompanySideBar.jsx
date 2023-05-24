/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CompanySideBar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('company')) || {};

    setUsername(name);
  }, [username]);

  return (
    <section className="fixed h-screen w-[360px] bg-af-main-blue text-white">
      <h1 className="my-20 flex justify-center self-center text-sm font-normal">
        {username}
      </h1>
      <span className="flex h-0.5 w-full items-center bg-af-sid-f-blue" />

      <div className="my-12 w-full text-white">
        <Link
          to="/company/schedules"
          className="my-2 flex h-16 flex-row items-center hover:bg-af-sid-f-blue"
        >
          <FaCalendarAlt className="mx-4 h-6 w-6" />
          <strong>Meus agendamentos</strong>
        </Link>
        <Link
          to="/company/services"
          className="my-2 flex h-16 flex-row items-center hover:bg-af-sid-f-blue"
        >
          <FaStar className="mx-4 h-6 w-6" />
          <strong>Meus Servicos</strong>
        </Link>
        {/* <Link
          to="/user/perfil"
          className="my-2 flex h-16 flex-row items-center hover:bg-af-sid-f-blue"
        >
          <FaUserAlt className="mx-4 h-6 w-6" />
          <strong>Ver perfil</strong>
        </Link> */}
      </div>
    </section>
  );
}

export default CompanySideBar;
