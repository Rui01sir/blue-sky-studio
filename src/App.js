import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';

function App() {
  return (
    <Router basename="/blue-sky-studio">
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* 其他路由配置 */}
      </Routes>
    </Router>
  );
}

export default App;
