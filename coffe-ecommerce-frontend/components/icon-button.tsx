import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactElement;
  className?: string;
}

export function IconButton(props: IconButtonProps) {
  const { onClick, icon, className } = props;

  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full p-1 flex items-center bg-slate-50 border shadow-md",
        className
      )}
    >
      {icon}
    </button>
  );
}
