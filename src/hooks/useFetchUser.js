import { useState, useEffect } from 'react';
import { getUser } from '../services/HNService';

const useFetchUser = (id) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUser(id)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { isLoading, user };
};

export default useFetchUser;
