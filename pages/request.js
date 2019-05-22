import Layout from '../components/layout/primaryLayout';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'next/router';
import Moment from '@date-io/moment';
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
	const auth = new Authentication();
	const { router } = props;
	const cookies = parseCookies();
	const classes = useStyles();
	const inputLabel = React.useRef(null);
	const [selectedDate, setSelectedDate] = React.useState(new Date('NOW'));
	const [labelWidth, setLabelWidth] = React.useState(0);
	const [values, setValues] = React.useState({
    	location: '',
			issue: '',
			locationId: '',
			issueId: ''
	});
	let subject = '';
	let postUrl = '';
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

	function handleSubmit(e) {
		e.preventDefault();
		
		if (router.query.name === 'ic') {
			postUrl = 'https://graph.microsoft.com/beta/users/6f4259ed-40d9-431c-864a-30143c9b3013/outlook/taskFolders/AQMkAGZhNDY0YWZlLWEzNmEtNGRmNi1hODMwLTg2ODNkY2E5NmJlNwAuAAADkDFzQm1NZUCOFvLqCppoawEAxgV51NHhr06FqTjfmmUEOgABYyKzKwAAAA==/tasks'
			subject = `${values.location} - ${values.issue}`
		} else {
			postUrl = 'https://graph.microsoft.com/beta/users/6f4259ed-40d9-431c-864a-30143c9b3013/outlook/taskFolders/AQMkAGZhNDY0YWZlLWEzNmEtNGRmNi1hODMwLTg2ODNkY2E5NmJlNwAuAAADkDFzQm1NZUCOFvLqCppoawEAxgV51NHhr06FqTjfmmUEOgABYyKzLAAAAA==/tasks'
			subject = `${values.issue} - ${values.location}`
		}
		console.log({ postUrl })
		
		const taskPayload = {
				"subject": subject,
				"startDateTime": {
						"dateTime": "2019-05-23T18:00:00",
						"timeZone": "Mountain Standard Time"
				},
				"dueDateTime":  {
						"dateTime": "2019-05-25T13:00:00",
						"timeZone": "Mountain Standard Time"
				}
		}

		// console.log('date: ', selectedDate);
		auth.callMSGraphPost(cookies.token, postUrl, taskPayload).then((res) => {
			console.log(res)
		})
	}
	
	return (
		<Layout>
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
								<MuiPickersUtilsProvider utils={Moment}>
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
		</Layout>
	)
}

export default withRouter(Request)