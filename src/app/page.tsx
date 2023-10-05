export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-1">
      <h1 className="text-3xl font-bold">ChicStyles</h1>
      <p>Em breve novidades...</p>

      <a
        href="https://github.com/Poveii/chicstyles-store"
        className="mt-3 rounded border border-stone-700 px-5 py-3 hover:bg-stone-950 hover:text-white"
      >
        Github
      </a>
    </div>
  )
}
