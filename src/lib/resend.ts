import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export const EMAIL_FROM = 'Robert Hu <noreply@theroberthu.com>'
export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'robert@theroberthu.com'
