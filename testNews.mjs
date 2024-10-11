export const handler = async (event) => {
  
  let key = process.env.apiKey;
  
  const url = new URL('https://newsapi.org/v2/everything?q=astronomy&sortBy=relevancy');
  url.searchParams.append('apiKey', key);

  
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('HTTP error');
    }

    const newsData = await response.json();
    console.log(newsData);
    //console.log(response);
    return {
      statusCode:200,
      body : JSON.stringify(newsData.articles[0]), //sends only the first article
    }
  }catch (error) {
    console.error('Error:', error);
    return{
      statusCode : 500,
      body : JSON.stringify({ message: "Error making call.", details: error.message }),
    }
  }
};

  