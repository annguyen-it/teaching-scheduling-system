import { SidebarItem } from 'src/shared/models';
import { PermissionConstant } from '../core/permission.constant';

export class SidebarConstant {
  public static items: SidebarItem[] = [
    // {
    //   name: 'Học phần',
    //   icon: 'far fa-book',
    //   subItems: [
    //     { name: 'Thông tin học phần', routerLink: '' },
    //     { name: 'Thêm học phần', routerLink: '' },
    //   ],
    // },
    // {
    //   name: 'Giảng viên',
    //   icon: 'far fa-chalkboard-teacher',
    //   subItems: [
    //     { name: 'Thông tin giảng viên', routerLink: '' },
    //     { name: 'Thêm giảng viên', routerLink: '' },
    //   ],
    // },
    // {
    //   name: 'Lớp học phần',
    //   icon: 'far fa-users-class',
    //   subItems: [{ name: 'Thông tin lớp học phần', routerLink: '' }],
    // },
    {
      name: 'Lịch biểu',
      icon: 'far fa-calendar-alt',
      routerLink: '/schedule',
    },
    {
      name: 'Phân giảng',
      icon: 'far fa-pencil-paintbrush',
      routerLink: '/assign-schedule',
      permission: PermissionConstant.ASSIGN_SCHEDULE,
    },
    {
      name: 'Thay đổi lịch',
      icon: 'fas fa-exchange-alt',
      routerLink: '/change-schedule',
    },
    // {
    //   name: 'Nhập file',
    //   icon: 'far fa-file-import',
    //   subItems: [
    //     { name: 'Thêm giảng viên', routerLink: '' },
    //     { name: 'Thêm lớp học phần', routerLink: '' },
    //   ],
    // },
    // {
    //   name: 'Thông báo',
    //   icon: 'far fa-bell',
    //   routerLink: '/notification',
    //   subItems: [
    //     { name: 'Tạo thông báo mới', routerLink: '/notification/create' },
    //     { name: 'Xem tất cả thông báo', routerLink: '/notification' },
    //   ],
    // },
    // {
    //   name: 'Quản lý phân quyền',
    //   icon: 'fad fa-user-shield',
    //   routerLink: '/user-setting/permission',
    //   permission: PermissionConstant.AUTHORIZE_DEPARTMENT_PERMISSION,
    // },
    {
      name: 'Thống kê',
      icon: 'far fa-chart-pie',
      routerLink: '/statistic',
      permission: PermissionConstant.STATISTICIZE_CHANGE_SCHEDULE,
    },
  ];
}
