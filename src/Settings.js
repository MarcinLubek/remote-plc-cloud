import React, { Component } from 'react';
import fire from './Config/Firebase';

import Menu from './Menu';

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'main',
            deleteConfirmed: false,
            newPassword: '',
            newPasswordRetyped: '',
        }
        this.changePasswordMode = this.changePasswordMode.bind(this);
        this.deleteAccountMode = this.deleteAccountMode.bind(this);
        this.backToSettings = this.backToSettings.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changePasswordMode() {
        this.setState({
            mode: 'changePassword'
        });
    }

    deleteAccountMode() {
        this.setState({
            mode: 'deleteAccount'
        });
    }

    backToSettings() {
        this.setState({
            mode: 'main'
        });
    }

    changePassword() {
        if (this.state.newPassword === '') {
            alert('Please insert new password');
        } else if (this.state.newPasswordRetyped === '') {
            alert('Please retype your new password');
        } else if (this.state.newPassword !== this.state.newPasswordRetyped) {
            alert('Passwords does not match');
        } else {
            this.props.loading();
            let self = this;
            let user = fire.auth().currentUser;
            user.updatePassword(this.state.newPassword).then(function () {
                alert('Password changed!');
                self.props.loadingStop();
                self.backToSettings();
            }).catch(function (error) {
                alert(error.message);
                self.props.loadingStop();
            });
        }
    }

    deleteAccount() {
        this.props.loading();
        let user = fire.auth().currentUser;
        user.delete().then(function () {
            alert('User deleted');
        }).catch(function (error) {
            alert(error.message);
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        switch (this.state.mode) {
            default:
                return (
                    <div className="container">
                        <div className="bufferContainer">
                            <div id="menuContainerId" className="menuContainer">
                                <Menu
                                    navigateToSettings={this.props.navigateToSettings}
                                    navigateToDashboard={this.props.navigateToDashboard} />
                            </div>
                        </div>
                        <button onClick={this.changePasswordMode}>Change Password</button>
                        <button onClick={this.deleteAccountMode}> Delete account</button>
                    </div >
                );
            case 'changePassword':
                return (
                    <div className="container">
                        <input name="newPassword" type="password" placeholder="New password" value={this.state.newPassword} onChange={this.handleChange} />
                        <input name="newPasswordRetyped" type="password" placeholder="Retype new password" value={this.state.newPasswordRetyped} onChange={this.handleChange} />
                        <button onClick={this.changePassword}>Change Password</button>
                        <button onClick={this.backToSettings}>Back</button>
                    </div >
                );
            case 'deleteAccount':
                return (
                    <div className="container">
                        <div>Are you sure?</div>
                        <button onClick={this.deleteAccount}>Delete account</button>
                        <button onClick={this.backToSettings}>Back</button>
                    </div >
                );
        }
    }

}

export default Settings;
