import React from "react";
import { Box, Progress } from "@radix-ui/themes";

const ProgressBar: React.FC = () => {
	return (
		<Box maxWidth="300px">
			<Progress />
		</Box>
	);
};

export default ProgressBar;
