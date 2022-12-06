// Modal.vue
<template>
  <BasicModal
    @register="register"
    v-bind="$attrs"
    title="添加商品"
    :showOkBtn="false"
    :showCancelBtn="false"
  >
    <BasicForm
      :labelWidth="100"
      :schemas="schemas"
      :actionColOptions="{ span: 24 }"
      @submit="handleSubmit"
    />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema } from '/@/components/Form';
  import * as goods from '/@/api/demo/table';
  const schemas: FormSchema[] = [
    {
      field: 'productname',
      component: 'Input',
      label: '商品名称',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'producttext',
      component: 'Input',
      label: '商品描述',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'productcost',
      component: 'Input',
      label: '商品价格',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'productrest',
      component: 'Input',
      label: '剩余商品',
      colProps: {
        span: 24,
      },
    },
  ];
  export default defineComponent({
    components: { BasicModal, BasicForm },
    setup() {
      const userid = ref('');
      const [register, { closeModal }] = useModalInner(async (data) => {
        console.log(data);
        userid.value = data.userid;
      });
      async function handleSubmit(e) {
        console.log(e);
        const res = await goods.GOODS_LIST_add({
          productname: e.productname,
          producttext: e.producttext,
          // productimg:,
          productcost: e.productcost,
          productrest: 999,
          userid: userid.value,
        });
        console.log(res);
        closeModal();
      }
      return {
        schemas,
        register,
        handleSubmit,
      };
    },
  });
</script>
