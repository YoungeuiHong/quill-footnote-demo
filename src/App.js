import { useRef } from "react";
import Editor from "./Editor";

function App() {
  const quillRef = useRef(null);

  return <Editor ref={quillRef} readOnly={false} />;
}

export default App;
