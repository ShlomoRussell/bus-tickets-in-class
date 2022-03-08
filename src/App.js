import { useEffect, useState } from "react";
import ResultsContainer from "./components/ResultsContainer";
import SearchForm from "./components/SearchForm";

function App() {
  const onSearch = ({ source, dest, leaveDate, returnDate }) => {
    console.log(source, dest, leaveDate, returnDate);
    fetch("http://localhost:3031/tickets")
      .then((res) => res.json())
      .then((jRes) =>
        jRes.filter((o) => new Date(o.date).toDateString() === leaveDate)
      )
      .then((dateRes) =>
        setTicketsArr(dateRes.filter((s) => s.source === source.slice(-2)))
      );
  };
  const [ticketsArr, setTicketsArr] = useState([]);

  return (
    <>
      <SearchForm onSearch={onSearch} />
      <ResultsContainer ticketsArr={ticketsArr} />
    </>
  );
}

export default App;
