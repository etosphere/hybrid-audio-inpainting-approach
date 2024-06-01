"use client";

import {title} from "@/components/primitives";
import React from "react";
import Image from "next/image";
import TechniquesDoc from "@/markdown/technical_details.mdx";


export default function TechniquesPage() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
            integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww"
            crossOrigin="anonymous"/>
      <div className="text-center justify-center">
        <h2 className={title()}>Technical Details</h2>
      </div>
      <br/>
      <TechniquesDoc/>
    </div>
  );
}
