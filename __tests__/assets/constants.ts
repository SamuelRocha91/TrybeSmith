import { requirements } from '../../.trybe/requirements.json';

export const sequelizeCLI = {
  drop: "npx sequelize-cli db:drop",
  create: "npx sequelize-cli db:create",
  migrate: "npx sequelize-cli db:migrate",
  seed: "npx sequelize-cli db:seed:all"
};

export function getRequirementDescription(reqNumber: number) {
  return requirements[reqNumber - 1].description;
}
