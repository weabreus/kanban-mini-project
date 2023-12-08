export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}
