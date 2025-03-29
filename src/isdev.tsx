export function DevOnly({
  children,
}: { children: React.ReactNode; isDev: unknown }) {
  if (process.env.NODE_ENV === "development") {
    console.log("Dev prop is being used!")
    return <>{children}</>
  }
}
