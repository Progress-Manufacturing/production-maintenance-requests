import Head from 'next/head';
import { primaryTheme } from '../../lib/theme/primaryTheme';
import { ThemeProvider } from '@material-ui/styles';
import { styled } from '@material-ui/styles';
import { Container, CssBaseline } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

export default ({ children, title = 'Production Maintenance Request App' }) => (
  <ThemeProvider theme={primaryTheme}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Container maxWidth="sm" style={{ height: "100vh" }}>
      <CssBaseline />
      {children}
    </Container>
  </ThemeProvider>
)