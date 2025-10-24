import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Intro from './components/Intro'
import Illustration from './components/Illustration'
import Design from './components/Design'
import Motion from './components/Animation'
import AboutMe from './components/AboutMe'
import Login from './components/Login'

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/illustration">
          <Illustration />
        </Route>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="/animation">
          <Animation />
        </Route>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  )
}

export default App
