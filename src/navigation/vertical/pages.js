export default [
  {
    header: 'Pages',
  },

  {
    title: 'Account',
    icon: 'LogInIcon',
    children: [
      {
        title: 'Login',
        route: 'auth-login',
        target: '_blank',
      },
      {
        title: 'Register',
        route: 'auth-register',
        target: '_blank',
      },
      {
        title: 'Forgot Password',
        route: 'auth-forgot-password',
        target: '_blank',
      },
      {
        title: 'Reset Password',
        route: 'auth-reset-password',
        target: '_blank',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'TriangleIcon',
    children: [
      {
        title: 'Coming Soon',
        route: 'misc-coming-soon',
        target: '_blank',
      },
      {
        title: 'Not Authorized',
        route: 'misc-not-authorized',
        target: '_blank',
      },
      {
        title: 'Under Maintenance',
        route: 'misc-under-maintenance',
        target: '_blank',
      },
      {
        title: 'Error',
        route: 'misc-error',
        target: '_blank',
      },
    ],
  },

]
