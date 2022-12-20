import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/header.component";
import { GlobalStyles } from "./global.styles";
import { Home } from './pages/Home/home.component';
import { Latest } from "./pages/Latest";
import { Popular } from './pages/Popular/index';
import { SingleMovie } from "./pages/SingleMovie";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/latest" element={<Latest/>}/>
        <Route path="/movie/:id" element={<SingleMovie/>}/>
      </Routes>
    </div>
  );
}

export default App;
