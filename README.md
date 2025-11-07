# The Crew 2 - Car Settings Monorepo

Monorepo dla aplikacji do zarządzania ustawieniami pojazdów w grze The Crew 2.

## Struktura Projektu

```
crew2-monorepo/
├── apps/
│   └── frontend/              # Aplikacja React (frontend)
│       ├── src/
│       ├── public/
│       └── project.json
├── libs/                      # Współdzielone biblioteki
│   ├── shared-types/          # Wspólne typy TypeScript
│   ├── api-client/            # Klient API
│   └── common-utils/          # Narzędzia pomocnicze
├── nx.json                    # Konfiguracja Nx
├── tsconfig.base.json         # Bazowa konfiguracja TypeScript
└── package.json
```

## Technologie

- **Nx** - Monorepo toolkit
- **React 18.2** - Frontend framework
- **TypeScript 4.9** - Type safety
- **React Router** - Routing
- **React Scripts** - Build tooling

## Instalacja

```bash
npm install
```

## Dostępne Komendy

### Uruchomienie aplikacji frontend
```bash
npm start
# lub
nx start frontend
```

### Build aplikacji
```bash
npm run build
# lub
nx build frontend
```

### Testy
```bash
npm test
# lub
nx test frontend
```

### Nx Commands

#### Wyświetl wszystkie projekty
```bash
nx show projects
```

#### Wyświetl graf zależności
```bash
nx graph
```

#### Sprawdź projekty dotknięte zmianami
```bash
nx affected:test
nx affected:build
```

#### Uruchom komendy dla wszystkich projektów
```bash
nx run-many --target=build --all
```

## Biblioteki Współdzielone

### @crew2-monorepo/shared-types
Wspólne typy TypeScript dla całego monorepo (Vehicle, User, Settings, itp.)

```typescript
import { Vehicle, VehicleCategory } from '@crew2-monorepo/shared-types';
```

### @crew2-monorepo/api-client
Klient API do komunikacji z backendem

```typescript
import { apiClient } from '@crew2-monorepo/api-client';

const vehicles = await apiClient.getVehicles();
```

### @crew2-monorepo/common-utils
Wspólne funkcje pomocnicze

```typescript
import { formatVehicleName } from '@crew2-monorepo/common-utils';
```

## Dodawanie Backendu

Gdy będziesz gotowy dodać backend, wykonaj:

```bash
# Dla aplikacji NestJS
nx g @nx/nest:app backend

# Dla aplikacji Express
nx g @nx/express:app backend

# Dla aplikacji Node.js
nx g @nx/node:app backend
```

## Korzyści z Nx Monorepo

✅ **Współdzielenie kodu** - Typy, utilities między frontem a backiem
✅ **Cache buildów** - Nx cachuje buildy, przyspiesza development
✅ **Dependency graph** - Wizualizacja zależności między projektami
✅ **Code generators** - Łatwe tworzenie nowych komponentów/modułów
✅ **Affected commands** - Builduj/testuj tylko zmienione projekty
✅ **Scalability** - Łatwe dodawanie nowych aplikacji

## Następne Kroki

1. Zaimportuj projekt backend do `apps/backend`
2. Zaimplementuj właściwą logikę w komponentach frontend
3. Dodaj state management (Context API / Redux)
4. Połącz frontend z API przez `@crew2-monorepo/api-client`
5. Rozbuduj `shared-types` o wszystkie potrzebne typy

## Dokumentacja

- [Nx Documentation](https://nx.dev)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
