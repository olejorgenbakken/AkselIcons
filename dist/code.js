/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
figma.showUI(__html__, { width: 480, height: 600 });
figma.ui.onmessage = (msg) => {
    if (msg.type === 'create-icon') {
        console.log(msg);
        const nodes = [];
        const icon = figma.createNodeFromSvg(msg.svg);
        icon.name = msg.name;
        icon.resize(msg.size, msg.size);
        figma.currentPage.appendChild(icon);
        nodes.push(icon);
        figma.currentPage.selection = nodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVyxLQUFLO0FBQ2hELFNBQVM7QUFDVDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ha3NlbC1pY29ucy8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQ4MCwgaGVpZ2h0OiA2MDAgfSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlLWljb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgICAgIGNvbnN0IGljb24gPSBmaWdtYS5jcmVhdGVOb2RlRnJvbVN2Zyhtc2cuc3ZnKTtcbiAgICAgICAgaWNvbi5uYW1lID0gbXNnLm5hbWU7XG4gICAgICAgIGljb24ucmVzaXplKG1zZy5zaXplLCBtc2cuc2l6ZSk7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBub2Rlcy5wdXNoKGljb24pO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlcztcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ2NyZWF0ZS1pY29uJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBDcmVhdGVkICR7bXNnLmNvdW50fSBpY29ufWAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==