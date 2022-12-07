<template>
  <BasicDrawer v-bind="$attrs" @register="register" title="商品评论" width="50%">
    这是评论数据
    <a-button type="primary" @click="closeDrawer"> 内部关闭drawer </a-button>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { GET_COMMENT } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicDrawer },
    setup() {
      const data = ref();
      const [register, { closeDrawer }] = useDrawerInner(async (id) => {
        console.log(16, id);
        data.value = await GET_COMMENT({ page: '1', size: '3', userid: '4' });
        console.log(data.value);
      });
      return { register, closeDrawer };
    },
  });
</script>
