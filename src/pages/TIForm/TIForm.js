import React, { useState } from 'react';
import './TIForm.css';

function TIForm() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
  }

  return (    
    <div class="ti-form">
        <h1>Form starts here</h1>
        {submitting && <div>Submtting Form...</div>}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Type</p>
              <input name="type" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default TIForm;
