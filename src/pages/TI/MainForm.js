import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    formControl: {
      display: "flex",
      margin: theme.spacing(1),
      marginTop: theme.spacing(2),
    }
}));
    

function MainForm(props){
    const classes = useStyles();
    return (    
        <div className="main-form">
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
            <FormControl variant="filled" disabled={props.submitting} className={classes.formControl} required>        
                <InputLabel id="player-select-label">Player</InputLabel>
                <Select 
                  labelId="player-select-label"
                  id="player-select"
                  name="player"
                  onChange={props.handleMapChange} 
                  value={props.formData.data['player'] || ''}                  
                >
                    <MenuItem value={"hacan"}>Emirates of Hacan</MenuItem>
                    <MenuItem value={"sol"}>Federation of Sol</MenuItem>
                    <MenuItem value={"nomad"}>The Nomad</MenuItem>
                    <MenuItem value={"nekro"}>Nekro Virus</MenuItem>
                </Select>
            </FormControl>
            {props.formData.type === 'score' && 
                <div>
                    <FormControl variant="filled" disabled={props.submitting} className={classes.formControl}>
                        <InputLabel id="point-type-select-label">Point Type</InputLabel>
                        <Select 
                            labelId="point-type-select-label"
                            id="point-type-select"
                            name="point-type"
                            onChange={props.handleMapChange} 
                            value={props.formData.data['point-type'] || ''}                        
                        >
                            <MenuItem value={"public"}>Public</MenuItem>
                            <MenuItem value={"secret"}>Secret</MenuItem>
                            <MenuItem value={"support"}>Support for the Throne</MenuItem>
                            <MenuItem value={"agenda"}>Agenda</MenuItem>
                            <MenuItem value={"other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl disabled={props.submitting} className={classes.formControl}>
                        <InputLabel id="point-value-select-label">Point Value</InputLabel>
                        <Input
                            labelId="point-value-select-label"
                            id="point-value-select" 
                            type="number" 
                            name="point-value" 
                            className={classes.numberInput}
                            onChange={props.handleMapChange} 
                            step="1" 
                            value={props.formData.data['point-value'] || ''}                                
                        />
                    </FormControl>
                </div>
            } 
        </div>
    );
}

export default MainForm;