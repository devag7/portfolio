import Image from "next/image";

type IconProps = { className?: string; size?: number };

export function ArrowUpRight({ className, size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function Plus({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 0V16M0 8H16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function LogoMark({ dark = false, size = 48 }: { dark?: boolean; size?: number }) {
  return (
    <Image
      src={dark ? "/images/brand/LogoDark.svg" : "/images/brand/Logo.svg"}
      width={size}
      height={size}
      alt="Dev Agarwalla"
      priority
    />
  );
}

export function Moon({ size = 220 }: { size?: number }) {
  return (
    <Image
      src="/images/other/Planet.svg"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
    />
  );
}
