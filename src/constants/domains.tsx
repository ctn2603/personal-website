export interface Domain {
    domainId: string;
    domainName: string;
    techs: {
        techId: string;
        techName: string;
    }[];
}

export const domains: Domain[] = [
    {
        domainId: "programming languages",
        domainName: "Programming Languages",
        techs: [
            {
                techId: "python",
                techName: "Python",
            },
            {
                techId: "java",
                techName: "Java",
            },
            {
                techId: "html",
                techName: "HTML",
            },
            {
                techId: "css",
                techName: "CSS",
            },
            {
                techId: "javascript",
                techName: "Javascript",
            },
            {
                techId: "typescript",
                techName: "Typescript",
            },
            {
                techId: "dart",
                techName: "Dart",
            },
            {
                techId: "c",
                techName: "C",
            },
            {
                techId: "cpp",
                techName: "C++",
            },
            {
                techId: "csharp",
                techName: "C#",
            },
        ],
    },
    {
        domainId: "frameworks",
        domainName: "Frameworks",
        techs: [
            {
                techId: "reactjs",
                techName: "ReactJS",
            },
            {
                techId: "nodejs",
                techName: "NodeJS",
            },
            {
                techId: "django",
                techName: "Django",
            },
            {
                techId: "flutter",
                techName: "Flutter",
            },
        ],
    },
    {
        domainId: "databases",
        domainName: "Databases",
        techs: [
            {
                techId: "firestore",
                techName: "Firestore",
            },
            {
                techId: "mongodb",
                techName: "MongoDB",
            },
            {
                techId: "mysql",
                techName: "MySQL",
            },
        ],
    },
    {
        domainId: "AWS",
        domainName: "Cloud (AWS)",
        techs: [
            {
                techId: "S3",
                techName: "S3",
            },
            {
                techId: "route 53",
                techName: "Route 53",
            },
            {
                techId: "iam",
                techName: "IAM",
            },
            {
                techId: "cloud front",
                techName: "CloudFront",
            },
            {
                techId: "code pipeline",
                techName: "Code Pipeline",
            },
        ],
    },
    {
        domainId: "tools",
        domainName: "Tools",
        techs: [
            {
                techId: "git",
                techName: "Git",
            },
            {
                techId: "jira",
                techName: "Jira",
            },
            {
                techId: "bitbucket",
                techName: "Bitbucket",
            },
            {
                techId: "confluence",
                techName: "Confluence",
            },
            {
                techId: "notion",
                techName: "Notion",
            },
            {
                techId: "microsoft visual studio",
                techName: "MS Studio",
            },
            {
                techId: "vs code",
                techName: "Vs Code",
            },
            {
                techId: "intellij",
                techName: "IntelliJ",
            },
            {
                techId: "figma",
                techName: "Figma",
            },
            {
                techId: "postman",
                techName: "Postman",
            },
            {
                techId: "ms office",
                techName: "MS Office",
            },
            {
                techId: "chrome developer tools",
                techName: "Chrome Developer Tools",
            },
        ],
    },
];
