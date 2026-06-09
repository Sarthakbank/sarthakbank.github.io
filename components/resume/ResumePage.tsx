import Link from "next/link";
import { Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { resume } from "@/content/resume";
import { AppleInnerShell } from "@/components/shared/AppleInnerShell";
import { PrintActions } from "@/components/shared/PrintActions";
import { innerContainer } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

const EYEBROW =
  "text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]";
const SECTION_TITLE =
  "font-display text-[20px] font-semibold tracking-tight text-[#1d1d1f] sm:text-[22px]";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <h2 className={SECTION_TITLE}>{children}</h2>
      <span className="h-px flex-1 bg-black/[0.08]" aria-hidden />
    </div>
  );
}

export function ResumePage() {
  return (
    <AppleInnerShell className="print-doc">
      <div className={cn(innerContainer, "max-w-3xl pt-[6.5rem] pb-24 sm:pt-28 lg:pt-32")}>
        {/* Header */}
        <header className="print-avoid-break">
          <p className={EYEBROW}>Résumé</p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,4vw+1rem,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1d1d1f]">
            {resume.name}
          </h1>
          <p className="mt-2 text-[17px] font-semibold text-[#0071e3] sm:text-[18px]">
            {resume.role}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-[#6e6e73]">
            <a href={`mailto:${resume.contact.email}`} className="inline-flex items-center gap-1.5 hover:text-[#1d1d1f]">
              <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              {resume.contact.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              {resume.contact.location}
            </span>
            <a
              href={`https://${resume.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#1d1d1f]"
            >
              <Globe className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              {resume.contact.website}
            </a>
          </div>
          <div className="mt-7">
            <PrintActions pdfHref={resume.pdf.href} downloadName={resume.pdf.downloadName} />
          </div>
        </header>

        <hr className="my-10 border-black/[0.08]" />

        {/* Summary */}
        <section className="print-avoid-break">
          <SectionLabel>Professional Summary</SectionLabel>
          <p className="text-[15px] leading-relaxed text-[#424245] sm:text-[16px]">{resume.summary}</p>
        </section>

        {/* Featured project */}
        <section className="mt-10">
          <SectionLabel>Featured Project</SectionLabel>
          <div className="print-avoid-break">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-[18px] font-semibold text-[#1d1d1f]">
                {resume.featured.title}
                <span className="font-sans text-[14px] font-medium text-[#6e6e73]">
                  {" "}
                  · {resume.featured.context}
                </span>
              </h3>
              <span className="text-[13px] font-medium text-[#86868b]">{resume.featured.period}</span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73]">{resume.featured.intro}</p>
            <ul className="mt-3 space-y-2">
              {resume.featured.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-[14.5px] leading-relaxed text-[#424245]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071e3]" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href={resume.featured.caseStudyHref}
              className="mt-3 inline-flex items-center gap-1 text-[14px] font-semibold text-[#0071e3] hover:underline print:hidden"
            >
              View the full case study
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-10">
          <SectionLabel>Experience</SectionLabel>
          <div className="space-y-7">
            {resume.experience.map((job) => (
              <div key={`${job.company}-${job.period}`} className="print-avoid-break">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-[17px] font-semibold text-[#1d1d1f]">
                    {job.role}
                    <span className="font-sans text-[14px] font-medium text-[#6e6e73]"> · {job.company}</span>
                  </h3>
                  <span className="text-[13px] font-medium text-[#86868b]">
                    {job.period} · {job.location}
                  </span>
                </div>
                <ul className="mt-2.5 space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-[14.5px] leading-relaxed text-[#424245]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d2d2d7]" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <SectionLabel>Skills</SectionLabel>
          <dl className="space-y-3.5">
            {resume.skills.map((s) => (
              <div key={s.group} className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-4 print-avoid-break">
                <dt className="text-[14px] font-semibold text-[#1d1d1f]">{s.group}</dt>
                <dd className="text-[14.5px] leading-relaxed text-[#6e6e73]">{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Education */}
        <section className="mt-10">
          <SectionLabel>Education</SectionLabel>
          <div className="space-y-5">
            {resume.education.map((e) => (
              <div key={e.degree} className="print-avoid-break">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-[16px] font-semibold text-[#1d1d1f]">{e.degree}</h3>
                  <span className="text-[13px] font-medium text-[#86868b]">{e.period}</span>
                </div>
                <p className="mt-1 text-[14.5px] text-[#6e6e73]">{e.school}</p>
                {"note" in e && e.note ? (
                  <p className="mt-1 text-[13px] text-[#86868b]">{e.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppleInnerShell>
  );
}
