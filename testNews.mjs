export const handler = async (event) => {
  
  
    //const url = 'https://newsapi.org/v2/everything?q=astronomy&sortBy=relevancy&apiKey=5b19dbe069e74920b6f1988f75ac4c95';
    
    try {
      const response = await fetch(geoLocatorURL, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('HTTP error');
      }
  
      const newsData = await response.json();
      console.log(newsData);
      return {
        statusCode:200,
        body : JSON.stringify(newsData),
      }
    }catch (error){
      console.error('Error:', error);
      return{
        statusCode : 500,
        body : JSON.stringify({ message: "Error making call.", details: error.message }),
      }
    }
  };
  
  console.log(handler());
  