import './App.css';
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FirstNavbar from './components/FirstNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [currForm, setCurrForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrForm(formName);
  }

  return (
    <div className="App">
      <FirstNavbar />
      <Router>
        <Route path='/login' element={<Login />} />
        {/* <Login> {
          currForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />}
        </Login> */}
      </Router>
    </div>
  );
}

export default App;
