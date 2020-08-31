import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import Background from '../../assets/background.jpg';
import MobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme=> ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom:"2em"
        }        
    },
    background: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            backgroundImage: `url(${MobileBackground})`,
            backgroundAttachment: "inherit",
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        marginLeft: "5em",
        marginRight: "2em",
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: 0
        },
        height: 50,
        width: 145,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    }
}))

export default function CallToAction(props) {
    const classes = useStyles()
    const { setValue, setSelectedIndex } = props
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Grid container
            justify={matchesSM? "center" : "space-between"}
            alignItems="center"
            className={classes.background}
            direction={matchesSM? "column": "row"}
        >
            <Grid item style={{marginLeft: matchesSM?0:"5em", textAlign: matchesSM?"center":"inherit"}}>
                <Grid container direction="column" >
                    <Grid item>
                        <Typography variant="h2" style={{lineHeight: "1em"}}>Simple Software.<br/>Revolutionary Results.</Typography>
                        <Typography variant="subtitle2" style={{fontSize: "1.5rem", fontWeight: 500}}>Take advantage of the 21st Century.</Typography>
                        <Grid container item justify={matchesSM?"center":"undefined"}>
                            <Button component={Link} to="/revolution" onClick={()=>setValue(2)} className={classes.learnButton} variant="outlined"> 
                                <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button component={Link} to="/estimate" onClick={()=>setValue(5)} className={classes.estimateButton} variant="contained">
                    Free Estimate
                </Button>
            </Grid>
        </Grid>
    )
}
