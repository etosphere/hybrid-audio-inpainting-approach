"use client";

import {title} from "@/components/primitives";
import {RadioGroup, Radio} from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export default function Experiment1Page() {
  const [selectedSig, setSelectedSig] = React.useState("sig1");
  const [selectedComponent, setSelectedComponent] = React.useState("original");

  return (
    <div>
      <div className="text-center justify-center">
        <h2 className={title()}>Parameter Description</h2>
      </div>
      <br/>

    </div>
  );
}
