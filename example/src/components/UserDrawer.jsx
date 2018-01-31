import React from 'react';
import Avatar from 'material-ui/Avatar';
import Link from 'gatsby-link'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import {render} from 'react-dom';

const userInfo ={
  bgDawer:'https://michaelraunhome.files.wordpress.com/2015/04/abstract-white-background.jpg',
  text1:'Person',
  text2:'person@email.com',
  avatarBigImg:'https://www.w3schools.com/howto/img_avatar.png',
}

const styles =   {
  divContent:{
    backgroundImage: `url(${userInfo.bgDawer})`,
    padding:15,
    paddingBottom:8,
    fontFamily: 'Roboto',
  },
  subtitleArea:{
    height:56,
  },
  avatarBig:{
    width:63,
    height:63,
  },
  avatarSmall:{
    width:40,
    height:40,
    marginRight:10,
  },

}

const avatars = [
  {
    href: 'https://www.w3schools.com/howto/img_avatar2.png',
    id: '1',
  },
  {
    href: 'https://www.w3schools.com/w3images/avatar6.png',
    id: '2',
  },
];

const avatarsSlice = avatars.slice(0,2);




const UserDrawer = ({classes}) =>(
    <div className={classes.divContent}>
      <Grid container>
      <Grid item style={{paddingBottom:0}} xs={6} sm={6} md={6} lg={6}>
          <Avatar className={classes.avatarBig} alt="avatarBig" src={userInfo.avatarBigImg}/>
      </Grid>
        <Grid item style={{paddingBottom:0,display:'flex'}} xs={6} sm={6} md={6} lg={6}>
            {avatarsSlice.map(item => <Avatar className={classes.avatarSmall}  key={item.id} src={item.href} />)}
        </Grid>
        <Grid item style={{paddingBottom:0}} className={classes.subtitleArea} xs={10} sm={10} md={10} lg={10}>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Typography  type="body2" gutterBottom >{userInfo.text1}</Typography>
            <Typography type="body2" style={{marginTop:-10}} gutterBottom>{userInfo.text2}</Typography>
          </Grid>
          </Grid>
          <Grid item style={{paddingBottom:0,marginTop:29,paddingTop:0}} xs={2} sm={2} md={2} lg={2}>
            <ExpandMoreIcon  />
          </Grid>
      </Grid>
    </div>
)

export default withStyles(styles)(UserDrawer);
