import {Routes,Route} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import FirstTimePage from './FirstTimePage';
import BodyDetails from "./MainPages/Body/Bodydetails";
import BodyDetailsReview from "./MainPages/Body/BodyDetailsReview";
import MainPage from "./MainPages/MainPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<FirstTimePage />}/>
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/main-page/details" element={<BodyDetails />} />
      <Route path="/main-page/details-review" element={<BodyDetailsReview />} />
      <Route path="*" element={<FirstTimePage />}/>
    </Routes>
    </>
  );
}

export default App;
