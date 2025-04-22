import "./App.css";

function App() {
    return (
        <div className="extension__app">
            <div className="top__bar">
                <div className="logo__section">
                    <img src="./src/assets/images/main-logo.svg" alt="" />
                </div>
                <button className="button theme__button">
                    <img src="./src/assets/images/icon-moon.svg" alt="" />
                </button>
            </div>

            <div className="filter__bar">
                <h1 className="filter__header">Extension List</h1>
                <div className="filter__button-list">
                    <button className="button filter__button">All</button>
                    <button className="button filter__button">Active</button>
                    <button className="button filter__button">Inactive</button>
                </div>
            </div>

            <article className="extension__card">
                <section className="card__info">
                    <img
                        src="./src/assets/images/logo-console-plus.svg"
                        alt=""
                        className="card__logo"
                    />
                    <div className="card__description-group">
                        <h3 className="card__name">DevLens</h3>

                        <p className="card__description">
                            Quickly inspect the page layouts and visualize element boundaries.
                        </p>
                    </div>
                </section>
                <div className="card__menu">
                    <button className="button card__button">Remove</button>
                    <div className="button__toggle">
                        <input type="checkbox" id="check" />
                    </div>
                </div>
            </article>
            <article className="extension__card">
                <section className="card__info">
                    <img
                        src="./src/assets/images/logo-console-plus.svg"
                        alt=""
                        className="card__logo"
                    />
                    <div className="card__description-group">
                        <h3 className="card__name">DevLens</h3>

                        <p className="card__description">
                            Quickly inspect the page layouts and visualize element boundaries.
                        </p>
                    </div>
                </section>
                <div className="card__menu">
                    <button className="button card__button">Remove</button>
                    <div className="toggle__container">
                        <label htmlFor="toggle__button" className="toggle__label"></label>
                        <input className="button__toggle" type="checkbox" id="toggle__button" />
                    </div>
                </div>
            </article>
            <article className="extension__card">
                <section className="card__info">
                    <img
                        src="./src/assets/images/logo-console-plus.svg"
                        alt=""
                        className="card__logo"
                    />
                    <div className="card__description-group">
                        <h3 className="card__name">DevLens</h3>

                        <p className="card__description">
                            Quickly inspect the page layouts and visualize element boundaries.
                        </p>
                    </div>
                </section>
                <div className="card__menu">
                    <button className="button card__button">Remove</button>

                    <div className="button__toggle">
                        <input type="checkbox" id="check" />
                    </div>
                </div>
            </article>
        </div>
    );
}

export default App;
