export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '621405f1277efd90bd6417ef',
                  title: 'Sanity Studio',
                  name: 'where-is-hidde-studio-f839o2sg',
                  apiId: '3defd6c3-26af-449c-803e-0038dc77fbc5'
                },
                {
                  buildHookId: '621405f1983be58c13543e84',
                  title: 'Blog Website',
                  name: 'where-is-hidde-web',
                  apiId: '42984197-1d53-45f2-9166-d0cb1572df5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hidde/where-is-hidde',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://where-is-hidde-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
