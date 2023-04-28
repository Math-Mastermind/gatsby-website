import React from 'react';
import 'styles/global.scss';
import { SEO } from 'components/Seo/Seo';

import Navigation from 'components/Navigation/Navigation';
import Header from 'components/Header/Header';
import ModesList from 'components/ModesList/ModesList';

const IndexPage = () => {
	return (
		<div>
			<Navigation />
			<Header />
			<ModesList />
		</div>
	);
};

export default IndexPage;
export const Head = () => <SEO title="Strona Główna" />;
