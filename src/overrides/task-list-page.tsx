import Link from 'next/link'
import { Filter, Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { fetchTaskPosts } from '@/lib/task-data'
import { getTaskConfig, type TaskKey } from '@/lib/site-config'
import { taskIntroCopy } from '@/config/site.content'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

export async function TaskListPageOverride({ task, category }: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts(task, 48, { fresh: true })
  const taskConfig = getTaskConfig(task)
  const intro = taskIntroCopy[task]
  const normalizedCategory = category ? normalizeCategory(category) : 'all'

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1a0505]">
      <NavbarShell />
      <div className="border-b-2 border-[#662222] bg-gradient-to-br from-[#1a0505] to-[#3d0f0f] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e87070]">Press Archive</p>
          <h1 className="mt-2 max-w-3xl font-[family-name:var(--site-font-display)] text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            {intro?.title || taskConfig?.label}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">{taskConfig?.description}</p>
          {intro
            ? intro.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
                  {p}
                </p>
              ))
            : null}
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <form
            className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-end"
            action={taskConfig?.route || '/news'}
            method="get"
          >
            <div className="flex-1">
              <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-[#662222]">
                <Filter className="h-3.5 w-3.5" />
                Category
              </label>
              <select
                name="category"
                defaultValue={normalizedCategory}
                className="mt-2 w-full rounded-sm border border-[#e8c8c8] bg-white px-3 py-2.5 text-sm font-medium focus:border-[#662222] focus:outline-none"
              >
                <option value="all">All categories</option>
                {CATEGORY_OPTIONS.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="h-11 rounded-sm bg-[#662222] px-5 text-sm font-semibold text-white transition hover:bg-[#842A3B]"
            >
              Apply
            </button>
          </form>
          <form className="flex w-full max-w-sm gap-2" action="/search" method="get">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#662222]/60" />
              <input
                name="q"
                className="h-11 w-full rounded-sm border border-[#e8c8c8] bg-white pl-9 pr-3 text-sm focus:border-[#662222] focus:outline-none"
                placeholder="Search releases…"
              />
            </div>
            <input type="hidden" name="master" value="1" />
            <button type="submit" className="h-11 rounded-sm bg-[#662222] px-4 text-sm font-semibold text-white transition hover:bg-[#842A3B]">
              Go
            </button>
          </form>
        </div>
        {intro && intro.links.length > 0 ? (
          <div className="mb-6 flex flex-wrap gap-2 text-sm">
            {intro.links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-sm border border-[#e8c8c8] bg-white px-3 py-1.5 text-[#662222] transition hover:border-[#662222] hover:bg-[#662222] hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        ) : null}
        <TaskListClient task={task} initialPosts={posts} category={normalizedCategory} />
      </main>
      <Footer />
    </div>
  )
}
