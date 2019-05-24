import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { setCookie, parseCookies } from 'nookies';
import Link from 'next/link';
import { Grid, Typography, Button } from '@material-ui/core';
import Layout from '../components/layout/primaryLayout';


class Home extends Component {
  static async getInitialProps(ctx) {
    const cookies = parseCookies(ctx.req);
    if (!process.browser) {
      if(!cookies.token) {
        return fetch(`${process.env.TENANT_LINK}`, {
          body: `client_id=${process.env.CLIENT_ID}&scope=https%3A%2F%2Fgraph.microsoft.com%2F.default&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST'
        }).then((res) => {
          return res.json().then((data) => {
            return  data;
          });
        }).catch((err) => {
          console.log(err)
        });

        return { data }
      }
    } else {
      return {}
    }
  }

  render() {
    const { access_token, expires_in } = this.props
    
    if(access_token) {
      setCookie({}, 'token', access_token, {
        maxAge: expires_in
      });
    } 

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
}

export default Home