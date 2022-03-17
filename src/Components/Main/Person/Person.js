import React from "react";
import { useState } from "react";
import "./Person.css";
const Person = ({ props: book, handleDelete }) => {
  const [showInfo, setInfo] = useState(false);
  const handleToggle = () => {
    setInfo(!showInfo);
  };
  return (
    <section className="book-container">
      <img src={book.img} alt="Book" />
      <button
        type="button"
        className="close-btn"
        onClick={() => handleDelete(book.id)}
      >
        X
      </button>
      <div>
        <h2> {book.title}</h2>
        <h3>Authored by: {book.author}</h3>
        <div className="toggle-text">
          Info{" "}
          <span className="toggle-btn" onClick={handleToggle}>
            v
          </span>
        </div>
        {showInfo ? <p>{book.info}</p> : null}
      </div>
    </section>
  );
};
export default Person;
