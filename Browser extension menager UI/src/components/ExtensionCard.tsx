import { useCallback } from "react";
import { FilterType } from "../App";

interface DataStructure {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}

interface cardProps {
    cardData: DataStructure[];
    filter: FilterType;
    setCardData: React.Dispatch<React.SetStateAction<DataStructure[]>>;
}

function ExtensionCard({ cardData, filter, setCardData }: cardProps) {
    const handleActiveState = useCallback(
        (name: string) => {
            setCardData((prevState) =>
                prevState.map((item) =>
                    item.name === name ? { ...item, isActive: !item.isActive } : item
                )
            );
        },
        [setCardData]
    );

    const removeButton = useCallback(
        (name: string) => {
            setCardData((prevState) => prevState.filter((item) => item.name !== name));
        },
        [setCardData]
    );

    const card = cardData.map((element: DataStructure) => (
        <article key={element.name} className="extension__card">
            <section className="card__info">
                <img src={element.logo} alt="" className="card__logo" />
                <div className="card__description-group">
                    <h3 className="card__name">{element.name}</h3>
                    <p className="card__paragraph">{element.description}</p>
                </div>
            </section>
            <div className="card__menu">
                <button onClick={() => removeButton(element.name)} className="button card__button">
                    Remove
                </button>
                <div className="toggle__container">
                    <input
                        checked={element.isActive}
                        onChange={() => handleActiveState(element.name)}
                        className="button__toggle"
                        type="checkbox"
                        id={`toggle__button-${element.name}`}
                    />
                    <label
                        htmlFor={`toggle__button-${element.name}`}
                        className="toggle__label"
                    ></label>
                </div>
            </div>
        </article>
    ));

    return card;
}
export default ExtensionCard;
