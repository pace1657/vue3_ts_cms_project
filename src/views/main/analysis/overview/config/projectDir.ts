export const projectDir = `
├── README.md
├── auto-imports.d.ts
├── babel.config.js
├── commitlint.config.js
├── components.d.ts
├── package-lock.json
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.css
│   │   │   ├── base.less
│   │   │   ├── index.css
│   │   │   └── index.less
│   │   ├── img
│   │   │   ├── login-bg.svg
│   │   │   └── logo.svg
│   │   └── logo.png
│   ├── base-ui
│   │   ├── breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── baseBreadcrumb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── baseCard.vue
│   │   ├── echart
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── hooks
│   │   │   │   └── useEchart.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── baseEchart.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── baseForm.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   └── table
│   │       ├── index.ts
│   │       ├── src
│   │       │   └── baseTable.vue
│   │       └── types
│   │           └── index.ts
│   ├── components
│   │   ├── HelloWorld.vue
│   │   ├── nav-header
│   │   │   ├── cpns
│   │   │   │   └── userInfo.vue
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── navHeader.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── navMenu.vue
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── pageContent.vue
│   │   ├── page-echart
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── barEchart.vue
│   │   │   │   ├── lineEchart.vue
│   │   │   │   ├── mapEchart.vue
│   │   │   │   ├── pieEchart.vue
│   │   │   │   └── roseEchart.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── convertData.ts
│   │   │       └── coordinateData.ts
│   │   ├── page-modal
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── pageModal.vue
│   │   └── page-search
│   │       ├── index.ts
│   │       └── src
│   │           └── pageSearch.vue
│   ├── global
│   │   ├── index.ts
│   │   ├── register-element.ts
│   │   └── register-properties.ts
│   ├── global-properties.d.ts
│   ├── hooks
│   │   ├── usePageContent.ts
│   │   ├── usePageModal.ts
│   │   └── usePermission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── dashboard.ts
│   │       │   └── overview
│   │       │       └── overview.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── category.ts
│   │       │   └── goods
│   │       │       └── goods.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── chat.ts
│   │       │   └── list
│   │       │       └── list.ts
│   │       └── system
│   │           ├── department
│   │           │   └── department.ts
│   │           ├── menu
│   │           │   └── menu.ts
│   │           ├── role
│   │           │   └── role.ts
│   │           └── user
│   │               └── user.ts
│   ├── service
│   │   ├── axios_demo.ts
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   └── dashboard.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── request
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   └── types.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard.ts
│   │   │   │   └── types.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── cacheUtils.ts
│   │   ├── commonUtils.ts
│   │   ├── formatDate.ts
│   │   └── menusMap.ts
│   └── views
│       ├── login
│       │   ├── config
│       │   │   └── rules-config.ts
│       │   ├── cpns
│       │   │   ├── loginAccount.vue
│       │   │   ├── loginCellphone.vue
│       │   │   └── loginPanel.vue
│       │   ├── loginPage.vue
│       │   └── testLoginPage.vue
│       ├── main
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   └── dashboard.vue
│       │   │   └── overview
│       │   │       └── overview.vue
│       │   ├── mainPage.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   └── category.vue
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   └── content.config.ts
│       │   │       └── goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── chat.vue
│       │   │   └── list
│       │   │       └── list.vue
│       │   ├── system
│       │   │   ├── department
│       │   │   │   └── department.vue
│       │   │   ├── menu
│       │   │   │   ├── config
│       │   │   │   │   └── content.config.ts
│       │   │   │   └── menuManage.vue
│       │   │   ├── role
│       │   │   │   ├── config
│       │   │   │   │   ├── content.config.ts
│       │   │   │   │   ├── modal.config.ts
│       │   │   │   │   └── search.config.ts
│       │   │   │   └── role.vue
│       │   │   └── user
│       │   │       ├── config
│       │   │       │   ├── content.config.ts
│       │   │       │   ├── modal.config.ts
│       │   │       │   └── search.config.ts
│       │   │       └── user.vue
│       │   └── testMainPage.vue
│       └── notFound
│           └── notFoundPage.vue
├── tsconfig.json
└── vue.config.js
`;
