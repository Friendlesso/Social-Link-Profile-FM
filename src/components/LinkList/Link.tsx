export type LinkProps = {
  title: string,
  linkToSite: string,
}

export function Link({ title, linkToSite }: LinkProps) {
  return (
    <a
      href={linkToSite}
      className="
        text-white 
        w-[80%] 
        py-3
        rounded-lg
        text-center
        bg-[#333333] 
        hover:bg-[#c4f82a] 
        hover:text-[#141414]
        "
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  )
}