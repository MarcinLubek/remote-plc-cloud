import React, { Component } from 'react'
import Menu from './Menu'

// import openSocket from 'socket.io-client';
// const socket = openSocket('http://vps652091.ovh.net:3001/');

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actuatorPosition1: 0,
            actuatorPosition2: 0,
            actuatorPosition3: 0,
            actuatorPosition4: 0,
            actuatorPosition5: 0,
            actuatorPosition6: 0,
            actuatorPosition7: 0,
            actuatorPosition8: 0
        }
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.stop = this.stop.bind(this);
    }

    up(event) {
        // socket.emit('up');
    }

    down(event) {
        // socket.emit('down');
    }

    stop(event) {
        // socket.emit('stop');
    }

    render() {
        if (this.props.isAuthorized) {
            return (
                <div>
                    <Menu navigateToSettings={this.props.navigateToSettings} />
                    <div>
                        <div id="actuator1">
                            <div>Position: {this.state.actuatorPosition1}</div>
                            <button onClick={this.up}>Up</button>
                            <button onClick={this.down}>Down</button>
                        </div>
                        <div id="actuator2">
                            <div>Position: {this.state.actuatorPosition2}</div>
                            <button onClick={this.up}>Up</button>
                            <button onClick={this.down}>Down</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div id="actuator3">
                            <div>Position: {this.state.actuatorPosition3}</div>
                            <button onClick={this.up}>Up</button>
                            <button onClick={this.down}>Down</button>
                        </div>
                        <div id="actuator4">
                            <div>Position: {this.state.actuatorPosition4}</div>
                            <button onClick={this.up}>Up</button>
                            <button onClick={this.down}>Down</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div id="actuator5">
                            <div>Position: {this.state.actuatorPosition5}</div>
                            <button onClick={this.up}>Up</button>
                            <button onClick={this.down}>Down</button>
                        </div>
                        <div id="actuator6">
                            <div>Position: {this.state.actuatorPosition6}</div>
                            <button onClick={this.up}>Up</button>
                            <button onClick={this.down}>Down</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div id="actuator5">
                            <div>Position: {this.state.actuatorPosition5}</div>
                            <button onClick={this.up}>Up</button>
                            <button onClick={this.down}>Down</button>
                        </div>
                        <div id="actuator6">
                            <div>Position: {this.state.actuatorPosition6}</div>
                            <button onClick={this.up}>Up</button>
                            <button onClick={this.down}>Down</button>
                        </div>
                    </div>
                </div >

            )
        } else {
            return (
                <div>
                    <Menu navigateToSettings={this.props.navigateToSettings} />
                    <div>You are unauthorized user!</div>
                </div>
            )
        }

    }
}

export default Dashboard