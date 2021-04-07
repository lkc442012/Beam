export const callAPI = async (module, params) => {
  const response = await fetch('http://192.168.0.173:5000' + module);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};
