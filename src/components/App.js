import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRequest } from '../actions/users';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  return <div>Hello World</div>;
}

export default App;
