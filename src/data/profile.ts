export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로 (예: "/profile.jpg"). 없으면 이름 첫 글자로 표시 */
  image?: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com", emoji: "💻" },
    { id: "blog", title: "블로그", url: "https://velog.io", emoji: "✍️" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com", emoji: "📸" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com", emoji: "🎬" },
  ],
};
