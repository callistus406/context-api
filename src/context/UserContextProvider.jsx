import { useState, createContext, useEffect } from 'react';

function UserContextProvider(props) {
  const userContext = createContext();
  const [userData, setUserData] = useState();

  useEffect(() => {
    let isCancelled = false;

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
          setUserData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      isCancelled = true;
    };
  }, []);

  return <userContext.Provider>{props.children}</userContext.Provider>;
}

export default UserContextProvider;
