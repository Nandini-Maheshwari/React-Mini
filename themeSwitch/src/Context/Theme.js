import { createContext, useContext } from "react";

// miniContext waale method me koi default value pass ni kr rhe the
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {}, 
  lightTheme: () => {},
  // ^ properties <- default values to createContext function
});

export const ThemeProvider = ThemeContext.Provider

// custom hook
export default function useTheme() {
  return useContext(ThemeContext) 
  // here we're exporting access of all functions/variables and the provider in one go
}

// useContext is a React hook that allows functional components to consume and
// access the values (such as state, functions, or objects) from a React Context


// provider is required for wrap up, hence imported in functional component(here App.jsx)
// useTheme is required for accessing context, hence imported in relevant components