import Card from '../UI/Cart';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'KAISEKI ZENSAI',
    description:
      'Hokkaido scallop crudo, Ikura, dashi glaze saikyo roasted sablefish, wild garlic miso, tomato jam, charred octopus kabayaki, sea urchin, amazu jelly.',
    price: 24,
  },
  {
    id: 'm2',
    name: 'Pan-Roasted Beef Tenderloin',
    description:
      'carrot kombu purée, king oyster mushrooms, braised red cabbage, Japanese peppercorn jus, black garlic miso foie gras. + upgrade to American Wagyu for $35',
    price: 35,
  },
  {
    id: 'm3',
    name: 'Sushi Selection',
    description:
      'Aburi salmon oshi, Aburi ebi oshi, Aburi yellowtail oshi, Japanese tai nigiri, bluefin tuna nigiri.',
    price: 21,
  },
  {
    id: 'm4',
    name: 'WholeFruit Dark Chocolate Cake',
    description:
      'strawberry raspberry sorbet, strawberry jelly, raspberry coulis, genmai tea caramel tuile.',
    price: 14.5,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
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
