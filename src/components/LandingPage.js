import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from '../components/ui/ButtonArrow';
import CustomSoftwareIcon from '../assets/Custom Software Icon.svg';
import MobileIcon from '../assets/mobileIcon.svg';
import WebsiteIcon from '../assets/websiteIcon.svg';
import RevolutionImage from '../assets/repeatingBackground.svg';
import InfoBackground from '../assets/infoBackground.svg';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth:"50em",
        minWidth:"21em",
        marginTop:"2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]:{
            maxWidth: "30em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        marginRight: 40,
        height: 45,
        width: 145
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,        
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
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
    servicesContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingRight: 0,
            paddingLeft: 0,
            borderRadius: 0,
            width: "100%",
            textAlign: "center"
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingRight: 0,
            paddingLeft: 0,
            borderRadius: 0,
            width: "100%",
            textAlign: "center"
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${RevolutionImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    InfoBackground: {
        backgroundImage: `url(${InfoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    }
}))

export default function LandingPage(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const { setValue, setSelectedIndex } = props
    
    return (
        <>
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item> {/*Hero Block*/}
                    <Grid container justify="flex-end" alignItems="center" direction="row" style={{marginBottom:"15em"}}>
                        <Grid xs sm md lg xl item className={classes.heroTextContainer}>
                            <Typography variant="h2" align="center" >
                                Bringing West Coast Technology
                                <br/>
                                to the MidWest
                            </Typography>
                            <Grid container justify="center">
                                <Grid item>
                                    <Button component={Link} to="/estimate" onClick={()=>setValue(5)} className={classes.estimateButton} variant="contained">Free Estimate</Button>
                                </Grid>
                                <Grid item>
                                    <Button component={Link} to="/revolution" onClick={()=>setValue(2)} className={classes.learnButtonHero} variant="outlined">
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.animation} xs sm md lg xl item>
                            <Lottie options={defaultOptions} width={"100%"} height={"100%"} />
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
                <Grid item> {/*iOS/Android App Block */} 
                    <Grid container direction="row" justify={matchesSM? "center": "flex-end"} className={classes.servicesContainer}>
                        <Grid item style={{textAlign: matchesSM? "center":undefined}}>
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
                            <img className={classes.icon} alt="Custom Software Icon" src={MobileIcon}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item> {/*Website Development Block */} 
                    <Grid container direction="row" justify={matchesSM? "center": "undefined"} className={classes.servicesContainer}>
                        <Grid item style={{marginLeft: matchesSM? 0:"5em", textAlign: matchesSM? "center":undefined}}>
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
                        <Grid item>
                            <img className={classes.icon} alt="Custom Software Icon" src={WebsiteIcon}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item> {/*Revolution Block*/}
                    <Grid container style={{height: "100em"}} alignItems="center" justify="center">
                        <Card className={classes.revolutionCard}>
                            <CardContent>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography variant="h3" gutterBottom>The Revolution</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            Visionary insights created with cutting edge technology is a<br/>recipe for revolution.
                                        </Typography>
                                        <Button component={Link} to="/revolution" onClick={()=>setValue(2)} className={classes.learnButtonHero} variant="outlined">
                                            <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                    </Grid>
                                </Grid>   
                            </CardContent>
                        </Card>
                        <div className={classes.revolutionBackground} />
                    </Grid>
                </Grid>
                <Grid item> {/*Information Block*/}
                    <Grid container style={{height:"80em"}} direction="row">
                        <Grid 
                            container 
                            direction={matchesXS ? "column": "row"} 
                            className={classes.InfoBackground}
                            justify={matchesXS?"center":"space-between"}
                            alignItems="center"
                        >
                            <Grid item  style={{marginLeft: matchesXS? 0: matchesSM? "2em":"5em", marginBottom: matchesXS?"5em": "inherit"}}>
                                <Grid container direction="column">
                                    <Typography variant="h2" style={{color: "white"}}>About Us</Typography>
                                    <Typography style={{textAlign:matchesXS?"center": undefined}} variant="subtitle2">Lets get personal.</Typography>
                                    <Grid container item justify={matchesXS?"center":"inherit"}>
                                        <Button component={Link} to="/about" onClick={()=>setValue(3)} className={classes.learnButton} variant="outlined" style={{color: "white", borderColor: "white"}}> 
                                            <span style={{marginRight: 10}}>Learn More</span>
                                            <ButtonArrow height={10} width={10} fill={theme.palette.common.white}/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item  style={{marginRight: matchesXS? 0: matchesSM? "2em":"5em"}}>
                                <Grid container direction="column">
                                    <Typography variant="h2" style={{color: "white"}}>Contact Us</Typography>
                                    <Typography style={{textAlign:matchesXS?"center": undefined}} variant="subtitle2">Say hello!</Typography>
                                    <Grid container item justify={matchesXS?"center":"inherit"}>
                                        <Button component={Link} to="/contact" onClick={()=>setValue(4)} className={classes.learnButton} variant="outlined" style={{color: "white", borderColor: "white"}}> 
                                            <span style={{marginRight: 10}}>Learn More</span>
                                            <ButtonArrow height={10} width={10} fill={theme.palette.common.white}/>
                                        </Button>
                                    </Grid> 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item> {/*Call To Action Block */}
                    <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex}/>
                </Grid>
            </Grid>
        </>
    )
}

