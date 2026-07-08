import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps, useSlidePageNumber } from '@open-slide/core';

// ─── Panel-tweakable design tokens ────────────────────────────────────────────
export const design: DesignSystem = {
  palette: {
    bg: '#FAF8F3',
    text: '#1C231F',
    accent: '#1F7A4B',
  },
  fonts: {
    display: '"Segoe UI", "PingFang TC", "Microsoft JhengHei", system-ui, -apple-system, sans-serif',
    body: '"Segoe UI", "PingFang TC", "Microsoft JhengHei", system-ui, -apple-system, sans-serif',
  },
  typeScale: {
    hero: 168,
    body: 36,
  },
  radius: 16,
};

// ─── Local (non-tweakable) constants ──────────────────────────────────────────
const muted = '#6E7268';
const cardBorder = '#E7E2D5';
const cardBg = '#FFFFFF';
const gridLine = 'rgba(31,122,75,0.08)';

// Progress-spectrum color per course part — decoration only, not a panel token.
const partColor = {
  p1: '#1F7A4B', // 資料庫基礎
  p2: '#1E9076', // 交易紀錄
  p3: '#1B84A8', // 計算引擎
  p4: '#2E6FBF', // 儀表板
  p5: '#6A5FCB', // 雲端部署
  p6: '#C0902E', // 桌面自動化
  p7: '#B5502E', // 跨檔案彙總
};

// Distinct color for student-exercise pages, kept apart from the part spectrum.
const taskColor = '#5B6470';

const PAD = 110;

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  boxSizing: 'border-box' as const,
};

const page = {
  ...fill,
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  padding: PAD,
  position: 'relative' as const,
  display: 'flex',
  flexDirection: 'column' as const,
};

// ─── Shared background texture ────────────────────────────────────────────────
const GridTexture = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: `linear-gradient(${gridLine} 1px, transparent 1px), linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
      backgroundSize: '80px 80px',
      pointerEvents: 'none',
    }}
  />
);

// ─── Shared chrome ─────────────────────────────────────────────────────────────
const Eyebrow = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      alignSelf: 'flex-start',
      padding: '10px 20px',
      borderRadius: 999,
      background: `${color}18`,
      border: `1px solid ${color}40`,
    }}
  >
    <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
    <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: '0.08em', color }}>{children}</span>
  </div>
);

const PageHeading = ({ children, maxWidth }: { children: React.ReactNode; maxWidth?: number }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 64,
      fontWeight: 800,
      lineHeight: 1.15,
      margin: '32px 0 0',
      maxWidth: maxWidth ?? 1560,
      color: 'var(--osd-text)',
    }}
  >
    {children}
  </h2>
);

const PageFooter = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <>
      <div style={{ position: 'absolute', bottom: 48, left: PAD, fontSize: 22, color: muted, letterSpacing: '0.05em' }}>
        AI EXCEL 課程
      </div>
      <div style={{ position: 'absolute', bottom: 48, right: PAD, fontSize: 22, color: muted, letterSpacing: '0.05em' }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </>
  );
};

// ─── Reusable building blocks ──────────────────────────────────────────────────
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '8px 16px',
      borderRadius: 8,
      background: '#F1EFE4',
      color: 'var(--osd-text)',
      fontSize: 23,
      fontWeight: 600,
      border: `1px solid ${cardBorder}`,
    }}
  >
    {children}
  </span>
);

const FeatureCard = ({
  color,
  title,
  subtitle,
  children,
}: {
  color: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <div
    style={{
      flex: 1,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 20,
      padding: '32px 32px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    }}
  >
    <div style={{ width: 44, height: 6, borderRadius: 4, background: color }} />
    <div style={{ fontSize: 34, fontWeight: 800 }}>{title}</div>
    <div style={{ fontSize: 24, color: muted, marginTop: -8 }}>{subtitle}</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>{children}</div>
  </div>
);

const StepCard = ({ num, color, title, desc }: { num: string; color: string; title: string; desc: string }) => (
  <div
    style={{
      flex: 1,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 20,
      padding: '28px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    }}
  >
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        background: color,
        color: '#fff',
        fontSize: 24,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {num}
    </div>
    <div style={{ fontSize: 29, fontWeight: 800 }}>{title}</div>
    <div style={{ fontSize: 23, color: muted, lineHeight: 1.4 }}>{desc}</div>
  </div>
);

const RuleLine = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display: 'flex', gap: 12, fontSize: 25, lineHeight: 1.4 }}>
    <span style={{ color: muted, fontWeight: 700, minWidth: 96 }}>{label}</span>
    <span>{value}</span>
  </div>
);

const TxCard = ({ color, title, children }: { color: string; title: string; children: React.ReactNode }) => (
  <div
    style={{
      flex: 1,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 20,
      padding: '30px 34px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 40, height: 40, borderRadius: 12, background: color }} />
      <div style={{ fontSize: 34, fontWeight: 800 }}>{title}</div>
    </div>
    {children}
  </div>
);

const KpiTile = ({ label, hint, color }: { label: string; hint: string; color: string }) => (
  <div
    style={{
      flex: 1,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderTop: `4px solid ${color}`,
      borderRadius: 16,
      padding: '22px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}
  >
    <div style={{ fontSize: 28, fontWeight: 800 }}>{label}</div>
    <div style={{ fontSize: 20, color: muted, lineHeight: 1.35 }}>{hint}</div>
  </div>
);

const MiniFeature = ({ color, title, desc }: { color: string; title: string; desc: string }) => (
  <div
    style={{
      flex: 1,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 16,
      padding: '24px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
      <span style={{ fontSize: 28, fontWeight: 800 }}>{title}</span>
    </div>
    <div style={{ fontSize: 22, color: muted, lineHeight: 1.4 }}>{desc}</div>
  </div>
);

const RoadmapChip = ({ num, color, label, sub }: { num: string; color: string; label: string; sub: string }) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 }}>
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: color,
        color: '#fff',
        fontSize: 24,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {num}
    </div>
    <div style={{ fontSize: 24, fontWeight: 800 }}>{label}</div>
    <div style={{ fontSize: 19, color: muted, lineHeight: 1.3 }}>{sub}</div>
  </div>
);

const RoadmapArrow = () => <div style={{ alignSelf: 'flex-start', marginTop: 14, fontSize: 26, color: muted }}>→</div>;

const TaskCard = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div
    style={{
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 16,
      padding: '24px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}
  >
    <div style={{ fontSize: 28, fontWeight: 800, color: taskColor }}>{`任務 ${num}：${title}`}</div>
    <div style={{ fontSize: 24, color: muted, lineHeight: 1.5 }}>{desc}</div>
  </div>
);

const Badge = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 26 }}>
    <span style={{ width: 22, height: 22, borderRadius: 6, background: color, flexShrink: 0 }} />
    <span style={{ fontWeight: 700 }}>{label}</span>
  </div>
);

const Callout = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <div
    style={{
      background: `${color}0F`,
      border: `1px solid ${color}33`,
      borderRadius: 16,
      padding: '22px 30px',
      fontSize: 26,
      lineHeight: 1.5,
      color: 'var(--osd-text)',
    }}
  >
    {children}
  </div>
);

const AudienceCard = ({
  color,
  title,
  a,
  b,
  c,
  d,
}: {
  color: string;
  title: string;
  a: string;
  b: string;
  c: string;
  d: string;
}) => (
  <div
    style={{
      flex: 1,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 20,
      padding: '36px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: color }} />
      <div style={{ fontSize: 38, fontWeight: 800 }}>{title}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 27, lineHeight: 1.4 }}>
      <div style={{ display: 'flex', gap: 14 }}><span style={{ color }}>●</span><span>{a}</span></div>
      <div style={{ display: 'flex', gap: 14 }}><span style={{ color }}>●</span><span>{b}</span></div>
      <div style={{ display: 'flex', gap: 14 }}><span style={{ color }}>●</span><span>{c}</span></div>
      <div style={{ display: 'flex', gap: 14 }}><span style={{ color }}>●</span><span>{d}</span></div>
    </div>
  </div>
);

// ─── Page transitions (subtle "Rise" family) ──────────────────────────────────
const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';

export const transition = {
  duration: 200,
  exit: {
    duration: 140,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-4px)' },
    ],
  },
  enter: {
    duration: 200,
    delay: 80,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

// ─── Page 1 — Cover ────────────────────────────────────────────────────────────
const Cover: Page = () => (
  <div style={{ ...page, justifyContent: 'center' }}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 36, maxWidth: 1500 }}>
      <Eyebrow color={design.palette.accent}>企業內訓 / 學校課程教材</Eyebrow>
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 900,
          lineHeight: 1.05,
          margin: 0,
        }}
      >
        AI Excel 課程
      </h1>
      <p style={{ fontSize: 40, color: muted, lineHeight: 1.5, maxWidth: 1300, margin: 0 }}>
        從資料庫、儀表板到雲端與自動化 —— 用 AI 打造一套完整的營運管理系統
      </p>
      <Steps>
        <Step>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <Tag>案例情境：鍋貼店經營實戰</Tag>
            <Tag>Part 1–7 完整架構</Tag>
            <Tag>免寫程式，只靠精準 Prompt</Tag>
          </div>
        </Step>
      </Steps>
    </div>
  </div>
);
Cover.transition = {
  duration: 280,
  exit: {
    duration: 160,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-6px)' },
    ],
  },
  enter: {
    duration: 280,
    delay: 100,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
    ],
  },
};

// ─── Page 2 — 課程總覽 ─────────────────────────────────────────────────────────
const Overview: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>課程總覽</Eyebrow>
    <PageHeading>這堂課，你會學到什麼？</PageHeading>
    <p style={{ fontSize: 32, color: muted, lineHeight: 1.6, maxWidth: 1500, margin: '32px 0 0' }}>
      全程用一個真實情境串起來：一位鍋貼店老闆，不寫一行程式，只靠精準的 Prompt，把整套經營系統生出來。
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginTop: 48 }}>
      <Steps>
        <Step>
          <FeatureCard color={partColor.p1} title="蓋一套關聯式資料庫" subtitle="從主檔到交易紀錄">
            <Tag>ID 而非名稱</Tag>
            <Tag>結構化參照</Tag>
          </FeatureCard>
        </Step>
        <Step>
          <FeatureCard color={partColor.p3} title="零手動的動態公式" subtitle="成本、庫存、毛利自動算">
            <Tag>動態陣列</Tag>
            <Tag>自動溢出</Tag>
          </FeatureCard>
        </Step>
        <Step>
          <FeatureCard color={partColor.p5} title="搬上雲端變網頁系統" subtitle="Google Sheets + Apps Script">
            <Tag>Code.gs</Tag>
            <Tag>網頁儀表板</Tag>
          </FeatureCard>
        </Step>
        <Step>
          <FeatureCard color={partColor.p6} title="一鍵按鈕自動化" subtitle="VBA 把重複工作變輕鬆">
            <Tag>日報 / 叫貨單</Tag>
            <Tag>防呆檢查</Tag>
          </FeatureCard>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 3 — 案例導入 + 課程地圖 ──────────────────────────────────────────────
const CaseIntro: Page = () => (
  <div style={page}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Eyebrow color={design.palette.accent}>案例情境</Eyebrow>
      <PageHeading>一間鍋貼店，一套完整的 AI Excel 系統</PageHeading>
      <p style={{ fontSize: 34, lineHeight: 1.6, maxWidth: 1500, margin: '32px 0 0', color: 'var(--osd-text)' }}>
        貫穿全程的實戰案例——老闆不寫一行程式，只靠精準的 Prompt，
        和 AI 一起把資料庫、公式、儀表板到自動化全部生出來。
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr',
          alignItems: 'start',
          gap: 8,
          marginTop: 48,
        }}
      >
        <Steps>
          <Step><RoadmapChip num="1" color={partColor.p1} label="資料庫" sub="主檔＋BOM" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="2" color={partColor.p2} label="交易紀錄" sub="銷售＋進貨" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="3" color={partColor.p3} label="計算引擎" sub="成本／庫存／毛利" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="4" color={partColor.p4} label="儀表板" sub="KPI 即時連動" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="5" color={partColor.p5} label="雲端部署" sub="GAS + 網頁" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="6" color={partColor.p6} label="桌面自動化" sub="VBA 一鍵按鈕" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="7" color={partColor.p7} label="跨檔案彙總" sub="月報自動產出" /></Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4 — Part 1a：三張主檔 ────────────────────────────────────────────────
const Part1Tables: Page = () => (
  <div style={page}>
    {/* @slide-comment id="c-62f64716" ts="2026-07-08T07:45:25.152Z" text="eyJub3RlIjoi5b6A5b6M5paw5aKe5LiA6aCB77yM6KuL5L2g5pW055CG6YeN6bue5Y-K5o6S54mIOlxu6YCZ5q61IHByb21wdOijoemdoueUqOS6huW-iOWkmuOAjOiukyBBSSDnlKLlh7ogRXhjZWwg5LiN5a655piT6Kqk6Kej44CN55qE5oqA5ben44CC6YeN6bue5oqA5ben5aaC5LiL77yaXG4xLiDlhYjmjIflrprop5LoibLoiIfku7vli5lcbuOAjOS9oOaYr-S4gOS9jemNi-iyvOW6l-iAgemXhu-8jOePvuWcqOimgeeUouWHuuS4gOS7vSAueGxzeCDmqpTjgI1cbumAmeiukyBBSSDnn6XpgZPmg4XlooPmmK_jgIzpjYvosrzlupfnh5_pgYvos4fmlpnjgI3vvIzkuI3mmK_kuIDoiKznqbrnmb3ooajmoLzjgIJcbuWQjOaZguS5n-aYjueiuuaMh-Wumui8uOWHuueJqeaYryAueGxzeO-8jOS4jeaYr-aWh-Wtl-ihqOagvOOAgUNTViDmiJYgR29vZ2xlIFNoZWV044CCXG4yLiDmmI7norrmjIflrprlt6XkvZzooajmlbjph4_oiIflkI3nqLFcbuOAjOijoemdouimgeacieWbm-WAi-mggeexpO-8jOS4puS4lOmAkOS4gOWIl-WHuu-8muWVhuWTgeS4u-aqlOOAgeWOn-eJqeaWmeS4u-aqlOOAgeS-m-aHieWVhuS4u-aqlOOAgeioreWumumBuOWWruOAjVxu6YCZ5Y-v5Lul6YG_5YWNIEFJIOiHquW3seS6guaWsOWinuaIlua8j-aOieW3peS9nOihqOOAglxuMy4g55So44CM5ous6Jmf5LiN5piv5qyE5L2N5ZCN56ix44CN6YG_5YWN5qiZ6aGM6Yyv6KqkXG7ku6XkuIvmrITkvY3lkI3nqLHlvozmlrnmi6zomZ_lg4XngrrpgbjpoIXoqqrmmI7vvIzkuI3opoHlh7rnj77lnKjlr6bpmpvnmoTmrITkvY3mqJnpoYzmloflrZfkuK1cblgg5ZWG5ZOB5YiG6aGe77yI6Y2L6LK877yP5rmv5ZOB77yP6aOy5ZOB77yP5bCP6I-c77yP5YyF5p2Q77yJXG5P5ZWG5ZOB5YiG6aGeXG40LiDnlKjmi6zomZ_lhaflrrnnlbbkvZzkuIvmi4npgbjllq7kvobmupBcbuaykuacieWPpuWklumHjeikh-WIl-S4gOW8tea4heWWru-8jOiAjOaYr-imj-Wumu-8mlxu5Y-q6KaB5pyJ6aCF55uu5b6M57a05pyJ5ous6Jmf5YKZ6Ki755qE77yM6YO95piv6KaB5L6d54Wn5ous6Jmf5YWn5a655bu656uL5LiL5ouJ5byP5riF5ZauXG7pgJnmmK_jgIznlKjmj4_ov7Dopo_liYforpMgQUkg6Ieq5YuV5oq95Y-W5qKd5Lu244CN55qE5oqA5ben44CCXG41LiDlsIfkuIvmi4npgbjllq7kvobmupDpm4bkuK3liLDjgIzoqK3lrprpgbjllq7jgI1cbuOAjOWcqOioreWumumBuOWWrueahOesrOS4gOWIl-mWi-Wni-W-gOS4i-ebtOaOkuWhq-WFpeashOS9jeaomemhjCArIOa4heWWrumgheebruOAjVxu6YCZ5piv5bu656uL44CM6LOH5paZ6amX6K2J5L6G5rqQ6ZuG5Lit566h55CG44CN55qE5YGa5rOV44CCXG7lpb3omZXmmK_mnKrkvoblpoLmnpzpgbjpoIXopoHkv67mlLnvvIzkuI3nlKjpgJDkuIDmlLnmr4_lgIvkuIvmi4npgbjllq7vvIzlj6ropoHmlLnoqK3lrprpgbjllq7nmoTmuIXllq7kvobmupDjgIJcbjYuIOaciea4healmueahOizh-aWmee1kOani-WxpOasoVxucHJvbXB0IOe1kOani-W-iOa4healmu-8mlxu5YWI6Kqq57i95Lu75YuZXG7ihpLlho3oqqrms6jmhI_kuovpoIVcbuKGkuWGjeWIhumggeexpFxu4oaS5q-P5YCL6aCB57Gk5YiX5qyE5L2NXG7ihpLmnIDlvozoqqrkuIvmi4npgbjllq7opo_liYcifQ" */}
    <Eyebrow color={partColor.p1}>PART 1 · 資料庫基礎</Eyebrow>
    <PageHeading>先蓋好三張主檔，資料才穩得住</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 48 }}>
      <Steps>
        <Step>
          <FeatureCard color={partColor.p1} title="商品主檔" subtitle="菜單的概念">
            <Tag>商品ID</Tag>
            <Tag>商品分類</Tag>
            <Tag>售價</Tag>
            <Tag>商品狀態</Tag>
          </FeatureCard>
        </Step>
        <Step>
          <FeatureCard color={partColor.p1} title="供應商主檔" subtitle="合作廠商資料">
            <Tag>供應商ID</Tag>
            <Tag>供應品項</Tag>
            <Tag>聯絡人</Tag>
            <Tag>付款方式</Tag>
            <Tag>狀態</Tag>
          </FeatureCard>
        </Step>
        <Step>
          <FeatureCard color={partColor.p1} title="原物料主檔" subtitle="庫存與來源">
            <Tag>物料ID</Tag>
            <Tag>安全庫存</Tag>
            <Tag>主要供應商ID</Tag>
          </FeatureCard>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 40 }}>
      <Steps>
        <Step>
          <Callout color={partColor.p1}>
            為什麼要編號？名稱可能同名、可能改名——ID 才分得清楚是哪一家。<b>編號是給系統跟公式認的，名稱是給人看的。<br />{''}</b>
            往後做採購單、庫存異動、進貨紀錄、成本分析，ID 都會是最穩定的關聯欄位。
          </Callout>
        </Step>
        <Step>
          <Callout color={taskColor}>
            <div style={{ fontWeight: 800 }}>任務 1：請 AI 產出三張主檔</div>
            <div style={{ fontSize: 22, color: muted, marginTop: 6 }}>請同學打開操作手冊.doc 第 4 頁</div>
          </Callout>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4a — 課堂練習：完成三張主檔 ──────────────────────────────────────────
const Part1Task567: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.7–8</Eyebrow>
    <PageHeading>請完成三張主檔的內容</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 44 }}>
      <Steps>
        <Step><TaskCard num="5" title="完成商品主檔" desc="請同學產出 5～10 個菜單品項" /></Step>
        <Step>
          <TaskCard
            num="6"
            title="完成原物料主檔"
            desc="請依照您的菜單品項，整理出所有需要用到的原物料名稱、分類、單位、庫存等資料"
          />
        </Step>
        <Step>
          <TaskCard
            num="7"
            title="完成供應商主檔"
            desc="請產出 5～10 筆供應商資料（供應商名稱、主要供應品項、聯絡人、電話、付款方式、狀態）"
          />
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4b — 課堂練習：檢查下拉選單 ──────────────────────────────────────────
const Part1TaskDropdownCheck: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習</Eyebrow>
    <PageHeading>二、如何讓下拉選單變得聰明？</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 44 }}>
      <Steps>
        <Step>
          <TaskCard
            num="2"
            title="檢查每個下拉選單"
            desc="在「設定選單」往下新增一個項目，下拉選單是否更新？選項裡有沒有「空白選項」？"
          />
        </Step>
        <Step>
          <TaskCard
            num="3"
            title="檢查下拉選單的來源公式"
            desc="資料 → 資料驗證，查看來源公式：是絕對範圍（$1:$4／$A:$A）還是動態範圍？"
          />
        </Step>
        <Step>
          <Callout color={taskColor}>
            如果新增項目後下拉選單沒更新、或出現空白選項——代表公式無法跟著清單長度動態擷取。
          </Callout>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4c — 課堂練習：讓 AI 修正下拉選單公式 ───────────────────────────────
const Part1TaskDropdownFix: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 任務 4</Eyebrow>
    <PageHeading>讓 AI 修正下拉選單公式</PageHeading>
    <div style={{ marginTop: 40 }}>
      <Steps>
        <Step>
          <Callout color={taskColor}>
            Prompt：請檢查所有資料驗證的下拉選單來源，如果是絕對範圍參照，請改成可依清單長度自動判斷的動態範圍。
          </Callout>
        </Step>
        <Step>
          <ul style={{ fontSize: 27, lineHeight: 1.7, margin: '32px 0 0', paddingLeft: 40 }}>
            <li>從清單第一筆資料所在儲存格開始抓取</li>
            <li>依該欄目前實際筆數，決定往下抓幾列</li>
            <li>標題列不納入下拉選單</li>
            <li>來源不抓到多餘空白儲存格</li>
            <li>清單新增資料時，範圍自動延伸</li>
            <li>保留原本工作表與欄位位置</li>
          </ul>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5 — Part 1b：表格化・下拉・XLOOKUP・BOM ──────────────────────────────
const Part1Tools: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p1}>PART 1 · 資料庫基礎</Eyebrow>
    <PageHeading>把範圍變成「表格」，公式跟著資料自動長大</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginTop: 44 }}>
      <Steps>
        <Step><StepCard num="1" color={partColor.p1} title="Ctrl + T 轉換表格" desc="命名為 tbl_商品，勾選「我的表格有標題」" /></Step>
        <Step><StepCard num="2" color={partColor.p1} title="tbl[欄位] 結構化參照" desc="比 A:A 快、比 B:B 安全，欄位怎麼移都不怕" /></Step>
        <Step><StepCard num="3" color={partColor.p1} title="動態下拉選單" desc="OFFSET＋COUNTA，只列出「啟用」的供應商" /></Step>
        <Step><StepCard num="4" color={partColor.p1} title="XLOOKUP 自動帶名稱" desc="選 ID，自動查出對應名稱，不用複製貼上" /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 6a — 表格的好處 ──────────────────────────────────────────────────────
const Part1TableBenefits: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p1}>PART 1 · 資料庫基礎</Eyebrow>
    <PageHeading>把範圍變成表格，好處是什麼？</PageHeading>
    <div style={{ display: 'flex', gap: 64, marginTop: 40 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontSize: 30, fontWeight: 800 }}>表格工具的功能</div>
        <Steps>
          <Step><RuleLine label="表格名稱" value="改成有意義的名稱，方便寫公式" /></Step>
          <Step><RuleLine label="樞紐分析" value="可快速排列、摘要資料" /></Step>
          <Step><RuleLine label="合計列" value="勾選後可快速加總／平均／計數" /></Step>
          <Step><RuleLine label="帶狀列" value="方便閱讀的隔行底色" /></Step>
          <Step><RuleLine label="篩選按鈕" value="標題列自動出現篩選箭頭" /></Step>
        </Steps>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontSize: 30, fontWeight: 800 }}>為什麼選 tbl[欄位名稱]？</div>
        <Steps>
          <Step><RuleLine label="效能極佳" value="只搜尋表格內實際資料列，不用整欄" /></Step>
          <Step><RuleLine label="自動延伸" value="新增／刪除資料，範圍自動縮放" /></Step>
          <Step><RuleLine label="易讀性高" value="一眼看出查的是哪個欄位" /></Step>
          <Step><RuleLine label="安全防錯" value="欄位怎麼移動，都能精準鎖定" /></Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 6b — 課堂練習：動手認識表格 ──────────────────────────────────────────
const Part1Task8: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.8–10</Eyebrow>
    <PageHeading>動手認識表格</PageHeading>
    <p style={{ fontSize: 28, color: muted, lineHeight: 1.6, maxWidth: 1650, margin: '32px 0 0' }}>
      儲存格資料彼此獨立，沒有「物件」概念——新增一列時，格式、下拉選單、公式都不會自動延伸，
      公式或樞紐分析也只能寫死範圍，資料一多就對不上。
    </p>
    <div style={{ marginTop: 36 }}>
      <Steps>
        <Step>
          <div style={{ fontSize: 28, fontWeight: 800, color: taskColor }}>任務 8：在商品主檔新增項目</div>
        </Step>
      </Steps>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 24 }}>
      <Steps>
        <Step><StepCard num="1" color={taskColor} title="新增序號" desc="在商品ID欄位，往下新增一個序號" /></Step>
        <Step><StepCard num="2" color={taskColor} title="觀察新列" desc="商品分類、單位、狀態與下拉選單，還有作用嗎？" /></Step>
        <Step><StepCard num="3" color={taskColor} title="還原資料" desc="把新增的序號先刪掉" /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 6 — Part 2：交易紀錄 ─────────────────────────────────────────────────
const Part2Transactions: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p2}>PART 2 · 交易紀錄</Eyebrow>
    <PageHeading>兩張交易表，把每天的買與賣都記下來</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginTop: 44 }}>
      <Steps>
        <Step>
          <TxCard color={partColor.p2} title="銷售紀錄">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Tag>銷售日期</Tag>
              <Tag>商品ID</Tag>
              <Tag>銷售數量</Tag>
              <Tag>銷售單價</Tag>
            </div>
            <RuleLine label="下拉規則" value="商品ID 只列「上架中」商品" />
            <RuleLine label="自動帶出" value="商品名稱、單價（XLOOKUP）" />
            <RuleLine label="計算公式" value="銷售金額 ＝ 數量 × 單價 − 折扣" />
          </TxCard>
        </Step>
        <Step>
          <TxCard color={partColor.p2} title="進貨紀錄">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Tag>進貨日期</Tag>
              <Tag>供應商ID</Tag>
              <Tag>物料ID</Tag>
              <Tag>進貨數量</Tag>
            </div>
            <RuleLine label="下拉規則" value="供應商／物料只列「啟用」狀態" />
            <RuleLine label="自動帶出" value="供應商名稱、物料名稱（XLOOKUP）" />
            <RuleLine label="計算公式" value="進貨金額 ＝ 數量 × 單價" />
          </TxCard>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 36 }}>
      <Steps>
        <Step>
          <Callout color={partColor.p2}>
            請 AI 依規則填入範例資料，並自我驗證：下拉值合法、查表無 #N/A、編號不重複。
          </Callout>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 7 — Part 3a：動態陣列計算表 ─────────────────────────────────────────
const Part3Engine: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 計算引擎</Eyebrow>
    <PageHeading>三張「只溢出、不手 key」的計算表</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 48 }}>
      <Steps>
        <Step>
          <FeatureCard color={partColor.p3} title="商品成本" subtitle="內用／外帶分開算">
            <Tag>BOM × 最新進貨單價</Tag>
            <Tag>毛利率</Tag>
          </FeatureCard>
        </Step>
        <Step>
          <FeatureCard color={partColor.p3} title="庫存管理" subtitle="期初＋進貨－銷售消耗">
            <Tag>目前庫存</Tag>
            <Tag>缺料 / 低於安全庫存</Tag>
          </FeatureCard>
        </Step>
        <Step>
          <FeatureCard color={partColor.p3} title="營收毛利" subtitle="每筆銷售的毛利與毛利率">
            <Tag>毛利率</Tag>
            <Tag>年／月／日篩選清單</Tag>
          </FeatureCard>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 40 }}>
      <Steps>
        <Step>
          <Callout color={partColor.p3}>
            全部用「#」動態陣列溢出——新增一筆銷售，三張報表自動跟著長，不用手動複製公式。
          </Callout>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 8 — Part 3b：格式與治理規範 ─────────────────────────────────────────
const Part3Style: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 計算引擎</Eyebrow>
    <PageHeading>讓報表一眼就懂：格式與顏色的規則</PageHeading>
    <p style={{ fontSize: 30, color: muted, margin: '28px 0 0' }}>
      格式一致，才看得出重點；顏色一致，才不會找錯頁籤。
    </p>
    <div style={{ display: 'flex', gap: 64, marginTop: 40 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 32, fontWeight: 800 }}>格式規則</div>
        <Steps>
          <Step><RuleLine label="下拉儲存格" value="加上字型底線" /></Step>
          <Step><RuleLine label="公式儲存格" value="套用字型色彩 #3072C2" /></Step>
          <Step><RuleLine label="金額儲存格" value="貨幣格式（整數）" /></Step>
          <Step><RuleLine label="日期儲存格" value="日期格式" /></Step>
          <Step><RuleLine label="毛利率儲存格" value="百分比格式" /></Step>
        </Steps>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 32, fontWeight: 800 }}>頁籤順序與顏色</div>
        <Steps>
          <Step><Badge color="#9AA0A6" label="① 設定（流程架構／設定選單）" /></Step>
          <Step><Badge color={partColor.p4} label="② 主檔（商品／供應商／原物料／BOM）" /></Step>
          <Step><Badge color={partColor.p2} label="③ 交易（銷售／進貨）" /></Step>
          <Step><Badge color="#D08A34" label="④ 計算（商品成本／庫存／營收毛利）" /></Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 9 — Part 4：互動儀表板 ──────────────────────────────────────────────
const Part4Dashboard: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p4}>PART 4 · 儀表板</Eyebrow>
    <PageHeading>篩選一動，全部指標跟著連動</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 20, marginTop: 44 }}>
      <Steps>
        <Step><KpiTile color={partColor.p4} label="營業額" hint="Σ(遮罩 × 銷售金額)" /></Step>
        <Step><KpiTile color={partColor.p4} label="總毛利" hint="Σ(遮罩 × 毛利)" /></Step>
        <Step><KpiTile color={partColor.p4} label="平均毛利率" hint="總毛利 ÷ 營業額" /></Step>
        <Step><KpiTile color={partColor.p4} label="來客數" hint="不重複訂單編號數" /></Step>
        <Step><KpiTile color={partColor.p4} label="銷售數量" hint="Σ(遮罩 × 數量)" /></Step>
        <Step><KpiTile color={partColor.p4} label="客單價" hint="營業額 ÷ 來客數" /></Step>
      </Steps>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 32 }}>
      <Steps>
        <Step><MiniFeature color={partColor.p4} title="商品排行 Top 5" desc="LET + UNIQUE / FILTER / SORTBY 動態產生" /></Step>
        <Step><MiniFeature color={partColor.p4} title="通路分析 Top 3" desc="訂單數、金額、佔比自動排序" /></Step>
        <Step><MiniFeature color={partColor.p4} title="庫存重點與缺料清單" desc="FILTER 動態列出待補貨品項" /></Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <p style={{ fontSize: 26, color: muted, marginTop: 28 }}>
          年／月／日下拉可再做成「連動篩選」——選了年，月份只跳出該年有資料的月。
        </p>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 10 — Part 5：雲端網頁儀表板 ─────────────────────────────────────────
const Part5Cloud: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>PART 5 · 雲端部署</Eyebrow>
    <PageHeading>把 Excel 搬上雲端，變成一個網頁儀表板</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginTop: 44 }}>
      <Steps>
        <Step><StepCard num="1" color={partColor.p5} title="轉為 Google 試算表" desc="上傳雲端硬碟，記下試算表 ID" /></Step>
        <Step><StepCard num="2" color={partColor.p5} title="AI 產生 Code.gs" desc="後端讀取固定儲存格範圍，回傳 JSON" /></Step>
        <Step><StepCard num="3" color={partColor.p5} title="AI 產生 index.html" desc="深色科技風前端，KPI 卡片＋RWD" /></Step>
        <Step><StepCard num="4" color={partColor.p5} title="部署為網頁應用程式" desc="Apps Script 授權後取得網址" /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 36 }}>
      <Steps>
        <Step>
          <Callout color={partColor.p5}>
            進階：加一個「新增銷售」表單把資料寫回試算表，再搭配缺料自動 Email 通知。
          </Callout>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 11 — Part 6：VBA 一鍵自動化 ─────────────────────────────────────────
const Part6Vba: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p6}>PART 6 · 桌面自動化</Eyebrow>
    <PageHeading>在 Excel 裡，按一個鈕跑完一整段工作</PageHeading>
    <div style={{ marginTop: 40 }}>
      <Steps>
        <Step>
          <Callout color={partColor.p6}>
            講得越清楚，AI 寫出來的巨集越好用——模糊的一句話 vs. 講清楚的 Prompt，結果差很多。
          </Callout>
        </Step>
      </Steps>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginTop: 36 }}>
      <Steps>
        <Step><MiniFeature color={partColor.p6} title="銷售日報" desc="一鍵彙總當日營收、毛利、排行，另存新檔" /></Step>
        <Step><MiniFeature color={partColor.p6} title="叫貨單" desc="依供應商自動分組，產出可直接傳的採購訊息" /></Step>
        <Step><MiniFeature color={partColor.p6} title="送出前檢查" desc="抓出商品ID錯誤、重複編號、非法通路" /></Step>
        <Step><MiniFeature color={partColor.p6} title="輸入表單 UserForm" desc="免在儲存格手key，自動編號與驗證" /></Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <p style={{ fontSize: 26, color: muted, marginTop: 28 }}>
          記得另存成「Excel 啟用巨集的活頁簿（.xlsm）」——存成 .xlsx 巨集會不見。
        </p>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 12 — Part 7：跨檔案月報彙總 ─────────────────────────────────────────
const Part7Rollup: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p7}>PART 7 · 跨檔案彙總</Eyebrow>
    <PageHeading>月底，把 30 份日報一次彙總成一份月報</PageHeading>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr',
        alignItems: 'start',
        gap: 8,
        marginTop: 44,
      }}
    >
      <Steps>
        <Step><RoadmapChip num="1" color={partColor.p7} label="選資料夾" sub="整月日報檔" /></Step>
        <RoadmapArrow />
        <Step><RoadmapChip num="2" color={partColor.p7} label="逐一讀取" sub="日期／營收／明細" /></Step>
        <RoadmapArrow />
        <Step><RoadmapChip num="3" color={partColor.p7} label="品質檢查" sub="缺檔／重複／兜不攏" /></Step>
        <RoadmapArrow />
        <Step><RoadmapChip num="4" color={partColor.p7} label="彙總計算" sub="成本／毛利" /></Step>
        <RoadmapArrow />
        <Step><RoadmapChip num="5" color={partColor.p7} label="產出月報" sub="7 份報表頁" /></Step>
      </Steps>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
      <Steps>
        <Step>
          <div style={{ display: 'flex', gap: 14, fontSize: 30, lineHeight: 1.5 }}>
            <span style={{ color: partColor.p7 }}>●</span>
            <span>缺檔、重複日報都會被記一筆警告，不會悄悄漏掉</span>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', gap: 14, fontSize: 30, lineHeight: 1.5 }}>
            <span style={{ color: partColor.p7 }}>●</span>
            <span>明細加總兜不上日報數字時，直接標示差異</span>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
            <Tag>月報摘要</Tag>
            <Tag>每日趨勢</Tag>
            <Tag>商品排行</Tag>
            <Tag>通路分析</Tag>
            <Tag>毛利分析</Tag>
            <Tag>銷售明細彙總</Tag>
            <Tag>檢查清單</Tag>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13 — 課程回顧：技能地圖 ──────────────────────────────────────────────
const SkillMap: Page = () => (
  <div style={page}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Eyebrow color={design.palette.accent}>課程回顧</Eyebrow>
      <PageHeading>回頭看，你已經走了多遠</PageHeading>
      <p style={{ fontSize: 32, color: muted, margin: '28px 0 0' }}>從一張主檔表，到一整套會自己算、自己通知的系統。</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr',
          alignItems: 'start',
          gap: 8,
          marginTop: 40,
        }}
      >
        <Steps>
          <Step><RoadmapChip num="1" color={partColor.p1} label="資料庫" sub="主檔＋BOM" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="2" color={partColor.p2} label="交易紀錄" sub="銷售＋進貨" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="3" color={partColor.p3} label="計算引擎" sub="成本／庫存／毛利" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="4" color={partColor.p4} label="儀表板" sub="KPI 即時連動" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="5" color={partColor.p5} label="雲端部署" sub="GAS + 網頁" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="6" color={partColor.p6} label="桌面自動化" sub="VBA 一鍵按鈕" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="7" color={partColor.p7} label="跨檔案彙總" sub="月報自動產出" /></Step>
        </Steps>
      </div>
      <Steps>
        <Step>
          <p style={{ fontSize: 30, marginTop: 40 }}>
            關鍵不是背函數，是學會把需求講清楚——這才是 AI 時代最值得練的能力。
          </p>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 14 — 適合對象 ────────────────────────────────────────────────────────
const Audience: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>誰適合這堂課</Eyebrow>
    <PageHeading>企業內訓，也是學校最好的資料課</PageHeading>
    <div style={{ display: 'flex', gap: 40, marginTop: 48 }}>
      <AudienceCard
        color={partColor.p1}
        title="企業內訓"
        a="免寫程式，老闆與行政人員都能上手"
        b="從庫存到報表，一次補齊管理 SOP"
        c="可延伸雲端與自動化，不需要 IT 介入"
        d="用真實營運情境練習，落地即可用"
      />
      <AudienceCard
        color={partColor.p5}
        title="學校課程"
        a="從情境案例學 Excel，不再死背函數"
        b="訓練「精準提問」的 AI 協作能力"
        c="銜接資料分析、商業思維與程式邏輯"
        d="從基礎到自動化，循序漸進不斷層"
      />
    </div>
    <div style={{ marginTop: 40 }}>
      <Callout color={design.palette.accent}>
        不論企業或校園，目標一致：讓每個人都能用 AI 把 Excel 用成一套系統。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 15 — 結尾 ────────────────────────────────────────────────────────────
const Closing: Page = () => (
  <div style={{ ...page, justifyContent: 'center' }}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 1400 }}>
      <Eyebrow color={design.palette.accent}>感謝聆聽</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 100,
          fontWeight: 900,
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        讓 AI 陪你，把 Excel 變成一套系統。
      </h2>
      <Steps>
        <Step>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <Tag>7 大單元</Tag>
            <Tag>1 個完整案例</Tag>
            <Tag>從資料庫到自動化</Tag>
          </div>
        </Step>
      </Steps>
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: 'AI Excel 課程',
  createdAt: '2026-07-07T13:18:15.886Z',
};

export default [
  Cover,
  Overview,
  CaseIntro,
  Part1Tables,
  Part1Task567,
  Part1TaskDropdownCheck,
  Part1TaskDropdownFix,
  Part1Tools,
  Part1TableBenefits,
  Part1Task8,
  Part2Transactions,
  Part3Engine,
  Part3Style,
  Part4Dashboard,
  Part5Cloud,
  Part6Vba,
  Part7Rollup,
  SkillMap,
  Closing,
] satisfies Page[];
