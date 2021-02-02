import React, { useReducer, useState } from 'react';
import uuid from 'react-uuid';
import { 
  Tab, 
  Tabs, 
  Card, 
  CardContent, 
  CardActions } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './TIForm.scss';
import TradeForm from './TradeForm';
import MainForm from './MainForm';
import { orange } from '@material-ui/core/colors';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#03e9f4',
    },
    secondary: orange,
    action: {
      hover: '#03e9f4',
    }
  },
});

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      ...state,
      type: '',
      phase: '',
      id: uuid(),
      data: {},
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function TIForm() {
  const [formData, setFormData] = useReducer(formReducer, {
    gameId: uuid(),    
    id: uuid(),
    data: {},
  });
  const [submitting, setSubmitting] = useState(false);
  const [key, setKey] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    formData.timestamp = new Date().toISOString();
    let raw = JSON.stringify(formData);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_WRITE_API_URL, requestOptions)
    .then(response => response.text())
    .then(result => {
      let parsedResult = JSON.parse(result);
      if (parsedResult.statusCode === 200){
        console.log(parsedResult.body);
        setFormData({
          reset: true
        });
      }
      setSubmitting(false);
    })
  }

  const handleTabChange = (event, newValue) => {
    setKey(newValue);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    })
  }

  const handleMapChange = (event) => {
    let newDataValue = {...formData.data, [event.target.name]: event.target.value}
    setFormData({
      name: 'data',
      value: newDataValue
    })
  }

  return (    
    <ThemeProvider theme={darkTheme}>
      <div className="ti-form">
        <h1>TI Data Tracker</h1>
        {submitting && 
          <div>
            You are submitting the following:
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
              ))}
              <li>{process.env.REACT_APP_WRITE_API_URL}</li>
            </ul>
          </div>
        }         
        <form onSubmit={handleSubmit}>  
          <Card>
            <Tabs 
              value={key}
              onChange={handleTabChange}
              variant="fullWidth"
            >
              <Tab label="Main" />
              <Tab label="Trade" />
              <Tab label="Uhh" />
            </Tabs>  
            <CardContent>
              { key === 0 &&
                <fieldset>
                  <MainForm 
                    handleChange={handleChange.bind(this)} 
                    handleMapChange={handleMapChange.bind(this)}
                    formData={formData}
                    submitting={submitting}
                  />
                </fieldset>
              }
              { key === 1 &&
                <fieldset>
                  <TradeForm 
                    handleChange={handleChange.bind(this)} 
                    handleMapChange={handleMapChange.bind(this)}
                    formData={formData}
                    submitting={submitting}
                  />
                </fieldset>
              }
            </CardContent>
            <CardActions>
              <button className="submitButton" type="submit" disabled={submitting}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
            </CardActions>
          </Card>                 
        </form>
      </div>
    </ThemeProvider>    
  );
}

export default TIForm;
