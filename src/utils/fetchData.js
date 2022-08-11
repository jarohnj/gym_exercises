export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1dac257276mshf8893cac75ba34ap15c317jsn5b22ba5d7ae8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}