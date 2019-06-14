import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

const CARDS = [
  {
    id: 0,
    name: 'Elswick',
    link: 'https://t0.geograph.org.uk/stamp.php?id=5353773&amp;title=on&amp;gravity=SouthEast&amp;hash=68739936',
    desc: 'Elswick is a ward of the city of Newcastle upon Tyne, England, in the western part of the city,[1] bordering the River Tyne. Historically in Northumberland, Elswick became part of Newcastle in 1835. The usual resident population of the ward in 2011 was 13,198, 4.7% of the total population of Newcastle upon Tyne, comprising 5,116 households.'
  },
  {
    id: 1,
    name: 'Ouseburn',
    link: 'https://t0.geograph.org.uk/stamp.php?id=4772154&amp;title=on&amp;gravity=SouthEast&amp;hash=6fca3cc8',
    desc: 'The Ouseburn is a small river in Tyne and Wear, England that flows through the city of Newcastle upon Tyne into the River Tyne. It gives its name to the Ouseburn electoral ward.'
  },
  {
    id: 2,
    name: 'Gosforth',
    link: 'https://i2-prod.chroniclelive.co.uk/incoming/article11835930.ece/ALTERNATES/s615/JS79001019.jpg',
    desc: 'Gosforth is an affluent,[1] well established area of Newcastle upon Tyne, England, situated to the north of the city centre. Gosforth constituted an urban district from 1895 to 1974, when it became part of the City of Newcastle upon Tyne. It has a population of 23,620.'
  },
  {
    id: 3,
    name: 'Kenton',
    link: 'https://i2-prod.chroniclelive.co.uk/incoming/article1356766.ece/ALTERNATES/s615/foxton-green-in-kenton-newcastle-643871093.jpg',
    desc: 'Kenton is a suburb and electoral ward in the north west of Newcastle upon Tyne, England. It borders the Town Moor and Gosforth. Kenton also has close road links to Newcastle Airport. The ward population at the 2011 Census was 11,605.'
  }
]

function App() {
  return (
    <HashRouter basename="/whereto">
      <div className="app">
        <header className="app-header">
          <h1>↫ Where To?</h1>
        </header>
        <Switch>
          <Route exact path="/">
            <CardChooser cards={CARDS} />
          </Route>
          <Route component={Fallback}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

class CardChooser extends Component {
  constructor() {
    super()
    this.onClickForward = this.onClickForward.bind(this)
    this.state = {
      index: 0
    }
  }

  onClickForward() {
    if (this.state.index + 2 === this.props.cards.length) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index +1
      })
    }
  }

  render() {
    return (
      <div align="center">
        <div className="chooser">
          <Card {...this.props.cards[this.state.index + 1]} onClick={this.onClickForward} />
          <Card {...this.props.cards[this.state.index]} onClick={this.onClickForward} />
        </div>
      </div>
    )
  }
}

function Card(props) {
  return (
    <div className="card" onClick={props.onClick} data-id={props.id}>
      <h3>{props.name}</h3>
      <img src={props.link} alt={props.name} />
      <p>
        {props.desc}
      </p>
    </div>
  )
}

function Fallback() {
  return null
}

export default App;
