async function getAllPartialNews(page, size) {
    try {
        const response = await fetch(`http://localhost:8080/news/index?page=${page}&size=${size}`);
        console.log("asdasd")
        return await response.json();
    } catch (error) {
        console.log("Get all news error: ", error);
    }
}

async function getDetailNews(id) {
    try {
        const response = await fetch(`http://localhost:8080/news/detail?id=${id}`);
        return await response.json();
    } catch (error) {
        console.log("Get news detail error: ", error);
    }
}

export default { getAllPartialNews, getDetailNews }