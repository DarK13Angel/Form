import React, { useState } from 'react';
import "./App.css";
import { Button,  Dropdown , Form , FormField, Icon  } from "semantic-ui-react";
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

function App() {
  const [values, setValues] = useState({
    name: '', val1: '', val2: '', val3: '' 
  });

  const set = name => {
    return ({ target: { value }}) => {
      setValues(oldValues => ({...oldValues, [name]: value}));
    }
  }
 
  const optionValues = [
    
    {
      key: 'option1',
      text: 'Action and Adventure',
      value: 'Action and Adventure'
    },
    {
      key: 'option2',
      text: 'Animation',
      value:'Animation'
    },
    {
      key: 'option3',
      text: 'Comedy',
      value:'Comedy'
    },
    {
      key: 'option4',
      text: 'Drama',
      value:'Drama'
    },
    {
      key: 'option5',
      text: 'Horror',
      value:'Horror'
    },
    {
      key: 'option6',
      text: 'Sci-Fi',
      value:'Sci-Fi'
    }
  ]

  return (
    <div className="app">
      <div className="app_header">
        <h2>HELP US IN THIS SURVEY</h2>
        <h3>Hello { values.name }</h3>
      </div>
      <div className='body'>
          <Form className="form">
            <FormField className="wrapper">
                <input 
                  type="input"
                  className="textField"
                  value={values.name}
                  placeholder=" "
                  onChange={set('name')}
                />
                  <span className="placeholder">Name</span>
            </FormField>
           
              
          


            <FormField className="wrapper">
            <FormControl>
              <FormLabel>Do you like watching Movies in your free time ?</FormLabel>
              <RadioGroup  name="options" value={values.val1} onChange={set('val1')}>
                <FormControlLabel value="option 1" control={<Radio />} label="yes, I love to" />
                <FormControlLabel value="option 2" control={<Radio />} label="I often watch it" />
                <FormControlLabel value="option 3" control={<Radio />} label="No, I  don't like to" />
              </RadioGroup>
            </FormControl>
            </FormField>


            <FormField className="wrapper">
              <h3>Choose your favourite Genre</h3>
              <Dropdown
                placeholder="Select"
                className="textField"
                clearable
                multiple
                selection
                options={ optionValues }
              />
                
            </FormField>


            <FormField className="wrapper">
            <FormControl>
              <FormLabel>Do you like watching Series at your free time ?</FormLabel>
              <RadioGroup  name="options" value={values.val2} onChange={set('val2')}>
                <FormControlLabel value="option 4" control={<Radio />} label="yes, I love to" />
                <FormControlLabel value="option 5" control={<Radio />} label="I often watch it" />
                <FormControlLabel value="option 6" control={<Radio />} label="No, I  don't like to" />
              </RadioGroup>
            </FormControl>
            </FormField>

            <FormField className="wrapper">
              <h3>Choose your favourite Genre</h3>
              <Dropdown
                placeholder="Select"
                className="textField"
                clearable
                multiple
                selection
                options={ optionValues }
              />
                
            </FormField>

            <FormField className="wrapper">
            <FormControl>
              <FormLabel>Do you have any account in Netflix/Prime video/Disney+</FormLabel>
              <RadioGroup  name="options" value={values.val3} onChange={set('val3')}>
                <FormControlLabel value="option 7" control={<Radio />} label="yes, I have an account" />
                <FormControlLabel value="option 8" control={<Radio />} label="I rent my friends account" />
                <FormControlLabel value="option 9" control={<Radio />} label="No, I  don't have an account" />
              </RadioGroup>
            </FormControl>
            </FormField>

         

            <FormField className="wrapper">
              <Button icon className="medium ui primary left floated button">
                <Icon name='check' />
                Submit
              </Button>
              <Button
                icon
                className="medium ui right floated grey button"
                onClick={e => setValues('')}
              >
                <Icon name='x' />RESET
              </Button>
            </FormField>

          </Form>
          </div>
        </div>  
    
  )
}

export default App
