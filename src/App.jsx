import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Albums from "./pages/Albums"
import Login from "./pages/Auth/Login"
import Profile from "./pages/Auth/Profile"
import Register from "./pages/Auth/Register"
import Verify from "./pages/Auth/Verify"
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

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/verify">
            <Verify />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
    </main>
  )
}

export default App
