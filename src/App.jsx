import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
//import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import About from './components/About.jsx';
import Auto from './components/Auto.jsx';
//import List from './components/List.jsx';

import './App.css';

const history = createBrowserHistory();
const activeLink = {fontWeight: 'bold'};
class App extends Component {
  render() {
    return (
			<BrowserRouter history={history}>
				<div className="App">
					<AppBar position="static">
						<Toolbar>
							<ul style={{display: "flex", justifyContent: "center"}}>
								<li style={{color: "white", marginRight: "20px"}}>
									<Typography variant="title">
										<NavLink exact to="/" activeClassName="active" style={{color: "white"}}>About</NavLink>
									</Typography>
								</li>
								<li>
									<Typography variant="title">
										<NavLink to="/auto" activeClassName="active" style={{color: "white"}}>Auto</NavLink>
									</Typography>
								</li>
							</ul>
						</Toolbar>
					</AppBar>
					
					<Route exact path="/" component={About}></Route>
					<Route path="/auto" component={Auto}></Route>
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
