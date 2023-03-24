/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
figma.showUI(__html__, { width: 480, height: 600 });
figma.ui.onmessage = (msg) => {
    if (msg.type === 'create-icon') {
        const nodes = [];
        const icon = figma.createNodeFromSvg(msg.svg);
        icon.name = msg.name;
        icon.resize(msg.size, msg.size);
        nodes.push(icon);
        figma.currentPage.appendChild(icon);
        figma.viewport.scrollAndZoomIntoView(nodes);
        figma.ui.postMessage({
            type: 'create-icon',
            message: `Created ${msg.count} icon}`,
        });
    }
    figma.closePlugin();
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxXQUFXLEtBQUs7QUFDaEQsU0FBUztBQUNUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Frc2VsLWljb25zLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDgwLCBoZWlnaHQ6IDYwMCB9KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdjcmVhdGUtaWNvbicpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGZpZ21hLmNyZWF0ZU5vZGVGcm9tU3ZnKG1zZy5zdmcpO1xuICAgICAgICBpY29uLm5hbWUgPSBtc2cubmFtZTtcbiAgICAgICAgaWNvbi5yZXNpemUobXNnLnNpemUsIG1zZy5zaXplKTtcbiAgICAgICAgbm9kZXMucHVzaChpY29uKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdjcmVhdGUtaWNvbicsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQ3JlYXRlZCAke21zZy5jb3VudH0gaWNvbn1gLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=