const customHook = (name: string) => {
  return `import { useState } from 'react';
export const use${name} = () => {
    return {
        
    }
};
`;
};

export { customHook };
