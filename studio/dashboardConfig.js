export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5deb185b354ee5af1b3c6461',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fm8msyp6',
                  apiId: '8addc324-81b0-4611-b65e-2130a2239b63'
                },
                {
                  buildHookId: '5deb185b310e6e77a4e841fe',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mvn9shyr',
                  apiId: '36f1554e-beb3-4177-a39b-759e5d164cc2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rvisharma/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mvn9shyr.netlify.com', category: 'apps'}
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
