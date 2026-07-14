import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps, useSlidePageNumber } from '@open-slide/core';

// ─── Panel-tweakable design tokens (matches AI Excel 課程 exactly) ────────────
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
const painRed = '#C0503A';
const goodGreen = '#1F7A4B';
const warnAmber = '#C0902E';
const formulaBlue = '#3072C2';
const taskColor = '#5B6470';
const violatePurple = '#8B4FA0';

// One color per worksheet — the five-table architecture spectrum for this module.
const sheetColor = {
  settings: '#1F7A4B', // 排班設定
  staff: '#1E9076', // 員工主檔
  leave: '#1B84A8', // 休假申請
  schedule: '#2E6FBF', // 排班表
  monthly: '#6A5FCB', // 月班表
};

const PAD = 80;

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
    <span style={{ fontSize: 31, fontWeight: 700, letterSpacing: '0.08em', color }}>{children}</span>
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
      <div style={{ position: 'absolute', top: 48, right: PAD, fontSize: 27, color: muted, letterSpacing: '0.05em' }}>AI excel 課程 · 排班表</div>
      <div style={{ position: 'absolute', bottom: 48, right: PAD, fontSize: 27, color: muted, letterSpacing: '0.05em' }}>
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
      fontSize: 28,
      fontWeight: 600,
      border: `1px solid ${cardBorder}`,
    }}
  >
    {children}
  </span>
);

const Callout = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <div
    style={{
      background: `${color}0F`,
      border: `1px solid ${color}33`,
      borderRadius: 16,
      padding: '22px 30px',
      fontSize: 30,
      lineHeight: 1.5,
      color: 'var(--osd-text)',
    }}
  >
    {children}
  </div>
);

const MiniFeature = ({ color, title, desc }: { color: string; title: string; desc: string }) => (
  <div
    style={{
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 16,
      padding: '22px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 }} />
      <span style={{ fontSize: 31, fontWeight: 800 }}>{title}</span>
    </div>
    <div style={{ fontSize: 26, color: muted, lineHeight: 1.4 }}>{desc}</div>
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
      <div style={{ width: 40, height: 40, borderRadius: 12, background: color, flexShrink: 0 }} />
      <div style={{ fontSize: 34, fontWeight: 800 }}>{title}</div>
    </div>
    {children}
  </div>
);

const RuleChip = ({ text, color }: { text: string; color?: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 14,
      padding: '10px 20px',
    }}
  >
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: color ?? taskColor,
        color: '#fff',
        fontSize: 18,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {color === painRed ? '!' : '✓'}
    </div>
    <div style={{ fontSize: 27, lineHeight: 1.4 }}>{text}</div>
  </div>
);

const ConstraintCard = ({
  color,
  icon,
  title,
  a,
  b,
  c,
}: {
  color: string;
  icon: string;
  title: string;
  a: string;
  b: string;
  c: string;
}) => (
  <div
    style={{
      flex: 1,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderTop: `6px solid ${color}`,
      borderRadius: 20,
      padding: '30px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <span style={{ fontSize: 34 }}>{icon}</span>
      <span style={{ fontSize: 34, fontWeight: 800 }}>{title}</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 27, lineHeight: 1.45 }}>
      <div style={{ display: 'flex', gap: 12 }}><span style={{ color }}>●</span><span>{a}</span></div>
      <div style={{ display: 'flex', gap: 12 }}><span style={{ color }}>●</span><span>{b}</span></div>
      <div style={{ display: 'flex', gap: 12 }}><span style={{ color }}>●</span><span>{c}</span></div>
    </div>
  </div>
);

const SheetChip = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    <div
      style={{
        padding: '10px 20px',
        borderRadius: 999,
        background: color,
        color: '#fff',
        fontSize: 26,
        fontWeight: 800,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </div>
  </div>
);

const FlowArrowSmall = () => <span style={{ fontSize: 27, color: muted, alignSelf: 'center' }}>→</span>;

const RoleRow = ({ color, sheet, role, reason, band }: { color: string; sheet: string; role: string; reason: string; band?: boolean }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.5fr 2.3fr',
      alignItems: 'center',
      background: band ? '#FBFAF8' : '#fff',
      borderTop: `1px solid ${cardBorder}`,
    }}
  >
    <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: 14, height: 14, borderRadius: 4, background: color, flexShrink: 0 }} />
      <span style={{ fontSize: 27, fontWeight: 800 }}>{sheet}</span>
    </div>
    <div style={{ padding: '14px 16px', fontSize: 25, color: 'var(--osd-text)' }}>{role}</div>
    <div style={{ padding: '14px 16px', fontSize: 25, color: muted }}>{reason}</div>
  </div>
);

// ─── Excel-mockup table cells ──────────────────────────────────────────────────
const SheetHeaderCell = ({ label, dropdown, tiny }: { label: string; dropdown?: boolean; tiny?: boolean }) => (
  <div
    style={{
      background: taskColor,
      color: '#fff',
      fontWeight: 800,
      fontSize: tiny ? 22 : 25,
      padding: tiny ? '6px 8px' : '8px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
    }}
  >
    <span>{label}</span>
    {dropdown && (
      <span style={{ fontSize: 13, background: 'rgba(255,255,255,0.28)', borderRadius: 4, padding: '1px 4px' }}>▼</span>
    )}
  </div>
);

const SheetCell = ({
  value,
  formula,
  band,
  tiny,
  highlight,
}: {
  value: string;
  formula?: boolean;
  band?: boolean;
  tiny?: boolean;
  highlight?: 'red' | 'yellow' | 'purple';
}) => (
  <div
    style={{
      padding: tiny ? '6px 8px' : '8px 12px',
      fontSize: tiny ? 22 : 25,
      borderTop: `1px solid ${cardBorder}`,
      background: highlight === 'red' ? `${painRed}22` : highlight === 'yellow' ? `${warnAmber}26` : highlight === 'purple' ? `${violatePurple}22` : band ? '#FBFAF8' : '#fff',
      color: highlight === 'red' ? painRed : highlight === 'purple' ? violatePurple : formula ? formulaBlue : 'var(--osd-text)',
      fontWeight: highlight || formula ? 700 : 400,
    }}
  >
    {value || ' '}
  </div>
);

const MiniRow = ({ a, b }: { a: string; b?: string }) => (
  <div style={{ padding: '11px 16px', fontSize: 25, borderTop: `1px solid ${cardBorder}`, display: 'flex', justifyContent: 'space-between' }}>
    <span style={{ fontWeight: 600 }}>{a}</span>
    {b && <span style={{ color: muted }}>{b}</span>}
  </div>
);

const MiniTable = ({ title, color, children }: { title: string; color: string; children: React.ReactNode }) => (
  <div style={{ flex: 1, borderRadius: 12, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 3px 12px rgba(0,0,0,0.06)' }}>
    <div style={{ background: color, color: '#fff', fontWeight: 800, fontSize: 25, padding: '11px 16px' }}>{title}</div>
    {children}
  </div>
);

const FlowChip = ({ label, color }: { label: string; color: string }) => (
  <div
    style={{
      fontSize: 24,
      fontWeight: 700,
      color,
      background: `${color}14`,
      border: `1px solid ${color}44`,
      borderRadius: 10,
      padding: '9px 16px',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </div>
);

const LegendItem = ({ swatch, label }: { swatch: React.ReactNode; label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    {swatch}
    <span style={{ fontSize: 25, color: 'var(--osd-text)' }}>{label}</span>
  </div>
);

const Swatch = ({ color }: { color: string }) => (
  <span style={{ width: 24, height: 24, borderRadius: 6, background: color, flexShrink: 0, display: 'inline-block' }} />
);

// ─── Month-matrix mockup components (Task 5) ───────────────────────────────────
const DayHeader = ({ date, dow, weekend }: { date: string; dow: string; weekend?: boolean }) => (
  <div
    style={{
      background: weekend ? '#7A4B3C' : taskColor,
      color: '#fff',
      textAlign: 'center',
      padding: '8px 4px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
  >
    <span style={{ fontSize: 22, fontWeight: 800 }}>{date}</span>
    <span style={{ fontSize: 18, opacity: 0.85 }}>{dow}</span>
  </div>
);

const NameCell = ({ name, band }: { name: string; band?: boolean }) => (
  <div
    style={{
      padding: '10px 14px',
      fontSize: 24,
      fontWeight: 800,
      borderTop: `1px solid ${cardBorder}`,
      background: band ? '#FBFAF8' : '#fff',
    }}
  >
    {name}
  </div>
);

const ShiftCell = ({ value, kind, band }: { value: string; kind: 'shift' | 'off' | 'empty'; band?: boolean }) => (
  <div
    style={{
      padding: '10px 6px',
      fontSize: 20,
      textAlign: 'center',
      borderTop: `1px solid ${cardBorder}`,
      background: kind === 'off' ? `${warnAmber}18` : band ? '#FBFAF8' : '#fff',
      color: kind === 'off' ? warnAmber : kind === 'empty' ? '#C7C2B4' : formulaBlue,
      fontWeight: kind === 'off' ? 800 : 600,
    }}
  >
    {value}
  </div>
);

const SummaryLabelCell = ({ label }: { label: string }) => (
  <div style={{ padding: '10px 14px', fontSize: 24, fontWeight: 800, borderTop: `2px solid ${cardBorder}`, background: '#F1EFE4' }}>
    {label}
  </div>
);

const SummaryValueCell = ({ value, flag }: { value: string; flag?: 'red' | 'yellow' }) => (
  <div
    style={{
      padding: '10px 6px',
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 800,
      borderTop: `2px solid ${cardBorder}`,
      background: flag === 'red' ? `${painRed}30` : flag === 'yellow' ? `${warnAmber}30` : '#F1EFE4',
      color: flag === 'red' ? painRed : flag === 'yellow' ? '#8A6414' : 'var(--osd-text)',
    }}
  >
    {value}
  </div>
);

// ─── Task-page label row (matches AI Excel 課程 task-header pattern) ──────────
const TaskLabel = ({ num, title, promptNum }: { num: string; title: string; promptNum: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>{`任務 ${num}：${title}`}</div>
    <span
      style={{
        fontSize: 25,
        fontWeight: 800,
        color: taskColor,
        background: `${taskColor}14`,
        borderRadius: 999,
        padding: '5px 14px',
      }}
    >
      {`依 PROMPT ${promptNum} 建立`}
    </span>
  </div>
);

const TableNameTag = ({ name }: { name: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
    <span style={{ fontSize: 25, fontWeight: 700, color: muted }}>表格名稱</span>
    <span
      style={{
        fontSize: 25,
        fontWeight: 800,
        color: taskColor,
        background: `${taskColor}14`,
        border: `1px solid ${taskColor}44`,
        borderRadius: 8,
        padding: '4px 12px',
      }}
    >
      {name}
    </span>
  </div>
);

const LegendRow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 32, marginTop: 20 }}>{children}</div>
);

const LegendDot = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <span style={{ width: 20, height: 20, borderRadius: 5, background: color, flexShrink: 0 }} />
    <span style={{ fontSize: 25 }}>{label}</span>
  </div>
);

// ─── Page transitions (identical "Rise" family to AI Excel 課程) ─────────────
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
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 36, maxWidth: 1560 }}>
      <Eyebrow color={design.palette.accent}>AI Excel 課程 ·排班表</Eyebrow>
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 140,
          fontWeight: 900,
          lineHeight: 1.05,
          margin: 0,
        }}
      >
        排班表模組
      </h1>
      <p style={{ fontSize: 40, color: muted, lineHeight: 1.5, maxWidth: 1400, margin: 0 }}>
        鍋貼店案例：把排班規則變成公式與條件式格式，人力疏漏不用再靠記憶把關
      </p>
      <Steps>
        <Step>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <Tag>案例情境：鍋貼店排班管理</Tag>
            <Tag>5 張工作表架構</Tag>
            <Tag>條件式格式自動防呆</Tag>
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

// ─── Page 2 — 一、為什麼要有排班表模組？ ──────────────────────────────────────
const WhyModule: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>PART 1· 什麼是排班表？為什麼要有「排班表」模組？</Eyebrow>
    <PageHeading>人力沒接上，出餐變慢、還可能挨罰</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
      <Steps>
        <Step>
          <TxCard color={painRed} title="傳統做法的問題">
            <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
              紙本、群組留言、口頭喬班——誰請假、誰被排過班、早班夠不夠人，全靠人工回想或翻訊息記錄
            </div>
          </TxCard>
        </Step>
        <Step>
          <TxCard color={goodGreen} title="Excel 模組的解法">
            <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
              排班規則變成公式與條件式格式——資料一填，衝突與缺人狀況自動標示，不必每次靠記憶把關
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 27, fontWeight: 700, color: muted }}>最容易發生的三種疏漏</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <Steps>
          <Step><RuleChip text="同一人被排兩班" color={painRed} /></Step>
          <Step><RuleChip text="休假當天還被排班" color={painRed} /></Step>
          <Step><RuleChip text="假日尖峰人力不足" color={painRed} /></Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 3 — 二a、排班表要素 ──────────────────────────────────────────────────
const Elements: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>二、排班表要素與限制</Eyebrow>
    <PageHeading>一份堪用的排班表，要能回答 6 件事</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 44 }}>
      <Steps>
        <Step><MiniFeature color={sheetColor.settings} title="班別定義" desc="每個班別的上下班時間、休息時數" /></Step>
        <Step><MiniFeature color={sheetColor.staff} title="員工可上班時段" desc="不是每個人都能排任何時段" /></Step>
        <Step><MiniFeature color={sheetColor.leave} title="休假紀錄" desc="誰在哪天已請假，假別為何" /></Step>
        <Step><MiniFeature color={sheetColor.schedule} title="每日／每班人力下限" desc="假日或尖峰時段不能低於基本配置" /></Step>
        <Step><MiniFeature color={sheetColor.schedule} title="工時計算" desc="實際工時要自動扣掉休息時數" /></Step>
        <Step><MiniFeature color={sheetColor.monthly} title="是否假日判斷" desc="週末、國定假日的人力需求通常不同" /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4 — 二b、排班表限制 ──────────────────────────────────────────────────
const Constraints: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>二、排班表要素與限制</Eyebrow>
    <PageHeading>三種限制，決定排班表要多聰明</PageHeading>
    <div style={{ display: 'flex', gap: 28, marginTop: 44 }}>
      <Steps>
        <Step>
          <ConstraintCard
            color={warnAmber}
            icon="⚖"
            title="法規面"
            a="七休一——七天內至少一天例假"
            b="單日正常工時上限"
            c="超時要能被標示為加班"
          />
        </Step>
        <Step>
          <ConstraintCard
            color={sheetColor.staff}
            icon="🏪"
            title="營運面"
            a="假日、尖峰時段人力需求高於平日"
            b="早班開店需要固定人數到場"
            c="人力配置要對得起業績"
          />
        </Step>
        <Step>
          <ConstraintCard
            color={painRed}
            icon="⚠"
            title="防呆需求"
            a="同一人同一天被重複排班"
            b="被排在已核准的休假日"
            c="早班人數＝0、總人力低於下限"
          />
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 32 }}>
      <Callout color={painRed}>
        這幾種情況都要能<b>自動被標示出來</b>，而不是等主管自己肉眼抓。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5 — 三、為什麼是這五張表？ ───────────────────────────────────────────
const FiveSheets: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>三、為什麼是「這五張表」？</Eyebrow>
    <PageHeading maxWidth={1600}>資料庫設計的概念，搬進 Excel</PageHeading>
    <p style={{ fontSize: 28, color: muted, lineHeight: 1.5, margin: '20px 0 0' }}>
      資料型態不同（設定／名單／事件／明細／呈現），拆成五張表才不會改一處就牽動全部
    </p>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 32 }}>
      <Steps>
        <Step><SheetChip color={sheetColor.settings} label="排班設定" /></Step>
        <FlowArrowSmall />
        <Step><SheetChip color={sheetColor.staff} label="員工主檔" /></Step>
        <FlowArrowSmall />
        <Step><SheetChip color={sheetColor.leave} label="休假申請" /></Step>
        <FlowArrowSmall />
        <Step><SheetChip color={sheetColor.schedule} label="排班表" /></Step>
        <FlowArrowSmall />
        <Step><SheetChip color={sheetColor.monthly} label="月班表" /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 28, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.5fr 2.3fr', background: '#F1EFE4' }}>
        <div style={{ padding: '12px 16px', fontSize: 25, fontWeight: 800, color: muted }}>工作表</div>
        <div style={{ padding: '12px 16px', fontSize: 25, fontWeight: 800, color: muted }}>角色</div>
        <div style={{ padding: '12px 16px', fontSize: 25, fontWeight: 800, color: muted }}>為什麼要獨立成一張</div>
      </div>
      <Steps>
        <Step><RoleRow color={sheetColor.settings} sheet="排班設定" role="下拉選單與班別對照表的事實來源" reason="班別時間改一處，所有公式自動連動" /></Step>
        <Step><RoleRow color={sheetColor.staff} sheet="員工主檔" role="員工基本資料主檔" reason="姓名／時段只維護一次，不會重複輸入打錯字" band /></Step>
        <Step><RoleRow color={sheetColor.leave} sheet="休假申請" role="休假事件的獨立紀錄" reason="休假是事件不是排班，排班表才能反查誤排" /></Step>
        <Step><RoleRow color={sheetColor.schedule} sheet="排班表" role="資料庫層，一列＝一人一天一班" reason="所有計算與防呆條件式格式都在這裡運算" band /></Step>
        <Step><RoleRow color={sheetColor.monthly} sheet="月班表" role="給人看的員工×日期矩陣視圖" reason="不存資料，即時彙總查詢，方便列印" /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 6 — 任務 1：排班設定 ─────────────────────────────────────────────────
const Task1Settings: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.settings}>PART 2· 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.3</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>把會被重複引用的清單，集中管理</PageHeading>
    <TaskLabel num="1" title="建立「排班設定」工作表" promptNum="1" />
    <div style={{ display: 'flex', gap: 24, marginTop: 20 }}>
      <Steps>
        <Step>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
            <MiniTable title="B欄 · 可上班時段" color={sheetColor.settings}>
              <MiniRow a="早班可" />
              <MiniRow a="限午後" />
              <MiniRow a="全時段" />
            </MiniTable>
            <MiniTable title="C欄 · 假別" color={sheetColor.settings}>
              <MiniRow a="特休" />
              <MiniRow a="事假" />
              <MiniRow a="病假" />
              <MiniRow a="例假" />
            </MiniTable>
          </div>
        </Step>
        <Step>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 25, fontWeight: 700, color: muted, marginBottom: 10 }}>E～H欄 · 班別對照表</div>
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '1.4fr 0.9fr 0.9fr 0.9fr',
              }}
            >
              <SheetHeaderCell label="班別" />
              <SheetHeaderCell label="上班時間" />
              <SheetHeaderCell label="下班時間" />
              <SheetHeaderCell label="休息時數" />

              <SheetCell value="早班(10:00-20:00)" />
              <SheetCell value="10:00" />
              <SheetCell value="20:00" />
              <SheetCell value="2 hr" />

              <SheetCell value="早午班(10:30-20:30)" band />
              <SheetCell value="10:30" band />
              <SheetCell value="20:30" band />
              <SheetCell value="2 hr" band />

              <SheetCell value="午晚班(12:00-22:00)" />
              <SheetCell value="12:00" />
              <SheetCell value="22:00" />
              <SheetCell value="2 hr" />

              <SheetCell value="晚班(16:00-22:00)" band />
              <SheetCell value="16:00" band />
              <SheetCell value="22:00" band />
              <SheetCell value="0.5 hr" band />
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 24 }}>
      <Callout color={sheetColor.settings}>
        <b>J欄 · 員工姓名（動態）：</b>J3 ={'  '}
        <span style={{ color: formulaBlue, fontWeight: 700 }}>tbl_員工[姓名]</span>
        {'  '}——從員工主檔動態拉出全部姓名，之後加人不用手動維護清單
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 7 — 任務 2：員工主檔 ─────────────────────────────────────────────────
const Task2Staff: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.staff}>PART 1 · 員工主檔</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.3-4</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>姓名與時段只維護一次，其他表都靠查表引用</PageHeading>
    <TaskLabel num="2" title="建立「員工主檔」工作表（tbl_員工）" promptNum="2" />
    <div style={{ marginTop: 20 }}>
      <Steps>
        <Step>
          <div>
            <TableNameTag name="tbl_員工" />
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '0.8fr 0.9fr 1.1fr 1.3fr 1fr',
              }}
            >
              <SheetHeaderCell label="員工ID" />
              <SheetHeaderCell label="姓名" />
              <SheetHeaderCell label="可上班時段" dropdown />
              <SheetHeaderCell label="備註" />
              <SheetHeaderCell label="本月休假天數" />

              <SheetCell value="E001" />
              <SheetCell value="王小美" />
              <SheetCell value="早班可" />
              <SheetCell value="" />
              <SheetCell value="2" formula />

              <SheetCell value="E002" band />
              <SheetCell value="陳建宏" band />
              <SheetCell value="全時段" band />
              <SheetCell value="" band />
              <SheetCell value="1" formula band />

              <SheetCell value="E003" />
              <SheetCell value="林雅婷" />
              <SheetCell value="限午後" />
              <SheetCell value="僅平日可排" />
              <SheetCell value="3" formula />
            </div>
          </div>
        </Step>
        <Step>
          <LegendRow>
            <LegendDot color={taskColor} label="▼ 下拉選單——可上班時段" />
            <LegendDot color={formulaBlue} label="公式自動計算——本月休假天數" />
          </LegendRow>
        </Step>
        <Step>
          <div style={{ marginTop: 20 }}>
            <Callout color={sheetColor.staff}>
              <span style={{ fontWeight: 700, color: formulaBlue }}>
                =COUNTIFS(休假申請!員工姓名, [@姓名], 休假申請!休假日期, "&gt;=2026/7/1", 休假申請!休假日期, "&lt;=2026/7/31")
              </span>
              {'  '}——逐列比對「休假申請」，算出每人當月休假筆數
            </Callout>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 8 — 任務 3：休假申請 ─────────────────────────────────────────────────
const Task3Leave: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 1 · 休假申請</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.4</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>休假是「事件」，不是排班本身</PageHeading>
    <TaskLabel num="3" title="建立「休假申請」工作表（tbl_休假）" promptNum="3" />
    <div style={{ marginTop: 20 }}>
      <Steps>
        <Step>
          <div>
            <TableNameTag name="tbl_休假" />
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 0.8fr',
              }}
            >
              <SheetHeaderCell label="員工姓名" dropdown />
              <SheetHeaderCell label="休假日期" />
              <SheetHeaderCell label="假別" dropdown />

              <SheetCell value="王小美" />
              <SheetCell value="2026/07/03" />
              <SheetCell value="特休" />

              <SheetCell value="陳建宏" band />
              <SheetCell value="2026/07/10" band />
              <SheetCell value="病假" band />

              <SheetCell value="林雅婷" />
              <SheetCell value="2026/07/15" />
              <SheetCell value="事假" />
            </div>
          </div>
        </Step>
        <Step>
          <LegendRow>
            <LegendDot color={taskColor} label="▼ 下拉選單——員工姓名／假別" />
            <LegendDot color={formulaBlue} label="DATE() 函數——休假日期" />
          </LegendRow>
        </Step>
        <Step>
          <div style={{ marginTop: 24 }}>
            <Callout color={sheetColor.leave}>
              分開記錄後，「排班表」才能反過來判斷——<b>這天是不是誤排到別人已核准的休假</b>。
            </Callout>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 9 — 任務 4：排班表 ───────────────────────────────────────────────────
const Task4Schedule: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.schedule}>PART 1 · 排班表</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.4-5</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>資料庫核心：一列＝一人一天一班</PageHeading>
    <TaskLabel num="4" title="建立「排班表」工作表（tbl_排班）" promptNum="4" />
    <div style={{ marginTop: 20 }}>
      <Steps>
        <Step>
          <div>
            <TableNameTag name="tbl_排班　·　共 10 欄" />
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '0.75fr 0.55fr 0.65fr 0.8fr 1.35fr 0.65fr 0.65fr 0.65fr 0.65fr 0.6fr',
              }}
            >
              <SheetHeaderCell tiny label="排班日期" />
              <SheetHeaderCell tiny label="星期" />
              <SheetHeaderCell tiny label="假日" />
              <SheetHeaderCell tiny label="員工姓名" />
              <SheetHeaderCell tiny label="班別" dropdown />
              <SheetHeaderCell tiny label="上班" />
              <SheetHeaderCell tiny label="下班" />
              <SheetHeaderCell tiny label="休息" />
              <SheetHeaderCell tiny label="工時" />
              <SheetHeaderCell tiny label="備註" />

              <SheetCell tiny value="7/1" />
              <SheetCell tiny value="三" formula />
              <SheetCell tiny value="N" formula />
              <SheetCell tiny value="王小美" />
              <SheetCell tiny value="早班(10:00-20:00)" />
              <SheetCell tiny value="10:00" formula />
              <SheetCell tiny value="20:00" formula />
              <SheetCell tiny value="2" formula />
              <SheetCell tiny value="8" formula />
              <SheetCell tiny value="" />

              <SheetCell tiny value="7/1" band />
              <SheetCell tiny value="三" formula band />
              <SheetCell tiny value="N" formula band />
              <SheetCell tiny value="陳建宏" band />
              <SheetCell tiny value="午晚班(12:00-22:00)" band />
              <SheetCell tiny value="12:00" formula band />
              <SheetCell tiny value="22:00" formula band />
              <SheetCell tiny value="2" formula band />
              <SheetCell tiny value="8" formula band />
              <SheetCell tiny value="" band />

              <SheetCell tiny value="7/4" />
              <SheetCell tiny value="六" formula />
              <SheetCell tiny value="Y" formula />
              <SheetCell tiny value="林雅婷" />
              <SheetCell tiny value="晚班(16:00-22:00)" />
              <SheetCell tiny value="16:00" formula />
              <SheetCell tiny value="22:00" formula />
              <SheetCell tiny value="0.5" formula />
              <SheetCell tiny value="5.5" formula />
              <SheetCell tiny value="" />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 22 }}>
            <FlowChip color={sheetColor.schedule} label='星期 = TEXT(排班日期,"aaaa")' />
            <FlowChip color={sheetColor.schedule} label='是否假日 = IF(WEEKDAY(排班日期,2)>=6,"Y","N")' />
            <FlowChip color={formulaBlue} label="上／下班時間、休息時數 = XLOOKUP(班別…)" />
            <FlowChip color={formulaBlue} label="實際工時 = (下班-上班)*24 - 休息時數" />
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 26, color: muted, marginTop: 18 }}>
            每天約 8 名員工輪班，一整個月（2026 年 7 月，31 天）完整排下去。
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 10 — 任務 5a：月班表結構 ─────────────────────────────────────────────
const Task5Monthly: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 1 · 月班表</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.5-6</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>給人看的月曆總覽——不存資料，即時彙總</PageHeading>
    <TaskLabel num="5" title="建立「月班表」工作表" promptNum="5" />
    <div style={{ marginTop: 24 }}>
      <Steps>
        <Step>
          <div
            style={{
              borderRadius: 14,
              overflow: 'hidden',
              border: `1px solid ${cardBorder}`,
              boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
              display: 'grid',
              gridTemplateColumns: '1fr repeat(5, 0.85fr)',
              width: 1100,
            }}
          >
            <div style={{ background: '#F1EFE4', padding: '8px 14px', fontSize: 22, fontWeight: 800, color: muted, display: 'flex', alignItems: 'center' }}>員工／日期</div>
            <DayHeader date="7/1" dow="三" />
            <DayHeader date="7/2" dow="四" />
            <DayHeader date="7/3" dow="五" />
            <DayHeader date="7/4" dow="六" weekend />
            <DayHeader date="7/5" dow="日" weekend />

            <NameCell name="王小美" />
            <ShiftCell value="10:00-20:00" kind="shift" />
            <ShiftCell value="休" kind="off" />
            <ShiftCell value="10:00-20:00" kind="shift" />
            <ShiftCell value="16:00-22:00" kind="shift" />
            <ShiftCell value="" kind="empty" />

            <NameCell name="陳建宏" band />
            <ShiftCell value="12:00-22:00" kind="shift" band />
            <ShiftCell value="12:00-22:00" kind="shift" band />
            <ShiftCell value="休" kind="off" band />
            <ShiftCell value="10:00-20:00" kind="shift" band />
            <ShiftCell value="12:00-22:00" kind="shift" band />

            <NameCell name="林雅婷" />
            <ShiftCell value="" kind="empty" />
            <ShiftCell value="16:00-22:00" kind="shift" />
            <ShiftCell value="16:00-22:00" kind="shift" />
            <ShiftCell value="10:00-20:00,16:00-22:00" kind="shift" />
            <ShiftCell value="休" kind="off" />
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 20 }}>
            <Callout color={sheetColor.monthly}>
              <b>有排班</b>：FILTER＋TEXTJOIN 列出當天所有班次時段　·　<b>無排班</b>：再查「休假申請」，是則顯示「休」
            </Callout>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 11 — 任務 5b：月班表彙總與條件式格式 ─────────────────────────────────
const Task5Summary: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 1 · 月班表</Eyebrow>
    <PageHeading maxWidth={1600}>底部彙總列 + 條件式格式，異常一眼就看到</PageHeading>
    <div style={{ marginTop: 32 }}>
      <Steps>
        <Step>
          <div
            style={{
              borderRadius: 14,
              overflow: 'hidden',
              border: `1px solid ${cardBorder}`,
              boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
              display: 'grid',
              gridTemplateColumns: '1fr repeat(5, 0.85fr)',
              width: 1100,
            }}
          >
            <div style={{ background: '#F1EFE4', padding: '8px 14px', fontSize: 22, fontWeight: 800, color: muted }}>日期</div>
            <SummaryValueCell value="7/1" />
            <SummaryValueCell value="7/2" />
            <SummaryValueCell value="7/3" />
            <SummaryValueCell value="7/4" />
            <SummaryValueCell value="7/5" />

            <SummaryLabelCell label="當日人數" />
            <SummaryValueCell value="4" />
            <SummaryValueCell value="3" flag="yellow" />
            <SummaryValueCell value="4" />
            <SummaryValueCell value="5" />
            <SummaryValueCell value="2" flag="yellow" />

            <SummaryLabelCell label="早班人數" />
            <SummaryValueCell value="1" />
            <SummaryValueCell value="0" flag="red" />
            <SummaryValueCell value="1" />
            <SummaryValueCell value="1" />
            <SummaryValueCell value="0" flag="red" />
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 20 }}>
            <FlowChip color={sheetColor.monthly} label="當日人數 = SUMPRODUCT(非空白且非「休」)" />
            <FlowChip color={sheetColor.monthly} label='早班人數 = SUMPRODUCT(班次開頭="10:00")' />
          </div>
        </Step>
        <Step>
          <div
            style={{
              marginTop: 28,
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: 16,
              padding: '22px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 800, color: muted }}>圖例</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28 }}>
              <LegendItem swatch={<span style={{ fontSize: 22, fontWeight: 800, color: warnAmber }}>休</span>} label="已排休假" />
              <LegendItem swatch={<span style={{ fontSize: 22, fontWeight: 800, color: formulaBlue }}>,</span>} label="逗號分隔＝同日重複排班" />
              <LegendItem swatch={<Swatch color={painRed} />} label="早班人數＝0" />
              <LegendItem swatch={<Swatch color={warnAmber} />} label="當日人數低於下限（3 人）" />
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 12 — Closing ─────────────────────────────────────────────────────────
// ─── Page 12 — 任務 6：模擬資料設定 ────────────────────────────────────────────
const Task6Setup: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.schedule}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.6</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>拿故意做錯的資料，測試防呆公式亮不亮</PageHeading>
    <p style={{ fontSize: 27, color: muted, lineHeight: 1.5, margin: '20px 0 0', maxWidth: 1560 }}>
      資料填完、公式設定完成後，最好的驗證方式不是憑空想像——請 AI 生成整月模擬資料，故意埋進違規案例
    </p>
    <TaskLabel num="6" title="填入模擬排班資料，內建防呆測試案例" promptNum="6" />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 24 }}>
      <Steps>
        <Step><MiniFeature color={painRed} title="① 早班人數＝0" desc="當天沒人排早班，觸發紅字警示" /></Step>
        <Step><MiniFeature color={painRed} title="② 同一人同天排兩班" desc="重複排班，整列應標紅" /></Step>
        <Step><MiniFeature color={violatePurple} title="③ 排在已登記的休假日" desc="休假衝突，整列應標紫" /></Step>
        <Step><MiniFeature color={warnAmber} title="④ 連續上班超過 6 天" desc="違反七休一，應標黃提醒" /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13 — 任務 6：驗證結果對照表 ──────────────────────────────────────────
const Task6Verify: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.schedule}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.7</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>4 個案例，防呆公式有沒有正確亮燈？</PageHeading>
    <div style={{ marginTop: 36, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr 1.2fr', background: taskColor }}>
        <SheetHeaderCell label="違規類型" />
        <SheetHeaderCell label="日期" />
        <SheetHeaderCell label="員工" />
        <SheetHeaderCell label="預期標示" />
        <SheetHeaderCell label="結果" />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr 1.2fr' }}>
            <SheetCell value="早班人數＝0" />
            <SheetCell value="7/9" />
            <SheetCell value="—" />
            <SheetCell value="紅字" highlight="red" />
            <SheetCell value="✓ 正確標示" formula />
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr 1.2fr' }}>
            <SheetCell value="同日重複排班" band />
            <SheetCell value="7/14" band />
            <SheetCell value="陳建宏" band />
            <SheetCell value="整列標紅" highlight="red" band />
            <SheetCell value="✓ 正確標示" formula band />
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr 1.2fr' }}>
            <SheetCell value="休假衝突" />
            <SheetCell value="7/22" />
            <SheetCell value="林雅婷" />
            <SheetCell value="整列標紫" highlight="purple" />
            <SheetCell value="✓ 正確標示" formula />
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr 1.2fr' }}>
            <SheetCell value="連續上班超過 6 天" band />
            <SheetCell value="7/18–7/24" band />
            <SheetCell value="王小美" band />
            <SheetCell value="標黃提醒" highlight="yellow" band />
            <SheetCell value="✓ 正確標示" formula band />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 14 — 任務 6：做法與學習重點 ──────────────────────────────────────────
const Task6Lesson: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.schedule}>PART 2 · 排班表實作</Eyebrow>
    <PageHeading maxWidth={1600}>驗證，不是靠想像，是靠故意做錯</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 700, color: muted, marginTop: 36 }}>Claude 做了什麼</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16 }}>
      <Steps>
        <Step><RuleChip text="依人力下限，把整月正常班次填滿" /></Step>
        <Step><RuleChip text="刻意安插 4 種違規案例，標註日期與員工" /></Step>
        <Step><RuleChip text="逐一比對條件式格式，確認每個案例正確標示" /></Step>
        <Step><RuleChip text="如實回報「該亮沒亮」或「不該亮卻亮」，不宣稱全對" /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 32 }}>
      <Callout color={sheetColor.schedule}>
        <b>學習重點：</b>驗證防呆公式最快的方法，是請 AI 故意造出違規資料，再核對顏色標示——不要等真實資料出錯才發現公式有漏洞。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 15 — 二、排班規則整理 ────────────────────────────────────────────────
const RulesSummary: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>二、把排班邏輯包裝成可重複呼叫的技能</Eyebrow>
    <PageHeading maxWidth={1600}>把口頭討論的規則，整理成一份清單</PageHeading>
    <p style={{ fontSize: 27, color: muted, lineHeight: 1.5, margin: '20px 0 0' }}>
      這份清單，就是之後建立 SKILL 時要交給 AI 的「硬性規則」
    </p>
    <div style={{ display: 'flex', gap: 28, marginTop: 32 }}>
      <Steps>
        <Step>
          <ConstraintCard
            color={warnAmber}
            icon="⚖"
            title="法規面"
            a="每日正常工時 ≤8 小時，超過算加班"
            b="每週 ≤40 小時，每月加班 ≤46 小時"
            c="七休一：連續工作日 ≤6 天"
          />
        </Step>
        <Step>
          <ConstraintCard
            color={sheetColor.schedule}
            icon="📋"
            title="排班面"
            a="不可排在已登記的休假日"
            b="每人每天只排一班，不可重複"
            c="只能排進可上班時段允許的班別"
          />
        </Step>
        <Step>
          <ConstraintCard
            color={sheetColor.staff}
            icon="🏪"
            title="營運面"
            a="每天至少 1 個早班"
            b="平日 ≥3 人、假日 ≥4-5 人"
            c="公平輪替：優先排工時較少的人"
          />
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 16 — 任務 7：/auto-schedule 技能 ─────────────────────────────────────
const Task7Skill: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>二、把排班邏輯包裝成可重複呼叫的技能</Eyebrow>
    <PageHeading maxWidth={1600}>打一個指令，套用同一套排班邏輯</PageHeading>
    <TaskLabel num="7" title="把排班規則包裝成 /auto-schedule 技能" promptNum="7" />
    <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
      <Steps>
        <Step>
          <TxCard color={painRed} title="沒有技能">
            <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
              每次都要重講一次規則——容易漏講、講法不一致，AI 理解也可能跑掉
            </div>
          </TxCard>
        </Step>
        <Step>
          <TxCard color={goodGreen} title="/auto-schedule">
            <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
              打一個指令，就照同一套規則把「排班表」排好——邏輯只需要確認一次
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 32 }}>
      <Callout color={design.palette.accent}>
        <b>學習重點：</b>技能卡本身也會先列出規則清單再送審，套用前可以先確認規則是否正確。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

const Closing: Page = () => (
  <div style={{ ...page, justifyContent: 'center' }}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 1560 }}>
      <Eyebrow color={design.palette.accent}>小結</Eyebrow>
      <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 96, fontWeight: 900, lineHeight: 1.1, margin: 0 }}>
        五張表，一套完整排班系統
      </h1>
      <p style={{ fontSize: 34, color: muted, lineHeight: 1.5, maxWidth: 1400, margin: 0 }}>
        設定集中管理、主檔只維護一次、事件與明細分層、呈現即時彙總——公式與條件式格式，取代人工肉眼把關；
        再用故意做錯的資料驗證，最後包裝成 /auto-schedule，一個指令重複套用
      </p>
      <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
        <SheetChip color={sheetColor.settings} label="排班設定" />
        <SheetChip color={sheetColor.staff} label="員工主檔" />
        <SheetChip color={sheetColor.leave} label="休假申請" />
        <SheetChip color={sheetColor.schedule} label="排班表" />
        <SheetChip color={sheetColor.monthly} label="月班表" />
      </div>
    </div>
    <PageFooter />
  </div>
);

export const meta: SlideMeta = {
  title: '排班表模組 · 鍋貼店案例',
  createdAt: '2026-07-11T08:49:29.252Z',
};

export default [
  Cover,
  WhyModule,
  Elements,
  Constraints,
  FiveSheets,
  Task1Settings,
  Task2Staff,
  Task3Leave,
  Task4Schedule,
  Task5Monthly,
  Task5Summary,
  Task6Setup,
  Task6Verify,
  Task6Lesson,
  RulesSummary,
  Task7Skill,
  Closing,
] satisfies Page[];
