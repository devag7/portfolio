import { EXPERIENCE, FAQ, IDENTITY, MAIN, PERSON_ID, PROFILE, PROJECTS, MORE_PROJECTS, SITE, EMAIL } from "./profile";

/** schema.org graph for the homepage: ProfilePage about one Person, shared with devshipit.com by @id. */
export function structuredData() {
  const projects = [...PROJECTS, ...MORE_PROJECTS];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE}/#page`,
        url: `${SITE}/`,
        name: PROFILE.title,
        description: PROFILE.description,
        inLanguage: "en-IN",
        dateModified: "2026-10-16T12:00:00+05:30",
        mainEntity: { "@id": PERSON_ID },
        isPartOf: { "@id": `${SITE}/#site` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#site`,
        url: `${SITE}/`,
        name: "Dev Agarwalla",
        alternateName: ["me.devshipit.com", "Dev Agarwalla portfolio"],
        inLanguage: "en-IN",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PROFILE.name,
        alternateName: ["devag7", "DevAgarwalla", "Dev Agarwalla (DevShipIt)"],
        givenName: "Dev",
        familyName: "Agarwalla",
        url: `${SITE}/`,
        image: `${SITE}/og.png`,
        email: `mailto:${EMAIL}`,
        jobTitle: PROFILE.role,
        description: PROFILE.description,
        worksFor: { "@type": "Organization", name: "Falcon Reality" },
        affiliation: { "@type": "CollegeOrUniversity", name: "BITS Pilani" },
        address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
        knowsAbout: ["Full-stack development", "Applied AI", "Model Context Protocol", "Next.js", "NestJS", "PostgreSQL", "MongoDB", "MERN stack", "TypeScript", "Technical delivery"],
        hasOccupation: EXPERIENCE.slice(0, 1).map((e) => ({ "@type": "Occupation", name: e.role, occupationLocation: { "@type": "City", name: "Bengaluru" } })),
        brand: { "@type": "Brand", name: "DevShipIt", url: `${MAIN}/` },
        sameAs: [...IDENTITY, `${MAIN}/about/`],
        mainEntityOfPage: `${SITE}/`,
        nationality: { "@type": "Country", name: "India" },
        subjectOf: projects.filter((p) => p.caseStudy).map((p) => ({ "@type": "CreativeWork", name: `${p.name} case study`, url: p.caseStudy })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}
