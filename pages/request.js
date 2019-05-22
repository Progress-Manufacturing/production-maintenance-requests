import Layout from '../components/layout/primaryLayout';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { withRouter } from 'next/router';
import DateFnsUtils from "@date-io/date-fns";
import { format, endOfDay, addMinutes } from 'date-fns';
import { parseCookies } from 'nookies';
import Options from '../src/options';
import Authentication from '../src/msalAuth';
import {
	DatePicker,
	TimePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { 
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	OutlinedInput,
	FormHelperText,
	Button,
	Switch,
	Typography
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
	const auth = new Authentication();
	const { router } = props;
	const cookies = parseCookies();
	const classes = useStyles();
	const inputLabel = React.useRef(null);
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const [labelWidth, setLabelWidth] = React.useState(0);
	const [values, setValues] = React.useState({
    	location: '',
			issue: '',
			locationId: '',
			issueId: '',
			requestSent: false,
			errorCode: false
	});
	const [state, setState] = React.useState({
		asap: router.query.name === 'ic' ? false : true
	})
	React.useEffect(() => {
    	setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

	function handleChange(event, attr) {
		setValues(oldValues => ({
			...oldValues,
			[event.target.name]: event.target.value,
			[event.target.name + 'Id']: attr.key - 1
		}));
	}

	const handleSwitchChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};

	function handleDateChange(date) {
		setSelectedDate(date);
	}

	let subject = '', 
			postUrl = '', 
			startDate = '', 
			endDate = format(endOfDay(selectedDate), 'yyyy-MM-dd HH:mm:ss');
	
	function handleSubmit(e) {
		e.preventDefault();
		
		if (router.query.name === 'ic') {			
			postUrl = 'https://graph.microsoft.com/v1.0/users/6f4259ed-40d9-431c-864a-30143c9b3013/calendars/AQMkAGZhNDY0YWZlLWEzNmEtNGRmNi1hODMwLTg2ODNkY2E5NmJlNwBGAAADkDFzQm1NZUCOFvLqCppoawcAxgV51NHhr06FqTjfmmUEOgAAAgEGAAAAxgV51NHhr06FqTjfmmUEOgABaQEaggAAAA==/events';
			subject = `${values.location} - ${values.issue}`;
			startDate = state.asap === true ? format(addMinutes(selectedDate, 5), 'yyyy-MM-dd HH:mm:ss') : format(selectedDate, 'yyyy-MM-dd hh:mm:ss');
		} else {
			postUrl = 'https://graph.microsoft.com/v1.0/users/6f4259ed-40d9-431c-864a-30143c9b3013/calendars/AQMkAGZhNDY0YWZlLWEzNmEtNGRmNi1hODMwLTg2ODNkY2E5NmJlNwBGAAADkDFzQm1NZUCOFvLqCppoawcAxgV51NHhr06FqTjfmmUEOgAAAgEGAAAAxgV51NHhr06FqTjfmmUEOgABaQEagwAAAA==/events';
			subject = `${values.issue} - ${values.location}`;
			startDate = format(addMinutes(selectedDate, 5), 'yyyy-MM-dd HH:mm:ss');
		}

		const taskPayload = {
				"subject": subject,
				"start": {
						"dateTime": startDate,
						"timeZone": "Mountain Standard Time"
				},
				"end": {
						"dateTime": endDate,
						"timeZone": "Mountain Standard Time"
				},
				"location":{
						"displayName": values.location
				},
				"reminderMinutesBeforeStart": 1
		}

		auth.callMSGraphPost(cookies.token, postUrl, taskPayload).then((res) => {
			
			if(res.error) {
				console.log(res.error);
				setValues(oldValues => ({
					...oldValues,
					errorCode: true
				}));
			} else {
				console.log({ res });
				setValues(oldValues => ({
					...oldValues,
					requestSent: true
				}));
			}
		})
	}

	return (
		<Layout>
			{values.errorCode &&
				<Grid item sm={12} style={{ marginTop: '15px', maxWidth: '400px', backgroundColor: '#FFBABA', borderRadius: '8px' }}>
					<Typography style={{ color: '#D8000C', textAlign: 'center' }}>Sorry, something went wrong with the request. Please try again or contact helpdesk.</Typography>
				</Grid>
			}
			{!values.requestSent && 
			<form 
				className={classes.root} 
				autoComplete='off'
				onSubmit={handleSubmit}
			>
				<Grid item xs={12}>
					<FormControl fullWidth variant='outlined' className={classes.formControl}>
						<InputLabel ref={inputLabel} htmlFor='outlined-location-simple'>
							Where
						</InputLabel>
						<Select
							value={values.location}
							onChange={handleChange}
							input={<OutlinedInput labelWidth={labelWidth} name='location' id='outlined-location-simple' />}
						>
							<MenuItem disabled value=''><em>Location</em></MenuItem>
							{Options.map(location => {
								return (
									<MenuItem key={location.id} value={location.main.label}>{location.main.label}</MenuItem>
								)
							})}
						</Select>
						<FormHelperText>Select Location</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth variant='outlined' className={classes.formControl}>
						<InputLabel ref={inputLabel} htmlFor='outlined-issue-simple'>
							What
						</InputLabel>
						<Select
							value={values.issue}
							onChange={handleChange}
							input={<OutlinedInput labelWidth={labelWidth} name='issue' id='outlined-issue-simple' />}
						>
							<MenuItem disabled value='' key='-1'><em>Issue</em></MenuItem>
							{(values.location && router.query.name == 'ic') && 
								(Options[values.locationId].sub).map(issue => (
									<MenuItem key={issue.id} value={issue.label}>{issue.label}</MenuItem>
								))
							}
							{router.query.name == 'maintenance' &&
								<MenuItem value='Machine Down' key='0'>Machine Down</MenuItem>
							}
						</Select>
						<FormHelperText>Select Issue</FormHelperText>
					</FormControl>
				</Grid>
				{router.query.name === 'ic' && (
					<Grid item xs={12}>
						<Grid item xs={12}>
							<Grid component='label' container alignItems='center' justify='center' spacing={1}>
											<Grid item>Schedule</Grid>
											<Grid item>
									<Switch 
										checked={state.asap}
										onChange={handleSwitchChange('asap')}
										value='asap'
										color='primary'
									/>
											</Grid>
											<Grid item>ASAP</Grid>
									</Grid>
						</Grid>
						{state.asap === false && 
							<Grid item xs={12}>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<Grid container justify='space-around'>
										<DatePicker
											margin='normal'
											label='Choose Date'
											value={selectedDate}
											onChange={handleDateChange}
										/>
										<TimePicker
											margin='normal'
											label='Choose Time'
											value={selectedDate}
											onChange={handleDateChange}
										/>
									</Grid>
								</MuiPickersUtilsProvider>
							</Grid>
						}
					</Grid> )
				}
				<Grid item xs={12} style={{ marginTop: '25px' }}>
					<Button 
						style={{ padding: '15px' }}
						fullWidth
						type='submit'
						size='large'
						variant='contained'
						color='secondary'
					>Submit Request</Button>
				</Grid>
			</form>
			}

			{values.requestSent &&
				<Grid item sm={12}>
				<div style={{ border: '1px solid gray', borderRadius: '8px', overflow: 'hidden' }}>
					<div style={{ backgroundColor: '#59575a', textAlign: 'center' }}>
						<Typography variant="h5" component="h5" style={{ color: 'white', padding: '10px' }}>Thank You</Typography>
					</div>
					<div style={{ textAlign: 'center', padding: '25px' }}>
						{state.asap === true &&
							<Grid>
								<Typography style={{ marginBottom: '10px' }}>{ (router.query.name).toUpperCase() } will get to you in the next</Typography>
								<Typography style={{ color: '#d32f2f', marginBottom: '10px', fontWeight: 'bold' }}>15 - 20 minutes</Typography>
							</Grid>
						}
						{state.asap === false &&
							<Grid>
								<Typography style={{ marginBottom: '10px' }}>{ (router.query.name).toUpperCase() } will get to you on or before the selected date of</Typography>
								<Typography style={{ color: '#d32f2f', marginBottom: '10px', fontWeight: 'bold' }}>{startDate}</Typography>
							</Grid>
						}
						
						<Typography style={{ marginBottom: '10px' }}>to fufill your request, thank you for your patience.</Typography>
					</div>
				</div>
				<div style={{ marginTop: '15px' }}>
					<Link passHref href='/'>
						<Button
							style={{ padding: '15px' }}
							fullWidth
							size='large'
							spacing={2}
							variant='contained'
							color='secondary'
						>Return to Request Page</Button>
					</Link>
				</div>
			</Grid>        
			}
		</Layout>
	)
}

export default withRouter(Request)