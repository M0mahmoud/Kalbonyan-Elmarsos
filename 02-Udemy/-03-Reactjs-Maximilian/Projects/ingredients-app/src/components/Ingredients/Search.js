import React, { useEffect, useState, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../Hooks/http";

const Search = React.memo((props) => {
  const { onLoadIngredients } = props;
  const [filter, setFilter] = useState("");
  const inputRef = useRef();

  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filter === inputRef.current.value) {
        const query =
        filter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${filter}"`;
        sendRequest(
          "https://mahmoud-react-default-rtdb.firebaseio.com/ingredients.json" +
            query,
          'GET'
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
    
  }, [filter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        });
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);
  return (
    <section className="search">
    {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
