import { ImageListItem, ImageList, useMediaQuery } from '@mui/material';

function NewsDetailImages(props) {
    const matches = useMediaQuery('(min-width:1000px)');

    return (
        <ImageList sx={{
            maxWidth: "1200px",
            margin: 'auto',
            marginY: '35px',
            paddingX: '20px',
            justifyItems: 'center'
        }} cols={matches ? 3 : 1} gap={30} rowHeight={300}>
            {props.data.map((item) => (
                <ImageListItem key={item.img} sx={{
                    maxWidth: '100%',
                    justifyContent: 'center'
                }}>
                    <img
                        src={`${item}`}
                        srcSet={`${item}`}
                        loading="lazy"
                        className='contentImg'
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default NewsDetailImages
