import './App.css';
import Users from './components/Users';
import { UserContextProvider } from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Users />
      </div>
    </UserContextProvider>
  );
}

export default App;
