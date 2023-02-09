import { z } from 'zod'
import { registerFormSchema } from '../schemas/RegisterForm.schema'

export type RegisterFormData = z.infer<typeof registerFormSchema>
