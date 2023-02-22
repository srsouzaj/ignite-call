import { timeIntervalsFormSchema } from '../schemas/TimeIntervals.schema'
import { z } from 'zod'

export type TimeIntervalsFormData = z.infer<typeof timeIntervalsFormSchema>
