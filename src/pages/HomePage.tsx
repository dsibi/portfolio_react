import { Projects } from "../components/Projects";
import { projects_list } from "../assets/projects_list";

export function HomePage() {
    return (
        <div
        id="portfolio-grid"
        className="row no-gutter"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {projects_list.map((project, i) => (
          <Projects project={project} key={i} />
        ))}
      </div>
    );
  }
  