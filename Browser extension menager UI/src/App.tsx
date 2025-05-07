import { useState } from "react";
import "./App.css";
import darkThemeIcon from "../src/assets//images/icon-moon.svg";
import ThemeBar from "./components/ThemeBar";
import FilterBar from "./components/FilterBar";
import ExtensionCard from "./components/ExtensionCard";

interface ThemeState {
    state: "white" | "dark";
    icon: string;
}
function App() {
    const [theme, setTheme] = useState<ThemeState>({ state: "white", icon: darkThemeIcon });

    return (
        <div data-theme={theme.state} className="extension__app">
            <ThemeBar theme={theme} setTheme={setTheme} />
            <FilterBar />

            <div className="grid-container">
                <ExtensionCard />
            </div>
        </div>
    );
}

export default App;
