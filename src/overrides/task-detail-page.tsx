import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Facebook, Linkedin, Link2, Twitter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { buildPostUrl, fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, getTaskConfig, type TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

function getHeroImage(post: SitePost) {
  const media = Array.isArray(post.media) ? post.media[0]?.url : null
  if (typeof media === 'string' && media) return media
  const c = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const images = c.images
  if (Array.isArray(images) && typeof images[0] === 'string') return images[0]
  if (typeof c.logo === 'string' && c.logo) return c.logo
  return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80&auto=format&fit=crop'
}

export async function TaskDetailPageOverride({ task, slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug(task, slug)
  if (!post) notFound()
  const taskConfig = getTaskConfig(task)
  const related = (await fetchTaskPosts(task, 10, { fresh: true })).filter((item) => item.slug !== slug).slice(0, 4)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Full text will display here when available.')
  const base = SITE_CONFIG.baseUrl.replace(/\/$/, '')
  const pagePath = buildPostUrl(task, post.slug)
  const pageUrl = `${base}${pagePath}`
  const shareText = encodeURIComponent(post.title || SITE_CONFIG.name)
  const category =
    typeof content.category === 'string' && content.category.trim()
      ? content.category.trim()
      : 'Release media'
  const hero = getHeroImage(post)
  const sub =
    post.summary && post.summary.length < 220
      ? post.summary
      : post.summary
        ? post.summary.slice(0, 200).trimEnd() + '…'
        : ''

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1a0505]">
      <NavbarShell />
      <div className="border-b border-[#e8c8c8] bg-white/90">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#662222]">{taskConfig?.label || 'Release'}</p>
          <nav className="mt-2 text-xs text-[#662222]/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-[#662222]">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={taskConfig?.route || '/news'} className="hover:text-[#662222]">
                  {taskConfig?.label || 'Archive'}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="line-clamp-1 max-w-[min(100%,20rem)] font-medium text-[#1a0505]">{post.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <header>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#662222]">{category}</p>
          <h1 className="mt-2 font-[family-name:var(--site-font-display)] text-3xl font-bold leading-tight tracking-[-0.03em] text-[#1a0505] sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          {sub ? <p className="mt-4 text-lg text-[#5c2020] sm:text-xl">{sub}</p> : null}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#662222]/70">
            <span>By {post.authorName || 'Newsroom'}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${shareText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#e8c8c8] bg-white px-3 py-1.5 text-xs font-semibold transition hover:border-[#662222] hover:text-[#662222]"
            >
              <Twitter className="h-3.5 w-3.5" /> Share
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#e8c8c8] bg-white px-3 py-1.5 text-xs font-semibold transition hover:border-[#662222] hover:text-[#662222]"
            >
              <Linkedin className="h-3.5 w-3.5" /> Post
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#e8c8c8] bg-white px-3 py-1.5 text-xs font-semibold transition hover:border-[#662222] hover:text-[#662222]"
            >
              <Facebook className="h-3.5 w-3.5" /> Send
            </a>
            <a
              href={pageUrl}
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#e8c8c8] bg-white px-3 py-1.5 text-xs font-semibold text-[#5c2020] transition hover:border-[#662222] hover:text-[#662222]"
            >
              <Link2 className="h-3.5 w-3.5" /> Permalink
            </a>
          </div>
        </header>

        <div className="relative mt-8 aspect-[2/1] w-full max-h-[24rem] overflow-hidden rounded-xl border border-[#e8c8c8] bg-white shadow-sm">
          <ContentImage src={hero} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg mt-10 max-w-none text-[#1a0505] prose-headings:font-[family-name:var(--site-font-display)] prose-a:text-[#662222] prose-p:leading-relaxed prose-li:marker:text-[#662222]">
          <RichContent html={html} />
        </div>
      </main>

      {related.length ? (
        <section className="border-t border-[#e8c8c8] bg-white py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--site-font-display)] text-2xl font-bold text-[#1a0505]">Related releases</h2>
            <p className="mt-1 text-sm text-[#5c2020]">From the same archive. Skip around without losing the reading line.</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    href={buildPostUrl(task, item.slug)}
                    className="group block rounded-xl border border-[#e8c8c8] bg-[#fff8f8] p-4 transition hover:border-[#662222] hover:shadow-sm"
                  >
                    <p className="line-clamp-2 text-sm font-semibold text-[#1a0505] group-hover:text-[#662222]">{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <Footer />
    </div>
  )
}
