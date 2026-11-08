export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로 (예: "/profile.jpg") 또는 next.config에 허용된 외부 URL. 없으면 이름 첫 글자로 표시 */
  image?: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "김희규",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  image: "https://placehold.co/224x224/orange/white/png",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com", emoji: "💻" },
    { id: "blog", title: "블로그", url: "https://velog.io", emoji: "✍️" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com", emoji: "📸" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com", emoji: "🎬" },
  ],
};
