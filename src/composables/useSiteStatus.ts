import { ref, onMounted, onUnmounted } from 'vue';

export type SiteTone = 'up' | 'warn' | 'down' | 'unknown';

/** 状态检测 API（EdgeOne Pages 边缘函数，返回聚合后的监控状态） */
const STATUS_API = 'https://status.qi1.website/status';
/** 轮询间隔：状态由 SCF 每 5 分钟更新一次，60s 拉取足够且省流量 */
const POLL_MS = 60_000;

interface StatusResponse {
  monitors?: Array<{ current?: { status?: string } }>;
  summary?: { allUp?: boolean; someDown?: boolean } | null;
}

/**
 * 拉取并聚合站点状态，供页脚展示。
 * 任何异常（网络/CORS/格式）都退化为 'unknown'，不抛错、不影响页面其他部分。
 */
export function useSiteStatus() {
  const tone = ref<SiteTone>('unknown');
  const label = ref('检测中');
  let timer: ReturnType<typeof setInterval> | null = null;

  async function load() {
    try {
      const res = await fetch(STATUS_API, { headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = (await res.json()) as StatusResponse;
      const monitors = data.monitors ?? [];
      if (monitors.length === 0) {
        tone.value = 'unknown';
        label.value = '暂无数据';
        return;
      }

      const downCount = monitors.filter((m) => m.current?.status === 'down').length;
      if (downCount === 0) {
        tone.value = 'up';
        label.value = '所有服务正常';
      } else if (downCount === monitors.length) {
        tone.value = 'down';
        label.value = '服务中断';
      } else {
        tone.value = 'warn';
        label.value = `${downCount} / ${monitors.length} 服务异常`;
      }
    } catch {
      // 拿不到状态本身就是一种异常信号，但页脚不该因此报错刷屏
      tone.value = 'unknown';
      label.value = '状态不可用';
    }
  }

  onMounted(() => {
    load();
    timer = setInterval(load, POLL_MS);
  });

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });

  return { tone, label };
}
