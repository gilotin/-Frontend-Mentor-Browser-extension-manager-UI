import "./App.css";

function App() {
    return (
        <>
            <div className="top__bar">
                <div className="logo__section">
                    <img src="./public/assets/images/logo.svg" alt="" />
                </div>
                <button>
                    <img src="./public/assets/images/icon-sun.svg" alt="" />
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
                        src="./public/assets/images/logo-console-plus"
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
                    <button className="button__toggle card__button "></button>
                </div>
            </article>
        </>
    );
}

export default App;
