import { z } from 'zod'

export const ClaimUsernameFormSchema = z.object({
  username: z.string(),
})
