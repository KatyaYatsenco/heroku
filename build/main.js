/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mainComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structureGenerationProjects__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = setContent;




function setContent(JSONObject, projects) {

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (!project.children.length) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mainComponent__["b" /* injectImages */])(JSONObject[i], project);
        }
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const structureGenerationProjects = function (parent, projectCount) {
    // parent is category name
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
/* harmony export (immutable) */ __webpack_exports__["a"] = structureGenerationProjects;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadComponents_mainComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__design_setDesignContent__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_navBar_scss__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_navBar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__navigation_navBar_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_header_scss__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__navigation_header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_index_scss__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__contacts_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aboutMe_index_scss__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aboutMe_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__aboutMe_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__derevo_index__ = __webpack_require__(29);
/* harmony export (immutable) */ __webpack_exports__["b"] = hideMainContentChildren;
/* harmony export (immutable) */ __webpack_exports__["d"] = hideElement;
/* harmony export (immutable) */ __webpack_exports__["e"] = showElement;
/* harmony export (immutable) */ __webpack_exports__["c"] = hideMainCategories;
/* harmony export (immutable) */ __webpack_exports__["a"] = openMainCategories;














const audio = document.getElementById('mainAudio');
audio.volume = 0.4;

const projects = document.querySelector('.projects'),
      svgContainer = document.querySelector('.svgContainer'),
      derevo = document.getElementById('derevo'),
      // used in another file
galleryMenuCategories = document.querySelector('.galleryMenuCategories'),
      titleGalleryDivision = document.querySelectorAll('.titleGalleryDivision'),
      mainContent = document.querySelector('.mainContent'),
      mainContentChildren = mainContent.children;

function hideMainContentChildren() {
    for (let i = 0; i < mainContentChildren.length; i++) {
        if (mainContentChildren[i].classList.contains('visible')) {
            mainContentChildren[i].classList.remove('visible');
        }
    }
}

function hideElement(element) {
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
    } else {
        element.classList.add('hide');
    }
}

function showElement(element) {
    if (element.classList.contains('hide')) {
        element.classList.remove('hide');
    } else {
        element.classList.add('visible');
    }
}

function hideMainCategories() {

    if (svgContainer.classList.contains('visible') || galleryMenuCategories.classList.contains('visible')) {
        svgContainer.classList.remove('visible');
        galleryMenuCategories.classList.remove('visible');
    }
}

function openMainCategories() {
    document.body.style.backgroundImage = 'url(../image/background_main_page.png)';
    if (svgContainer.classList.contains('hide') || galleryMenuCategories.classList.contains('hide')) {
        svgContainer.classList.remove('hide');
        galleryMenuCategories.classList.remove('hide');
        svgContainer.classList.add('visible');
        galleryMenuCategories.classList.add('visible');
    } else {
        svgContainer.classList.add('visible');
        galleryMenuCategories.classList.add('visible');
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = closeNavBarMenu;
/* harmony export (immutable) */ __webpack_exports__["a"] = changeTextColor;
const menuIcon = document.getElementById('menu_img_box'),
      logo = document.querySelector('.logo_name'),
      navigationLinks = document.querySelectorAll('.navLinks'),
      navMenuImg1 = document.getElementById('menu_img1'),
      navMenuImg2 = document.getElementById('menu_img2'),
      navMenuImg3 = document.getElementById('menu_img3'),
      linkGalleryCategory = document.querySelectorAll('titleGalleryCategory'),
      navBar = document.querySelector('#navList');
/* unused harmony export navBar */

/* unused harmony export linkGalleryCategory */

/* unused harmony export navMenuImg3 */

/* unused harmony export navMenuImg2 */

/* unused harmony export navMenuImg1 */

/* unused harmony export navigationLinks */

/* unused harmony export logo */

/* unused harmony export menuIcon */


//Navigation menu
menuIcon.addEventListener('click', function () {
    const style = window.getComputedStyle(navBar);
    if (style.visibility === 'hidden') {
        navBar.style.visibility = 'visible';
        navMenuImg1.style.animation = 'rotateImg1 0.3s';
        navMenuImg1.style.transform = 'rotate(40deg)';
        navMenuImg1.style.marginTop = '17px';
        navMenuImg2.style.display = 'none';
        navMenuImg3.style.animation = 'rotateImg3 0.3s';
        navMenuImg3.style.transform = 'rotate(-40deg)';
        navMenuImg3.style.marginTop = '-10px';
    } else {
        navBar.style.visibility = 'hidden';
        navMenuImg1.style.animation = 'backRotateImg1 0.3s';
        navMenuImg1.style.transform = 'rotate(0deg)';
        navMenuImg1.style.marginTop = '0';
        const showImg2 = delay(show, 200);
        showImg2(navMenuImg2);

        navMenuImg3.style.animation = 'backRotateImg3 0.3s';
        navMenuImg3.style.transform = 'rotate(0deg)';
        navMenuImg3.style.marginTop = '0';
    }
});

function show(navMenuImg2) {
    navMenuImg2.style.display = 'flex';
}
function delay(show, ms) {

    return function () {
        const self = this;
        const savedArgs = arguments;

        setTimeout(function () {
            show.apply(self, savedArgs);
        }, ms);
    };
}

/**
 * Function closeNavBarMenu, when navBar open and pages switch
 */
function closeNavBarMenu() {
    if (navBar.style.visibility === 'visible') {
        menuIcon.click();
    }
}

const titleGalleryDivision = document.querySelectorAll('.titleGalleryDivision');

function changeTextColor(color) {
    logo.style.color = color;
    titleGalleryDivision.forEach(function (elem) {
        elem.style.color = color;
    });
    navigationLinks.forEach(function (elem) {
        elem.style.color = color;
    });
    linkGalleryCategory.forEach(function (elem) {
        elem.style.color = color;
    });

    if (color === 'white') {
        navMenuImg1.style.backgroundImage = 'url(../image/menu_img_white.png)';
        navMenuImg2.style.backgroundImage = 'url(../image/menu_img_white.png)';
        navMenuImg3.style.backgroundImage = 'url(../image/menu_img_white.png)';
    } else if (color === 'black') {
        navMenuImg1.style.backgroundImage = 'url(../image/menu_img_black.png)';
        navMenuImg2.style.backgroundImage = 'url(../image/menu_img_black.png)';
        navMenuImg3.style.backgroundImage = 'url(../image/menu_img_black.png)';
    }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_parametersToParseData__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_scss__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__project_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_scss__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__projects_scss__);








const projectNavigation = {
    open(cols, projectCol, projects, project) {

        oneCol(cols, projectCol);
        findImgs(projects, 'prevImg', __WEBPACK_IMPORTED_MODULE_0__main__["d" /* hideElement */]);

        findImgs(project, 'bigImg', __WEBPACK_IMPORTED_MODULE_0__main__["e" /* showElement */]);
    },

    close(cols, projectCol, projects, project) {

        const img = project.querySelector('.bigImg');

        threeCol(cols);

        findImgs(projects, 'prevImg', __WEBPACK_IMPORTED_MODULE_0__main__["e" /* showElement */]);

        findImgs(project, 'bigImg', __WEBPACK_IMPORTED_MODULE_0__main__["d" /* hideElement */]);
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = projectNavigation;


const mainContent = document.querySelector('.mainContent');

mainContent.addEventListener('click', function (event) {
    const targetElement = event.target,
          targetImg = targetElement.parentNode; //have class 'smallImg' or 'bigImg'


    if (targetImg.classList.contains('prevImg')) {
        const project = targetImg.parentNode,
              projectId = project.id,
              prevImg = project.querySelector('.prevImg'),
              projectCol = project.parentNode,
              projects = projectCol.parentNode,
              cols = projects.querySelectorAll('.projectsCol');

        const projectParameters = {
            cols: cols,
            projectCol: projectCol,
            projects: projects
        };
        projects.scrollTop = 0;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__states_parametersToParseData__["a" /* parametersToParseData */])(location.pathname, 'big', projectParameters);

        location.hash = projectId; // Add window location hash with number this project
    } else if (targetImg.classList.contains('bigImg')) {
        const project = targetImg.parentNode,
              prevImg = project.querySelector('.prevImg'),
              projectCol = project.parentNode,
              projects = projectCol.parentNode,
              cols = projects.querySelectorAll('.projectsCol'),
              data = window.location.pathname;

        projects.scrollTop = 0;

        projectNavigation.close(cols, projectCol, projects, project, targetImg);
        history.replaceState(data.slice(1), null, data);
    }
});

function oneCol(cols, projectCol) {
    cols.prototype = Object.create(Array.prototype);
    cols.forEach(function (elem) {
        if (projectCol === elem) {
            elem.style.width = '98%';

            const prevImgs = elem.querySelectorAll('.prevImg');
            for (let i = 0; i < prevImgs.length; i++) {
                if (!prevImgs[i].classList.contains('hide')) {
                    prevImgs[i].classList.add('hide');
                }
            }
        } else {
            elem.style.width = 0;
            elem.style.margin = 0;
        }
    });
}

function threeCol(cols) {
    cols.forEach(function (elem) {
        elem.style.width = '30%';
        elem.style.margin = '20px 16px';
    });
}

function findImgs(categoryProjects, typeImg, operation) {

    const desiredTypeImgs = categoryProjects.querySelectorAll('.' + typeImg);

    for (let i = 0; i < desiredTypeImgs.length; i++) {
        const desireTypeImg = desiredTypeImgs[i];
        operation(desireTypeImg);
    }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = changeDerevoColor;
const derevo = document.getElementById('derevo'); // used in another file


const body = document.body;
/* harmony export (immutable) */ __webpack_exports__["a"] = body;


function changeDerevoColor(color) {

    try {
        const str0 = derevo.querySelectorAll('.str0'),
              str1 = derevo.querySelectorAll('.str1');

        str0.forEach(function (str) {
            str.style.fill = color;
        });
        str1.forEach(function (str) {
            str.style.stroke = color;
        });
    } catch (e) {
        console.log(e);
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addImg__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setContent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["b"] = injectImages;
/* harmony export (immutable) */ __webpack_exports__["a"] = parseData;







function injectImages(project, parent) {
    //Rename function
    const id = project['id'];
    const smallImg = project['small'];
    const bigImgs = project['big'];

    parent.setAttribute('id', id);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addImg__["a" /* addImg */])('smallImg', smallImg, parent);

    if (bigImgs) {
        bigImgs.forEach(function (bigImg) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addImg__["a" /* addImg */])('bigImg', bigImg, parent);
        });
    }
}

function parseData(imgSize, loadData, path, projectParameters) {
    let JSONObject;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            JSONObject = JSON.parse(xhr.responseText);

            if (imgSize === 'small') {

                const jsonObject = JSON.parse(xhr.responseText).projects;
                const projectsCount = jsonObject.length;

                const smallImgs = [];
                getData(jsonObject, 'small', smallImgs);

                loadData(smallImgs, projectsCount);
            } else if (imgSize === 'big') {
                const jsonObject = JSON.parse(xhr.responseText).projects;

                const projectId = window.location.hash.substr(1);
                const bigImgs = [];

                getData(jsonObject, 'big', bigImgs, projectId);

                bigImgs.forEach(obj => {

                    if (obj.id === projectId) {

                        loadData(obj);

                        const parent = document.getElementById(window.location.hash.substr(1));
                        const bigImgs = obj.big;

                        try {
                            bigImgs.forEach(function (bigImg) {
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addImg__["a" /* addImg */])('bigImg', bigImg, parent);
                            });
                        } catch (e) {
                            console.log(e);
                        }

                        __WEBPACK_IMPORTED_MODULE_2__projects_projects__["a" /* projectNavigation */].open(projectParameters.cols, projectParameters.projectCol, projectParameters.projects, parent);
                    }
                });
            } else if (imgSize === 'video') {
                const jsonObject = JSON.parse(xhr.responseText).projects;

                const projectId = window.location.hash.substr(1);
                let video;
                getData(jsonObject, 'video', video, projectId);
                if (video.id === projectId) {
                    loadData(video);

                    const parent = document.getElementById(window.location.hash.substr(1));
                    const video = video.video;

                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addImg__["a" /* addImg */])('bigImg', video, parent);

                    __WEBPACK_IMPORTED_MODULE_2__projects_projects__["a" /* projectNavigation */].open(projectParameters.cols, projectParameters.projectCol, projectParameters.projects, parent);
                }
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function getData(jsonObject, element, addTo) {
    for (let i = 0; i < jsonObject.length; i++) {
        let obj = {};
        obj['id'] = jsonObject[i].id;

        if (element === 'small') {
            obj['small'] = jsonObject[i].small;
        } else if (element === 'big') {
            obj['big'] = jsonObject[i].big;
        } else if (element === 'video') {
            obj['video'] = jsonObject[i].video;
        }
        addTo[i] = obj;
    }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomColor;
function getRandomColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blendMode__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__derevoColor__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__epilepsy__ = __webpack_require__(14);
/* harmony export (immutable) */ __webpack_exports__["a"] = stopEpilepsy;




function stopEpilepsy(time) {
    setTimeout(function () {

        clearInterval(__WEBPACK_IMPORTED_MODULE_2__epilepsy__["a" /* epilepsy */]);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blendMode__["a" /* bodyBlendMode */])();
        __WEBPACK_IMPORTED_MODULE_1__derevoColor__["a" /* body */].style.backgroundColor = 'black';
        __WEBPACK_IMPORTED_MODULE_1__derevoColor__["a" /* body */].style.backgroundBlendMode = 'normal';
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__derevoColor__["b" /* changeDerevoColor */])('#fff');
    }, time);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = setDesignContent;



function setDesignContent(JSONObject, projectsCount) {

    const categoryDesign = document.getElementById('categoryDesign');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__["a" /* structureGenerationProjects */])(categoryDesign, projectsCount);

    const projectsNode = categoryDesign.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stateConfig__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_navBar_animationNavBar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__design_setDesignContent__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__painting_setPaintingContent__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphic_setGraphicContent__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__digitalArt_setDigitalArtContent__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__others_setOthersContent__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__3d_set3dContent__ = __webpack_require__(12);
/* harmony export (immutable) */ __webpack_exports__["a"] = paramToSwitchPageContents;














const body = document.body;

function paramToSwitchPageContents(currentPath) {
    switch (currentPath) {

        case '/':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animation_navBar_animationNavBar__["a" /* changeTextColor */])('white');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["a" /* openMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["b" /* hideMainContentChildren */])();
            body.style.backgroundImage = 'url(../image/backgrounds/main.jpg)';
            break;

        case '/design':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])('small', __WEBPACK_IMPORTED_MODULE_5__design_setDesignContent__["a" /* setDesignContent */], "json_files/design.json");
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].design.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].design.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].design.bg);

            break;

        case '/painting':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].painting.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].painting.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].painting.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])('small', __WEBPACK_IMPORTED_MODULE_6__painting_setPaintingContent__["a" /* setPaintingContent */], "json_files/painting.json");
            break;

        case '/graphic':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].graphic.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].graphic.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].graphic.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])('small', __WEBPACK_IMPORTED_MODULE_7__graphic_setGraphicContent__["a" /* setGraphicContent */], "json_files/graphic.json");
            break;

        case '/digitalArt':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].digitalArt.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].digitalArt.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].digitalArt.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])('small', __WEBPACK_IMPORTED_MODULE_8__digitalArt_setDigitalArtContent__["a" /* setDigitalArtContent */], "json_files/digital_art.json");
            break;

        case '/others':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].others.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].others.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].others.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])('small', __WEBPACK_IMPORTED_MODULE_9__others_setOthersContent__["a" /* setOthersContent */], "json_files/others.json");
            break;

        case '/3d':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */]._3d.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */]._3d.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */]._3d.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])('small', __WEBPACK_IMPORTED_MODULE_10__3d_set3dContent__["a" /* set3dContent */], "json_files/3d.json");
            break;

        case '/aboutMe':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["b" /* paramToSwitchOtherContent */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].aboutMe.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].aboutMe.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].aboutMe.bg);
            break;

        case '/contacts':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["b" /* paramToSwitchOtherContent */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].contacts.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].contacts.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].contacts.bg);
            break;
    }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navBar_animationNavBar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__onLoadPage_derevoColor__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_scss__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__logo_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__derevo_scss__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__derevo_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__derevo_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categoryLinks_index_scss__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categoryLinks_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__categoryLinks_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categoryLinks_3d_scss__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categoryLinks_3d_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__categoryLinks_3d_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categoryLinks_design_scss__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categoryLinks_design_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__categoryLinks_design_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categoryLinks_digitalArt_scss__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categoryLinks_digitalArt_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__categoryLinks_digitalArt_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categoryLinks_graphic_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categoryLinks_graphic_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__categoryLinks_graphic_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categoryLinks_others_scss__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categoryLinks_others_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__categoryLinks_others_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__categoryLinks_painting_scss__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__categoryLinks_painting_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__categoryLinks_painting_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__randomAnimation_index__ = __webpack_require__(27);

















/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony export (immutable) */ __webpack_exports__["a"] = set3dContent;





function set3dContent(JSONObject, projectsCount) {

    const category3d = document.getElementById('category3d');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__["a" /* structureGenerationProjects */])(category3d, projectsCount);

    const projectsNode = category3d.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__randomColors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__derevoColor__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = bodyBlendMode;



const blendModes = ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];

function bodyBlendMode() {
    const mode = blendModes[Math.floor(Math.random() * blendModes.length)];
    __WEBPACK_IMPORTED_MODULE_1__derevoColor__["a" /* body */].style.backgroundBlendMode = mode;
    __WEBPACK_IMPORTED_MODULE_1__derevoColor__["a" /* body */].style.backgroundColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__randomColors__["a" /* getRandomColor */])();
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__derevoColor__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blendMode__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__randomColors__ = __webpack_require__(7);




const epilepsy = setInterval(() => {

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__derevoColor__["b" /* changeDerevoColor */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__randomColors__["a" /* getRandomColor */])());
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__blendMode__["a" /* bodyBlendMode */])();
}, 100);
/* harmony export (immutable) */ __webpack_exports__["a"] = epilepsy;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = stopMainPageAnimation;
/* harmony export (immutable) */ __webpack_exports__["a"] = runMainPageAnimation;
function stopMainPageAnimation() {
    const derevo = document.getElementById('derevo'),
          gallerySubcategoryDesign = document.querySelector('#design'),
          gallerySubcategoryPainting = document.querySelector('#painting'),
          gallerySubcategoryGraphic = document.querySelector('#graphic'),
          gallerySubcategoryDigitalArt = document.querySelector('#digitalArt'),
          gallerySubcategoryOthers = document.querySelector('#others'),
          gallerySubcategory3d = document.querySelector('#_3d'),
          logoName = document.querySelector('.logo_name');

    derevo.style.animation = 'none';
    gallerySubcategoryDesign.style.animation = 'none';
    gallerySubcategoryPainting.style.animation = 'none';
    gallerySubcategoryGraphic.style.animation = 'none';
    gallerySubcategoryDigitalArt.style.animation = 'none';
    gallerySubcategoryOthers.style.animation = 'none';
    gallerySubcategory3d.style.animation = 'none';
    logoName.style.animation = 'none';
}

function runMainPageAnimation() {
    const derevo = document.getElementById('derevo'),
          gallerySubcategoryDesign = document.querySelector('#design'),
          gallerySubcategoryPainting = document.querySelector('#painting'),
          gallerySubcategoryGraphic = document.querySelector('#graphic'),
          gallerySubcategoryDigitalArt = document.querySelector('#digitalArt'),
          gallerySubcategoryOthers = document.querySelector('#others'),
          gallerySubcategory3d = document.querySelector('#_3d'),
          logoName = document.querySelector('.logo_name');

    derevo.style.animation = 'derevoZoom 2s';
    gallerySubcategoryDesign.style.animation = 'moveDesignLink 4.1s';
    gallerySubcategoryPainting.style.animation = 'movePaintingLink 3.3s';
    gallerySubcategoryGraphic.style.animation = 'moveGraphicLink 4.4s';
    gallerySubcategoryDigitalArt.style.animation = 'moveDigitalArtLink 4.2s';
    gallerySubcategoryOthers.style.animation = 'moveOthersLink 5s';
    gallerySubcategory3d.style.animation = 'move3dLink 4.7s';
    logoName.style.animation = 'appearanceLogo 4s';
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony export (immutable) */ __webpack_exports__["a"] = setDigitalArtContent;





function setDigitalArtContent(JSONObject, projectsCount) {

    const categoryDigitalArt = document.getElementById('categoryDigitalArt');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__["a" /* structureGenerationProjects */])(categoryDigitalArt, projectsCount);

    const projectsNode = categoryDigitalArt.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony export (immutable) */ __webpack_exports__["a"] = setGraphicContent;





function setGraphicContent(JSONObject, projectsCount) {

    const categoryGraphic = document.getElementById('categoryGraphic');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__["a" /* structureGenerationProjects */])(categoryGraphic, projectsCount);

    const projectsNode = categoryGraphic.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addImg;
function addImg(className, elementValue, parent) {
    // Function create img covers

    const img = document.createElement('IMG');

    img.setAttribute('src', elementValue);

    const projectContainer = document.createElement('DIV');

    const video = document.createElement('VIDEO');
    video.setAttribute('src', elementValue);

    switch (className) {
        case 'smallImg':
            projectContainer.classList.add('prevImg');
            projectContainer.appendChild(img);
            break;
        case 'bigImg':
            projectContainer.classList.add('bigImg');
            projectContainer.appendChild(img);

            break;
        case 'video':
            projectContainer.classList.add('gorpinichVideo');
            projectContainer.appendChild(video);

            break;
    }
    parent.appendChild(projectContainer);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony export (immutable) */ __webpack_exports__["a"] = setOthersContent;





function setOthersContent(JSONObject, projectsCount) {

    const categoryOthers = document.getElementById('categoryOthers');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__["a" /* structureGenerationProjects */])(categoryOthers, projectsCount);

    const projectsNode = categoryOthers.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony export (immutable) */ __webpack_exports__["a"] = setPaintingContent;





function setPaintingContent(JSONObject, projectsCount) {

    const categoryPainting = document.getElementById('categoryPainting');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__loadComponents_structureGenerationProjects__["a" /* structureGenerationProjects */])(categoryPainting, projectsCount);

    const projectsNode = categoryPainting.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export categoryDesign */
/* unused harmony export categoryPainting */
/* unused harmony export categoryGraphic */
/* unused harmony export categoryDigitalArt */
/* unused harmony export categoryOthers */
/* unused harmony export category3d */
/* unused harmony export categoryAboutMe */
/* unused harmony export categoryContacts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoriesPage; });
const categoryDesign = document.getElementById('categoryDesign'),
      categoryPainting = document.getElementById('categoryPainting'),
      categoryGraphic = document.getElementById('categoryGraphic'),
      categoryDigitalArt = document.getElementById('categoryDigitalArt'),
      categoryOthers = document.getElementById('categoryOthers'),
      category3d = document.getElementById('category3d'),
      categoryAboutMe = document.getElementById('aboutMeInfo'),
      categoryContacts = document.getElementById('contactsInfo');

const categoriesPage = [categoryPainting, categoryDesign, categoryGraphic, categoryDigitalArt, categoryOthers, category3d, categoryAboutMe, categoryContacts];



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_navBar_animationNavBar__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = paramToSwitchCategoryContents;
/* harmony export (immutable) */ __webpack_exports__["b"] = paramToSwitchOtherContent;





const body = document.body;

function paramToSwitchCategoryContents(textColor, categoriesPageIndex, bodyBgImg) {

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animation_navBar_animationNavBar__["a" /* changeTextColor */])(textColor);
    __WEBPACK_IMPORTED_MODULE_1__categories__["a" /* categoriesPage */][categoriesPageIndex].classList.add('visible');
    body.style.backgroundImage = bodyBgImg;
    const logoName = document.querySelector('.logo_name'),
          menuIcon = document.getElementById('menu_img_box');
    logoName.style.animation = 'none';
    menuIcon.style.animation = 'none';
}

function paramToSwitchOtherContent(textColor, categoriesPageIndex, bodyBgImg) {

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animation_navBar_animationNavBar__["a" /* changeTextColor */])(textColor);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["b" /* hideMainContentChildren */])();
    __WEBPACK_IMPORTED_MODULE_1__categories__["a" /* categoriesPage */][categoriesPageIndex].classList.add('visible');
    body.style.backgroundImage = bodyBgImg;

    const logoName = document.querySelector('.logo_name'),
          menuIcon = document.getElementById('menu_img_box');
    logoName.style.animation = 'none';
    menuIcon.style.animation = 'none';
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__design_setDesignContent__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__3d_set3dContent__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__digitalArt_setDigitalArtContent__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__painting_setPaintingContent__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__others_setOthersContent__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphic_setGraphicContent__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loadComponents_mainComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__animation_onLoadPage_stopEpilepsy__ = __webpack_require__(8);
/* harmony export (immutable) */ __webpack_exports__["a"] = parametersToParseData;











function parametersToParseData(expression, typeImg, projectParameters) {

    switch (expression) {

        case "/design":
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__loadComponents_mainComponent__["a" /* parseData */])(typeImg, __WEBPACK_IMPORTED_MODULE_0__design_setDesignContent__["a" /* setDesignContent */], "json_files/design.json", projectParameters);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__animation_onLoadPage_stopEpilepsy__["a" /* stopEpilepsy */])(0);
            break;

        case "/3d":
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__loadComponents_mainComponent__["a" /* parseData */])(typeImg, __WEBPACK_IMPORTED_MODULE_1__3d_set3dContent__["a" /* set3dContent */], "json_files/3d.json", projectParameters);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__animation_onLoadPage_stopEpilepsy__["a" /* stopEpilepsy */])(0);
            break;

        case "/digitalArt":
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__loadComponents_mainComponent__["a" /* parseData */])(typeImg, __WEBPACK_IMPORTED_MODULE_2__digitalArt_setDigitalArtContent__["a" /* setDigitalArtContent */], "json_files/digital_art.json", projectParameters);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__animation_onLoadPage_stopEpilepsy__["a" /* stopEpilepsy */])(0);
            break;

        case "/painting":
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__loadComponents_mainComponent__["a" /* parseData */])(typeImg, __WEBPACK_IMPORTED_MODULE_3__painting_setPaintingContent__["a" /* setPaintingContent */], "json_files/painting.json", projectParameters);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__animation_onLoadPage_stopEpilepsy__["a" /* stopEpilepsy */])(0);
            break;

        case "/others":
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__loadComponents_mainComponent__["a" /* parseData */])(typeImg, __WEBPACK_IMPORTED_MODULE_4__others_setOthersContent__["a" /* setOthersContent */], "json_files/others.json", projectParameters);
            // parseData("video", setOthersContent, "json_files/others.json", projectParameters);

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__animation_onLoadPage_stopEpilepsy__["a" /* stopEpilepsy */])(0);
            break;

        case "/graphic":
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__loadComponents_mainComponent__["a" /* parseData */])(typeImg, __WEBPACK_IMPORTED_MODULE_5__graphic_setGraphicContent__["a" /* setGraphicContent */], "json_files/graphic.json", projectParameters);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__animation_onLoadPage_stopEpilepsy__["a" /* stopEpilepsy */])(0);
            break;
        case "/contacts":
        case "/aboutMe":
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__animation_onLoadPage_stopEpilepsy__["a" /* stopEpilepsy */])(0);
            break;
    }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const stateConfig = {
    'design': {
        color: 'black',
        index: 1,
        bg: 'url(../../image/backgrounds/gallery_design.jpg)'
    },
    'painting': {
        color: 'white',
        index: 0,
        bg: 'url(../../image/backgrounds/main.jpg)'
    },
    'graphic': {
        color: 'white',
        index: 2,
        bg: 'url(../../image/backgrounds/main.jpg)'
    },
    'digitalArt': {
        color: 'white',
        index: 3,
        bg: 'url(../../image/backgrounds/main.jpg)'
    },
    'others': {
        color: 'white',
        index: 4,
        bg: 'url(../../image/backgrounds/gallery_others.jpg)'
    },
    '_3d': {
        color: 'white',
        index: 5,
        bg: 'url(../../image/backgrounds/main.jpg)'
    },
    'aboutMe': {
        color: 'white',
        index: 6,
        bg: 'url(../../image/backgrounds/about_me.jpg)'
    },
    'contacts': {
        color: 'white',
        index: 7,
        bg: 'url(../../image/backgrounds/main.jpg)'
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = stateConfig;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__historyApi__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__openProject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paramToSwitchCategoryContents__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paramToSwitchPageContents__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stateConfig__ = __webpack_require__(24);







/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__links__ = __webpack_require__(28);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__onLoadPage_randomColors__ = __webpack_require__(7);


const svgContainer = document.querySelector('.svgContainer');
svgContainer.style.overflow = 'hidden !important';

function randomLinksAnimation(link) {
    link.style.color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__onLoadPage_randomColors__["a" /* getRandomColor */])();
}

const allLinks = [];

const linksGalleryCategories = document.querySelectorAll('.linkGalleryCategory');
linksGalleryCategories.forEach(elem => allLinks.push(elem));

const logo = document.querySelector('.logo_name');
allLinks.push(logo);

const navLinks = document.querySelectorAll('.navLinks');
navLinks.forEach(elem => allLinks.push(elem));

const titleCategories = document.querySelectorAll('.titleCategories');
titleCategories.forEach(elem => allLinks.push(elem));

const derevo = document.getElementById('derevo');

setInterval(() => {
    derevo.style.animation = Math.floor(Math.random() * 2) + ' ' + (Math.floor(Math.random() * 3) + "s");
}, Math.floor(Math.random() * 4000));

const digitalArtLink = document.getElementById('digitalArt'),
      painting = document.getElementById('painting'),
      graphic = document.getElementById('graphic'),
      _3d = document.getElementById('_3d'),
      others = document.getElementById('others'),
      design = document.getElementById('design');
const categoryLinks = [];
categoryLinks.push(digitalArtLink, painting, graphic, _3d, others, design);

setTimeout(() => {
    setInterval(animateCategoryLink, Math.floor(Math.random() * 3000));
}, 5000);

setTimeout(() => {
    setInterval(function () {
        derevo.style.animation = 'derevoAnimation' + Math.floor(Math.random() * 8) + ' 0.' + Math.floor(Math.random() * 9) + 's';
    }, Math.floor(Math.random() * 5000));
}, 5000);

// setInterval(function () {
//     let link = allLinks[Math.floor(Math.random() * 10)];
//     let linkColor = allLinks[Math.floor(Math.random() * 10)].style.color;
//     randomLinksAnimation(link);
//
//     setTimeout(function () {
//         link.style.color = linkColor;
//     },500)
//
// }, Math.floor(Math.random() * 6000));


function animateCategoryLink() {
    const link = categoryLinks[Math.floor(Math.random() * 6)];
    switch (link.id) {
        case 'digitalArt':
            link.style.animation = 'moveDigitalArtLink' + Math.floor(Math.random() * 2) + ' 0.' + Math.floor(Math.random() * 3) + 's';
            break;
        case 'painting':
            link.style.animation = 'movePaintingLink' + Math.floor(Math.random() * 2) + ' 0.' + Math.floor(Math.random() * 3) + 's';
            break;
        case 'graphic':
            link.style.animation = 'moveGraphicLink' + Math.floor(Math.random() * 2) + ' 0.' + Math.floor(Math.random() * 3) + 's';
            break;
        case '_3d':
            link.style.animation = 'move3dLink' + Math.floor(Math.random() * 2) + ' 0.' + Math.floor(Math.random() * 3) + 's';
            break;
        case 'others':
            link.style.animation = 'moveOthersLink' + Math.floor(Math.random() * 2) + ' 0.' + Math.floor(Math.random() * 3) + 's';
            break;
        case 'design':
            link.style.animation = 'moveDesignLink' + Math.floor(Math.random() * 2) + ' 0.' + Math.floor(Math.random() * 3) + 's';
            break;
    }
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_navBar_animationNavBar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paramToSwitchPageContents__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_onLoadPage_epilepsy__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_onLoadPage_stopEpilepsy__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_onLoadPage_mainPage__ = __webpack_require__(15);












if (history.state === null && window.location.pathname === '/') {
    history.pushState('home', null, '/');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["b" /* hideMainContentChildren */])();
    __WEBPACK_IMPORTED_MODULE_4__animation_onLoadPage_epilepsy__["a" /* epilepsy */];
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__animation_onLoadPage_mainPage__["a" /* runMainPageAnimation */])();
}

document.querySelector('body').addEventListener('click', function (event) {

    const target = event.target,
          data = event.target.id;

    switch (data) {
        case 'home':
        case 'home_page':
            history.pushState('home', null, '/');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__animation_onLoadPage_mainPage__["b" /* stopMainPageAnimation */])();
            break;

        case 'aboutMe':
        case 'contacts':
        case 'design':
        case 'painting':
        case 'graphic':
        case 'digitalArt':
        case 'others':
            history.pushState(data, null, data);
            break;

        case '_3d':
            history.pushState(data, null, '3d');
            break;
    }
});

const eventCheckStateChanges = function (type) {
    const orig = history[type];
    return function () {
        const rv = orig.apply(this, arguments);
        const event = new Event(type);
        event.arguments = arguments;
        window.dispatchEvent(event);
        return rv;
    };
};

window.onpopstate = function (event) {
    const currentPath = window.location.pathname;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_navBar_animationNavBar__["b" /* closeNavBarMenu */])();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__paramToSwitchPageContents__["a" /* paramToSwitchPageContents */])(currentPath);
};

history.pushState = eventCheckStateChanges('pushState');

window.addEventListener('pushState', function (e) {
    const currentPath = window.location.pathname;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_navBar_animationNavBar__["b" /* closeNavBarMenu */])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__paramToSwitchPageContents__["a" /* paramToSwitchPageContents */])(currentPath);
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_navBar_animationNavBar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paramToSwitchPageContents__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parametersToParseData__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_onLoadPage_stopEpilepsy__ = __webpack_require__(8);








window.onload = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animation_onLoadPage_stopEpilepsy__["a" /* stopEpilepsy */])(3500);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animation_navBar_animationNavBar__["b" /* closeNavBarMenu */])();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__parametersToParseData__["a" /* parametersToParseData */])(window.location.pathname, 'small');

    if (location.hash === '') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchPageContents__["a" /* paramToSwitchPageContents */])(window.location.pathname);
    } else if (location.hash !== '') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchPageContents__["a" /* paramToSwitchPageContents */])(window.location.pathname);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animation_onLoadPage_stopEpilepsy__["a" /* stopEpilepsy */])(0);
        const projectNumber = window.location.hash.slice(3);

        switch (window.location.pathname) {

            case "/design":
                const categoryDesign = document.getElementById('categoryDesign');
                const designProjects = categoryDesign.querySelector('.projects');
                openProjectByHash(projectNumber, designProjects);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animation_navBar_animationNavBar__["a" /* changeTextColor */])('black');
                break;

            case "/3d":
                const category3d = document.getElementById('category3d');
                const _3dProjects = category3d.querySelector('.projects');
                try {
                    openProjectByHash(projectNumber, _3dProjects);
                } catch (error) {
                    console.log(error);
                }
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animation_navBar_animationNavBar__["a" /* changeTextColor */])('white');
                break;

            case "/digitalArt":
                const categoryDigitalArt = document.getElementById('categoryDigitalArt');
                const digitalArtProjects = categoryDigitalArt.querySelector('.projects');
                openProjectByHash(projectNumber, digitalArtProjects);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animation_navBar_animationNavBar__["a" /* changeTextColor */])('white');
                break;

            case "/painting":
                const categoryPainting = document.getElementById('categoryPainting');
                const paintingProjects = categoryPainting.querySelector('.projects');
                openProjectByHash(projectNumber, paintingProjects);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animation_navBar_animationNavBar__["a" /* changeTextColor */])('white');
                break;

            case "/others":
                const categoryOthers = document.getElementById('categoryOthers');
                const othersProjects = categoryOthers.querySelector('.projects');
                openProjectByHash(projectNumber, othersProjects);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animation_navBar_animationNavBar__["a" /* changeTextColor */])('white');
                break;

            case "/graphic":
                const categoryGraphic = document.getElementById('categoryGraphic');
                const graphicProjects = categoryGraphic.querySelector('.projects');
                openProjectByHash(projectNumber, graphicProjects);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animation_navBar_animationNavBar__["a" /* changeTextColor */])('white');
                break;
        }
    }
};

function openProjectByHash(projectNumber, allProjects) {
    history.pushState('', null, window.location.pathname);
    const figures = allProjects.getElementsByTagName('FIGURE');
    // const project = allProjects.getElementsByClassName('project'),

    //     targetProject = project.item(projectNumber - 1);
    //
    // const projectCol = targetProject.parentNode,
    //     projects = projectCol.parentNode,
    //     cols = projects.querySelectorAll('.projectsCol');
    //
    // const projectParameters = {
    //     cols: cols,
    //     projectCol: projectCol,
    //     projects: projects
    // };
    //
    // parametersToParseData(location.pathname, 'big', projectParameters)
}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_main__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_projects_projects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_animation_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_states_index__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);










/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map