import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import HomePage from "./HomePage/HomePage";
import PageLoader from "./components/PageLoader";
import PrivacyPolicyPage from "./Policy/Policy";
import Terms from "./Policy/Terms";

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {!loading && <PageLoader onComplete={() => setLoading(true)} />}
      {loading && (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage/>}/>
            <Route path="/terms" element={<Terms/>}/>
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
