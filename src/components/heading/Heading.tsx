import { HTMLAttributes, ReactNode } from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg";

export type HeadingProps = {
  as: HeadingLevel;
  size: HeadingSize;
  children: ReactNode;
  onClick?: () => void;
} & HTMLAttributes<HTMLHeadingElement>;

export default function Heading({ as, size, children, onClick }: HeadingProps) {
  const sizes: { [key: string]: string } = {
    "5xl": "text-5xl",
    "4xl": "text-4xl",
    "3xl": "text-3xl",
    "2xl": "text-2xl",
    xl: "text-xl",
    lg: "text-lg",
  };

  const Tag = as;

  return (
    <Tag className={sizes[size]} onClick={onClick}>
      {children}
    </Tag>
  );
}
