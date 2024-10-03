const URL: any = process.env.NEXT_PUBLIC_API_URL
console.log(URL, 'url---');

async function _get(route) {
   return fetch(`${URL}/${route}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // Parse JSON data from response
        })
        .then(data => {
            console.log(data);  // Use the data
            return data
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

export {
    _get
}