import React, { Component } from 'react';

import '../styles/App.scss';
// import '../styles/debug.css';

class App extends Component {
    render() {
        return (
        <div>
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1>React Online Educational Platform</h1>
                    </div>
                </div>
            </div>
            <section className="section has-background-light">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="notification is-primary">
                                <h1 className="title is-size-4">TItle 1</h1>
                                <p className="is-size-5">One Bulma column</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="notification is-success">
                                <h1 className="title is-size-4">TItle 1</h1>
                                <p className="is-size-5">Two Bulma column</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="notification is-info">
                                <h1 className="title is-size-4">TItle 1</h1>
                                <p className="is-size-5">Three Bulma column</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default App;