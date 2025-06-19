import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:track" element={<AudioPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
