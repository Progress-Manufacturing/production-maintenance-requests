import Head from 'next/head';
import { primaryTheme } from '../../lib/theme/primaryTheme';
import { ThemeProvider } from '@material-ui/styles';
import styled from 'styled-components';
import { Container, CssBaseline, Grid } from '@material-ui/core';


const MainContainer = styled(Container)`
  position: relative;
  height: 100vh;
`;

const MainGrid = styled(Grid)`
  height: 100%;

`;

export default ({ children, title = 'Production Maintenance Request App' }) => (  
  <ThemeProvider theme={primaryTheme}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <MainContainer>
      <CssBaseline />
      <MainGrid
        container
        spacing={2}
        alignContent="center"
        alignItems="center"
        justify="center"
      >
        {children}
      </MainGrid>
    </MainContainer>
  </ThemeProvider>
)