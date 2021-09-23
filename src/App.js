import {Login} from './components/login';
import Index from './components/Index';

import AdminDashboard from './components/admin/AdminDashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/" component={Index}/>
    <Route path="/dashboard" component={AdminDashboard}/>
    <Redirect to="/" />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
