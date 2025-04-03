import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  children: JSX.Element;
  title?: string;
}

const PageWrapper = (props: Props): JSX.Element => {
  const { children, title } = props;

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Giphynator` : 'Giphynator'}</title>
      </Helmet>
      {children}
    </>
  );
};

export default PageWrapper;
