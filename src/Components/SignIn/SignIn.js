import React, { Component } from 'react';

class SignIn extends Component
{
	constructor(props) {
		super(props)
		this.state = {
			signInEmail: '',
			signInPass: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value });
	}

	onPassChange = (event) => {
		this.setState({ signInPass: event.target.value });
	}

	onSubmitSignin = () => {
		fetch('https://pacific-scrubland-93417.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				pass: this.state.signInPass
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home')
			}
		})
	}

	render()
	{
		const { onRouteChange } = this.props;
		return(
		<div>
			<article className="br3 ba dark-gray b--black-20 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="tc f2 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba b--black-50 bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba b--black-50 bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPassChange}/>
				      </div>
				    </fieldset>
				    <div className="center">
				      <input onClick={this.onSubmitSignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
				    </div>
				    <div className="lh-copy mt3 center">
				      <p onClick={() => onRouteChange('register')} className="f6 link dim black db shadow-4 w-30 tc pt1 pb1 pointer">Register</p>
				    </div>
				  </div>
				</main>
			</article>
		</div>
		);
	}
	
}

export default SignIn;