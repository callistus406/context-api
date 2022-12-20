import { useContext } from 'react';
import {
  UserContext,
  UserContextProvider,
} from '../../context/UserContextProvider';
import User from './User';

function Index() {
  const { data, dataState } = useContext(UserContext);
  const [userData, setUserData] = data;
  //   const [loading, error] = data;
  //   console.log(userData);

  return (
    <>
      {userData.map((element, idx) => {
        const userInfo = {
          name: element.name,
          phrase: element.company?.catchPhrase,
          email: element.email,
          website: element.website,
        };
        return <User {...userInfo} key={idx} />;
      })}
    </>
  );
}

export default Index;
