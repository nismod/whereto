import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter basename="/whereto">
      <div className="app">
        <header className="app-header">
          <h1>↫ Where To?</h1>
        </header>
        <Switch>
          <Route exact path="/" component={CardChooser}/>
          <Route path="/about" component={Fallback}/>
          <Route path="/:user" component={Fallback}/>
          <Route component={Fallback}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

class CardChooser extends Component {
  render() {
    return (
      <div className="chooser">
        <div className="card">
          <h3>Ouseburn</h3>
          <img src="https://t0.geograph.org.uk/stamp.php?id=4772154&amp;title=on&amp;gravity=SouthEast&amp;hash=6fca3cc8" />
        </div>
        <div className="card">
          <h3>Elswick</h3>
          <img src="https://t0.geograph.org.uk/stamp.php?id=5353773&amp;title=on&amp;gravity=SouthEast&amp;hash=68739936" />
        </div>
      </div>
    )
  }
}

function Fallback() {
  return null
}

export default App;
