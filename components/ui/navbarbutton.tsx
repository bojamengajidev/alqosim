"use client"

export default function NavbarButton() {
  return (
    <button
      className="
        inline-flex items-center gap-2
        rounded-xl
        border-2 border-yellow-400
        bg-gray-950
        px-4 py-2
        text-sm font-semibold text-white
        transition-all duration-300
        hover:border-yellow-300
        hover:bg-gray-900
        active:scale-95
      "
    >
      Get Started
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
        />
      </svg>
    </button>
  )
}
