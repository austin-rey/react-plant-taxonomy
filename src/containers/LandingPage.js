// @ Description
// Asks user of which 3 categories they fall under
import { makeStyles } from '@material-ui/core/styles';

import {Button,Grid,Paper} from '@material-ui/core/';

import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    headerContainer: {
        margin: '100px 0px'
    },
    panelContainer: {
        padding: '0px !important',
        marginBottom: '30px'
    },
    panel: {
        backgroundColor:'#E9EDC9',color:'#333',padding: '0px',height: '100%', borderRadius: '5px',marginBottom: '10px'
    },
    image: {
        display: 'block',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        maxHeight: '290px',
        minHeight: '290px',
        objectFit: 'cover'
    },
    mb20: {
        marginBottom: '20px'
    },
    buttonContainer: {
        marginBottom: '60px'
    },
    button: {
    padding: '0px'
    },
    buttonLink: {
        padding: '20px 40px',
        color:'#fff',
        textDecoration: 'none',
        width: '100%',
        height: '100%'
    }
  });

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={5}>
                <Grid item className={classes.headerContainer}>
                    <h1>[APP NAME]</h1>
                    <h4>Explore over 400 thousand plants found across the world.</h4>
                </Grid>
                <Grid item className={classes.panelContainer}>
                    <h3>This app if for...</h3>
                    <Grid container direction="column">
                        <Grid item className={classes.panel}>
                            <Grid container direction="row" spacing={4} wrap="wrap" alignItems="center">
                                <Grid item sm md lg>
                                    <img src="/images/gardener.jpg" alt="" className={classes.image}/>
                                </Grid>
                                <Grid item sm={12} md={8} lg={8}>
                                    <h3>Gardeners</h3>
                                    <p>We provide detailed information on how you should grow your desired plant.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.panel}>
                            <Grid container direction="row" spacing={4} wrap="wrap" alignItems="center">
                                <Grid item sm md lg>
                                    <img src="/images/researcher.jpg" alt="" className={classes.image}/>
                                </Grid>
                                <Grid item sm={12} md={8} lg={8}>
                                    <h3>Researchers</h3>
                                    <p>We provide a robust searching tool to access botanical data and published sources per each plant.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.panel}>
                            <Grid container direction="row" spacing={4} wrap="wrap" alignItems="center">
                                <Grid item sm md lg>
                                    <img src="/images/nature-lover.jpg" alt="" className={classes.image}/>
                                </Grid>
                                <Grid item sm={12} md={8} lg={8}>
                                    <h3>Nature Lovers</h3>
                                    <p>Explore plants in a context that you will understand.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <p>Note: <i>Some entries of data are incomplete or are trivial in regard to taxonomy classification.</i></p>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="flex-end">
                    <Grid item className={classes.buttonContainer}>
                        <Button variant="contained" size="large" color="primary" className={classes.button}>
                            <Link className={classes.buttonLink} to="/search/1">Lets get started</Link>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

LandingPage.propTypes = {

}

export default LandingPage
