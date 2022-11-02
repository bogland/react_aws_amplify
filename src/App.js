import React from 'react';
import './App.css';
import logo from './logo.svg';
import { Amplify, Auth } from 'aws-amplify';
import {
	AmplifyAuthenticator,
	AmplifyContainer,
	Authenticator,
	useAuthenticator
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import Login from "./Login";
Amplify.configure(awsconfig);

const App = () => {
	return (
		<Authenticator.Provider>
			<Login></Login>
		</Authenticator.Provider>
	)
};

export default App;
