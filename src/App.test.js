import { render, screen } from '@testing-library/react';
import App from './App';

describe('Portfolio App', () => {
  test('renders footer availability link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Available for Internships/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders hero name', () => {
    render(<App />);
    const nameElement = screen.getByText(/Pandurang/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('renders projects section', () => {
    render(<App />);
    const projectsHeader = screen.getByText(/Projects that ship/i);
    expect(projectsHeader).toBeInTheDocument();
  });
});
