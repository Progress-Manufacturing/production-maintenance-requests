import Head from 'next/head';
import primaryTheme from '../../src/theme'
import { ThemeProvider } from '@material-ui/styles';
import { Container, CssBaseline, Grid } from '@material-ui/core';

export default ({ children, title = 'Production Maintenance Requests' }) => (  
    <ThemeProvider theme={primaryTheme}>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Container
            style={{
                position: 'relative',
                height: '100vh'
            }}
            maxWidth="sm"
        >
            <CssBaseline />
            <Grid
                container
                spacing={2}
                alignContent='center'
                alignItems='center'
                justify='center'
                style={{
                    height: '100%'
                }}
            >
                {children}
            </Grid>
        </Container>
    </ThemeProvider>
)