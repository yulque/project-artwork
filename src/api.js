export const search = async (query) => {
  const apiUrl = `https://api.artic.edu/api/v1/artworks/search`;
  const qs = `?q=${query}&limit=30&fields=id,title,image_id,thumnail`;
  const res = await fetch(apiUrl + qs);
  // same as fetch(apiUrl).then(res => ...).catch
  if (!res.ok) {
    throw new Error(`error loading search results {${res.status}}`);
  }
  return res.json();
};
