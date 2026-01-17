"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const userHasTyped = useRef(false)

  useEffect(() => {
    const cleanWhitespace = () => {
      if (userHasTyped.current) return // Stop if user started typing
      const el = document.getElementById("fullName") as HTMLInputElement | null
      if (el && el.value && el.value.trim() === "") {
        el.value = ""
      }
    }

    cleanWhitespace()

    const interval = setInterval(cleanWhitespace, 100)
    const timeout = setTimeout(() => {
      clearInterval(interval)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (userName && userEmail) {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false)
      setFormSubmitted(true)
    }
  }

  return (
    <main
      className="min-h-screen w-full"
      style={{
        backgroundImage: `url('/images/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <style jsx global>{`
        input::placeholder {
          color: #9ca3af !important;
          opacity: 1 !important;
        }
        input::-webkit-input-placeholder {
          color: #9ca3af !important;
          opacity: 1 !important;
        }
        input::-moz-placeholder {
          color: #9ca3af !important;
          opacity: 1 !important;
        }
        input:-ms-input-placeholder {
          color: #9ca3af !important;
          opacity: 1 !important;
        }
        #fullName::placeholder {
          color: #9ca3af !important;
          opacity: 1 !important;
          -webkit-text-fill-color: #9ca3af !important;
        }
      `}</style>

      <section className="relative w-full pt-6 pb-0">
        <div className="flex flex-col items-center px-4 max-w-lg mx-auto">
          <div className="w-56 md:w-64 mb-0">
            <img
              src="/images/sem-20nome-20-281080-20x-201080-20px-29-20-281-29-20-281-29.png"
              alt="The Age Of Abundance"
              className="w-full h-auto object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(0,0,0,0.9)) drop-shadow(0 0 20px rgba(0,0,0,0.7)) drop-shadow(2px 2px 4px rgba(0,0,0,1))",
              }}
            />
          </div>
        </div>

        <div className="mt-4 mx-3 md:mx-auto md:max-w-lg bg-white rounded-t-3xl px-5 md:px-8 pt-8 pb-6">
          <h2 className="text-[#1a1a1a] text-2xl font-bold text-center mb-3">When everything feels dark...</h2>
          <p className="text-[#c9a227] text-lg text-center mb-8">{"that's when the true light begins to shine."}</p>

          <div className="space-y-5 text-[#1a1a1a] text-base leading-relaxed max-w-md mx-auto">
            <p>There are days when it feels like the world has forgotten about us.</p>
            <p>Days when silence hurts more than any words.</p>
            <p>Days when the exhaustion is heavier than the body can bear...</p>
            <p className="font-semibold">Because it comes from the soul.</p>
            <p className="font-semibold">From a broken heart.</p>
            <p className="font-semibold">From the weight of a lifetime that no one ever saw.</p>
          </div>

          <div className="mt-6 border-l-4 border-[#c9a227] bg-[#fef9e7] pl-4 py-4 pr-3 rounded-r-lg max-w-md mx-auto">
            <p className="text-[#1a1a1a] text-center text-base leading-relaxed">
              Maybe today is one of those days for you.
            </p>
            <p className="text-[#1a1a1a] text-center text-base leading-relaxed mt-2">
              Maybe you're carrying a burden no one understands.
            </p>
            <p className="text-[#1a1a1a] text-center text-base leading-relaxed mt-2">
              Falling asleep with a tight chest...
            </p>
            <p className="text-[#1a1a1a] text-center text-base leading-relaxed mt-4 italic">
              And waking up with the feeling that nothing will ever change.
            </p>
          </div>

          <div className="mt-8 text-center max-w-md mx-auto">
            <p className="text-[#1a1a1a] text-xl font-bold leading-snug">
              But let me tell you something,
              <br />
              from the bottom of my heart:
            </p>
            <p className="text-[#c9a227] text-2xl font-bold mt-4 flex items-center justify-center gap-2">
              <span>📊</span> You are not here by accident.
            </p>
          </div>

          <div className="mt-6 text-center space-y-4 max-w-md mx-auto">
            <p className="text-[#1a1a1a] text-lg font-semibold">{"You didn't land on this page by mistake."}</p>
            <p className="text-[#1a1a1a] text-lg font-bold">This is much bigger than it seems.</p>
            <p className="text-[#1a1a1a] text-lg font-bold">{"It's a calling."}</p>
          </div>

          <div className="mt-6 text-center max-w-md mx-auto">
            <p className="text-[#1a1a1a] text-lg font-bold leading-relaxed">
              {"It's the Universe — or maybe God Himself — gently pushing you back to your path."}
            </p>
            <p className="text-[#1a1a1a] text-lg mt-4 flex items-center justify-center gap-2">
              <span>🕊️</span> <span className="font-semibold">Because even when everything feels dark...</span>
            </p>
          </div>

          <div className="mt-6 text-center max-w-md mx-auto">
            <h3 className="text-[#c9a227] text-2xl font-bold leading-snug">
              {"That's when miracles begin to happen."}
            </h3>
          </div>

          <div className="mt-6 space-y-4 text-[#1a1a1a] text-base leading-relaxed max-w-md mx-auto">
            <p>{"Maybe you've felt fear."}</p>
            <p>{"Maybe you've heard that voice whisper, \"This isn't for you.\""}</p>
            <p>Maybe your whole life they made you believe you were born to struggle — and nothing more.</p>
          </div>

          <div className="mt-6 bg-[#fdf8f0] rounded-2xl p-5 max-w-md mx-auto">
            <p className="text-[#1a1a1a] text-xl font-bold text-center">But what if all of that is about to change?</p>
            <p className="text-[#1a1a1a] text-base text-center mt-4 leading-relaxed">
              {
                "What if what's waiting for you now... is the breakthrough you've been silently praying for night after night?"
              }
            </p>
          </div>

          <div className="mt-6 bg-[#f7e86f] rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-[#1a1a1a] text-2xl font-bold text-center">The Divine Script</h3>
            <p className="text-[#1a1a1a] text-base text-center mt-3">was written with your story.</p>
            <div className="mt-4 text-center space-y-2 text-[#1a1a1a]">
              <p>With your scars.</p>
              <p>With your hidden cries.</p>
              <p className="font-semibold">{"It's a bridge."}</p>
              <p className="font-semibold">From pain to freedom.</p>
              <p className="font-semibold">From doubt to faith.</p>
              <p className="font-semibold">From scarcity to abundance.</p>
            </div>
          </div>

          <div className="mt-8 text-center max-w-md mx-auto">
            <p className="text-[#1a1a1a] text-lg font-bold flex items-center justify-center gap-2">
              <span>🌱</span> And the first step of this new journey... begins with a choice.
            </p>
            <p className="text-[#1a1a1a] text-lg font-bold mt-6 flex items-center justify-center gap-2">
              <span>👉</span> You can close this page and keep listening to that old voice of fear...
            </p>
            <p className="text-[#1a1a1a] text-lg mt-6 leading-relaxed">
              Or you can listen — maybe for the first time — to the voice of your soul saying:
            </p>
            <p className="text-[#1a1a1a] text-xl italic mt-4 font-medium">
              {'"It\'s time to live what is rightfully mine."'}
            </p>
            <p className="text-[#1a1a1a] text-base mt-6">The question now echoing in your heart is simple:</p>
          </div>

          <div className="mt-6 text-center max-w-md mx-auto">
            <p className="text-[#c9a227] text-2xl font-bold leading-snug flex items-center justify-center gap-2">
              <span>🎙️</span> Will you answer the calling... or will you let this chance slip away again?
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative w-full pb-8 pt-0"
        style={
          formSubmitted
            ? {
                backgroundImage: `url('/images/background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : { backgroundColor: "white" }
        }
      >
        <div
          className={`relative mx-3 md:mx-auto md:max-w-lg rounded-3xl p-6 mt-0 shadow-lg backdrop-blur-sm ${formSubmitted ? "bg-white/90" : "bg-white"}`}
        >
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-[#c9a227] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[#1a1a1a] font-semibold mt-4">Preparing your Divine Script...</p>
            </div>
          ) : !formSubmitted ? (
            <>
              <div className="text-center">
                <p className="text-lg font-bold text-[#1a1a1a] flex items-center justify-center gap-2">
                  <span>🌟</span> Get Your Personalized Divine Script
                </p>
                <p className="text-[#666] text-sm mt-2">
                  Enter your details below to receive your custom Divine Script within the next few hours
                </p>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="fullName"
                  name="fullname"
                  placeholder="Enter your full name"
                  onFocus={() => {
                    userHasTyped.current = true
                  }}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  autoComplete="off"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#c9a227] bg-white text-gray-900 placeholder-gray-400"
                />
                <input
                  type="email"
                  id="useremail"
                  name="useremail"
                  placeholder="Enter your email address"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                  autoComplete="off"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#c9a227] bg-white text-gray-900 placeholder-gray-400"
                />
                <input type="hidden" name="utm_source" value="" />
                <input type="hidden" name="utm_campaign" value="" />
                <input type="hidden" name="utm_medium" value="" />
                <input type="hidden" name="utm_content" value="" />
                <input type="hidden" name="utm_term" value="" />
                <input type="hidden" name="xcod" value="" />
                <input type="hidden" name="sck" value="" />
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span>✨</span> Send Me My Personalized Divine Script <span>✨</span>
                </button>
              </form>

              <p className="text-center text-xs text-[#666] mt-4">
                * Your information is secure and will never be shared
              </p>
            </>
          ) : (
            <>
              <div className="bg-[#e8f5e9] rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-[#4ade80] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a]">Thank You, {userName}!</h3>
                <p className="text-[#666] mt-3">Your Personalized Divine Script is being prepared...</p>
                <p className="text-[#666] mt-4 flex items-center justify-center gap-2">
                  <span>🔮</span> Within the next few hours, you will receive your custom Divine Script directly in your
                  email at:
                </p>
                <p className="text-[#c9a227] font-bold text-lg mt-2 break-all px-2 max-w-full">{userEmail}</p>
                <p className="text-[#666] text-sm mt-4 flex items-center justify-center gap-2">
                  <span>🌟</span> Please check your inbox (and spam folder) for your personalized transformation script
                </p>
              </div>
            </>
          )}
        </div>

        {formSubmitted && (
          <div className="mt-8 px-3 md:px-0 md:max-w-lg md:mx-auto">
            <div className="bg-[#1a1a2e]/80 rounded-xl py-4 px-3 mb-6">
              <h3 className="text-[#f7e86f] text-2xl font-bold text-center">
                Or choose your transformation level now:
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1a1a2e] rounded-2xl p-4 overflow-hidden">
                <div className="border-4 border-[#c9a227] rounded-xl overflow-hidden mb-4">
                  <img
                    src="/images/ymmmpsh8j8hrfm9kipssq7qc.png"
                    alt="Seedling - $27 option"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <a
                  href="https://ageofabundance.mycartpanda.com/checkout/205950634:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#f7e86f] text-[#1a1a1a] font-bold text-lg rounded-xl hover:bg-[#e6d85e] transition-colors text-center"
                >
                  This is the life I choose – $27
                </a>
              </div>

              <div className="bg-[#1a1a2e] rounded-2xl p-4 overflow-hidden">
                <div className="border-4 border-[#c9a227] rounded-xl overflow-hidden mb-4">
                  <img
                    src="/images/z2h6ejvvhrkvy9fvgy5hnhh0.png"
                    alt="Green tree with fruits - $47 option"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <a
                  href="https://ageofabundance.mycartpanda.com/checkout/205951168:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#f7e86f] text-[#1a1a1a] font-bold text-lg rounded-xl hover:bg-[#e6d85e] transition-colors text-center"
                >
                  This is the life I choose – $47
                </a>
              </div>

              <div className="bg-[#1a1a2e] rounded-2xl p-4 overflow-hidden">
                <div className="border-4 border-[#c9a227] rounded-xl overflow-hidden mb-4">
                  <img
                    src="/images/s1o4hl3p8ccq85rhevw3tlef.png"
                    alt="Golden tree with coins - $77 option"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <a
                  href="https://ageofabundance.mycartpanda.com/checkout/205951171:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#f7e86f] text-[#1a1a1a] font-bold text-lg rounded-xl hover:bg-[#e6d85e] transition-colors text-center"
                >
                  This is the life I choose – $77
                </a>
              </div>

              <div className="bg-[#1a1a2e] rounded-2xl p-4 overflow-hidden">
                <div className="border-4 border-[#c9a227] rounded-xl overflow-hidden mb-4">
                  <img
                    src="/images/background.png"
                    alt="Divine abundance - $100 option"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <a
                  href="https://ageofabundance.mycartpanda.com/checkout/205951174:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#f7e86f] text-[#1a1a1a] font-bold text-lg rounded-xl hover:bg-[#e6d85e] transition-colors text-center"
                >
                  This is the life I choose – $100
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-6 pb-4">
          <div className="w-32 h-1 bg-[#1a1a1a] rounded-full"></div>
        </div>
      </section>
    </main>
  )
}
