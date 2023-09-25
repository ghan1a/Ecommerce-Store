import './App.css';
import { Fragment, useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import MainLayout from './layout/MainLayout';
import Navigation from './components/FirstNavbar';
import CartProvider from './components/CardContext';

function App() {

  const [currForm, setCurrForm] = useState('Login');
  const toggleForm = (formName) => {
    setCurrForm(formName);
  }

  return (
    <div className="App">
      <Fragment>
        <CartProvider>
          <Router>
            <Navigation />
            <MainLayout>
              <Routes>
                <Route path='/login' element={currForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />} />
                <Route exact path='/home' element={<Home />} />
              </Routes>
            </MainLayout>
          </Router>
        </CartProvider>
      </Fragment>
    </div>

  );
}

export default App;
