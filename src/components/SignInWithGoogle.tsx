import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import google from "../assets/google.png";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const SignInWithGoogle = () => {
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const data = await signInWithPopup(auth, provider);
      toast.success(`Welcome ${data.user.displayName}`);
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("Error during sign-in");
    }
  };
  return (
    <div
      className="cursor-pointer flex items-center w-fit px-3 py-1.5 rounded-full hover:bg-stone-200"
      onClick={() => handleSignIn()}
    >
      <img src={google} alt="google-icon" className="h-10 w-10" />
      <span className="font-roboto font-medium text-gray-700">
        Sign In With Google
      </span>
    </div>
  );
};

export default SignInWithGoogle;
