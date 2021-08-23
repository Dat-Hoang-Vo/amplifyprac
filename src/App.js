import Home from './page/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App)
