import { useState } from "react";
import "./App.css";
import darkThemeIcon from "../src/assets//images/icon-moon.svg";
import ThemeBar from "./components/ThemeBar";
import FilterBar from "./components/FilterBar";
import ExtensionCard from "./components/ExtensionCard";
import dataInfo from "../src/data/data.json";

interface DataStructure {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}

interface ThemeState {
    state: "white" | "dark";
    icon: string;
}

function App() {
    const [theme, setTheme] = useState<ThemeState>({ state: "white", icon: darkThemeIcon });
    const [cardData, setCardData] = useState<DataStructure[]>(dataInfo);

    return (
        <div data-theme={theme.state} className="extension__app">
            <ThemeBar theme={theme} setTheme={setTheme} />
            <FilterBar />

            <div className="grid-container">
                <ExtensionCard cardData={cardData} setCardData={setCardData} />
            </div>
        </div>
    );
}

export default App;
