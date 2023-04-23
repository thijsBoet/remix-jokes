import type { LinksFunction } from '@remix-run/node';
import { LiveReload, Outlet, Links } from '@remix-run/react';

import globalStyles from './styles/global.css';
import globalLargeStyles from '~/styles/global-large.css';
import globalMediumStyles from '~/styles/global-medium.css';

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1'
				/>
				<title>Remix: So great, it's funny!</title>
				<Links />
			</head>
			<body>
				<Outlet />
				<LiveReload />
			</body>
		</html>
	);
}

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: globalStyles },
	{
		rel: 'stylesheet',
		href: globalLargeStyles,
		media: '(min-width: 1024px)'
	},
	{
		rel: 'stylesheet',
		href: globalMediumStyles,
		media: '(min-width: 768px) and (max-width: 1023px)'
	}
];
