"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import {
  FaArtstation,
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { contactChannels, contactOpportunity, contactPhones } from "@/content/contact";
import { AppleInnerShell } from "@/components/shared/AppleInnerShell";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { AppleCTASection } from "@/components/shared/AppleCTASection";
import {
  innerBody,
  innerCardHover,
  innerContainer,
  innerEyebrow,
  innerHeadline,
} from "@/lib/appleInnerTokens";
import { appleBtnGhost, appleBtnPrimary, appleBtnSecondary } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

/**
 * iOS/macOS-style app-icon tile colors per contact type. Rendered with inline
 * gradients so the tiles are always visible (independent of Tailwind JIT).
 * `text` is a white-safe variant for small chips/labels.
 */
type BrandKey =
  | "email"
  | "linkedin"
  | "artstation"
  | "youtube"
  | "discord"
  | "github"
  | "phone"
  | "whatsapp";

const BRAND: Record<BrandKey, { from: string; to: string; glow: string; text: string }> = {
  email: { from: "#007AFF", to: "#0A84FF", glow: "#007AFF", text: "#0071e3" },
  linkedin: { from: "#0A66C2", to: "#004182", glow: "#0A66C2", text: "#0a66c2" },
  artstation: { from: "#13AFF0", to: "#087EA4", glow: "#13AFF0", text: "#0a84c2" },
  youtube: { from: "#FF0033", to: "#FF5A3D", glow: "#FF0033", text: "#d70015" },
  discord: { from: "#5865F2", to: "#7C3AED", glow: "#5865F2", text: "#5b51e0" },
  github: { from: "#24292F", to: "#0D1117", glow: "#24292F", text: "#1d1d1f" },
  phone: { from: "#34C759", to: "#16A34A", glow: "#34C759", text: "#1f8f43" },
  whatsapp: { from: "#25D366", to: "#128C7E", glow: "#25D366", text: "#0f7a5a" },
};

type CardAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  external?: boolean;
  icon?: React.ReactNode;
};

const btnClass = {
  primary: appleBtnPrimary,
  secondary: appleBtnSecondary,
  ghost: appleBtnGhost,
} as const;

/** Premium white card base — rounded 30px, layered Apple-style shadow. */
const CONTACT_CARD =
  "rounded-[30px] border border-black/[0.05] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04),0_10px_34px_rgba(0,0,0,0.07)]";

/** App-icon style tile — strong brand gradient, white icon, subtle gloss + shadow. */
function AppIconTile({
  brand,
  size = "lg",
  children,
}: {
  brand: BrandKey;
  size?: "lg" | "sm";
  children: React.ReactNode;
}) {
  const b = BRAND[brand];
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-[18px] text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105",
        size === "lg" ? "h-16 w-16" : "h-14 w-14",
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${b.from}, ${b.to})`,
        boxShadow: `0 10px 22px -6px ${b.glow}73, inset 0 1px 0 rgba(255,255,255,0.20)`,
      }}
      aria-hidden
    >
      {children}
    </div>
  );
}

function ActionButton({ action, className }: { action: CardAction; className?: string }) {
  const Arrow = action.external ? ArrowUpRight : ArrowRight;
  return (
    <Link
      href={action.href}
      className={cn(btnClass[action.variant], "group/btn", className)}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noopener noreferrer" : undefined}
    >
      {action.icon ? <span className="mr-2 inline-flex">{action.icon}</span> : null}
      {action.label}
      <Arrow
        className={cn(
          "ml-1.5 h-4 w-4 transition-transform duration-200",
          action.external
            ? "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            : "group-hover/btn:translate-x-0.5",
        )}
        aria-hidden
      />
    </Link>
  );
}

function ActionCard({
  brand,
  icon,
  title,
  tag,
  description,
  detail,
  actions,
  compact = false,
}: {
  brand: BrandKey;
  icon: React.ReactNode;
  title: string;
  tag?: string;
  description: string;
  detail?: string;
  actions: CardAction[];
  compact?: boolean;
}) {
  const b = BRAND[brand];
  return (
    <article
      className={cn(
        CONTACT_CARD,
        innerCardHover,
        "group relative flex h-full flex-col overflow-hidden",
        compact ? "p-6" : "p-7 sm:p-8",
      )}
    >
      {/* Thin brand top accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundImage: `linear-gradient(90deg, ${b.from}, ${b.to})` }}
        aria-hidden
      />

      <div className="flex items-center gap-4">
        <AppIconTile brand={brand} size={compact ? "sm" : "lg"}>
          {icon}
        </AppIconTile>
        <div className="min-w-0">
          <p className="font-display text-[18px] font-semibold tracking-tight text-[#1d1d1f]">
            {title}
          </p>
          {tag ? (
            <span
              className="mt-1 inline-flex rounded-full bg-[#f5f5f7] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: b.text }}
            >
              {tag}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex-1">
        <p className="text-[15px] leading-relaxed text-[#6e6e73]">{description}</p>
        {detail ? (
          <p className="mt-3 text-[15px] font-medium" style={{ color: b.text }}>
            {detail}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
        {actions.map((action) => (
          <ActionButton
            key={action.label}
            action={action}
            className="w-full justify-center sm:w-auto"
          />
        ))}
      </div>
    </article>
  );
}

export function ContactPage() {
  return (
    <AppleInnerShell>
      {/* 1. Hero / intro */}
      <section className="relative overflow-hidden bg-[#f5f5f7] pt-[6.5rem] pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-[#f5f5f7]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#0071e3]/[0.10] blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-10 left-[-12%] h-[360px] w-[360px] rounded-full bg-[#af52de]/[0.08] blur-[120px]"
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
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
              <Link href={contactPhones.uk.tel} className={appleBtnGhost}>
                <Phone className="mr-2 h-4 w-4 text-[#16a34a]" aria-hidden />
                Call
              </Link>
            </div>
          </AppleReveal>
        </div>
      </section>

      {/* 2. Primary contact actions */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Primary</p>
            <h2 className={cn("mt-3", innerHeadline)}>Reach out directly</h2>
            <p className={cn("mt-4 max-w-2xl text-pretty", innerBody)}>
              Email is the fastest route for opportunities and timelines — LinkedIn works well for
              professional history and recommendations.
            </p>
          </AppleReveal>

          <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-2">
            <AppleReveal className="h-full">
              <ActionCard
                brand="email"
                icon={<Mail className="h-7 w-7" strokeWidth={1.9} aria-hidden />}
                title="Email"
                tag="Primary"
                description={contactChannels.email.hint}
                detail={contactChannels.email.value}
                actions={[
                  {
                    label: contactChannels.email.cta,
                    href: contactChannels.email.href,
                    variant: "primary",
                    icon: <Mail className="h-4 w-4" aria-hidden />,
                  },
                ]}
              />
            </AppleReveal>
            <AppleReveal delay={0.06} className="h-full">
              <ActionCard
                brand="linkedin"
                icon={<FaLinkedinIn className="h-6 w-6" aria-hidden />}
                title="LinkedIn"
                tag="Professional"
                description={contactChannels.linkedIn.hint}
                actions={[
                  {
                    label: contactChannels.linkedIn.cta,
                    href: contactChannels.linkedIn.href,
                    variant: "secondary",
                    external: true,
                    icon: <FaLinkedinIn className="h-4 w-4" aria-hidden />,
                  },
                ]}
              />
            </AppleReveal>
          </div>
        </div>
      </section>

      {/* 3. Social & portfolio links */}
      <section className="bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Social &amp; portfolio</p>
            <h2 className={cn("mt-3", innerHeadline)}>See the work in motion</h2>
            <p className={cn("mt-4 max-w-2xl text-pretty", innerBody)}>
              Environments, walkthroughs, and experiments across the platforms where the work lives.
            </p>
          </AppleReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            <AppleReveal className="h-full">
              <ActionCard
                compact
                brand="artstation"
                icon={<FaArtstation className="h-6 w-6" aria-hidden />}
                title="ArtStation"
                description={contactChannels.artstation.hint}
                actions={[
                  {
                    label: contactChannels.artstation.cta,
                    href: contactChannels.artstation.href,
                    variant: "secondary",
                    external: true,
                  },
                ]}
              />
            </AppleReveal>
            <AppleReveal delay={0.06} className="h-full">
              <ActionCard
                compact
                brand="youtube"
                icon={<FaYoutube className="h-6 w-6" aria-hidden />}
                title="YouTube"
                description={contactChannels.youtube.hint}
                actions={[
                  {
                    label: contactChannels.youtube.cta,
                    href: contactChannels.youtube.href,
                    variant: "secondary",
                    external: true,
                  },
                ]}
              />
            </AppleReveal>
            <AppleReveal delay={0.12} className="h-full">
              <ActionCard
                compact
                brand="discord"
                icon={<FaDiscord className="h-6 w-6" aria-hidden />}
                title="Discord"
                description={contactChannels.discord.hint}
                actions={[
                  {
                    label: contactChannels.discord.cta,
                    href: contactChannels.discord.href,
                    variant: "secondary",
                    external: true,
                  },
                ]}
              />
            </AppleReveal>
            <AppleReveal delay={0.18} className="h-full">
              <ActionCard
                compact
                brand="github"
                icon={<FaGithub className="h-6 w-6" aria-hidden />}
                title="GitHub"
                description={contactChannels.github.hint}
                actions={[
                  {
                    label: contactChannels.github.cta,
                    href: contactChannels.github.href,
                    variant: "secondary",
                    external: true,
                  },
                ]}
              />
            </AppleReveal>
          </div>
        </div>
      </section>

      {/* 4. Phone / direct communication */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Phone &amp; messaging</p>
            <h2 className={cn("mt-3", innerHeadline)}>Call or message directly</h2>
            <p className={cn("mt-4 max-w-2xl text-pretty", innerBody)}>
              Available across two regions — tap to call, or start a WhatsApp conversation.
            </p>
          </AppleReveal>

          <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-2">
            {(["uk", "india"] as const).map((key, i) => {
              const phone = contactPhones[key];
              return (
                <AppleReveal key={key} delay={i * 0.06} className="h-full">
                  <ActionCard
                    brand="phone"
                    icon={<Phone className="h-7 w-7" strokeWidth={1.9} aria-hidden />}
                    title={phone.label}
                    tag={phone.region}
                    description="Direct line for calls and quick coordination."
                    detail={phone.number}
                    actions={[
                      {
                        label: "Call",
                        href: phone.tel,
                        variant: "primary",
                        icon: <Phone className="h-4 w-4 text-[#34c759]" aria-hidden />,
                      },
                      {
                        label: "WhatsApp",
                        href: phone.whatsapp,
                        variant: "secondary",
                        external: true,
                        icon: <FaWhatsapp className="h-4 w-4 text-[#25D366]" aria-hidden />,
                      },
                    ]}
                  />
                </AppleReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
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
