import { Fragment, ReactNode } from 'react';

const renderNode = (parent: HTMLElement, node: ReactNode) => {
  if (typeof node === 'object') {
    if ('type' in node) {
      if (typeof node.type === 'string') {
        const element: HTMLElement = document.createElement(node.type);
        const { children, ...attributes } = node.props;
        Object.entries(attributes).forEach(([key, value]) => {
          if (key === 'className') {
            element.className = value;
          } else {
            element.setAttribute(key, value);
          }
        })
        if (children) {
          if (Array.isArray(children)) {
            children.forEach(child => {
              renderNode(element, child);
            })
          } else {
            renderNode(element, children);
          }
        }
        parent.appendChild(element);
      } else if (typeof node.type === 'function') {
        const generatedNode = node.type(node.props);
        renderNode(parent, generatedNode);
      } else if (node.type === Fragment) {
        const { children } = node.props;
        if (children) {
          if (Array.isArray(children)) {
            children.forEach(child => {
              renderNode(parent, child);
            })
          } else {
            renderNode(parent, children)
          }
        }
      }

    }
  } else if (typeof node === 'string') {
    const textNode = document.createTextNode(node);
    parent.appendChild(textNode);
  }

}


export const createRoot = (root: HTMLElement) => ({
  render(node: ReactNode) {
    renderNode(root, node);
  }
})