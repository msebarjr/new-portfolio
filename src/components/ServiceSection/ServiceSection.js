import React, { useState } from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import PROJECTS from "../../api/project";

import ServiceSingle from "../ServiceSingle";
import FilteredButton from "../FilteredButton";
import ProjectCard from "../ProjectCard/ProjectCard";

const ServiceSection = (props) => {
    const [open, setOpen] = useState(false);
    const [selectedProjectInfo, setSelectedProjectInfo] = useState({});

    function handleClose() {
        setOpen(false);
    }

    const handleClickOpen = (selectedProject) => {
        setOpen(true);
        setSelectedProjectInfo(selectedProject);
    };

    const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "React", "React Native", "Next JS"];

    const handleFilter = (tag) => {
        setActiveFilter(tag);

        tag === "All"
            ? setFilteredProjects(PROJECTS)
            : setFilteredProjects(
                  PROJECTS.filter((project) => project.tags.includes(tag))
              );
    };

    return (
        <div
            className={`wpo-service-area section-padding ${props.sClass}`}
            id="service"
        >
            <div className="container">
                <SectionTitle Title={"Recent Work"} />
                <div className="filter-button-container">
                    {filters.map((tag) => (
                        <FilteredButton
                            key={tag}
                            onClick={handleFilter.bind(this, tag)}
                            text={tag}
                            cname={activeFilter === tag && "active-button"}
                        />
                    ))}
                </div>
                <div className="projects-container">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            src={project.src}
                            tags={project.tags}
                            githubLink={project.github}
                            handleClickOpen={handleClickOpen.bind(
                                this,
                                project
                            )}
                        />
                    ))}
                </div>
            </div>
            {open && (
                <ServiceSingle
                    open={open}
                    onClose={handleClose}
                    projectInfo={selectedProjectInfo}
                />
            )}
        </div>
    );
};

export default ServiceSection;
