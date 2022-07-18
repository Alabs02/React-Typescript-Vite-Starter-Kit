import { render } from '@testing-library/react';

// APP
import App from '@/app';


describe('Tesing Main.tsx Suite', () => {
  it('renders App.tsx without crashing', () => {
    render(<App />);
  });
});