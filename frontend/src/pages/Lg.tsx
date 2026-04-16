import React from 'react';
import { useAuthLogin } from '../hooks/useAuthLogin';

const Lg = () => {
  useAuthLogin();
  return <>Loading...</>;
};

export default Lg;
