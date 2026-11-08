import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-6 pb-10 pt-6 sm:pt-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      <ul className="mt-10 flex flex-col gap-4">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>

      <footer className="mt-auto pt-16 text-center text-xs tracking-wide text-stone-400 dark:text-stone-500">
        🌳 링크나무
      </footer>
    </main>
  );
}
