import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import Image from 'next/image';

// ─── EDIT YOUR INFO HERE ─────────────────────────────────────────────────────
const NAME = 'Leo Dörig';
const ROLE = 'Somewhere between spreadsheet and lookbook';
const TAGLINE = 'Marketer. Overconsumer of good design';
const BIO =
  "I'm a creative based somewhere in the world, blending design thinking with technical craft. I believe the best work lives at the intersection of aesthetics and function — and I spend my days chasing that line.";
const EMAIL = 'leodoerig@hotmail.com';
const SOCIAL_INSTAGRAM = 'https://www.instagram.com/leo.mrtn/';
const SOCIAL_LINKEDIN = 'https://www.linkedin.com/in/leo-doerig/';

// ─── INTERESTS ────────────────────────────────────────────────────────────────
const INTERESTS = [
  {
    title: 'Music',
    description: 'From late-night production sessions to hunting for records — sound shapes how I think.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
  },
  {
    title: 'Photography',
    description: 'Street photography, golden-hour portraits, anything with texture and contrast.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80',
  },
  {
    title: 'Architecture',
    description: 'Brutalism, wabi-sabi, the way light changes a building at different hours.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    title: 'Code & Systems',
    description: 'Building elegant abstractions and figuring out why things break at 2 am.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <FlowArt aria-label="Portfolio">

      {/* ── 01 HERO ──────────────────────────────────────────────────────── */}
      <FlowSection
        aria-label="Hero"
        style={{ backgroundColor: '#2A2826', color: '#F5F2EC' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
          01 — Hello
        </p>
        <hr className="my-[2vw] border-t border-[#F5F2EC]/20" />

        <div>
          <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.85] uppercase tracking-tight">
            {NAME.split(' ').map((word, i) => (
              <span key={i}>
                {word}
                <br />
              </span>
            ))}
          </h1>
        </div>

        <hr className="my-[2vw] border-t border-[#F5F2EC]/20" />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[45ch] text-[clamp(1rem,2.5vw,1.6rem)] font-normal leading-relaxed opacity-80">
            {TAGLINE}
          </p>
          <p className="text-sm font-bold uppercase tracking-widest opacity-40">
            {ROLE}
          </p>
        </div>
      </FlowSection>

      {/* ── 02 ABOUT ─────────────────────────────────────────────────────── */}
      <FlowSection
        aria-label="About"
        style={{ backgroundColor: '#F5F2EC', color: '#2A2826' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">
          02 — About
        </p>
        <hr className="my-[2vw] border-t border-[#2A2826]/15" />

        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.85] uppercase tracking-tight">
            Who
            <br />
            I Am
          </h2>
        </div>

        <hr className="my-[2vw] border-t border-[#2A2826]/15" />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[6vw]">
          {/* Photo */}
          <div className="relative w-full max-w-xs shrink-0 overflow-hidden rounded-lg lg:w-[28vw] lg:max-w-none">
            {/* Replace /images/profile.jpg with your own photo in the public/images folder */}
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80"
              alt="Profile photo"
              width={700}
              height={900}
              className="aspect-[3/4] w-full object-cover"
              priority
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-between gap-6 lg:pt-4">
            <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
              {BIO}
            </p>

            <div className="flex flex-wrap gap-3">
              {['Design', 'Development', 'Motion', 'Strategy'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#2A2826]/30 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <hr className="mt-auto border-t border-[#2A2826]/15" />
      </FlowSection>

      {/* ── 03 INTERESTS ─────────────────────────────────────────────────── */}
      <FlowSection
        aria-label="Interests"
        style={{ backgroundColor: '#7A9B7F', color: '#F5F2EC' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">
          03 — Interests
        </p>
        <hr className="my-[2vw] border-t border-[#F5F2EC]/30" />

        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.85] uppercase tracking-tight">
            What
            <br />
            I Love
          </h2>
        </div>

        <hr className="my-[2vw] border-t border-[#F5F2EC]/30" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INTERESTS.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider">
                {item.title}
              </p>
              <p className="text-[clamp(0.85rem,1.3vw,1rem)] leading-relaxed opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <hr className="mt-auto border-t border-[#F5F2EC]/30" />
      </FlowSection>

      {/* ── 04 CONTACT ───────────────────────────────────────────────────── */}
      <FlowSection
        aria-label="Contact"
        style={{ backgroundColor: '#2A2826', color: '#F5F2EC' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
          04 — Contact
        </p>
        <hr className="my-[2vw] border-t border-[#F5F2EC]/20" />

        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.85] uppercase tracking-tight">
            Let&apos;s
            <br />
            Talk
          </h2>
        </div>

        <hr className="my-[2vw] border-t border-[#F5F2EC]/20" />

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <p className="max-w-[40ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed opacity-80">
            Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is open.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 text-[clamp(1.2rem,3vw,2.5rem)] font-bold uppercase tracking-tight transition-opacity hover:opacity-60"
            >
              {EMAIL}
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="flex gap-6 text-sm font-semibold uppercase tracking-widest opacity-50">
              <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:opacity-100">
                Instagram
              </a>
              <a href={SOCIAL_LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:opacity-100">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-auto border-t border-[#F5F2EC]/20" />
        <p className="text-xs opacity-30 uppercase tracking-widest">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
      </FlowSection>

    </FlowArt>
  );
}
