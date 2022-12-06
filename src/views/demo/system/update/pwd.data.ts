import { FormSchema } from '/@/components/Form';

export const formSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'usersex',
    label: '用户性别',
    component: 'Input',
    required: true,
  },
  {
    field: 'userphone',
    label: '用户手机',
    component: 'Input',
    required: true,
  },
  {
    field: 'usermail',
    label: '用户邮箱',
    component: 'Input',
    required: true,
  },
  {
    field: 'usertext',
    label: '用户签名',
    component: 'Input',
    required: true,
  },
];
