const ComponentTemplate = (
  name: String,
  hook?: string | boolean | undefined
) => {
  let hookImport = "";
  if (typeof hook === "string") {
    hookImport = `import { use${name} } from '../../${hook}/use${name}';`;
  }
  if (typeof hook === "boolean") {
    hookImport = `import { use${name} } from './use${name}';`;
  }

  return `import React from 'react';
${hookImport}
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
