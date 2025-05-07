function FilterBar() {
    return (
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
    );
}

export default FilterBar;
