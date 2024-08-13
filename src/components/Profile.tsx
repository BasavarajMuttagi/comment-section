import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { CaretUp, SignOut } from "@phosphor-icons/react";
import SignInWithGoogle from "./SignInWithGoogle";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const Profile = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useAuth();

  if (!user) {
    return <SignInWithGoogle />;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during sign-out:", error);
      toast.error("Error during sign-out");
    }
  };
  return (
    <div
      className={twMerge(
        "bg-stone-950 cursor-pointer w-fit px-1.5  py-1.5 rounded-3xl text-sm text-gray-400 space-y-3",
      )}
    >
      <div
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="flex items-center"
      >
        <div className="flex items-center space-x-2">
          <img
            src={user.photoURL || ""}
            alt={user.displayName || ""}
            className="rounded-full w-9 h-9"
          />
          <span>{user.displayName}</span>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.13 }}
          >
            <CaretUp size={16} />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.12,
              ease: "easeIn",
            }}
            className="text-sm font-medium"
          >
            <ul className="flex flex-col space-y-2">
              <li
                className="flex items-center space-x-2 px-9 py-2 rounded-3xl hover:bg-stone-800"
                onClick={() => handleLogout()}
              >
                <SignOut size={16} /> <span>Logout</span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
