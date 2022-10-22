export const mapToCollection = <A, B>(collection: A[], mapFn: (object: A) => B): B[] =>
  Array.isArray(collection) ? collection.map(mapFn) : [];
