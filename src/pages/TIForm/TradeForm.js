// function TradeForm(props){
//     return (    
//         <div className="trade-form">
//             <h1>Form starts here</h1>
//             {submitting && 
//             <div>
//             You are submitting the following: 
//             <ul>
//             {Object.entries(formData).map(([name, value]) => (
//                 <li key={name}><strong>{name}</strong>:{value.toString()}</li>
//             ))}
//             <li>{process.env.REACT_APP_WRITE_API_URL}</li>
//             </ul>
//             </div>
//             }
//             <form onSubmit={handleSubmit}>
//             <fieldset disabled={submitting}>
//                 <label>
//                 <p>Type</p>
//                 <select name="type" onChange={handleChange} value={formData.type || ''}>
//                     <option value="">--Please choose an option--</option>
//                     <option value="score">Score a point</option>
//                     <option value="trade">Finalize a trade</option>
//                     <option value="tactical">Tactical action</option>
//                     <option value="strategic">Strategic action</option>
//                     <option value="component">Component action</option>
//                 </select>
//                 </label>
//             </fieldset>
//             <fieldset disabled={submitting}>
//                 <label>
//                 <p>Phase</p>
//                 <select name="phase" onChange={handleChange} value={formData.phase || ''}>
//                     <option value="">--Please choose an option--</option>
//                     <option value="strategy">Strategy</option>
//                     <option value="action">Action</option>
//                     <option value="status">Status</option>
//                     <option value="agenda">Agenda</option>
//                 </select>
//                 </label>
//             </fieldset>
//             <button type="submit" disabled={submitting}>Submit</button>
//             </form>
//         </div>
//     );
// }

// export default TradeForm;