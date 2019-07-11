import React, { Component } from 'react';
import Menu from './Menu';
import Control from './Control';
import ConnectionStatus from './ConnectionStatus';
import 'material-design-icons/iconfont/material-icons.css';

import openSocket from 'socket.io-client';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            connected: false,
            socket: null
        }
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
    }

    connect() {
        this.props.loading();
        let socket = openSocket('http://vps699582.ovh.net:3003');
        socket.io.on('connect_error', function (err) {
            // handle server error here
            console.log('Error connecting to server');
        });

        this.setState({
            connected: true,
            socket: socket
        });
        this.props.loadingStop();
    }

    disconnect() {
        this.props.loading();
        this.setState({
            connected: false,
            socket: null
        });
        this.props.loadingStop();
    }

    render() {
        if (this.props.isAuthorized) {
            if (this.state.connected) {
                return (
                    <div className="container">
                        <div className="bufferContainer">
                            <ConnectionStatus
                                connectionState={this.state.connected}
                                connect={this.connect}
                                disconnect={this.disconnect} />
                            <div id="menuContainerId" className="menuContainer">
                                <Menu
                                    navigateToSettings={this.props.navigateToSettings}
                                    navigateToDashboard={this.props.navigateToDashboard} />
                            </div>
                        </div>
                        <Control socket={this.state.socket} />
                    </div >
                );
            } else {
                return (
                    <div className="container">
                        <div className="bufferContainer">
                            <ConnectionStatus
                                connectionState={this.state.connected}
                                connect={this.connect}
                                disconnect={this.disconnect} />
                            <div id="menuContainerId" className="menuContainer">
                                <Menu
                                    navigateToSettings={this.props.navigateToSettings}
                                    navigateToDashboard={this.props.navigateToDashboard} />
                            </div>
                        </div>
                        <div className="shaded">
                            <Control socket={this.state.socket} />
                        </div>
                    </div >
                );
            }
        } else {
            return (
                <div className="container">
                    <div className="bufferContainer">
                        <div id="menuContainerId" className="menuContainer">
                            <Menu
                                navigateToSettings={this.props.navigateToSettings}
                                navigateToDashboard={this.props.navigateToDashboard} />
                        </div>
                    </div>
                    <div>You are unauthorized user</div>
                </div>
            );
        }

    }
}

export default Dashboard;