export default function Course({ name, url, platform, dateFinished }) {
  return (
    <span>
      <a href={url} target="_blank">{name}</a>
      <br />
      <small>{platform} - Finished: {dateFinished}</small>
    </span>
  )
}
