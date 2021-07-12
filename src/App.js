import AllUsers from './Components/AllUser';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound'; 
import Employees from './Components/Employees';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Employees} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
