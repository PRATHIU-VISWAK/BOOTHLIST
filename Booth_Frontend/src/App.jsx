import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FetchNAME } from "./pages/FetchNAME";
import { FetchID } from "./pages/FetchID";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NAVBAR } from "./components/NAVBAR";
import { HOME } from "./pages/HOME";
import { FetchFHNAME } from "./pages/FetchFHNAME";

export const AppContext = createContext();

function App() {
  const query = new QueryClient();
  const [INPUT, setINPUT] = useState("குருசாமி");

  return (
    <>
      <AppContext.Provider value={{ INPUT , setINPUT}}>
        <div>
          <QueryClientProvider client={query}>
            <Router>
              <NAVBAR/>
              <div>
                <Routes>
                  <Route path="/" element={<HOME/>}></Route>
                  <Route path="/fetchid" element={<FetchID/>}></Route>
                  <Route path="/fetchname" element={<FetchNAME/>}></Route>
                  <Route path="/fetchfhname" element={<FetchFHNAME/>}></Route>
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
