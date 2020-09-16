import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    margin: '0 auto',
    padding: '16px 0',
  },
  image: {
    maxWidth: '32px',
  },
  strong: {
    fontWeight: '700',
    margin: '0 8px',
  }
}));

export { useStyles };
