# Fullstack RTL Application

A production-ready full-stack application with comprehensive RTL (Right-to-Left) and Arabic font support, built with React, TypeScript, and Vite.

## 🚀 Features

- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **React 18** - Modern React with hooks and concurrent features
- ✅ **Vite** - Lightning-fast development and optimized production builds
- ✅ **RTL Support** - Complete right-to-left layout support for Arabic
- ✅ **Arabic Fonts** - Native Arabic font integration
- ✅ **Tailwind CSS** - Utility-first CSS with RTL support
- ✅ **Zustand** - Lightweight state management
- ✅ **React Router** - Client-side routing
- ✅ **React Hook Form + Zod** - Type-safe form handling
- ✅ **Testing** - Jest + React Testing Library
- ✅ **Code Quality** - ESLint + Prettier
- ✅ **CI/CD** - GitHub Actions workflow
- ✅ **Docker** - Containerized deployment
- ✅ **Code Splitting** - Lazy loading and performance optimization

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker (optional, for containerized deployment)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fullstack-rtl-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

## 🏃 Development

### Start development server
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Other development commands
```bash
# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format

# Testing
npm test
npm run test:watch
npm run test:coverage
```

## 🏗️ Build

### Production build
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 🐳 Docker Deployment

### Build Docker image
```bash
docker build -t fullstack-rtl-app .
```

### Run with Docker Compose
```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`

### Stop containers
```bash
docker-compose down
```

## 📂 Project Structure

```
fullstack-rtl-app/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline
├── public/                     # Static assets
├── src/
│   ├── app/                    # Application core
│   ├── agents/                 # Agent layer (business logic)
│   ├── components/             # React components
│   ├── hooks/                  # Custom React hooks
│   ├── services/               # Service layer (API calls)
│   ├── store/                  # State management (Zustand)
│   ├── types/                  # TypeScript type definitions
│   ├── ui/                     # Reusable UI components
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # Main App component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── tests/
│   ├── unit/                   # Unit tests
│   ├── integration/            # Integration tests
│   └── setup.ts                # Test setup
├── .env.example                # Environment variables template
├── .eslintrc.cjs               # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── docker-compose.yml          # Docker Compose configuration
├── Dockerfile                  # Docker configuration
├── jest.config.ts              # Jest configuration
├── nginx.conf                  # Nginx configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```

## 🏛️ Architecture

The application follows a **strict layered architecture** with clear separation of concerns:

### 1. **UI Layer** (`src/components`, `src/ui`)
- Presentational components
- No business logic
- Receives data via props
- Emits events via callbacks

### 2. **Service Layer** (`src/services`)
- API communication
- Data fetching and caching
- HTTP client configuration
- Error handling

### 3. **Agent Layer** (`src/agents`)
- Business logic
- Data transformation
- Validation
- Complex computations

### 4. **State Management** (`src/store`)
- Global application state
- Zustand stores
- Derived state

### 5. **Utilities** (`src/utils`)
- Helper functions
- Constants
- Formatters
- Validators

## 🌐 RTL Support

The application provides comprehensive RTL support:

1. **Automatic Direction Detection**
   ```typescript
   // Based on locale setting in .env
   VITE_DEFAULT_LANGUAGE=ar  // for Arabic
   VITE_RTL_ENABLED=true
   ```

2. **RTL-aware Components**
   - All components respect text direction
   - Layout automatically flips for RTL
   - Icons and images properly positioned

3. **Arabic Font Support**
   ```css
   /* Configured in Tailwind */
   font-family: 'Noto Sans Arabic', ...
   ```

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### Watch Mode
```bash
npm run test:watch
```

### Coverage Report
```bash
npm run test:coverage
```

### Testing Guidelines
- Maintain > 80% code coverage
- Test all critical paths
- Use React Testing Library best practices
- Mock external dependencies

## 📝 Code Quality

### Linting
```bash
npm run lint
```

### Auto-fix Lint Issues
```bash
npm run lint:fix
```

### Format Code
```bash
npm run format
```

### Pre-commit Checks
- ESLint validation
- Prettier formatting
- TypeScript type checking
- Unit tests

## 🚀 Deployment

### Production Build
1. Build the application
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the production-ready files

### Docker Deployment
1. Build Docker image
   ```bash
   docker build -t fullstack-rtl-app:latest .
   ```

2. Run container
   ```bash
   docker run -p 3000:80 fullstack-rtl-app:latest
   ```

### CI/CD Pipeline
The GitHub Actions workflow automatically:
- Runs linting
- Executes tests
- Builds the application
- Creates Docker image
- Deploys to production (on main branch)

## 🔒 Security

- Environment variables for sensitive data
- No hard-coded secrets
- Secure headers in nginx configuration
- Input validation with Zod
- HTTPS recommended for production

## 📊 Performance

- Code splitting with React.lazy
- Bundle optimization with Vite
- Tree shaking for unused code
- Asset compression with gzip
- CDN-ready static assets

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Update documentation
- Use conventional commits
- Ensure CI/CD passes

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React Team
- Vite Team
- Tailwind CSS Team
- All open-source contributors

## 📞 Support

For issues and questions:
- Create an issue on GitHub
- Check existing documentation
- Review FAQ section

---

**Built with ❤️ for the RTL community**
