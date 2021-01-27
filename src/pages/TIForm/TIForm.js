import React, { useReducer, useState } from 'react';
import uuid from 'react-uuid';
import './TIForm.css';

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      ...state,
      type: '',
      phase: '',
      id: uuid(),
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
    data: 'filler',
  });
  const [submitting, setSubmitting] = useState(false);

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

  const handleChange = event => {
   const isCheckbox = event.target.type === 'checkbox';
   setFormData({
     name: event.target.name,
     value: isCheckbox ? event.target.checked : event.target.value,
   })
  }

  return (    
    <div className="ti-form">
        <h1>Form starts here</h1>
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
          <fieldset disabled={submitting}>
            <label>
              <p>Type</p>
              <select name="type" onChange={handleChange} value={formData.type || ''}>
                  <option value="">--Please choose an option--</option>
                  <option value="score">Score a point</option>
                  <option value="trade">Finalize a trade</option>
                  <option value="tactical">Tactical action</option>
                  <option value="strategic">Strategic action</option>
                  <option value="component">Component action</option>
              </select>
            </label>
          </fieldset>
          <fieldset disabled={submitting}>
            <label>
              <p>Phase</p>
              <select name="phase" onChange={handleChange} value={formData.phase || ''}>
                  <option value="">--Please choose an option--</option>
                  <option value="strategy">Strategy</option>
                  <option value="action">Action</option>
                  <option value="status">Status</option>
                  <option value="agenda">Agenda</option>
              </select>
            </label>
          </fieldset>
          <button type="submit" disabled={submitting}>Submit</button>
        </form>
    </div>
  );
}

export default TIForm;
