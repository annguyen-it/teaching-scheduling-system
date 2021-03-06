import { Role } from '@teaching-scheduling-system/core/data-access/models';
import { PermissionConstant } from '@teaching-scheduling-system/core/data-access/constants';

export class PermissionHelper {
  public static isTeacher(permissions: number[]): boolean {
    return permissions.includes(
      PermissionConstant.REQUEST_CHANGE_TEACHING_SCHEDULE
    );
  }

  public static isDepartmentHead(permissions: number[]): boolean {
    return permissions.includes(
      PermissionConstant.SEE_DEPARTMENT_TEACHING_SCHEDULE
    );
  }

  public static isRoomManager(permissions: number[]): boolean {
    return permissions.includes(PermissionConstant.MANAGE_ROOM);
  }

  public static getRole(permissions: number[]): Role {
    if (PermissionHelper.isRoomManager(permissions)) {
      return 'roomManager';
    }
    if (PermissionHelper.isDepartmentHead(permissions)) {
      return 'departmentHead';
    }
    return 'teacher';
  }
}
