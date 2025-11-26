import { Link } from "./Link"

export function LinkList() {

  const listOfLinks = [
    {
      title: 'GitHub',
      linkToSite: 'https://github.com/Friendlesso',
    },
    {
      title: 'Frontend Mentor',
      linkToSite: 'https://www.frontendmentor.io/profile/Friendlesso',
    },
    {
      title: 'LinkedIn',
      linkToSite: 'https://www.linkedin.com/in/mihailo-djurovic/',
    },
    {
      title: 'Twitter',
      linkToSite: '',
    },
    {
      title: 'Instagram',
      linkToSite: '',
    },
  ]


  return (
    <div className="flex flex-col items-center gap-4">
      {listOfLinks.map(link => {
        return <Link key={link.title} title={link.title} linkToSite={link.linkToSite} />
      })}
    </div>
  )
}