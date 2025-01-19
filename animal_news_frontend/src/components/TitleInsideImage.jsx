import { Container, Typography, Grid, Card, CardMedia, useThemeProps } from '@mui/material';

function TitleInsideImage(props) {
    return (
        <Card sx={{
            width: '100%',
            maxWidth: '1200px',
            maxHeight: '300px',
            margin: 'auto',
            position: 'relative',
            marginTop: '0.5%',
            borderRadius: '0'
        }}>
            <Typography variant="h4" fontSize="1.6em" textAlign="left" sx={{
                position: "absolute", color: "white", background: "rgb(24 37 52 / 90%)", padding: "0.5% 1%",
                bottom: "0",
                left: "0",
                margin: "0",
                border: "0"
            }}>
                {props.data.title}
            </Typography>
            <CardMedia
                component="img"
                sx={{
                    objectFit: 'fill'
                }}
                image={`${props.data.images[0]}`}
            />
        </Card>
    )
}

export default TitleInsideImage
