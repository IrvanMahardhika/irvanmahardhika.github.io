import React, { lazy, Suspense } from "react";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router";

import MainLayout from "components/mainLayout";
import ProgressBar from "components/progressBar";

import { Routes } from "data/routes";

const Home = lazy(() => import("./Home"));

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={Routes.home}
			element={
				<MainLayout>
					<Home />
				</MainLayout>
			}
			loader={async () => {
				return fetch("https://rickandmortyapi.com/api/character");
			}}
		/>,
	),
);

const Pages: React.FC = () => {
	return (
		<Suspense
			fallback={
				<MainLayout>
					<ProgressBar />
				</MainLayout>
			}>
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default Pages;
