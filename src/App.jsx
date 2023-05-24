import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompanyProvider from './context/companyContext';
import UserProvider from './context/userContext';
import CompanyInfo from './pages/CompanyInfo';
import Favorites from './pages/Favorites';
import LoginCompany from './pages/LoginCompany';
import LoginUser from './pages/LoginUser';
import NewSchedule from './pages/NewSchedule';
import NewServiceCompany from './pages/NewServiceCompany';
import SchedulesCompany from './pages/SchedulesCompany';
import SchedulesUser from './pages/SchedulesUser';
import ServicesCompany from './pages/ServicesCompany';

function App() {
  return (
    <BrowserRouter>
      <>
        <UserProvider>
          <Routes>
            <Route path="/user/">
              <Route path="login" element={<LoginUser />} />
              <Route path="schedules" element={<SchedulesUser />} />
              <Route
                path="estabelecimentos-favoritos"
                element={<Favorites />}
              />
              <Route
                path="estabelecimentos-favoritos/:id"
                element={<CompanyInfo />}
              />
              <Route path="create-new-schedule" element={<NewSchedule />} />
            </Route>
          </Routes>
        </UserProvider>
        <CompanyProvider>
          <Routes>
            <Route path="/company/">
              <Route path="login" element={<LoginCompany />} />
              <Route path="schedules" element={<SchedulesCompany />} />
              <Route path="services" element={<ServicesCompany />} />
              <Route
                path="create-new-service"
                element={<NewServiceCompany />}
              />
            </Route>
          </Routes>
        </CompanyProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
