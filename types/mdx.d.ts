declare module '*.mdx' {
  import { ComponentType } from 'react';
  import { MDXComponents } from 'mdx/types';

  const MDXComponent: ComponentType<{ components?: MDXComponents }>;
  export default MDXComponent;
}