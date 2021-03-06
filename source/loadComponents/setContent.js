import {injectImages} from './mainComponent';

import './structureGenerationProjects';

export function setContent(JSONObject, projects) {

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (!project.children.length) {
            injectImages(JSONObject[i], project);
        }
    }
}


