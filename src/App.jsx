import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Albums from "./pages/Albums"
import Posts from './pages/Posts'

function App() {
  return (
    <main>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>

          <Route exact path="/posts">
            <Posts />
          </Route>

          <Route exact path="/albums">
            <Albums />
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
    </main>
  )
}

export default App
