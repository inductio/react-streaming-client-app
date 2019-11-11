import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '311834260435-7vtac6buoepa9vfuac4482fa5onjr7d8.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <button className="ui red google button">
                    <div className="ui mini active inline loader"></div>
                    Loading...
                </button>
            )
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {
    signIn, signOut
})(GoogleAuth);