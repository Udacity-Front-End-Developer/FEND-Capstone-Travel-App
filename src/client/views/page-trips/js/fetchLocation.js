// fetch data related to the keyword typed by the user, from server.
const fetchLocation = async (val) => {
  const response = await fetch('/api/coordination', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ val }),
  });
  const data = await response.json();
  try {
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchLocation;
