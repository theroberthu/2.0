import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) envVars[match[1].trim()] = match[2].trim()
})

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.SUPABASE_SERVICE_ROLE_KEY
)

const DESCRIPTION = "Shopify connects to ChatGPT, Claude, Gemini, Grok, Muse, Perplexity and Copilot. What each AI connector can do, what stays blocked, and how store access works."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'shopify-ai-connectors-chatgpt-claude-gemini',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Shopify AI Connectors: How to Manage Your Store From ChatGPT, Claude, Gemini, and More',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Shopify AI Connectors Compared: ChatGPT, Claude, Gemini and More',
  excerpt: "Shopify documents official connectors for seven AI assistants: ChatGPT, Claude, Gemini, Grok, Meta Muse, Perplexity and Microsoft Copilot. What each can do in your store, where they differ, what Shopify blocks for all of them, and how access and permissions work. These are merchant-side connectors, not Shopify Agentic Storefronts.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/shopify-ai-connectors-chatgpt-claude-gemini.svg',
  category: 'Digital Transformation',
  tags: ['Shopify', 'AI connectors', 'ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot', 'merchant operations'],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['agentic-commerce-platform-default-shopify-google', 'shopify-webmcp-checkout-ai-agent-storefront', 'anthropic-claude-commerce-intelligence-layer'],
    featured_image_alt: 'Seven AI assistants connected to one Shopify store, with catalog work delegated and money movement kept in Shopify admin',
  },
  published_at: new Date().toISOString(),
  content: `<p><a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools" ${EXT}>Shopify now documents official integrations</a> that let a merchant run parts of a store from seven general-purpose AI assistants: ChatGPT, Claude, Gemini, Grok, Meta's Muse, Perplexity and Microsoft Copilot. Connect one, and you can create products, update collections, adjust inventory and create discount codes, and ask questions about orders, customers and sales, without opening Shopify admin.</p>

<p>These are merchant-side connectors, not Shopify Agentic Storefronts. The seven are not identical, and none of them replaces Shopify admin. This guide covers what every connector can do, where they differ, what Shopify blocks for all of them, and how access works. It reflects Shopify's Help Center documentation as of October 2026.</p>

<h2>AI connectors are not agentic storefronts</h2>

<p>Shopify uses AI assistants in two separate ways.</p>

<p><strong>Agentic storefronts are customer-facing.</strong> They make your products discoverable, and in some cases buyable, by shoppers using AI assistants. That is a sales channel, and I covered how it became <a href="/blog/agentic-commerce-platform-default-shopify-google">a platform default for eligible stores</a>.</p>

<p><strong>AI connectors are merchant-facing.</strong> You or your staff connect an assistant to your Shopify admin and use it to manage the store. Shopify calls the ChatGPT and Copilot integrations plugins and the other five connectors.</p>

<p>Connecting Claude to manage your catalog does not make your products appear to shoppers in Claude, and enrolling in agentic storefronts does not let any assistant change your store.</p>

<h2>What every Shopify AI connector can do</h2>

<p>Once you approve write access, Shopify documents a common set of actions across all seven:</p>

<p><strong>Products.</strong> Create, update and search products, and set products to active, draft or archived in batches of up to 50.</p>

<p><strong>Collections.</strong> Create and update collections and add products to them.</p>

<p><strong>Inventory.</strong> Check stock by location and set quantities. Most connector pages say the tool reads the current count first and stops if it has changed.</p>

<p><strong>Discounts.</strong> Create percentage-off discount codes. None of them creates fixed-amount discounts or changes existing codes.</p>

<p><strong>Pages, menus and metafields.</strong> Changed through the Shopify Admin API, with a confirmation step first.</p>

<p><strong>Themes.</strong> Edit an unpublished theme. The live theme stays off limits.</p>

<p>Three areas are read-only on every connector: <strong>orders, customers and analytics.</strong> You can ask which products sold best last month or look up a customer's record. You cannot edit an order or change a customer's details from the assistant.</p>

<h2>Where the seven connectors differ</h2>

<div class="table-wrapper">
<table>
<thead><tr><th>Assistant</th><th>Start a new store</th><th>Shopify Collective and digital products</th><th>How results appear</th><th>Worth knowing</th></tr></thead>
<tbody>
<tr><td>ChatGPT</td><td>Generate storefront previews, then claim one</td><td>Both documented</td><td>Shopify panel with editable fields, tables and charts</td><td>Pin Shopify to the sidebar for a store home screen</td></tr>
<tr><td>Claude</td><td>Generate storefront previews, then claim one</td><td>Both documented</td><td>Tables and charts</td><td>Your Claude workspace owner can restrict access</td></tr>
<tr><td>Gemini</td><td>Name suggestions can lead to Shopify signup</td><td>Not documented</td><td>Tables and charts</td><td>Switch stores by unlinking Shopify in connected apps</td></tr>
<tr><td>Grok</td><td>Generate storefront previews, then claim one</td><td>Not documented</td><td>Previews, tables and charts; Grok Bot is text only</td><td>Grok Bot connects separately, through Connect apps</td></tr>
<tr><td>Muse</td><td>Shopify signup to create and link a store</td><td>Not documented</td><td>Text and structured data</td><td>Not supported in WhatsApp; new collections publish to your online store</td></tr>
<tr><td>Perplexity</td><td>Existing stores only</td><td>Not documented</td><td>Text only</td><td>Can suggest names and domains before you have a store</td></tr>
<tr><td>Copilot</td><td>No previews; create a store from the Shopify login screen</td><td>Not documented</td><td>Text; attach images by link, not upload</td><td>Works in Copilot Cowork and Microsoft 365 Copilot Chat</td></tr>
</tbody>
</table>
</div>

<p>"Not documented" means the connector's own Shopify page does not list the capability, not that Shopify has ruled it out.</p>

<p><strong><a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-plugin-for-chatgpt" ${EXT}>ChatGPT</a>.</strong> You can manage Shopify from ChatGPT, and it has the richest interface of the seven. A Shopify panel opens beside the conversation with editable product fields that sync with the chat, and pinning Shopify adds a store home screen. With the Digital Products app, it can turn a file or link into a draft product.</p>

<p><strong><a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-claude" ${EXT}>Claude</a>.</strong> You can manage Shopify from Claude with nearly the same capabilities as ChatGPT, including storefront previews, Collective sourcing and digital products. The difference is administrative: whoever owns your Claude workspace can restrict the connector.</p>

<p><strong><a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-gemini" ${EXT}>Gemini</a>.</strong> Shopify works with Gemini for managing a store. Gemini's page documents no storefront previews. To switch stores, you unlink Shopify in Gemini's connected apps settings and sign in again, rather than using a switch command.</p>

<p><strong><a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-grok" ${EXT}>Grok</a>.</strong> Shopify works in both Grok and Grok Bot. Grok shows previews, tables and charts. Grok Bot returns text only and is connected from its own Connect apps screen.</p>

<p><strong><a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-muse" ${EXT}>Meta Muse</a>.</strong> Shopify works with Muse through an official connector, which you start by asking Muse to connect Shopify. It returns text rather than previews or charts, and Shopify says collections it creates publish to your online store, so review them.</p>

<p><strong><a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-perplexity" ${EXT}>Perplexity</a>.</strong> Shopify works with Perplexity for an existing store only. It is text only, with no previews, tables or charts.</p>

<p><strong><a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-plugin-for-microsoft-copilot" ${EXT}>Microsoft Copilot</a>.</strong> Shopify works in Copilot Cowork and Microsoft 365 Copilot Chat. In Cowork, store work happens in the same chat as your Microsoft 365 email, documents and spreadsheets, although Shopify says its agent cannot read that Microsoft 365 content. In Microsoft 365 Copilot Chat, open the Shopify agent first, because a plain request may only view store data. Your administrator may deploy the plugin for you.</p>

<h2>What no Shopify AI connector can do</h2>

<p>Shopify blocks a set of actions for every connected AI tool, even when you approve write access. <a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/considerations" ${EXT}>In its words</a>, a connected AI tool "can't issue refunds, cancel or capture orders, mark orders as paid, process returns," or create and adjust gift cards.</p>

<p>The same documentation says a connected tool cannot edit, publish or delete your live theme, or change your plan, payments, taxes or domains.</p>

<p>Each connector page adds the rest of the boundary. Order edits, customer record edits, fixed-amount discounts and changes to existing discount codes all stay in Shopify admin.</p>

<p>Put simply, these assistants can work on your catalog, but none of them can move money or change how you get paid.</p>

<h2>How Shopify controls AI access to your store</h2>

<p><strong>Two approvals.</strong> <a href="https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/authorizing-access" ${EXT}>You install the integration</a> from inside the AI assistant, not from the Shopify App Store. You are then sent to Shopify admin to approve the data access level it requests.</p>

<p><strong>Read access does not include write access.</strong> A connector with read-only access can view data but not change it. Write access lets it edit data and act on your behalf.</p>

<p><strong>Your staff permissions are the ceiling.</strong> A staff member who cannot edit products cannot give an assistant the ability to edit products.</p>

<p><strong>Access only goes up in place.</strong> If a tool later requests more access, you are prompted to approve it. You cannot lower an access level you already approved. To reduce access, uninstall the integration and install it again.</p>

<p><strong>Revoking is one step.</strong> Uninstall the integration from Shopify admin.</p>

<p><strong>One store at a time.</strong> Each connector links to one store, even within the same organization. Switching disconnects the current store and starts a new authorization. Start a new conversation afterward, because older conversations can keep using the earlier connection.</p>

<p><strong>Use the official integration.</strong> Shopify tells merchants not to create API access tokens or build their own connection to an AI tool.</p>

<p><strong>The data and the mistakes are yours.</strong> Once data is shared, Shopify says it "is no longer processed by Shopify" and falls under the assistant provider's terms. If an assistant makes an incorrect change, you are responsible for it.</p>

<h2>Does the assistant act immediately?</h2>

<p>It depends on the action. Shopify documents confirmation steps for Admin API changes such as pages, menus and metafields, and for the start date and eligibility of new discount codes. On most connectors, inventory updates read the current quantity first and stop if it has changed.</p>

<p>Shopify does not describe a confirmation step for every product or price change. With write access, assume a request can change your live store as soon as you make it. Large batches run one item at a time and can stop partway, so check the result and finish the rest in Shopify admin.</p>

<h2>Is there an extra fee?</h2>

<p>The ChatGPT, Claude, Gemini, Grok and Muse pages each say there is no extra Shopify fee for the connector. You pay standard Shopify plan pricing, and any assistant subscription goes to its provider. The Perplexity and Copilot pages do not mention fees.</p>

<h2>What still requires Shopify admin</h2>

<p>Shopify is explicit that the connectors do not replace Shopify admin or Sidekick, its built-in assistant. You still need admin for payments, taxes, domains and launch readiness; refunds, cancellations, returns and order edits; customer record edits; fixed-amount and existing discount codes; publishing or editing the live theme; and approving or revoking an assistant's access.</p>

<p>For theme work, Shopify suggests duplicating the live theme, letting the assistant edit the copy, then publishing it yourself.</p>

<h2>Which Shopify AI connector should you use?</h2>

<p>For most merchants, the best connector is the assistant your team already works in, because the store actions are nearly identical. The practical differences decide the rest. If you want to start a store from a generated preview, use ChatGPT, Claude or Grok. If you source from Shopify Collective or sell digital files, ChatGPT and Claude are the documented options. If your work lives in Microsoft 365, Copilot Cowork keeps it in one place. If you want tables and charts, avoid the text-only options: Perplexity, Muse, Copilot and Grok Bot.</p>

<p>Start with read-only access. Grant write access to named people for named tasks once you have seen how the assistant handles your catalog.</p>

<h2>The back office is becoming interface-portable</h2>

<p>Shopify remains the commerce system, and its rules, blocked actions and permissions stay the same whichever assistant you use. What is becoming portable is the interface a merchant works through.</p>

<p>On the shopper side, Shopify gave software <a href="/blog/shopify-webmcp-checkout-ai-agent-storefront">a second way into the storefront</a>. The connectors do the same for the back office. In <a href="/ai-commerce-2027">AI Commerce 2027</a> I argued that software is gaining authority inside the merchant's business faster than in the shopper's wallet. The connectors fit that pattern, and they also show its limit. Catalog work is delegated. Money movement is not.</p>

<p>It is the mirror image of Anthropic's position that Claude should be <a href="/blog/anthropic-claude-commerce-intelligence-layer">the intelligence layer, not the storefront</a>. Shopify's design lets any of seven assistants act as the interface, while the transaction, the permissions and the blocked actions stay in its system.</p>

<p>If your staff can now run part of your store from any of seven assistants, who decides which of them gets write access?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
