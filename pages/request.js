import Layout from '../components/layout/primaryLayout';
import { makeStyles } from '@material-ui/core/styles';
import Moment from '@date-io/moment';
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

	//   margin: theme.spacing(1),
	//   minWidth: 120,
	},
	selectEmpty: {
	  marginTop: theme.spacing(2),
	},
}));

const Request = () => {
	const [value, setValue] = React.useState('female');
	const [selectedDate, setSelectedDate] = React.useState(new Date('2019-01-19T00:00:00'));

	function handleDateChange(date) {
		setSelectedDate(date);
	}

  	function handleChange(event) {
    	setValue(event.target.value);
  	}

	const classes = useStyles();
  	const [values, setValues] = React.useState({
    	age: '',
    	name: 'hai',
  	});

  	const inputLabel = React.useRef(null);
  	const [labelWidth, setLabelWidth] = React.useState(0);
  	React.useEffect(() => {
    	setLabelWidth(inputLabel.current.offsetWidth);
  	}, []);

  	function handleChange(event) {
    	setValues(oldValues => ({
      		...oldValues,
      		[event.target.name]: event.target.value,
    	}));
  	}
	
	return (
		<Layout>
			<form className={classes.root} autoComplete="off">
				<Grid item xs={12} alignContent="center" justify="center">
					<FormControl fullWidth variant="outlined" className={classes.formControl}>
						<InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
							Where
						</InputLabel>
						<Select
							value={values.age}
							onChange={handleChange}
							input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
						>
							<MenuItem disabled value=""><em>Location</em></MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
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
							value={values.age}
							onChange={handleChange}
							input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
						>
							<MenuItem disabled value=""><em>Issu</em></MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
						<FormHelperText>Select Issue</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} alignContent="center" justify="center">
					<Grid component="label" container alignItems="center" justify="center" spacing={1}>
          				<Grid item>Schedule</Grid>
          				<Grid item alignItems="center">
							<Switch color="secondary" />
          				</Grid>
          				<Grid item>ASAP</Grid>
        			</Grid>
				</Grid>
				<Grid item xs={12} alignContent="center" justify="center">
					<MuiPickersUtilsProvider utils={Moment}>
						<Grid container justify="space-around">
							<DatePicker
								margin="normal"
								label="Date picker"
								value={selectedDate}
								onChange={handleDateChange}
							/>
							<TimePicker
								margin="normal"
								label="Time picker"
								value={selectedDate}
								onChange={handleDateChange}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
				</Grid>
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