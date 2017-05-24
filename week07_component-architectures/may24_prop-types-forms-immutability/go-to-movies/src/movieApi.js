
const API_KEY = '3db77742';
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&`
export default {
    search(search) {
        return fetch(`${url}s=${search}&r=json`)
            .then(res => res.json())
            .then(data => data.Search);
    },
    get(id) {
        return fetch(`${url}i=${id}&plot=full&r=json`)
            .then(res => res.json())
    }
}