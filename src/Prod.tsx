export function ProdOnly({ children }: { children: React.ReactNode }) {
  const isProduction = import.meta.env.PROD === true

  if (isProduction) {
    return <>{children}</>
  }
}
