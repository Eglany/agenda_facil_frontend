import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserSideBar from '../components/UserSideBar';
import { requestFavoriteCompanies } from '../utils/userFetch';
import Loading from '../components/Loading';
import CompanyCard from '../components/CompanyCard';

function Favorites() {
  const [companies, setCompanies] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getCompanies = () => {
    const { token } = JSON.parse(localStorage.getItem('user')) || {};
    return (
      requestFavoriteCompanies(token)
        .then(({ data }) => setCompanies(data))
        .catch((error) => console.log(error)),
      setIsFetching(false)
    );
  };

  useEffect(() => {
    if (isFetching) {
      getCompanies();
    }
  }, [companies]);

  if (isFetching) return <Loading />;

  return (
    <main>
      <div className="flex flex-row">
        <UserSideBar />
        <section className="m-20 ml-[400px] w-full">
          <div className="mb-20 flex justify-between">
            <h1 className="text-4xl font-bold text-af-main-blue">Favoritos</h1>
            <Link className="btn" to="/user/create-new-schedule">
              + Criar novo agendamento
            </Link>
          </div>
          <ul className="flex flex-wrap">
            {companies.map((company) => (
              <div className="w-1/4 p-4" key={company.id}>
                <CompanyCard company={company} />
              </div>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
