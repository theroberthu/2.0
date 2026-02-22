import { Resend } from 'resend'

// Pass empty string when key is missing so Resend doesn't crash at import.
// API calls will fail gracefully; the server action catches those errors.
export const resend = new Resend(process.env.RESEND_API_KEY || '')

export const EMAIL_FROM = 'Robert Hu <robert@theroberthu.com>'
export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'robert@theroberthu.com'
