export const hasPermissionFunction = (user, permission) => {
    const hasAllAccess = user?.permissions?.includes("all_system_access");
    const hasSpecificPermission = user?.permissions?.includes(`read_${permission}`);
    return hasAllAccess || !permission || hasSpecificPermission;
}