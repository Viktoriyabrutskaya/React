type Ingredients = "flour" | "beef" | "salad" | "cheese" | "sauce" | "cucumber";
type Currency = "USD" | "Euro";

interface Product {
  id: number;
  name: string;
  price: number;
  currency: Currency;
  ingredients: Ingredient[];
  type: string;
  isAviable: true;
}

const products = [
  {
    id: 1,
    name: "Burger Premium",
    price: 6,
    currency: "euro",
    ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
    type: "burger",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Burger Lite",
    price: 2.3,
    currency: "USD",
    ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    isAvailable: true,
  },
];
