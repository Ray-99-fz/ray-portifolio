import React, { memo } from 'react'

const ProjectCardComponent = ({ project }) => {
  const statusLabel = project.status?.trim()
  const statusTone =
    statusLabel?.toLowerCase() === 'completed'
      ? 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30'
      : statusLabel?.toLowerCase() === 'ongoing'
        ? 'bg-blue-500/15 text-blue-700 border-blue-500/30'
        : 'bg-amber-500/15 text-amber-700 border-amber-500/30'

  return (
    <article className="group overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] transition-transform duration-200 hover:-translate-y-1">
      <div className="aspect-[16/9] w-full overflow-hidden bg-[color:var(--surface-2)]">
        <img
          src={project.screenshotSrc}
          alt={project.screenshotAlt ?? `${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-6">
        {statusLabel ? (
          <div className="mb-3">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusTone}`}
            >
              {statusLabel}
            </span>
          </div>
        ) : null}

        <h3 className="text-[color:var(--text)] text-xl md:text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 text-[color:var(--muted)] md:text-lg">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-3 py-1 text-sm text-[color:var(--muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[color:var(--text)] px-4 py-2 font-semibold text-[color:var(--surface)] transition-opacity hover:opacity-90"
          >
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:var(--surface-2)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

const ProjectCard = memo(ProjectCardComponent)
ProjectCard.displayName = 'ProjectCard'

export default ProjectCard

