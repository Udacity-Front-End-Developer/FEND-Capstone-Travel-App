export const fetchImageData = async (trip) => {
    const response = await fetch('/api/image', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ trip }),
    });
    const data = await response.json();
    try {
        return data;
    } catch (error) {
        return error;
    }
};
export default fetchImageData;
