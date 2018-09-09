import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const pl = {paddingLeft: "30px", width: "100%"}

function About(props){
	const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
	
	return (
		<div className="aboutWrap" style={{marginTop: "15px", textAlign: "left"}}>
			<div className="about container">
				<div className="row">
					<Card className={classes.card}>
						<CardContent>
							<Typography style={{textAlign: "center"}} color="primary" variant="title"><h1>Vitaly Front-end Developer</h1></Typography>
						</CardContent>
						<CardContent className="row">
							<Typography className="col-12 col-md-6" varianat="caption">
								<strong>Phones:</strong> 066-975-66-76;  098-605-02-86;  093-494-71-15
							</Typography>
							<Typography className="col-12 col-md-6" varianat="caption">
								<strong>E-mail:</strong> vfrontendman@gamil.com
							</Typography>
							<Typography className="col-12 col-md-6" varianat="caption">
								<strong>Location:</strong> Dnepr, Ukraine
							</Typography>
							<Typography className="col-12 col-md-6" varianat="caption">
								<strong>Portfolio:</strong> https://frontendman25.github.io/mySite/
							</Typography>
						</CardContent>

						<CardContent className="row">
							<Typography className="col-12 col-md-6" varianat="caption"><h3 className="">Education</h3></Typography>
							<p className="item" style={pl}>Alfred Nobel University, Master of Psyhology. I graduated from the university in 2013.</p>
							<Typography className="col-12 col-md-6" varianat="caption"><h3 className="">IT Education</h3></Typography>
							<p className="item" style={pl}>Level Up (computer school). I completed a three-month Design courses;</p>
							<p className="item" style={pl}>STEP Computer Academy. I completed a three-month Front-end courses;</p>
							<p className="item" style={pl}>I’ve been studying web programming for more than two years myself.</p>
							
							<Typography className="col-12 col-md-6" varianat="caption"><h3 className="">Work Experience</h3></Typography>
							<p className="item" style={pl}>I created, ruled the sites and pulled the layout on WordPress in a team with programmers. Wrote several applications in the OOP style. Actively studying and practicing React. At other times for gaining knowledge and experience, creating websites and applications for myself and improving my skills;</p>
							<p className="item" style={pl}>Six months I worked as freelance designer (PS, AI).</p>
							
							<Typography className="col-12 col-md-6" varianat="caption"><h3 className="">Technologies I use</h3></Typography>
							<p className="item" style={pl}>HTML, CSS, SCSS, Bootstrap(3,4), Gulp;</p>
							<p className="item" style={pl}>JS, jQuery, React;</p>
							<p className="item" style={pl}>Familiar with: PHP, WordPress;</p>
							<p className="item" style={pl}>Photoshop, Illustrator.</p>
							
							<Typography className="col-12 col-md-6" varianat="caption"><h3 className="">Hobbies</h3></Typography>
							<p className="item" style={pl}>Playing guitar;</p>
							<p className="item" style={pl}>Improving my English;</p>
							<p className="item" style={pl}>Going to the gym.</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>

	)
}
About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
//export default About;