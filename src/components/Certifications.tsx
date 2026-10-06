"use client";

import { useState } from "react";

const certifications = [
  {
    id: "01",
    category: "Curricular",
    title: "Certificate Name",
    organization: "Issuing Organization",
    image: "/certifications/certificate-01.jpg",
    link: "#",
  },
  {
    id: "02",
    category: "Curricular",
    title: "Certificate Name",
    organization: "Issuing Organization",
    image: "/certifications/certificate-02.jpg",
    link: "#",
  },
  {
    id: "03",
    category: "Curricular",
    title: "Certificate Name",
    organization: "Issuing Organization",
    image: "/certifications/certificate-03.jpg",
    link: "#",
  },
  {
    id: "04",
    category: "Curricular",
    title: "Certificate Name",
    organization: "Issuing Organization",
    image: "/certifications/certificate-04.jpg",
    link: "#",
  },

  // More Curricular certificates
  {
    id: "05",
    category: "Curricular",
    title: "Certificate Name",
    organization: "Issuing Organization",
    image: "/certifications/certificate-05.jpg",
    link: "#",
  },
  {
    id: "06",
    category: "Curricular",
    title: "Certificate Name",
    organization: "Issuing Organization",
    image: "/certifications/certificate-06.jpg",
    link: "#",
  },

  // Contribution certificates
  {
    id: "07",
    category: "Contribution",
    title: "Certificate Name",
    organization: "Organization / Event",
    image: "/certifications/certificate-07.jpg",
    link: "#",
  },
  {
    id: "08",
    category: "Contribution",
    title: "Certificate Name",
    organization: "Organization / Event",
    image: "/certifications/certificate-08.jpg",
    link: "#",
  },
  {
    id: "09",
    category: "Contribution",
    title: "Certificate Name",
    organization: "Organization / Event",
    image: "/certifications/certificate-09.jpg",
    link: "#",
  },
  {
    id: "10",
    category: "Contribution",
    title: "Certificate Name",
    organization: "Organization / Event",
    image: "/certifications/certificate-10.jpg",
    link: "#",
  },
];

const filters = ["Curricular", "Contribution"];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("Curricular");
  const [showAll, setShowAll] = useState(false);

  const filteredCertifications = certifications.filter(
    (certificate) => certificate.category === activeFilter
  );

  const visibleCertifications = showAll
    ? filteredCertifications
    : filteredCertifications.slice(0, 4);

  return (
    <section
      id="certifications"
      className="px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Credentials & Contributions
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Certifications
          </h2>

          <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-cyan-400" />
        </div>

        {/* Filters */}
        <div className="mb-12 flex justify-center">
          <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
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

        {/* Certification Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleCertifications.map((certificate) => (
            <article
              key={certificate.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Number */}
                <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                  {certificate.id}
                </div>

                {/* Category */}
                <div className="absolute right-3 top-3 rounded-full border border-cyan-400/20 bg-black/70 px-2.5 py-1 text-[10px] font-medium text-cyan-400 backdrop-blur-md">
                  {certificate.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="line-clamp-2 text-base font-bold text-white transition-colors group-hover:text-cyan-400">
                  {certificate.title}
                </h3>

                <p className="mt-2 line-clamp-1 text-xs text-zinc-500">
                  {certificate.organization}
                </p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 transition-colors hover:text-cyan-400"
                >
                  View Credential
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* See More / Show Less */}
        {filteredCertifications.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <span>{showAll ? "Show Less" : "See More"}</span>

              <span
                className={`transition-transform duration-300 ${
                  showAll ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
                }`}
              >
                {showAll ? "↑" : "↓"}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}