import React, { Component } from 'react'
import Menu from './Menu'
import ConnectionStatus from './ConnectionStatus'
import 'material-design-icons/iconfont/material-icons.css'

// import openSocket from 'socket.io-client';
// const socket = openSocket('http://vps652091.ovh.net:3001/');

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            connected: false,
            actuatorPosition1: 0,
            actuatorPosition2: 0,
            actuatorPosition3: 0,
            actuatorPosition4: 0,
            actuatorPosition5: 0,
            actuatorPosition6: 0,
            actuatorPosition7: 0,
            actuatorPosition8: 0
        }
        this.connect = this.connect.bind(this)
        this.disconnect = this.disconnect.bind(this)
        this.up = this.up.bind(this)
        this.down = this.down.bind(this)
        this.stop = this.stop.bind(this)
    }

    connect() {
        this.props.loading()
        this.setState({ connected: true })
        this.props.loadingStop()
    }

    disconnect() {
        this.props.loading()
        this.setState({ connected: false })
        this.props.loadingStop()
    }

    up(event) {
        console.log(event.target.parentNode.parentNode.id, ' is going up!')
        // socket.emit('up');
    }

    down(event) {
        console.log(event.target.parentNode.parentNode.id, ' is going down!')
        // socket.emit('down');
    }

    stop(event) {
        console.log(event.target.parentNode.parentNode.id, ' stopped!')
        // socket.emit('stop');
    }

    render() {
        if (this.props.isAuthorized) {
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

                    <div>Head</div>
                    <div className="actuatorSection">
                        <div id="actuator1" className="actuator">
                            <div className="actuatorPosition">{this.state.actuatorPosition1}</div>
                            <div className="actuatorControl">
                                <i className="material-icons" onMouseDown={this.up} onMouseUp={this.stop}>expand_less</i>
                                <i className="material-icons" onMouseDown={this.down}>expand_more</i>
                            </div>
                        </div>
                        <div id="actuator2" className="actuator">
                            <div className="actuatorPosition">{this.state.actuatorPosition2}</div>
                            <div className="actuatorControl">
                                <i className="material-icons" onClick={this.up}>expand_less</i>
                                <i className="material-icons" onClick={this.down}>expand_more</i>
                            </div>
                        </div>
                    </div>
                    <div>Shoulders</div>
                    <div className="actuatorSection">
                        <div id="actuator3" className="actuator">
                            <div className="actuatorPosition">{this.state.actuatorPosition3}</div>
                            <div className="actuatorControl">
                                <i className="material-icons" onClick={this.up}>expand_less</i>
                                <i className="material-icons" onClick={this.down}>expand_more</i>
                            </div>
                        </div>
                        <div id="actuator4" className="actuator">
                            <div className="actuatorPosition">{this.state.actuatorPosition4}</div>
                            <div className="actuatorControl">
                                <i className="material-icons" onClick={this.up}>expand_less</i>
                                <i className="material-icons" onClick={this.down}>expand_more</i>
                            </div>
                        </div>
                    </div>
                    <div>Hips</div>
                    <div className="actuatorSection">
                        <div id="actuator5" className="actuator">
                            <div className="actuatorPosition">{this.state.actuatorPosition5}</div>
                            <div className="actuatorControl">
                                <i className="material-icons" onClick={this.up}>expand_less</i>
                                <i className="material-icons" onClick={this.down}>expand_more</i>
                            </div>
                        </div>
                        <div id="actuator6" className="actuator">
                            <div className="actuatorPosition">{this.state.actuatorPosition6}</div>
                            <div className="actuatorControl">
                                <i className="material-icons" onClick={this.up}>expand_less</i>
                                <i className="material-icons" onClick={this.down}>expand_more</i>
                            </div>
                        </div>
                    </div>
                    <div>Thighs</div>
                    <div className="actuatorSection">
                        <div id="actuator7" className="actuator">
                            <div className="actuatorPosition">{this.state.actuatorPosition7}</div>
                            <div className="actuatorControl">
                                <i className="material-icons" onClick={this.up}>expand_less</i>
                                <i className="material-icons" onClick={this.down}>expand_more</i>
                            </div>
                        </div>
                        <div id="actuator8" className="actuator">
                            <div className="actuatorPosition">{this.state.actuatorPosition8}</div>
                            <div className="actuatorControl">
                                <i className="material-icons" onClick={this.up}>expand_less</i>
                                <i className="material-icons" onClick={this.down}>expand_more</i>
                            </div>
                        </div>
                    </div>
                </div >

            )
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

            )
        }

    }
}

export default Dashboard