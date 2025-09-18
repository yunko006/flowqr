import Link from "next/link";
import { LatestPost } from "@/app/_components/post";
import { HydrateClient, api } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="min-h-screen w-full bg-black relative">
        {/* Vercel Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-16 min-h-screen text-white">
          <h1 className="font-extrabold text-5xl tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20 transition-colors duration-200"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="font-bold text-2xl">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>

            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20 transition-colors duration-200"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="font-bold text-2xl">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>

          <LatestPost />
        </div>
      </main>
    </HydrateClient>
  );
}
