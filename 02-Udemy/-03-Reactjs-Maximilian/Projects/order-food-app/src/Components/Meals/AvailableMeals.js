import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./styles/AvailableMeals.module.css";
// import Loading from "../../../../Movie/src/components/Loading/Loading";

const AvailableMeals = () => {
  const [meals, seetMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const respone = await fetch(
        "https://mahmoud-react-default-rtdb.firebaseio.com/meals.json"
      );
      //Error
      if (!respone.ok) {
        throw new Error("Something Wrong...!!");
      }
      const responeDate = await respone.json();
      const loadedMeals = [];
      for (const key in responeDate) {
        loadedMeals.push({
          id: key,
          name: responeDate[key].name,
          description: responeDate[key].descriptio,
          price: responeDate[key].price,
        });
      }
      seetMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <h3 className={classes.mealsLoading}>Loading...</h3>;
    //<Loading/>
  }
  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      descriptio={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
