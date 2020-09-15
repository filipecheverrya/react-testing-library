import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './index';

describe('Tests in footer component: ', () => {
  const { getByLabelText } = render(<Footer />);
  const linkElement = getByLabelText('developer-link');
  const imgElement = getByLabelText('developer-img');
  
  test('render link', () => {  
    expect(linkElement).toBeInTheDocument();
  });
  
  test('link must have a title', () => {  
    expect(linkElement).toHaveAttribute('title');
  });
  
  test('links image must have alternative text', () => {  
    expect(imgElement).toHaveAttribute('alt');
  });
});
