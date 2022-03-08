
import STATES from "./states";
import { createRef } from "react";

const SearchForm = ({ onSearch }) => {
  const source = createRef();
  const dest = createRef();
  const leaveDate = createRef();
  const returnDate = createRef();
  const search = (e) => {
    e.preventDefault();
    onSearch({
      source: source.current.value,
      dest: dest.current.value,
      leaveDate: new Date(leaveDate.current.value).toDateString(),
      returnDate: new Date(returnDate.current.value).toDateString(),
    });
  };
  return (
    <header>
      <h1>Bus Tickets</h1>
      <form>
        <select ref={source}>
          {Object.entries(STATES).map((s, i) => (
            <option key={i}>
              {s[1]},{s[0]}
            </option>
          ))}
        </select>
        <select ref={dest}>
          {Object.entries(STATES).map((s, i) => (
            <option key={i}>
              {s[1]},{s[0]}
            </option>
          ))}
        </select>
        <input type="date" ref={leaveDate} />
        <input type="date" ref={returnDate} />
        <input type="submit" value="Search" onClick={search} />
      </form>
    </header>
  );
};


export default SearchForm;

