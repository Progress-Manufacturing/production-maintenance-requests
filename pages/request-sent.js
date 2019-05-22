import { Component } from 'react';
import Link from 'next/link';
import { Grid, Typography, Button } from '@material-ui/core';
import Layout from '../components/layout/primaryLayout';

class RequestSent extends Component {
  static async getInitialProps() {

    return {}
  }

  render() {
    const queueNumber = 5;
    const estimatedTime = 15

    return (
      <Layout>
        <Grid item sm={12}>
          <div style={{ border: '1px solid gray', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#59575a', textAlign: 'center' }}>
              <Typography variant="h5" component="h5" style={{ color: 'white', padding: '10px' }}>Thank You</Typography>
            </div>
            <div style={{ textAlign: 'center', padding: '25px' }}>
              <Typography style={{ marginBottom: '10px' }}>You are <b style={{ color: '#d32f2f' }}>{queueNumber}</b> in the queue</Typography>
              <Typography style={{ marginBottom: '10px' }}>It will take approximately</Typography>
              <Typography style={{ color: '#d32f2f', marginBottom: '10px', fontWeight: 'bold' }}>{estimatedTime} minutes</Typography>
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
      </Layout>
    )
  }
}

export default RequestSent