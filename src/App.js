import React, { Component } from 'react'
import styled from 'styled-components'

const InsultStyles = styled.div`
    font-family: 'Pirata One', cursive;
    letter-spacing: .2em;
    -webkit-text-stroke-width: .01em;
    -webkit-text-stroke-color: gray;
    text-align: center;
    background-color: black;
    color: white;
`

const adjective1 = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning", "froward", "frothy", "gleeking", "goatish", "gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty"]
const adjective2 = ["base-court", "bat-fowling", "beff-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "milk-livered", "motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten"]
const noun = ["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pidgeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlot", "vassal", "whey-face", "wagtail"]


class App extends Component {

    makeQuote = function buildQuote(event) {
      event.preventDefault()
      let adj1 = Math.floor((Math.random() * 48))
      let adj2 = Math.floor((Math.random() * 49))
      let noun3 = Math.floor((Math.random() * 50))
      document.getElementById("adj1").innerHTML = adjective1[adj1]
      document.getElementById("adj2").innerHTML = adjective2[adj2]
      document.getElementById("noun3").innerHTML = noun[noun3]
    }

  render() {
    return (
      <InsultStyles>
        <h1>Randomly Create A Shakespearean Insult</h1>
        <p id="quote">Thou <span id="adj1"></span><span id="adj2"></span></p><br />
        <p id="noun3"></p>
        <p>47</p>
        <button onClick={this.makeQuote}>Clicketh Here</button>
      </InsultStyles>
    )
  }
}

export default App
