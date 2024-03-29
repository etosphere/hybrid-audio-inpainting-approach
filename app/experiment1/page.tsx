"use client";

import { title } from "@/components/primitives";
import {RadioGroup, Radio} from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export default function Experiment1Page() {
	const [selectedSig, setSelectedSig] = React.useState("sig1");
	const [selectedResult, setSelectedResult] = React.useState("original");

	return (
		<div>
			<div className="text-center justify-center">
				<h2 className={title()}>Experiment 1</h2>
			</div>
			<br/>

			<div className="grid grid-cols-1 gap-y-4 text-center justify-center justify-items-center">
				<RadioGroup
					label="Select test signal"
					orientation="horizontal"
					value={selectedSig}
					onValueChange={setSelectedSig}
					className="items-center"
				>
					<Radio value="sig1">synthesized</Radio>
					<Radio value="sig2">soprano recording</Radio>
				</RadioGroup>

				<RadioGroup
					label="Select result"
					orientation="horizontal"
					value={selectedResult}
					onValueChange={setSelectedResult}
					className="items-center"
				>
					<Radio value="original">Original</Radio>
					<Radio value="gap">Added gap</Radio>
					<Radio value="hybrid">Hybrid</Radio>
					<Radio value="aspain">A-SPAIN</Radio>
					<Radio value="wcp">w-CP</Radio>
					<Radio value="recp">re-CP</Radio>
					<Radio value="janssen">Janssen</Radio>
				</RadioGroup>

				{/*<p className="text-default-500 text-small mt-2">Selected: {selectedSig}-{selectedResult}</p>*/}
				<br/>

				<Image
					alt={`TF representation of the ${selectedResult} component of the test signal ${selectedSig[selectedSig.length - 1]}`}
					src={`./images/experiment1/${selectedSig}-${selectedResult}.webp`}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					width={800}
					height={500}
					style={{backgroundColor: "white"}}
				/>

				<audio controls src={`./audios/experiment1/${selectedSig}-${selectedResult}.wav`}/>
			</div>
		</div>
	);
}
