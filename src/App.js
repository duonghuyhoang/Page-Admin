import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import Layout from "./component/Layout";

function App() {
  if (typeof window !== "undefined") {
    const originalError = console.warn;
    console.warn = (...args) => {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("componentWillReceiveProps has been renamed")
      ) {
        return;
      }
      originalError.call(console, ...args);
    };
  }
  if (typeof window !== "undefined") {
    const originalError = console.warn;
    console.warn = (...args) => {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("componentWillUpdate has been renamed, ")
      ) {
        return;
      }
      originalError.call(console, ...args);
    };
  }
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.part}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
