export const Frontend = {
    TypeScript: 'TypeScript',
    JavaScript: 'JavaScript',
    Redux: 'Redux',
    Mobile: 'React Native',
    React: 'React',
    NextJS: 'Next.js',
    Vue: 'Vue',
    Nuxt: 'Nuxt',
    Angular: 'Angular',
    AntD: 'Vue',
    jQuery: 'jQuery',
    HTML: 'HTML',
    CSS: 'CSS',
    SASS: 'SASS',
    Bootstrap: 'Bootstrap',
    SemanticUI: 'Semantic UI',
    MateialUI: 'MaterialUI',
    TailwindCSS: 'Tailwind CSS'
} as const

export type FrontendSkillsType = (typeof Frontend)[keyof typeof Frontend]

export const Backend = {
    Go: 'Go',
    PHP: 'PHP',
    Laravel: 'Laravel',
    "C#": 'C#',
    "ASP.NET": 'ASP.NET',
    Ruby: 'Ruby',
    Java: 'Java',
    Python: 'Python',
    GraphQL: 'GraphQL',
    NodeJS: 'NodeJS',
    MySQL: 'MySQL',
    PostgreSQL: 'PostgreSQL',
    CodeIgniter: 'CodeIgniter',
    Yii: 'Yii',
    RestAPI: 'REST API',
    Delphi: 'Borland Delphi'
} as const

export type BackendSkillsType = (typeof Backend)[keyof typeof Backend]

export const DevOps = {
    Git: 'Git',
    Docker: 'Docker',
    Jenkins: 'Jenkins',
    SonarQube: 'SonarQube',
    Linux: 'Linux',
    CentsOS: 'CentOS',
    GitHubActions: 'GitHub Actions'
} as const

export type DevOpsSkillsType = (typeof DevOps)[keyof typeof DevOps]

export const Testing = {
    Playwright: 'Playwright',
    RTL: 'React Testing Library',
    Jest: 'Jest'
} as const

export type TestingSkillsType = (typeof Testing)[keyof typeof Testing]

export const CMS = {
    WordPress: 'WordPress',
    Drupal: 'Drupal',
    Joomla: 'Joomla'
} as const

export type CMSSkillsType = (typeof CMS)[keyof typeof CMS]

export type SkillsType = FrontendSkillsType | BackendSkillsType | DevOpsSkillsType | TestingSkillsType | CMSSkillsType
