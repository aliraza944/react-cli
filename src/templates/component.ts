const ComponentTemplate = (name: String) => {
  return `import React from 'react';

export const ${name} = () => {

  return (
    <div>
    </div>
  );
};
`;
};
const IndexTemplate = (name: String) => {
  return `import ${name} from './${name}';
export default ${name} ;
`;
};
export { ComponentTemplate, IndexTemplate };
