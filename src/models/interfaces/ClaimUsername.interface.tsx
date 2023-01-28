import { ClaimUsernameFormSchema } from '../schemas/ClaimUsername.schema'
import { z } from 'zod'

export type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>
