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

export type FilterType = "all" | "active" | "inactive";

function App() {
    const [theme, setTheme] = useState<ThemeState>({ state: "white", icon: darkThemeIcon });
    const [cardData, setCardData] = useState<DataStructure[]>(dataInfo);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredCards = cardData.filter((item) => {
        if (filter === "all") return true;
        if (filter === "active") return item.isActive;
        if (filter === "inactive") return !item.isActive;
        return true;
    });

    return (
        <div data-theme={theme.state} className="extension__app">
            <ThemeBar theme={theme} setTheme={setTheme} />
            <FilterBar filter={filter} setFilter={setFilter} />

            <div className="grid-container">
                <ExtensionCard filter={filter} cardData={filteredCards} setCardData={setCardData} />
            </div>
        </div>
    );
}

export default App;
