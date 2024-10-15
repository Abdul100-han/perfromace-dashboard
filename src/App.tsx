
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Initiative from "./pages/Initiative";
import NewsAndEvent from "./pages/NewsAndEvent";
import Contact from "./pages/Contact";
import More from "./pages/More";
import Main from "./components/Main";
import BridgeGap from "./components/BridgeGap";
import DeliveringSuport from "./components/DeliveringSuport";
import Maximize from "./components/Maximize-reach";
import FuturePromise from "./components/FuturePromise";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/initiative" element={<Initiative />} />
        <Route path="/news-and-event" element={<NewsAndEvent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
        <Route path="/bridge-gap" element={<BridgeGap />} />
        <Route path="/delivering-support" element={<DeliveringSuport />} />
        <Route path="/maximize-reach" element={<Maximize />} />
        <Route path="/feature-promise" element={<FuturePromise />} />

      </Routes>
      </BrowserRouter>

     
    </div>
  );
};

export default App;
