import { Projects } from "../components/Projects";
import { projects_list } from "../assets/projects_list";
import { HeaderFilter } from "../components/HeaderFilter";

export function HomePage() {
  return (
    <>
      <HeaderFilter />
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
    </>
  );
}
