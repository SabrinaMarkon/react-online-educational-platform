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
                                            <i className="fab fa-lg fa-css3-alt"></i>
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
                                            <i className="fab fa-lg fa-align-justify"></i>
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
                                            <i className="fas fa-lg fa-shield-alt"></i>
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

                {/* start 3 white colums 2 rows */}
                <section className="section">
                    <div className="container">
                        <div className="columns is-multiline">

                            <div className="column is-one-third">
                                <article className="media notification has-background-white">
                                    <figure className="media-left">
                                        <span className="icon has-text-danger">
                                            <i className="fab fa-lg fa-wpforms"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Title 1</h1>
                                            <p className="subtitle is-size-5">Box 1: Lorem ipsum dolor sit amet, bonorum volumus ex mea, at tale graecis evertitur duo, ne suas splendide signiferumque sed. Eu laoreet blandit scaevola est. No est nemore vituperata, et numquam mentitum pri. Pri choro ridens utroque et, has volumus recteque moderatius ei.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div className="column is-one-third">
                                <article className="media notification has-background-white">
                                    <figure className="media-left">
                                        <span className="icon has-text-warning">
                                            <i className="fas fa-lg fa-columns"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Title 2</h1>
                                            <p className="subtitle is-size-5">Box 2: Solum populo delectus ut vis. Cu fuisset necessitatibus sed. Eripuit nominavi invenire mel te. Congue scriptorem reprehendunt mel cu. Per no sale ipsum tollit. Has mollis alterum adipiscing ne, no dicant oportere ius. In eos facer ponderum scripserit, sea an denique nominati, ea vix modus decore scribentur.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div className="column is-one-third">
                                <article className="media notification has-background-white">
                                    <figure className="media-left">
                                        <span className="icon has-text-success">
                                            <i className="fas fa-lg fa-cubes"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Title 3</h1>
                                            <p className="subtitle is-size-5">Box 3: Dictas intellegam ex est. No assum definiebas est, id laudem blandit scriptorem mel. No usu option instructior. Inani disputationi vix no. Ei stet lobortis antiopam pri.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div className="column is-one-third">
                                <article className="media notification has-background-white">
                                    <figure className="media-left">
                                        <span className="icon has-text-info">
                                            <i className="fas fa-lg fa-cogs"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Title 4</h1>
                                            <p className="subtitle is-size-5">Box 4: Modo admodum definiebas ad nam, sea aliquip eleifend no, ornatus convenire voluptatum mel an. Decore intellegam sit cu, nam ad oportere sententiae dissentiunt. Vix at dicit euismod urbanitas, affert ceteros omittantur eam cu. Mucius luptatum complectitur vix ex, has an tale officiis. Sea cu clita legere, vix ei accusam dolores sensibus. Mea graeci tacimates ut.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div className="column is-one-third">
                                <article className="media notification has-background-white">
                                    <figure className="media-left">
                                        <span className="icon has-text-grey">
                                            <i className="fas fa-lg fa-warehouse"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Title 5</h1>
                                            <p className="subtitle is-size-5">Box 5: Veri salutatus adversarium mei eu, eum docendi periculis ei. Mel putent legendos eu, an nulla voluptatum mea, stet labore deserunt pri te. Ius ea audire ullamcorper, ei nam autem debitis. Nonumy deleniti ex pri, ex veniam eligendi eam.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div className="column is-one-third">
                                <article className="media notification has-background-white">
                                    <figure className="media-left">
                                        <span className="icon has-text-info">
                                            <i className="fas fa-lg fa-cube"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Title 6</h1>
                                            <p className="subtitle is-size-5">Box 6: Inermis contentiones nam eu, in primis iudicabit sed. Sea an agam liber viris. Ex iisque commune vel, at altera facilis sit, usu appetere adipiscing no. Ex quodsi volumus pri, et sed ipsum oporteat eloquentiam. Constituto definitiones definitionem vim at.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                        </div>
                    </div>
                </section >
                {/* end 3 white colums 2 rows */}

            </div >
        );
    }
}

export default App;