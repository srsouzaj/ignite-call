import { timeIntervalsFormSchema } from '../schemas/TimeIntervals.schema'
import { z } from 'zod'

export type TimeIntervalsFormInput = z.input<typeof timeIntervalsFormSchema>
export type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema>
