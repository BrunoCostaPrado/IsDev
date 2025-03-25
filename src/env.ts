import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  clientPrefix: "PUBLIC_",

  client: {
    PUBLIC_NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  runtimeEnv: { NODE_ENV: process.env.NODE_ENV },

  emptyStringAsUndefined: true,
})
