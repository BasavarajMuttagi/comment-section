import { handleLogout } from "../firebase/apiService";
import { useAuth } from "../hooks/useAuth";
import SignInWithGoogle from "./SignInWithGoogle";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <SignInWithGoogle />;
  }

  return (
    <div className="w-full flex items-center justify-between">
      <div className="inline-flex items-center space-x-2">
        <img
          src={user.photoURL || ""}
          alt={user.displayName || ""}
          className="rounded-full w-9 h-9"
        />
        <span>{user.displayName}</span>
      </div>
      <button
        onClick={() => handleLogout()}
        className="font-roboto font-medium text-gray-700 px-3 py-1.5 rounded-md cursor-pointer hover:bg-stone-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
