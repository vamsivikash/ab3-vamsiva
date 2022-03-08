import React, { useEffect, useState } from "react";
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


let customerId = '920508788';
const getOffersUrl = "https://rznylkgm8h.execute-api.us-east-2.amazonaws.com/dev/getOffers?customerId=";


function Promotions() {
    //let customerId = getCustomerId(user); - Hardcoded for convenience
    const [ userOffers, setUserOffers ] = useState([]);
    const [ specialOffer, setSpecialOffer ] = useState(false);

    let navigate = useNavigate();
    let test;
    useEffect(() => {
        axios.
            get(getOffersUrl + customerId)
            .then( (res) => {
                if(res != null){
                    console.log("I'm here!! ");
                    setUserOffers( Object.values(res.data.Items[0]) );
                }
                else{
                    setUserOffers( arr => [ ...arr, "No Offers on this account, ride more to gain new offers!"] );
                }
                console.log("SPC", specialOffer);
            })
            .catch(function(error){
                console.log("GET OFFERS ERROR ", error);
            })
    }, []);

  return (
    <div>

        <Button color="secondary" variant="outlined" size="large" startIcon={<AddBoxIcon/>} onClick={ () => navigate('/Redeem')}> 
            Add Promo
        </Button>

        <Button color="secondary" variant="outlined" size="large" startIcon={<StarRateIcon/>} onClick={ () => navigate('/App')} disabled={ specialOffer }> 
            Special Offer
        </Button>
        {
            userOffers.map(dat =>{

                if(dat.length > 0){
                    return(
                    <Card >     
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {dat}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Redeem</Button>
                        </CardActions>
                    </Card>
                    )
                }
                
            } )
            
        }
    </div>
  );
}

export default Promotions;
