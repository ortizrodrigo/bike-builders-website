import "./App.css";
import { Outlet } from "react-router";
import { Header, Footer } from "@/layout";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
