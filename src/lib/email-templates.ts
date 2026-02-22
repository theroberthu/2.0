// Email templates for Resend integration
// All styles are inline for email client compatibility
// Brand colors from tailwind.config.ts

function emailWrapper(content: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="margin:0;padding:0;background-color:#f7f9fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f9fb;padding:40px 20px;">
        <tr><td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:8px;overflow:hidden;">
            <tr><td style="background-color:#1a3a4a;padding:24px 32px;">
              <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:-0.3px;">Robert Hu</span>
              <span style="color:#8a9aa2;font-size:12px;margin-left:8px;">E-commerce Strategist</span>
            </td></tr>
            <tr><td style="padding:32px;">
              ${content}
            </td></tr>
            <tr><td style="padding:20px 32px;border-top:1px solid #e8edf0;text-align:center;">
              <p style="margin:0;color:#8a9aa2;font-size:11px;">
                &copy; ${new Date().getFullYear()} Robert Hu &middot; <a href="https://theroberthu.com" style="color:#2d7d9a;text-decoration:none;">theroberthu.com</a>
              </p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `
}

// Notification to Robert when a lead submits the strategy session form
export function leadNotificationEmail(lead: {
  name: string
  email: string
  website_url: string | null
  revenue_range: string | null
  challenge: string | null
}): string {
  const rows = [
    { label: 'Name', value: lead.name },
    { label: 'Email', value: lead.email },
    { label: 'Website', value: lead.website_url || 'Not provided' },
    { label: 'Revenue Range', value: lead.revenue_range || 'Not provided' },
    { label: 'Challenge', value: lead.challenge || 'Not provided' },
  ]

  const tableRows = rows
    .map(r => `
      <tr>
        <td style="padding:8px 12px;font-size:13px;color:#8a9aa2;font-weight:600;white-space:nowrap;vertical-align:top;">${r.label}</td>
        <td style="padding:8px 12px;font-size:13px;color:#1a2a32;">${r.value}</td>
      </tr>
    `).join('')

  return emailWrapper(`
    <h1 style="margin:0 0 8px;font-size:20px;color:#1a2a32;">New Strategy Session Request</h1>
    <p style="margin:0 0 20px;font-size:14px;color:#8a9aa2;">Someone just submitted the strategy session form.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f9fb;border-radius:6px;border:1px solid #e8edf0;">
      ${tableRows}
    </table>
    <p style="margin:20px 0 0;font-size:13px;color:#8a9aa2;">
      <a href="mailto:${lead.email}" style="color:#2d7d9a;text-decoration:none;font-weight:600;">Reply to ${lead.name}</a>
    </p>
  `)
}

// Confirmation email to the lead who submitted
// Plain-text style — feels like a real person wrote it, not a marketing tool
export function leadConfirmationEmail(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="margin:0;padding:40px 20px;background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="max-width:520px;">
          <p style="margin:0 0 20px;font-size:15px;color:#1a2a32;line-height:1.7;">Hi ${name},</p>
          <p style="margin:0 0 20px;font-size:15px;color:#1a2a32;line-height:1.7;">
            Got it. I've got your info and I'll personally review it within 24 hours. You'll hear back from me with a link to book your strategy session.
          </p>
          <p style="margin:0 0 12px;font-size:15px;color:#1a2a32;line-height:1.7;">In the meantime, here are a few things worth reading:</p>
          <ul style="margin:0 0 24px;padding-left:20px;">
            <li style="margin-bottom:8px;font-size:15px;color:#1a2a32;line-height:1.7;">
              <a href="https://theroberthu.com/blog/amazon-rufus-optimization" style="color:#2d7d9a;text-decoration:underline;">How to Optimize Your Amazon Listings for Rufus</a>
            </li>
            <li style="margin-bottom:8px;font-size:15px;color:#1a2a32;line-height:1.7;">
              <a href="https://theroberthu.com/blog/amazon-listing-optimization-cost" style="color:#2d7d9a;text-decoration:underline;">The Real Cost of Bad Amazon Listings</a>
            </li>
          </ul>
          <p style="margin:0 0 8px;font-size:15px;color:#1a2a32;line-height:1.7;">Talk soon,</p>
          <p style="margin:0 0 40px;font-size:15px;color:#1a2a32;font-weight:600;line-height:1.7;">Robert</p>
          <p style="margin:0;font-size:11px;color:#8a9aa2;">
            <a href="https://theroberthu.com" style="color:#8a9aa2;text-decoration:none;">theroberthu.com</a>
          </p>
        </td></tr>
      </table>
    </body>
    </html>
  `
}

// Welcome email to new newsletter subscribers
export function subscriberWelcomeEmail(): string {
  return emailWrapper(`
    <h1 style="margin:0 0 8px;font-size:20px;color:#1a2a32;">Welcome to the newsletter!</h1>
    <p style="margin:0 0 16px;font-size:14px;color:#1a2a32;line-height:1.6;">
      You are now subscribed to actionable e-commerce insights from Robert Hu.
    </p>
    <p style="margin:0 0 16px;font-size:14px;color:#1a2a32;line-height:1.6;">
      Expect practical strategies on e-commerce growth, digital transformation, and AI that you can apply to your business right away. No fluff, no spam.
    </p>
    <p style="margin:0 0 24px;font-size:14px;color:#8a9aa2;line-height:1.6;">
      If you ever want to chat about your brand, I offer a free strategy session with no strings attached.
    </p>
    <a href="https://theroberthu.com/free-strategy-session" style="display:inline-block;background-color:#2d7d9a;color:#ffffff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:6px;text-decoration:none;">
      Book a Free Strategy Session
    </a>
  `)
}

// Notification to Robert when someone subscribes to the newsletter
export function subscriberNotificationEmail(email: string): string {
  return emailWrapper(`
    <h1 style="margin:0 0 8px;font-size:20px;color:#1a2a32;">New Newsletter Subscriber</h1>
    <p style="margin:0 0 16px;font-size:14px;color:#8a9aa2;">Someone just subscribed to the newsletter.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f9fb;border-radius:6px;border:1px solid #e8edf0;">
      <tr>
        <td style="padding:12px;font-size:13px;color:#8a9aa2;font-weight:600;">Email</td>
        <td style="padding:12px;font-size:13px;color:#1a2a32;">${email}</td>
      </tr>
    </table>
  `)
}
