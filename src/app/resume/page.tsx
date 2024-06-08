import type { Metadata } from 'next';
import Resume from "../components/resume"

export const metadata: Metadata = {
    title: 'Resume - Nikki Hess',
    description: 'Nikki Hess\'s resume page',
}

const ResumePage = () => (
  <div>
    <Resume/>
  </div>
);

export default ResumePage;