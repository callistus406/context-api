import { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();
export function UserContextProvider(props) {
  // console.log(props);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!isCancelled) {
          setLoading(false);
          // console.log(data);
          setUserData(data);
          setError('');
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setUserData([]);
        console.log(error.message);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>error</h1>
      ) : (
        <UserContext.Provider
          value={{ data: [userData, setUserData], dataState: [loading, error] }}
        >
          {props.children}
        </UserContext.Provider>
      )}
    </>
  );
}
