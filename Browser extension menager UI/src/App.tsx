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
                    <div className="filter-button__container">
                        <input className="filter__input" type="checkbox" id="filter__all" />
                        <label className="filter__input-label" htmlFor="filter__all">
                            All
                        </label>
                    </div>
                    <div className="filter-button__container">
                        <input className="filter__input" type="checkbox" id="filter__active" />
                        <label className="filter__input-label" htmlFor="filter__active">
                            Active
                        </label>
                    </div>
                    <div className="filter-button__container">
                        <input className="filter__input" type="checkbox" id="filter__inactive" />
                        <label className="filter__input-label" htmlFor="filter__inactive">
                            Inactive
                        </label>
                    </div>
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
                    <div className="toggle__container">
                        <input className="button__toggle" type="checkbox" id="toggle__button1" />
                        <label htmlFor="toggle__button1" className="toggle__label"></label>
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
                        <input className="button__toggle" type="checkbox" id="toggle__button2" />
                        <label htmlFor="toggle__button2" className="toggle__label"></label>
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
                        <input
                            className="button__toggle"
                            type="checkbox"
                            id="toggle__button3       "
                        />
                        <label htmlFor="toggle__button3       " className="toggle__label"></label>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default App;
