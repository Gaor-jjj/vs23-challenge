import React, { useState, useEffect } from 'react';
import MealItem from './MealItem';

const Meals = () => {
    const[mealsData, setMealsData] = useState([]); 

    useEffect(() => {
        const fetchMeals = async () => {
          try {
            const response = await fetch('http://localhost:3001/meals');
            if (!response.ok) {
              throw new Error('Failed to fetch meals');
            }
            const mealsData = await response.json();
            setMealsData(mealsData);
          } catch (error) {
            console.error('Error fetching meals:', error);
          }
        };
    
        fetchMeals();
      }, []);

    return (
        <ul id="meals">
            {mealsData.map(meal => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}

export default Meals