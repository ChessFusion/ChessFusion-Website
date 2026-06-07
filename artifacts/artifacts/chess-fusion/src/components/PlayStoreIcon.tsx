import playstoreLogoPath from "@assets/playstore_logo-removebg-preview_1780838823157.png";

interface PlayStoreIconProps {
  size?: number;
  className?: string;
}

export default function PlayStoreIcon({ size = 20, className }: PlayStoreIconProps) {
  return (
    <img
      src={playstoreLogoPath}
      alt="Play Store"
      width={size}
      height={size}
      className={className}
      style={{ flexShrink: 0, objectFit: "contain", display: "block" }}
    />
  );
}
