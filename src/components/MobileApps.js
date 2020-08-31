import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import integrationAnimation from '../animations/integrationAnimation/data'
import swissKnife from '../assets/swissKnife.svg'
import extendAccess from '../assets/extendAccess.svg'
import increaseEngagement from '../assets/increaseEngagement.svg'
import CallToAction from '../components/ui/CallToAction';

const useStyles = makeStyles(theme=>({
    paragraphContainer: {
        maxWidth: "40em"
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        marginBottom: "10em",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "2em",
            paddingRight: "2em"
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "1em",
            paddingRight: "1em"
        }
    }
}))

export default function MobileApps(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: integrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const { setValue, setSelectedIndex } = props

    return (
        <Grid container direction="column">
            {/*iOS/Android App Development */}
            <Grid item container 
                direction="row" 
                justify={matchesMD?"center":matchesXS?"center":undefined} 
                className={classes.rowContainer}
                style={{marginTop: matchesSM?"2em":matchesMD?"2em":matchesXS?"2em":"2em"}}
            >
                <Hidden mdDown>
                    <Grid item style={{marginTop: "0.5em", marginRight: "1em", marginLeft: "-3.6em"}}>
                        <IconButton 
                            component={ Link }
                            to="/customsoftware" 
                            onClick={()=>{setValue(1);setSelectedIndex(1)}} 
                            style={{backgroundColor: "transparent"}} 
                            disableRipple
                        >
                            <img alt="back_to_service" src={backArrow}/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.paragraphContainer}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD?"center":undefined}>iOS/Android App Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom>
                            Mobile Apps allow you to take your tools on the go.
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom>
                            Whether you want an app for your customers, employees or yourself, we can 
                            build cross-platform native solutions for any part of your business process. This
                            opens you up to a whole new world of possibilities by taking advantage of phone 
                            features like the camera, GPS, push notifications and more. 
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":undefined}>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item style={{marginTop: "0.5em"}}>
                        <IconButton component={ Link } to="/websites" style={{backgroundColor:"transparent"}} disableRipple>
                            <img alt="forward_to_iOS/Android" src={forwardArrow} />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            {/* Integration & sml platform support */}
            <Grid item container 
                direction={matchesSM?"column":"row"} 
                className={classes.rowContainer}
            >
                <Grid item container direction="column" sm>
                    <Grid item >
                        <Typography variant="h4" align={matchesSM?"center":undefined} gutterBottom>Integration</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1" align={matchesSM?"center":undefined} paragraph gutterBottom>
                            Our technology enables an innate interconnection
                            between web and mobile applications, putting
                            everything you need right in one convenient place.
                        </Typography>
                        <Typography variant="body1" align={matchesSM?"center":undefined} paragraph gutterBottom>
                            This allows you to extend your reach, reinvent interactions
                            and develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item style={{marginTop:matchesSM?"5em":0, marginBottom:matchesSM?"5em":0}} md>
                    <Lottie options={defaultOptions} stoppedIt="true" style={{maxWidth: 250, maxHeight: 250, minHeight: 100}} />
                </Grid>
                <Grid item container direction="column" sm>
                    <Grid item >
                        <Typography variant="h4" align={matchesSM?"center":"right"} gutterBottom>Simultaneous Platform Support</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1" align={matchesSM?"center":"right"} paragraph gutterBottom>
                            Our cutting edge development process allows us 
                            to create apps for iPhone, Android and tablets - 
                            all at the same time.
                        </Typography>
                        <Typography variant="body1" align={matchesSM?"center":"right"} paragraph gutterBottom>
                            This significantly reduces costs and creates a more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* Extend Functionality */}
            <Grid item container direction={matchesSM?"column":"row"} className={classes.rowContainer}>
                <Grid item container direction="column" sm>
                    <Grid item>
                        <Typography variant="h4" align="center"   gutterBottom>Extend Functionality</Typography>
                    </Grid>
                    <Grid item style={{textAlign:"center"}}>
                        <img alt="swiss knife" src={swissKnife} style={{maxWidth:"20em", maxHeight:"10em", minHeight:"12em"}}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" style={{marginTop:matchesSM?"5em":0, marginBottom:matchesSM?"5em":0}} sm>
                    <Grid item>
                        <Typography variant="h4" align="center" style={{marginBottom:"2em"}} gutterBottom>Extend Access</Typography>
                    </Grid>
                    <Grid item style={{textAlign:"center"}}>
                        <img alt="extend access" src={extendAccess} style={{maxWidth:"28em", maxHeight:matchesXS?"3em":"3em", minHeight:"12em"}}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" sm>
                    <Grid item>
                        <Typography variant="h4" align="center" gutterBottom>Increase Engagement</Typography>
                    </Grid>
                    <Grid item style={{textAlign:"center"}}>
                        <img alt="increase engagement" src={increaseEngagement} style={{maxWidth:"28em", maxHeight:"10em", minHeight:"12em"}}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>
    )
}