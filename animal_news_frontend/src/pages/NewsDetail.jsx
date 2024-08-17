import ResponsiveAppBar from '../components/ResponsiveAppBar';
import TitleInsideImage from '../components/TitleInsideImage';
import DateAndShare from '../components/DateAndShare';
import NewsDetailContent from '../components/NewsDetailContent';
import NewsDetailImages from '../components/NewsDetailImages';
import Footer from '../components/Footer';
import NewsService from '../services/NewsService';
import { useParams, useLoaderData } from 'react-router-dom';

export function NewsDetail() {
    const newsDetail = useLoaderData();

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <TitleInsideImage data={newsDetail}></TitleInsideImage>
            <DateAndShare data={newsDetail.date}></DateAndShare>
            <NewsDetailContent data={newsDetail.content}></NewsDetailContent>
            <NewsDetailImages data={newsDetail.images}></NewsDetailImages>
            <Footer></Footer>
        </>
    )
}

export async function loader({ request, params }) {
    const newsDetail = await NewsService.getDetailNews(params.id);
    return newsDetail;
}
