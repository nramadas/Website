export default [
    "A nameless library that eases creating Models and Collections on the client side. The library includes a simple Typing system.",
    "Custom models are easily created by extending the \"Model\" class. Properties on the model are declared via a class attribute dictionary where keys are the property name and the value is a function. Said function both serves as a validator, and as a method of casting the value as a specified type.",
    "Also included in the library is an AsyncModel class. When Async models are fetched, they return a model right away. However, all properties on the model are promised that resolve with the property's value. This plays extremely well with ES7's \"await\" syntax.",
    "Finally, the library includes \"Collections\", an array-like structure that mimics certain functionality of Sets and Maps. Collections are immutable, so any \"modifying\" methods called on the Collection returns a new Collection.",
];
