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
      className="flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md active:translate-y-0 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-500"
    >
      {link.emoji && (
        <span className="text-xl" aria-hidden>
          {link.emoji}
        </span>
      )}
      <span className="flex-1 text-center">{link.title}</span>
      {/* 이모지와 균형을 맞추기 위한 여백 */}
      {link.emoji && <span className="w-6" aria-hidden />}
    </a>
  );
}
