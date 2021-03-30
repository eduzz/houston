import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './styles.module.css';

const features = [
  {
    title: 'Design',
    imageUrl: 'img/thumb.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
        quickly.
      </>
    )
  },
  {
    title: 'Conteúdo',
    imageUrl: 'img/thumb.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{' '}
        <code>docs</code> directory.
      </>
    )
  },
  {
    title: 'Componentes',
    imageUrl: 'img/thumb.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }: any) {
  return (
    <div className={clsx('col col--3 feature__container', styles.feature)}>
      {/* <Card title={title} description={description} image={imageUrl} /> */}
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description='Description will go into a meta tag in <head />'>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__slogan'>
            We <s>have a</s> solve problems!
          </p>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
