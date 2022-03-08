import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FormLabel from '@mui/material/FormLabel';
import RedeemIcon from '@mui/icons-material/Redeem';
const apiURL = "https://rznylkgm8h.execute-api.us-east-2.amazonaws.com/dev/";

let params = {
  apiKey: 'My0IK1InMZ6RqOqHK0lrB1Kb0TfqbRjk5ELPtdwf', 
  appId: String(Math.round(Math.random()*1000000000))
};

let customerId = '920508788';

function App() {
  const [offerChosen, setOfferChosen] = useState("2");
  const [response, setResponse] = useState("");
  const [answered, setAnswered] = useState(false);
  let navigate = useNavigate();

  function submitAnswer(){
    const responseOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': params.apiKey
      },
      body: JSON.stringify({
        preference: {offerChosen},
        customerId: customerId
      })
    };
    //console.log("RESPONSE OPTINS ", responseOptions);
    fetch(apiURL, responseOptions)
    .then( response => response.json())
    .then(data => {
      console.log(data);
      setAnswered(true);
      setResponse(<FormLabel component="legend" color='secondary' focused='true'> {data.body} </FormLabel>);
    });
  }

  return (
    <div className="App">
      <FormControl component="fieldset">
        <FormLabel component="legend" color='primary' focused='true'> <b> Congratulations!! </b> Please chose your offer..</FormLabel>
        <br></br>
        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="1" name="offer" onClick={() => { setOfferChosen("1")}} control={<Radio /> } label="No surge fees on peak hours!" />
          <FormControlLabel value="2" name="offer" onClick={() => { setOfferChosen("2")}} control={<Radio />} label="Unlimited rides to Uni-World! " />
          <FormControlLabel value="3" name="offer" onClick={() => { setOfferChosen("3")}} control={<Radio />} label="Free Unicorn Upgrade " />
          <FormControlLabel value="4" name="offer" onClick={() => { setOfferChosen("4")}} control={<Radio />} label="Chance to win a Unicorn! " />
        </RadioGroup>
      </FormControl>

      <br></br>
      <br></br>
      <Button variant="outlined" size="large" startIcon={<RedeemIcon/>} onClick={submitAnswer} disabled={answered}>
        Claim Offer
      </Button>

      <Button variant="outlined" size="large" startIcon={<LocalOfferIcon/>} onClick={() => navigate('/Offers')} data={answered} >
        Offers
      </Button>

      <br/>
      {response}
    </div>
  );
}

export default App;
