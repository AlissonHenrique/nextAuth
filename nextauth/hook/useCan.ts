import { useContext } from "react";
import { AuthContext } from "../context/authContext";

type UseCanParams = {
  permission?: string[];
  roles?: string[];
};

export function useCan({ permission, roles }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return false;
  }
  if (permission?.length > 0) {
    const hasAllPermissions = permission.every((permission) => {
      return user.permissions.includes(permission);
    });
    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllRoles = roles.every((role) => {
      return user.roles.includes(role);
    });
    if (!hasAllRoles) {
      return false;
    }
  }
}
