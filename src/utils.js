export const getCharacters = async () => {
  try {
    const result = await fetch(
      "https://gateway.marvel.com/v1/public/characters?apikey=ea25ef9e1e52c18445f6af55f2178792&limit=40&orderBy=-modified&offset=0"
    );
    return await result.json();
  } catch (e) {
    throw new Error(e);
  }
};
