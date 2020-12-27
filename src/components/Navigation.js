import {makeStyles} from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor:'#667147',
        zIndex: '9',
        color: '#fff',
    },
    container: {
        padding: '10px 5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));

const Navigation = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Container maxWidth="xl" className={classes.container}>
                <span><strong>[APP NAME]</strong></span>
                <span>Austin Reynaud</span>
            </Container>
        </div>
    )
}

export default Navigation;