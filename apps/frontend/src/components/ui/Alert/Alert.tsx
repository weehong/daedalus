import type { ReactNode } from "react";
import { BlueprintFrame } from "@/components/ui/BlueprintFrame";

/** An assertive live region in the system's notice styling; focus is never moved to it. */
export const Alert = ({
	children,
}: {
	children: ReactNode;
}): React.ReactElement => (
	<BlueprintFrame
		aria-live="assertive"
		className="border-danger p-2.5 text-[13px] text-danger"
		role="alert"
	>
		{children}
	</BlueprintFrame>
);
