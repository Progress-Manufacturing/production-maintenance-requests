import Layout from '../components/layout/primaryLayout';
import Link from 'next/link';
import { sizing } from '@material-ui/system';
import { Grid, Typography, Button, Container } from '@material-ui/core';

const Home = () => {
	return (
		<Layout>
			<Grid container spacing={2} alignContent="center" style={{ height: "100%" }}>
				<Grid item xs={12}>
					<Typography align="center">Call For Help</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Link passHref prefetch href="/ic">
						<Button 
							style={{ padding: "15px" }}
							fullWidth
							size="large"
							spacing={2}
							variant="contained"
							color="primary"
						>IC</Button>
					</Link>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Link passHref prefetch href="/maintenance">
						<Button 
							style={{ padding: "15px" }}
							fullWidth
							size="large"
							variant="contained"
							color="primary"
						>Maintenance</Button>
					</Link>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default Home