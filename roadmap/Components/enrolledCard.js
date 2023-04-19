import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Button, Box, Typography } from '@material-ui/core';
import { Share, Favorite } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '15px',
    height: '100%',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default function EnrolledCard() {
    const classes = useStyles();
    
    return <Card className={classes.card}>
          <CardMedia image="https://source.unsplash.com/random" style={{ height: 0, paddingTop: '56.25%' }} />
          <CardContent>
            <Typography fontWeight='bold' variant='h5'>Card 1</Typography>
            <Typography variant='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam et ligula bibendum placerat. Praesent vel dignissim nisl. Nullam vitae justo quis risus faucibus tempor. Cras at massa id lectus dignissim tincidunt. Fusce eget interdum arcu.</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableSpacing>
            <IconButton aria-label="add to favorites" size="small">
              <Favorite fontSize="small" />
            </IconButton>
            <IconButton aria-label="share" size="small">
              <Share fontSize="small" />
            </IconButton>
          </CardActions>
           <Box className={classes.cardFooter} style={{  display: 'flex', justifyContent: 'center' }}>
  <Button variant="contained" style={{width: "400px", backgroundColor:'white'}}>
    Learn More
  </Button>
</Box>
        </Card>
}