import React from "react";
import { Box } from "@radix-ui/themes";

import CardProduct from "components/cardProduct";

const Home: React.FC = () => {
	return (
		<Box className="p-6">
			<Box>
				<CardProduct
					date="2017-11-04T18:48:46.250Z"
					leftOptionImageUrl="https://rickandmortyapi.com/api/character/avatar/183.jpeg"
					rightOptionImageUrl="https://rickandmortyapi.com/api/character/avatar/183.jpeg"
					title="Vegan hummus wrap"
					note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
						est laborum."
					categories={["Vegan", "Gluten free"]}
				/>
				<CardProduct
					date="2017-11-04T18:48:46.250Z"
					leftOptionImageUrl="https://rickandmortyapi.com/api/character/avatar/183.jpeg"
					rightOptionImageUrl="https://rickandmortyapi.com/api/character/avatar/183.jpeg"
					title="Vegan hummus wrap"
					note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
						est laborum."
					categories={["Vegan", "Gluten free"]}
				/>
			</Box>
		</Box>
	);
};

export default Home;
