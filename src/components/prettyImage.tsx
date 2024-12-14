export function PrettyImage({
	src,
	alt,
	round,
	height,
	width,
	className,
	noShadow,
}: {
	src: string;
	alt: string;
	round?: boolean;
	noShadow?: boolean;
	height?: string;
	width?: string;
	className?: string;
}) {
	return (
		<figure>
			<img
			src={src}
			alt={alt}
			className={`duration-700 delay-200 ${
				noShadow ? "" : "bg-black shadow-lg shadow-slate-900"
			} ${round ? "rounded-full" : "rounded-xl"} ${className ?? ""}`}
			height={height}
			width={width}
			/>
		</figure>
	);
}
