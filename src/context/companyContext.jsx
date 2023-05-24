import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const CompanyContext = createContext();

function CompanyProvider({ children }) {
  const data = '';
  return (
    <CompanyContext.Provider value={data}>{children}</CompanyContext.Provider>
  );
}

CompanyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CompanyProvider;
