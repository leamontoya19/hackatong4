import { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("social");

  const handleSelectOption = (category) => {
    setSelectedCategory(category);
  };

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        handleSelectOption,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
