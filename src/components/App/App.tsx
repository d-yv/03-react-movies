import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Please enter your search query.");

function App() {
  return (
    <div>
      <button onClick={notify}>touch for message.</button>
      <Toaster />
    </div>
  );
}

export default App;
