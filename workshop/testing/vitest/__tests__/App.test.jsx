import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/App';

describe('<App />', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should have the correct header', () => {
    const expectedText = 'Vite + React';

    expect(screen.getByRole('heading')).toHaveTextContent(expectedText);
  });

  it('should increment the counter when clicked', () => {
    // arrange
    const button = screen.getByRole('button');
    const expectedResult = 'count is 1';

    // act
    fireEvent.click(button);

    // assert
    expect(button).toHaveTextContent(expectedResult);
  });

  it('should display both images', () => {
    // arrange
    const viteImg = screen.getByAltText('Vite logo');
    const reactImg = screen.getByAltText('React logo');

    // assert
    expect(viteImg).toBeInTheDocument();
    expect(reactImg).toBeInTheDocument();
  });
});
