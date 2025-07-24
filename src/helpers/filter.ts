export function handleFilter<T extends { id: string }>(
  array: T[],
  value: string,
): T[] {
  return array.filter((element) => element.id !== value);
}
