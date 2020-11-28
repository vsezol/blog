import { Avatar, makeStyles, useTheme, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles({
  large: (props: any) => ({
    width: props.spacing(8),
    height: props.spacing(8),
  }),
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
  },
  description: {
    marginLeft: '10px',
  }
})

const Author = () => {
  const classes = useStyles(useTheme());
  return (
    <div className={classes.wrapper}>
      <Avatar
        alt="Vsevolod Zolotov"
        src="https://avatars0.githubusercontent.com/u/50067638?s=460&u=01093ff055a9148f9e8551343262e83d0b3a6077&v=4"
        className={classes.large}
      />
      <div className={classes.description}>
        <Typography variant="h6" component="h2">
          Personal blog by <Link href="https://vk.com/vsezol" variant="subtitle1">Vsevolod Zolotov</Link>.
        </Typography>
        <Typography variant="h6">
          Life developer.
        </Typography>
      </div>
    </div>
  );
};

export default Author;
