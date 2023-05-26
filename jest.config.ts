import { getJestProjects } from '@nx/jest';

export default {
  projects: [...getJestProjects(), './libs/ui/jest.config.ts'],
};
