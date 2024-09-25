import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import Nav from './components/nav/Nav';
import Title from './components/title/Title';
import Main from './components/main/Main';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<Nav />
				<Title />
				<Main />
			</QueryClientProvider>
		</>
	);
}

export default App;
