import React, { Component } from 'react';
import { login, checkToken } from '../functions/Api';
import '../assets/style/Login.scss';

class LoginComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			passwordError: '',
			usernameError: '',
			credentialError: '',
		};
	}

	componentDidMount() {
		if (localStorage.getItem('token')) {
			checkToken(localStorage.getItem('token')).then(() => {
			this.props.history.push('/');
		})
			.catch(() => {
				localStorage.removeItem('token');
			});
		}
	}

	myLogin = (user) => {
		console.log(user);
		login(user).then((res) => {
			console.log(res);
			this.setState({ credentialError: '' });
			localStorage.setItem('token', res.data.token);
			this.props.history.push('/');
		}).catch(() => {
			this.setState({ credentialError: 'Username or Password is incorect!' });
		});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	validate = () => {
		let usernameError = '';
		let passwordError = '';
		this.setState({ credentialError: '' });

		if (!this.state.username) {
			usernameError = 'please write your username';
		}

		if (!this.state.password) {
			passwordError = 'password is requiered';
		}

		if (usernameError || passwordError) {
			this.setState({
				usernameError, passwordError,
			});

			return false;
		}

		this.setState({
			usernameError: '', passwordError: '',
		});

		return true;
	};

	displayError = (name) => {
		const _state = `${name}Error`;

		if (this.state[_state]) {
			return <p className="alert alert-danger">{this.state[_state]}</p>;
		}
	};

	handleForm = (e) => {
		e.preventDefault();

		if (this.validate()) {
			this.myLogin(this.state);
		}
	};

	render() {
		return (
		<div className="login-page">
			{/* {this.checkAuth()}       */}
			<form className="bg-light rounded p-4 pb-5 text-center mx-auto" onSubmit={this.handleForm}>
				<h1 className="fw-light pb-5">Sign in</h1>
				{ this.displayError('credential') }
				{ this.displayError('username') }
				<div className="mb-3">
					<input className="p-2" onChange={this.handleChange} type="text" name="username" />
				</div>
				{ this.displayError('password') }
				<div className="mb-3">
					<input className="mb-3 p-2" onChange={this.handleChange} type="password" name="password" />
				</div>
				<input
					className="py-2 text-light
					bg-light-blue border-0
					fs-5 fw-lighter auth-btn
					rounded"
					type="submit"
					value="Login"
				/>
			</form>
		</div>
		);
	}
}

export default LoginComponent;
