import React, { Fragment } from "react";
import { Dialog, Grid, Button } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import "./style.css";

const ServiceSingle = ({ open, onClose, projectInfo }) => {
    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle
                disableTypography
                className={classes.root}
                {...other}
            >
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        className={classes.closeButton}
                        onClick={onClose}
                    >
                        <i className="fa fa-close"></i>
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
            >
                <DialogTitle
                    id="customized-dialog-title"
                    onClose={onClose}
                ></DialogTitle>
                <Grid className="modalBody modal-body">
                    <div className="wpo-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>Case Study</h3>
                                            </div>
                                            <div className="wpo-service-single-main-img">
                                                <video
                                                    width="100%"
                                                    controls
                                                    autoPlay
                                                >
                                                    <source
                                                        src={projectInfo.src}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>
                                            <div className="modal-actions">
                                                <Button
                                                    size="medium"
                                                    variant="contained"
                                                    href={
                                                        projectInfo.caseStudy
                                                            .website
                                                    }
                                                    target="_blank"
                                                    className="modal-btn live-site"
                                                >
                                                    Live Site
                                                </Button>
                                                <Button
                                                    size="medium"
                                                    variant="outlined"
                                                    href={projectInfo.github}
                                                    target="_blank"
                                                    className="modal-btn github"
                                                >
                                                    Github
                                                </Button>
                                            </div>
                                            <div className="wpo-service-single-title">
                                                <h3>{projectInfo.title}</h3>
                                            </div>
                                            <p>
                                                {
                                                    projectInfo.caseStudy
                                                        .description
                                                }
                                            </p>
                                            <div className="row mt-4">
                                                {projectInfo.images.map(
                                                    (image, idx) => {
                                                        return (
                                                            <div
                                                                className="col-md-6 col-sm-6 col-12"
                                                                key={idx}
                                                            >
                                                                <div className="wpo-p-details-img">
                                                                    <img
                                                                        src={
                                                                            image
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>

                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>Problem</h3>
                                            </div>
                                            <p>
                                                {projectInfo.caseStudy.problem}
                                            </p>
                                        </div>
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>Solution</h3>
                                            </div>
                                            <p>
                                                {projectInfo.caseStudy.solution}
                                            </p>
                                        </div>
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>Obstacles</h3>
                                            </div>
                                            <p>
                                                {
                                                    projectInfo.caseStudy
                                                        .obstacles
                                                }
                                            </p>
                                        </div>
                                        <div className="wpo-service-single-item">
                                            <div className="wpo-service-single-title">
                                                <h3>Learned</h3>
                                            </div>
                                            <p>
                                                {projectInfo.caseStudy.learned}
                                            </p>
                                        </div>
                                        <div className="wpo-service-single-item list-widget">
                                            <div className="wpo-service-single-title">
                                                <h3>
                                                    Technologies / Libraries
                                                </h3>
                                            </div>

                                            <ul>
                                                {projectInfo.tags.map((tag) => (
                                                    <li key={tag}>{tag}</li>
                                                ))}
                                                {projectInfo.libraries.map(
                                                    (library) => (
                                                        <li key={library}>
                                                            {library}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div className="project-modal">
                                            <Button
                                                variant="contained"
                                                onClick={onClose}
                                                className="project-modal-button"
                                            >
                                                Close
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
};
export default ServiceSingle;
