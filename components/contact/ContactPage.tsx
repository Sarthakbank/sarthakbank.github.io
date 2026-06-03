"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { contactChannels, contactOpportunity } from "@/content/contact";
import { AppleInnerShell } from "@/components/shared/AppleInnerShell";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { AppleCTASection } from "@/components/shared/AppleCTASection";
import {
  innerAccents,
  innerBody,
  innerCard,
  innerCardHover,
  innerContainer,
  innerEyebrow,
  innerHeadline,
  type InnerAccentKey,
} from "@/lib/appleInnerTokens";
import { appleBtnGhost, appleBtnPrimary, appleBtnSecondary } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

type ChannelKey = keyof typeof contactChannels;

const channelMeta: Record<
  ChannelKey,
  { icon: React.ReactNode; tag: string; accent: InnerAccentKey }
> = {
  email: {
    icon: <Mail className="h-6 w-6" strokeWidth={1.75} aria-hidden />,
    tag: "Primary",
    accent: "blue",
  },
  linkedIn: {
    icon: <FaLinkedinIn className="h-[22px] w-[22px]" aria-hidden />,
    tag: "Professional",
    accent: "indigo",
  },
  github: {
    icon: <SiGithub className="h-6 w-6" aria-hidden />,
    tag: "Portfolio",
    accent: "graphite",
  },
};

function ChannelCard({ channelKey }: { channelKey: ChannelKey }) {
  const channel = contactChannels[channelKey];
  const meta = channelMeta[channelKey];
  const accent = innerAccents[meta.accent];
  const isEmail = channelKey === "email";

  return (
    <article
      className={cn(
        innerCard,
        innerCardHover,
        "group relative flex h-full flex-col overflow-hidden p-7 sm:p-8",
      )}
    >
      {/* Thin top accent bar */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-80",
          accent.bar,
        )}
        aria-hidden
      />

      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
            accent.badge,
          )}
        >
          {meta.icon}
        </div>
        <div>
          <p className="font-display text-[18px] font-semibold tracking-tight text-[#1d1d1f]">
            {channel.label}
          </p>
          <span
            className={cn(
              "mt-1 inline-flex rounded-full bg-[#f5f5f7] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em]",
              accent.text,
            )}
          >
            {meta.tag}
          </span>
        </div>
      </div>

      <div className="mt-6 flex-1 border-t border-black/[0.06] pt-6">
        <a
          href={channel.href}
          target={isEmail ? undefined : "_blank"}
          rel={isEmail ? undefined : "noopener noreferrer"}
          className={cn(
            "break-words font-medium text-[#1d1d1f] transition hover:text-[#0071e3]",
            isEmail ? "text-[18px] sm:text-[19px]" : "text-[16px]",
          )}
        >
          {channel.value}
        </a>
        <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73]">{channel.hint}</p>
      </div>

      <Link
        href={channel.href}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        className={cn("mt-7 w-full sm:w-auto", isEmail ? appleBtnPrimary : appleBtnSecondary)}
      >
        {channel.cta}
      </Link>
    </article>
  );
}

export function ContactPage() {
  return (
    <AppleInnerShell>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[#f5f5f7] pt-[6.5rem] pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-[#f5f5f7]"
          aria-hidden
        />
        {/* Soft colorful accent glow — accent only, not a background fill */}
        <div
          className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#0071e3]/[0.10] blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-10 left-[-12%] h-[360px] w-[360px] rounded-full bg-[#5856d6]/[0.08] blur-[120px]"
          aria-hidden
        />

        <div className={cn(innerContainer, "relative")}>
          <AppleReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/70 px-3.5 py-1.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34c759]" aria-hidden />
              <span className={innerEyebrow}>{contactOpportunity.eyebrow}</span>
            </span>
            <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw+0.5rem,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#1d1d1f]">
              {contactOpportunity.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-[18px] leading-[1.55] text-[#6e6e73] sm:text-[20px]">
              {contactOpportunity.supporting}
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={contactChannels.email.href} className={appleBtnPrimary}>
                <Mail className="mr-2 h-4 w-4" aria-hidden />
                Email
              </Link>
              <Link
                href={contactChannels.linkedIn.href}
                className={appleBtnSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="mr-2 h-4 w-4" aria-hidden />
                LinkedIn
              </Link>
              <Link
                href={contactChannels.github.href}
                className={appleBtnGhost}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="mr-2 h-4 w-4" aria-hidden />
                GitHub
              </Link>
            </div>
          </AppleReveal>
        </div>
      </section>

      {/* 2. Channels */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Channels</p>
            <h2 className={cn("mt-3", innerHeadline)}>Reach out directly</h2>
            <p className={cn("mt-4 max-w-2xl text-pretty", innerBody)}>
              Each card opens the channel in one click — email is the fastest route for
              opportunities and timelines.
            </p>
          </AppleReveal>

          <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-3">
            {(["email", "linkedIn", "github"] as const).map((key, i) => (
              <AppleReveal key={key} delay={i * 0.06} className="h-full">
                <ChannelCard channelKey={key} />
              </AppleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Next step */}
      <AppleCTASection
        eyebrow="Next step"
        title="Review the featured project, then reach out."
        body="The case study is the fastest overview of level design craft on this site — one scroll, clear beats, and honest portfolio framing."
        buttons={[
          { label: "View featured project", href: "/case-study", variant: "primary" },
          { label: "Email directly", href: contactChannels.email.href, variant: "secondary" },
          { label: "Back home", href: "/", variant: "ghost" },
        ]}
      />
    </AppleInnerShell>
  );
}
