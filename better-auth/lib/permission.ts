import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";

const statement = {
  ...defaultStatements,
} as const;

export const ac = createAccessControl(statement);

const userRole = ac.newRole({
  user: [],
});

const adminRole = ac.newRole({
  user: ["list", "set-password", "update"],
});

const superAdmin = ac.newRole({
  ...adminAc.statements,
});

export const roles = {
  user: userRole,
  admin: adminRole,
  superadmin: superAdmin,
} as const;

export type RoleName = keyof typeof roles;
