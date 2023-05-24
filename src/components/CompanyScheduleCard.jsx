import PropTypes from 'prop-types';
import React from 'react';
import { FaEdit, FaSearchPlus, FaTrashAlt } from 'react-icons/fa';

function CompanyScheduleCard({ schedule }) {
  const { user, date, hour } = schedule;

  return (
    <li className="m-5">
      <div className="card card-side flex w-full bg-base-100 shadow-xl">
        <div className="card-body w-4/5">
          <h2 className="card-title font-bold text-af-main-blue">
            {user.fullName}
          </h2>
          {/* <p>
            <i>{service.name}</i>
          </p> */}
          <p>
            <span className="font-bold">Horário:&nbsp;</span>
            {hour}
          </p>
          <p>
            <span className="font-bold">Data:&nbsp;</span>
            {date}
          </p>
        </div>
        <div className="card-actions flex w-1/5 items-center justify-center space-x-2">
          <button
            type="button"
            className="rounded bg-af-main-blue p-2 text-white"
          >
            <FaSearchPlus />
          </button>
          <button
            type="button"
            className="rounded bg-af-main-blue p-2 text-white"
          >
            <FaEdit />
          </button>
          <button type="button" className="rounded bg-red-600 p-2 text-white">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
}

CompanyScheduleCard.propTypes = {
  schedule: PropTypes.shape({
    user: PropTypes.shape({
      fullName: PropTypes.string,
    }).isRequired,
    date: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
  }).isRequired,
};

export default CompanyScheduleCard;
