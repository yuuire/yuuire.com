import clsx from "clsx";

interface CardProps {
  children: preact.JSX.IntrinsicElements['div']['children'];
  className?: string;
  [key: string]: any;
}

const Card = ({ children, className = "", ...props }: CardProps) => (
  <div
    className={clsx(
      className,
      "flex flex-col rounded-xl shadow-lg overflow-hidden border",
      "border-neutral-700/75 bg-neutral-900/55 p-4 transition-all duration-300 hover:shadow-2xl"
    )}
    {...props}
  >
    {children}
  </div>
);

export default Card;
