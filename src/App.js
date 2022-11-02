import React from 'react';
import './App.css';
import logo from './logo.svg';
import {Amplify,Auth} from 'aws-amplify';
import {
	AmplifyAuthenticator,
	AmplifyContainer,
	AmplifySignOut,
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => {
	const [authState, setAuthState] = React.useState();
	const [user, setUser] = React.useState();

	React.useEffect(() => {
		
		return onAuthUIStateChange((nextAuthState, authData) => {
			setAuthState(nextAuthState);
			setUser(authData);
		});
	}, []);

	const signIn = async ()=>{
		const res = await Auth.signIn("oh","1234");
		console.log(res);
	}

	return authState === AuthState.SignedIn && user ? (
		<div className="App">
			<header className="App-header">
				<div>Hello, {user.username}</div>
				<img src={logo} className="App-logo" alt="logo" />
				<AmplifySignOut />
			</header>
		</div>
	) : (
		// <button onClick={signIn}></button>
		<AmplifyContainer>
			<AmplifyAuthenticator />
		</AmplifyContainer>
	);
};

export default App;
