import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';
import Image from 'mui-image'

function NewsItem(props) {
    return (
        <Card sx={{
            width: '75%',
            maxWidth: '1200px',
            marginY: '1%',
        }}>
            <CardActionArea component="a"
                href={`/detail/${props.data.id}`} >
                <Typography variant="body2" fontWeight={600} sx={{
                    position: "absolute", color: "white", background: "black", padding: "0.4%", zIndex: 1
                }}>
                    {props.data.date}
                </Typography>
                <Grid container justifyContent={'center'}>
                    <Grid item display={"flex"} justifyContent={'center'} lg={6} md={12} sx={{
                        height: {
                            lg: '350px',
                            md: '400px',
                            sm: '400px'
                        }
                    }}>
                        <CardMedia>
                            <Image src={`${props.data.images[0]}`} width={"100%"} height={"100%"} />
                        </CardMedia>
                    </Grid>
                    <Grid item lg={6} md={12}>
                        <CardContent sx={{paddingY: 1, paddingX: 3}}>
                            <Typography variant="h5" textAlign={"left"} sx={{
                                paddingBottom: 2,
                            }}>
                                {props.data.title}
                            </Typography>
                            <Typography variant="body2" textAlign={"left"}>
                                {props.data.content}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ paddingY: 1, paddingX: 3 }}>
                            <Button component="a" variant="contained" href={`/detail/${props.data.id}`}>Read More</Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
}

export default NewsItem
