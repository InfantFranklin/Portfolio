import React, { useMemo, useCallback, useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [copied, setCopied] = useState(null)

  const handleCopy = useCallback((text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  },[]);

  const contacts = useMemo(() => [
    {
      id: "email",
      icon: <FaEnvelope size={20} />,
      label: "Email",
      value: "infantfranklin1@gmail.com",
      href: "mailto:infantfranklin1@gmail.com",
      hrefLabel: "Open Mail",
      onClick: () => handleCopy("infantfranklin1@gmail.com", "email"),
      color: "hover:border-cyan-400",
      iconColor: "text-cyan-400",
    },
    {
      id: "phone",
      icon: <FaPhone size={20} />,
      label: "Phone",
      value: "+91 9965562653",
      href: "tel:+919965562653",
      hrefLabel: "Call Now",
      onClick: () => handleCopy("+919965562653", "phone"),
      color: "hover:border-green-400",
      iconColor: "text-green-400",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/infant-franklin",
      href: "https://linkedin.com/in/infant-franklin-996384168",
      hrefLabel: "View Profile",
      onClick: () =>
        window.open(
          "https://linkedin.com/in/infant-franklin-996384168",
          "_blank",
        ),
      color: "hover:border-blue-400",
      iconColor: "text-blue-400",
    },
    {
      id: "github",
      icon: <FaGithub size={20} />,
      label: "GitHub",
      value: "github.com/InfantFranklin",
      href: "https://github.com/InfantFranklin",
      hrefLabel: "View Profile",
      onClick: () => window.open("https://github.com/InfantFranklin", "_blank"),
      color: "hover:border-gray-300",
      iconColor: "text-gray-300",
    },
  ],[handleCopy]);
  

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center px-4 py-8">
        {/* Header */}
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-b-gray-500">
            Contact
          </p>
          <p className="py-4 text-gray-400 text-sm sm:text-base">
            I'm open to new opportunities. Pick how you'd like to reach out —
            I'll get back to you promptly.
          </p>
        </div>

        {/* Contact Cards — 2 col on mobile, 2 col on desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {contacts.map(
            ({
              id,
              icon,
              label,
              value,
              onClick,
              href,
              hrefLabel,
              color,
              iconColor,
            }) => (
              <div
                key={id}
                className={`bg-gray-900 border border-gray-700 rounded-xl p-3 sm:p-6 transition-all duration-300 ${color}`}
              >
                {/* Icon + Label */}
                <div className="flex items-center gap-2 mb-2 sm:mb-4">
                  <span className={iconColor}>{icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-lg">
                      {label}
                    </p>
                    <p className="text-gray-400 text-xs hidden sm:block">
                      {value}
                    </p>
                  </div>
                </div>
                {/* Value on mobile */}
                <p className="text-gray-400 text-xs mb-2 sm:hidden truncate">
                  {value}
                </p>
                {/* Buttons */}

                <div className="flex gap-2">
                  {(id === "email" || id === "phone") && (
                    <button
                      onClick={onClick}
                      className="text-xs px-2 py-1.5 sm:px-4 sm:py-2 rounded-md bg-gray-800 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-200"
                    >
                      {copied === id ? "✓" : "Copy"}
                    </button>
                  )}

                  <a
                    href={href}
                    target={
                      id === "linkedin" || id === "github"
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1.5 sm:px-4 sm:py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 duration-300"
                  >
                    {hrefLabel}
                  </a>
                </div>
              </div>
            ),
          )}
        </div>

        <p className="text-center text-gray-600 text-xs mt-10">
          Based in Chennai, India · Available for remote & on-site opportunities
        </p>
      </div>
      {/* Resume Downloads — mobile/tablet only */}
      <div className="mt-8 lg:hidden">
        <p className="text-gray-500 text-xs uppercase tracking-widest text-center mb-3">
          Download Resume
        </p>
        <div className="flex gap-3 justify-center pb-4">
          <a
            href="/infant-resume-frontend.pdf"
            download
            className="px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm hover:scale-105 duration-300"
          >
            Frontend Resume ↓
          </a>

          <a
            href="/infant-resume-fullstack.pdf"
            download
            className="px-5 py-2.5 rounded-md border border-cyan-500 text-cyan-400 text-sm hover:scale-105 duration-300"
          >
            Fullstack Resume ↓
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact