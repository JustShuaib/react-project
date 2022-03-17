import { useState } from "react";
import data from "../../data";
import "./Body.css";
import Person from "./Person/Person";

const Body = () => {
  const [theData, setTheData] = useState(data);
  const handleDelete = (id) => {
    const sortedData = theData.filter((data) => data.id !== id);
    setTheData(sortedData);
  };
  return (
    <main>
      {theData.map((book) => {
        return (
          <Person key={book.id} props={book} handleDelete={handleDelete} />
        );
      })}
    </main>
  );
};
export default Body;
