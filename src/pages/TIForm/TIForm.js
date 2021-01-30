import React, { useReducer, useState } from 'react';
import uuid from 'react-uuid';
import './TIForm.scss';
import Select from 'react-dropdown-select';
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

const typeOptions = [
  {value: "score", label: "Score a point"},
  {value: "trade", label: "Finalize a trade"},
  {value: "tactical", label: "Tactical action"},
  {value: "strategic", label: "Strategic action"},
  {value: "component", label: "Component action"}
 ]
const phaseOptions = [
  {value: "strategy", label: "Strategy"},
  {value: "action", label: "Action"},
  {value: "status", label: "Status"},
  {value: "agenda", label: "Agenda"}
]
const pointTypeOptions = [
  {value: "public", label: "Public"},
  {value: "secret", label: "Secret"},
  {value: "support", label: "Support for the Throne"},
  {value: "agenda", label: "Agenda"},
  {value: "other", label: "Other"}
]

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

  const handleChange = (name, value) => {
   setFormData({
     name: name,
     value: value,
   })
  }

  const handleMapChange = (name, value) => {
    let newDataValue = {...formData.data, [name]: value}
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
            <div>              
              <label>Type</label>
              <Select 
                name="type" 
                dropdownGap={0}
                placeholder=""
                options={typeOptions} 
                onChange={(values) => handleChange("type",values[0].value)} 
                value={formData.type || ''} 
                required 
              />
            </div>    
            <div>              
              <label>Phase</label>
              <Select 
                name="phase" 
                dropdownGap={0}
                placeholder=""
                options={phaseOptions} 
                onChange={(values) => handleChange("phase",values[0].value)} 
                value={formData.phase || ''} 
                required
              />
            </div>
          </fieldset>
          { formData.type === 'score' && <fieldset  disabled={submitting}>
            <div>              
              <label>Point Type</label>
              <Select 
                name="point-type" 
                dropdownGap={0}
                placeholder=""
                options={pointTypeOptions} 
                onChange={(values) => handleMapChange("point-type",values[0].value)} 
                value={formData.data['point-type'] || ''} 
                required
              />
            </div>
            <div className="input-box">
              <input 
                type="number" 
                name="point-value" 
                onChange={(event) => handleMapChange("point-value", event.target.value)} 
                step="1" 
                value={formData.data['point-value'] || ''} 
                required
              />
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
