import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainNav from './components/MainNav';
import TavistockGeneral from './pages/tavistock/TavistockGeneral';
import TavistockHistory from './pages/tavistock/TavistockHistory';
import PostbridgeGeneral from './pages/postbridge/PostbridgeGeneral';
import PostbridgeBridge from './pages/postbridge/PostbridgeBridge';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/places/tavistock/general' exact component={TavistockGeneral} />
          <Route path='/places/tavistock/history' exact component={TavistockHistory} />
          <Route path='/places/postbridge/general' exact component={PostbridgeGeneral} />
          <Route path='/places/postbridge/clapperbridge' exact component={PostbridgeBridge} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
