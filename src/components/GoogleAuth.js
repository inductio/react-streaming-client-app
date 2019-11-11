import React, {Component} from 'react';

class GoogleAuth extends Component {
    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '196826456651-311834260435-7vtac6buoepa9vfuac4482fa5onjr7d8.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return (
                <button className="ui red google button">
                    <div className="ui mini active inline loader"></div>
                    Loading...
                </button>
            )
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut}
                    className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn}
                    className="ui red google button">
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return this.renderAuthButton();
    }
}

export default GoogleAuth;