class FoodRecipe
{
  String imageUrl;
  String title;
  String ingredients;
  String prep;

  Posters({
    this.imageUrl,
    this.title,
    this.ingredients,
	  this.prep,

  });

}

final List<FoodRecipe> foodRecipe = [
  FoodRecipe(
      title: 'Dodo(Fried plantain)',
      ingredients: 'Ripe plantain Vegetable oil Salt',
  ),
];
