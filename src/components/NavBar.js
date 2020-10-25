import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from "gatsby"
import Button from './ui/Button';
import {styles, colors} from './ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    //fontSize: '14px',
  },
  link: {
    boxShadow: 'none',
    color: 'white',
    fontSize: '16px',
  },
  container: {
    marginTop: '0px',
    //border: '1px solid gray',
    height: '40px',
    display: 'grid',
    gridTemplateColumns: '8fr 2fr',
    justifyContent: 'center',
  },
  left: {
    marginTop: '4px',
  },
  right: {
    //backgroundColor: '#ffeeee',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  youtube: {
    height: '20px',
    marginTop: '1px',
    //border: '1px solid blue'
  },
  facebook: {
    height: '30px',
    //border: '1px solid red'
  },
  anchor: {
    boxShadow: 'none',
  }
}));

const headButton = pathname => ({
  backgroundColor: window.location.pathname === pathname 
        || window.location.pathname === `${pathname}/` 
      ? colors.pinkRedDark 
      : colors.pinkRed, 
  link: {
    //color: 'white'
  }
})


export default function NavBar({style}) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={style} >
      <AppBar position="static" style={{background: colors.appBarBackground}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <a href='/' className={classes.link}>Tin tức, Bình luận và Diễn đàn</a>
          </Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={()=>{}}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        </Toolbar>
      </AppBar>

      <div className={classes.container}>
        <div className={classes.left}>
          <Button label='Bình luận' href="/" style={headButton('/')} />
          <Button label='Videos' href="/videos" style={headButton('/videos')} />
          {/* <Button label='Tin tức' style={headButton} />
          <Button label='Thăm dò' style={headButton} /> */}
          <Button label='Chuyên đề' href="/tags" style={headButton('/tags')} />

        </div>
        <div className={classes.right}>
          <a href='https://www.facebook.com/NghiTruongcom-114028710488039/' className={classes.anchor}><img src='/facebook_logo.png' className={classes.facebook} /></a>
          <a href='https://www.youtube.com/channel/UCYN2oFv5nFNtgazsBvlwvmw' className={classes.anchor}><img src='/youtube_logo.png' className={classes.youtube} /></a>
        </div>
      </div>

    </div>
  );
}