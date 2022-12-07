<template>
  <div>
    <PageWrapper title="商品列表">
      <template #extra>
        <InputSearch
          v-model:value="searcheItem"
          placeholder="input search query here"
          :loading="loading"
          enter-button
          @search="onSearch"
        />
      </template>
      <CardList
        :params="params"
        :api="GET_ALL_LIST"
        @get-method="getMethod"
        @opendrawer="handleDrawer"
        @open-detail="handleDetail"
        @delete="handleDel"
      />
    </PageWrapper>
    <addModal @register="register" />
    <drawer @register="register2" />
    <detail @register="register1" />
  </div>
</template>
<script lang="ts" setup>
  import { CardList } from '/@/components/CardList';
  import { Button } from '/@/components/Button';
  import { PageWrapper } from '/@/components/Page';
  import { InputSearch } from 'ant-design-vue';
  import { demoListApi, GET_ALL_LIST, GET_COMMENT } from '/@/api/demo/table';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useUserStore } from '/@/store/modules/user';
  import drawer from './drawer.vue';
  import detail from './detail.vue';
  import addModal from './addmodal.vue';
  import { useModal } from '/@/components/Modal';
  import { useDrawer } from '/@/components/Drawer';
  import { ref } from 'vue';
  const [register, { openModal }] = useModal();
  const { notification } = useMessage();
  const searcheItem = ref('');
  // 请求api时附带参数
  let params = ref({ text: searcheItem.value });
  const loading = ref(false);
  const [register1, { openDrawer: openDetail }] = useDrawer();
  const [register2, { openDrawer: openDrawer2 }] = useDrawer();
  let reload = () => {};
  // 获取内部fetch方法;
  function getMethod(m: any) {
    reload = m;
  }
  //删除按钮事件
  function handleDel(id) {
    notification.success({ message: `成功删除${id}` });
    reload();
  }

  function onSearch() {
    try {
      loading.value = true;
      params.value = { text: searcheItem.value };
      reload();
    } catch {
    } finally {
      loading.value = false;
    }
  }
  async function handleDrawer(e) {
    console.log(e);
    const data = await GET_COMMENT({ page: '1', size: '3', userid: '4' });
    console.log(data);
    openDrawer2(true, {
      data: data,
    });
  }
  async function handleDetail(e) {
    console.log(e);
    openDetail(true);
  }
</script>
