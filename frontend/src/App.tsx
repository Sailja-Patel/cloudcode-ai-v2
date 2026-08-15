import { useState } from "react";
import axios from "axios";

function App() {
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [branch, setBranch] = useState("main");
  const [jobId, setJobId] = useState("");
  const [status, setStatus] = useState("");

  const createJob = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/jobs",
        {
          repository_url: repositoryUrl,
          branch: branch,
        }
      );

      setJobId(response.data.job_id);
      setStatus(response.data.status);
    } catch (error) {
      console.error(error);
      setStatus("Failed to create job");
    }
  };

  return (
    <div>
      <h1>CloudCode AI</h1>

      <p>AI-powered code review for your GitHub repositories.</p>

      <input
        type="text"
        placeholder="GitHub repository URL"
        value={repositoryUrl}
        onChange={(e) => setRepositoryUrl(e.target.value)}
      />

      <input
        type="text"
        placeholder="Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />

      <button onClick={createJob}>
        Analyze Repository
      </button>

      {jobId && (
        <div>
          <p>Job ID: {jobId}</p>
          <p>Status: {status}</p>
        </div>
      )}
    </div>
  );
}

export default App;