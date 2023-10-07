import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import './App.css';
import EditUserForm from './pages/editUserForm/EditUserForm';
import AddUser from './pages/addUser/AddUser';
import UserList from './pages/userList/UserList';
import UserDetails from './pages/userDetails/UserDetails';
import Protected from './pages/routes/Protected';
import PublicRouter from './pages/routes/PublicRouter';
import { useState } from 'react';

JSON.parse(localStorage.getItem("token")) ?? localStorage.setItem("token", JSON.stringify(null));

function App() {
  const [token, settoken] = useState(JSON.parse(localStorage.getItem("token")));
  localStorage.setItem("token", JSON.stringify(token));

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PublicRouter exact path="/" components={Login} checkToken={token} setToken={settoken} />
          <PublicRouter path="/signup" components={Signup} checkToken={token} />
          <Protected path="/home" components={Home} checkToken={token} setToken={settoken} />
          <Protected path="/userlist" components={UserList} checkToken={token} setToken={settoken} />
          <Protected path="/edituserform/:id" components={EditUserForm} checkToken={token} />
          <Protected path="/userdetails/:id" components={UserDetails} checkToken={token} />
          <Protected path="/adduser" components={AddUser} checkToken={token} />
          <Protected path="/userlist" components={UserList} checkToken={token} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App; 
