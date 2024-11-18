import React from "react";
import Head from "next/head";

export default function MetaDetails(props: any) {
  const { metaTitle, metaDescription, image, metaKeyword } = props;
  return (
    <div>
      <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={image} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/Images/Favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/Images/Favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/Images/Favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/Images/Favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      </Head>
    </div>
  );
}
