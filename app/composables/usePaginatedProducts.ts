import { PAGINATION } from "~~/shared/constants";

export const usePaginatedProducts = async () => {
  const route = useRoute();

  const page = computed(() => {
    const pageParam = route.query.page as string;

    return isNaN(+pageParam) ? PAGINATION.DEFAULT_PAGE : +pageParam;
  });

  const limit = computed(() => {
    const limitParam = route.query.limit as string;

    return isNaN(+limitParam) ? PAGINATION.DEFAULT_PAGE_SIZE : +limitParam;
  });

  const offset = computed(() => {
    return (page.value - 1) * limit.value;
  });

  const { data, error, status, refresh, pending } = await useFetch(
    "/api/products",
    {
      query: {
        limit,
        offset,
      },
      watch: [page, limit],
    }
  );

  return {
    data, // Reactiva

    products: computed(() => data.value?.products || []),
    totalPages: computed(() => data.value?.totalPages || 0),
    currentPage: computed(() => data.value?.currentPage || 1),
    perPage: computed(
      () => data.value?.perPage || PAGINATION.DEFAULT_PAGE_SIZE
    ),
    total: computed(() => data.value?.total || 0),

    error,
    status,
    refresh,
    pending,
  };
};
