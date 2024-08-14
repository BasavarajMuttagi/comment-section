import { twMerge } from "tailwind-merge";
import { useActiveFilter } from "../hooks/useActiveFilter";

const FilterSwitch = () => {
  const [filter, setFilter] = useActiveFilter();
  return (
    <div className="flex items-center space-x-2 border rounded-sm bg-gray-100 text-gray-500">
      <span
        className={twMerge(
          "px-2 py-1 cursor-pointer",
          filter === "LATEST" ? "text-black" : "",
        )}
        onClick={() => setFilter("LATEST")}
      >
        Latest
      </span>
      <span
        className={twMerge(
          "px-2 py-1 cursor-pointer",
          filter === "POPULAR" ? "text-black" : "",
        )}
        onClick={() => setFilter("POPULAR")}
      >
        Popular
      </span>
    </div>
  );
};

export default FilterSwitch;
