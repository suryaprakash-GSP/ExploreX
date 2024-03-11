import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search-json.p.rapidapi.com/search";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const getResults = async (type) => {
    // setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '42aa44ef32msh912e8ebe725c2a4p125629jsn0fb28637855d',
        'X-RapidAPI-Host': 'api key'
      },
    });
    const data = await response.json();
    setResults(data);
    // setIsLoading(false);
  };
  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

