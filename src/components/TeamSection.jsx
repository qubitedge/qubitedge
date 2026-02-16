const teamMembers = [
  {
    name: "Sam Oguri",
    role: "Founder",
    src: "/team/Sam.jpg",
    linkedin:
      "https://www.linkedin.com/in/samoguri?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Steve Oguri",
    role: "Head of Operation",
    src: "/team/Steven_2.jpg",
    linkedin:
      "https://www.linkedin.com/in/steve-oguri-86361629a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Graham Injeti",
    role: "Head of Engineering",
    src: "/team/Graham.jpg",
    linkedin:
      "https://www.linkedin.com/in/graham-injeti-99aab5283?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Krishna Kaundinya",
    role: "Head of Technicalities",
    src: "/team/Krishna.jpg",
    linkedin:
      "https://www.linkedin.com/in/krishna-kaundinya-5a726b31a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
];

export const TeamSection = () => (
  <section id="team" className="py-20 bg-steel-gradient">
    <div className="container-industrial text-center mb-10">
      <h2 className="font-serif text-foreground text-3xl mb-4">Our Team</h2>
      <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-10">
        Meet the passionate people behind qubitedge.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <a
            key={member.name}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white dark:bg-card p-7 rounded-xl shadow text-center 
              flex flex-col items-center border-2 border-transparent
              transition-all duration-300 ease-out
              hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:border-accent/60
              focus:outline-none focus:ring-2 focus:ring-accent
              group
            "
            title={`View ${member.name}'s LinkedIn`}
            style={{ textDecoration: "none" }}
          >
            <img
              src={member.src}
              alt={member.name}
              className="w-24 h-24 mb-4 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-accent transition-all duration-300"
            />
            <h3 className="font-semibold text-xl text-foreground group-hover:text-accent transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-muted-foreground mt-1">{member.role}</p>
            <span className="mt-3 inline-block text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
              → Visit LinkedIn
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
