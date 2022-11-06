// This function returns a promise given a search query that resolves into
// a JSON file that contains YouTube autocomplete suggestions
export async function fetchSuggestions(query) {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // This API endpoint is Google's undocumented Internal API that gives list of autocomplete suggestions
    // For JSON, we use client=firefox, and for YouTube only search we use ds=yt
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Could not fetch suggestions: ${error}`);
  }
}
