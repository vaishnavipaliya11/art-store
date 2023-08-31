export const generateRandomText = () => {
  const availableOptions = [
    "Only 1 available",
    "Only 2 available",
    "Only 3 available",
    "Only 4 available",
    "Only 5 available",
  ];
  const basketOptions = [
    "and it's in 1 person's basket",
    "and it's in 2 people's baskets",
    "and it's in 3 people's baskets",
    "and it's in 4 people's baskets",
    "and it's in 5 people's baskets",
    "and it's in 10 people's baskets",
    "",
  ];

  const randomAvailable =
    availableOptions[Math.floor(Math.random() * availableOptions.length)];
  const randomBasket =
    basketOptions[Math.floor(Math.random() * basketOptions.length)];

  return `${randomAvailable} ${randomBasket}`;
};

// Example usage:
const randomText = generateRandomText();
console.log(randomText);
