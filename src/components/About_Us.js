import React from 'react'

import { makeStyles, useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Avatar from '@material-ui/core/Avatar'

import history from '../assets/history.svg'
import founder from '../assets/founder.jpg'
import yearbook from '../assets/yearbook.svg'
import puppy from '../assets/puppy.svg'

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
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "1em",
            paddingRight: "1em"
        }
    }
}))

export default function About_Us(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    
    return (
        <Grid container direction="column">
            {/* About Us */}
            <Grid item style={{padding:"2em"}}>
                <Typography variant="h2" gutterBottom>About Us</Typography>
            </Grid>
            <Grid item className={classes.rowContainer} style={{maxWidth: "100em", alignSelf:"center", marginTop:"3em", marginBottom:"15em"}}>
                <Typography variant="h4" align="center" style={{fontStyle:"italic", fontWeight:500}}>
                    Whether it be person to person, business to consumer or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. 
                    Arc Development will use that principle to provide fast,
                    modern, inexpensive and aesthetic software to the Midwest and beyond.   
                </Typography>
            </Grid>
            {/* History */}
            <Grid item container
                direction={matchesMD?"column":"row"}
                className={classes.rowContainer}
                style={{marginBottom:"15em"}}
            >
                <Grid item lg>
                    <Grid container 
                        direction="column"
                        style={{marginBottom:matchesMD?"5em":undefined}}
                    >
                        <Grid item>
                            <Typography variant="h4" align={matchesSM?"center":undefined} gutterBottom>History</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM?"center":undefined} style={{fontStyle:"italic", color:"#808080"}} gutterBottom>
                                We're the new kid on the block.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM?"center":undefined} gutterBottom>
                                Founded in 2019, we're ready to get our hands on the world's business problems.
                            </Typography>
                            <Typography variant="body1" align={matchesSM?"center":undefined} gutterBottom>
                                It all started with one question. Why are'nt all businesses using avalibale technology?
                                There are many different answers to that question: economic barriers, social barriers, 
                                educational barriers and sometimes institutional barriers.
                            </Typography>
                            <Typography variant="body1" align={matchesSM?"center":undefined} gutterBottom>
                                We aim to be a powerful force in overcoming these obstacles. Recent development in
                                software engineering and computing power, compounded by the proliferation of smart phones,
                                has opened up infinite world's of possiblity. Taking full advantage of these advancements is the name of the game.
                            </Typography>
                            <Typography variant="body1" align={matchesSM?"center":undefined} gutterBottom>
                                All this change can be a lot to keep with, and that's where we come in.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{textAlign:"center"}} lg>
                    <img alt="history" src={history} width="100%" style={{maxWidth:"30em", maxHeight:"30em"}} />
                </Grid>
            </Grid>
            {/* Team */}
            <Grid item>
                <Grid container 
                    direction="column"
                    alignItems="center"
                    className={classes.rowContainer}
                >
                    <Grid item>
                        <Typography variant="h4" gutterBottom>Team</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="center" variant="body1" paragraph gutterBottom>
                            Zachary Recce, Founder
                        </Typography>
                        <Typography align="center" variant="body1" paragraph gutterBottom>
                            I started coding when I was 9 years old.
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Avatar variant="circle" alt="founder" src={founder} style={{width:"10.5em", height:"10.5em"}}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container
                direction={matchesSM?"column":"row"}
                className={classes.rowContainer}
                style={{marginBottom:"15em"}}
            >
                 <Hidden mdUp>
                    <Grid item md>
                        <Grid item style={{padding:"2em"}}>
                            <Typography variant="body1" align="center" paragraph gutterBottom>
                                I taught myself basic coding from library book in third grade and ever since
                                then my passion has solely been set on learning-learning about computers, learning
                                mathematics,philosophy,studying design, always just learning.
                            </Typography>
                            <Typography variant="body1" align="center" paragraph gutterBottom>
                                Now Im ready to apply everything I have learned and to help others with the 
                                intution I have developed.
                            </Typography>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid item md>
                    <Grid container 
                        direction="column"
                        alignItems="center"
                        style={{marginBottom:matchesSM?"5em":undefined}}
                    >
                        <Grid item>
                            <img alt="yearbook" src={yearbook} width="100%" style={{maxWidth:"20em", maxHeight:"20em"}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" gutterBottom>
                                a page from my sophomore yearbook
                            </Typography>
                        </Grid>                        
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid item md>
                        <Grid item style={{padding:"2em"}}>
                            <Typography variant="body1" align="center" paragraph gutterBottom>
                                I taught myself basic coding from library book in third grade and ever since
                                then my passion has solely been set on learning-learning about computers, learning
                                mathematics,philosophy,studying design, always just learning.
                            </Typography>
                            <Typography variant="body1" align="center" paragraph gutterBottom>
                                Now Im ready to apply everything I have learned and to help others with the 
                                intution I have developed.
                            </Typography>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid item md>
                    <Grid container 
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item>
                                <img alt="puppy" src={puppy} width="100%" style={{maxWidth:"20em", maxHeight:"20em"}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption" gutterBottom>
                                    my miniature dapple dachshund, Sterling
                                </Typography>
                            </Grid>                        
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}
