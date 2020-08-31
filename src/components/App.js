import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../components/ui/Theme';

import Headers from './ui/Headers';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './ui/CustomSoftware'
import MobileApps from './MobileApps'
import Website from './Website'
import Revolution from './Revolution'
import About_Us from './About_Us'
import Contact from './Contact'
import Estimate from './Estimate'


function App(props) {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0); 

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Headers 
          value={value} 
          setValue={setValue} 
          selectedIndex={selectedIndex} 
          setSelectedIndex={setSelectedIndex} 
          history={props.history}
        />
        <Switch>
          <Route 
            exact 
            path="/" 
            render={props=> 
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact 
            path="/services" 
            render={props=> 
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact 
            path="/customsoftware" 
            render={props=> 
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact 
            path="/mobileapps" 
            render={props=> 
              <MobileApps
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact 
            path="/websites" 
            render={props=> 
              <Website
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact 
            path="/revolution" 
            render={props=> 
              <Revolution
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact 
            path="/about" 
            render={props=> 
              <About_Us
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact 
            path="/contact" 
            render={props=> 
              <Contact
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact 
            path="/estimate" 
            render={props=> 
              <Estimate
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
        </Switch>
        <Footer 
          value={value} 
          setValue={setValue} 
          selectedIndex={selectedIndex} 
          setSelectedIndex={setSelectedIndex} 
          history={props.history}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
