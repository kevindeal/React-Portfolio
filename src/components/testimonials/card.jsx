
export const Card = ({ id, acknowledgement, name, company, title }) => {
  return (
    <div 
      key={id} 
      id={id}
      className=""
    >
      <div className="blockquote">
        <blockquote>{acknowledgement}</blockquote>
      </div>
      <div className="quote-author">
        <h2>{name}</h2>
        <span className="title">
          {title}
        </span>
        <span>
          {company}
        </span>
      </div>
    </div>
  )
}