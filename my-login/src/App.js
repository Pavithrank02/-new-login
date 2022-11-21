
import './App.css';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import SignIn from './SignIn';
function App() {
  return (
    <div className="app">
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signIn" element={<SignIn />} />
       </Routes>
    </div>
  );
}

export default App;
