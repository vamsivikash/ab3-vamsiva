import React from "react";
import './App.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


function AddPromo() {
    let content = `In today’s fast paced world, you’ve got places you need to be but not enough time in your jam packed schedule.
    Wouldn’t it be nice if there were a transportation service that changed the way you get around daily?
    Introducing Wild Rydes, an innovative transportation service that helps people get to their destination faster and hassle-free.
    Getting started is as easy as tapping a button in our app.`;

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

export default AddPromo;
