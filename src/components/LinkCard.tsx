import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
};

export default function LinkCard({ link }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-3xl border border-white/70 bg-white/45 px-5 py-[18px] text-[15px] font-semibold text-stone-800 shadow-[0_1px_2px_rgba(120,70,40,0.04),0_10px_30px_-16px_rgba(180,100,60,0.35)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_1px_2px_rgba(120,70,40,0.05),0_14px_34px_-16px_rgba(180,100,60,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-[0_10px_30px_-16px_rgba(0,0,0,0.6)] dark:hover:bg-white/[0.1]"
    >
      {link.emoji && (
        <span className="w-6 text-center text-xl" aria-hidden>
          {link.emoji}
        </span>
      )}
      <span className="flex-1 text-center">{link.title}</span>
      {/* 이모지와 균형을 맞추기 위한 여백 */}
      {link.emoji && <span className="w-6" aria-hidden />}
    </a>
  );
}
