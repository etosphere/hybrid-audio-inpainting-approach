export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-8">
			<div className="inline-block max-w-3xl">
				{children}
			</div>
		</section>
	);
}
