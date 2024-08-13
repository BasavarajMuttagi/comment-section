import { useAuth } from "../hooks/useAuth";
import Profile from "./Profile";
import SignInWithGoogle from "./SignInWithGoogle";

const Auth = () => {
  const { user } = useAuth();
  return <>{user ? <Profile /> : <SignInWithGoogle />}</>;
};

export default Auth;
