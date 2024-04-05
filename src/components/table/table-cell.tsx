import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  return (
    // Passar {...props} antes para ficar com prioridade as props passada no twMerge.
    <td
      {...props}
      className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)}
    />
  );
}
