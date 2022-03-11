import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '易于使用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       用户只需要关注自身业务，业务之外的技术问题（资源管理、运维、架构、治理、环境等），一站式解决。
      </>
    ),
  },
  {
    title: '“无侵入”架构',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        通过“无侵入”架构，支持各类遗留系统，不改变开发运维习惯的同时使遗留系统焕发新机。
      </>
    ),
  },
  {
    title: '国产化适配',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        国产化、私有化能力强，离线安装使用几乎没有外界依赖, 积极参与国家”安可“项目计划。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
