import React, { useReducer, useState } from 'react';
import uuid from 'react-uuid';
import './TIForm.css';
import TradeForm from './TradeForm';

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

  const handleMapChange = event => {
    let newDataValue = {...formData.data, [event.target.name]: event.target.value}
    setFormData({
      name: 'data',
      value: newDataValue
    })
  }

  return (    
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
          <fieldset disabled={submitting}>
            <div className="input-box">
              <select name="type" onChange={handleChange} value={formData.type || ''} required>
                <option value=""></option>
                <option value="score">Score a point</option>
                <option value="trade">Finalize a trade</option>
                <option value="tactical">Tactical action</option>
                <option value="strategic">Strategic action</option>
                <option value="component">Component action</option>
              </select>
              <label>Type</label>
            </div>    
            <div className="input-box">
              <select name="phase" onChange={handleChange} value={formData.phase || ''} required>
                <option value=""></option>
                <option value="strategy">Strategy</option>
                <option value="action">Action</option>
                <option value="status">Status</option>
                <option value="agenda">Agenda</option>
              </select>
              <label>Phase</label>
            </div>
          </fieldset>
          { formData.type === 'score' && <fieldset  disabled={submitting}>
            <div className="input-box">
              <select name="point-type" onChange={handleMapChange} value={formData.data['point-type'] || ''} required>
                <option value=""></option>
                <option value="public">Public</option>
                <option value="secret">Secret</option>
                <option value="agenda">Agenda</option>
                <option value="support">Support for the Throne</option>
                <option value="other">Other</option>
              </select>
              <label>Point Type</label>
            </div>
            <div className="input-box">
              <input type="number" name="point-value" onChange={handleMapChange} step="1" value={formData.data['point-value'] || ''} required/>
              <label>Point Value</label>
            </div>
          </fieldset>}
          {/* <fieldset>
            <TradeForm handleChange={this.handleChange.bind(this)} />
          </fieldset> */}
          <button type="submit" disabled={submitting}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
    </div>
  );
}

export default TIForm;
