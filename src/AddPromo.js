import React, { useEffect, useState } from "react";
import './App.css';
import Button from '@mui/material/Button';
import RedeemIcon from '@mui/icons-material/Redeem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

let customerId = '920508788';
const redeemURL = "https://rznylkgm8h.execute-api.us-east-2.amazonaws.com/dev/redeem";


function AddPromo() {
    const [ promoCode, setPromoCode ] = useState("");
    const [ response, setResponse ] = useState("");

    function redeemOffer(){
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventType: "redeem",
                coupon: promoCode,
                customerId: customerId
            })
        };
        console.log("REQUEST PARAMS ", requestOptions);
        fetch(redeemURL, requestOptions)
        .then( response => response.json())
        .then(data => {
            console.log("REDEEMED RESPONSE ", data);
            setResponse(<Typography color="primary" gutterBottom variant="h5" component="div"> { data.body || data } </Typography>);
        });
    }  

    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '10vh' }}>
                    <Grid item xs={3}>
                        <TextField id="outlined-basic" label="Promo Code" variant="outlined" onChange={ (e) => setPromoCode(e.target.value) } />
                    </Grid>   
                    <br />
                    <Grid item xs={3}>
                        <Button color="secondary" variant="outlined" size="large" startIcon={<RedeemIcon/>}  onClick={redeemOffer} > 
                            Redeem
                        </Button>
                    </Grid> 
                    <br/>
                    
                    <Grid item xs={3}>
                        {response}
                    </Grid>                 
                </Grid> 
               
        </div>
    );
}

export default AddPromo;
