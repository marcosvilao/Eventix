import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';




function App() {
  return (
    <div>
      <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/home/:id'} component={Detail}/>
    </Switch>
    </div>
    
  );
}

export default App;
