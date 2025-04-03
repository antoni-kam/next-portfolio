import { Backend, CMS, DevOps, Frontend, SkillsType, Testing } from '@/data/skills'

export type RoleSkillsType = {
    area: string
    stack: SkillsType[]
}

export type ExperienceType = {
    period: string[]
    role: string
    duties: string
    skills?: RoleSkillsType[]
}

export const experience: ExperienceType[] = [
    {
        period: ['03/01/2022'],
        role: 'Senior FullStack Developer',
        duties: `Developed scalable and modular components for a client application using modern architectural patterns, with a focus on React Native mobile development. Designed and implemented solutions for critical functions such as client-server interactions, REST API integration, and service integrations. Enhanced solution quality by implementing automated UI tests, including both unit and integration tests. Optimized the application's architecture, covering essential aspects like authentication, logging, and data processing. Established and maintained a test environment utilizing tools for screenshot testing and API simulation, streamlining the development process. Improved code quality by integrating analysis tools, setting up CI/CD pipelines, and facilitating regular QA sessions. Collaborated closely with the UI/UX team to refine UI components and boost application usability.`,
        skills: [
            {
                area: 'Frontend',
                stack: [
                    Frontend.JavaScript,
                    Frontend.TypeScript,
                    Frontend.React,
                    Frontend.Mobile,
                    Frontend.Redux,
                    Frontend.SASS,
                    Frontend.TailwindCSS,
                ]
            },
            {
                area: 'Backend',
                stack: [Backend.RestAPI, Backend.Go, Backend.PostgreSQL , Backend.NodeJS, Backend.GraphQL]
            },
            {
                area: 'Testing',
                stack: [Testing.Playwright, Testing.Jest, Testing.RTL]
            },
            {
                area: 'CI/CD & DevOps',
                stack: [
                    DevOps.Docker,
                    DevOps.Git,
                    DevOps.Jenkins,
                    DevOps.SonarQube,
                    DevOps.Linux,
                    DevOps.CentsOS,
                    DevOps.GitHubActions
                ]
            }
        ]
    },
    {
        period: ['09/01/2017', '03/01/2022'],
        role: 'Lead Software Engineer',
        duties: 'Led the full development cycle of WordPress sites for media organizations, creating scalable solutions for high-traffic demands. Designed custom PHP modules, optimized MySQL databases, and implemented performance enhancements to ensure reliability. Managed VPS setup, security measures, and ongoing maintenance to safeguard hosting environments. Provided technical support, developed SEO strategies, and integrated social media modules for streamlined content distribution. Additionally, I designed user-friendly WordPress themes, enhancing both functionality and user experience.',
        skills: [
            {
                area: 'Frontend',
                stack: [Frontend.JavaScript, Frontend.jQuery, Frontend.TypeScript, Frontend.HTML, Frontend.CSS]
            },
            {
                area: 'Backend',
                stack: [Backend.PHP, Backend.MySQL]
            },
            {
                area: 'CI/CD & DevOps',
                stack: [DevOps.Linux]
            },
            {
                area: 'CMS',
                stack: [CMS.WordPress]
            }
        ]
    },
    {
        period: ['10/01/2015', '11/01/2016'],
        role: 'Senior Frontend Developer',
        duties: "Led the development of a quality assurance portal for microservices, streamlining code and component reviews. Developed a Bitbucket integration API to automate project data extraction and implemented test automation using React Testing Library and Jest for UI testing. Created automated UI tests for over 36 microservices and designed Playwright integration tests. Enhanced CI/CD pipelines with added test and code quality checks. Built a microservice to send test statistics to the quality portal and developed a plugin for test report aggregation with Allure. Contributed to Agile task management, wrote technical documentation, and implemented accessibility testing, while continuously improving the portal's features and functionality. Regularly conducted code reviews to ensure high-quality standards.",
        skills: [
            {
                area: 'Frontend',
                stack: [
                    Frontend.JavaScript,
                    Frontend.TypeScript,
                    Frontend.React,
                    Frontend.Redux,
                    Frontend.SASS,
                    Frontend.SemanticUI
                ]
            },
            {
                area: 'Backend',
                stack: [Backend.RestAPI]
            },
            {
                area: 'Testing',
                stack: [Testing.Playwright, Testing.Jest, Testing.RTL]
            },
            {
                area: 'CI/CD & DevOps',
                stack: [DevOps.Git, DevOps.Jenkins, DevOps.Linux]
            }
        ]
    },
    {
        period: ['11/01/2016', '09/01/2017'],
        role: 'Team Lead Software Engineer',
        duties: 'Led the development and integration of a payment system with state-owned banks for federal programs, including cashback initiatives, leveraging C# and ASP.NET technologies. Spearheaded the creation of a COVID-19 control system for the Orenburg region, integrating with government services and implementing an SMS notification API using React, Angular, and Vue frameworks. Managed a development team using Agile and Scrum methodologies, overseeing projects such as a citizen-government portal for reporting urban issues and an API for e-document integration. Designed and maintained services for handling charges and regulatory compliance in the Orenburg region, implementing microservice architecture for government projects with C# and ASP.NET. Directed the full-stack development of portals for publishing legal acts and tax filings, ensuring smooth operations, compliance, and scalability using modern JavaScript frameworks like React, Angular, and Vue.',
        skills: [
            {
                area: 'Frontend',
                stack: [
                    Frontend.JavaScript,
                    Frontend.TypeScript,
                    Frontend.React,
                    Frontend.Angular,
                    Frontend.Vue,
                    Frontend.Redux,
                    Frontend.CSS,
                    Frontend.HTML,
                    Frontend.SemanticUI
                ]
            },
            {
                area: 'Backend',
                stack: [
                    Backend.RestAPI,
                    Backend['C#'],
                    Backend['ASP.NET'],
                    Backend.PHP,
                    Backend.MySQL,
                    Backend.PostgreSQL,
                    Backend.Python,
                    Backend.CodeIgniter
                ]
            },
            {
                area: 'CI/CD & DevOps',
                stack: [DevOps.Git, DevOps.Docker, DevOps.Jenkins, DevOps.Linux]
            }
        ]
    },
    {
        period: ['07/01/2013', '10/01/2015'],
        role: 'Full-Stack Developer',
        duties: 'Led the development of a comprehensive news aggregation system, including a UI for viewing news from multiple sources and an API for banner ad integration. Designed distributed databases for high-load systems and implemented CI/CD pipelines and backup systems. Developed APIs for Facebook user behavior emulation and telecom payment systems. Created a telecom billing system, integrated accounting modules, and developed tools for managing subscriber and payment statistics. Additionally, designed and developed corporate web portals, and provided technical documentation for system administrators and architects.',
        skills: [
            {
                area: 'Frontend',
                stack: [Frontend.JavaScript, Frontend.jQuery, Frontend.CSS, Frontend.HTML, Frontend.React]
            },
            {
                area: 'Backend',
                stack: [Backend.Java,Backend.RestAPI, Backend.PHP, Backend.MySQL]
            },
            {
                area: 'CI/CD & DevOps',
                stack: [DevOps.Git, DevOps.Linux]
            },
            {
                area: 'CMS',
                stack: [CMS.Drupal, CMS.Joomla, CMS.WordPress]
            }
        ]
    },
]
