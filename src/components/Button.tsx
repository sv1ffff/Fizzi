import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  const isShopNow = buttonText?.trim().toLowerCase() === "shop now";
  const buttonClassName = clsx(
    "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
    className,
  );

  if (isShopNow) {
    return (
      <a className={buttonClassName} href="https://INSTAGRAM.COM/SV1.DEV">
        {buttonText}
      </a>
    );
  }

  return (
    <PrismicNextLink
      className={buttonClassName}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
}
