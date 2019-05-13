import Layout from '../components/layout/primaryLayout';
import { makeStyles } from '@material-ui/core/styles';
import Moment from '@date-io/moment';
import { Options } from '../lib/options'
import {
	DatePicker,
	TimePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { 
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	OutlinedInput,
	FormHelperText,
	Button,
	Switch
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	formControl: {
		marginTop: theme.spacing(4),
		minWidth: 120
	},
	selectEmpty: {
	  marginTop: theme.spacing(2),
	},
}));

const Request = (props) => {
	const { url } = props
	const classes = useStyles();
	const inputLabel = React.useRef(null);
	const [selectedDate, setSelectedDate] = React.useState(new Date('NOW'));
	const [labelWidth, setLabelWidth] = React.useState(0);
	const [values, setValues] = React.useState({
    	location: undefined,
    	issue: undefined,
	});
	const [state, setState] = React.useState({
		asap: false
	})
	React.useEffect(() => {
    	setLabelWidth(inputLabel.current.offsetWidth);
  	}, []);

	function handleChange(event) {
    	setValues(oldValues => ({
      		...oldValues,
      		[event.target.name]: event.target.value,
    	}));
	}

	const handleSwitchChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};

	function handleDateChange(date) {
		setSelectedDate(date);
	}

	console.log(state)
	return (
		<Layout>
			<form className={classes.root} autoComplete="off">
				<Grid item xs={12} alignContent="center" justify="center">
					<FormControl fullWidth variant="outlined" className={classes.formControl}>
						<InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
							Where
						</InputLabel>
						<Select
							value={values.location}
							onChange={handleChange}
							input={<OutlinedInput labelWidth={labelWidth} name="location" id="outlined-location-simple" />}
						>
							<MenuItem disabled value=""><em>Location</em></MenuItem>
							{Options.map(location => (
								<MenuItem value={location.id}>{location.main.label}</MenuItem>
							))}
						</Select>
						<FormHelperText>Select Location</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} alignContent="center" justify="center">
					<FormControl fullWidth variant="outlined" className={classes.formControl}>
						<InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
							What
						</InputLabel>
						<Select
							value={values.issue}
							onChange={handleChange}
							input={<OutlinedInput labelWidth={labelWidth} name="issue" id="outlined-issue-simple" />}
						>
							<MenuItem disabled value=""><em>Issue</em></MenuItem>
							{(values.location && url.query.name == 'ic') && 
								(Options[values.location].sub).map(issue => (
									<MenuItem value={issue.id}>{issue.label}</MenuItem>
								))
							}
							{url.query.name == 'maintenance' &&
								<MenuItem value="0">Machine Down</MenuItem>
							}
						</Select>
						<FormHelperText>Select Issue</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} alignContent="center" justify="center">
					<Grid component="label" container alignItems="center" justify="center" spacing={1}>
          				<Grid item>Schedule</Grid>
          				<Grid item alignItems="center">
							<Switch 
								checked={state.asap}
								onChange={handleSwitchChange('asap')}
								value="asap"
								color="primary"
							/>
          				</Grid>
          				<Grid item>ASAP</Grid>
        			</Grid>
				</Grid>
				{state.asap === false && 
					<Grid item xs={12} alignContent="center" justify="center">
						<MuiPickersUtilsProvider utils={Moment}>
							<Grid container justify="space-around">
								<DatePicker
									margin="normal"
									label="Choose Date"
									value={selectedDate}
									onChange={handleDateChange}
								/>
								<TimePicker
									margin="normal"
									label="Choose Time"
									value={selectedDate}
									onChange={handleDateChange}
								/>
							</Grid>
						</MuiPickersUtilsProvider>
					</Grid>
				}
				<Grid item xs={12} alignContent="center" justify="center" style={{ marginTop: "25px" }}>
					<Button 
						style={{ padding: "15px" }}
						fullWidth
						size="large"
						variant="contained"
						color="secondary"
					>Submit Request</Button>
				</Grid>
			</form>
		</Layout>
	)
}

export default Request