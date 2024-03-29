"use client";

import { title } from "@/components/primitives";
import {RadioGroup, Radio} from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export default function Experiment2Page() {
	const [selectedGapLen, setSelectedGapLen] = React.useState("50ms");
	const [selectedResult, setSelectedResult] = React.useState("original");

	return (
		<div>
			<div className="text-center justify-center">
				<h2 className={title()}>Experiment 2</h2>
			</div>
			<br/>

			<div className="grid grid-cols-1 gap-y-4 text-center justify-center justify-items-center">
				<RadioGroup
					label="Select gap length (ms)"
					orientation="horizontal"
					value={selectedGapLen}
					onValueChange={setSelectedGapLen}
					className="items-center"
				>
					<Radio value="10ms">10</Radio>
					<Radio value="25ms">25</Radio>
					<Radio value="50ms">50</Radio>
					<Radio value="100ms">100</Radio>
					<Radio value="200ms">200</Radio>
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
				<br/>
				{/*<p className="text-default-500 text-small mt-2">Selected: {selectedSig}-{selectedResult}</p>*/}

				{/*<Image
					alt={`TF representation of the ${selectedResult} component of the test signal ${selectedGapLen[selectedGapLen.length - 1]}`}
					src={`./images/experiment2/${selectedGapLen}-${selectedResult}.png`}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					width={800}
					height={500}
					style={{backgroundColor: "white"}}
				/>*/}

				<audio controls src={`./audios/experiment2/${selectedGapLen}-${selectedResult}.wav`}/>
			</div>
		</div>
	);
}
