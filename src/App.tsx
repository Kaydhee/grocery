import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<Router>
				<Nav />
				<Title />
				<Routes>
					<Route
						path='/'
						element={<Main />}
					/>
					<Route
						path='/products/page/:pageNumber'
						element={<Main />}
					/>
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
