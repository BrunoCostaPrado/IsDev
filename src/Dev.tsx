export function DevOnly({ children }: { children: React.ReactNode }) {
  const isDevelopment = import.meta.env.DEV === true

  if (isDevelopment) {
    return <>{children}</>
  }
}
