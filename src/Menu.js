import React from 'react'
import fire from './Config/Firebase'

function Menu(props) {

    function logOut() {
        fire.auth().signOut().then(() => {
            console.log('logged out!')
        }).catch((error) => {
            console.log('log out error', error)
        })
    }

    return (
        <div>
            <ul>
                <li>Connect</li>
                <li onClick={logOut}>Log out</li>
                <li onClick={props.navigateToSettings}>User Settings</li>
            </ul>
        </div>
    )
}

export default Menu