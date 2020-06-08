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
      title: 'Jollof Rice',
      ingredients: 'Rice Cooking oil Vegetables Hot pepper Salt Hot pepper',
  ),
];


//For the image of the meal I shall add a folder titled 'images' for you to upload the image of the meal You researched

//For the preparation of the meal I shall add a folder titled 'prep' for you to upload the .txt file of the meal You researched

//I shall provide sample of what I want so you can do the same for each meal. I shall do for Jollof Rice

//I would like everyone contributing to follow the naming convention and readthe comments I included.

//Above is a sample of how I want the API to be structured.

//It would help in designing the final app