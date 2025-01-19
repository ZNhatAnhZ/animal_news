import backendUrl from "../config/envVariable.jsx";

async function getAllPartialNews(page, size) {
    try {
        const response = await fetch(`${backendUrl}/news/index?page=${page}&size=${size}`);
        return response.json();
    } catch (error) {
        console.log("Get all news error: ", error);
    }
}

async function getDetailNews(id) {
    try {
        const response = await fetch(`${backendUrl}/news/${id}/detail`);
        return response.json();
    } catch (error) {
        console.log("Get news detail error: ", error);
    }
}

export default { getAllPartialNews, getDetailNews }