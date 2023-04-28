import React from 'react';
import 'styles/global.scss';
import { SEO } from 'components/Seo/Seo';
import Navigation from 'components/Navigation/Navigation';
import Header from 'components/Header/Header';

const IndexPage = () => {
	return (
		<div>
			<Navigation />
			<Header />
		</div>
	);
};

export default IndexPage;
export const Head = () => <SEO title="Strona Główna" />;
