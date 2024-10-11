export const handler = async (event) => {
  let cityName = event.cityName;

  let key = process.env.weatherKey

    // GeoLocator API call
    const geoLocatorURL = new URL("http://api.openweathermap.org/geo/1.0/direct");
    geoLocatorURL.searchParams.append('q', cityName);
    geoLocatorURL.searchParams.append('appid', key);

    //Weather API call
    const weatherURL = new URL("https://api.openweathermap.org/data/3.0/onecall");
    weatherURL.searchParams.append('appid', key);

    try {
      const response = await fetch(geoLocatorURL, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('HTTP error');
      }
  
      //const newsData = await response.json();
      //console.log(newsData);
      const locationData = await response.json();
      let lat = locationData[0].lat;
      let lon = locationData[0].lon;
      weatherURL.searchParams.append('lat', lat);
      weatherURL.searchParams.append('lon', lon);
      weatherURL.searchParams.append('units', 'imperial');
      try {
        const response2 = await fetch(weatherURL, {
          method: 'GET',
        });
    
        if (!response2.ok) {
          throw new Error('HTTP error');
        }
    
        //const newsData = await response.json();
        //console.log(newsData);
        const weatherData = await response2.json();
        console.log(weatherData);
        return {
            statusCode:200,
            body : JSON.stringify(weatherData),
        }
      }catch (error2){
        console.error('Error:', error2);
        return{
          statusCode : 500,
          body : JSON.stringify({ message: "Error making weather call.", details: error.message }),
        }
      }
    }catch (error){
      console.error('Error:', error);
      return{
        statusCode : 500,
        body : JSON.stringify({ message: "Error making location call.", details: error.message }),
      }
    }
};
