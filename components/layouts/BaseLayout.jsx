import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Boilerplate for a Fastify Next.js stack"
        />
        <meta name="keywords" content="next.js, fastify, next.js fastify" />
        <meta property="og:title" content="Fastify Next.js Boilerplate" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Boilerplate for a Fastify Next.js stack."
        />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>
      <div className="layout-container">
        <main className={`${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </>
  );
};

export default BaseLayout;
