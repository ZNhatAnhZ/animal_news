import { Grid, Typography } from '@mui/material';

function NewsTitle() {
    return (
        <Grid container direction="column" justifyContent="center" sx={{
            height: '14vh',
        }}>
            <Typography variant='h3' align='center' fontWeight={'light'}>News</Typography>
        </Grid>
    );
}

export default NewsTitle
