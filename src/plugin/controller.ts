figma.showUI(__html__, { width: 480, height: 600 })

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-icon') {
    console.log(msg)
    const nodes = [];
    const icon = figma.createNodeFromSvg(msg.svg);
    icon.name = msg.name;
    icon.resize(msg.size, msg.size);
    figma.currentPage.appendChild(icon);
    nodes.push(icon);

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: 'create-icon',
      message: `Created ${msg.count} icon}`,
    });
  }

  figma.closePlugin();
};
