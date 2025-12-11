import { Routes, Route } from "react-router-dom";
import PostIndex from "./PostIndex"; // <-- Make sure this component is imported
import PostCreate from "./PostCreate";
import PostEdit from "./postEdit";
import PostShow from "./PostShow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostIndex />}></Route>
        <Route path="/create" element={<PostCreate/>}></Route>
        <Route path="/edit/:id" element={<PostEdit/>}></Route>
        <Route path="/show/:id" element={<PostShow/>}></Route>
      </Routes>
    </>
  )
}

export default App;

