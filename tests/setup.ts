import '@testing-library/jest-dom';

// Mock environment variables
process.env.VITE_DEFAULT_LANGUAGE = 'en';
process.env.VITE_RTL_ENABLED = 'false';
process.env.VITE_API_BASE_URL = 'http://localhost:4000/api';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
