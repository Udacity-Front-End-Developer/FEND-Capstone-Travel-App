const fetchWeather = async (trip, days) => {
  const response = await fetch('/api/weather', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ trip, days }),
  });
  const data = await response.json();
  try {
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchWeather;
