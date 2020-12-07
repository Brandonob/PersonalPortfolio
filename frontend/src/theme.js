import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

theme.typography.h5 = {
    fontSize: '30px',
    }
theme.typography.h1 = {
    fontSize: '50px',
    marginBottom: '30px',
    marginLeft: '15px'
    }

export default theme;