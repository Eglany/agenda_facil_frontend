/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CompanyCard({ company }) {
  return (
    <li className="card m-5 w-full bg-base-100 shadow-xl">
      <Link
        to={`/user/estabelecimentos-favoritos/${company.id}`}
        state={company}
        className="card-body"
      >
        <p className="card-title">{company.name}</p>
      </Link>
    </li>
  );
}

CompanyCard.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default CompanyCard;
