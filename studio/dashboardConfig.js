export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fa4084cf8e3ae0f70e7a87',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6jd3zfct',
                  apiId: 'aaea5c31-a808-4bdc-8b70-5f730e85cdd0'
                },
                {
                  buildHookId: '61fa408466e68acf1978ccd4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f5d11geb',
                  apiId: '7ebf1280-33a1-4359-85af-7f5a6bcbdc89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/diogops/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f5d11geb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
