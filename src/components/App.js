import React, { Component } from 'react';

import '../styles/App.scss';
// import '../styles/debug.css';

class App extends Component {
    render() {
        return (
        <div class="container">
            <div className="hero has-background-black">
                <div className="hero-body">
                    <div className="container">
                        <h1>React Online Educational Platform</h1>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="notification">
                    One Bulma column
                    </div>
                </div>
                <div class="column">
                    <div class="notification">
                    Two Bulma column
                    </div>
                </div>
                <div class="column">
                    <div class="notification">
                    Three Bulma column
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;