type SkillItemType = {
    name: string
    level: number
}

type SkillGroupType = {
    group: string
    skills: SkillItemType[]
}

export const data: SkillGroupType[] = [
    {
        group: 'Frontend',
        skills: [
            {
                name: 'TypeScript',
                level: 95
            },
            {
                name: 'React, Next.js',
                level: 95
            },
            {
                name: 'React Native',
                level: 90
            },
            {
                name: 'Vue, Nuxt.js',
                level: 90
            },
            {
                name: 'Angular',
                level: 85
            },
            {
                name: 'Redux',
                level: 90
            },
            {
                name: 'ESLint & Prettier',
                level: 85
            },            {
                name: 'MaterialUI',
                level: 85
            },            {
                name: 'TailwindCSS',
                level: 90
            },            {
                name: 'Antd',
                level: 90
            },
        ]
    },
    {
        group: 'Backend',
        skills: [
            {
                name: 'Node.js Express.js',
                level: 90
            },
            {
                name: 'PHP, Laravel',
                level: 75
            },
            {
                name: 'C#, ASP.NET',
                level: 80
            },
            {
                name: 'Python, Django',
                level: 70
            },
            {
                name: 'Java, SpringBoot',
                level: 60
            },
            {
                name: 'Ruby on Rails',
                level: 50
            },
            {
                name: 'GraphQL',
                level: 80
            },
            {
                name: 'Restful API',
                level: 80
            },
            {
                name: 'Database',
                level: 60
            },
            {
                name: 'AI integraion',
                level: 70
            }
        ]
    },
    {
        group: 'Testing',
        skills: [
            {
                name: 'Mocha',
                level: 80
            },
            {
                name: 'Jasmine',
                level: 80
            },
            {
                name: 'Playwright',
                level: 70
            },
            {
                name: 'Jest',
                level: 60
            },
            {
                name: 'RTL',
                level: 50
            }
        ]
    },
    {
        group: 'DevOps',
        skills: [
            {
                name: 'Docker',
                level: 60
            },
            {
                name: 'Git',
                level: 90
            },
            {
                name: 'Linux',
                level: 90
            },
            {
                name: 'Azure',
                level: 80
            },
            {
                name: 'Agile',
                level: 70
            },
            {
                name: 'Scrum',
                level: 70
            },
            {
                name: 'AWS',
                level: 80
            },
            {
                name: 'Kubernetes',
                level: 60
            }
        ]
    }
]
