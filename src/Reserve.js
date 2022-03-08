import React from "react";
import './App.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


function Reserve() {
    let content = `Reserve your Unicorn Rides in Advance, coming soon...`;

    return (
        <React.Fragment>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '10vh' }}>
                    <Grid item xs={3}>
                        <Typography color="secondary" gutterBottom variant="h5" component="div"> {content} </Typography>
                    </Grid>   
                    <br />       
                </Grid> 
               
        </React.Fragment>
    );
}

export default Reserve;
