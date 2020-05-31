import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="top" />
    <section style={{ marginBottom: `4rem` }}>
      <p>
        簡単に自己紹介するためのページです。Github
        Pagesが気になったので作ってみました。
      </p>
    </section>
    <section style={{ marginBottom: `4rem` }}>
      <h2>自己紹介</h2>
      <p>高専生でした。 現在はWEB制作会社で働いています。</p>
      <p>担当業務は下記</p>
      <ul>
        <li>HTMLコーディング等のフロント業務</li>
        <li>PHP_FWを使用したWEBシステム開発等のバックエンド業務</li>
        <li>Docker導入やツール作成などの運用フロー改善</li>
      </ul>
      <p>
        経験のある言語・技術：
        <br />
        html5, css, javascript (es5), php (^5), mvc-FW (cakephp, Laravel),
        docker, docker-compose, python
      </p>
    </section>
    <section style={{ marginBottom: `4rem` }}>
      <h2>Contact</h2>
      <p>連絡・制作物は下記</p>
      <ul>
        <li>
          <a
            href="https://twitter.com/kyoune01"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kyoune01"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </section>
    <section style={{ marginBottom: `4rem` }}>
      <h2>本サイトの使用技術</h2>
      <p>
        <span>Github_Rep：</span>
        <a
          href="https://github.com/kyoune01/portfolio-gatsby"
          target="_blank"
          rel="noreferrer"
        >
          portfolio-gatsby
        </a>
        <br />
        言語：react <br />
        ツール・FW：gatsby, jest, eslint <br />
        構築環境：.devcontenier (vscode, docker)
      </p>
    </section>
  </Layout>
)

export default Index
