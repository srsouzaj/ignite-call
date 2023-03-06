import { z } from 'zod'
import { updateProfileSchema } from '../schemas/updateProfile.schema'

export type UpdateProfileData = z.infer<typeof updateProfileSchema>
