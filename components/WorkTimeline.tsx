import { ColourfulText } from "./ui/ColorText";
import { Timeline } from "./ui/Timeline";

export const WorkTimeline = () => {
  const workData = [
    {
      title: "Mid 2023 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Led the development of a customer-facing insurance portal serving
            20+ enterprise clients, ensuring high scalability and usability for
            a diverse user base of thousands
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Designed and delivered 7 reusable React and TypeScript components
            and integrated 5 robust Node.js API endpoints, reducing development
            time by 40%
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Developed a $100M change management platform leveraging TypeScript,
            Next.js, and Azure DevOps, delivering 10+ bespoke components and
            driving a 20% increase in client engagement
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Engineered a custom flagging system that dynamically controlled page
            visibility based on client-specific viewing requirements, improving
            user experience by 25%
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Improved platform reliability by 30% through rigorous testing
            frameworks and debugging processes, ensuring a seamless user
            experience
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Tailored solutions for three high-profile client demos with
            comprehensive style and data customizations, securing additional
            project funding
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Mentored and onboarded junior developers, enhancing team
            productivity by 15%, and collaborated with DevOps and backend teams
            for accelerated milestone completion
          </p>
        </div>
      ),
    },
    {
      title: "Summer 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Coordinated a 10-week System Integration Testing (SIT) phase for an
            SAP rollout at a major pharmaceutical client, streamlining processes
            using Python automation
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Automated the Requirements Traceability Matrix (RTM) process,
            achieving a 95% more efficient workflow
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="pb-10 px-8" id="work-timeline">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-left text-black relative z-2 font-sans">
          This is what I&apos;ve been doing for work at{" "}
          <ColourfulText text="Accenture" />:
        </h2>
        <Timeline data={workData} />
      </div>
    </>
  );
};
