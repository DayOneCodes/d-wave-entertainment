export default async function fetchEvents () {
  try {
      const res = await fetch ("https://dwaveentertainment.co.uk/api/events/");

      if (!res.ok){
        throw new Error("Failed to fetch events")
      }

      const eventData = await res.json();

      return eventData;
  }
  catch (err) {
    console.error("ERROR: err.message")
  }
};