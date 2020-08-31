import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'

import { makeStyles, useTheme } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'

import vision from '../assets/vision.svg'
import consultationIcon from '../assets/consultationIcon.svg'
import mockupIcon from '../assets/mockupIcon.svg'
import reviewIcon from '../assets/reviewIcon.svg'
import technologyAnimation from '../animations/technologyAnimation/data'

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

export default function Revolution(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const technologyOptions = {
        loop: true,
        autoplay: false, 
        animationData: technologyAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column">
            {/* The Revolution */}
            <Grid item style={{marginBottom: "2em"}}>
                <Typography  
                    className={classes.rowContainer} 
                    style={{
                        fontFamily:"Pacifico",
                         paddingLeft:"2.5em", 
                         color: "#0B72B9", 
                         fontSize: "2.25rem",
                         marginTop:"1em"
                        }}
                >The Revolution</Typography>
            </Grid>
            <Grid item container 
                direction={matchesMD?"column":"row"}
                className={classes.rowContainer}
                style={{marginBottom: "15em"}}
            >
                <Grid item lg style={{alignSelf:"center", marginBottom:"5em"}}>
                    <img alt="vision" src={vision} width="100%" style={{maxWidth: "40em"}} />
                </Grid>
                <Grid item lg container
                    direction="column"
                >
                    <Grid item>
                        <Typography variant="h4" align={matchesMD?"center":"right"} gutterBottom>Vision</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD?"center":"right"} gutterBottom>
                            The rise of computers and subsequently the internet has 
                            completely altered every aspect of human life. This has increased our comfort,
                            broadened our connections and reshaped how we view the world.
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":"right"} gutterBottom>
                            What once was confined to huge rooms and teams of engineers now resides 
                            in every single one of our hands. Harnessing this unlimited potential
                            by using it to solve problems and better lives is at the heart of 
                            everything we do.
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":"right"} gutterBottom>
                            We want to help businesses capatalize on the latest and greatest technology.
                            The best way to predict the future is to be the one building it and we want 
                            to help guide the world into this next chapter of technological expansion,
                            exploration and innovation.
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":"right"} gutterBottom>
                            By holding ourselves to rigorous standards and pristine quality, we can
                             ensure you have the absolute best tools necessary to thrive in this 
                             new frontier.
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":"right"} gutterBottom>
                            We see a future where every individual has personalized software custom
                            tailored to their lifestyle, culture and interests, helping them overcome
                            life's obstacles. Each project is a step towards that goal.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* Technology */}
            <Grid item container 
                direction={matchesMD?"column":"row"}
                className={classes.rowContainer}
                style={{marginBottom:"15em"}}
            >
                <Grid item container lg direction="column">
                    <Grid item>
                        <Typography variant="h4" align={matchesMD?"center":undefined} gutterBottom>Technology</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom paragraph>
                            In 2013, Facebook invented a new way of building websites. This new system React.js
                            ,completely revolutionizes the process and practice of wesite development.
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom paragraph>
                            Instead of chaining together long individual pages, like traditional websites, React
                            wesites are built with little chunks of code called components. These components are faster
                            easier to maintain and are easily reused and customized, each serving a singular purpose. 
                        </Typography>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom paragraph>
                            Two years later they shocked the world by releasing a similar system, React Native, for 
                            producing iOS/Android apps. Instead of having to master two completely separate 
                            development platforms, you can leverage the knowledge you already possessed from
                            building websites and reaaply it directly! This was a huge leap forward.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg>
                    <Lottie options={technologyOptions} style={{maxHeight: 650, maxWidth: 625, minHeight: 540}} />
                </Grid>
            </Grid>
            {/* Process */}
            <Grid item container
                direction="row"
                justify="center"
                style={{marginBottom: "5em"}}
            >
                <Grid item >
                    <Typography variant="h2" gutterBottom>Process</Typography>
                </Grid>
            </Grid>
            {/* Consultation */}            
            <Grid item container
                direction={matchesMD?"column":"row"}
                className={classes.rowContainer}
                style={{backgroundColor:"#B3B3B3", height:"90em", borderTop: "2px solid #0B72B9"}}
            >
                <Grid item lg>
                    <Grid container 
                        direction="column" 
                        style={{maxWidth:matchesMD?undefined:"20em", marginBottom:matchesMD?"2em":undefined, marginTop:"5em"}}
                    >
                        <Grid item>
                            <Typography variant="h4" style={{color:"#000"}} align={matchesMD?"center":undefined} gutterBottom>Consultation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" style={{color:"#fff"}} align={matchesMD?"center":undefined} paragraph gutterBottom>
                                Our process begins the moment you realize you need a piece of 
                                technology for your business. Whether you already have an idea for
                                 where to start and what to do or if you just know you want to step 
                                 things up, our initial consultation will help you examine your 
                                 business holistically to find the best solutions.
                            </Typography>
                            <Typography variant="body1" style={{color:"#fff"}} align={matchesMD?"center":undefined} paragraph gutterBottom>
                                Detailed notes will be taken on your requirements and constraints,
                                while taking care to identify other potential areas for consultation.
                            </Typography>
                            <Typography variant="body1" style={{color:"#fff"}} align={matchesMD?"center":undefined} paragraph gutterBottom>
                                Cutting-edge advancements in machine learning like object detection and 
                                natural language processing allow computers to do things previously
                                unimaginable and our expertise and intution will help usher you 
                                into this new future of possibilities.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img alt="consultationIcon" src={consultationIcon} width="100%" style={{maxWidth: "25em", maxHeight:"25em"}} />
                </Grid>
            </Grid>
            {/* Mockup */}
            <Grid item container
                direction={matchesMD?"column":"row"}
                className={classes.rowContainer}
                style={{backgroundColor:"#FF7373", height:"90em"}}
            >
                <Grid item lg>
                    <Grid container 
                        direction="column" 
                        style={{maxWidth:matchesMD?undefined:"20em", marginBottom:matchesMD?"2em":undefined, marginTop:"5em"}}
                    >
                        <Grid item>
                            <Typography variant="h4" style={{color:"#000"}} align={matchesMD?"center":undefined} gutterBottom>Mockup</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" style={{color:"#fff"}} align={matchesMD?"center":undefined} paragraph gutterBottom>
                                After we settle on the best path forward and decide on a solution to pursue,
                                details like the cost and timeline will be finalized.
                            </Typography>
                            <Typography variant="body1" style={{color:"#fff"}} align={matchesMD?"center":undefined} paragraph gutterBottom>
                                Then it's time for us to start on your minimum viable product. That's just a fancy term for 
                                a mockup which doesn't include colors, images or any other polished design elements, but captures
                                the essential layout structure and functionality. 
                            </Typography>
                            <Typography variant="body1" style={{color:"#fff"}} align={matchesMD?"center":undefined} paragraph gutterBottom>
                                This helps us understand and refine the solution itself before getting distracted by specifics 
                                and looks.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img alt="mockupIcon" src={mockupIcon} width="100%" style={{maxWidth: "40em", maxHeight:"40em"}} />
                </Grid>
            </Grid>
            {/* Review */}
            <Grid item container
                direction={matchesMD?"column":"row"}
                className={classes.rowContainer}
                style={{backgroundColor:"#39B54A", height:"90em"}}
            >
                <Grid item lg>
                    <Grid container 
                        direction="column" 
                        style={{maxWidth:matchesMD?undefined:"20em", marginBottom:matchesMD?"2em":undefined, marginTop:"5em"}}
                    >
                        <Grid item>
                            <Typography variant="h4" style={{color:"#000"}} align={matchesMD?"center":undefined} gutterBottom>Review</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" style={{color:"#fff"}} align={matchesMD?"center":undefined} paragraph gutterBottom>
                                Before moving any farther we come back to you with our progress. This gives
                                you the freedom to discuss any changes you may want or any ideas you have
                                come up with before any heavy lifting has been done. 
                            </Typography>
                            <Typography variant="body1" style={{color:"#fff"}} align={matchesMD?"center":undefined} paragraph gutterBottom>
                                We give you an interactive demonstration of the mockups, thoroughly explaining 
                                the thought process that went into each screen and every anticipated feature.
                            </Typography>
                            <Typography variant="body1" style={{color:"#fff"}} align={matchesMD?"center":undefined} paragraph gutterBottom>
                                Once you are completely satisfied with the vision for our solution we get down to
                                the nitty gritty fine details of design.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <img alt="reviewIcon" src={reviewIcon} width="100%" style={{maxWidth: "25em", maxHeight:"25em"}} />
                </Grid>
            </Grid>
        </Grid>
    )
}