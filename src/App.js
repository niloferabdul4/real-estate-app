
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import PropByCategory from './Pages/Property/PropByCategory';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { useContext } from 'react';
import { PropContext } from './Context/PropContextProvider';

function App() {
  const {user}=useContext(PropContext)

  return (
    <div className="App">
      {!user? 
      (
       <>
       <Login />
      
      </>
      )
    :
    
      (
              <>
                <Header />                
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:category' element={<PropByCategory/>}/>
                    <Route path="/detail/:id" element={<PropertyDetails/>}/>
                    <Route path='/register' element={<Register/>} />
                </Routes>
                <Footer />
    </>
      )
}           

    </div>
  );
}

export default App;
