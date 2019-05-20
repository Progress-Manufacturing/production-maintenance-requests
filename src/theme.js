import { createMuiTheme } from '@material-ui/core/styles';

const primaryTheme = createMuiTheme({
    palette: {
        common: {
            black: 'rgba(0, 0, 0, 1)',
            white:'rgba(255, 255, 255, 1)'
        },
        background: {
            paper: '#fff',
            default:'#fafafa'
        },
        primary: {
            light: 'rgba(86, 79, 74, 1)',
            main: 'rgba(45, 41, 38, 1)',
            dark: 'rgba(26, 24, 22, 1)',
            contrastText:'#fff'
        },
        secondary: {
            light: 'rgba(228, 0, 43, 0.78)',
            main: 'rgba(228, 0, 43, 1)',
            dark: 'rgba(208, 2, 27, 1)',
            contrastText:'#fff'
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff'
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)'
        }
    },
    button: {
        margin: '8px',
    }
});

export default primaryTheme;