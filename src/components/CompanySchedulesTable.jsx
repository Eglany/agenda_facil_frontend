import React, { useEffect, useState } from 'react';
import { requestSchedules } from '../utils/companyFetch';
import CompanyScheduleCard from './CompanyScheduleCard';
import Loading from './Loading';

export default function SchedulesTable() {
  const [schedules, setSchedules] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getSchedules = () => {
    const { token } = JSON.parse(localStorage.getItem('company')) || {};
    return (
      requestSchedules(token)
        .then(({ data }) => setSchedules(data))
        .catch((error) => console.log(error)),
      setIsFetching(false)
    );
  };

  useEffect(() => {
    if (isFetching) {
      getSchedules();
    }
  }, [schedules]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <section className="m-20 ml-[400px] w-full">
      <div className="mb-20 flex justify-between">
        <h1 className="text-4xl font-bold text-af-main-blue">Agendamentos</h1>
        {/* <Link className="btn" to="/company/create-new-schedule">
          + Criar novo agendamento
        </Link> */}
      </div>
      <ul>
        {schedules.map((schedule) => (
          <CompanyScheduleCard schedule={schedule} key={schedule.id} />
        ))}
      </ul>
    </section>
  );
}
