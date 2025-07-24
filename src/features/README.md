# Features Directory

This directory follows the feature-based organization pattern as outlined in the cursor rules.

## Structure

Each feature should be organized as follows:

```
src/features/<feature-name>/
├── components/          # Feature-specific components
├── hooks/              # Feature-specific hooks
├── api/                # Feature-specific API routes (if needed)
├── types/              # Feature-specific TypeScript types
├── utils/              # Feature-specific utilities
└── index.ts            # Public exports from the feature
```

## Current Features

### Welcome (`/welcome`)
- **Purpose**: Landing page and user onboarding
- **Components**: `WelcomeHero` - Main landing page component
- **Location**: `src/features/welcome/components/welcome-hero.tsx`

## Guidelines

1. **Single Responsibility**: Each feature should have one clear purpose
2. **Encapsulation**: Feature internals should be private; only export what's needed
3. **Reusability**: Components should be composable and reusable across features
4. **Testing**: Each feature should include its own tests
5. **Documentation**: Complex features should include README files

## Import Pattern

```typescript
// Import from feature index
import { WelcomeHero } from '@/features/welcome'

// Import UI components
import { Button } from '@/ui/button'
``` 