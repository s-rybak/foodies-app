import { useState, useEffect } from "react";
const { REACT_APP_BASE_URL } = process.env;

export async function useFetchIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchIngredients = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${REACT_APP_BASE_URL}api/ingredients`);
        if (!response.ok) {
          throw new Error("Failed to fetch ingredients");
        }
        const data = await response.json();

        setIngredients(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIngredients();
  }, [REACT_APP_BASE_URL]);
  console.log({ ingredients });
  return { ingredients, isLoading, error };
}

export default useFetchIngredients;
