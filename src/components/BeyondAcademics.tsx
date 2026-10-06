"use client";

import { useState } from "react";

const activities = [
  {
    id: "01",
    category: "Growth & Movement",
    title: "AWS Student Builder Group",
    description:
      "Growing through community leadership, technical events, collaboration, and hands-on learning.",
    image: "/beyond-academics/aws-sbg.jpg",
    link: "#",
  },
  {
    id: "02",
    category: "Growth & Movement",
    title: "Microsoft Student Ambassador",
    description:
      "Exploring technology, sharing knowledge, and connecting with a wider student developer community.",
    image: "/beyond-academics/microsoft.jpg",
    link: "#",
  },
  {
    id: "03",
    category: "Growth & Movement",
    title: "iNSIGHTS Student Ambassador",
    description:
      "Contributing to a student community while learning, collaborating, and creating new opportunities.",
    image: "/beyond-academics/insights.jpg",
    link: "#",
  },
  {
    id: "04",
    category: "Growth & Movement",
    title: "Event Organizer",
    description:
      "Organizing technical events and creating opportunities for students to learn and connect.",
    image: "/beyond-academics/event.jpg",
    link: "#",
  },
  {
    id: "05",
    category: "Milestones",
    title: "Hackathon Journey",
    description:
      "Building practical solutions, working with teams, and learning through competitive hackathon experiences.",
    image: "/beyond-academics/hackathon.jpg",
    link: "#",
  },
  {
    id: "06",
    category: "Milestones",
    title: "Project Milestone",
    description:
      "Turning ideas into working prototypes and continuously improving through hands-on development.",
    image: "/beyond-academics/project.jpg",
    link: "#",
  },
  {
    id: "07",
    category: "Milestones",
    title: "Community Milestone",
    description:
      "Taking part in initiatives that helped me grow beyond academics and contribute to others.",
    image: "/beyond-academics/community.jpg",
    link: "#",
  },
  {
    id: "08",
    category: "Milestones",
    title: "A New Challenge",
    description:
      "Every challenge is another opportunity to learn, experiment, and move forward.",
    image: "/beyond-academics/challenge.jpg",
    link: "#",
  },
];

const filters = ["Growth & Movement", "Milestones"];

export default function BeyondAcademics() {
  const [activeFilter, setActiveFilter] = useState("Growth & Movement");

  const filteredActivities = activities.filter(
    (activity) => activity.category === activeFilter
  );

  return (
    <section
      id="beyond-academics"
      className="overflow-hidden px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Beyond The Classroom
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Beyond Academics
          </h2>

          <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            The experiences, communities, challenges, and milestones that have
            shaped my journey outside the classroom.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex justify-center">
          <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:px-6 ${
                  activeFilter === filter
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filteredActivities.map((activity) => (
              <article
                key={activity.id}
                className="group relative min-w-[280px] max-w-[280px] flex-none snap-start overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 sm:min-w-[310px] sm:max-w-[310px] lg:min-w-[calc((100%-60px)/4)] lg:max-w-[calc((100%-60px)/4)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {activity.id}
                  </div>

                  {/* Category */}
                  <div className="absolute right-4 top-4 max-w-[150px] rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-center text-[10px] font-medium text-cyan-400 backdrop-blur-md">
                    {activity.category}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white">
                      {activity.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-300">
                      {activity.description}
                    </p>

                    {/* LinkedIn Button */}
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-cyan-400"
                    >
                      View on LinkedIn
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-zinc-600">
            <span className="h-px w-10 bg-white/10" />
            <span>Scroll to explore</span>
            <span className="h-px w-10 bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}