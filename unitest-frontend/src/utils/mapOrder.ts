/**
 * Order an array of objects based on another array & return new Ordered Array
 * If the key is not found in the orderArray, it will be placed at the end of the returned array.
 * The originalArray will not be modified.
 */
export const mapOrder = <T>(
  originalArray: T[],
  orderArray: unknown[],
  key: keyof T
): T[] => {
  if (!originalArray || !orderArray || !key) return [];
  return [...originalArray].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];
    const indexA = orderArray.indexOf(valA);
    const indexB = orderArray.indexOf(valB);
    return (
      (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB)
    );
  });
};
