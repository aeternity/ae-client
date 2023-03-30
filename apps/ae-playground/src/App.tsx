import { Layout } from "./Layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
