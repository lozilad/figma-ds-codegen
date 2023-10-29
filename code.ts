figma.showUI(__html__);
figma.ui.resize(500, 500);

const SECTION_DISPLAY = [
  { key: 'controls', width: 400 },
  { key: 'outputs', width: 400 },
];

figma.ui.onmessage = msg => {
  if (msg.type === 'expand') {
    const sections = msg.sections;
    let width = 0;
    console.log('xpand');
    sections.forEach((key: string) => {
      const index = SECTION_DISPLAY.findIndex(x => x.key === key)
      if (index > -1) {
        width += SECTION_DISPLAY[index].width;
      }
    });
    figma.ui.resize(width, 500);
  }



  if (msg.type === 'primitive') {

  }

  if (msg.type === 'semantic') {

  }

  if (msg.type === 'explore') {
    // const x1 = figma.variables.getLocalVariableCollections();
    // const x2 = figma.variables.getLocalVariables();
    // console.log('variables', x1, x2);
    // const { primitiveName, semanticName, dsPrefix } = msg.data;
    // console.log('getPrimitives', getPrimitives(primitiveName));
    // console.log('getSemantics', getSemantics(semanticName));

    const names = figma.variables.getLocalVariableCollections().map(c => c.name);
    figma.ui.postMessage(names);
  }

};


function getPrimitives(userDefinedCollectionName = 'Primitive Collection') {
  return figma.variables.getLocalVariableCollections().filter(c => c.name === userDefinedCollectionName).pop();
}

function getSemantics(userDefinedCollectionName = 'Semantic Collection') {
  return figma.variables.getLocalVariableCollections().filter(c => c.name === userDefinedCollectionName).pop();
}
