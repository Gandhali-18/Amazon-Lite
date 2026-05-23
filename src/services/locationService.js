export async function fetchLocations(query, signal) {
  if (!query || query.trim().length < 3) {
    return [];
  }

  try {
    const res = await fetch(
      `https://api.postalpincode.in/postoffice/${query}`,
      { 
        signal 
      }
    );

    const result = await res.json();

    if (result[0]?.Status === "Success") {
      return result[0].PostOffice;
    } else {
      return [];
    }
  } catch (err) {
    if (err.name === "AbortError") {
      return [];
    }
    console.error(err);
    throw err;
  }
}
