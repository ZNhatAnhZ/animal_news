
async function getAllPartialNews(page, size) {
    try {
        const response = await fetch(`/api/news/index?page=${page}&size=${size}`);
        const jsondata = await response.json();
        return jsondata;
    } catch (error) {
        console.log("Get all news error: ", error);
    }
}

async function getDetailNews(id) {
    try {
        const response = await fetch(`/api/news/detail?id=${id}`);
        const jsondata = await response.json();
        return jsondata;
    } catch (error) {
        console.log("Get news detail error: ", error);
    }
}

export default { getAllPartialNews, getDetailNews }