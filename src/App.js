import { BrowserRouter,Routes,Route } from "react-router-dom";
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";
const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />}/>
        <Route path="/movie/:id" element={<Movie />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
