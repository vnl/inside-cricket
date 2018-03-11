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
import ComparisonTriangle from './componenets/ComparisonTriangle'
import ComparisonTriangleHistory from './componenets/ComparisonTriangleHistory'
//import d3 from './d3.v3.min'
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import './skeleton.min.css';

/*
<!--

<div>
          <SachinCenturies/>
        </div>

        <div>
          <RunChase/>
        </div>

        <div>
          <MultiFormatPerformance/>
        </div>

        <div>
          <PlayerAge/>
        </div>

        <div>
          <Ashes/>
        </div>

        <div className="ic-section-title">"Sachin's Centuries: Superstitions vs Statistics"</div>

        <p className="ic-intro">
          He is considered the greatest batsman of all time. With a career spanning over 24 years, he holds the record for the most runs in both ODI and Test match format. Sachin is the only player to have scored a hundred centuries (100+ runs) in international cricket (49 in ODI and 51 in Test).
        </p>

        <p className="ic-intro">
          I grew up hearing that "<b>India loses a match every time Sachin hits a century</b>". Let's see if it's true. #MythBustersModeOn
        </p>

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
          Even though it's fighting to get a global attention, Cricket is one of the most followed sports in the world. So there is a good chance that you've heard of <i>Sir Don Bradman</i> or <i>Sachin Tendulkar</i>.
        </p>

        <p className="ic-intro">
          Cricket is not only a sport but a religion in India. We even have our own god, <i>Sachin Tendulkar</i>. I can vouch for my neighboring countries also that they have a similar situation because I have seen their love for the game.
        </p>

        <p className="ic-intro">
          But when you look at it closely, you find that the situation is <i>not the same everywhere</i>.
        </p>

        <div className="ic-section-title"># Reach of cricket</div>

        <p className="ic-intro">
          Originated in England, it started spreading to the other parts of the world, all thanks to the <i>British Empire</i>. But it's yet to come out of the post-colonial countries.
        </p>

        <p className="ic-intro">
          International Cricket Council (ICC) is the global governing body of the game that offers two types of memberships. <span className="full-member-text">Full members</span> are countries qualified to play official Test matches and <span className="associate-member-text">Associate members</span> are countries where cricket is firmly established.
        </p>

        <div>
          <WorldMap/>
        </div>

        <p className="ic-intro">
          It's crystal clear that all the <span className="full-member-text">full members</span> are the countries where Britishers have ruled in the past.
        </p>

        <p className="ic-intro">
          Another interesting thing to note, Canada is an <span className="associate-member-text">associate member</span> since 1968. There are records of civilian matches being played in the late 1700's near Montreal, but the game started losing its popularity in the modern time.
        </p>

        <p className="ic-quote">
          The British were not enthusiastic about the prospect of American participation in world cricket. When the ICC was established, it excluded countries from outside the British Empire from any role in its procedings, a move which undercut any movement towards the professionalization of the sport in the United States.
          <p className="ic-quote-author">Deb K. Das (Cricket Historian) <a target="_blank" href="http://web.uvic.ca/vv/student/cricket/empire/canada.html">[1]</a></p>
        </p>

        <p className="ic-intro">
          As per the condition now, Cricket is fighting with <i>Soccer</i> and <i>Basketball</i> for a global spot. The ICC is working on the global expansion but they find themselves in a dilemma where the new T20 format is becoming a threat to the old Test match format.
        </p>

        <div className="ic-section-title"># Game of thrones</div>

        <p className="ic-intro">
          Speaking of a global spot, we all support our home teams but it's not always that they win the matches.
        </p>

        <p className="ic-intro" style={{ fontWeight: 'bold' }}>
          Not in case, if you're an adult Australian.
        </p>

        <p className="ic-intro">
          You my friend, have had a pretty good time since your childhood, you've seen Aussies winning and ruining it all for others.
        </p>

        <p className="ic-intro">
          Let's observe the outcomes of Test Cricket matches from 1900's, when the ICC was formed. Three things can happen to a team playing a test match, they might <span style={{ fontWeight: 'bold', color: 'green' }}>win</span> or <span style={{ fontWeight: 'bold', color: 'red' }}>lose</span>, or the match can get <span style={{ fontWeight: 'bold', color: '#bb9a39' }}>drawn</span>.
        </p>

        <p className="ic-intro">
          The ternary plot below, represented as a triangle, can be used to compare teams in a given era. A team towards top has <span style={{ fontWeight: 'bold', color: 'green' }}>won</span> relatively more matches, a team in towards the left has <span style={{ fontWeight: 'bold', color: 'red' }}>lost</span> more, and the one in right has <span style={{ fontWeight: 'bold', color: '#bb9a39' }}>drawn</span> more.
        </p>

        <p className="ic-intro">
          Feel free to select a different time from the dropdown menu, hover/tap on a circle to see more details below the triangle.
        </p>

        <div>
          <ComparisonTriangle/>
        </div>

        <p className="ic-intro">
          Similarly, you can select a team and check out their journey so far. Why don't you start with your favorite team?
        </p>

        <div>
          <ComparisonTriangleHistory/>
        </div>

        <div className="ic-section-title"># Multi format performance</div>

        <div>
          <MultiFormatPerformance/>
        </div>

        <div className="ic-section-title"># Ashes: The oldest rivalry</div>

        <p className="ic-intro">
          The story dates back to the early days of cricket. In 1882, England lost a match against Australia for the first time on the home ground in Oval.
          A British newspaper <i>Sporting Times</i> published a satirical obituary the next day, mocking the English team.
        </p>

        <p className="ic-quote">
          In Affectionate Remembrance of ENGLISH CRICKET, which died at the Oval on 29 August 1882, Deeply lamented by a large circle of sorrowing friends and acquaintances.
          <pre>R.I.P.</pre>
          <p>N.B. – The body will be cremated and the ashes taken to Australia.</p>
          <p className="ic-quote-author">Sporting Times, 1882</p>
        </p>

        <p className="ic-intro">
          The English captain <i>Ivo Bligh</i> pledged to bring back the ashes in their upcoming tour to Australia. As promised, England won the next series with 2-1 and <i>won back the ashes</i>.
        </p>

        <p className="ic-intro">
          The series is played every two year when a team visits another one to get back the ashes. The Ashes are regarded as being held by the team that most recently won the series. If the series is <i>drawn</i>, the team that currently holds the Ashes retains it.
        </p>

        <div>
          <Ashes/>
        </div>

      </div>
    );
  }
}

export default App;
