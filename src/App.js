
import { useSelector } from 'react-redux';
import './App.css';
import UserDetails from './components/UserDetails';
import { Data } from './Features/data';
import PersonDetails from './RTK/PersonDetails';

function App() {
  

  return (
    <>
      {/* <UserDetails/>  */}
      <Data/>
      {/* < PersonDetails/> */}
    </>
 
  );
}

export default App;
