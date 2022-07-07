import * as React from 'react';
import Card from '@mui/material/Card';
import { Container } from '@mui/system'
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import stories from '../sample/stories';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Posts() {
    const [expanded, setExpanded] = React.useState(false);
    const [like, setLike] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: "#FFFFFF",
                borderRadius: '5px',
            }}>
            {
                stories.map((post, index) => {
                    return (
                        <Card sx={{ maxWidth: 400, marginTop: 5 }} key={index}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={post?.url} />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={post?.name}
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="auto"
                                image={post?.url}
                                alt={post?.name}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {post?.name}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites" onClick={() => setLike(!like)}>
                                    <FavoriteIcon sx={{color : `${like ? "blue" : "gray"}`}} />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon onClick={(e) => {
                                        e.preventDefault();
                                        window.navigator.clipboard.writeText(post?.url);
                                        alert("URL Copied to clipboard");
                                    }} />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </Container>
    );
}
