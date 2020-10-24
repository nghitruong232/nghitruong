import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link, graphql } from "gatsby"


const useStyles = makeStyles({
  root: {
    width: 200,
    // minWidth: 180,
    // maxWidth: 180,
    marginBottom: '20px',
    marginRight: '1px',
  },
  media: {
    height: 140,
  },
  link: {
    boxShadow: 'none',
  }
});

export default function MediaCard({node}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/videos/${node.videoId}`} className={classes.link}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={node.thumbnail.url}
          title={node.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="h2">
            {node.title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {node.description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
      </Link>
    </Card>
  );
}