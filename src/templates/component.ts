const ComponentTemplate = (name: String, hook = "") => {
  return `import React from 'react';
${
  hook
    ? `import { use${name} } from '../../${hook}/use${name}';`
    : `import { use${name} } from './use${name}';`
}
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
