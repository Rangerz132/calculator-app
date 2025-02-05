import { createContext } from "react";
import { ThemeType } from "../types/themeType";

export const INITIAL_THEME_CONTEXT: ThemeType = "dark";
export const THEME_CONTEXT = createContext<ThemeType>(INITIAL_THEME_CONTEXT);
