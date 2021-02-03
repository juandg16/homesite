import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {
      display: "flex",
      margin: theme.spacing(1),
      marginTop: theme.spacing(2),
    }
}));
    

function TradeForm(props){
    const classes = useStyles();
    return (    
        <div className="trade-form">
            <FormControl variant="filled" disabled={props.submitting} className={classes.formControl} required>
                <InputLabel id="type-select-label">Type</InputLabel>
                <Select
                  labelId="" 
                  id="type-select"
                  name="type"
                  onChange={props.handleChange} 
                  value={props.formData.type || ''}                   
                >
                    <MenuItem value={"score"}>Score a point</MenuItem>
                    <MenuItem value={"trade"}>Finalize a trade</MenuItem>
                    <MenuItem value={"tactical"}>Tactical action</MenuItem>
                    <MenuItem value={"strategic"}>Strategic action</MenuItem>
                    <MenuItem value={"component"}>Component action</MenuItem>
                </Select>
            </FormControl>  
            <FormControl variant="filled" disabled={props.submitting} className={classes.formControl} required>        
                <InputLabel id="phase-select-label">Phase</InputLabel>
                <Select 
                  labelId="phase-select-label"
                  id="phase-select"
                  name="phase"
                  onChange={props.handleChange} 
                  value={props.formData.phase || ''}                  
                >
                    <MenuItem value={"strategy"}>Strategy</MenuItem>
                    <MenuItem value={"action"}>Action</MenuItem>
                    <MenuItem value={"status"}>Status</MenuItem>
                    <MenuItem value={"agenda"}>Agenda</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default TradeForm;