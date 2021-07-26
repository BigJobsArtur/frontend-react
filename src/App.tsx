import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
};

export default App;
