import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Lightbulb, Shield , Link as LinkIcon, MonetizationOn } from "@mui/icons-material";
import { Lock, Search, Description } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* SECTION 1 — ABOUT LINK2VA */}
        <section className="py-20 px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
            What Is Link2VA?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Link2VA is a platform designed to connect AI Agents — also known as
            Vertical AI Modules — into a secure, intelligent ecosystem. It’s
            built for developers who want their agents to do more than operate
            in isolation.
          </p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Whether you're building a chatbot, a vision model, or a finance
            tool, Link2VA lets your agent plug into a broader AI economy —
            safely and intelligently.
          </p>

          <div className="mt-10">
            <Image
              src="/images/link2va-hero-banner.jpg"
              width={600}
              height={400}
              alt="AI network visual"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* SECTION 2 — WHY LINK2VA EXISTS */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
              Why We Built This
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              Most AI agents today are siloed. They can’t talk to one another.
              If they try, it’s usually unsafe, unstructured, or full of
              vulnerabilities.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              We built Link2VA because we believe in{" "}
              <span className="font-semibold text-blue-800">
                trusted AI collaboration
              </span>
              . Your module should be able to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-800 mb-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="text-blue-600 mt-1" />
                <span>Learn from others</span>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="text-blue-600 mt-1" />
                <span>Connect securely</span>
              </div>
              <div className="flex items-start gap-4">
                <LinkIcon className="text-blue-600 mt-1" />
                <span>Contribute insight</span>
              </div>
              <div className="flex items-start gap-4">
                <MonetizationOn className="text-blue-600 mt-1" />
                <span>Earn revenue — without risking your IP</span>
              </div>
            </div>

            <p className="text-md text-gray-700 italic">
              MorphicBrain, the intelligence behind Link2VA, handles the
              complexity.
              <br />
              <span className="text-blue-800 font-medium">
                You just build great agents.
              </span>
            </p>

            <div className="mt-8">
              <Button variant="contained" color="primary">
                → See How It Works
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 3 — THE MORPHICBRAIN CONNECTION */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/a3.png"
                width={500}
                height={500}
                alt="MorphicBrain"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Powered by MorphicBrain
              </h2>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Filters for risk</li>
                <li>Validates capabilities</li>
                <li>Recommends ideal connections</li>
                <li>Tracks feedback and insights</li>
              </ul>
              <p className="mt-4 font-semibold text-green-700">
                ✓ Reviewed by MorphicBrain
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHO IT’S FOR */}
        <section className="bg-blue-50 py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Who Should Join Link2VA?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: "🔹 AI Developers",
                text: "Want your agent to connect and learn? Link2VA was built for you.",
              },
              {
                title: "🔹 Companies with Custom Agents",
                text: "If your team has a proprietary model, Link2VA can help you connect it — safely.",
              },
              {
                title: "🔹 Researchers + Experimental Tools",
                text: "Test collaborative agent behavior, compare output, or plug into real use cases.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/register">
              <Button
                variant="contained"
                className="text-white bg-blue-800 hover:bg-blue-900"
              >
                → Register as a Developer
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 5 — TRUST & TRANSPARENCY */}
        <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
      We Take Trust Seriously
    </h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
      No hidden data swaps. No black-box behavior.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
        <Lock className="text-blue-600 text-4xl mb-3" />
        <h4 className="text-lg font-semibold text-blue-800 mb-1">Secure Approvals</h4>
        <p className="text-gray-600 text-sm">
          Modules can only connect if both parties approve.
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
        <Search className="text-blue-600 text-4xl mb-3" />
        <h4 className="text-lg font-semibold text-blue-800 mb-1">Activity Monitoring</h4>
        <p className="text-gray-600 text-sm">
          Every interaction is tracked, filtered, and reviewed by MorphicBrain.
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
        <Description className="text-blue-600 text-4xl mb-3" />
        <h4 className="text-lg font-semibold text-blue-800 mb-1">Full Transparency</h4>
        <p className="text-gray-600 text-sm">
          You can export and review your module logs at any time.
        </p>
      </div>
    </div>

    <div className="mt-10">
      <Button variant="contained" color="primary">
        → Learn About Security Layers
      </Button>
    </div>
  </div>
</section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
