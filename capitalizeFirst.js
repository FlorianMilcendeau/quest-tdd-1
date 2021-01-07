// capitalizeFirst.js

function capitalizeFirst(input) {
  return input.length > 0 ? input[0].toUpperCase() + input.slice(1) : '';
}

const capitalizeFirstLetter = (input) =>
  input.length > 1
    ? input
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    : '';

module.exports = capitalizeFirst;
module.exports.capitalizeFirstLetter = capitalizeFirstLetter;
