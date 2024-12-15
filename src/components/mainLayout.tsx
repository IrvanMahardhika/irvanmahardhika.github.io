import React from "react";
import { RouteProps, Outlet } from "react-router";
import { Box } from "@radix-ui/themes";

const MainLayout: React.ElementType = (props: RouteProps) => {
	const { children } = props;

	return (
		<main className="h-screen w-screen bg-gray-300">
			<Box className="h-full my-0 mx-auto bg-white sm:w-1/2 lg:w-2/5 xl:w-1/3">
				{children}
			</Box>
			<Outlet />
		</main>
	);
};

export default MainLayout;
