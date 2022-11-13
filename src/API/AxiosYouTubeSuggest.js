import axios from 'axios';

// This function returns a promise given a search query that resolves into
// a JSON file that contains YouTube autocomplete suggestions using Axios library
export async function fetchSuggestionsAxios(query) {
  try {
    const response = await axios.get(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`,
    );
    // `data` is the response that was provided by the server
    return response.data;
  } catch (error) {
    console.log(`Could not fetch suggestions: ${error}`);
  }
}
