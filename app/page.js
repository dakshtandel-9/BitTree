import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#264F1A] min-h-[100vh] grid grid-cols-2">
        <div className=" flex justify-center flex-col ml-[10vw] gap-6">
          <p className="text-yellow-300 font-bold text-7xl">Everything you <br /> are. In one, <br />simple link in bio.</p>
          <p className="text-yellow-300 text-l">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2">
            <input className="px-2 py-2 focus:outline-green-800 bg-white rounded-md" type="text" placeholder="BitTree.ee/your-url" />
            <button className="bg-pink-300 font-semibold rounded-full px-4 py-4">Claim your BitTree</button>
          </div>
        </div>
        <div className=" mr-[10vw] flex items-center justify-center flex-col">
          <img src="/home.png" alt="Home page image" className="h-120" />
        </div>

      </section>
      <section className="bg-[#000] min-h-[200vh]">
        ksndc
      </section>
    </main>
  );
}
