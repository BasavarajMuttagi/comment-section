import { useContext } from "react";
import { ActiveFilterContext } from "../contexts/ActiveFilterProvider";

export const useActiveFilter = () => useContext(ActiveFilterContext);
