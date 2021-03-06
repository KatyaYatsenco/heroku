export const structureGenerationProjects = function (parent, projectCount) { // parent is category name
    const col1 = parent.querySelector('.projectsCol1');
    const col2 = parent.querySelector('.projectsCol2');
    const col3 = parent.querySelector('.projectsCol3');

    if (!col1.children.length && !col2.children.length && !col3.children.length) {

        for (let i = 0; i < Math.floor(projectCount / 3); i++) {
            const project = document.createElement('figure');
            project.classList.add('project');
            col1.appendChild(project);
        }

        for (let i = 0; i < projectCount / 3; i++) {
            const project = document.createElement('figure');
            project.classList.add('project');
            col2.appendChild(project);
        }

        const projectsCountCol3 = projectCount - parent.getElementsByClassName('project').length;

        for (let i = 0; i < projectsCountCol3; i++) {
            const project = document.createElement('figure');
            project.classList.add('project');
            col3.appendChild(project);
        }
    }
};
