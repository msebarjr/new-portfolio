import {
    Card,
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";

function ProjectCard({ title, src, tags, githubLink, handleClickOpen }) {
    return (
        <Card className="project-card-container">
            <CardMedia
                component="video"
                controls
                height="275"
                src={src}
                muted
                // preload="none"
            />
            <CardContent className="project-card">
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="project-card-title"
                >
                    {title}
                </Typography>
                <div className="card-tags-container">
                    {tags.map((tag) => (
                        <Typography
                            key={tag}
                            variant="button"
                            className="card-tag"
                        >
                            {tag}
                        </Typography>
                    ))}
                </div>
            </CardContent>
            <CardActions className="project-card">
                <Button
                    size="medium"
                    variant="text"
                    className="more-info"
                    onClick={handleClickOpen}
                >
                    More Info
                </Button>
                <Button
                    size="medium"
                    variant="text"
                    href={githubLink}
                    target="_blank"
                    className="github"
                >
                    Github
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;
