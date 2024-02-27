import React from 'react';
import AppContext from '../services/appContext';

const useStore = () => {
  const data: any = React.useContext(AppContext);
  return data;
};
export default useStore;
