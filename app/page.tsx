import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:lg:h-[360px]">
        <Image
          className="relative"
          src="/raagahub_logo.jpg"
          alt="RaagaHub Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
