import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { makeStyles, useTheme } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'

import ButtonArrow from '../components/ui/ButtonArrow';
import Background from '../assets/background.jpg';
import MobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import send from '../assets/send.svg'


const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
        height: 70,
        width: 185,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom:"2em"
        }        
    },
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
    },
    multiline: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginBottom:"3em",
        marginTop:"3em"
    },
    sendButton: {
        backgroundColor: theme.palette.common.orange,
        borderRadius: 45,
        color: "#fff",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}))

export default function Contact(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const [ name, setName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ phoneHelper, setPhoneHelper ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ emailHelper, setEmailHelper ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ open, setOpen ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ alert, setAlert ] = useState({open: false, message: "", backgroundColor: ""})

    const { setValue, setSelectedIndex } = props

    const onChange = (event) => {
        let valid;
        switch(event.target.id) {
            case "phone":
                setPhone(event.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                if (!valid && event.target.value.length > 0) {
                    setPhoneHelper("Invalid phone number")
                } else {
                    setPhoneHelper("")
                }
                break;
            case "email":
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                if (!valid) {
                    setEmailHelper("Invalid email address")
                } else {
                    setEmailHelper("")
                }
                break;
        }
    }

    const handleClear = () => {
        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
    }

    const onConfirm = () => {
       setLoading(true)
       axios
       .get('https://us-central1-material-ui-course-e6eea.cloudfunctions.net/sendMail', {params: {
               name: name,
               email: email,
               phone: phone,
               message: message
           }
       })
       .then(res=>{
            console.log(res)   
            setLoading(false)
            setOpen(false)
            handleClear()
            setAlert({open: true, message: "Message sent successfully", backgroundColor: "#4BB543"})
       })
       .catch(err=>{
           console.log(err)
           setLoading(false)
           setOpen(false)
           setAlert({open: true, message: "Something went wrong, please try again!", backgroundColor: "#FF3232"})
       })
    }

    const confirmButton = (
        <React.Fragment>
            <span style={{paddingTop: "0.3em", paddingBottom: "0.3em", marginRight:"0.2em"}}>Send Message</span>
            <Grid item>
                <img alt="send" src={send}/>
            </Grid> 
        </React.Fragment>
    )

    return (
        <Grid container 
            direction={matchesMD?"column":"row"}
        >
            <Grid item lg={4} xl={3}>
                <Grid item container 
                    direction="column"
                    style={{marginTop:"2em", paddingLeft:"5em", paddingRight:"5em"}}
                    
                >
                    <Grid item>
                        <Typography variant="h2" align={matchesMD?"center":undefined}>Contact Us</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD?"center":undefined} gutterBottom style={{color: theme.palette.common.blue}}>We're waiting</Typography>
                    </Grid>
                    <Grid item>
                        <Grid item container
                            direction="row"
                            justify={matchesMD?"center":undefined}
                            style={{marginTop:"1em"}}
                        >
                            <Grid item >
                                <img alt="phoneIcon" src={phoneIcon}  
                                    style={{maxWidth:"5em", maxHeight:"7em", paddingTop:"0.3em", paddingRight:"0.3em"}}
                                />
                            </Grid>
                            <Grid item style={{verticalAlign:"top"}}>
                                <Typography 
                                    variant="subtitle2" 
                                    style={{color: theme.palette.common.blue}}
                                >
                                    <a 
                                        style={{textDecoration:"none",color:"inherit"}} 
                                        href="tel:(555) 555-5555">(555) 555-5555</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container
                            direction="row"
                            justify={matchesMD?"center":undefined}
                        >
                            <Grid item >
                                <img alt="emailIcon" src={emailIcon}  
                                    style={{maxWidth:"5em", maxHeight:"7em", paddingTop:"0.5em", paddingRight:"0.5em"}}
                                />
                            </Grid>
                            <Grid item>
                                <Typography 
                                    variant="subtitle2" 
                                    style={{color: theme.palette.common.blue}}
                                >
                                    <a 
                                        style={{textDecoration:"none",color:"inherit"}} 
                                        href="mailto:anuppadakandla064@gmail.com"
                                        target="_blank"
                                    >anuppadakandla064@gmail.com</a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item container
                            direction="column"
                            style={{marginTop:"2em", marginBottom:"2em"}}
                        >
                            <Grid item>
                                <TextField
                                    fullWidth
                                    id="name" 
                                    label="Name" 
                                    value={name} 
                                    onChange={(event)=>setName(event.target.value)} 
                                />
                            </Grid>
                            <Grid item style={{marginTop:"1.5em", marginBottom:"1.5em"}}>
                                <TextField
                                    fullWidth
                                    error={phoneHelper.length !==0}
                                    helperText={phoneHelper}
                                    id="phone" 
                                    label="Phone Number" 
                                    value={phone} 
                                    onChange={event=>onChange(event)} 
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    error={emailHelper.length !== 0}
                                    helperText={emailHelper}
                                    id="email" 
                                    label="Email" 
                                    value={email} 
                                    onChange={event=>onChange(event)} 
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <TextField
                            InputProps={{disableUnderline: true}}
                            fullWidth
                            multiline
                            rows={10}
                            className={classes.multiline}
                            id="message"
                            value={message} 
                            onChange={(event)=>setMessage(event.target.value)}  
                        />
                    </Grid>
                    <Grid item style={{alignSelf: "center", marginBottom:"3em"}}>
                        <Button 
                            variant="contained" 
                            className={classes.sendButton}
                            onClick={()=>setOpen(true)}
                            disabled={
                                name.length===0 ||
                                phone.length===0 ||
                                email.length===0 ||
                                message.length===0 ||
                                phoneHelper.length!==0 ||
                                emailHelper.length!==0
                            }
                        >
                            <span style={{paddingTop: "0.3em", paddingBottom: "0.3em", marginRight:"0.2em"}}>Send Message</span>
                            <Grid item>
                                <img alt="send" src={send}/>
                            </Grid>                            
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog 
                open={open} 
                onClose={()=>setOpen(false)} 
                PaperProps={{style:{
                    paddingTop:matchesXS?"2em":"5em",
                    paddingBottom:matchesXS?"2em":"5em",
                    paddingRight: matchesXS? 0 : matchesSM? "5em" : matchesMD? "10em" : "20em",
                    paddingLeft: matchesXS? 0 : matchesSM? "5em" : matchesMD? "10em" : "20em"
                }}}
                style={{zIndex: 1301}}
                fullScreen={matchesXS}
            >
                <DialogContent>
                    <Grid container
                        direction="column"
                        alignItems="center"
                        className={classes.rowContainer}                        
                    >
                        <Grid item>
                            <Typography variant="h2" gutterBottom>Confirm Message</Typography>
                        </Grid>
                        <Grid item style={{width:"100%"}}>
                            <TextField
                                fullWidth
                                id="name" 
                                label="Name" 
                                value={name} 
                                onChange={(event)=>setName(event.target.value)} 
                            />
                        </Grid>
                        <Grid item style={{width:"100%"}}>
                            <TextField
                                fullWidth
                                error={phoneHelper.length !==0}
                                helperText={phoneHelper}
                                id="phone" 
                                label="Phone Number" 
                                value={phone} 
                                onChange={event=>onChange(event)} 
                            />
                        </Grid>
                        <Grid item style={{width:"100%"}}>
                            <TextField
                                fullWidth
                                error={emailHelper.length !== 0}
                                helperText={emailHelper}
                                id="email" 
                                label="Email" 
                                value={email} 
                                onChange={event=>onChange(event)} 
                            />
                        </Grid>
                        <Grid item style={{width:"100%"}}>
                            <TextField
                                InputProps={{disableUnderline: true}}
                                fullWidth
                                multiline
                                rows={10}
                                className={classes.multiline}
                                id="message"
                                value={message} 
                                onChange={(event)=>setMessage(event.target.value)}  
                            />
                        </Grid>
                        <Grid item container
                            direction={matchesSM?"column":"row"}
                            alignItems={matchesSM? "center": undefined}
                            justify="center"
                            style={{marginBottom: "5em"}}
                        >
                            <Grid item style={{marginBottom: matchesSM? "2em": 0}}>
                                <Button color="primary" onClick={()=>setOpen(false)}>Cancel</Button>
                            </Grid>
                            <Grid item>
                                <Button 
                                    variant="contained" 
                                    className={classes.sendButton}
                                    onClick={onConfirm}
                                    disabled={
                                        name.length===0 ||
                                        phone.length===0 ||
                                        email.length===0 ||
                                        message.length===0 ||
                                        phoneHelper.length!==0 ||
                                        emailHelper.length!==0
                                    }
                                >
                                    {loading? <CircularProgress/> : confirmButton}                          
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar 
                open={alert.open} 
                message={alert.message}
                onClose={()=>setAlert({...alert, open: false})}
                autoHideDuration={3000}
                ContentProps={{style: {backgroundColor: alert.backgroundColor}}}
                anchorOrigin={{horizontal: "center", vertical: "top"}}
            />
            <Grid item lg={8} xl={9}>
                <Grid item container
                    direction={matchesMD?"column":"row"}
                    alignItems="center"
                    justify={matchesMD?"center":undefined}
                    className={classes.background}
                >
                    <Grid item 
                        style={{marginLeft: matchesMD?0:"5em", textAlign: matchesMD?"center":"inherit", marginBottom: matchesMD?"5em":0}}
                    >
                        <Grid container direction="column" >
                            <Grid item>
                                <Typography variant="h2" style={{lineHeight: "1em"}}>Simple Software.<br/>Revolutionary Results.</Typography>
                                <Typography variant="subtitle2" style={{fontSize: "1.5rem", fontWeight: 500}}>Take advantage of the 21st Century.</Typography>
                                <Grid container item justify={matchesMD?"center":"undefined"}>
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
            </Grid>
        </Grid>
    )

}