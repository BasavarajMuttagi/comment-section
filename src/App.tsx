import { Toaster } from "react-hot-toast";
import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
      <Toaster />
    </AuthProvider>
  );
}

export default App;
