import { createContext, useRef, useState } from "react";
import data from "../data/data";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [eventData, setDasetEventData] = useState(data.meetups);
  const [sortData, setSortData] = useState("");
  const [searchData, setSearchData] = useState("");
  const [isModal, setIsModal] = useState(false);
  const id = useRef("");

  return (
    <DataContext.Provider
      value={{
        eventData,
        setDasetEventData,
        sortData,
        setSortData,
        searchData,
        setSearchData,
        isModal,
        setIsModal,
        id,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// export const useData = useContext(DataContext)
