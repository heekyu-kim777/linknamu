import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <section className="mt-4 flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-gray-800"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-4xl font-bold text-white ring-4 ring-white shadow-md dark:ring-gray-800"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{bio}</p>
    </section>
  );
}
