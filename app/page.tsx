import Image from "next/image";

export const metadata = {
  title: "公式サイト準備中 | だるま",
  description: "焼もんじゃ鉄板 だるま 公式サイト準備中ページ",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src="/reserve-bg.jpeg"
        alt="background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-yellow-300/25 blur-3xl" />
            <div className="absolute inset-[-18px] rounded-full border border-yellow-200/20 blur-md" />
            <Image
              src="/Daruma_Logo_FIXED_WH.png"
              alt="だるまロゴ"
              width={300}
              height={300}
              priority
              className="relative z-10 h-auto w-[220px] md:w-[300px] drop-shadow-[0_0_30px_rgba(255,210,90,0.55)]"
            />
          </div>

          <p
            className="mb-4 text-3xl font-bold tracking-[0.08em] text-transparent md:text-5xl"
            style={{
              fontFamily:
                '"Times New Roman", "Hiragino Mincho ProN", "Yu Mincho", serif',
              backgroundImage:
                "linear-gradient(180deg, #fff7cc 0%, #f7d96b 22%, #d9a93a 52%, #fff1a8 78%, #b67a18 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              textShadow: "0 0 18px rgba(255,215,120,0.18)",
            }}
          >
            〜公式サイト〜
          </p>

          <p className="text-xl font-bold tracking-[0.08em] text-white md:text-3xl">
            準備中
          </p>

          <p className="mt-2 text-base font-medium tracking-[0.06em] text-white/85 md:text-xl">
            Coming Soon...
          </p>
        </div>
      </div>
    </main>
  );
}