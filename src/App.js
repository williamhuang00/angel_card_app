import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './LoginComponent/LoginComponent';
import CardComponent from './CardComponent/CardComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './custom.css';  // Import the custom SASS file


function App() {
  return (
    <div className="App">
      <Router basename="/angel_card_app">
      <Routes>
        <Route path="/" element={<LoginComponent/>} />
        <Route path="/card" element={<CardComponent/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
