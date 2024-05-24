
import React from 'react';
import Recipe from './Recipe';

const RecipeList = () => {
  const recipes = [
    {
      title: 'Chicken Curry',
      ingredients: [
        '500 chicken',
        'Gram masala',
        'oil,1small bay leaf,2inch cinnamon piece,4 colves,3 green  cardmoms',
        'onion,green chili,ginger garlic paste',
        '2  tomatoes,turmeric,salt',
        'red chilli,curd,12 cashew nuts,poppy seeds',
      ],
      instructions:
        '1.Heat 2 tablespoons of oil in heavy bottom pan when the oil truns hot, add 1 small bay leaf,2inch cinnamon piece,4Cloves,3 green cardamoms . 2. Add 1 cup very finely chopped onions and 1 chopped green chili.Saute the onion still they turn golden 3. Add  1 tablespoon ginger garlic paste make sure oniuon turns golden. 4. Saute ginger garlic for about 2 to 3 minutes. 5. Add half cup tomatoes and also 1/4 teaspoon turmeric and 1/2 teaspoon salt. 6.Next fry it until the tomatoes turn completly  mushy and the raw smell has gone. 7.Add 1 teaspoon red chili powder and 1/4 cup wiksked yogurt(curd).  8.Saute on a medium flame until the mixture becomes thick and begins to smell good.9.Add following ingredients  1/2 chicken,1teaspoon garam masala,1 teaspoon coriandar powder,2 tablespoon chopped leaves or mint leaves 10.saute for 3 or 4 mins . 11. cover and cook on a low flame for about 3 or 4 mins so the chicken observes flavour.Meanwhile , heat 1 cup water in a seprate pot.12.Pour 1/2 to 3/4 hot water as needed. 13.Make sure you use just enough water to partillay cover chicken .14.Lastly check wheather the chicken is done by pricking it with fork '
    },
    // Add more recipes here
  ];

  return (
    <div>
      <h1>how to make checken curry?</h1>
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      ))}
    </div>
  );
};

export default RecipeList;
