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
    minHeight: 'calc(100vh - 88px)',
  },
}));

export { useStyle };
