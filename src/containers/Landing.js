// @ Description
// Asks user of which 3 categories they fall under
import { makeStyles } from '@material-ui/core/styles';

import {Card,CardActions,CardContent,Button} from '@material-ui/core/';

const useStyles = makeStyles({
    landingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

const Landing = () => {
    const classes = useStyles();
    return (
        <div className={classes.landingContainer}>
            <h1>APP NAME</h1>
            <p>Explore over 400 thousand plants found across the world.</p>
            <h2>This app if for...</h2>
            <p><strong>Gardeners</strong><br/>We provide detailed information on how you should grow your desired plant.</p>
            <p><strong>Researchers</strong><br/>We provide a robust searching tool to access taxonomical records and published records.</p>
            <p><strong>Nature Lovers</strong><br/>Explore plants in a context that you will understand.</p>
        </div>
    )
}
Landing.propTypes = {

}

export default Landing
