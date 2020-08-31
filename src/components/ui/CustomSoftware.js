import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie';

import { makeStyles, useTheme } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'

import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import bulb from '../../assets/bulb.svg'
import stopwatch from '../../assets/stopwatch.svg'
import cash from '../../assets/cash.svg'
import documentsAnimation from '../../animations/documentsAnimation/data'
import scaleAnimation from '../../animations/scaleAnimation/data'
import root from '../../assets/root.svg'
import automationAnimation from '../../animations/automationAnimation/data'
import uxAnimation from '../../animations/uxAnimation/data'
import CallToAction from './CallToAction'


const useStyles = makeStyles(theme => ({
    paragraphContainer: {
        maxWidth: "40em"
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "2em",
            paddingRight: "2em"
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1em",
            paddingRight: "1em"
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "1em",
            paddingRight: "1em"
        }
    }
}))

export default function CustomSoftware(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const documentOptions = {
        loop: true,
        autoplay: false, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const { setValue, setSelectedIndex } = props
    const scaleOptions = {
        loop: true,
        autoplay: false, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const automationOptions = {
        loop: true,
        autoplay: false, 
        animationData: automationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const uxOptions = {
        loop: true,
        autoplay: false, 
        animationData: uxAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column">
            {/*Custom Software Development */}
            <Grid item container 
                direction="row" 
                justify={matchesMD?"center":matchesXS?"center":undefined} 
                className={classes.rowContainer}
                style={{marginTop: matchesSM?"2em":matchesMD?"2em":matchesXS?"1em":undefined}}
            >
                <Hidden mdDown>
                    <Grid item style={{marginTop: "0.5em", marginRight: "1em", marginLeft: "-3.6em"}}>
                        <IconButton 
                            component={ Link }
                            to="/services"
                            onClick={()=>{setValue(1);setSelectedIndex(0)}}
                            style={{backgroundColor: "transparent"}} 
                            disableRipple
                        >
                            <img alt="back_to_service" src={backArrow}/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.paragraphContainer}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD?"center":undefined}>Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom>
                            Whether we are replacing old software or inventing new solutions, Arc Development
                            is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom>
                            Using regular commercial software leaves you with a lot of stuff you don't need,
                            without some of the stuff you do need and ultimately controls the way you work.
                            Without using any software at all you risk falling behind competitors and missing
                            out on huge savings from increased efficiency. 
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom>
                            Our custom solutions are designed from the ground up with your needs, wants
                            and goals at the core. This collaborative process produces finely tuned software
                            that is much more effective at improving your workflow and reducing costs than
                            generalized options.
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":undefined}>
                            We create exactly what you what exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item style={{marginTop: "0.5em"}}>
                        <IconButton 
                            component={ Link }
                            to="/mobileapps"
                            onClick={()=>{setValue(1);setSelectedIndex(2)}}
                            style={{backgroundColor:"transparent"}} 
                            disableRipple
                        >
                            <img alt="forward_to_iOS/Android" src={forwardArrow} />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            {/*Save Energy */}
            <Grid         
                item container 
                direction={matchesSM?"column":"row"} 
                justify="center" 
                alignItems={matchesSM?"center":undefined} 
                className={classes.rowContainer} 
                style={{marginTop:"10em",marginBottom:matchesSM?"20em":"10em"}}
            >
                <Grid item container direction="column" style={{width:"15em"}}>
                    <Grid item>
                        <Typography variant="h4" align="center" gutterBottom>Save Energy</Typography>
                    </Grid>
                    <Grid item container justify="center" >
                        <img alt="bulb" src={bulb}/>
                    </Grid>
                </Grid>
                <Grid 
                    item container 
                    direction="column" 
                    style={{width:"15em", marginTop:matchesSM?"3em":undefined, marginBottom:matchesSM?"3em":undefined}}>
                    <Grid item >
                        <Typography variant="h4" align="center" gutterBottom>Save Time</Typography>
                    </Grid>
                    <Grid item container justify="center">
                        <img alt="stopwatch" src={stopwatch}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" style={{width:"15em"}}>
                    <Grid item >
                        <Typography variant="h4" align="center" gutterBottom>Save Money</Typography>
                    </Grid>
                    <Grid item container justify="center" >
                        <img alt="cash" src={cash}/>
                    </Grid>
                </Grid>
            </Grid>
            {/*Digital Documents&Data */}
            <Grid item container 
                alignItems={matchesMD?"center":undefined}
                direction={matchesMD?"column":"row"}
                justify="space-between"
            >
                <Grid item container 
                    className={classes.rowContainer} 
                    style={{width:matchesXS?undefined:matchesSM?"70%":undefined}}  
                    md
                >{/*Digital Documents & Data */}
                    <Grid item container 
                        direction="column" 
                        style={{maxWidth: "40em"}} 
                        md
                    >
                        <Grid item>
                            <Typography variant="h4" align={matchesMD?"center":undefined} gutterBottom >Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD?"center":undefined} paragraph gutterBottom >
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography variant="body1" align={matchesMD?"center":undefined} paragraph gutterBottom >
                                Billions are spent annually on the purchasing, printing and distriution of paper.
                                On top of the massive environmental impact this has, it causes harm to your bottom line as
                                well.
                            </Typography>
                            <Typography variant="body1" align={matchesMD?"center":undefined} paragraph gutterBottom >
                                By utilizing digital forms and documents you can remove these obsolete expenses,
                                accelerate your communication and help the Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justify={matchesSM?"center":undefined} style={{width:matchesSM?undefined:"50%"}}>
                        <Lottie options={documentOptions} stoppedIt="true" style={{maxHeight: 190, maxWidth: 175, minHeight: 40}}/>
                    </Grid>
                </Grid>
                <Grid item container 
                    justify={matchesMD?undefined:"flex-end"} 
                    className={classes.rowContainer} 
                    style={{marginTop: matchesMD?"5em":undefined, width:matchesXS?undefined:matchesSM?"70%":undefined}}
                    md
                    >{/*Scale */}
                    <Grid item container justify={matchesSM?"center":undefined} style={{marginBottom:matchesSM?"2em":undefined, width:matchesSM?undefined:"50%"}}>
                        <Lottie options={scaleOptions} stoppedIt="true" style={{maxHeight: 310, maxWidth: 155}}/>
                    </Grid>
                    <Grid item container direction="column" style={{maxWidth: "35em"}} md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD?"center":"right"} gutterBottom>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD?"center":"right"} paragraph gutterBottom>
                                Whether you are a large brand, just getting started,
                                or taking off right now, our application architecture ensures pain-free growth and
                                reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*Root Cause Analysis */}
            <Grid item container 
                direction="row" 
                className={classes.rowContainer} 
                style={{marginTop:"20em",marginBottom:matchesMD?"20em":"15em"}}
            >{/*Root-Cause Analysis */}
                <Grid container direction="column" alignItems="center">
                    <Grid item style={{marginBottom:"5em"}}>
                        <img alt="root-cause analysis" src={root} width="450em" height="450em"/>
                    </Grid> 
                    <Grid item container direction="column" className={classes.paragraphContainer}> 
                        <Typography align="center" variant="h4" gutterBottom>Root-Cause Analysis</Typography>
                        <Typography align="center" variant="body1" paragraph gutterBottom>
                            Many problems are merely symptoms of larger, 
                            underlying issues
                        </Typography>
                        <Typography align="center" variant="body1" paragraph gutterBottom>
                            We can help you thoroughly 
                            examine all areas of your business
                            to develop a holistic plan for the
                            most effective implementation of
                            technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/*Automation */}
            <Grid item container 
                direction={matchesMD?"column":"row"} 
                alignItems={matchesMD?"center":undefined} 
                justify="space-between" 
                style={{marginBottom: matchesMD?"20em":"10em"}}
            >
                <Grid item  container 
                    className={classes.rowContainer} 
                    style={{width:matchesXS?undefined:matchesSM?"70%":undefined}} 
                    md
                >{/*Automation */}
                    <Grid item container 
                        direction="column" 
                        style={{maxWidth:"40em"}} 
                        md
                    >
                        <Grid item>
                            <Typography variant="h4" align={matchesMD?"center":undefined} gutterBottom>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD?"center":undefined} paragraph gutterBottom>
                                Why waste time when you don't have to?
                            </Typography>
                            <Typography variant="body1" align={matchesMD?"center":undefined} paragraph gutterBottom>
                                We can help you identify processes with time or event based
                                actions which can now easily be automated.
                            </Typography>
                            <Typography variant="body1" align={matchesMD?"center":undefined} paragraph gutterBottom>
                                Increasing efficiency increases profits,
                                leaving you more time to focus on your 
                                business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justify={matchesSM?"center":undefined} style={{width:matchesSM?undefined:"50%"}}>
                        <Lottie options={automationOptions} stoppedIt="true" style={{maxHeight: 290, maxWidth: 275, minHeight: 250}}/>
                    </Grid>
                </Grid>
                <Grid item container 
                    justify={matchesMD?undefined:"flex-end"} 
                    className={classes.rowContainer} 
                    style={{marginTop:matchesMD?"5em":undefined, width:matchesXS?undefined:matchesSM?"70%":undefined}}  
                    md
                >{/*User Eperience Design */}
                    <Grid item container justify={matchesSM?"center":undefined} style={{marginBottom: matchesSM?"2em":undefined, width:matchesSM?undefined:"50%"}}>
                        <Lottie options={uxOptions} style={{maxHeight: 310, maxWidth: 155}}/>
                    </Grid>
                    <Grid item container direction="column" style={{maxWidth:"40em"}} md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD?"center":"right"} gutterBottom>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD?"center":"right"} paragraph gutterBottom>
                                A good design that isn't usable isn't a good design.
                            </Typography>
                            <Typography variant="body1" align={matchesMD?"center":"right"} paragraph gutterBottom>
                                So why are so many pieces of 
                                software complicated, confusing and 
                                fustrating?
                            </Typography>
                            <Typography variant="body1" align={matchesMD?"center":"right"} paragraph gutterBottom>
                                By prioritizing users and the real ways they interact with
                                technology we are able to develop unique personable experiences
                                that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*CallToAction */}
            <Grid item>
                <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex}/>
            </Grid>
        </Grid>
    )

}
