import { render } from '@testing-library/react';
import Footer from './footer';

test('Render text', () => {
    const { getByText } = render(<Footer/>);
    expect(getByText('Footer')).toBeInTheDocument();
});