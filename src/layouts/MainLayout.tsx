import { ReactNode } from "react";
import Auth from "../components/Auth";
import CommentInput from "../components/CommentInput";
import FilterSwitch from "../components/FilterSwitch";
import ActiveFilterProvider from "../contexts/ActiveFilterProvider";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ActiveFilterProvider>
      <div
        className="flex flex-col min-h-screen overflow-y-scroll space-y-5 py-2 p-1 max-w-screen-md"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="flex items-center justify-end">
          <Auth />
        </div>
        <div className="flex-1 rounded-2xl border-2 border-gray-200  shadow space-y-5 p-2 sm:px-5 sm:py-2">
          <div className="mt-3 flex items-center justify-between">
            <span className="font-extrabold text-black text-sm sm:text-lg">{`Comments(${30})`}</span>
            <FilterSwitch />
          </div>
          <CommentInput />
          <div className=" bg-red-100">{children}</div>
        </div>
      </div>
    </ActiveFilterProvider>
  );
};

export default MainLayout;
