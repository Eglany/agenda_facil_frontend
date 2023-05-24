import React, { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import { requestLogin } from '../utils/companyFetch';
// import loginLogo from '../public/vector-login-sidebar.svg';

function LoginCompany() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const onHandleClick = async () => {
    try {
      const {
        data: { name, token },
      } = await requestLogin(email, password);

      localStorage.setItem('company', JSON.stringify({ name, token }));
      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to="/company/schedules" />;

  return (
    <main className="flex h-screen w-screen">
      <section>
        {/* <img
          src={loginLogo}
          alt=""
          className="relative inset-14 hidden w-5/6 bg-right"
        /> */}
      </section>
      <section className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-r from-af-main-blue to-af-grd-f-blue text-gray-50">
        <div className="align-middle">
          <h1 className="my-2 flex justify-center align-middle text-4xl font-bold text-gray-50">
            Login
          </h1>
          <p className="my-2 text-gray-50">
            Prazer! Entre usando suas informações
          </p>
        </div>
        <form className="flex w-3/4 flex-col justify-center">
          <div className="flex w-full flex-col">
            <label className="my-6 flex flex-col" htmlFor="email">
              Endereço de e-mail
              <input
                id="email"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="E-mail"
                className="my-1 w-full rounded-lg px-4 py-2 text-slate-950"
              />
            </label>
            <label className="flex flex-col" htmlFor="password">
              Senha
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Senha"
                className="my-1 w-full rounded-lg px-4 py-2 text-slate-950"
              />
            </label>
            {failedTryLogin ? (
              <p data-testid="login__input_invalid_login_alert">
                {`O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`}
              </p>
            ) : null}
          </div>
          <button
            className="my-8 flex w-60 justify-center self-center rounded-md bg-slate-950 p-2 md:w-96"
            type="button"
            onClick={onHandleClick}
          >
            <FaUserPlus className="mx-4  my-1 flex justify-center" />
            Login
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginCompany;
