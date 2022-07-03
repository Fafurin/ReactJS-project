import React, {Suspense, useState} from "react";
import {FC} from "react";
import {BrowserRouter} from "react-router-dom";
import {defaultContext} from "./utils/ThemeContext";
import {ThemeContext} from "./utils/ThemeContext";
import {store} from "./store";
import {Provider} from "react-redux";
import {AppRouter} from "./components/AppRouter/AppRouter";

export const App: FC = () => {
    const [theme, setTheme] = useState(defaultContext.theme);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <Provider store={store}>
                <Suspense fallback={<div>Loading...</div>}>
                    <ThemeContext.Provider value={{theme, toggleTheme}}>
                        <BrowserRouter>
                            <AppRouter/>
                        </BrowserRouter>
                    </ThemeContext.Provider>
                </Suspense>
        </Provider>
    );
};