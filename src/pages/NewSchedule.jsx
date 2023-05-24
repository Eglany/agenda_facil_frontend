import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import UserSideBar from '../components/UserSideBar';
import formatDate from '../utils/formatDate';
import {
  requestAllServicesByCompany,
  requestAvailableSchedueles,
  requestCreateNewSchedule,
  requestFavoriteCompanies,
} from '../utils/userFetch';

function NewSchedule() {
  const [companies, setCompanies] = useState([]);
  const [servicesByCompanySelect, setServicesByCompanySelect] = useState([]);
  const [availableSchedules, setAvailableSchedules] = useState([]);
  const [itensSelected, setItensSelected] = useState({
    company: '',
    service: '',
    date: '',
    hour: '',
  });
  const [startDate, setStartDate] = useState(new Date());
  const [isFetching, setIsFetching] = useState(true);
  const navigate = useNavigate();

  const getCompanies = () => {
    const { token } = JSON.parse(localStorage.getItem('user')) || {};
    return (
      requestFavoriteCompanies(token)
        .then(({ data }) => setCompanies(data))
        .catch((error) => console.log(error)),
      setIsFetching(false)
    );
  };

  const companySelectHandleChange = ({ target }) => {
    const { token } = JSON.parse(localStorage.getItem('user')) || {};

    requestAllServicesByCompany(token, target.value)
      .then(({ data }) => setServicesByCompanySelect(data))
      .catch((error) => console.log(error));

    setItensSelected({ ...itensSelected, [target.id]: target.value });
  };

  const getAllAvailableSelectService = ({ company, service, date }) => {
    const { token } = JSON.parse(localStorage.getItem('user')) || {};

    requestAvailableSchedueles(token, company, service, date)
      .then(({ data }) => setAvailableSchedules(data))
      .catch((error) => console.log(error));
  };

  const handleClick = () => {
    const { token } = JSON.parse(localStorage.getItem('user')) || {};
    const {
      company, service, date, hour,
    } = itensSelected;
    requestCreateNewSchedule(token, company, service, date, hour)
      .then(() => navigate('/user/schedules'))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (isFetching) {
      getCompanies();
    }
  }, [companies]);

  useEffect(() => {
    const verifyNotNull = itensSelected.company.length
      && itensSelected.service.length
      && itensSelected.date.length;

    if (verifyNotNull) {
      getAllAvailableSelectService(itensSelected);
    }
  }, [itensSelected]);

  if (isFetching) return <Loading />;

  return (
    <main className="flex flex-row">
      <UserSideBar />
      <section className="m-20 ml-[400px] w-full">
        <h1 className="text-4xl font-bold text-af-main-blue">
          Criar Novo agendamento
        </h1>
        <form className="mt-10 flex flex-col">
          <label htmlFor="companies">
            Seus estabelecimentos:
            <select
              name="companies"
              id="company"
              className="select-bordered select ml-5"
              onChange={companySelectHandleChange}
            >
              <option value="">Escolha um estabelecimento</option>
              {companies.map((company) => (
                <option value={company.id}>{company.name}</option>
              ))}
            </select>
          </label>
          {servicesByCompanySelect.length ? (
            <div className="mt-5">
              Selecione um servico:
              <select
                name="services"
                id="service"
                className="select-bordered select ml-5"
                onChange={({ target }) => setItensSelected({
                  ...itensSelected,
                  [target.id]: target.value,
                })}
              >
                <option value="">Escolha um servico</option>
                {servicesByCompanySelect.map(
                  ({
                    id, name, price, averageTime,
                  }) => (
                    <option value={id}>
                      {`${name} - R$${price} - tempo medio: ${averageTime}`}
                    </option>
                  ),
                )}
              </select>
              <div className="mt-5 flex">
                Selecione uma data:
                <DatePicker
                  selected={startDate}
                  className="input-bordered input ml-5"
                  onChange={(date) => {
                    setStartDate(date);
                    setItensSelected({
                      ...itensSelected,
                      date: formatDate(date),
                    });
                  }}
                />
              </div>
            </div>
          ) : null}
        </form>
        <section className="mt-5 w-full border-zinc-900">
          <h1>Selecione o Horário:</h1>
          <div>
            <ul className="grid w-1/4 grid-cols-2">
              {availableSchedules.map(({ itsSchedule, scheduleTime }) => (
                <button
                  type="button"
                  disabled={itsSchedule}
                  value={scheduleTime}
                  onClick={
                    ({ target }) => setItensSelected({ ...itensSelected, hour: target.value })
                  }
                  className={`mt-2 h-10 w-24 rounded-lg border border-zinc-300 bg-zinc-200 hover:bg-zinc-400 ${
                    itsSchedule
                    && 'bg-zinc-300 text-zinc-950/25 hover:bg-zinc-300'
                  } ${
                    itensSelected.hour === scheduleTime
                    && 'border-zinc-600 bg-zinc-400'
                  }`}
                >
                  {scheduleTime}
                </button>
              ))}
            </ul>
          </div>
        </section>
        <section className="mt-10 flex justify-center gap-5">
          <button
            className="btn"
            type="button"
            onClick={() => navigate('/user/schedules')}
          >
            cancelar
          </button>
          <button type="button" onClick={handleClick} className="btn flex">
            <FaCalendarPlus />
            Agendar
          </button>
        </section>
      </section>
    </main>
  );
}

export default NewSchedule;
