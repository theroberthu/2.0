// Email templates for Resend integration
// All styles are inline for email client compatibility
// Brand colors from tailwind.config.ts

interface BrandSnapshot {
  brandName: string
  category: string
  estimatedMarketplace: string
  topProducts: string[]
  firstImpression: string
}

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
export function leadNotificationEmail(
  lead: {
    name: string
    email: string
    website_url: string | null
    revenue_range: string | null
    challenge: string | null
  },
  snapshot: BrandSnapshot | null = null
): string {
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

  const snapshotSection = snapshot ? `
    <h2 style="margin:28px 0 8px;font-size:15px;font-weight:700;color:#1a2a32;">Brand Snapshot</h2>
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f7fa;border-radius:6px;border:1px solid #c8e0ea;">
      ${[
        { label: 'Brand', value: snapshot.brandName },
        { label: 'Category', value: snapshot.category },
        { label: 'Marketplace', value: snapshot.estimatedMarketplace },
        { label: 'Top Products', value: snapshot.topProducts.join(', ') },
        { label: 'First Impression', value: snapshot.firstImpression },
      ]
        .filter(r => r.value && r.value.toLowerCase() !== 'unknown')
        .map(r => `
          <tr>
            <td style="padding:8px 12px;font-size:13px;color:#2d7d9a;font-weight:600;white-space:nowrap;vertical-align:top;">${r.label}</td>
            <td style="padding:8px 12px;font-size:13px;color:#1a2a32;">${r.value}</td>
          </tr>
        `).join('')}
    </table>
  ` : ''

  return emailWrapper(`
    <h1 style="margin:0 0 8px;font-size:20px;color:#1a2a32;">New Strategy Session Request</h1>
    <p style="margin:0 0 20px;font-size:14px;color:#8a9aa2;">Someone just submitted the strategy session form.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f9fb;border-radius:6px;border:1px solid #e8edf0;">
      ${tableRows}
    </table>
    ${snapshotSection}
    <p style="margin:20px 0 0;font-size:13px;color:#8a9aa2;">
      <a href="mailto:${lead.email}" style="color:#2d7d9a;text-decoration:none;font-weight:600;">Reply to ${lead.name}</a>
    </p>
  `)
}

// Confirmation email to the lead who submitted
// Branded dark layout matching the site, copy stays exactly as written
export function leadConfirmationEmail(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
</head>
<body style="margin:0;padding:0;background-color:#111c22;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#111c22;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;">

          <!-- Header: logo + name -->
          <tr>
            <td style="padding:0 0 28px 0;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle;padding-right:10px;">
                    <img src="https://theroberthu.com/images/theroberthulogo.png" alt="Robert Hu" width="32" height="32" style="display:block;border:0;border-radius:4px;" />
                  </td>
                  <td style="vertical-align:middle;">
                    <span style="font-size:15px;font-weight:700;color:#f7f9fb;letter-spacing:-0.2px;">Robert Hu</span>
                    <span style="font-size:13px;color:#5a7a8a;margin-left:6px;">E-commerce Strategist</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#1a2a32;border-radius:8px;padding:32px;">

              <p style="margin:0 0 20px;font-size:15px;color:#e8edf0;line-height:1.75;">Hi ${name},</p>

              <p style="margin:0 0 20px;font-size:15px;color:#e8edf0;line-height:1.75;">
                Got it. I've got your info and I'll personally review it within 24 hours. You'll hear back from me with a link to book your strategy session.
              </p>

              <p style="margin:0 0 12px;font-size:15px;color:#e8edf0;line-height:1.75;">In the meantime, here are a few things worth reading:</p>

              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;padding-left:4px;">
                <tr>
                  <td style="padding:5px 0;font-size:15px;color:#e8edf0;line-height:1.75;">
                    &bull;&nbsp;
                    <a href="https://theroberthu.com/blog/amazon-rufus-optimization" style="color:#c5a94e;text-decoration:underline;">How to Optimize Your Amazon Listings for Rufus</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:5px 0;font-size:15px;color:#e8edf0;line-height:1.75;">
                    &bull;&nbsp;
                    <a href="https://theroberthu.com/blog/amazon-listing-optimization-cost" style="color:#c5a94e;text-decoration:underline;">The Real Cost of Bad Amazon Listings</a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 4px;font-size:15px;color:#e8edf0;line-height:1.75;">Talk soon,</p>
              <p style="margin:0;font-size:15px;color:#f7f9fb;font-weight:700;line-height:1.75;">Robert</p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 0 0;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;color:#3d5a6a;line-height:1.6;">
                Robert Hu &nbsp;&middot;&nbsp; E-commerce Strategist &nbsp;&middot;&nbsp;
                <a href="https://theroberthu.com" style="color:#3d5a6a;text-decoration:none;">theroberthu.com</a>
              </p>
              <p style="margin:0;font-size:12px;color:#3d5a6a;">
                <a href="https://www.linkedin.com/in/theroberthu" style="color:#3d5a6a;text-decoration:none;">LinkedIn</a>
                &nbsp;&middot;&nbsp;
                <a href="https://x.com/theroberthu" style="color:#3d5a6a;text-decoration:none;">X</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
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
