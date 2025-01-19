import {useState} from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import NewsContent from '../components/NewsContent';
import NewsTitle from '../components/NewsTitle';
import NewsService from '../services/NewsService';
import Footer from '../components/Footer';
import {useLoaderData} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import {Grid} from '@mui/material';

export function Home() {
    const temp = useLoaderData();
    const [page, setPage] = useState(1);
    const [news, setNews] = useState(temp.content);
    const [count, setCount] = useState(temp.page.totalPages);

    async function paginationHandler(event, value) {
        const data = await NewsService.getAllPartialNews(value, 10);
        setNews(data.content);
        setPage(value)
        setCount(data.page.totalPages)
    }

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <NewsTitle></NewsTitle>
            <NewsContent news={news}></NewsContent>
            <Grid container justifyContent={'center'}>
                <Pagination count={count} page={page} siblingCount={3} onChange={paginationHandler} />
            </Grid>
            <Footer></Footer>
        </>
    )
}

export async function loader() {
    return await NewsService.getAllPartialNews(0, 10);
}
