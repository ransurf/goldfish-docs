import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Note-Taking ✨',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Goldfish uses AI to help you purify your thoughts.
      </>
    ),
    link: 'docs/category/tutorial---ai-features'
  },
  {
    title: 'Sync with Your Favorite Apps 🔄',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Goldfish integrates with apps like Obsidian to let your ideas flow freely.
      </>
    ),
    link: 'docs/category/tutorial---integrations'
  },
  // {
  //   title: 'We need a third point lol',
  //   // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       I am not sure what it could be
  //     </>
  //   ),
  // },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col')}>
      {Svg && <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && <Link
          className="button--md"
          to={link}>
          Learn more →
        </Link>}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
