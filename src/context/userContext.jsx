import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

function UserProvider({ children }) {
  const data = '';
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
