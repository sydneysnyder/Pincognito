import {Link} from 'react-router'
import {connect} from 'react-redux'
import { logOff, fetchUser } from '../../actions/index'
import { bindActionCreators } from 'redux'
import React from 'react'

/*
 *	Navbar is bound to user state from the store, and dispatched actions.
 *	if a user is logged in, he/she will have a username. This state check determins
 *	which buttons to show in the header. (signup/login or logoff)
 */

const NavBar = ({user, actions}) => {
	return(
		<div className="container">
		<div className="nav-left">
			<Link to="/"><img height="55px" src="https://firebasestorage.googleapis.com/v0/b/ideaboard-f10ef.appspot.com/o/pincognito_w.png?alt=media&token=9a73dc91-e40d-47c3-953b-c7c569c19918"/></Link>
		</div>
			<nav className="nav-right">
				{user.username == null ? 
					(<ul id="menu">
						<li><Link to="/signup" activeClassName="active" className="activeNav">Signup</Link></li>
						<li><Link to="/login" activeClassName="active" className="activeNav">Login</Link></li>
					</ul>)
					:
					(<ul id="menu">
						<li><Link to="/profile" activeClassName="active" className="activeNav">Profile</Link></li>
						<li><Link to="/" onClick={actions.logOff} id="logout">Logout</Link></li>
					</ul>)
				}
			</nav>
		</div>
	)
}


function mapStateToProps(state){
    return {
    	user: {
    		username: state.user.username
        }
    }
}

function mapDispatchToProps(dispatch) {
  	return {actions: bindActionCreators({logOff, fetchUser}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);