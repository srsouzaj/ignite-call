import { z } from 'zod'
import { confirmFormSchema } from '../schemas/ConfirmForm.schema'

export type ConfirmFormData = z.infer<typeof confirmFormSchema>
