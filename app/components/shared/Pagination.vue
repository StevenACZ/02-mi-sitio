<script setup lang="ts">
import { PAGINATION } from "~~/shared/constants";

const props = withDefaults(
  defineProps<{
    total: number;
    modelValue?: number;
    perPage?: number;
  }>(),
  {
    perPage: PAGINATION.DEFAULT_PAGE_SIZE,
  }
);

const router = useRouter();
const route = useRoute();

const currentPage = computed(() => {
  return parseInt(route.query.page as string) || PAGINATION.DEFAULT_PAGE;
});

const handlePageUpdate = (page: number) => {
  router.push({ query: { page: page.toString() } });
};
</script>

<template>
  <div class="flex items-center justify-center my-10">
    <UPagination
      :total="total"
      :page="currentPage"
      :items-per-page="props.perPage"
      show-edges
      @update:page="handlePageUpdate"
    />
  </div>
</template>
