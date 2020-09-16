import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 0'
  },
  name: {
    marginTop: '8px',
  }
}));

export { useStyles };
