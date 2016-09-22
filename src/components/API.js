async function search(query) {
    try {
        let response = await fetch('localhost:8080/search?query=' + query);
        let responseJson = await response.json();
        return responseJson;
    } catch(error) {
        console.error(error);
    }
}

const API = { search };
export default API;