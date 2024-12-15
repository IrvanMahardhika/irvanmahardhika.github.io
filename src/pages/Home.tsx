import React from "react";
import { useLoaderData } from "react-router";
import { Box } from "@radix-ui/themes";

import CardProduct from "components/cardProduct";

import { ProductResponse } from "data/types/api";

const Home: React.FC = () => {
	const loadData = useLoaderData() as ProductResponse;

	const data = loadData?.results || [];

	return (
		<Box className="p-6 h-full">
			<Box className="h-full overflow-scroll">
				{data.map((d, idx) => (
					<CardProduct
						key={idx.toString()}
						linkUrl={d.url}
						linkTitle={d.origin.name}
						date={d.created}
						leftOptionImageUrl={d.image}
						rightOptionImageUrl={d.image}
						title={d.name}
						note={d.location.name}
						categories={[d.status, d.species, d.gender]}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Home;
