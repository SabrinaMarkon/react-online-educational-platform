import React, { Component } from 'react';

import '../styles/App.scss';
// import '../styles/debug.css';

class App extends Component {
    render() {
        return (
            <div>

                {/* start hero section */}
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1>React Online Educational Platform</h1>
                        </div>
                    </div>
                </section>
                {/*end hero section */}

                {/* start 3 colored columns section */}
                <section className="section has-background-light">
                    <div className="container">
                        <div className="columns">

                            <div className="column">
                                <article className="media notification is-primary">
                                    <figure className="media-left">
                                        <span className="icon is-medium">
                                            <i className="fab fa-2x fa-css3-alt"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">TItle 1</h1>
                                            <p className="is-size-5">One Bulma column</p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div className="column">
                                <article className="media notification is-success">
                                    <figure className="media-left">
                                        <span className="icon is-medium">
                                            <i className="fab fa-2x fa-align-justify"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">TItle 2</h1>
                                            <p className="is-size-5">Two Bulma column</p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div className="column">
                                <article className="media notification is-info">
                                    <figure className="media-left">
                                        <span className="icon is-medium">
                                            <i className="fas fa-2x fa-shield-alt"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">TItle 3</h1>
                                            <p className="is-size-5">Three Bulma column</p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                        </div>
                    </div>
                </section >
                {/* end 3 colored colums section */}



            </div >
        );
    }
}

export default App;