import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles, useTheme } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import analytics from '../assets/analytics.svg'
import ecommerce from '../assets/ecommerce.svg'
import outreach from '../assets/outreach.svg'
import seo from '../assets/seo.svg'
import CallToAction from '../components/ui/CallToAction'

const useStyles = makeStyles(theme=>({
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

export default function Website(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const { setValue, setSelectedIndex } = props

    return (
        <Grid container direction="column">
            {/* Website Development */}
            <Grid item container 
                direction="row" 
                justify={matchesMD?"center":matchesXS?"center":undefined} 
                className={classes.rowContainer}
                style={{marginTop: matchesSM?"2em":matchesMD?"2em":matchesXS?"1em":"2em", marginBottom: "15em"}}
            >
                <Hidden mdDown>
                    <Grid item style={{marginTop: "0.5em", marginRight: "1em", marginLeft: "-3.6em"}}>
                        <IconButton 
                            component={ Link }
                            to="/mobileapps"
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
                        <Typography variant="h2" align={matchesMD?"center":undefined}>Website Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom>
                            Having a website is a necessity in today's business world. They give you one central,
                            public location to let people know who you are, what you do, and why you are the best at it.
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom>
                            From simply having your hours posted to having a full fledged online store,
                            making yourself as accessible as possible to users online drives growth and 
                            enables you to reach new customers. 
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item style={{marginTop: "0.5em"}}>
                        <IconButton 
                            component={ Link }
                            to="/services"
                            onClick={()=>{setValue(1);setSelectedIndex(2)}}
                            style={{backgroundColor:"transparent"}} 
                            disableRipple
                        >
                            <img alt="forward_to_iOS/Android" src={forwardArrow} />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            {/* Analytics */}
            <Grid item container 
                direction={matchesSM?"column":"row"}
                alignItems="center" 
                className={classes.rowContainer} 
                style={{marginBottom:"15em"}}
                md
            >
                <Grid item style={{marginBottom: matchesSM?"3em":undefined}}>
                    <Grid container direction="column">
                        <Grid item className={classes.paragraphContainer} style={{marginLeft: matchesSM?0:"0.8em"}}>
                            <Typography variant="h4" align={matchesSM?"center":undefined} gutterBottom>Analytics</Typography>
                        </Grid>
                        <Grid item>
                            <img 
                                alt="analytics" 
                                src={analytics} 
                                style={{maxWidth:"20em", maxHeight:"15em", minHeight:"5em", marginLeft:"-1.8em"}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{marginLeft: matchesSM?0:"1em"}} >
                    <Typography variant="body1" align={matchesSM?"center":undefined} paragraph>
                        Knowledge is power, and data is 21st Century
                        gold. Analyzing this data can real hidden patterns and trends
                        in your business, empowering you to make smarter decisions
                        with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            {/* E-Commerce */}
            <Grid item container 
                direction={matchesSM?"column":"row"}
                alignItems="center"
                justify={matchesSM?"center":"flex-end"}
                className={classes.rowContainer} 
                style={{marginBottom:"15em"}}
            >
                <Grid item style={{marginBottom: matchesSM?"3em":undefined}}>
                    <Grid container direction="column">
                        <Grid item className={classes.paragraphContainer}>
                            <Typography variant="h4" align={matchesSM?"center":undefined} gutterBottom>E-Commerce</Typography>
                        </Grid>
                        <Grid item>
                            <img alt="ecommerce" src={ecommerce} style={{maxWidth:"25em", maxHeight:"15em", minHeight:"10em"}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{marginLeft: matchesSM?0:"1em"}}>
                    <Typography variant="body1" align={matchesSM?"center":undefined} paragraph gutterBottom>
                        It's no secret that people like to shop online.
                    </Typography>
                    <Typography variant="body1" align={matchesSM?"center":undefined} paragraph>
                        In 2017 over $2.3 trillion was spent on e-commerce and it's time 
                        for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>
            {/* Outreach */}
            <Grid item container 
                direction={matchesSM?"column":"row"}
                alignItems="center"
                className={classes.rowContainer} 
                style={{marginBottom:"15em"}}
            >
                <Grid item style={{marginBottom: matchesSM?"3em":undefined}}>
                    <Grid container direction="column">
                        <Grid item className={classes.paragraphContainer}>
                            <Typography variant="h4" align={matchesSM?"center":undefined} gutterBottom>Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <img alt="outreach" src={outreach} style={{maxWidth:"25em", maxHeight:"15em", minHeight:"10em"}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{marginLeft: matchesSM?0:"1em"}}>
                    <Typography variant="body1" align={matchesSM?"center":undefined} paragraph gutterBottom>
                        Draw people in with a dazzling website. Showing off your products online 
                        is a great way to help customers decide what's right for
                        them before visiting in person.
                    </Typography>
                </Grid>
            </Grid> 
            {/* SEO */}
            <Grid item container 
                direction={matchesSM?"column":"row"}
                alignItems="center" 
                justify={matchesSM?"center":"flex-end"}
                className={classes.rowContainer} 
                style={{marginBottom:"15em"}}
            >
                <Grid item style={{marginBottom: matchesSM?"3em":undefined}}>
                    <Grid container direction="column">
                        <Grid item className={classes.paragraphContainer}>
                            <Typography variant="h4"  align={matchesSM?"center":undefined} align="center" gutterBottom>
                                Search Engine <br/>Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img alt="seo" src={seo} style={{maxWidth:"25em", maxHeight:"15em", minHeight:"10em"}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} >
                    <Typography variant="body1" align={matchesSM?"center":undefined} paragraph gutterBottom>
                        How often have you ever been to the second page of Google 
                        results?
                    </Typography>
                    <Typography variant="body1" align={matchesSM?"center":undefined} paragraph gutterBottom>
                        If you are like us, probably never.
                    </Typography>
                    <Typography variant="body1" align={matchesSM?"center":undefined} paragraph gutterBottom>
                        Customers din't go there either, so we make sure your website is 
                        designed to end up on top.
                    </Typography>
                </Grid>
            </Grid>          
        </Grid>
    )
} 