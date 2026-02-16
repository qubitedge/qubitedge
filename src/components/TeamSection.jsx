const teamMembers = [
  { name: "Sam O", role: "Founder", src: "/team/Sam.jpg" },
  { name: "Graham", role: "Head of Engineering", src: "/team/Graham.jpg" },
  {
    name: "Steve Justin",
    role: "Head of Operation",
    src: "/team/Steven_2.jpg",
  },
  { name: "Krishna", role: "Head of Technicalities", src: "/team/Krishna.jpg" },
];

export const TeamSection = () => (
  <section id="team" className="py-20 bg-steel-gradient">
    <div className="container-industrial text-center mb-10">
      <h2 className="font-serif text-foreground text-3xl mb-4">Our Team</h2>
      <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-10">
        Meet the passionate people behind Qubitedge.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white dark:bg-card p-7 rounded-xl shadow text-center"
          >
            <img
              src={member.src}
              alt={member.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow"
            />
            <h3 className="font-semibold text-xl text-foreground">
              {member.name}
            </h3>
            <p className="text-muted-foreground mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
