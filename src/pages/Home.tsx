import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { Box } from "@radix-ui/themes";

import CardProduct from "components/cardProduct";

import { ProductResponse } from "data/types/api";
import { SelectedProduct } from "data/types/product";

const Home: React.FC = () => {
	const loadData = useLoaderData() as ProductResponse;
	const data = loadData?.results || [];

	const [selectedProducts, setSelectedProducts] = useState<
		Array<SelectedProduct>
	>([]);

	useEffect(() => {
		const tempExistingSelectedProducts = localStorage.getItem("selectedProducts");
		if (tempExistingSelectedProducts) {
			const existingSelectedProducts = JSON.parse(
				tempExistingSelectedProducts,
			) as Array<SelectedProduct>;
			setSelectedProducts(existingSelectedProducts);
		}
	}, []);

	const handleSelectProduct = (selectedProduct: SelectedProduct) => {
		localStorage.removeItem("selectedProducts");
		const isSelected = selectedProducts.some((d) => d.id === selectedProduct.id);
		let newSelectedProducts: Array<SelectedProduct> = [];

		if (isSelected) {
			newSelectedProducts = [
				selectedProduct,
				...selectedProducts.filter((d) => d.id !== selectedProduct.id),
			];
		} else {
			newSelectedProducts = [selectedProduct, ...selectedProducts];
		}

		setSelectedProducts(newSelectedProducts);
		localStorage.setItem("selectedProducts", JSON.stringify(newSelectedProducts));
	};

	return (
		<Box className="p-6 h-full">
			<Box className="h-full overflow-scroll">
				{data.map((d, idx) => (
					<CardProduct
						key={idx.toString()}
						id={d.id}
						linkUrl={d.url}
						linkTitle={d.origin.name}
						date={d.created}
						leftOptionImageUrl={d.image}
						rightOptionImageUrl={d.image}
						title={d.name}
						note={d.location.name}
						categories={[d.status, d.species, d.gender]}
						selectedProducts={selectedProducts}
						handleSelectProduct={handleSelectProduct}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Home;
