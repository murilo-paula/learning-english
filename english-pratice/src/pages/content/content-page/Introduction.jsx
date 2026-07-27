import React from "react";
import listen from "../../../assets/img/listening.jpg";
import read from "../../../assets/img/reading.jpg";
import write from "../../../assets/img/writing.jpg";

const Introduction = () => {
  return (
    <div className="w-full min-h-screen box-border p-5 md:p-10">

      <div className="grid grid-cols-1">
        <h1 className="text-4xl font-bold mb-5">
          The simplest and most practical path to your English fluency.
        </h1>
        <div className="max-w-300">
          <p>
            Welcome to our learning platform. We designed this space to transform
            the way you learn English, combining a straight-to-the-point
            methodology with practical content for your daily life, career, or
            travels. Forget boring grammar rules and start speaking from day one.
          </p>
          <h2 className="text-xl font-bold mt-5">How We Help You Grow:</h2>
          <p>
            <span className="font-bold">Practical Lessons:</span> Content focused
            on real-world conversations and job market scenarios.
          </p>
          <p>
            <span className="font-bold">Support Materials:</span> Exercises,
            e-books, and speaking guides to accelerate your learning.
          </p>
          <p>
            <span className="font-bold">Total Flexibility:</span> Study at your
            own pace, wherever and whenever you want.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 w-full p-10 gap-5">
        <div className="w-full order-1"><img className="rounded-2xl" src={listen} alt="" /></div>
        <div className="w-full order-1">
          <h3 className="font-bold text-2xl">To listen</h3>
          <p>Tune your ears to the rhythm of native speakers, embrace the natural flow of real-life conversations, and unlock an effortless, deep level of comprehension that will break your dependency on subtitles and mental translation forever.</p>
        </div>

        <div className="w-full order-4 md:order-3">
          <h3 className="font-bold text-2xl">To read</h3>
          <p >Expand your vocabulary on a massive scale, master complex sentence structures organically, and gain a profound understanding of grammar effortlessly by immersing your mind in rich, engaging, real-world texts.</p>
        </div>
        <div className="w-full order-3 md:order-4"><img className="rounded-2xl" src={read} alt="" /></div>

        <div className="w-full order-5"><img className="rounded-2xl" src={write} alt="" /></div>
        <div className="w-full order-5">
          <h3 className="font-bold text-2xl">To write</h3>
          <p>Organize your thoughts with absolute clarity, eliminate the constant fear of grammar mistakes, and build a permanent foundation of confidence to express yourself with maximum precision and professionalism.</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
