import PropTypes from 'prop-types';
import React from 'react';

function CompanyServiceCard({ service }) {
  return (
    <li className="m-5">
      <div className="card card-side flex w-full bg-base-100 shadow-xl">
        <div className="card-body w-4/5">
          <h2 className="card-title font-bold text-af-main-blue">
            {service.name}
          </h2>
          {/* <p>
            <i>{service.name}</i>
          </p> */}
        </div>
        <div className="flex w-1/2 items-center justify-center space-x-2">
          <p>
            <span className="font-bold">Tempo medio:&nbsp;</span>
            {service.averageTime}
          </p>
          <p>
            <span className="font-bold">Preco:&nbsp;</span>
            {`R$ ${service.price}`}
          </p>
        </div>
      </div>
    </li>
  );
}

CompanyServiceCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string,
    averageTime: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default CompanyServiceCard;
