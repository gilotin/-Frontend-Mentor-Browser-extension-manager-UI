import { useCallback } from "react";

interface DataStructure {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}

interface cardProps {
    cardData: DataStructure[];
    setCardData: React.Dispatch<React.SetStateAction<DataStructure[]>>;
}

function ExtensionCard({ cardData, setCardData }: cardProps) {
    const handleActiveState = useCallback(
        // Testing useCallBack to see how it works.
        (index: number) => {
            setCardData((prevState) =>
                prevState.map((item, i) =>
                    i === index ? { ...item, isActive: !item.isActive } : item
                )
            );
        },
        [setCardData]
    );

    const removeButton = useCallback(
        // Testing useCallBack to see how it works.
        (index: number) => {
            setCardData((prevState) => prevState.filter((_, i) => i !== index));
        },
        [setCardData]
    );

    const card = cardData.map((element: DataStructure, index: number) => (
        <article key={element.name} className="extension__card">
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
