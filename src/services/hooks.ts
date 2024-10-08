import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ProductInterface } from '../components/main/productsList/productCard/ProductCard';

// Custom hook for favorites
export const useFavorites = () => {
	const queryClient = useQueryClient();
	const favoritesKey: string = 'favorites';

	const { data: favorites } = useQuery([favoritesKey], () => {
		console.log('Tryign to get favourite');
		return JSON.parse(localStorage.getItem(favoritesKey) || '[]');
	});

	const addToFavorites = (item: ProductInterface) => {
		console.log(`${favorites.length} was length of previous`);

		console.log(`${item.name} was added`);
		const updatedFavorites = [...favorites, item];
		console.log(updatedFavorites);
		localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
		queryClient.setQueryData([favoritesKey], updatedFavorites);
	};

	return { favorites, addToFavorites };
};

// Custom hook for cart
export const useCart = () => {
	const queryClient = useQueryClient();
	const cartKey = 'cart' as string;

	const { data: cart = [] } = useQuery([cartKey], () => {
		return JSON.parse(localStorage.getItem(cartKey) || '[]');
	});

	const addToCart = (item: ProductInterface) => {
		const updatedCart = [...cart, item];
		localStorage.setItem(cartKey, JSON.stringify(updatedCart));
		queryClient.setQueryData([cartKey], updatedCart);
	};

	return { cart, addToCart };
};

// export const useCart = () => {
// 	const queryClient = useQueryClient();
// 	const cartKey = 'cart' as string;

// 	const { data: cart = [] } = useQuery<ProductInterface[]>(cartKey, () => {
// 		const storedCart = localStorage.getItem(cartKey);
// 		return storedCart ? JSON.parse(storedCart) : [];
// 	});

// 	const addToCart = (item: ProductInterface) => {
// 		const updatedCart = [...cart, item];
// 		localStorage.setItem(cartKey, JSON.stringify(updatedCart));
// 		queryClient.setQueryData<ProductInterface[]>(cartKey, updatedCart);
// 	};

// 	return { cart, addToCart };
// };
