export function ProdOnly({
  children,
}: { children: React.ReactNode; isProd: unknown }) {
  if (process.env.NODE_ENV === "production") {
    console.log("Prod prop is being used!")
    return <>{children}</>
  }
}
