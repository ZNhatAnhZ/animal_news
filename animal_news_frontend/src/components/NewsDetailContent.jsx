import { Typography } from '@mui/material';

function NewsDetailContent(props) {
    return (
        <Typography variant="body1" textAlign={"left"} sx={{
            maxWidth: "1200px",
            margin: 'auto',
            paddingX: '20px',
            whiteSpace: "pre-line"
        }}>
            {props.data}
        </Typography>
    )
}

export default NewsDetailContent
