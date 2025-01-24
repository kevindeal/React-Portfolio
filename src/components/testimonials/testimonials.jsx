import { Card } from "./card"

export const Testimonial = () => {
  let testimonials = [
    {
      id: 1,
      name: "Brandon Jones",
      acknowledgement: "Kevin is a great teammate. Thrives on collaboration, and is always fully willing to dive into tasks that will stretch his skillset and grow his knowledge.",
      title: "Software Engineering Lead",
      company: "Studio Science",
    },
    {
      id: 2,
      name: "Brandon Jones",
      acknowledgement: "Kevin is a great teammate. Thrives on collaboration, and is always fully willing to dive into tasks that will stretch his skillset and grow his knowledge.",
      title: "Software Engineering Lead",
      company: "Studio Science",
    },
    {
      id: 3,
      name: "Brandon Jones",
      acknowledgement: "Kevin is a great teammate. Thrives on collaboration, and is always fully willing to dive into tasks that will stretch his skillset and grow his knowledge.",
      title: "Software Engineering Lead",
      company: "Studio Science",
    },
  ]

  return (
    <section>
      <div className="flex">
        <div className="content">
          <h1>Hello World</h1>
          <p>importance of collaboration</p>
          <a href="">
            <span>
              email
            </span>
          </a>
        </div>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.name}
              acknowledgement={testimonial.acknowledgement}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
      
    </section>
  )
}