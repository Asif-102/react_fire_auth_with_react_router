import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import UsersInfo from './components/UsersInfo/UsersInfo';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="users" element={<Users></Users>} />
        <Route path="user/:userId" element={
          <RequireAuth>
            <UsersInfo></UsersInfo>
          </RequireAuth>
        }></Route>
        <Route path="login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
