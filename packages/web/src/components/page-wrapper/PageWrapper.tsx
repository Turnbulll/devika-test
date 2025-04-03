import clsx from 'clsx';
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
      <div className={clsx("full-width", "full-height")}>
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
