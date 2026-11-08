import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

// 둥근 사진 + 흰 테두리 + 따뜻한 그림자로 살짝 떠 있는 느낌
const avatarClass =
  "h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_12px_32px_-12px_rgba(180,100,60,0.45),0_2px_6px_rgba(120,70,40,0.08)] dark:ring-white/10 dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.7)]";

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <section className="mt-6 flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          priority
          className={avatarClass}
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className={`${avatarClass} flex items-center justify-center bg-gradient-to-br from-orange-300 to-rose-400 text-4xl font-bold text-white`}
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
        {name}
      </h1>
      <p className="mt-2 max-w-[20rem] break-keep text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
        {bio}
      </p>
    </section>
  );
}
