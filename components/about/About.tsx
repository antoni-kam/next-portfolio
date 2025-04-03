import React from 'react'
import Image from 'next/image'

import photo from './photo.jpg'
import styles from './styles.module.sass'

/**
 * The About component displays information about the developer, including a photo and a brief description.
 *
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
export const About: React.FC = () => (
    <section className={styles.aboutSection}>
        <h2 className={'pageTitle'}>{'About me'}</h2>
        <div className={styles.aboutContainer}>
            <Image
                src={photo}
                alt={'Photo of me'}
            />
            <div>
                <p>
                    {
                        'Programming is both my profession and my passion, fueling my enthusiasm and dedication as a developer. With over 12 years of experience, I possess the expertise to address a wide array of challenges, from crafting interactive web applications to leading dynamic development teams.'
                    }
                </p>
                <p>
                    {
                        'Beyond the realm of coding, I maintain a balanced lifestyle by actively engaging in hobbies such as football and climbing, which enrich my personal and professional life.'
                    }
                </p>
            </div>
        </div>
    </section>
)

export default About
