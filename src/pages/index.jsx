import React from 'react';
import 'styles/global.scss';
import { SEO } from 'components/Seo/Seo';
import Navigation from 'components/Navigation/Navigation';

const IndexPage = () => {
	return (
		<div>
			<Navigation />
		</div>
	);
};

export default IndexPage;
export const Head = () => <SEO title="Strona Główna" />;
