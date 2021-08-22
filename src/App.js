import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!! :D</h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App)
