import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  signinBox: {
    padding: '16px',
  },
  titleWrapper: {
    marginRight: '24px',
    textAlign: 'left',
    width: '400px',
  },
  contentWrapper: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: '70vh',
  },
  overline: {
    textAlign: 'center',
    width: '100%',
    display: 'block',
    marginBottom: '8px',
  },
  gridWrapper: {
    maxWidth: '800px',
    margin: '32px auto',
  }
}));

export { useStyle };
