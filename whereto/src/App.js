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
  constructor(){
    super()
    this.onClickForward = this.onClickForward.bind(this)
  
    const name1 = 'Elswick'
    const name2 = 'Ouseburn'
    const name3 = 'Gosforth'
    const name4 = 'Kenton'

    const link1 = 'https://t0.geograph.org.uk/stamp.php?id=5353773&amp;title=on&amp;gravity=SouthEast&amp;hash=68739936'
    const link2 = 'https://t0.geograph.org.uk/stamp.php?id=4772154&amp;title=on&amp;gravity=SouthEast&amp;hash=6fca3cc8'
    const link3 = 'https://i2-prod.chroniclelive.co.uk/incoming/article11835930.ece/ALTERNATES/s615/JS79001019.jpg'
    const link4 = 'https://i2-prod.chroniclelive.co.uk/incoming/article1356766.ece/ALTERNATES/s615/foxton-green-in-kenton-newcastle-643871093.jpg'
    
    const desc1 = 'Elswick is a ward of the city of Newcastle upon Tyne, England, in the western part of the city,[1] bordering the River Tyne. Historically in Northumberland, Elswick became part of Newcastle in 1835. The usual resident population of the ward in 2011 was 13,198, 4.7% of the total population of Newcastle upon Tyne, comprising 5,116 households.'
    const desc2 = 'The Ouseburn is a small river in Tyne and Wear, England that flows through the city of Newcastle upon Tyne into the River Tyne. It gives its name to the Ouseburn electoral ward.'
    const desc3 = 'Gosforth is an affluent,[1] well established area of Newcastle upon Tyne, England, situated to the north of the city centre. Gosforth constituted an urban district from 1895 to 1974, when it became part of the City of Newcastle upon Tyne. It has a population of 23,620.'
    const desc4 = 'Kenton is a suburb and electoral ward in the north west of Newcastle upon Tyne, England. It borders the Town Moor and Gosforth. Kenton also has close road links to Newcastle Airport. The ward population at the 2011 Census was 11,605.'

    this.state = {
      index:0,
      nameList: [name1, name2, name3, name4],
      linkList: [link1, link2, link3, link4],
      descList: [desc1, desc2, desc3, desc4]
    }
  }

  onClickForward() {
    console.log(this.state)
    if (this.state.index + 1 === this.state.nameList.length) {
      this.setState({
        index:0
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
          <div className="card">
            <h3>{this.state.nameList[this.state.index + 1]}</h3>
            <button>
              <img src={this.state.linkList[this.state.index + 1]}
                   onClick={this.onClickForward}/>
            </button>
            <p>
              {this.state.descList[this.state.index + 1]}
            </p>
          </div>
          <div className="card">
            <h3>{this.state.nameList[this.state.index]}</h3>
            <button>
              <img src={this.state.linkList[this.state.index]}
                  onClick={this.onClickForward}/>
            </button>
            <p>
              {this.state.descList[this.state.index]}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

function Fallback() {
  return null
}

export default App;
