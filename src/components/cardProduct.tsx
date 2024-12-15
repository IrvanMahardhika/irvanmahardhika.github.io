import React, { memo } from "react";
import moment from "moment";
import {
	Box,
	Card,
	Flex,
	Text,
	Link,
	Badge,
	IconButton,
	AspectRatio,
	Grid,
} from "@radix-ui/themes";
import {
	ArrowTopRightIcon,
	PlusIcon,
	ColorWheelIcon,
	CookieIcon,
} from "@radix-ui/react-icons";

type PROPS = {
	date: string;
	leftOptionImageUrl: string;
	rightOptionImageUrl: string;
	title: string;
	note: string;
	categories: Array<string>;
};

const CardProduct = ({
	date,
	leftOptionImageUrl,
	rightOptionImageUrl,
	title,
	note,
	categories,
}: PROPS) => {
	return (
		<Card className="mb-3">
			<Text as="div" size="5" weight="bold" align="center">
				{moment(date).format("dddd, D MMMM")}
			</Text>
			<Grid columns="2" gap="3" className="w-full mt-2">
				<Box className="w-full p-2 border-2 border-lime-700 rounded-md">
					<AspectRatio ratio={1 / 1} className="mb-3">
						<img
							src={leftOptionImageUrl}
							alt="left-option-image"
							className="w-full h-full object-contain"
						/>
					</AspectRatio>
					<Link href="#">
						<Flex align="center">
							<Text weight="medium">PURE DELI</Text>
							<ArrowTopRightIcon width="18" height="18" />
						</Flex>
					</Link>
					<Text as="div" size="3" weight="bold" className="mt-1">
						{title}
					</Text>
					<Text as="p" size="2" className="h-14 text-ellipsis overflow-hidden">
						{note}
					</Text>
					<Flex gap="2" align="center" className="mt-10 mb-2">
						{categories.map((d, idx) => (
							<Badge key={idx.toString()} size="2" color="green" radius="full">
								{d}
							</Badge>
						))}
					</Flex>
					<Flex align="center" justify="between" className="w-full">
						<Flex gap="1" align="center">
							<IconButton radius="full" color="orange">
								<ColorWheelIcon width="18" height="18" color="white" />
							</IconButton>
							<IconButton radius="full" color="gray">
								<CookieIcon width="18" height="18" color="white" />
							</IconButton>
						</Flex>
						<IconButton radius="full" color="teal">
							<PlusIcon
								width="18"
								height="18"
								color="black"
								className="cursor-pointer"
							/>
						</IconButton>
					</Flex>
				</Box>
				<Box className="w-full p-2 border-2 border-lime-700 rounded-md">
					<AspectRatio ratio={1 / 1} className="mb-3">
						<img
							src={leftOptionImageUrl}
							alt="left-option-image"
							className="w-full h-full object-contain"
						/>
					</AspectRatio>
					<Link href="#">
						<Flex align="center">
							<Text weight="medium">PURE DELI</Text>
							<ArrowTopRightIcon width="18" height="18" />
						</Flex>
					</Link>
					<Text as="div" size="3" weight="bold" className="mt-1">
						{title}
					</Text>
					<Text as="p" size="2" className="h-14 text-ellipsis overflow-hidden">
						{note}
					</Text>
					<Flex gap="2" align="center" className="mt-10 mb-2">
						{categories.map((d, idx) => (
							<Badge key={idx.toString()} size="2" color="green" radius="full">
								{d}
							</Badge>
						))}
					</Flex>
					<Flex align="center" justify="between" className="w-full">
						<Flex gap="1" align="center">
							<IconButton radius="full" color="orange">
								<ColorWheelIcon width="18" height="18" color="white" />
							</IconButton>
							<IconButton radius="full" color="gray">
								<CookieIcon width="18" height="18" color="white" />
							</IconButton>
						</Flex>
						<IconButton radius="full" color="teal">
							<PlusIcon
								width="18"
								height="18"
								color="black"
								className="cursor-pointer"
							/>
						</IconButton>
					</Flex>
				</Box>
			</Grid>
		</Card>
	);
};

export default memo(CardProduct);
