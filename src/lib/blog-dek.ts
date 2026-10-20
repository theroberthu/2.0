/**
 * Posts published from this date follow the current editorial standard, so
 * their excerpts are shown as a dek under the H1 and used as the Article
 * abstract. Older posts carry earlier framing and some claims the Board has
 * since corrected; a legacy post qualifies once it has been reviewed and
 * schema_json.show_dek is set to true.
 */
export const DEK_STANDARD_FROM = '2026-07-01'

export function showDek(post: {
  excerpt?: string | null
  published_at?: string | null
  schema_json?: { show_dek?: boolean } | null
}): boolean {
  if (!post.excerpt) return false
  if (post.schema_json?.show_dek !== undefined) return post.schema_json.show_dek
  return (post.published_at ?? '') >= DEK_STANDARD_FROM
}
