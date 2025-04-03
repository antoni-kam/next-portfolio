import { StaticImageData } from 'next/image'

import homefromcollege from './images/homefromcollege.png'
import ceras from './images/ceras.png'
import datingapp from './images/datingapp.png'
import autobunny from './images/autobunny.png'


type ProjectType = {
    link: string
    title: string
    image: StaticImageData
    description?: string
}

export const data: ProjectType[] = [
    {
        image: ceras,
        title: 'AI Digital Healthcare Platform',
        link: 'https://cerashealth.com/',
        description:
            'This healthcare platform enhances patient care with five AI-powered components using predictive analytics and outcome benchmarks. Built with React, Next.js, React Native, Node.js, and Firebase, it offers seamless web and mobile navigation, delivering real-time insights for improved treatment and patient outcomes.'
    },    
    {
        image: homefromcollege,
        title: 'Home from College',
        link: 'https://homefromcollege.com/',
        description:
            'I had the absolute pleasure to build a landing page for the Home from College based on the Figma designs provided by the H\FC team. I utilized React, Next.js and styled-components to achieve the result. Home from College is a platform where students can find their first or next job/internship. The company provides tools to ease the job search process, such as building a resume online.'
    },
    {
        image: datingapp,
        title: 'Anonymous AI Dating App',
        link: 'https://apps.apple.com/gb/app/anonymous-ai-dating-app/id1494091060',
        description:
            'This app is an anonymous AI-driven dating platform built with React Native. It connects users through intelligent matchmaking algorithms, ensuring privacy and anonymity while facilitating genuine connections. By leveraging AI, the app enhances user interactions and provides personalized matches, all within a seamless mobile experience.'
    },
    {
        image: autobunny,
        title: 'Autobunny Marketplace',
        link: 'https://apps.apple.com/pk/app/autobunny/id6738283873?platform=iphone',
        description:
            'Autobunny Marketplace is the perfect mobile companion for car lovers! Built using cutting-edge React Native technology, this intuitive app streamlines your car search, making it easy to find your ideal vehicle in no time.'
    },
]
