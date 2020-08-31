import React, { useState } from 'react'
import axios from 'axios'
import Lottie from 'react-lottie'
import { cloneDeep } from 'lodash'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'

import check from '../assets/check.svg'
import send from '../assets/send.svg'
import software from '../assets/software.svg'
import mobile from '../assets/mobile.svg'
import website from '../assets/website.svg'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import backArrowDisabled from '../assets/backArrowDisabled.svg'
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg'
import camera from '../assets/camera.svg'
import upload from '../assets/upload.svg'
import person from '../assets/person.svg'
import persons from '../assets/persons.svg'
import people from '../assets/people.svg'
import info from '../assets/info.svg'
import bell from '../assets/bell.svg'
import users from '../assets/users.svg'
import iphone from '../assets/iphone.svg'
import gps from '../assets/gps.svg'
import customized from '../assets/customized.svg'
import data from '../assets/data.svg'
import android from '../assets/android.svg'
import globe from '../assets/globe.svg'
import biometrics from '../assets/biometrics.svg'
import CustomSoftwareIcon from '../assets/Custom Software Icon.svg';

import estimateAnimation from '../animations/estimateAnimation/data.json'

const useStyles = makeStyles(theme => ({
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
    multiline: {
      border: `2px solid ${theme.palette.common.blue}`,
      marginBottom:"3em",
      marginTop:"3em"
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
    specialText: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.5rem",
      color: theme.palette.common.orange
    }
}))

const defaultQuestions = [{
    id:1,
    title:"Which service are you interested in?",
    active: true,
    options: [
        {
            id:1,
            title:"Custom Software Development",
            subtitle:null,
            icon:software,
            iconAlt:"three floating screens",
            selected:false,
            cost:0
        },
        {
            id:2,
            title:"iOS/Android App Development",
            subtitle:null,
            icon:mobile,
            iconAlt:"outlines of phones and tablet",
            selected:false,
            cost:0
        },
        {
            id:3,
            title:"Website Development",
            subtitle:null,
            icon:website,
            iconAlt:"computer outline",
            selected:false,
            cost:0
        },
    ] 
}]

const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      active: true,
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iphone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100
        }
      ],
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: camera,
          iconAlt: "camera outline",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: users,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100
        }
      ],
      active: false
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: person,
          iconAlt: "person outline",
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5
        }
      ],
      active: false
    }
];

const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "person outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 200
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 250
        }
      ],
      active: true
    }
];  

export default function Estimate(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const [ questions, setQuestions ] = useState(defaultQuestions)
    const [openDialog, setOpenDialog] = useState(false)
    const [ name, setName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ phoneHelper, setPhoneHelper ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ emailHelper, setEmailHelper ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ total, setTotal ] = useState(0)

    const nextQuestion = () => {
      const newQuestions = cloneDeep(questions)
      const currentlyActive = newQuestions.filter(question => question.active)
      const activeIndex = currentlyActive[0].id - 1
      const nextIndex = activeIndex + 1

      newQuestions[activeIndex] = {...currentlyActive[0], active: false}
      newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true}
      setQuestions(newQuestions)
    }

    const previousQuestion = () => {
      const newQuestions = cloneDeep(questions)
      const currentlyActive = newQuestions.filter(question => question.active)
      const activeIndex = currentlyActive[0].id - 1
      const nextIndex = activeIndex - 1

      newQuestions[activeIndex] = {...currentlyActive[0], active: false}
      newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true}
      setQuestions(newQuestions)
    }

    const navigatePrevQuestion = () => {
      const currentlyActive = questions.filter(question => question.active)
      if (currentlyActive[0].id === 1) {
        return true
      } else {
        return false
      }
    }

    const navigateNextQuestion = () => {
      const currentlyActive = questions.filter(question => question.active)
      if (currentlyActive[0].id === questions[questions.length - 1].id) {
        return true
      } else {
        return false
      }
    }

    const estimateOptions = {
        loop: true,
        autoplay: false, 
        animationData: estimateAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const onChange = (event) => {
      let valid;
      switch(event.target.id) {
          case "phone":
              setPhone(event.target.value)
              valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
              if (!valid) {
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
      }
  }

     const handleSelect =  (id) => {
       const newQuestions = cloneDeep(questions)
       const currentlyActive = newQuestions.filter(question => question.active)
       const activeIndex = currentlyActive[0].id  - 1

       const newSelected = newQuestions[activeIndex].options[id - 1]
       const previousSelected = currentlyActive[0].options.filter(option => option.selected)

       switch(currentlyActive[0].subtitle) {
         case 'Select one.':
           if (previousSelected[0]) {
             previousSelected[0].selected = !previousSelected[0].selected
           }
           newSelected.selected = !newSelected.selected
           break;
         default:
          newSelected.selected = !newSelected.selected
         break;
       }

       switch(newSelected.title) {
         case 'Custom Software Development':
           setQuestions(softwareQuestions)
           break;
         case 'iOS/Android App Development':
           setQuestions(softwareQuestions)
           break;
         case 'Website Development':
           setQuestions(websiteQuestions)
           break;
         default: 
           setQuestions(newQuestions)
          break;
       }
     }

     const getTotal = () => {
       let cost = 0
       const selections = questions.map(question => question.options.filter(option => option.selected))
        .filter(question => question.length > 0)
        selections.map(options => options.map(option => cost += option.cost))
        if (questions.length > 2) {
          const userCost = questions.filter(question => 
            question.title === "How many users do you expect?").map(question => 
              question.options.filter(option => option.selected))[0][0].cost

          cost -= userCost
          cost *= userCost
        
          console.log(cost) 
        }
        setTotal(cost)
     }

    return (
        <Grid container 
            direction="row"
        >
            <Grid item lg>
                <Grid container
                    direction="column"
                    style={{marginTop:"2em", marginBottom:"15em"}}
                >
                    <Grid item style={{alignText:"center", marginLeft: "5em"}}>
                        <Typography variant="h2" gutterBottom>Estimate</Typography>
                    </Grid>
                    <Grid item style={{maxWidth: "50em"}}>
                        <Lottie options={estimateOptions} width={"100%"} height={"100%"} stoppedIt="true" />
                    </Grid>    
                </Grid>
            </Grid>
            <Grid item lg>
                <Grid container
                    direction="column"
                    style={{marginTop:"2em", marginBottom:"15em"}}
                    // className={classes.rowContainer}
                    // style={{marginLeft:"0.5em"}}
                >
                    {
                        questions.filter(question => question.active).map((question,index) => (
                            <React.Fragment>
                                <Grid item >
                                    <Typography variant="h2" gutterBottom style={{fontWeight: 500}}>
                                      {question.title}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom style={{marginBottom:"2.5em"}}>
                                        {question.subtitle}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Grid container
                                        direction="row"
                                        justify="space-evenly"
                                    >
                                        {question.options.map((option,index) => (
                                            <Grid item 
                                              component={Button}
                                              onClick={()=>handleSelect(option.id)} 
                                              style={{
                                                display:"grid", 
                                                textDecoration:"none",
                                                backgroundColor: option.selected ? theme.palette.common.orange : null,
                                                borderRadius: 0
                                              }} 
                                              md
                                            >
                                                <Grid container 
                                                    direction="column"
                                                >                                                        
                                                    <Grid item style={{marginBottom:"1em", maxWidth:"14em"}}>
                                                        <Typography variant="h6" gutterBottom>
                                                            {option.title}
                                                        </Typography>
                                                        <Typography variant="caption" gutterBottom>
                                                            {option.subtitle}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <img className={classes.icon} 
                                                            alt={option.iconAlt} 
                                                            src={option.icon} 
                                                            style={{width: "10em", height:"10em"}}/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>                                            
                                        ))}
                                    </Grid>
                                </Grid>
                            </React.Fragment>    
                        ))
                    }
                    <Grid item>
                        <Grid container
                            direction="row"
                            justify="space-evenly"
                            style={{marginTop: "1.5em", marginBottom: "5em"}}
                        >
                            <Grid item>
                              <IconButton disabled={navigatePrevQuestion()} onClick={previousQuestion}>
                                <img className={classes.icon} alt="backArrow Icon" src={navigatePrevQuestion()? backArrowDisabled : backArrow} 
                                    style={{width: "1.5em", height:"1.5em"}}/>
                              </IconButton>
                            </Grid>
                            <Grid item>
                              <IconButton disabled={navigateNextQuestion()} onClick={nextQuestion}>
                                <img className={classes.icon} alt="forwardArrow Icon" src={navigateNextQuestion()? forwardArrowDisabled :forwardArrow} 
                                    style={{width: "1.5em", height:"1.5em"}}/>
                              </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{textAlign: "center"}}>
                        <Button 
                          className={classes.estimateButton}
                          onClick={()=>{setOpenDialog(true); getTotal()}}
                        >
                            Get Estimate
                          </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog 
              open={openDialog} 
              onClose={()=>setOpenDialog(false)} y
              style={{zIndex: 1301}}>
              <Grid item container justify="center">
                <Typography variant="h2" align="center">Estimate</Typography>
              </Grid>
              <DialogContent>
                <Grid container>
                  <Grid item>
                    <Grid container direction="column">
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
                      <Grid item>
                        <Typography varint="body1" paragraph>
                          We can create this digital solution for an estimated <span className={classes.specialText}>
                            ${total.toFixed(2)}
                          </span>
                        </Typography>
                        <Typography variant="body1" paragraph>
                          Fill out your name, phone and email. Place your requestand we will get back
                          to you with details moving forward and a final price.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">

                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog> 
        </Grid>
    )

}


