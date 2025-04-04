export function DevOnly({
  children,
}: { children: React.ReactNode; isDev: unknown }) {
  if (process.env.NODE_ENV === "development") {
    return <>{children}</>
  }
}
