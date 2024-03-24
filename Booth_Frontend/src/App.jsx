import { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VoterId } from "./components/VoterID";
import { FetchID } from "./components/FetchID";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const AppContext = createContext();
function App() {
  const query = new QueryClient();
  const [ID, setID] = useState();
  return (
    <>
      <AppContext.Provider value={{ ID }}>
        <div>
          <QueryClientProvider client={query}>
            <Router>
              <h1>Booth 156</h1>
              <div>
                <input
                  type="text"
                  placeholder="Enter Voter ID"
                  onChange={(event) => {
                    setID(event.target.value);
                  }}
                />

                <FetchID />
                <Routes>
                  <Route path="/booths/ID" element={<VoterId />}></Route>
                </Routes>
              </div>
            </Router>
          </QueryClientProvider>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
