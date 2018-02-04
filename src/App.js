import React, { Component } from 'react';
import RandomTeamTable from './componenets/RandomTeam'
import TeamMatrix from './componenets/TeamMatrix'
import SachinCenturies from './componenets/SachinCenturies'
import WorldMap from './componenets/WorldMap'
import Ashes from './componenets/Ashes'
import RunChase from './componenets/RunChase'
import DhoniFinishes from './componenets/DhoniFinishes'
import IndividualScoreWithTime from './componenets/IndividualScoreWithTime'
import StrikeAndAverageODI from './componenets/StrikeAndAverageODI'
import MultiFormatPerformance from './componenets/MultiFormatPerformance'
import PlayerAge from './componenets/PlayerAge'
//import d3 from './d3.v3.min'
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import './skeleton.min.css';

/*
<!--

import time
    ...: for p in players:
    ...:     time.sleep(2)
    ...:
    ...:     res = requests.get(p['url'])
    ...:     content = res.text
    ...:
    ...:     soup = BeautifulSoup(content, 'html.parser')
    ...:
    ...:     try:
    ...:         p['dob'] = soup.find_all('p', class_='ciPlayerinformationtxt')[1].text
    ...:     except:
    ...:         p['dob'] = 'NA'
    ...:
    ...:     p['debuts'] = []
    ...:     try:
    ...:         p['debuts'].append(soup.find_all("tr", class_="data2")[0].find_all("td")[1].text)
    ...:     except:
    ...:         pass
    ...:
    ...:     try:
    ...:         p['debuts'].append(soup.find_all("tr", class_="data2")[2].find_all("td")[1].text)
    ...:     except:
    ...:         pass
    ...:     print(p)

    

        <div>
          <RandomTeamTable/>
        </div>

        <div>
          <TeamMatrix/>
        </div>

        <div>
          <SachinCenturies/>
        </div>

        <div>
          <WorldMap/>
        </div>

        <div>
          <Ashes/>
        </div>

        <div>
          <RunChase/>
        </div>

-->
* */

class App extends Component {
  render() {
    return (
      <div className="ic">
        <header className="ic-header">
          <h1 className="ic-title">Inside Cricket</h1>
          <p>A fifth umpire' view of your favorite sport</p>
          <p className="ic-author"><a href="https://twitter.com/hackpravj" target="_blank">Pravendra Singh</a></p>
        </header>
        <p className="ic-intro">
          Cricket is not only a sport but a religion in India, we even have our own <a href="https://en.wikipedia.org/wiki/Sachin_Tendulkar" target="_blank">God of Cricket</a>.
        </p>

        <div>
          <PlayerAge/>
        </div>

      </div>
    );
  }
}

export default App;
