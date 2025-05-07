import { useState } from "react";
import dataInfo from "../data/data.json";

interface DataStructure {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}

function ExtensionCard() {
    const [cardData, setCardData] = useState<DataStructure[]>(dataInfo);

    function handleActiveState(index: number) {
        setCardData((prevState) =>
            prevState.map((item, i) => (i === index ? { ...item, isActive: !item.isActive } : item))
        );
    }

    function removeButton(index: number) {
        setCardData((prevState) => prevState.filter((_, i) => i !== index));
    }

    const card = cardData.map((element: DataStructure, index: number) => (
        <article key={index} className="extension__card">
            <section className="card__info">
                <img src={element.logo} alt="" className="card__logo" />
                <div className="card__description-group">
                    <h3 className="card__name">{element.name}</h3>
                    <p className="card__paragraph">{element.description}</p>
                </div>
            </section>
            <div className="card__menu">
                <button onClick={() => removeButton(index)} className="button card__button">
                    Remove
                </button>
                <div className="toggle__container">
                    <input
                        checked={element.isActive}
                        onChange={() => handleActiveState(index)}
                        className="button__toggle"
                        type="checkbox"
                        id={`toggle__button-${index}`}
                    />
                    <label htmlFor={`toggle__button-${index}`} className="toggle__label"></label>
                </div>
            </div>
        </article>
    ));

    return card;
}

export default ExtensionCard;
