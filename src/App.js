import Form,{valeurFinale} from "./Form";
import Header from "./Header";
import Line from "./Line";
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'

function App() {
  const tableau = [40,60,50,45];
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
           <Header/>
           <Form/>
          </Route>
          <Route path="/line">
            <Line valeur ={valeurFinale} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
