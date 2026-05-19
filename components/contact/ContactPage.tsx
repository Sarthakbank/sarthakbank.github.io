"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { contactChannels, contactHero } from "@/content/contact";
import {
  stitchBody,
  stitchBtnGhost,
  stitchBtnPrimary,
  stitchContainer,
  stitchGlass,
  stitchGlassPanel,
  stitchHeadlineLg,
  stitchHome,
  stitchLabel,
  stitchSection,
} from "@/lib/stitchTokens";
import { cn } from "@/lib/cn";

const sectionAlt = "border-t border-white/[0.06] bg-[#0b0d10]";

type ChannelKey = keyof typeof contactChannels;

const channelMeta: Record<
  ChannelKey,
  { icon: React.ReactNode; tag: string; accent: string }
> = {
  email: {
    icon: <Mail className="h-6 w-6" strokeWidth={1.65} aria-hidden />,
    tag: "Primary",
    accent: "border-l-[#00d1ff]",
  },
  linkedIn: {
    icon: <FaLinkedinIn className="h-6 w-6" aria-hidden />,
    tag: "Professional",
    accent: "border-l-[#3e90ff]",
  },
  github: {
    icon: <SiGithub className="h-6 w-6" aria-hidden />,
    tag: "Portfolio",
    accent: "border-l-[#4cd6ff]",
  },
};

function ChannelCard({ channelKey }: { channelKey: ChannelKey }) {
  const channel = contactChannels[channelKey];
  const meta = channelMeta[channelKey];
  const isEmail = channelKey === "email";

  return (
    <article
      className={cn(
        stitchGlassPanel,
        "flex h-full flex-col border-l-2 p-6 sm:p-7",
        meta.accent,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#00d1ff]/25 bg-[#00d1ff]/[0.08] text-[#00d1ff]">
            {meta.icon}
          </div>
          <div>
            <p className={cn(stitchLabel, "text-[#859399]")}>{channel.label}</p>
            <span
              className={cn(
                "mt-2 inline-flex rounded border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em]",
                isEmail
                  ? "border-[#ff9f0a]/25 bg-[#ff9f0a]/10 text-[#ff9f0a]"
                  : "border-white/10 bg-white/[0.04] text-[#859399]",
              )}
            >
              {meta.tag}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex-1 border-t border-white/[0.06] pt-6">
        <a
          href={channel.href}
          target={channelKey === "email" ? undefined : "_blank"}
          rel={channelKey === "email" ? undefined : "noopener noreferrer"}
          className={cn(
            "break-all font-semibold text-[#e1e2e8] transition hover:text-[#00d1ff]",
            isEmail ? "text-lg sm:text-xl" : "text-base",
          )}
        >
          {channel.value}
        </a>
        <p className="mt-3 text-[15px] leading-relaxed text-[#859399]">{channel.hint}</p>
      </div>

      <Link
        href={channel.href}
        target={channelKey === "email" ? undefined : "_blank"}
        rel={channelKey === "email" ? undefined : "noopener noreferrer"}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center sm:w-auto",
          isEmail ? stitchBtnPrimary : stitchBtnGhost,
        )}
      >
        {channel.cta}
      </Link>
    </article>
  );
}

export function ContactPage() {
  return (
    <div className={cn(stitchHome, "overflow-x-hidden")}>
      {/* 1. Hero */}
      <section className="scroll-mt-28 pt-10 sm:pt-14">
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#4cd6ff]")}>Contact</p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw+1rem,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#e1e2e8]">
            {contactHero.title}
          </h1>
          <p className={cn("mt-6 max-w-2xl text-pretty", stitchBody)}>{contactHero.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={contactChannels.email.href} className={stitchBtnPrimary}>
              <Mail className="mr-2 h-4 w-4" aria-hidden />
              Email
            </Link>
            <Link
              href={contactChannels.linkedIn.href}
              className={stitchBtnGhost}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="mr-2 h-4 w-4" aria-hidden />
              LinkedIn
            </Link>
            <Link
              href={contactChannels.github.href}
              className={stitchBtnGhost}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="mr-2 h-4 w-4" aria-hidden />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Contact cards */}
      <section className={cn(stitchSection, sectionAlt)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Channels</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>Reach out directly</h2>
          <p className={cn("mt-4 max-w-2xl text-pretty", stitchBody)}>
            Each card opens the channel in one click — email is the fastest route for opportunities and
            timelines.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <ChannelCard channelKey="email" />
            <ChannelCard channelKey="linkedIn" />
            <ChannelCard channelKey="github" />
          </div>
        </div>
      </section>

      {/* 3. Next step */}
      <section className={cn(stitchSection, "border-t border-white/[0.06] bg-[#050607] pb-20 sm:pb-24")}>
        <div className={stitchContainer}>
          <div className={cn(stitchGlass, "px-6 py-10 sm:px-10 sm:py-12")}>
            <p className={cn(stitchLabel, "text-[#859399]")}>Next step</p>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,2vw+0.75rem,2rem)] font-semibold tracking-tight text-[#e1e2e8]">
              Review the featured project, then reach out.
            </h2>
            <p className={cn("mt-4 max-w-2xl text-pretty", stitchBody)}>
              The case study is the fastest overview of level design craft on this site — one scroll,
              clear beats, and honest portfolio framing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/case-study" className={stitchBtnPrimary}>
                View featured project
              </Link>
              <Link href={contactChannels.email.href} className={stitchBtnGhost}>
                Email directly
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-1 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#00d1ff] transition hover:text-[#4cd6ff]"
              >
                Back home
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
