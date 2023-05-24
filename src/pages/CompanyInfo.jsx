import React from 'react';
import { useLocation } from 'react-router-dom';
import UserSideBar from '../components/UserSideBar';

function CompanyInfo() {
  const {
    state: { name, phoneNumber, companyAddresses },
  } = useLocation();

  return (
    <main>
      <UserSideBar />
      <section>
        <div>
          <h1>Informacoes do estabelecimento</h1>
          <h2>{name}</h2>
        </div>
        <div>
          <h3>Enderecos:</h3>
          {companyAddresses.map(
            ({
              address,
              cep,
              city,
              state,
              complement,
              district,
              houseNumber,
            }) => (
              <div>
                <span>
                  <strong>Lugradouro:</strong>
                  <p>{`${address}, Bairro ${district}, N° ${houseNumber}`}</p>
                </span>
                <span>
                  <strong>complemento:</strong>
                  <p>{complement}</p>
                </span>
                <span>
                  <strong>Cep:</strong>
                  <p>{cep}</p>
                </span>
                <span>
                  <strong>Telefone:</strong>
                  <p>{phoneNumber}</p>
                </span>
                <span>
                  <strong>Cidade/Estado:</strong>
                  <p>{`${city}/${state}`}</p>
                </span>
              </div>
            ),
          )}
        </div>
      </section>
      <section>
        <button type="button">adicioar aos fasvoritos</button>
        <button type="button">remover dos favoritos</button>
      </section>
    </main>
  );
}

export default CompanyInfo;
