import React, { useState } from 'react';
import "./App.css";
import { Button,  Dropdown , Form , FormField  } from "semantic-ui-react";
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

function App() {
  const [name, setName] = useState('');
  const [val, setVal] = useState('');
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
 
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
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="app">
      <div className="app_header">
        <h2>HELP US IN THIS SURVEY</h2>
        <h3>Hello { name }</h3>
      </div>
      <div className='body'>
          <Form className="form" onSubmit={handleSubmit}>
            <FormField className="wrapper">
                <input 
                  type="input"
                  className="textField"
                  value={name}
                  placeholder=" "
                  onChange={e => setName(e.target.value)}
                />
                  <span className="placeholder">Name</span>
            </FormField>
           
              
          


            <FormField className="wrapper">
            <FormControl>
              <FormLabel>Do you like watching Movies in your free time ?</FormLabel>
              <RadioGroup  name="options" value={val1} onChange={e => setVal1(e.target.value)}>
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
              <RadioGroup  name="options" value={val2} onChange={e => setVal2(e.target.value)}>
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
              <RadioGroup  name="options" value={val} onChange={e => setVal(e.target.value)}>
                <FormControlLabel value="option 7" control={<Radio />} label="yes, I have an account" />
                <FormControlLabel value="option 8" control={<Radio />} label="I rent my friends account" />
                <FormControlLabel value="option 9" control={<Radio />} label="No, I  don't have an account" />
              </RadioGroup>
            </FormControl>
            </FormField>

         

            <FormField className="wrapper">
              <Button className="medium ui primary left floated button">Submit</Button>
              <Button
                className="medium ui right floated grey button"
                onClick={e => setName('')}
              >Reset</Button>
            </FormField>

          </Form>
          </div>
        </div>  
    
  )
}

export default App
