import { env } from "./env"

export function ProdOnly({ children }: { children: React.ReactNode }) {
  const isProduction = env.NODE_ENV === "production"

  if (isProduction) {
    return <>{children}</>
  }
}
