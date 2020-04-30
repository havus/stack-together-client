import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar   from './components/Navbar';
import Auth     from './scenes/Auth';
import Home     from './scenes/Home';
import NotFound from './scenes/NotFound';
import { NewQuestion, Question } from './scenes/Question';
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './ui-kit/index.scss';

library.add(faCaretUp, faCaretDown);

function App() {
  return (
    <Router>
      <Route component={Navbar} />
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/' exact component={Home} />
        <Route path='/question/new' component={NewQuestion} />
        <Route path='/question/:id' component={Question} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
