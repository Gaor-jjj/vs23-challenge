import Button from './UI/Button';

const MealItem = (props) => {
    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
    });
    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{currencyFormat.format(props.meal.price)}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p className="meal-item-actions"> 
                    <Button textOnly={false} children={'Add to Cart'}/>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem