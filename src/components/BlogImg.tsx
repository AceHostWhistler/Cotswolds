import Image, { ImageProps } from "next/image";
import React from "react";

// Create a white blur data placeholder for faster loading
const WHITE_BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";

interface BlogImgProps extends Omit<ImageProps, "quality" | "loading"> {
  priority?: boolean;
}

export default function BlogImg({
  src,
  alt,
  fill = true,
  style = { objectFit: "cover", backgroundColor: "white" },
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  ...props
}: BlogImgProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      style={style}
      sizes={sizes}
      quality={65}
      loading={priority ? "eager" : "lazy"}
      placeholder="blur"
      blurDataURL={WHITE_BLUR_DATA_URL}
      priority={priority}
      {...props}
    />
  );
} 