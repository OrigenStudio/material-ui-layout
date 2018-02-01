import React from 'react';
import Avatar from 'material-ui/Avatar';
import Link from 'gatsby-link'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

const userInfo ={
  bgDawer:'https://michaelraunhome.files.wordpress.com/2015/04/abstract-white-background.jpg',
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


class TextPrimary extends React.Component {
  render(){
    return(
        <Typography  type="body2" gutterBottom >{this.props.textPrimary}</Typography>
    );
  }
}

class TextSecondary extends React.Component {
  render(){
    return(
      <Typography type="body2" style={{marginTop:-10}} gutterBottom>{this.props.textSecondary}</Typography>
    );
  }
}

class AvatarPrimary extends React.Component {
  render(){
    return(
      <Avatar style={{ width:63, height:63, marginRight:10,}} alt="avatarBig" src={this.props.urlAvatar}/>
    );
  }
}

TextPrimary.propTypes = {
  textPrimary: PropTypes.string
};

TextSecondary.propTypes = {
  textSecondary: PropTypes.string
};

AvatarPrimary.propTypes = {
  urlAvatar: PropTypes.string
};



const UserDrawer = (props) =>(
    <div className={props.classes.divContent}>
      <Grid container>
      <Grid item style={{paddingBottom:0}} xs={6} sm={6} md={6} lg={6}>
            <AvatarPrimary urlAvatar="https://www.w3schools.com/w3images/avatar2.png" />
      </Grid>
        <Grid item style={{paddingBottom:0,display:'flex'}} xs={6} sm={6} md={6} lg={6}>
            {avatarsSlice.map(item => <Avatar className={props.classes.avatarSmall}  key={item.id} src={item.href} />)}
        </Grid>
        <Grid item style={{paddingBottom:0}} className={props.classes.subtitleArea} xs={10} sm={10} md={10} lg={10}>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <TextPrimary textPrimary="Person" />
            <TextSecondary textSecondary="example@email.com" />
          </Grid>
          </Grid>
          <Grid item style={{paddingBottom:0,marginTop:29,paddingTop:0}} xs={2} sm={2} md={2} lg={2}>
            <ExpandMoreIcon  />
          </Grid>
      </Grid>
    </div>
)

export default withStyles(styles)(UserDrawer);
