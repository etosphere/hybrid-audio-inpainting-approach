import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ul: ({children}) => (
      <ul style={{ listStyle: "disc", marginTop: "0.5em",
        marginBottom: "0.5em", paddingLeft: "1em"}}>{children}</ul>
    ),
    p: ({children}) => (
      <p style={{ marginBottom: "0.5rem" }}>{children}</p>
    ),
    h2: ({children}) => (
      <h2 className="my-4" style={{ fontSize: "1.75rem" }}>{children}</h2>
    ),
    h3: ({children}) => (
      <h3 className="my-4" style={{ fontSize: "1.5rem" }}>{children}</h3>
    ),
    h4: ({children}) => (
      <h4 className="my-2" style={{ fontSize: "1.25rem" }}>{children}</h4>
    ),
    table: ({children}) => (
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 my-2">{children}</table>
    ),
    thead: ({children}) => (
      <thead
        className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">{children}</thead>
    ),
    tr: ({children}) => (
      <tr className="border-b dark:bg-gray-800 dark:border-gray-700">{children}</tr>
    ),
    th: ({children}) => (
      <th className="py-2">{children}</th>
    ),
    td: ({children}) => (
      <td className="py-1">{children}</td>
    ),
    img: (props) => (
      <Image
        sizes="80vw"
        style={{ width: '80%', height: 'auto', display: 'block', margin: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}