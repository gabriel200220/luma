import Image from "next/image";
import type { Avatar } from "@/types";
import { cn } from "@/lib/cn";

interface AvatarStackProps {
  avatars: Avatar[];
  size?: number;
  className?: string;
}

export function AvatarStack({ avatars, size = 28, className }: AvatarStackProps) {
  return (
    <ul className={cn("flex items-center", className)} aria-label="Learner avatars">
      {avatars.map((avatar, index) => (
        <li
          key={avatar.src}
          className={cn("overflow-hidden rounded-full ring-2 ring-white", index > 0 && "-ml-2")}
          style={{ width: size, height: size }}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={size * 2}
            height={size * 2}
            className="h-full w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
