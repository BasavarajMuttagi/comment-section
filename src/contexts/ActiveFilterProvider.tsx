import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type activeFilterType = "LATEST" | "POPULAR";

export const ActiveFilterContext = createContext<
  [activeFilterType, Dispatch<SetStateAction<activeFilterType>>]
>(["LATEST", () => {}]);

const ActiveFilterProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<activeFilterType>("LATEST");

  return (
    <ActiveFilterContext.Provider value={[activeTab, setActiveTab]}>
      {children}
    </ActiveFilterContext.Provider>
  );
};

export default ActiveFilterProvider;
