
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import {  Container } from 'semantic-ui-react'
import {routes} from './Routing';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navi></Navi>
      <Container className="main">
      <Switch>
          {routes.map((route) => (

            <Route exact={route.exact} path={route.path} key={route.title}> <Dashboard> {route.component} </Dashboard> </Route>
          ))}
        </Switch>
      </Container>
    </div>

  );
}

export default App;
