import React, { ChangeEvent } from "react";
import { FilterType } from "../App";
// import dataInfo from "../data/data.json";

// interface DataStructure {
//     logo: string;
//     name: string;
//     description: string;
//     isActive: boolean;
// }

interface FilteredDataProps {
    filter?: string;
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

function FilterBar({ setFilter, filter }: FilteredDataProps) {
    function handleRadioBtn(e: ChangeEvent<HTMLInputElement>) {
        const buttonId = e.currentTarget.id;
        const buttonIcChecked = e.target.checked;

        if (buttonIcChecked && buttonId === "filter__all") {
            setFilter((prevState) => "all");
        }

        if (buttonIcChecked && buttonId === "filter__active") {
            setFilter((prevState) => "active");
        }
        if (buttonIcChecked && buttonId === "filter__inactive") {
            setFilter((prevState) => "inactive");
        }
    }

    return (
        <div className="filter__bar">
            <h1 className="filter__header">Extension List</h1>
            <fieldset className="filter__button-list">
                <div className="filter-button__container">
                    <input
                        onChange={(e) => handleRadioBtn(e)}
                        className="filter__input"
                        type="radio"
                        id="filter__all"
                        name="filter"
                        checked={filter === "all"}
                    />
                    <label className="filter__input-label" htmlFor="filter__all">
                        All
                    </label>
                </div>
                <div className="filter-button__container">
                    <input
                        onChange={(e) => handleRadioBtn(e)}
                        className="filter__input"
                        type="radio"
                        id="filter__active"
                        name="filter"
                    />
                    <label className="filter__input-label" htmlFor="filter__active">
                        Active
                    </label>
                </div>
                <div className="filter-button__container">
                    <input
                        onChange={(e) => handleRadioBtn(e)}
                        className="filter__input"
                        type="radio"
                        id="filter__inactive"
                        name="filter"
                    />
                    <label className="filter__input-label" htmlFor="filter__inactive">
                        Inactive
                    </label>
                </div>
            </fieldset>
        </div>
    );
}

export default FilterBar;
