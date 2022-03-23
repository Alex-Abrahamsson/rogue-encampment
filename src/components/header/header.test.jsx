import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

test('Render logo', () => {
    const { getByAltText } = render(<BrowserRouter><Header/></BrowserRouter>);
    expect(getByAltText('logo')).toBeInTheDocument();
});