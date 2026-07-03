export default async function updateUser(url, { arg }) {
  const { path, lat, lon, apiKey } = arg;

  const response = await fetch(
    `${url}${path}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
    {
      method: 'GET',
    },
  );

  return await response.json();
}
