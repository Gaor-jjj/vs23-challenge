import React, { useEffect } from 'react';

const Meals = () => {
    useEffect(() => {
        const fetchMeals = async () => {
          try {
            const response = await fetch('http://localhost:3001/meals');
            if (!response.ok) {
              throw new Error('Failed to fetch meals');
            }
            const mealsData = await response.json();
            console.log('Meals Data:', mealsData);
          } catch (error) {
            console.error('Error fetching meals:', error);
          }
        };
    
        fetchMeals();
      }, []);

    return (
        <ul id="meals">
            { 
                // list of meals
            }
        </ul>
    )
}

export default Meals