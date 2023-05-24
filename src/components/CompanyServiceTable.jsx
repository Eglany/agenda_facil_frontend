import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestServices } from '../utils/companyFetch';
import CompanyServiceCard from './CompanyServiceCard';
import Loading from './Loading';

function CompanyServiceTable() {
  const [services, setservices] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getservices = () => {
    const { token } = JSON.parse(localStorage.getItem('company')) || {};
    return (
      requestServices(token)
        .then(({ data }) => setservices(data))
        .catch((error) => console.log(error)),
      setIsFetching(false)
    );
  };

  useEffect(() => {
    if (isFetching) {
      getservices();
    }
  }, [services]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <section className="m-20 ml-[400px] w-full">
      <div className="mb-20 flex justify-between">
        <h1 className="text-4xl font-bold text-af-main-blue">Servicos</h1>
        <Link className="btn" to="/user/create-new-schedule">
          + Criar novo agendamento
        </Link>
      </div>
      <ul>
        {services.map((service) => (
          <CompanyServiceCard service={service} key={service.id} />
        ))}
      </ul>
    </section>
  );
}

export default CompanyServiceTable;
