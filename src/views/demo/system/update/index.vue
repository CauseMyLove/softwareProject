<template>
  <PageWrapper title="修改当前用户信息">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { UpdateInfo } from '/@/api/sys/user';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';
  import { formSchema } from './pwd.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  export default defineComponent({
    name: 'ChangeInfo',
    components: { BasicForm, PageWrapper },
    setup() {
      const { notification, createErrorModal } = useMessage();
      const { t } = useI18n();
      const [register, { validate, resetFields }] = useForm({
        size: 'large',
        baseColProps: { span: 24 },
        labelWidth: 100,
        showActionButtonGroup: false,
        schemas: formSchema,
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          console.log(values);
          // const { passwordOld, passwordNew } = values;
          const res = await UpdateInfo(values);
          console.log(res);
          if (res.data.data) {
            notification.success({
              message: '修改成功',
              duration: 3,
            });
            resetFields();
            return;
          }
          createErrorModal({
            title: t('sys.api.errorTip'),
            content: res.data.msg || t('sys.api.networkExceptionMsg'),
            getContainer: () => document.body.querySelector(`.updateInfo`) || document.body,
          });
          console.log(res);
          // TODO custom api
          // const { router } = useRouter();
          // router.push(pageEnum.BASE_LOGIN);
        } catch (error) {}
      }

      return { register, resetFields, handleSubmit };
    },
  });
</script>
