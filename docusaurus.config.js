// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'technical writing samples',
    tagline: 'a peek into my style of documentation',
    favicon: 'img/el.ico',
    // Set the production url of your site here
    url: 'https://el-techwriting.netlify.app',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    projectName: 'el-mno.github.io',
    organizationName: 'el-mno',
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }

            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/el-logo.png',
            navbar: {
                title: 'el\'s techwriting',
                logo: {
                    alt: 'el techwriting',
                    src: 'img/el.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'documentationSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://github.com/el-mno',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Documentation Samples',
                        items: [
                            {
                                label: 'API Documentation',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Tutorial',
                                to: '/docs/category/tutorial',
                            },
                            {
                                label: 'Knowledge Transfer',
                                to: '/docs/category/knowledge-transfer'
                            }
                        ],
                    },

                ],
                copyright: `Copyright © ${new Date().getFullYear()} El Techwriting Built with Docusaurus.`,
            },
            prism: {
                additionalLanguages: ['docker'],
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
