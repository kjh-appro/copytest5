import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import TopLeftText from '../components/TopLeftText'
import Button from '../components/Button'
import { colors, widths } from '../styles/variables'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <TopLeftText text="nice to meet you" />
      <Container>
        <div style={{ maxWidth: `${widths.md}px` }}>
          <h1 style={{ fontWeight: '400', padding: '48px 0 24px' }}>
            Hey, I'm <span style={{ fontWeight: '700' }}>Luke Secomb</span>, web developer and photographic connoisseur.
          </h1>
          <p style={{ margin: '0 0 64px' }}>
            I currently work at{' '}
            <a href="https://sodastrategic.com.au/" target="_blank">
              Soda Strategic
            </a>{' '}
            as a Developer and pride myself on delivering beautiful and user friendly experiences. I enjoy learning about new web
            technologies/frameworks and experimenting with various tools to get places I maybe shouldn't be.
          </p>
          <Button text="Delve into my side projects" link="/projects" isInternal />
        </div>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
