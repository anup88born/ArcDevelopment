import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button'

import ButtonArrow from '../components/ui/ButtonArrow';
import CustomSoftwareIcon from '../assets/Custom Software Icon.svg';
import MobileIcon from '../assets/mobileIcon.svg';
import WebsiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme=>({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,        
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    servicesContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    celebrationText: {
        textTransform: "none",
        fontFamily: "Pacifico",
        fontSize: "1.25rem",
        fontWeight: 700,
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
    },

}))

export default function Services(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    const { setValue, setSelectedIndex } = props

    return (
        <Grid container direction="column">
            <Grid item style={{marginLeft: matchesSM?0:"5em", marginTop: matchesSM?"1em":"2em"}}>
                <Typography variant="h2" gutterBottom align={matchesSM?"center":undefined}>Services</Typography>
            </Grid>
            <Grid item> {/*iOS/Android App Block */} 
                <Grid 
                    container 
                    direction="row" 
                    justify={matchesSM? "center": "flex-end"} 
                    className={classes.servicesContainer}
                    style={{marginTop: matchesSM?"1em":"2em"}}
                >
                    <Grid item style={{textAlign: matchesSM? "center":undefined, width: matchesSM?undefined:"35em"}}>
                        <Typography variant="h4">iOS/Android App Development</Typography>
                        <Typography className={classes.subtitle} variant="subtitle1">
                            Extend Functionality.Extend Access.Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app<br/> with either mobile platform.
                        </Typography>
                        <Button component={Link} to="/mobileapps" onClick={()=>{setValue(1);setSelectedIndex(2)}} className={classes.learnButton} variant="outlined"> 
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM? 0:"5em"}}>
                        <img className={classes.icon} alt="Custom Software Icon" src={MobileIcon} width="250em"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*Custom Software Block */} 
                <Grid container direction="row" justify={matchesSM? "center": undefined} className={classes.servicesContainer}>
                    <Grid item style={{marginLeft: matchesSM? 0:"5em", textAlign: matchesSM? "center":undefined}}>
                        <Typography variant="h4">Custom Software Development</Typography>
                        <Typography className={classes.subtitle} variant="subtitle1">Save Energy. Save Time. Save Money.</Typography>
                        <Typography variant="subtitle1">Complete digital solutions, from investigation to {" "}
                            <span className={classes.celebrationText}>celebration.</span>
                        </Typography>
                        <Button component={Link} to="/customsoftware" onClick={()=>{setValue(1);setSelectedIndex(1)}} className={classes.learnButton} variant="outlined"> 
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="Custom Software Icon" src={CustomSoftwareIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*Website Development Block */} 
                <Grid 
                    container 
                    direction="row" 
                    justify={matchesSM? "center": "flex-end"} 
                    className={classes.servicesContainer}
                    style={{marginBottom: "10em"}}
                >
                    <Grid 
                        item 
                        style={{textAlign: matchesSM? "center":undefined, width: matchesSM?undefined:"35em"}}
                    >
                        <Typography variant="h4">Website Development</Typography>
                        <Typography className={classes.subtitle} variant="subtitle1">
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines,<br/>built for speed.
                        </Typography>
                        <Button component={Link} to="/websites" onClick={()=>{setValue(1);setSelectedIndex(3)}} className={classes.learnButton} variant="outlined"> 
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM?0:"5em"}}>
                        <img className={classes.icon} alt="Website Icon" src={WebsiteIcon} width="250em"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
