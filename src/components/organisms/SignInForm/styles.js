import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  signupButton: {
    marginLeft: '8px',
  },
  signinButton: {
    marginTop: '16px',
    marginBottom: '16px',
    width: '100%',
  },
  input: {
    display: 'block',
    width: '100%',
  }
}));

export { useStyle };
