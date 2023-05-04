
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PropByCategory from './Pages/Property/PropByCategory';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { useContext } from 'react';
import { PropContext } from './Context/PropContextProvider';
import PropByType from './Pages/Property/PropByType';
import Properties from './Pages/Properties/Properties';
import Favourites from './Pages/Favourites/Favourites';

function App() {
  const {user}=useContext(PropContext)

  return (
    <div className="App">
              <>
                              
                <Routes>
                    <Route path='/' element={user ? <Home /> : <Register />} />
                    <Route path='/properties' element={ <Properties/> } />
                    <Route path='/favourites' element={ <Favourites/> } />
                    <Route path='/category/:category' element={<PropByCategory/>}/>
                    <Route path='/property/:property' element={<PropByType/>}/>
                    <Route path="/details/:id" element={<PropertyDetails/>}/>
                    <Route path='/login' element={user ? <Home /> : <Login />} />
                    <Route path='/register' element={user ? <Home /> : <Register />} />
                </Routes>
             
    </>

    </div>
  );
}

export default App;
