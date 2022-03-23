import { render } from '@testing-library/react';
import Home from './home';

test('Render text', () => {
    const { getByText } = render(<Home/>);
    expect(getByText('Home page')).toBeInTheDocument();
});