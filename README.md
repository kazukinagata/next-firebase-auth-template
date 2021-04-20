This is a [Next.js](https://nextjs.org/) x [Firebase](https://firebase.google.com/docs) boilerplate that includes following;

- [chakra-ui](https://chakra-ui.com/)
- Configured Firebase auth context, use `useAuthCtx` to retrieve current user


## Getting Started

Install packages and run the development server:

```bash
npm install
# or
yarn
```

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Utils

### useAuthCtx

```typescript
  const {currentUser, loading, setCurrentUser} = useAuthCtx()
  // currentUser: firebase.User | null
  // loading: boolean
  // setCurrentUser: (user?: firebase.User) => void

```

## Lisence

MIT