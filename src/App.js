import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {Container} from 'react-bootstrap'
import NavBar from "./components/navbar/navbar";
import recipeRoutes from './routes';

import './App.scss';

function App() {
  return (
    <div className="App">
       <Router>
        <NavBar/>
        <Container>
          {recipeRoutes.map((route, idx) => (<Route exact path={route.path} component={route.component} key={idx}/>))}
        </Container>
      </Router>
    </div>
  );
}

export default App;
