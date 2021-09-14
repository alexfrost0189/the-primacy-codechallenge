import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Main } from '@components/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tasks">
          <Main />
        </Route>
        <Redirect strict from="/**" to="/tasks" />
      </Switch>
    </Router>
  );
}

export default App;
