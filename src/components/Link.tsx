export type LinkProps = {
  title: string;
  link: string;
}

export function Link({ title, link }: LinkProps) {
  return (
    <a href={link} >
      {title}
    </a>
  )

}