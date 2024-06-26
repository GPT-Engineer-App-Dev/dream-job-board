import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx"; // Import the new PostJob page
import ApplyJob from "./pages/ApplyJob.jsx"; // Import the new ApplyJob page
import ApplicationConfirmation from "./pages/ApplicationConfirmation.jsx"; // Import the new ApplicationConfirmation page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/post-job" element={<PostJob />} /> {/* Add route for posting a job */}
      <Route path="/apply-job" element={<ApplyJob />} /> {/* Add route for applying to a job */}
      <Route path="/application-confirmation" element={<ApplicationConfirmation />} /> {/* Add route for application confirmation */}
      </Routes>
    </Router>
  );
}

export default App;
