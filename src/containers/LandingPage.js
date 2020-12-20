// @ Description
// Asks user of which 3 categories they fall under
import { makeStyles } from '@material-ui/core/styles';

import {Button} from '@material-ui/core/';

import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    }
  });

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>[APP NAME]</h1>
            <p>Explore over 400 thousand plants found across the world.</p>
            <h2>This app if for...</h2>
            <p><strong>Gardeners</strong><br/>We provide detailed information on how you should grow your desired plant.</p>
            <p><strong>Researchers</strong><br/>We provide a robust searching tool to access taxonomical records and published records.</p>
            <p><strong>Nature Lovers</strong><br/>Explore plants in a context that you will understand.</p>
            <Button variant="contained" size="large" color="primary">
                <Link to="/search">Lets get started</Link>
            </Button>
            <p>Note: <i>Some entries of data are incomplete or tagged as trivial in regard to taxonomy classification.</i></p>
        </div>
    )
}

LandingPage.propTypes = {

}

export default LandingPage
