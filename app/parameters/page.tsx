"use client";

import {title} from "@/components/primitives";
import React from "react";
import Image from "next/image";
import ParametersDoc from "@/markdown/parameters.mdx";


export default function ParameterPage() {
  const [selectedSig, setSelectedSig] = React.useState("sig1");
  const [selectedComponent, setSelectedComponent] = React.useState("original");

  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
            integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww"
            crossOrigin="anonymous"/>
      <div className="text-center justify-center">
        <h2 className={title()}>Parameter Description</h2>
      </div>
      <br/>
      <ParametersDoc/>
    </div>
  );
}
