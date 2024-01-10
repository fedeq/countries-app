export function LeftArrow({className = ""}: {className?: string}) {
  return (
    <svg
      className={`h-6 w-6 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
