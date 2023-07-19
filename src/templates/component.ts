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
export { ComponentTemplate };
