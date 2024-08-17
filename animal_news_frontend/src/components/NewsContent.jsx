import { Grid } from '@mui/material';
import NewsItem from './NewsItem';

function NewsContent(props) {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{
            whiteSpace: "pre-line"
        }}>
            {props.news.map((e) => <NewsItem data={e}></NewsItem>)}
        </Grid>
    )
}

export default NewsContent
