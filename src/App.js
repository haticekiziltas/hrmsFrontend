
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Dashboard>  </Dashboard>


    </div>

  );
}

export default App;
