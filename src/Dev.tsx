import { env } from "./env"

export function DevOnly({ children }: { children: React.ReactNode }) {
  const isDevelopment = env.NODE_ENV === "development"

  if (isDevelopment) {
    return <>{children}</>
  }
}
