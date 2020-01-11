const movieList = document.querySelector('.movieList');
const fetchData = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        //api search params
        params: {
            api_key: '7dd3ecbc408396caf9897c0d584666c0',
            language: 'en-US',
            sort_by: 'popularity.desc'
        }
    });

    return response.data.results;

}


const displayData = async () => {
    const data = await fetchData();
    for (let d of data) {
        movieList.innerHTML += renderData(d);
    }


}

displayData();