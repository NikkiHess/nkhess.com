import type { Metadata } from 'next';
import Resume from "../components/resume"

export const metadata: Metadata = {
    title: 'Resume - Nikki Hess',
    description: 'Nikki Hess\'s resume page',
}

const ProjectPage = () => (
  <div>
    <Resume/>
  </div>
);

export default ProjectPage;