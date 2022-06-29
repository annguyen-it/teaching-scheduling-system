import { tuiIconLikeLarge, tuiIconSettingsLarge } from '@taiga-ui/icons';
import { NavbarGroup } from '@teaching-scheduling-system/core/data-access/models';

export class NavbarConstants {
  public static keys = {
    USER_INFORMATION: 'user-information',
    COMMENTS: 'comments',
    SETTINGS: 'settings',
    CHANGE_PASSWORD: 'change-password',
    HELP: 'help',
    LOG_OUT: 'log-out',
  };

  public static items: NavbarGroup[] = [
    {
      items: [
        {
          key: NavbarConstants.keys.USER_INFORMATION,
          label: 'Thông tin cá nhân',
          routerLink: '/user-info',
          icon: '<i class="far fa-user" style="font-size: 23px"></i>',
        },
      ],
    },
    {
      items: [
        {
          key: NavbarConstants.keys.COMMENTS,
          label: `Đóng góp ý kiến`,
          routerLink: '/feedback',
          icon: tuiIconLikeLarge,
        },
        {
          key: NavbarConstants.keys.CHANGE_PASSWORD,
          label: 'Cài đặt',
          routerLink: '/settings',
          icon: tuiIconSettingsLarge,
        },
      ],
    },
    {
      items: [
        // {
        //   key: NavbarConstants.keys.SETTINGS,
        //   label: `Cài đặt`,
        //   routerLink: '',
        //   icon: tuiIconSettingsLarge,
        // },
        // {
        //   key: NavbarConstants.keys.HELP,
        //   label: `Trợ giúp & hỗ trợ`,
        //   routerLink: '',
        //   icon: '<i class="far fa-question-circle" style="font-size: 23px"></i>',
        // },
        {
          key: NavbarConstants.keys.LOG_OUT,
          label: `Đăng xuất`,
          icon: '<i class="far fa-sign-out" style="font-size: 23px; transform: translateX(2px);"></i>',
        },
      ],
    },
  ];
}