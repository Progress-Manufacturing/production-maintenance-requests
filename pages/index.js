import Link from 'next/link';
import { Grid, Typography, Button } from '@material-ui/core';
import Layout from '../components/layout/primaryLayout';

const Home = () => {
  return (
    <Layout>
      <Grid item xs={12}>
        <Typography align='center'>Call For Help</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link passHref prefetch href='/request?name=ic'>
          <Button
            style={{ padding: '15px' }}
            fullWidth
            size='large'
            spacing={2}
            variant='contained'
            color='primary'
          >IC</Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link passHref prefetch href='/request?name=maintenance'>
          <Button
            style={{ padding: '15px' }}
            fullWidth
            size='large'
            variant='contained'
            color='primary'
          >Maintenance</Button>
        </Link>
      </Grid>
    </Layout>
  )
}

export default Home