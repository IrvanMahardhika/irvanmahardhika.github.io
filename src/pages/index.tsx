import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes as BrowserRoutes, Route } from "react-router";

import MainLayout from "components/mainLayout";
import ProgressBar from "components/progressBar";

import { Routes } from "data/routes";

const Home = lazy(() => import("./Home"));

const Pages: React.FC = () => {
	return (
		<Suspense
			fallback={
				<MainLayout>
					<ProgressBar />
				</MainLayout>
			}>
			<BrowserRouter>
				<BrowserRoutes>
					<Route
						path={Routes.home}
						element={
							<MainLayout>
								<Home />
							</MainLayout>
						}
					/>
				</BrowserRoutes>
			</BrowserRouter>
		</Suspense>
	);
};

export default Pages;
