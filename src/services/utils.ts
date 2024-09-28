import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';

export const fetchProducts = async () => {
	const response = await fetch('http://localhost:8000/data');
	const data = await response.json();
	return data;
};

// Example API call to add an item to cart
const addToCart = async (itemId: string) => {
	console.log(itemId);
};

export const useAddToCart = () => {
	const queryClient = useQueryClient();

	return useMutation(addToCart, {
		onSuccess: (data, variables) => {
			// Update cache on successful mutation
			queryClient.setQueryData(['cart'], (oldCart: any) => [
				...(oldCart || []),
				variables, // Add new item to the cart
			]);
		},
	});
};

export const useCart = () => {
	// function to get all the cart items
	return useQuery(['cart'], async () => {
		const response = await fetch('/api/cart');
		return response.json();
	});
};
