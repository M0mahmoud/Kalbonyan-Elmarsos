import React, { useReducer, useCallback, useMemo, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../Hooks/http";

const ingredientsReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should Not Get There!");
  }
};
function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientsReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifer, clear } =
    useHttp();
  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_INGREDIENT") {
      dispatch({
        type: "ADD",
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);
  const filterIngredients = useCallback((filtered) => {
    dispatch({ type: "SET", ingredients: filtered });
  }, []);
  const addIngredients = useCallback(
    (ingredient) => {
      sendRequest(
        "https://mahmoud-react-default-rtdb.firebaseio.com/ingredients.json",
        "POST",
        JSON.stringify(ingredient),
        ingredient,
        "ADD_INGREDIENT"
      );
    },
    [sendRequest]
  );
  const removeItem = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://mahmoud-react-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );
  // const clearError = useCallback(() => { clear() }, []);
  const ingredientList = useMemo(() => {
    return (
      <IngredientList ingredients={userIngredients} onRemoveItem={removeItem} />
    );
  }, [userIngredients, removeItem]);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredients} loading={isLoading} />
      <section>
        <Search onLoadIngredients={filterIngredients} />
        {ingredientList}
      </section>
    </div>
  );
}
export default Ingredients;
