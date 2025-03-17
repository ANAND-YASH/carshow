export async function fetchCars(){
    const headers = {
        'x-rapidapi-key': 'eee7cb3b3bmsh92d6fa8b1e967ecp1afaf6jsn3a79ece1233c',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch 
    ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,
    });
    const result =await response.json();

    return result;
    }
    
