import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import PageTransition from '@/components/page-transition'
import Projects from '@/components/projects'

const ProjectsPage: React.FC = () => (
    <>
        <NextSeo
            title={'My projects'}
            description={
                'This section features a curated collection of my personal projects, which I continuously maintain and enhance. As a dedicated software engineer with a profound passion for both astronomy and programming, these projects embody the fusion of my interests and technical skills. Leveraging modern web and mobile technologies like Next.js, React.js, and React Native, these applications are crafted to be scalable, efficient, and intuitive. Each project showcases my commitment to lifelong learning and the exploration of cutting-edge tools and frameworks. Delve into the projects below to discover how my diverse interests drive my development approach, spanning both dynamic web and innovative mobile applications.'
            }
            openGraph={{
                images: [
                    {
                        height: 1333,
                        url: 'https://miksoft.pro/avatar.jpeg',
                        width: 1000
                    }
                ],
                locale: 'en-US',
                siteName: 'miksoft.pro'
            }}
        />

        <PageTransition>
            <section>
                <h1 className={'pageTitle'}>{'My projects'}</h1>
                <p>
                    {
                        'This section features a curated collection of my personal projects, which I continuously maintain and enhance. As a dedicated software engineer with a profound passion for both astronomy and programming, these projects embody the fusion of my interests and technical skills. Leveraging modern web and mobile technologies like Next.js, React.js, and React Native, these applications are crafted to be scalable, efficient, and intuitive. Each project showcases my commitment to lifelong learning and the exploration of cutting-edge tools and frameworks. Delve into the projects below to discover how my diverse interests drive my development approach, spanning both dynamic web and innovative mobile applications.'
                    }
                </p>
            </section>
        </PageTransition>

        <Projects />

        <PageTransition>
            <section className={'footerLinks'}>
                <Link
                    href={'/'}
                    title={'View about me'}
                >
                    <Icon name={iconNames.left} />
                    {'About me'}
                </Link>

                <Link
                    href={'/experience'}
                    title={'View my experience'}
                >
                    {'Experience'}
                    <Icon name={iconNames.right} />
                </Link>
            </section>
        </PageTransition>
    </>
)

export default ProjectsPage
