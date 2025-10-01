# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Essential Commands
### Development
- `npm run dev` - Start development server on http://localhost:3000 (auto-opens browser)
- `npm run type-check` - Run TypeScript type checking without emitting files
- `npm run lint` - Check code for linting errors
- `npm run lint:fix` - Auto-fix linting errors
- `npm run format` - Format code with Prettier

### Testing
- `npm test` - Run all tests with Jest
- `npm run test:watch` - Run tests in watch mode for active development
- `npm run test:coverage` - Generate coverage report (requires ≥80% line coverage)

### Build & Deployment
- `npm run build` - Production build (runs TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `docker build -t fullstack-rtl-app .` - Build Docker image
- `docker-compose up -d` - Start app in Docker (accessible at http://localhost:3000)
- `docker-compose down` - Stop Docker containers

## Architecture Overview

### Strict Layered Architecture
This application enforces a **strict separation of concerns** across layers. When working on features, respect these boundaries:

**1. UI Layer** (`src/app/pages`)
- Presentational components (HomePage, AboutPage)
- No business logic or direct API calls
- Data received via props, events emitted via callbacks

**2. Service Layer** (`src/services`)
- All API communication handled here
- Configured with axios interceptors for auth tokens and error handling
- Base `ApiService` class provides `get()`, `post()`, `put()`, `delete()` methods
- Auth tokens stored in localStorage, automatic 401 redirect to /login

**3. Agent Layer** (`src/agents`)
- **Critical**: All business logic belongs here
- Data transformation, validation, complex computations
- Example: `DataAgent` provides static methods for data operations
- Never put business logic in components or services

**4. State Management** (`src/store`)
- Zustand stores for global state
- `directionStore` manages RTL/LTR direction and language switching
- Uses `persist` middleware for localStorage persistence

**5. Utilities** (`src/utils`)
- Pure helper functions (formatting, validation, etc.)
- See `helpers.ts` for examples: debounce, isEmpty, formatDate, etc.

### Import Aliases
Configured in both `vite.config.ts` and `tsconfig.json`:
- `@/` - src root
- `@/services/` - API services
- `@/agents/` - Business logic layer
- `@/types/` - TypeScript definitions
- `@/utils/` - Utility functions
- `@/store/` - Zustand stores

**Note**: The following aliases are configured but their directories don't exist yet:
- `@/components/` - React components (to be created)
- `@/ui/` - Reusable UI components (to be created)
- `@/hooks/` - Custom React hooks (to be created)

## RTL Support

### Core RTL Mechanisms
1. **Direction Store**: `useDirectionStore` from `@/store/directionStore`
   - Controls `direction` ('ltr' | 'rtl'), `rtlEnabled`, `language`
   - Methods: `setDirection()`, `toggleDirection()`, `setLanguage()`
   - Persisted to localStorage automatically

2. **Document Direction**: Set in `App.tsx` via `useEffect`
   - Updates `document.documentElement.dir` and `lang` attributes
   - Triggers on direction changes

3. **Tailwind Plugins**: Configured in `tailwind.config.js`
   - Uses `tailwindcss-rtl` for automatic RTL utilities
   - Uses `tailwindcss-animate` for animations
   - Arabic font family: `font-arabic` (Noto Sans Arabic)
   - **Note**: Install plugins via: `npm install -D tailwindcss-rtl tailwindcss-animate`

4. **Environment Variables**:
   - Create a `.env` file in the project root (see Environment Configuration section)
   - `VITE_DEFAULT_LANGUAGE` - Set to 'ar' for Arabic
   - `VITE_RTL_ENABLED` - Set to 'true' to enable RTL by default

## Testing Guidelines

### Test Structure
- **Unit tests**: `tests/unit/` (currently implemented)
- **Integration tests**: `tests/integration/` (directory not yet created)
- **Setup**: `tests/setup.ts` - Mocks environment variables and window.matchMedia

### Coverage Requirements
Enforced in `jest.config.ts`:
- Lines: ≥80%
- Statements: ≥80%
- Branches: ≥70%
- Functions: ≥70%

### Test Best Practices
- Use `@testing-library/react` for component testing
- Mock external dependencies (axios, etc.)
- Follow test patterns in `tests/unit/helpers.test.ts`
- Use `jest.useFakeTimers()` for time-dependent tests (debounce, etc.)

## Code Splitting & Performance

### Bundle Optimization
Configured in `vite.config.ts` `manualChunks`:
- `react-vendor` - React core libraries
- `ui-vendor` - UI libraries (framer-motion, lucide-react)
- `form-vendor` - Form libraries (react-hook-form, zod)

### Lazy Loading
Example in `App.tsx`:
```typescript
const HomePage = lazy(() => import('./app/pages/HomePage'));
```
Always provide a `<Suspense>` fallback component.

## CI/CD Pipeline

**Note**: GitHub Actions workflow not yet configured. To set up CI/CD:
1. Create `.github/workflows/ci.yml` with the following jobs:
   - **Lint & Test** job (Node 18.x, 20.x matrix):
     - Linting → Type checking → Tests with coverage
     - Upload coverage to Codecov
   - **Build** job: Creates production build, uploads artifacts
   - **Docker Build** job (main branch only): Builds and pushes Docker image

## Environment Configuration

**Note**: Environment files not yet created. Create `.env` and `.env.example` files in the project root.

### Required Variables:
- `VITE_API_BASE_URL` - Backend API URL
- `VITE_API_TIMEOUT` - Request timeout (ms)
- `VITE_DEFAULT_LANGUAGE` - 'ar' or 'en'
- `VITE_RTL_ENABLED` - 'true' or 'false'

Access in code: `import.meta.env.VITE_*`

### Example `.env` file:
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_API_TIMEOUT=30000
VITE_DEFAULT_LANGUAGE=ar
VITE_RTL_ENABLED=true
```

## Key Dependencies

### Core Stack
- **React 18** with React Router for routing
- **TypeScript** with strict mode enabled
- **Vite** with SWC plugin for fast builds
- **Zustand** for state management
- **TanStack Query** (@tanstack/react-query) for server state
- **Axios** for HTTP requests

### Forms & Validation
- **React Hook Form** + **Zod** via @hookform/resolvers

### UI & Styling
- **Tailwind CSS** with plugins (requires installation: `npm install -D tailwindcss-rtl tailwindcss-animate`)
- **Framer Motion** for animations
- **lucide-react** for icons
- **clsx** + **tailwind-merge** + **class-variance-authority** for className utilities

### Code Quality
- **ESLint** with TypeScript and React plugins
- **Prettier** with Tailwind plugin
- No console.log allowed (use console.warn/error only)
- `@typescript-eslint/no-explicit-any` is a warning

## Docker Deployment

### Multi-stage Build
1. **Builder stage** (Node 20 Alpine): Installs deps + builds app
2. **Production stage** (Nginx Alpine): Serves static files
3. Custom `nginx.conf` for routing and headers
4. Health checks configured in both Dockerfile and docker-compose.yml

### Port Mapping
- Development: 3000 (Vite dev server)
- Docker: 3000:80 (Host:Container)
