
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './Home';
import StudentsView from './component/student/StudentsView';
import AddStudent from './component/student/AddStudent.js';
import NavBar from './component/common/NavBar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="container mt-5">
      <Router>
      <NavBar />
        <Routes>
          <Route 
          exact 
          path="/" 
          element ={<Home/>}></Route>
          <Route 
          exact 
          path="/view-students" 
          element ={<StudentsView/>}></Route>
                    <Route 
          exact 
          path="/add-students" 
          element ={<AddStudent/>}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
