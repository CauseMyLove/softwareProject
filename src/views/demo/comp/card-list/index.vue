<template>
  <div>
    <PageWrapper title="商品列表">
      <!-- <template #rightFooter>
      <a-input :value="searchItem" />
    </template> -->
      <CardList
        :params="params"
        :api="GOODS_LIST_page"
        @get-method="getMethod"
        @opendrawer="handleDrawer"
        @open-detail="handleDetail"
        @delete="handleDel"
      >
        <template #header>
          <!-- <Button type="primary" color="error"> 按钮1 </Button> -->
          <Button type="primary" color="success" @click="addGoods"> 添加 </Button>
        </template>
      </CardList>
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
  import { demoListApi, GOODS_LIST_page } from '/@/api/demo/table';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useUserStore } from '/@/store/modules/user';
  import drawer from './drawer.vue';
  import detail from './detail.vue';
  import addModal from './addmodal.vue';
  import { useModal } from '/@/components/Modal';
  import { useDrawer } from '/@/components/Drawer';
  const [register, { openModal }] = useModal();
  const { notification } = useMessage();
  // 请求api时附带参数

  const params = { userid: useUserStore().getUserInfo.userid };
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

  async function addGoods(params: type) {
    const { userid } = useUserStore().getUserInfo;
    openModal(true, { userid });
  }
  async function handleDrawer(e) {
    console.log(e);
    openDrawer2(true);
  }
  async function handleDetail(e) {
    console.log(e);
    openDetail(true);
  }
</script>
