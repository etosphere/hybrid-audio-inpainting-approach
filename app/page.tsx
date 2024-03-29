"use client";

import NextLink from "next/link";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code"
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import {useRouter} from "next/router";
import {Button} from "@nextui-org/button";
import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode} from "react";

const ExperimentCard = (props: { headerText: string, bodyText: string, footerLinkText: string, footerLinkHref: string, disableFooter: boolean }) => (
  <Card>
    <CardHeader className="flex gap-2">
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{props.headerText}</p>
      </div>
    </CardHeader>
    <Divider/>
    <CardBody>
      <p>{props.bodyText}</p>
    </CardBody>
    <Divider/>
    {!props.disableFooter ? (
      <CardFooter>
        <Link href={props.footerLinkHref} as={NextLink}>
          {props.footerLinkText}
        </Link>
      </CardFooter>
    ) : null}
  </Card>
)

export default function Home() {
  // const router = useRouter();
  // const getLink = (path: string) => `${router.basePath}${path}`;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-8">
      <div className="inline-block max-w-3xl text-center justify-center">
        <h2 className={title()}>Hybrid Audio Inpainting Approach with Structured Sparse Decomposition and Sinusoidal Modeling</h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-16">
          <ExperimentCard headerText="Experiment 1"
                          bodyText="The experiment compares the inpainting methods on handling two non-stationary signals.
                          The first test signal is synthesized with linear chirps, random exponentially damped sinusoids,
                          and added noise (with a noise level of –20 dB). The gap length is set to 100 ms.
                          The second signal is a soprano recording with vibrato from the SQAM dataset.
                          The gap length is set to 50 ms."
                          footerLinkText="View Results"
                          footerLinkHref="/experiment1"
                          disableFooter={false}/>
          <ExperimentCard headerText="Experiment 2"
                          bodyText="The experiment compares the inpainting methods quantitatively using a horn
                          recording from the SQAM dataset. The gap length varies from 10 to 200 ms.
                          SNR, ODG, and runtime are used in this experiment as evaluation metrics."
                          footerLinkText="View Results"
                          footerLinkHref="/experiment2"
                          disableFooter={false}/>
          <ExperimentCard headerText="Parameter description and explanation"
													bodyText="The experiment about the multilayered expansion results.
													Three decomposed components (layers) are obtained from an input signal with gaps:
													tonal, transient, and noise."
                          footerLinkText="More Information"
                          footerLinkHref="/parameters"
                          disableFooter={false}/>
          <ExperimentCard headerText="MATLAB implementation"
                          bodyText="We are preparing the MATLAB code and will release it soon."
                          footerLinkText="Get Code"
                          footerLinkHref=""
                          disableFooter={true}/>
        </div>
      </div>
    </section>
  );
}
