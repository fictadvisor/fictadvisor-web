import { PERMISSION, PermissionData } from '../types';

const createPermissionRequest = (values: PermissionData) => {
  const permissions: PERMISSION[] = [];
  for (const permission of Object.values(PERMISSION)) {
    if (permission.split('.')[1] === '$userId' && values.userId) {
      permissions.push(permission);
    }
    if (permission.split('.')[1] === '$groupId' && values.groupId) {
      permissions.push(permission);
    }
    if (permission.split('.')[1] === '$roleId' && values.roleId) {
      permissions.push(permission);
    }
    if (permission.split('.')[1] === '$teacherId' && values.teacherId) {
      permissions.push(permission);
    }
    if (permission.split('.')[1][0] !== '$') {
      permissions.push(permission);
    }
  }

  const body = {
    permissions: permissions,
    values: {
      userId: values.userId,
      groupId: values.groupId,
      roleId: values.roleId,
      teacherId: values.teacherId,
    },
  };

  return body;
};

export default createPermissionRequest;
