/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'About Stately and XState',
      id: 'about',
    },
    {
      type: 'category',
      label: 'Get started',
      link: {
        type: 'generated-index',
        title: 'Get started',
        description: 'Get started quickly with XState and Stately Studio.',
        slug: '/category/get-started',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'Install XState',
          id: 'installation',
        },
        'quick-start',
        {
          type: 'doc',
          label: 'Migrate to XState v5',
          id: 'migration',
        },
        {
          type: 'doc',
          label: 'Examples',
          id: 'examples',
        },
        'templates',
        'cheatsheet',
      ],
    },
    {
      type: 'category',
      label: 'Core concepts',
      link: {
        type: 'generated-index',
        title: 'Core concepts',
        description: 'Learn the core concepts for XState and Stately Studio.',
        slug: '/category/core-concepts',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'State machines',
          id: 'state-machines-and-statecharts',
        },
        {
          type: 'doc',
          label: 'Actor model',
          id: 'actor-model',
        },
        {
          type: 'doc',
          label: 'What is XState?',
          id: 'xstate',
        },
      ],
    },
    {
      type: 'category',
      label: 'Using Stately Studio',
      link: {
        type: 'generated-index',
        title: 'Using Stately Studio',
        description: 'Learn how to use Stately Studio’s editor.',
        slug: '/category/studio',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'Introducing Stately Studio',
          id: 'studio',
        },
        {
          type: 'category',
          label: 'Design mode',
          link: {
            type: 'doc',
            id: 'design-mode',
          },
          items: [
            'import-from-code',
            'export-as-code',
            {
              type: 'doc',
              label: 'Generate flow',
              id: 'generate-flow',
              className: 'pro-feature',
            },
            {
              type: 'doc',
              label: 'Colors',
              id: 'colors',
              className: 'pro-feature',
            },
            'annotations',
            'descriptions',
            'machine-restore',
            'autolayout',
          ],
        },
        {
          type: 'category',
          label: 'Simulate mode',
          link: {
            type: 'doc',
            id: 'simulate-mode',
          },
          items: [
            {
              type: 'doc',
              label: 'Live simulation',
              id: 'live-simulation',
              className: 'pro-feature',
            },
          ],
        },
        'projects',
        {
          type: 'doc',
          label: 'Teams',
          className: 'pro-feature',
          id: 'teams',
        },
        'discover',
        {
          type: 'category',
          label: 'Share',
          link: {
            type: 'generated-index',
            title: 'Share',
            description:
              'Learn how to share machines created in Stately Studio.',
            slug: '/category/share',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'Embed URL',
              id: 'embed',
            },
            {
              type: 'doc',
              label: 'Image URL',
              id: 'image',
            },
            {
              type: 'doc',
              label: 'Share URL',
              id: 'url',
            },
          ],
        },
        {
          type: 'category',
          label: 'Accounts',
          link: {
            type: 'generated-index',
            title: 'Stately Studio accounts',
            description:
              'Learn about Stately Studio plans and how to manage your account.',
            slug: '/category/accounts',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'Community plan',
              id: 'studio-community-plan',
              className: 'community-feature',
            },
            {
              type: 'doc',
              label: 'Pro plan',
              id: 'studio-pro-plan',
              className: 'pro-feature',
            },
            {
              type: 'doc',
              label: 'Enterprise plan',
              id: 'studio-enterprise-plan',
            },
            {
              type: 'doc',
              label: 'Sign up',
              id: 'sign-up',
            },
            {
              type: 'doc',
              label: 'Upgrade',
              id: 'upgrade',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Version history',
          id: 'versions',
          className: 'pro-feature',
        },
        {
          type: 'doc',
          label: 'Lock machines',
          id: 'lock-machines',
          className: 'pro-feature',
        },
        'keyboard-shortcuts',
        'canvas-view-controls',
        'user-preferences',
      ],
    },
    {
      type: 'category',
      label: 'State machines',
      link: {
        type: 'generated-index',
        title: 'State machines',
        description:
          'Learn how to use state machines in XState and Stately Studio.',
        slug: '/category/state-machines',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        'machines',
        {
          type: 'category',
          label: 'States',
          link: {
            type: 'doc',
            id: 'states',
          },
          items: [
            {
              type: 'doc',
              label: 'In Stately editor',
              id: 'editor-states',
            },
          ],
        },
        'context',
        'input',
        'transitions',
        'eventless-transitions',
        'delayed-transitions',
        'actions',
        'guards',
        'finite-states',
        'parent-states',
        'parallel-states',
        'initial-states',
        'final-states',
        'history-states',
        'persistence',
        'tags',
      ],
    },
    {
      type: 'category',
      label: 'Actors ',
      link: {
        type: 'generated-index',
        title: 'Actors',
        description:
          'Learn how to use actors and the actor model in XState and Stately Studio.',
        slug: '/category/actors',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: ['actors', 'invoke', 'spawn', 'system'],
    },
    {
      type: 'doc',
      label: 'Testing',
      id: 'testing',
    },
    {
      type: 'category',
      label: 'Packages',
      link: {
        type: 'generated-index',
        title: 'Packages',
        description: 'Find all the packages in XState.',
        slug: '/category/xstate-packages',
        keywords: ['guides'],
      },
      collapsed: true,
      collapsible: true,
      items: [
        'xstate-react',
        'xstate-vue',
        'xstate-svelte',
        'xstate-fsm',
        'xstate-graph',
        'xstate-test',
        'xstate-immer',
      ],
    },
    {
      type: 'category',
      label: 'Developer tools',
      collapsed: false,
      collapsible: true,
      link: {
        type: 'generated-index',
        title: 'Stately developer tools',
        description:
          'Find all the developer tools you can use with XState and Stately Studio’s editor.',
        slug: '/category/developer-tools',
        keywords: ['guides'],
      },
      items: [
        'xstate-vscode-extension',
        'visualizer',
        'inspector',
        {
          type: 'doc',
          label: 'Other tools',
          id: 'developer-tools',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Glossary',
      id: 'glossary',
    },
  ],
};

module.exports = sidebars;
