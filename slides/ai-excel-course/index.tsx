import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps, useSlidePageNumber } from '@open-slide/core';
import quizQrCode from './assets/quiz-qrcode.png';
import gasBasics01 from './assets/gas-basics/img_001.png';
import gasBasics02 from './assets/gas-basics/img_002_top.png';
import gasBasics03 from './assets/gas-basics/img_003.png';
import gasBasics04 from './assets/gas-basics/img_004.png';
import gasBasics05 from './assets/gas-basics/img_005.png';
import gasBasics06 from './assets/gas-basics/img_006.png';
import gasBasics07 from './assets/gas-basics/img_007.png';
import gasBasics08 from './assets/gas-basics/img_008.png';
import gasBasics09 from './assets/gas-basics/img_009.png';
import gasBasics10 from './assets/gas-basics/img_010.png';
import gasBasics11 from './assets/gas-basics/img_011.png';
import gasBasics12 from './assets/gas-basics/img_012_top.png';
import gasBasics13 from './assets/gas-basics/img_013.png';
import gasBasics14 from './assets/gas-basics/img_014.png';
import gasBasics15 from './assets/gas-basics/img_015.png';
import gasBasics16 from './assets/gas-basics/img_016.png';
import gasBasics17 from './assets/gas-basics/img_017.png';
import gasBasics18 from './assets/gas-basics/img_018.png';
import gasBasics19 from './assets/gas-basics/img_019.png';
import gasBasics20 from './assets/gas-basics/img_020.png';
import gasBasics21 from './assets/gas-basics/img_021.png';
import gasBasics22 from './assets/gas-basics/img_022.png';
import pptx_s1_5 from './assets/pptx/s1_5.png';
import pptx_s1_7 from './assets/pptx/s1_7.png';
import pptx_s1_9 from './assets/pptx/s1_9.png';
import pptx_s2_5 from './assets/pptx/s2_5.png';
import pptx_s3_5 from './assets/pptx/s3_5.png';
import pptx_s3_7 from './assets/pptx/s3_7.png';
import pptx_s4_5 from './assets/pptx/s4_5.jpg';
import pptx_s4_4 from './assets/pptx/s4_4.png';
import pptx_s4_21 from './assets/pptx/s4_21.png';
import pptx_s5_4 from './assets/pptx/s5_4.png';
import pptx_s5_21 from './assets/pptx/s5_21.png';
import pptx_s5_22 from './assets/pptx/s5_22.png';
import pptx_s6_7 from './assets/pptx/s6_7.png';
import pptx_s7_5 from './assets/pptx/s7_5.png';
import pptx_s8_5 from './assets/pptx/s8_5.png';
import pptx_s9_7 from './assets/pptx/s9_7.png';
import pptx_s10_3 from './assets/pptx/s10_3.png';
import pptx_s11_3 from './assets/pptx/s11_3.png';
import pptx_s11_5 from './assets/pptx/s11_5.png';
import pptx_s11_7 from './assets/pptx/s11_7.png';
import pptx_s12_3 from './assets/pptx/s12_3.png';
import pptx_s13_3 from './assets/pptx/s13_3.png';
import pptx_s14_3 from './assets/pptx/s14_3.png';
import pptx_s15_7 from './assets/pptx/s15_7.png';
import pptx_s16_5 from './assets/pptx/s16_5.png';
import pptx_s17_5 from './assets/pptx/s17_5.png';
import pptx_s18_5 from './assets/pptx/s18_5.png';
import pptx_s19_5 from './assets/pptx/s19_5.png';
import pptx_s20_5 from './assets/pptx/s20_5.png';
import pptx_s21_5 from './assets/pptx/s21_5.png';
import pptx_s22_5 from './assets/pptx/s22_5.png';
import strayCatsVsChippedPets from './assets/stray-cats-vs-chipped-pets.png';
import bomSampleDataRules from './assets/bom-sample-data-rules.png';
import threeMasterTablesMapping from './assets/three-master-tables-mapping.png';
import dynamicDropdownBeforeAfter from './assets/dynamic-dropdown-before-after.png';
import rangeNewRowProblems from './assets/range-new-row-problems.png';
import convertRangeToTable from './assets/convert-range-to-table.png';
import tableToolsGuide from './assets/table-tools-guide.png';
import supplierMasterLink from './assets/supplier-master-link.png';
import smartSupplierDropdown from './assets/smart-supplier-dropdown.png';
import salesRecordFlow from './assets/sales-record-flow.png';
import purchaseRecordFlow from './assets/purchase-record-flow.png';
import salesSampleDataGuide from './assets/sales-sample-data-guide.png';
import purchaseSampleDataGuide from './assets/purchase-sample-data-guide.png';
import productCostGuide from './assets/product-cost-guide.png';
import inventoryManagementGuide from './assets/inventory-management-guide.png';
import revenueMarginGuide from './assets/revenue-margin-guide.png';
import productCostTableGuide from './assets/product-cost-table-guide.png';
import inventoryTableGuide from './assets/inventory-table-guide.png';
import revenueMarginTableGuide from './assets/revenue-margin-table-guide.png';
import monthlyRollupVisual from './assets/monthly-rollup-visual.png';
import backendDataMapVisual from './assets/backend-data-map-visual.png';
import writebackFlowVisual from './assets/writeback-flow-visual.png';
import adventure01 from './assets/adventure-01-format-slime.png';
import adventure02 from './assets/adventure-02-fog-goblin.png';
import adventure03 from './assets/adventure-03-arithmetic-gargoyle.png';
import adventure04 from './assets/adventure-04-copy-skeleton.png';
import adventure05 from './assets/adventure-05-judgement-griffin.png';
import adventure06 from './assets/adventure-06-stat-troll.png';
import adventure07 from './assets/adventure-07-mimic.png';
import adventure08 from './assets/adventure-08-stock-slime.png';
import adventure09 from './assets/adventure-09-pivot-dragon.png';
import adventure10 from './assets/adventure-10-data-boss.png';
import qs01a from './assets/adventure-solutions/step-01_pic1.png';
import qs01b from './assets/adventure-solutions/step-01_pic2.png';
import qs02 from './assets/adventure-solutions/step-02_pic1.png';
import qs03 from './assets/adventure-solutions/step-03_pic1.png';
import qs04 from './assets/adventure-solutions/step-04_pic1.png';
import qs05a from './assets/adventure-solutions/step-05_pic1.png';
import qs05b from './assets/adventure-solutions/step-05_pic2.png';
import qs06 from './assets/adventure-solutions/step-06_pic1.png';
import qs07 from './assets/adventure-solutions/step-07_pic1.png';
import qs08 from './assets/adventure-solutions/step-08_pic1.png';
import qs09 from './assets/adventure-solutions/step-09_pic1.png';
import qs10 from './assets/adventure-solutions/step-10_pic1.png';
import qs11 from './assets/adventure-solutions/step-11_pic1.png';
import qs12 from './assets/adventure-solutions/step-12_pic1.png';
import qs13 from './assets/adventure-solutions/step-13_pic1.png';
import qs14 from './assets/adventure-solutions/step-14_pic1.png';
import qs15 from './assets/adventure-solutions/step-15_pic1.png';
import qs16 from './assets/adventure-solutions/step-16_pic1.png';
import qs17 from './assets/adventure-solutions/step-17_pic1.png';
import qs18 from './assets/adventure-solutions/step-18_pic1.png';
import qs19 from './assets/adventure-solutions/step-19_pic1.png';
import qs20 from './assets/adventure-solutions/step-20_pic1.png';
import qs21 from './assets/adventure-solutions/step-21_pic1.png';
import qs22 from './assets/adventure-solutions/step-22_pic1.png';
import qs23 from './assets/adventure-solutions/step-23_pic1.png';
import qs24 from './assets/adventure-solutions/step-24_pic1.png';
import qs25 from './assets/adventure-solutions/step-25_pic1.png';
import qs26 from './assets/adventure-solutions/step-26_pic1.png';
import qs27 from './assets/adventure-solutions/step-27_pic1.png';
import qs28 from './assets/adventure-solutions/step-28_pic1.png';
import qs29 from './assets/adventure-solutions/step-29_pic1.png';
import qs30 from './assets/adventure-solutions/step-30_pic1.png';
import qs31 from './assets/adventure-solutions/step-31_pic1.png';
import qs32 from './assets/adventure-solutions/step-32_pic1.png';
import qs33 from './assets/adventure-solutions/step-33_pic1.png';

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
      <div style={{ position: 'absolute', bottom: 48, left: PAD, fontSize: 32, color: muted, letterSpacing: '0.05em' }}>{''}</div>
      <div style={{ position: 'absolute', top: 48, right: PAD, fontSize: 32, color: muted, letterSpacing: '0.05em' }}>AI excel 課程 · 營業用表格</div>
      <div style={{ position: 'absolute', bottom: 48, right: PAD, fontSize: 32, color: muted, letterSpacing: '0.05em' }}>
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
      fontSize: 33,
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
    <div style={{ fontSize: 34, color: muted, marginTop: -8 }}>{subtitle}</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>{children}</div>
  </div>
);

const StepCard = ({
  num,
  color,
  title,
  desc,
}: {
  num: string;
  color: string;
  title: string;
  desc: React.ReactNode;
}) => (
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
        fontSize: 34,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {num}
    </div>
    <div style={{ fontSize: 34, fontWeight: 800 }}>{title}</div>
    <div style={{ fontSize: 33, color: muted, lineHeight: 1.4 }}>{desc}</div>
  </div>
);

const RuleLine = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 12, fontSize: 30, lineHeight: 1.4 }}>
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
    <div style={{ fontSize: 33, fontWeight: 800 }}>{label}</div>
    <div style={{ fontSize: 25, color: muted, lineHeight: 1.35 }}>{hint}</div>
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
      <span style={{ fontSize: 33, fontWeight: 800 }}>{title}</span>
    </div>
    <div style={{ fontSize: 32, color: muted, lineHeight: 1.4 }}>{desc}</div>
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
        fontSize: 34,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {num}
    </div>
    <div style={{ fontSize: 34, fontWeight: 800 }}>{label}</div>
    <div style={{ fontSize: 25, color: muted, lineHeight: 1.3 }}>{sub}</div>
  </div>
);

const RoadmapArrow = () => <div style={{ alignSelf: 'flex-start', marginTop: 14, fontSize: 31, color: muted }}>→</div>;

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
    <div style={{ fontSize: 33, fontWeight: 800, color: taskColor }}>{`任務 ${num}：${title}`}</div>
    <div style={{ fontSize: 34, color: muted, lineHeight: 1.5 }}>{desc}</div>
  </div>
);

const painRed = '#C0503A';

const ProgressTaskCard = ({
  num,
  promptNum,
  title,
  note,
  noteKind,
  prompt,
}: {
  num: string;
  promptNum: string;
  title: string;
  note: string;
  noteKind: 'pain' | 'goal';
  prompt: string;
}) => {
  const noteColor = noteKind === 'pain' ? painRed : partColor.p1;
  return (
    <div
      style={{
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        borderRadius: 18,
        padding: '26px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
      }}
    >
      <div>
        <div style={{ fontSize: 25, fontWeight: 800, color: taskColor, letterSpacing: '0.05em' }}>{`任務 ${num}`}</div>
        <div style={{ fontSize: 33, fontWeight: 800, marginTop: 2 }}>{title}</div>
      </div>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          alignSelf: 'flex-start',
          fontSize: 25,
          fontWeight: 700,
          color: noteColor,
          background: `${noteColor}14`,
          borderRadius: 999,
          padding: '5px 14px',
        }}
      >
        <span>{noteKind === 'pain' ? '⚠' : '✨'}</span>
        {note}
      </div>
      <div
        style={{
          background: `${taskColor}0D`,
          border: `1px solid ${cardBorder}`,
          borderLeft: `3px solid ${taskColor}`,
          borderRadius: 10,
          padding: '14px 16px',
        }}
      >
        <div style={{ fontSize: 25, fontWeight: 800, color: taskColor, letterSpacing: '0.08em', marginBottom: 6 }}>
          {`PROMPT ${promptNum}`}
        </div>
        <div style={{ fontSize: 25, lineHeight: 1.5 }}>{prompt}</div>
      </div>
    </div>
  );
};

const RuleChip = ({ text }: { text: string }) => (
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
        background: taskColor,
        color: '#fff',
        fontSize: 25,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      ✓
    </div>
    <div style={{ fontSize: 32, lineHeight: 1.4 }}>{text}</div>
  </div>
);

const PromptTechniqueCard = ({
  num,
  title,
  quote,
  desc,
  couple,
}: {
  num: string;
  title: string;
  quote: string;
  desc: string;
  couple?: string;
}) => (
  <div
    style={{
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 16,
      padding: '16px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: partColor.p1,
          color: '#fff',
          fontSize: 25,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {num}
      </div>
      <div style={{ fontSize: 30, fontWeight: 800 }}>{title}</div>
    </div>
    <div style={{ fontSize: 25, color: partColor.p1, fontStyle: 'italic', lineHeight: 1.35 }}>{quote}</div>
    <div style={{ fontSize: 25, color: muted, lineHeight: 1.35 }}>{desc}</div>
    {couple && (
      <div
        style={{
          background: '#FDEEF2',
          border: '1px solid #F3C6D3',
          borderRadius: 10,
          padding: '7px 12px',
          fontSize: 22,
          color: '#B84768',
          lineHeight: 1.35,
          marginTop: 2,
        }}
      >
        {couple}
      </div>
    )}
  </div>
);

const Badge = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 31 }}>
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
      fontSize: 31,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 32, lineHeight: 1.4 }}>
      <div style={{ display: 'flex', gap: 14 }}><span style={{ color }}>●</span><span>{a}</span></div>
      <div style={{ display: 'flex', gap: 14 }}><span style={{ color }}>●</span><span>{b}</span></div>
      <div style={{ display: 'flex', gap: 14 }}><span style={{ color }}>●</span><span>{c}</span></div>
      <div style={{ display: 'flex', gap: 14 }}><span style={{ color }}>●</span><span>{d}</span></div>
    </div>
  </div>
);

// ─── Claude 介面導覽 building blocks (distinct accent, not tied to var(--osd-accent)) ─
const claudeAccent = '#C15F3C';
const chromeBg = '#EFEBE3';

const PinBadge = ({ n }: { n: number }) => (
  <div
    style={{
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: claudeAccent,
      color: '#fff',
      fontSize: 25,
      fontWeight: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: '0 2px 6px rgba(193,95,60,0.35)',
    }}
  >
    {n}
  </div>
);

const MockChrome = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div
    style={{
      borderRadius: 16,
      border: `1px solid ${cardBorder}`,
      background: cardBg,
      boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 20px',
        background: chromeBg,
        borderBottom: `1px solid ${cardBorder}`,
      }}
    >
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E0998A' }} />
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E5C08A' }} />
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#9FBF9A' }} />
      <span style={{ fontSize: 25, color: muted, marginLeft: 10 }}>{label}</span>
    </div>
    <div style={{ padding: '26px 28px' }}>{children}</div>
  </div>
);

const RefRow = ({ n, name, mid, right }: { n: number; name: string; mid: string; right: string }) => (
  <div
    style={{
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 12,
      padding: '10px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <PinBadge n={n} />
      <span style={{ fontSize: 25, fontWeight: 800 }}>{name}</span>
    </div>
    <div style={{ fontSize: 25, color: 'var(--osd-text)', lineHeight: 1.35 }}>{mid}</div>
    <div style={{ fontSize: 25, color: muted, lineHeight: 1.35 }}>適合：{right}</div>
  </div>
);

const RefMiniTable = ({ title, rows }: { title: string; rows: { label: string; desc: string }[] }) => (
  <div style={{ flex: 1, borderRadius: 14, border: `1px solid ${cardBorder}`, overflow: 'hidden', background: cardBg }}>
    <div style={{ background: chromeBg, padding: '10px 18px', fontSize: 25, fontWeight: 800 }}>{title}</div>
    {rows.map((r, i) => (
      <div
        key={r.label}
        style={{
          padding: '13px 18px',
          borderTop: `1px solid ${cardBorder}`,
          background: i % 2 === 1 ? '#FBFAF8' : '#fff',
        }}
      >
        <div style={{ fontSize: 25, fontWeight: 700 }}>{r.label}</div>
        <div style={{ fontSize: 25, color: muted, marginTop: 3, lineHeight: 1.35 }}>{r.desc}</div>
      </div>
    ))}
  </div>
);

const FeatureBlock = ({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children?: React.ReactNode;
}) => (
  <div
    style={{
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 14,
      padding: '14px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    }}
  >
    <div style={{ fontSize: 31, fontWeight: 800 }}>{title}</div>
    <div style={{ fontSize: 25, color: muted, lineHeight: 1.35 }}>{desc}</div>
    {children && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 3 }}>{children}</div>}
  </div>
);

const FlowStep = ({
  n,
  title,
  desc,
  prompt,
  promptLabel,
}: {
  n: number;
  title: string;
  desc: string;
  prompt?: string;
  promptLabel?: string;
}) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
    <PinBadge n={n} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontSize: 31, fontWeight: 800 }}>{title}</div>
      <div style={{ fontSize: 25, color: muted, lineHeight: 1.4 }}>{desc}</div>
      {prompt && (
        <div
          style={{
            background: `${claudeAccent}0D`,
            border: `1px solid ${claudeAccent}33`,
            borderLeft: `3px solid ${claudeAccent}`,
            borderRadius: 8,
            padding: '10px 14px',
            marginTop: 4,
          }}
        >
          <div style={{ fontSize: 25, fontWeight: 800, color: claudeAccent, letterSpacing: '0.06em', marginBottom: 4 }}>
            {promptLabel ?? 'PROMPT'}
          </div>
          <div style={{ fontSize: 25, lineHeight: 1.45 }}>{prompt}</div>
        </div>
      )}
    </div>
  </div>
);

const AddinIcon = ({ bg, glyph, label }: { bg: string; glyph: string; label: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 14,
        background: bg,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 31,
        fontWeight: 800,
        boxShadow: '0 3px 10px rgba(0,0,0,0.18)',
      }}
    >
      {glyph}
    </div>
    <span style={{ fontSize: 25, fontWeight: 700, textAlign: 'center' }}>{label}</span>
  </div>
);

const AddinLink = ({ label, url }: { label: string; url: string }) => (
  <div
    style={{
      flex: 1,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 10,
      padding: '10px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
    }}
  >
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: 25, fontWeight: 700, color: claudeAccent, textDecoration: 'underline' }}
    >
      {label} ↗
    </a>
    <span style={{ fontSize: 25, color: muted, wordBreak: 'break-all', lineHeight: 1.3 }}>{url}</span>
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
    <div style={{ position: 'absolute', top: 48, right: PAD, fontSize: 32, color: muted, letterSpacing: '0.05em' }}>AI excel 課程 · 營業用表格</div>
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
          <Step><RoadmapChip num="5" color={partColor.p6} label="桌面自動化" sub="VBA 一鍵按鈕" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="6" color={partColor.p7} label="跨檔案彙總" sub="月報自動產出" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="7" color={partColor.p5} label="雲端部署" sub="GAS + 網頁" /></Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared: 老闆視角連接流程圖 ────────────────────────────────────────────────
const StackedCardsIcon = ({ color }: { color: string }) => (
  <svg width="58" height="52" viewBox="0 0 58 52">
    <rect x="2" y="20" width="38" height="27" rx="4" fill={`${color}18`} stroke={color} strokeWidth="1.5" />
    <rect x="10" y="12" width="38" height="27" rx="4" fill={`${color}30`} stroke={color} strokeWidth="1.5" />
    <rect x="18" y="4" width="38" height="27" rx="4" fill={color} />
    <line x1="24" y1="12" x2="50" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
    <line x1="24" y1="19" x2="42" y2="19" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const FunnelIcon = ({ color }: { color: string }) => (
  <svg width="58" height="52" viewBox="0 0 58 52">
    <circle cx="10" cy="8" r="5" fill={color} opacity="0.45" />
    <circle cx="29" cy="5" r="5" fill={color} opacity="0.7" />
    <circle cx="48" cy="8" r="5" fill={color} opacity="0.45" />
    <line x1="11" y1="13" x2="26" y2="34" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <line x1="29" y1="10" x2="29" y2="34" stroke={color} strokeWidth="1.5" opacity="0.7" />
    <line x1="47" y1="13" x2="32" y2="34" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <circle cx="29" cy="42" r="9" fill={color} />
    <path d="M25,42 l3,3.5 l6,-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ReceiptIcon = ({ color }: { color: string }) => (
  <svg width="48" height="52" viewBox="0 0 48 52">
    <path
      d="M5,2 H43 V44 L37,49 L31,44 L25,49 L19,44 L13,49 L7,44 L5,49 Z"
      fill={`${color}14`}
      stroke={color}
      strokeWidth="1.5"
    />
    <line x1="11" y1="13" x2="37" y2="13" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="11" y1="21" x2="37" y2="21" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <line x1="11" y1="29" x2="27" y2="29" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const FlowStageGroup = ({
  color,
  icon,
  title,
  items,
  pain,
}: {
  color: string;
  icon: React.ReactNode;
  title: string;
  items: string[];
  pain: string;
}) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
    <div style={{ display: 'flex', justifyContent: 'center', transform: 'scale(1.35)', marginBottom: 10 }}>{icon}</div>
    <div style={{ fontSize: 25, fontWeight: 800, color, textAlign: 'center', lineHeight: 1.3 }}>{title}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((it) => (
        <div
          key={it}
          style={{
            background: `${color}12`,
            border: `1px solid ${color}44`,
            borderRadius: 10,
            padding: '10px 14px',
            fontSize: 25,
            fontWeight: 700,
            color: 'var(--osd-text)',
            textAlign: 'center',
          }}
        >
          {it}
        </div>
      ))}
    </div>
    <div style={{ fontSize: 25, color: muted, lineHeight: 1.45, textAlign: 'center', marginTop: 4 }}>{pain}</div>
  </div>
);

// ─── Shared: 開餐廳賺錢算式 ────────────────────────────────────────────────────
const EquationCard = ({ color, icon, label, sub }: { color: string; icon: string; label: string; sub: string }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      background: `${color}0F`,
      border: `2px solid ${color}`,
      borderRadius: 24,
      padding: '18px 30px',
      minWidth: 220,
    }}
  >
    <span style={{ fontSize: 42 }}>{icon}</span>
    <span style={{ fontSize: 32, fontWeight: 900, color }}>{label}</span>
    <span style={{ fontSize: 25, color: muted, textAlign: 'center' }}>{sub}</span>
  </div>
);

const EquationSign = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontSize: 60, fontWeight: 900, color: muted }}>{children}</span>
);

const BuildBlockCard = ({ color, icon, title, desc }: { color: string; icon: string; title: string; desc: string }) => (
  <div
    style={{
      flex: 1,
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderTop: `5px solid ${color}`,
      borderRadius: 18,
      padding: '12px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      textAlign: 'center',
    }}
  >
    <span style={{ fontSize: 30 }}>{icon}</span>
    <span style={{ fontSize: 28, fontWeight: 800, color }}>{title}</span>
    <span style={{ fontSize: 25, color: muted, lineHeight: 1.4 }}>{desc}</span>
  </div>
);

// ─── Page 3a — 開餐廳，最重要的就是賺錢 ────────────────────────────────────────
const OwnerMoneyBasics: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>老闆視角</Eyebrow>
    <PageHeading maxWidth={1700}>開餐廳，最重要的事只有一個：賺錢！</PageHeading>
    <p style={{ fontSize: 28, color: muted, margin: '10px 0 0' }}>要賺錢，你要先搞懂這條算式：</p>
    <div style={{ marginTop: 14 }}>
      <Steps>
        <Step>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <EquationCard color="#1B84A8" icon="💰" label="收入" sub="賣多少錢" />
            <EquationSign>－</EquationSign>
            <EquationCard color={painRed} icon="🧾" label="成本" sub="花多少錢做出來" />
            <EquationSign>＝</EquationSign>
            <EquationCard color={design.palette.accent} icon="🎉" label="利潤" sub="真正賺到的錢" />
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 14 }}>
            <Callout color={design.palette.accent}>
              舉例：一份鍋貼賣 <b>$60</b>，做一份要花 <b>$30</b> 的食材成本，賣一份就賺 <b>$30</b>。賣越多、成本抓得越準，賺越多。
            </Callout>
          </div>
        </Step>
        <Step>
          <p style={{ fontSize: 24, fontWeight: 800, marginTop: 14, marginBottom: 8 }}>所以想開餐廳賺錢，你要先準備好三件事：</p>
          <div style={{ display: 'flex', gap: 20 }}>
            <BuildBlockCard color={partColor.p1} icon="🥟" title="商品" desc="你要賣什麼？（鍋貼、牛肉麵、飲料…）" />
            <BuildBlockCard color={partColor.p2} icon="🏷️" title="定價" desc="一份要賣多少錢？" />
            <BuildBlockCard color={painRed} icon="🧾" title="成本" desc="做一份要花多少錢？（食材、人力…）" />
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 12 }}>
            <Callout color={muted}>
              想知道自己「到底賺不賺錢」，就要把商品、定價、成本通通「寫清楚」——這正是下一頁那些表格要做的事。
            </Callout>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 3b — 老闆視角：這本活頁簿怎麼串起來 ──────────────────────────────────
const OwnerFlowDiagram: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>老闆視角</Eyebrow>
    <PageHeading maxWidth={1700}>一次輸入，處處連動：這本活頁簿怎麼幫你自動算數字</PageHeading>
    <p style={{ fontSize: 25, lineHeight: 1.6, maxWidth: 1600, margin: '18px 0 0', color: muted }}>
      這不是一堆 Excel 工作表，而是把「開店做生意」拆解成幾張環環相扣的表格——你只要老實記錄「今天賣了什麼、進了什麼貨」，成本、庫存、毛利、儀表板全部自動算出來。
    </p>
    <div style={{ marginTop: 34 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Steps>
          <Step>
            <FlowStageGroup
              color={partColor.p1}
              icon={<StackedCardsIcon color={partColor.p1} />}
              title="三張主檔（家底）"
              items={['商品主檔', '原物料主檔', '供應商主檔']}
              pain="沒有它：老闆只能「肉眼看冰箱」決定要不要叫貨"
            />
          </Step>
          <FlowArrow />
          <Step>
            <FlowStageGroup
              color={partColor.p1}
              icon={<FunnelIcon color={partColor.p1} />}
              title="商品配方 BOM（換算成本）"
              items={['商品配方 BOM']}
              pain="沒有它：賣了 100 碗，也不知道到底賺不賺"
            />
          </Step>
          <FlowArrow />
          <Step>
            <FlowStageGroup
              color={partColor.p2}
              icon={<ReceiptIcon color={partColor.p2} />}
              title="兩張交易紀錄（每天發生的事）"
              items={['銷售紀錄', '進貨紀錄']}
              pain="事實紀錄——之後所有分析，都從這裡長出來"
            />
          </Step>
          <FlowArrow />
          <Step>
            <FlowStageGroup
              color={partColor.p3}
              icon={<MiniBarLineIcon color={partColor.p3} />}
              title="分析報表（算出真相）"
              items={['商品成本', '庫存管理', '營收毛利']}
              pain="把原始資料，變成老闆看得懂的決策依據"
            />
          </Step>
          <FlowArrow />
          <Step>
            <FlowStageGroup
              color={partColor.p4}
              icon={<MiniKpiIcon color={partColor.p4} />}
              title="儀表板（一眼看懂）"
              items={['儀表板']}
              pain="每天花 1 分鐘，不用再一張張表翻"
            />
          </Step>
        </Steps>
      </div>
      <Steps>
        <Step>
          <div style={{ marginTop: 28 }}>
            <Callout color={design.palette.accent}>
              「一次輸入，處處連動」——不用每天拿計算機重算，也不會因為漏算某個環節，誤判自己賺錢還是虧錢。
            </Callout>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4 — Part 1a：三張主檔 ────────────────────────────────────────────────
const Part1Tables: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p1}>PART 1 · 資料庫基礎</Eyebrow>
    <PageHeading>一、先蓋好三張主檔，資料才穩得住</PageHeading>
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
            為什麼要編號？名稱可能同名、可能改名——ID 才分得清楚是哪一家。<b>編號是給系統跟公式認的，名稱是給人看的。</b>
            往後做採購單、庫存異動、進貨紀錄、成本分析，ID 都會是最穩定的關聯欄位。
          </Callout>
        </Step>
        <Step>
          <Callout color={taskColor}>
            <div style={{ fontWeight: 800 }}>任務 1：請 AI 產出三張主檔</div>
            <div style={{ fontSize: 32, color: muted, marginTop: 6 }}>請同學打開操作手冊.doc 第 3 頁</div>
          </Callout>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4a — Prompt 技巧拆解 ─────────────────────────────────────────────────
const Part1PromptTechniques: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p1}>PART 1 · Prompt 技巧</Eyebrow>
    <PageHeading>同一份 Prompt，藏了 6 個「不會誤解」的技巧</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 24 }}>
      <Steps>
        <Step>
          <PromptTechniqueCard
            num="1"
            title="先指定角色與任務"
            quote="「你是一位鍋貼店老闆，要產出 .xlsx」"
            desc="情境明確，輸出格式也不會變成 CSV 或文字表"
            couple="💑 女友說「明天是情人節耶～」男友只回「喔對啊」——沒說清楚要幹嘛，對方只能瞎猜。"
          />
        </Step>
        <Step>
          <PromptTechniqueCard
            num="2"
            title="明確指定工作表數量與名稱"
            quote="「四個頁籤：商品主檔、原物料主檔、供應商主檔、設定選單」"
            desc="避免 AI 自己亂新增或漏掉工作表"
            couple="💑「幫我訂位」——訂幾人？哪一家？沒講清楚，對方只好自己亂猜。"
          />
        </Step>
        <Step>
          <PromptTechniqueCard
            num="3"
            title="括號不是欄位名稱"
            quote="括號僅為選項說明，不要出現在標題文字中"
            desc="商品分類（鍋貼／湯品…）→ 標題只留「商品分類」"
            couple="💑 男友問「妳想吃什麼呢？」（心裡OS：到底要吃啥？）——這句「內心話」絕對不能真的說出口。"
          />
        </Step>
        <Step>
          <PromptTechniqueCard
            num="4"
            title="括號內容當下拉選單來源"
            quote="後綴括號的項目，依括號內容建立下拉選單"
            desc="不用另外列清單，靠規則描述讓 AI 自動抽取"
            couple="💑「巧克力、玫瑰、包包都可以」——這其實就是選項清單，不是碎念。"
          />
        </Step>
        <Step>
          <PromptTechniqueCard
            num="5"
            title="下拉選單來源集中管理"
            quote="「設定選單」第一列起，直排填入欄位＋清單項目"
            desc="選項要改只改一處，不用逐一修改下拉選單"
            couple="💑 禮物清單貼滿冰箱、皮夾、手機——要改要跑三個地方，煩！"
          />
        </Step>
        <Step>
          <PromptTechniqueCard
            num="6"
            title="清楚的資料結構層次"
            quote="總任務 → 注意事項 → 分頁籤 → 列欄位 → 下拉規則"
            desc="由上而下鋪陳，AI 才不會漏看規則"
            couple="💑 慶祝計畫先講「做什麼」→「幾點」→「去哪」→「訂位幾人」，一次全塞會漏聽。"
          />
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4a-1 — Claude 介面導覽：封面 ──────────────────────────────────────────
const ClaudeGuideCover: Page = () => (
  <div style={{ ...page, justifyContent: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30, maxWidth: 1500 }}>
      <Eyebrow color={claudeAccent}>Claude 使用手冊 · 介面導覽</Eyebrow>
      <h1
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: '110px', fontWeight: 900, lineHeight: 1.1, margin: 0 }}
      >三、Claude 側邊面板功能整理</h1>
      <p style={{ fontSize: 34, color: muted, lineHeight: 1.5, maxWidth: 1300, margin: 0 }}>
        從主畫面到輸入框，一次搞懂每個按鈕在哪裡、做什麼
      </p>
      <div style={{ display: 'flex', gap: 14, marginTop: 6 }}>
        <Tag>主畫面 Skills</Tag>
        <Tag>輸入框工具列</Tag>
        <Tag>右上角選單</Tag>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4a-2 — Claude 介面導覽：一、主畫面 Skills 快捷功能 ───────────────────
const ClaudeGuideSkills: Page = () => (
  <div style={page}>
    <Eyebrow color={claudeAccent}>畫面中央：Get started with these skills</Eyebrow>
    <PageHeading>二、認識 Claude for Excel</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 24, alignItems: 'flex-start' }}>
      <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 31, fontWeight: 800, color: muted }}>五個常用 Skills</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Steps>
            <Step><RefRow n={1} name="/audit-xls" mid="稽核 Excel 檔案" right="檢查公式、資料驗證、格式、異常值、下拉選單設定" /></Step>
            <Step><RefRow n={2} name="/clean-data-xls" mid="清理 Excel 資料" right="去除空白、整理格式、統一日期、清除重複資料" /></Step>
            <Step><RefRow n={3} name="/dcf-model" mid="建立 DCF 折現現金流模型" right="公司估值、財務模型、現金流推估" /></Step>
            <Step><RefRow n={4} name="/comps-analysis" mid="可比公司分析" right="同業比較、估值倍數分析、財務指標比較" /></Step>
            <Step>
              <RefRow
                n={5}
                name="Create and manage skills"
                mid="建立或管理自訂 Skills"
                right="建立固定工作流程，例如 HR 信件、Excel 範本、測驗題產出"
              />
            </Step>
          </Steps>
        </div>
      </div>
      <div style={{ flex: 0.9 }}>
        <MockChrome label="claude.ai">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <div style={{ fontSize: 25, color: muted }}>Get started with these skills:</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <PinBadge n={1} />
              <Tag>/audit-xls</Tag>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <PinBadge n={2} />
              <Tag>/clean-data-xls</Tag>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <PinBadge n={3} />
              <Tag>/dcf-model</Tag>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <PinBadge n={4} />
              <Tag>/comps-analysis</Tag>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, marginTop: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <PinBadge n={5} />
                <span style={{ fontSize: 25, fontWeight: 700, color: claudeAccent, textDecoration: 'underline' }}>
                  Create and manage skills
                </span>
              </div>
              <div style={{ fontSize: 25, color: muted }}>on your Claude account</div>
            </div>
          </div>
        </MockChrome>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 10a — 課堂練習：試用 Skill(audit-xls／clean-data-xls) ───────────────
const ClaudeSkillsTry: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={claudeAccent}>Claude 介面導覽 · 任務 2-1</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.8</Eyebrow>
    </div>
    <PageHeading>任務 2-1：試用 Skill（/audit-xls、/clean-data-xls）</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
      <Steps>
        <Step>
          <FlowStep n={1} title="打開 Claude for Excel 的 Sidebar" desc="回到 Excel，點開側邊欄，準備輸入指令" />
        </Step>
        <Step>
          <FlowStep
            n={2}
            title="貼上 Prompt 1-1"
            desc="請 AI 先幫你造出兩組測試資料，一組故意留錯給 audit-xls 抓，一組故意留錯給 clean-data-xls 清"
            prompt="我想試試看 skill：audit-xls 跟 clean-data-xls 的功能，你幫我 1. 新增一個工作表 2. 分別填幾個簡單的錯誤資料（要分左右邊，備註是 for audit-xls 和 for clean-data-xls），並備註是什麼錯誤。"
            promptLabel="PROMPT 1-1"
          />
        </Step>
        <Step>
          <FlowStep n={3} title="輸入 /audit-xls、/clean-data-xls" desc="分別對左右兩邊的測試資料執行，查看資料清理結果" />
        </Step>
        <Step>
          <Callout color={muted}>備註：如果 Claude 詢問要處理哪一張工作表，選擇處理「當前這張工作表」即可。</Callout>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4a-3 — Claude 介面導覽：二～六、輸入框工具列 ─────────────────────────
const ClaudeGuideToolbar: Page = () => (
  <div style={page}>
    <Eyebrow color={claudeAccent}>輸入框下方工具列</Eyebrow>
    <PageHeading>左下角到右下角：五個常用工具</PageHeading>
    <div style={{ marginTop: 20 }}>
      <MockChrome label="claude.ai">
        <div style={{ fontSize: 25, color: muted, marginBottom: 12 }}>輸入框下方工具列（左到右）</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PinBadge n={1} />
              <span style={{ fontSize: 31 }}>＋</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PinBadge n={2} />
              <span style={{ fontSize: 32 }}>»</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PinBadge n={3} />
              <span style={{ fontSize: 32 }}>🕐</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PinBadge n={4} />
              <span style={{ fontSize: 25, fontWeight: 700 }}>Sonnet 5 ▾</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PinBadge n={5} />
              <span style={{ fontSize: 32 }}>🎤</span>
            </div>
          </div>
        </div>
      </MockChrome>
    </div>
    <div style={{ display: 'flex', gap: 20, marginTop: 18, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Steps>
          <Step>
            <FeatureBlock title="① ＋ 快速新增選單" desc="依任務調用外部資源／資料">
              <Tag>📎 上傳檔案／圖片</Tag>
              <Tag>🔍 網路搜尋</Tag>
              <Tag>🔗 外部連接</Tag>
              <Tag>🧩 外掛工具</Tag>
              <Tag>⚡ 技能流程</Tag>
            </FeatureBlock>
          </Step>
          <Step>
            <FeatureBlock title="② » 編輯確認模式" desc="修改前先確認，或直接套用">
              <Tag>Ask before edits — 正式文件建議</Tag>
              <Tag>Accept all edits — 測試檔適用</Tag>
            </FeatureBlock>
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1.25, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Steps>
          <Step>
            <FeatureBlock title="③ 🕐 Extended Thinking" desc="回答前多花時間深度思考，適合複雜任務">
              <Tag>Excel 公式設計</Tag>
              <Tag>VBA／GAS</Tag>
              <Tag>邏輯判斷</Tag>
              <Tag>Prompt 優化</Tag>
            </FeatureBlock>
          </Step>
          <Step>
            <FeatureBlock title="④ Sonnet 5 ▾ 模型選擇" desc="切換不同 Claude 模型，影響：">
              <Tag>速度</Tag>
              <Tag>推理能力</Tag>
              <Tag>文件處理</Tag>
              <Tag>程式碼能力</Tag>
              <Tag>複雜任務表現</Tag>
            </FeatureBlock>
          </Step>
          <Step>
            <FeatureBlock title="⑤ 🎤 麥克風" desc="語音輸入，適合口述需求" />
          </Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4a-4 — Claude 介面導覽：七、八、右上角選單與圖示 ─────────────────────
const ClaudeGuideTopRight: Page = () => (
  <div style={page}>
    <Eyebrow color={claudeAccent}>右上角選單與圖示</Eyebrow>
    <PageHeading>畫面右上角：選單與捷徑圖示</PageHeading>
    <div style={{ marginTop: 30 }}>
      <MockChrome label="claude.ai">
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <PinBadge n={1} />
            <span style={{ fontSize: 31 }}>🕐</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <PinBadge n={2} />
            <span style={{ fontSize: 31 }}>💬＋</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <PinBadge n={3} />
            <span style={{ fontSize: 31 }}>→│</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <PinBadge n={4} />
            <span style={{ fontSize: 31 }}>⋮</span>
          </div>
        </div>
      </MockChrome>
    </div>
    <div style={{ display: 'flex', gap: 24, marginTop: 26 }}>
      <Steps>
        <Step>
          <RefMiniTable
            title="④ ⋮ 三個點選單"
            rows={[
              { label: 'Settings', desc: '調整帳號、顯示、工具、權限等設定' },
              { label: 'Download Transcript', desc: '保存課程測試、Prompt 範例、AI 回答紀錄' },
              { label: 'Logout', desc: '離開目前 Claude 帳號' },
            ]}
          />
        </Step>
        <Step>
          <RefMiniTable
            title="其他捷徑圖示"
            rows={[
              { label: '① 時鐘圖示', desc: '對話歷史／近期紀錄——查看或回到之前的對話' },
              { label: '② 對話框＋', desc: '新增對話——開啟新的聊天工作' },
              { label: '③ 右側箭頭', desc: '收合側邊面板——將 Claude 面板縮小或展開' },
            ]}
          />
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4a-4b — Claude 介面導覽：任務 2 建立增益集 ───────────────────────────
const ClaudeGuideAddin: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={claudeAccent}>Claude 介面導覽 · 任務 2</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.8</Eyebrow>
    </div>
    <PageHeading>在 Excel 內建立增益集</PageHeading>
    <div style={{ marginTop: 24 }}>
      <MockChrome label="Excel — 增益集">
        <div style={{ display: 'flex', gap: 48, justifyContent: 'center' }}>
          <AddinIcon bg={claudeAccent} glyph="✻" label="Claude for Excel" />
          <AddinIcon bg="#10A37F" glyph="✦" label="ChatGPT for Excel" />
        </div>
      </MockChrome>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
      <Steps>
        <Step>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <PinBadge n={1} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 31, fontWeight: 800 }}>建立增益集</div>
              <div style={{ display: 'flex', gap: 14 }}>
                <AddinLink
                  label="Claude for Excel"
                  url="https://marketplace.microsoft.com/en-us/product/saas/wa200009404?tab=overview"
                />
                <AddinLink
                  label="ChatGPT for Excel"
                  url="https://marketplace.microsoft.com/en-us/product/office/WA200010215?tab=Overview"
                />
              </div>
            </div>
          </div>
        </Step>
        <Step>
          <FlowStep n={2} title="登入帳號" desc="用你的 Claude 或 OpenAI／ChatGPT 帳號登入，確認方案有支援此功能" />
        </Step>
        <Step>
          <FlowStep n={3} title="開始使用" desc="側邊欄開啟後即可直接輸入指令" />
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4a-5 — Claude 介面導覽：任務 5 試用 Connectors ───────────────────────
const ClaudeGuideConnectorsTask: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={claudeAccent}>Claude 介面導覽 · 任務 3</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.8</Eyebrow>
    </div>
    <PageHeading>試用 Connectors 功能</PageHeading>
    <div style={{ display: 'flex', gap: 40, marginTop: 30, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 32, fontWeight: 800, color: muted }}>連接 Gmail</div>
        <Steps>
          <Step>
            <FlowStep
              n={1}
              title="開啟 Connectors"
              desc="左下角「＋」→ Connectors → Browse connectors → Add"
            />
          </Step>
          <Step>
            <FlowStep n={2} title="連接 Gmail" desc="搜尋 Gmail → 點進去 → 點擊 Connect" />
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1.4, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 32, fontWeight: 800, color: muted }}>建立並測試「寄信」技能</div>
        <Steps>
          <Step>
            <FlowStep
              n={3}
              title="用 Prompt 產生草稿"
              desc="回到 Excel，點擊一個表格，在對話框輸入："
              prompt="幫我寫一封草稿，內文是把這個表格轉成 html 後，寄給我自己的 gmail。"
              promptLabel="PROMPT 2"
            />
          </Step>
          <Step>
            <FlowStep n={4} title="確認草稿" desc="登入你的 Gmail，查看草稿夾是否有此封郵件" />
          </Step>
          <Step>
            <FlowStep
              n={5}
              title="把流程存成 Skill"
              desc="回到 Excel，在對話框輸入："
              prompt="將這個寄信任務建成 skill，取名為 send-email，下次只要我呼叫 /send-email，就直接把我選取的表格轉成 html 表格後寄給我自己；在我沒有點選任何表格時詢問我，其他時候就直接執行流程不必詢問。"
              promptLabel="PROMPT 3"
            />
          </Step>
          <Step>
            <FlowStep n={6} title="呼叫 /send-email 測試" desc="點擊任一表格，輸入 /send-email，檢查草稿夾是否成功建立草稿" />
          </Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4b — 課堂練習：完成三張主檔 ──────────────────────────────────────────
const Part1Task567: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.10-11</Eyebrow>
    <PageHeading>四、請完成三張主檔的內容</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 44 }}>
      <Steps>
        <Step><TaskCard num="7" title="完成商品主檔" desc="請同學產出 5～10 個菜單品項" /></Step>
        <Step>
          <TaskCard
            num="8"
            title="完成原物料主檔"
            desc="請依照您的菜單品項，整理出所有需要用到的原物料名稱、分類、單位、庫存等資料"
          />
        </Step>
        <Step>
          <TaskCard
            num="9"
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
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.9</Eyebrow>
    <PageHeading>三、如何讓下拉選單變得聰明？</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 44 }}>
      <Steps>
        <Step>
          <TaskCard
            num="4"
            title="檢查每個下拉選單"
            desc="在「設定選單」往下新增一個項目，下拉選單是否更新？選項裡有沒有「空白選項」？"
          />
        </Step>
        <Step>
          <TaskCard
            num="5"
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
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.9</Eyebrow>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '10px 20px',
          borderRadius: 999,
          background: `${partColor.p1}14`,
          border: `1px solid ${partColor.p1}40`,
          color: partColor.p1,
          fontSize: 25,
          fontWeight: 800,
          letterSpacing: '0.04em',
        }}
      >
        PROMPT 4
      </div>
    </div>
    <PageHeading>讓 AI 修正下拉選單公式</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 20 }}>任務 6：把固定範圍改成動態範圍</div>
    <Steps>
      <Step>
        <div style={{ height: 690, marginTop: 14, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={dynamicDropdownBeforeAfter}
            alt="固定範圍與動態範圍的下拉選單比較：新增資料後自動延伸，且不含標題與空白"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', mixBlendMode: 'multiply' }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 6 — 課堂練習：動手認識表格 ───────────────────────────────────────────
const Part1Task8: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.11</Eyebrow>
    <PageHeading>五、動手認識表格</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 20 }}>任務 10：在商品主檔新增項目，觀察一般範圍的問題</div>
    <Steps>
      <Step>
        <div style={{ height: 700, marginTop: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={rangeNewRowProblems}
            alt="一般儲存格範圍新增商品ID後，格式、下拉選單與公式不會自動延伸"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', mixBlendMode: 'multiply' }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 5a0 — 流浪貓 vs 晶片寵物：一般範圍 vs Excel 表格 ─────────────────────
const RangeVsTableAnalogy: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p1}>PART 1 · 資料庫基礎</Eyebrow>
    <PageHeading>儲存格 vs 表格 ＝ 流浪貓 vs 家貓</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={strayCatsVsChippedPets}
        alt="流浪貓 vs 晶片寵物：一般範圍 vs Excel 表格"
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 24, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5a — 課堂練習：設定表格 ───────────────────────────────────────────────
const Part1Task9: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.12</Eyebrow>
    <PageHeading>設定表格實作</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 20 }}>任務 11：把範圍轉成 Excel 表格並正確命名</div>
    <Steps>
      <Step>
        <div style={{ height: 700, marginTop: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={convertRangeToTable}
            alt="選取儲存格、按 Ctrl 加 T、勾選我的表格有標題、觀察自動延伸並重新命名三張主檔"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', mixBlendMode: 'multiply' }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 5b — 課堂練習：認識表格工具 ───────────────────────────────────────────
const sheetGreen = partColor.p1;

const SheetHeaderCell = ({ label }: { label: string }) => (
  <div
    style={{
      background: sheetGreen,
      color: '#fff',
      fontWeight: 800,
      fontSize: 31,
      padding: '15px 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
    }}
  >
    <span>{label}</span>
    <span style={{ fontSize: 25, background: 'rgba(255,255,255,0.22)', borderRadius: 4, padding: '2px 6px' }}>▼</span>
  </div>
);

const SheetRow = ({ id, name, price, band }: { id: string; name: string; price: string; band: boolean }) => {
  const cell = {
    background: band ? `${sheetGreen}1F` : '#fff',
    padding: '14px 18px',
    fontSize: 31,
    borderTop: `1px solid ${cardBorder}`,
    color: 'var(--osd-text)',
  } as const;
  return (
    <>
      <div style={cell}>{id}</div>
      <div style={cell}>{name}</div>
      <div style={{ ...cell, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{price}</div>
    </>
  );
};

const SheetTotalRow = ({ label, price }: { label: string; price: string }) => {
  const cell = {
    background: `${sheetGreen}24`,
    padding: '14px 18px',
    fontSize: 31,
    fontWeight: 800,
    borderTop: `2px solid ${sheetGreen}`,
    color: sheetGreen,
  } as const;
  return (
    <>
      <div style={cell}>{label}</div>
      <div style={cell} />
      <div style={{ ...cell, textAlign: 'right' }}>{price}</div>
    </>
  );
};

const SheetMock = () => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
      <span style={{ fontSize: 32, fontWeight: 700, color: muted }}>表格名稱</span>
      <span
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: sheetGreen,
          background: `${sheetGreen}14`,
          border: `1px solid ${sheetGreen}44`,
          borderRadius: 8,
          padding: '6px 16px',
        }}
      >
        tbl_商品
      </span>
    </div>
    <div
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        border: `1px solid ${cardBorder}`,
        boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
        display: 'grid',
        gridTemplateColumns: '1fr 1.7fr 0.8fr',
      }}
    >
      <SheetHeaderCell label="商品ID" />
      <SheetHeaderCell label="商品名稱" />
      <SheetHeaderCell label="售價" />
      <SheetRow id="P001" name="原味鍋貼" price="60" band={false} />
      <SheetRow id="P002" name="韓式泡菜鍋貼" price="70" band />
      <SheetRow id="P003" name="玉米濃湯" price="45" band={false} />
      <SheetRow id="P004" name="古早味紅茶" price="25" band />
      <SheetTotalRow label="合計" price="200" />
    </div>
  </div>
);

const PivotRow = ({ cat, qty, band }: { cat: string; qty: string; band: boolean }) => {
  const cell = {
    background: band ? `${sheetGreen}12` : '#fff',
    padding: '12px 18px',
    fontSize: 25,
    borderTop: `1px solid ${cardBorder}`,
    color: 'var(--osd-text)',
  } as const;
  return (
    <>
      <div style={cell}>{cat}</div>
      <div style={{ ...cell, textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 700 }}>{qty}</div>
    </>
  );
};

const PivotMock = () => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
      <span style={{ fontSize: 32, fontWeight: 700, color: muted }}>樞紐分析</span>
      <span
        style={{
          fontSize: 25,
          fontWeight: 800,
          color: sheetGreen,
          background: `${sheetGreen}14`,
          border: `1px solid ${sheetGreen}44`,
          borderRadius: 8,
          padding: '6px 14px',
        }}
      >
        商品類別 × 數量
      </span>
    </div>
    <div
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        border: `1px solid ${cardBorder}`,
        boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
        display: 'grid',
        gridTemplateColumns: '1.4fr 0.8fr',
      }}
    >
      <div style={{ background: sheetGreen, color: '#fff', fontWeight: 800, fontSize: 25, padding: '13px 18px' }}>商品類別</div>
      <div style={{ background: sheetGreen, color: '#fff', fontWeight: 800, fontSize: 25, padding: '13px 18px', textAlign: 'right' }}>數量</div>
      <PivotRow cat="鍋貼" qty="2" band={false} />
      <PivotRow cat="湯品" qty="1" band />
      <PivotRow cat="飲品" qty="1" band={false} />
      <PivotRow cat="小菜" qty="0" band />
      <div style={{ background: `${sheetGreen}24`, color: sheetGreen, fontWeight: 800, fontSize: 25, padding: '13px 18px', borderTop: `2px solid ${sheetGreen}` }}>總計</div>
      <div style={{ background: `${sheetGreen}24`, color: sheetGreen, fontWeight: 800, fontSize: 25, padding: '13px 18px', borderTop: `2px solid ${sheetGreen}`, textAlign: 'right' }}>4</div>
    </div>
  </div>
);

const FeatureChip = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
  <div
    style={{
      background: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 14,
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          background: sheetGreen,
          color: '#fff',
          fontSize: 25,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {n}
      </div>
      <span style={{ fontSize: 32, fontWeight: 800 }}>{title}</span>
    </div>
    <div style={{ fontSize: 25, color: muted, lineHeight: 1.35 }}>{desc}</div>
  </div>
);

const MiniRow = ({ a, b, tone }: { a: string; b: string; tone?: 'hi' | 'bad' }) => {
  const bg = tone === 'hi' ? `${partColor.p1}16` : tone === 'bad' ? `${painRed}12` : '#fff';
  const bColor = tone === 'bad' ? painRed : 'var(--osd-text)';
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.3fr', borderTop: `1px solid ${cardBorder}`, background: bg }}>
      <div style={{ padding: '11px 16px', fontSize: 25, fontWeight: 700 }}>{a}</div>
      <div style={{ padding: '11px 16px', fontSize: 25, color: bColor, fontWeight: tone === 'bad' ? 800 : 500 }}>{b}</div>
    </div>
  );
};

const MiniTable = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ width: 320, borderRadius: 12, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 3px 12px rgba(0,0,0,0.06)' }}>
    <div style={{ background: taskColor, color: '#fff', fontWeight: 800, fontSize: 25, padding: '11px 16px' }}>{title}</div>
    {children}
  </div>
);

const Part1Task9Tools: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · Step 3</Eyebrow>
    <PageHeading>認識「表格工具」——一張會自己長大的智慧表</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={tableToolsGuide}
        alt="Excel 表格工具教學圖：表格名稱、篩選按鈕、帶狀列、自動延伸與合計樞紐"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5c — 五、原物料主檔的主要供應商（動機） ─────────────────────────────
const Part1SupplierIntro: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>PART 1 · 資料庫基礎</Eyebrow>
    <PageHeading>六、告別手動複製貼上－主要供應商資料</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={supplierMasterLink}
        alt="主要供應商資料教學圖：從供應商主檔選擇 ID，避免手動貼錯並自動帶出名稱"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5d — 任務 10–12：讓下拉選單一路變聰明 ───────────────────────────────
const Part1SupplierTasks: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.13–14</Eyebrow>
    <PageHeading>下拉選單，讓它一路變聰明</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={smartSupplierDropdown}
        alt="供應商下拉選單教學圖：建立下拉、只保留啟用供應商並依 ID 自動帶出名稱"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

const bomBlue = '#3072C2';

const BomHeaderCell = ({ label, dropdown, small }: { label: string; dropdown?: boolean; small?: boolean }) => (
  <div
    style={{
      background: taskColor,
      color: '#fff',
      fontWeight: 800,
      fontSize: 25,
      padding: small ? '5px 7px' : '6px 10px',
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

const BomCell = ({
  value,
  formula,
  band,
  small,
  error,
}: {
  value: string;
  formula?: boolean;
  band?: boolean;
  small?: boolean;
  error?: boolean;
}) => (
  <div
    style={{
      padding: small ? '5px 7px' : '6px 10px',
      fontSize: 25,
      borderTop: `1px solid ${cardBorder}`,
      background: error ? `${painRed}14` : band ? '#FBFAF8' : '#fff',
      color: error ? painRed : formula ? bomBlue : 'var(--osd-text)',
      fontWeight: error || formula ? 700 : 400,
    }}
  >
    {value}
  </div>
);

const NotTableBadge = ({ text }: { text: string }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 25,
      fontWeight: 700,
      color: painRed,
      background: `${painRed}14`,
      border: `1px solid ${painRed}44`,
      borderRadius: 8,
      padding: '4px 14px',
      marginBottom: 6,
    }}
  >
    <span>⚠ 一般範圍，不轉表格</span>
    <span style={{ fontWeight: 500, color: muted }}>{text}</span>
  </div>
);

// ─── Shared — small checkmark-matrix diagram (cost/consumption attribution) ──
const MatrixHead = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: taskColor, color: '#fff', fontWeight: 800, fontSize: 25, padding: '6px 14px' }}>
    {children}
  </div>
);

const MatrixCell = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <div style={{ background: '#fff', padding: '6px 14px', fontSize: 25, textAlign: center ? 'center' : 'left' }}>
    {children}
  </div>
);

const Check = () => <span style={{ color: '#1F7A4B', fontWeight: 800, fontSize: 25 }}>✓</span>;
const Cross = () => <span style={{ color: painRed, fontWeight: 800, fontSize: 25 }}>✗</span>;

// ─── Page 5e — 七、新增「商品配方BOM」工作表 ───────────────────────────────────
const Part1BomSetup: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.14</Eyebrow>
    <PageHeading>七、賣一份商品，要用多少料，BOM 表一次看懂</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 15：讓 AI 建立「商品配方BOM」工作表</div>
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
        依 PROMPT 10 建立
      </span>
    </div>
    <div style={{ marginTop: 20 }}>
      <Steps>
        <Step>
          <div>
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
                tbl_BOM
              </span>
            </div>
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '0.8fr 0.8fr 1.1fr 0.8fr 1fr 0.9fr 0.7fr 0.9fr',
              }}
            >
              <BomHeaderCell label="BOM_ID" />
              <BomHeaderCell label="商品ID" dropdown />
              <BomHeaderCell label="商品名稱" />
              <BomHeaderCell label="物料ID" dropdown />
              <BomHeaderCell label="物料名稱" />
              <BomHeaderCell label="每份用量" />
              <BomHeaderCell label="單位" />
              <BomHeaderCell label="適用通路" dropdown />

              <BomCell value="B001" />
              <BomCell value="P001" />
              <BomCell value="原味鍋貼" formula />
              <BomCell value="M001" />
              <BomCell value="麵皮" formula />
              <BomCell value="3" />
              <BomCell value="張" formula />
              <BomCell value="通用" />

              <BomCell value="B002" band />
              <BomCell value="P001" band />
              <BomCell value="原味鍋貼" formula band />
              <BomCell value="M002" band />
              <BomCell value="豬絞肉" formula band />
              <BomCell value="80" band />
              <BomCell value="克" formula band />
              <BomCell value="通用" band />

              <BomCell value="B003" />
              <BomCell value="P002" />
              <BomCell value="韓式泡菜鍋貼" formula />
              <BomCell value="M003" />
              <BomCell value="泡菜" formula />
              <BomCell value="40" />
              <BomCell value="克" formula />
              <BomCell value="僅內用" />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', gap: 32, marginTop: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 20, height: 20, borderRadius: 5, background: taskColor, flexShrink: 0 }} />
              <span style={{ fontSize: 25 }}>▼ 下拉選單——商品ID／物料ID／適用通路</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 20, height: 20, borderRadius: 5, background: bomBlue, flexShrink: 0 }} />
              <span style={{ fontSize: 25 }}>公式自動帶出——商品名稱／物料名稱／單位</span>
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 25, color: muted, marginTop: 16 }}>完成後請驗證下拉與公式都正確運作。</div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5f — 任務16：填入 BOM 範例資料 ───────────────────────────────────────
const Part1BomSampleData: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.15</Eyebrow>
    <PageHeading>讓 AI 填入「商品配方BOM」範例資料</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 24 }}>任務 16：請 AI 填入範例資料</div>
    <Steps>
      <Step>
        <div style={{ height: 650, marginTop: 16, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            <img
              src={bomSampleDataRules}
              alt="商品配方BOM範例表，以標註說明BOM編號、主檔ID、原物料配置、公式欄位、每份用量與適用通路規則"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'top center',
                mixBlendMode: 'multiply',
              }}
            />
            <svg
              viewBox="0 0 1680 941"
              preserveAspectRatio="xMidYMin meet"
              aria-hidden="true"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            >
              <rect x="0" y="619" width="1680" height="70" fill="#F7F5F3" />

              <g stroke="#E85A12" strokeWidth="3" fill="none" strokeLinecap="round">
                <path d="M 561 644 L 561 622" />
                <path d="M 1018 644 L 1018 622" />
                <path d="M 1371 644 L 1371 622" />
              </g>
              <g fill="#E85A12">
                <path d="M 554 627 L 561 618 L 568 627 Z" />
                <path d="M 1011 627 L 1018 618 L 1025 627 Z" />
                <path d="M 1364 627 L 1371 618 L 1378 627 Z" />
                <circle cx="561" cy="663" r="18" />
                <circle cx="1018" cy="663" r="18" />
                <circle cx="1371" cy="663" r="18" />
              </g>
              <g fill="#FFFFFF" fontFamily="Segoe UI, Microsoft JhengHei, sans-serif" fontSize="23" fontWeight="800" textAnchor="middle">
                <text x="561" y="671">4</text>
                <text x="1018" y="671">4</text>
                <text x="1371" y="671">4</text>
              </g>

              <g stroke="#57218C" strokeWidth="3" fill="none" strokeLinecap="round">
                <path d="M 1212 644 L 1212 622" />
              </g>
              <path d="M 1205 627 L 1212 618 L 1219 627 Z" fill="#57218C" />
              <circle cx="1212" cy="663" r="18" fill="#57218C" />
              <text x="1212" y="671" fill="#FFFFFF" fontFamily="Segoe UI, Microsoft JhengHei, sans-serif" fontSize="23" fontWeight="800" textAnchor="middle">5</text>

              <g stroke="#12489A" strokeWidth="3" fill="none" strokeLinecap="round">
                <path d="M 1541 644 L 1541 622" />
              </g>
              <path d="M 1534 627 L 1541 618 L 1548 627 Z" fill="#12489A" />
              <circle cx="1541" cy="663" r="18" fill="#12489A" />
              <text x="1541" y="671" fill="#FFFFFF" fontFamily="Segoe UI, Microsoft JhengHei, sans-serif" fontSize="23" fontWeight="800" textAnchor="middle">6</text>
            </svg>
          </div>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 5g — 八、新增「銷售紀錄」工作表 ──────────────────────────────────────
const Part1SalesSetup: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.15-16</Eyebrow>
    <PageHeading>一、顧客下單，系統自動算好這一筆多少錢</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 17：讓 AI 建立「銷售紀錄」工作表</div>
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
        依 PROMPT 12 建立
      </span>
    </div>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={salesRecordFlow}
        alt="銷售紀錄教學圖：下拉選商品 ID，自動取得名稱與單價，計算每筆銷售金額"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5h — 任務18：填入銷售紀錄範例資料 ───────────────────────────────────
const Part1SalesSampleData: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.16</Eyebrow>
    <PageHeading>讓 AI 填入「銷售紀錄」範例資料</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={salesSampleDataGuide}
        alt="銷售紀錄範例資料教學圖：日期分布、編號規則、公式驗證與合法下拉值"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5i — 九、新增「進貨紀錄」工作表 ──────────────────────────────────────
const Part1PurchaseSetup: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.17</Eyebrow>
    <PageHeading>二、叫貨進來的每一批料，自動算多少錢</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 19：讓 AI 建立「進貨紀錄」工作表</div>
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
        依 PROMPT 14 建立
      </span>
    </div>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={purchaseRecordFlow}
        alt="進貨紀錄教學圖：選擇供應商與物料，自動帶出名稱、計算進貨金額並追蹤入庫"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5j — 任務20：填入進貨紀錄範例資料 ───────────────────────────────────
const Part1PurchaseSampleData: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.18</Eyebrow>
    <PageHeading>讓 AI 填入「進貨紀錄」範例資料</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={purchaseSampleDataGuide}
        alt="進貨紀錄範例資料教學圖：日期單號、主檔合法性、供應商物料對應與入庫追蹤"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 6 — Part 2：交易紀錄 ─────────────────────────────────────────────────
const Part2Transactions: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p2}>PART 2 · 交易紀錄</Eyebrow>
    <PageHeading>銷售紀錄：一筆訂單，完整留下「賣了什麼」</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={salesRecordFlow}
        alt="銷售紀錄教學圖：下拉選商品 ID，自動取得名稱與單價，計算每筆銷售金額"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

const TeachingPill = ({ color, children, width }: { color: string; children: React.ReactNode; width?: number }) => (
  <div
    style={{
      width: width ?? 260,
      minHeight: 78,
      borderRadius: 12,
      background: color,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 900,
      lineHeight: 1.2,
      padding: '10px 18px',
      boxShadow: `0 7px 18px ${color}35`,
    }}
  >
    {children}
  </div>
);

const SupplierHeader = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.15fr 1.1fr 0.82fr 1.05fr 0.9fr 0.66fr' }}>
    <div style={visualHeaderCell}>供應商ID</div>
    <div style={visualHeaderCell}>供應商名稱</div>
    <div style={visualHeaderCell}>主要供應品項</div>
    <div style={visualHeaderCell}>聯絡人</div>
    <div style={visualHeaderCell}>電話</div>
    <div style={visualHeaderCell}>付款方式</div>
    <div style={visualHeaderCell}>狀態</div>
  </div>
);

const visualHeaderCell = {
  background: '#2F6FBE',
  color: '#fff',
  borderRight: '1px solid #194D8D',
  padding: '12px 10px',
  fontSize: 25,
  fontWeight: 800,
  textAlign: 'center' as const,
};

const visualCell = {
  borderRight: '1px solid #AEB6C2',
  borderBottom: '1px solid #AEB6C2',
  padding: '9px 12px',
  fontSize: 23,
  lineHeight: 1.15,
  whiteSpace: 'nowrap' as const,
};

const SupplierRow = ({ id, name, item, contact, phone, pay, status, shade, danger }: {
  id: string; name: string; item: string; contact: string; phone: string; pay: string; status: string; shade?: boolean; danger?: boolean;
}) => (
  <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.15fr 1.1fr 0.82fr 1.05fr 0.9fr 0.66fr', background: shade ? '#DDE9F6' : '#fff' }}>
    <div style={{ ...visualCell, color: '#16802B', fontWeight: 800 }}>{id}</div>
    <div style={visualCell}>{name}</div>
    <div style={visualCell}>{item}</div>
    <div style={visualCell}>{contact}</div>
    <div style={visualCell}>{phone}</div>
    <div style={visualCell}>{pay}</div>
    <div style={{ ...visualCell, color: danger ? painRed : '#16802B', fontWeight: 800 }}>{status}</div>
  </div>
);

const SupplierVisualTable = ({ compact }: { compact?: boolean }) => (
  <div style={{ border: '1px solid #8D98A6', background: '#fff', boxShadow: '0 8px 22px rgba(28,35,31,0.10)' }}>
    <SupplierHeader />
    <SupplierRow id="S001" name="北區麵皮行" item="麵皮" contact="王先生" phone="02-0000-0001" pay="月結" status="啟用" shade />
    <SupplierRow id="S002" name="安心肉品" item="豬肉、湯料" contact="林小姐" phone="02-0000-0002" pay="月結" status="啟用" />
    <SupplierRow id="S003" name="新鮮蔬果商行" item="蔬菜" contact="陳先生" phone="02-0000-0003" pay="貨到付款" status="啟用" shade />
    <SupplierRow id="S004" name="飲品原料行" item="豆漿、紅茶" contact="李小姐" phone="02-0000-0004" pay="月結" status="啟用" />
    {!compact && <SupplierRow id="S005" name="飲品原料行" item="湯料" contact="朱先生" phone="02-0000-0014" pay="月結" status="停用" shade danger />}
    {!compact && <SupplierRow id="S006" name="包材世界" item="外帶盒、醬料包" contact="黃先生" phone="02-0000-0005" pay="貨到付款" status="啟用" />}
  </div>
);

const SalesRow = ({ date, order, product, name, qty, price, discount, amount, channel, shade }: {
  date: string; order: string; product: string; name: string; qty: string; price: string; discount: string; amount: string; channel: string; shade?: boolean;
}) => (
  <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.15fr 0.6fr 0.72fr 1.2fr 0.66fr 0.74fr 0.78fr 0.84fr 0.9fr', background: shade ? '#DDE9F6' : '#fff' }}>
    <div style={visualCell}>{date}</div><div style={visualCell}>{order}</div><div style={visualCell}>D{order.slice(-3)}</div>
    <div style={{ ...visualCell, color: '#1559A4', fontWeight: 800 }}>{product}</div><div style={visualCell}>{name}</div>
    <div style={{ ...visualCell, textAlign: 'right' }}>{qty}</div><div style={{ ...visualCell, textAlign: 'right' }}>{price}</div>
    <div style={{ ...visualCell, textAlign: 'right' }}>{discount}</div><div style={{ ...visualCell, textAlign: 'right', fontWeight: 800 }}>{amount}</div><div style={visualCell}>{channel}</div>
  </div>
);

const SalesVisualTable = () => (
  <div style={{ border: '1px solid #8D98A6', background: '#fff', boxShadow: '0 8px 22px rgba(28,35,31,0.10)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.15fr 0.6fr 0.72fr 1.2fr 0.66fr 0.74fr 0.78fr 0.84fr 0.9fr' }}>
      <div style={visualHeaderCell}>銷售日期</div><div style={visualHeaderCell}>訂單編號</div><div style={visualHeaderCell}>明細ID</div>
      <div style={visualHeaderCell}>商品ID</div><div style={visualHeaderCell}>商品名稱</div><div style={visualHeaderCell}>數量</div>
      <div style={visualHeaderCell}>單價</div><div style={visualHeaderCell}>折扣</div><div style={visualHeaderCell}>銷售金額</div><div style={visualHeaderCell}>通路</div>
    </div>
    <SalesRow date="2026/01/20" order="O20260120001" product="P001" name="招牌鍋貼(10顆)" qty="11" price="70" discount="30" amount="740" channel="內用" shade />
    <SalesRow date="2026/03/08" order="O20260308001" product="P002" name="韭菜鍋貼(10顆)" qty="3" price="70" discount="0" amount="210" channel="電話預訂" />
    <SalesRow date="2026/04/17" order="O20260417001" product="P003" name="玉米鍋貼(10顆)" qty="6" price="80" discount="0" amount="480" channel="外送平台" shade />
    <SalesRow date="2026/05/25" order="O20260525001" product="P004" name="酸辣湯" qty="4" price="35" discount="0" amount="140" channel="外帶" />
    <SalesRow date="2026/06/02" order="O20260602002" product="P005" name="豆漿" qty="10" price="25" discount="0" amount="250" channel="內用" shade />
  </div>
);

const PurchaseRow = ({ date, po, sid, supplier, mid, material, qty, price, amount, state, inDate, shade }: {
  date: string; po: string; sid: string; supplier: string; mid: string; material: string; qty: string; price: string; amount: string; state: string; inDate: string; shade?: boolean;
}) => (
  <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 0.82fr 0.68fr 1.08fr 0.62fr 0.92fr 0.72fr 0.72fr 0.78fr 0.84fr 0.9fr', background: shade ? '#DDE9F6' : '#fff' }}>
    <div style={visualCell}>{date}</div><div style={visualCell}>{po}</div><div style={{ ...visualCell, color: '#1559A4', fontWeight: 800 }}>{sid}</div>
    <div style={visualCell}>{supplier}</div><div style={{ ...visualCell, color: '#1559A4', fontWeight: 800 }}>{mid}</div><div style={visualCell}>{material}</div>
    <div style={{ ...visualCell, textAlign: 'right' }}>{qty}</div><div style={{ ...visualCell, textAlign: 'right' }}>{price}</div>
    <div style={{ ...visualCell, textAlign: 'right', fontWeight: 800 }}>{amount}</div><div style={visualCell}>{state}</div><div style={visualCell}>{inDate}</div>
  </div>
);

const PurchaseVisualTable = () => (
  <div style={{ border: '1px solid #8D98A6', background: '#fff', boxShadow: '0 8px 22px rgba(28,35,31,0.10)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 0.82fr 0.68fr 1.08fr 0.62fr 0.92fr 0.72fr 0.72fr 0.78fr 0.84fr 0.9fr' }}>
      <div style={visualHeaderCell}>進貨日期</div><div style={visualHeaderCell}>進貨單號</div><div style={visualHeaderCell}>供應商ID</div>
      <div style={visualHeaderCell}>供應商名稱</div><div style={visualHeaderCell}>物料ID</div><div style={visualHeaderCell}>物料名稱</div>
      <div style={visualHeaderCell}>數量</div><div style={visualHeaderCell}>單價</div><div style={visualHeaderCell}>進貨金額</div>
      <div style={visualHeaderCell}>入庫狀態</div><div style={visualHeaderCell}>入庫日期</div>
    </div>
    <PurchaseRow date="2026/06/05" po="PO001" sid="S001" supplier="北區麵皮行" mid="M001" material="麵皮" qty="300" price="1" amount="360" state="已入庫" inDate="2026/06/05" shade />
    <PurchaseRow date="2026/06/08" po="PO002" sid="S002" supplier="安心肉品" mid="M002" material="豬絞肉" qty="30" price="180" amount="5,400" state="已入庫" inDate="2026/06/09" />
    <PurchaseRow date="2026/06/10" po="PO003" sid="S003" supplier="新鮮蔬果商行" mid="M003" material="高麗菜" qty="40" price="45" amount="1,800" state="已入庫" inDate="2026/06/10" shade />
    <PurchaseRow date="2026/06/22" po="PO007" sid="S006" supplier="包材世界" mid="M009" material="外帶盒" qty="500" price="3" amount="1,500" state="已入庫" inDate="2026/06/23" />
    <PurchaseRow date="2026/07/01" po="PO010" sid="S003" supplier="新鮮蔬果商行" mid="M005" material="玉米粒" qty="10" price="65" amount="650" state="待入庫" inDate="—" shade />
  </div>
);

const Part2Purchases: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p2}>PART 2 · 交易紀錄</Eyebrow>
    <PageHeading>進貨紀錄：從供應商到入庫，成本一路有跡可循</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={purchaseRecordFlow}
        alt="進貨紀錄教學圖：選擇供應商與物料，自動帶出名稱、計算進貨金額並追蹤入庫"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 7 — Part 3a：動態陣列計算表 ─────────────────────────────────────────
const SpillReportCard = ({ title, result, color }: { title: string; result: string; color: string }) => (
  <div
    style={{
      minHeight: 108,
      borderRadius: 16,
      border: `1px solid ${color}55`,
      borderLeft: `8px solid ${color}`,
      background: '#FFFFFF',
      padding: '18px 22px',
      boxShadow: '0 7px 18px rgba(28,35,31,0.07)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 18,
    }}
  >
    <div>
      <div style={{ fontSize: 29, fontWeight: 900 }}>{title}</div>
      <div style={{ fontSize: 23, color: muted, marginTop: 4 }}>{result}</div>
    </div>
    <div style={{ minWidth: 72, height: 48, borderRadius: 999, background: `${color}18`, color, fontSize: 24, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      ＋1 列
    </div>
  </div>
);

const Part3EngineLegacy: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 成本與利潤</Eyebrow>
    <PageHeading>為什麼用「#」？資料新增，計算表自動長大</PageHeading>
    <p style={{ fontSize: 29, color: muted, margin: '12px 0 0' }}>
      公式只寫在第一格；結果會向下展開，其他公式再用 <b style={{ color: partColor.p3 }}>A2#</b> 取得整段結果。
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: '390px 58px 560px 58px 1fr', alignItems: 'center', gap: 12, marginTop: 24, flex: 1, minHeight: 0 }}>
      <div style={{ borderRadius: 22, border: `1px solid ${cardBorder}`, background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 10px 28px rgba(28,35,31,0.08)' }}>
        <div style={{ height: 58, background: '#1F6F43', color: '#FFFFFF', fontSize: 26, fontWeight: 900, display: 'flex', alignItems: 'center', padding: '0 20px' }}>
          銷售紀錄
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', background: '#EAF1F7', color: '#40566A', fontSize: 23, fontWeight: 800, padding: '12px 18px' }}>
          <span>商品ID</span><span>銷售數量</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', padding: '13px 18px', fontSize: 25, borderTop: '1px solid #DDE3E7' }}><span>P001</span><span>11</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', padding: '13px 18px', fontSize: 25, borderTop: '1px solid #DDE3E7', background: '#F6F8F8' }}><span>P002</span><span>3</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', padding: '13px 18px', fontSize: 25, borderTop: '1px solid #DDE3E7' }}><span>P003</span><span>6</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', padding: '13px 18px', fontSize: 25, fontWeight: 900, color: '#1F7A4B', background: '#E3F3E9', borderTop: '2px solid #7ABB91' }}>
          <span>＋ P004</span><span>4</span>
        </div>
        <div style={{ padding: '16px 20px', fontSize: 25, color: '#1F7A4B', fontWeight: 900, borderTop: '1px solid #C4E0CE' }}>
          新增一筆銷售
        </div>
      </div>

      <div style={{ fontSize: 50, color: partColor.p3, textAlign: 'center' }}>→</div>

      <div style={{ borderRadius: 22, border: `2px solid ${partColor.p3}66`, background: '#F5FBFD', padding: 22, boxShadow: '0 12px 30px rgba(27,132,168,0.10)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 29, fontWeight: 900, color: partColor.p3 }}>① A2 先產生清單</div>
          <div style={{ fontSize: 23, color: partColor.p3, background: '#E0F2F7', borderRadius: 999, padding: '6px 14px', fontWeight: 900 }}>產生溢出</div>
        </div>
        <div style={{ marginTop: 14, borderRadius: 12, background: '#FFFFFF', border: `2px solid ${partColor.p3}`, padding: '12px 15px', fontFamily: 'monospace', fontSize: 24, fontWeight: 800, color: '#D92D20' }}>
          =UNIQUE(tbl_銷售[商品ID])
        </div>
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '82px 1fr' }}>
          <div style={{ background: '#EAF1F7', border: '1px solid #C9D5DE', padding: 10, textAlign: 'center', fontSize: 22, fontWeight: 900 }}>A2</div>
          <div style={{ background: '#DDF2E5', border: '2px solid #4C9A69', padding: 10, fontSize: 24, fontWeight: 900 }}>P001</div>
          <div style={{ background: '#F4F6F6', border: '1px solid #D7DFE1', padding: 10, textAlign: 'center', fontSize: 22 }}>A3</div>
          <div style={{ background: '#EAF6EF', border: '1px dashed #79B28C', padding: 10, fontSize: 24 }}>P002</div>
          <div style={{ background: '#F4F6F6', border: '1px solid #D7DFE1', padding: 10, textAlign: 'center', fontSize: 22 }}>A4</div>
          <div style={{ background: '#EAF6EF', border: '1px dashed #79B28C', padding: 10, fontSize: 24 }}>P003</div>
          <div style={{ background: '#F4F6F6', border: '1px solid #D7DFE1', padding: 10, textAlign: 'center', fontSize: 22 }}>A5</div>
          <div style={{ background: '#EAF6EF', border: '1px dashed #79B28C', padding: 10, fontSize: 24, fontWeight: 900, color: '#1F7A4B' }}>P004　← 自動新增</div>
        </div>
        <div style={{ marginTop: 13, borderRadius: 12, background: '#FFF4F1', border: '2px solid #D92D20', padding: '11px 15px' }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#A84235' }}>② 其他地方引用整段結果</div>
          <div style={{ marginTop: 4, fontFamily: 'monospace', fontSize: 32, fontWeight: 900, color: '#D92D20' }}>
            =A2<span style={{ fontSize: 38 }}>#</span>
          </div>
          <div style={{ fontSize: 22, color: muted }}>
            「#」不是產生清單，而是一次抓住 A2 向下溢出的所有儲存格。
          </div>
        </div>
      </div>

      <div style={{ fontSize: 50, color: partColor.p3, textAlign: 'center' }}>→</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 27, fontWeight: 900, color: muted, marginBottom: 2 }}>三張計算表同步更新</div>
        <SpillReportCard title="商品成本" result="用 A2# 取得整段商品清單" color={partColor.p3} />
        <SpillReportCard title="庫存管理" result="引用 A2#，自動增加計算列" color="#1E9076" />
        <SpillReportCard title="營收毛利" result="引用溢出結果，自動算毛利" color="#C0902E" />
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
      <div style={{ borderRadius: 16, padding: '18px 24px', background: '#FCEFEB', border: '1px solid #EDB9AB', fontSize: 26 }}>
        <b style={{ color: '#B5502E' }}>手動複製公式：</b>新增資料後還要往下貼，容易漏掉或貼錯列。
      </div>
      <div style={{ borderRadius: 16, padding: '18px 24px', background: '#EAF6EF', border: '1px solid #A9D8BB', fontSize: 26 }}>
        <b style={{ color: '#1F7A4B' }}># 溢出公式：</b>來源資料一增加，結果範圍與三張計算表自動延伸。
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 7a — 十、新增「商品成本」計算表 ─────────────────────────────────────
const Part3EngineHashSimple: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 成本與利潤</Eyebrow>
    <PageHeading>沒有「#」拿一格；加上「#」拿整串</PageHeading>
    <p style={{ fontSize: 31, color: muted, margin: '12px 0 0' }}>
      把 <b style={{ color: partColor.p3 }}>A2</b> 想成這串資料的起點。
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: '500px 1fr 1fr', gap: 30, marginTop: 30, flex: 1, minHeight: 0 }}>
      <div style={{ borderRadius: 24, border: `1px solid ${cardBorder}`, background: '#FFFFFF', overflow: 'hidden', boxShadow: '0 12px 30px rgba(28,35,31,0.08)' }}>
        <div style={{ height: 62, background: '#1F4E78', color: '#FFFFFF', display: 'grid', gridTemplateColumns: '110px 1fr', alignItems: 'center', padding: '0 26px', fontSize: 27, fontWeight: 900 }}>
          <span>儲存格</span><span>商品ID</span>
        </div>
        <div style={{ padding: 18, background: '#F7F9FA' }}>
          <div style={{ border: '4px solid #42A565', borderRadius: 16, overflow: 'hidden', boxShadow: '0 0 0 7px rgba(66,165,101,0.10)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', background: '#DDF2E5', fontSize: 29, fontWeight: 900 }}>
              <div style={{ padding: '16px 18px', borderRight: '1px solid #B9D9C4' }}>A2</div>
              <div style={{ padding: '16px 22px' }}>P001</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', background: '#FFFFFF', borderTop: '1px solid #DCE4E7', fontSize: 29 }}>
              <div style={{ padding: '16px 18px', borderRight: '1px solid #DCE4E7', color: muted }}>A3</div>
              <div style={{ padding: '16px 22px' }}>P002</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', background: '#F5F7F8', borderTop: '1px solid #DCE4E7', fontSize: 29 }}>
              <div style={{ padding: '16px 18px', borderRight: '1px solid #DCE4E7', color: muted }}>A4</div>
              <div style={{ padding: '16px 22px' }}>P003</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', background: '#FFFFFF', borderTop: '1px solid #DCE4E7', fontSize: 29 }}>
              <div style={{ padding: '16px 18px', borderRight: '1px solid #DCE4E7', color: muted }}>A5</div>
              <div style={{ padding: '16px 22px' }}>P004</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', background: '#FFF3D6', borderTop: '2px solid #E6B64E', fontSize: 29, fontWeight: 900, color: '#9A6700' }}>
              <div style={{ padding: '16px 18px', borderRight: '1px solid #E6C778' }}>A6</div>
              <div style={{ padding: '16px 22px' }}>＋ P005</div>
            </div>
          </div>
          <div style={{ marginTop: 20, borderRadius: 14, background: '#EAF6EF', color: '#1F7A4B', padding: '14px 18px', textAlign: 'center', fontSize: 27, fontWeight: 900 }}>
            A2 開始的整串資料
          </div>
        </div>
      </div>

      <div style={{ borderRadius: 24, border: '2px solid #E0AAA0', background: '#FFF8F6', padding: 28, boxShadow: '0 12px 30px rgba(164,74,57,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ borderRadius: 999, background: '#F5DED8', color: '#A84235', padding: '8px 22px', fontSize: 27, fontWeight: 900 }}>
          沒有 #
        </div>
        <div style={{ marginTop: 24, borderRadius: 16, background: '#FFFFFF', border: '2px solid #D67F6D', padding: '15px 34px', fontFamily: 'monospace', fontSize: 42, fontWeight: 900, color: '#D92D20' }}>
          =A2
        </div>
        <div style={{ margin: '24px 0 18px', fontSize: 48, color: '#C16E5D' }}>↓</div>
        <div style={{ width: '76%', border: '4px solid #D67F6D', background: '#FFFFFF', padding: '20px 24px', textAlign: 'center', fontSize: 34, fontWeight: 900 }}>
          P001
        </div>
        <div style={{ marginTop: 28, fontSize: 32, fontWeight: 900, color: '#A84235' }}>只拿第一格</div>
      </div>

      <div style={{ borderRadius: 24, border: '3px solid #4C9A69', background: '#F3FBF6', padding: 28, boxShadow: '0 14px 34px rgba(45,126,76,0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ borderRadius: 999, background: '#DDF2E5', color: '#1F7A4B', padding: '8px 22px', fontSize: 27, fontWeight: 900 }}>
          加上 #
        </div>
        <div style={{ marginTop: 18, borderRadius: 16, background: '#FFFFFF', border: '3px solid #4C9A69', padding: '12px 34px', fontFamily: 'monospace', fontSize: 42, fontWeight: 900, color: '#D92D20' }}>
          =A2#
        </div>
        <div style={{ margin: '10px 0 8px', fontSize: 42, color: '#378554' }}>↓</div>
        <div style={{ width: '76%', border: '4px solid #4C9A69', background: '#FFFFFF', overflow: 'hidden', textAlign: 'center', fontSize: 25, fontWeight: 800 }}>
          <div style={{ padding: 5 }}>P001</div>
          <div style={{ padding: 5, borderTop: '1px solid #CDE4D5', background: '#F5FAF7' }}>P002</div>
          <div style={{ padding: 5, borderTop: '1px solid #CDE4D5' }}>P003</div>
          <div style={{ padding: 5, borderTop: '1px solid #CDE4D5', background: '#F5FAF7' }}>P004</div>
          <div style={{ padding: 5, borderTop: '2px solid #E6B64E', background: '#FFF3D6', color: '#9A6700' }}>P005</div>
        </div>
        <div style={{ marginTop: 10, fontSize: 28, fontWeight: 900, color: '#1F7A4B' }}>整串一起拿走</div>
      </div>
    </div>

    <div style={{ marginTop: 24, borderRadius: 18, padding: '18px 30px', background: '#173B2B', color: '#FFFFFF', textAlign: 'center', fontSize: 34, fontWeight: 900, letterSpacing: 1 }}>
      記憶口訣：沒有 # 拿一格；有 # 拿整串。
    </div>
    <PageFooter />
  </div>
);

const Part3Engine: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 成本與利潤</Eyebrow>
    <PageHeading>溢出公式是什麼？輸入一次，自動填滿整欄</PageHeading>
    <p style={{ fontSize: 29, color: muted, margin: '10px 0 0' }}>
      公式會抓出來源表「指定欄位的所有資料」，並從第一格往下展開。
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 430px', gap: 28, marginTop: 24, flex: 1, minHeight: 0 }}>
      <div style={{ borderRadius: 22, border: `1px solid ${cardBorder}`, background: '#FFFFFF', padding: 20, boxShadow: '0 12px 30px rgba(28,35,31,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr 1.14fr', gap: 10, marginBottom: 14 }}>
          <div />
          <div style={{ borderRadius: 12, background: '#EAF3FF', border: '1px solid #98BDEB', padding: '10px 12px', color: '#1859A8', fontSize: 20, fontWeight: 900, textAlign: 'center' }}>
            E2：=tbl_原物料[期初庫存]
          </div>
          <div style={{ borderRadius: 12, background: '#EAF3FF', border: '1px solid #98BDEB', padding: '10px 12px', color: '#1859A8', fontSize: 20, fontWeight: 900, textAlign: 'center' }}>{''}</div>
          <div style={{ borderRadius: 12, background: '#EAF3FF', border: '1px solid #98BDEB', padding: '10px 12px', color: '#1859A8', fontSize: 20, fontWeight: 900, textAlign: 'center' }}>{''}</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '100px 54px 1fr', alignItems: 'center', border: '1px solid #BFC9D0', background: '#F4F6F7', height: 58, marginBottom: 12 }}>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #BFC9D0', background: '#FFFFFF', fontSize: 24, fontWeight: 900 }}>E4</div>
          <div style={{ fontSize: 25, fontStyle: 'italic', color: '#52626D', textAlign: 'center' }}>fx</div>
          <div style={{ color: '#98A2AA', fontFamily: 'monospace', fontSize: 25, fontWeight: 800 }}>
            =tbl_原物料[期初庫存]
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr 1.14fr', position: 'relative' }}>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '14px 16px', fontSize: 24, fontWeight: 900, borderRight: '1px solid #FFFFFF' }}>物料ID</div>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '14px 12px', fontSize: 24, fontWeight: 900, textAlign: 'center', borderRight: '1px solid #FFFFFF' }}>期初庫存</div>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '14px 12px', fontSize: 24, fontWeight: 900, textAlign: 'center', borderRight: '1px solid #FFFFFF' }}>累積進貨</div>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '14px 12px', fontSize: 24, fontWeight: 900, textAlign: 'center' }}>累積消耗量</div>

          <div style={{ background: '#FFFFFF', padding: '14px 16px', fontSize: 25, border: '1px solid #D7DFE3' }}>M001</div>
          <div style={{ background: '#E8F2FF', padding: '14px 12px', fontSize: 25, fontWeight: 900, textAlign: 'right', border: '4px solid #3B82D0', borderBottom: '1px solid #B8D2F0' }}>100</div>
          <div style={{ background: '#FFFFFF', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>300</div>
          <div style={{ background: '#FFFFFF', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>220</div>

          <div style={{ background: '#F6F8F9', padding: '14px 16px', fontSize: 25, border: '1px solid #D7DFE3' }}>M002</div>
          <div style={{ background: '#F3F8FF', padding: '14px 12px', fontSize: 25, textAlign: 'right', borderLeft: '4px solid #3B82D0', borderRight: '4px solid #3B82D0', borderBottom: '1px solid #B8D2F0' }}>20,000</div>
          <div style={{ background: '#F6F8F9', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>4,500</div>
          <div style={{ background: '#F6F8F9', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>18,000</div>

          <div style={{ background: '#FFFFFF', padding: '14px 16px', fontSize: 25, border: '1px solid #D7DFE3' }}>M003</div>
          <div style={{ background: '#DCEBFF', padding: '14px 12px', fontSize: 25, fontWeight: 900, textAlign: 'right', border: '4px solid #165EAF' }}>40</div>
          <div style={{ background: '#FFFFFF', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>120</div>
          <div style={{ background: '#FFFFFF', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>95</div>

          <div style={{ background: '#F6F8F9', padding: '14px 16px', fontSize: 25, border: '1px solid #D7DFE3' }}>M004</div>
          <div style={{ background: '#F3F8FF', padding: '14px 12px', fontSize: 25, textAlign: 'right', borderLeft: '4px solid #3B82D0', borderRight: '4px solid #3B82D0', borderTop: '1px solid #B8D2F0', borderBottom: '1px solid #B8D2F0' }}>30</div>
          <div style={{ background: '#F6F8F9', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>60</div>
          <div style={{ background: '#F6F8F9', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>42</div>

          <div style={{ background: '#FFFFFF', padding: '14px 16px', fontSize: 25, border: '1px solid #D7DFE3' }}>M005</div>
          <div style={{ background: '#F3F8FF', padding: '14px 12px', fontSize: 25, textAlign: 'right', borderLeft: '4px solid #3B82D0', borderRight: '4px solid #3B82D0', borderBottom: '4px solid #3B82D0' }}>500</div>
          <div style={{ background: '#FFFFFF', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>0</div>
          <div style={{ background: '#FFFFFF', padding: '14px 12px', fontSize: 25, textAlign: 'right', border: '1px solid #D7DFE3' }}>620</div>
        </div>
        <div style={{ marginTop: 14, display: 'flex', gap: 12, alignItems: 'center', fontSize: 24, color: '#1859A8', fontWeight: 900 }}>
          <span style={{ width: 28, height: 28, border: '4px solid #3B82D0', background: '#E8F2FF', display: 'inline-block' }} />
          藍色浮框＝這一整段都是同一個溢出結果
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ borderRadius: 18, background: '#EEF5FF', border: '1px solid #AFC9EA', padding: '15px 20px' }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: '#1859A8' }}>① 第一格輸入公式</div>
          <div style={{ marginTop: 5, fontSize: 23, lineHeight: 1.4 }}>E2、F2、G2 各輸入一次。</div>
        </div>
        <div style={{ borderRadius: 18, background: '#FFF5E5', border: '1px solid #E8C77F', padding: '15px 20px' }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: '#9A6700' }}>② 下面由 Excel 管理</div>
          <div style={{ marginTop: 5, fontSize: 23, lineHeight: 1.4 }}>
            自動顯示數字；點任一格會看到藍框與灰色公式，不能單獨修改。
          </div>
        </div>
        <div style={{ borderRadius: 18, background: '#EAF6EF', border: '2px solid #76B98E', padding: '16px 20px' }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: '#1F7A4B' }}>③ 來源表新增資料</div>
          <div style={{ marginTop: 5, fontSize: 23, lineHeight: 1.4 }}>
            這一串結果會自動變長，不用重新複製公式。
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: 20, borderRadius: 18, padding: '17px 28px', background: '#173B2B', color: '#FFFFFF', textAlign: 'center', fontSize: 31, fontWeight: 900 }}>
      一句話記住：第一格放公式，下面整串由 Excel 自動管理。
    </div>
    <PageFooter />
  </div>
);

const Part3SpillHash: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 成本與利潤</Eyebrow>
    <PageHeading>「#」的作用：讓目前庫存一次算完整欄</PageHeading>
    <p style={{ fontSize: 29, color: muted, margin: '10px 0 0' }}>
      沒有 # 只讀一格；加上 # 就會讀取「從這格開始的整段溢出資料」。
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: '610px 1fr', gap: 28, marginTop: 24, flex: 1, minHeight: 0 }}>
      <div style={{ borderRadius: 22, border: '2px solid #E0AAA0', background: '#FFF8F6', padding: 24, boxShadow: '0 12px 30px rgba(164,74,57,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 30, fontWeight: 900, color: '#A84235' }}>沒有 #：只算這一列</div>
          <div style={{ borderRadius: 999, background: '#F5DED8', color: '#A84235', padding: '7px 17px', fontSize: 22, fontWeight: 900 }}>單格計算</div>
        </div>
        <div style={{ marginTop: 18, borderRadius: 14, background: '#FFFFFF', border: '2px solid #D67F6D', padding: '15px 20px', fontFamily: 'monospace', fontSize: 31, fontWeight: 900, color: '#D92D20', textAlign: 'center' }}>
          =E2+F2-G2
        </div>

        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', border: '1px solid #D7DFE3' }}>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '12px 8px', fontSize: 21, fontWeight: 900, textAlign: 'center' }}>期初庫存</div>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '12px 8px', fontSize: 21, fontWeight: 900, textAlign: 'center', borderLeft: '1px solid #FFFFFF' }}>累計進貨</div>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '12px 8px', fontSize: 21, fontWeight: 900, textAlign: 'center', borderLeft: '1px solid #FFFFFF' }}>銷售消耗量</div>
          <div style={{ background: '#1F6F43', color: '#FFFFFF', padding: '12px 8px', fontSize: 21, fontWeight: 900, textAlign: 'center', borderLeft: '1px solid #FFFFFF' }}>目前庫存</div>

          <div style={{ background: '#FFFFFF', padding: '15px 8px', fontSize: 26, textAlign: 'center' }}>100</div>
          <div style={{ background: '#FFFFFF', padding: '15px 8px', fontSize: 26, textAlign: 'center', borderLeft: '1px solid #D7DFE3' }}>300</div>
          <div style={{ background: '#FFFFFF', padding: '15px 8px', fontSize: 26, textAlign: 'center', borderLeft: '1px solid #D7DFE3' }}>220</div>
          <div style={{ background: '#EAF6EF', padding: '15px 8px', fontSize: 28, fontWeight: 900, textAlign: 'center', borderLeft: '1px solid #A9D8BB' }}>180</div>

          <div style={{ gridColumn: '1 / 4', background: '#F4F6F7', padding: '15px 14px', fontSize: 24, color: muted, borderTop: '1px solid #D7DFE3' }}>下一列資料……</div>
          <div style={{ background: '#FFFFFF', padding: '15px 8px', fontSize: 28, fontWeight: 900, textAlign: 'center', color: '#B5502E', borderTop: '1px solid #D7DFE3', borderLeft: '1px solid #D7DFE3' }}>空白</div>
          <div style={{ gridColumn: '1 / 4', background: '#FFFFFF', padding: '15px 14px', fontSize: 24, color: muted, borderTop: '1px solid #D7DFE3' }}>新增一列資料……</div>
          <div style={{ background: '#FFFFFF', padding: '15px 8px', fontSize: 28, fontWeight: 900, textAlign: 'center', color: '#B5502E', borderTop: '1px solid #D7DFE3', borderLeft: '1px solid #D7DFE3' }}>空白</div>
        </div>

        <div style={{ marginTop: 22, borderRadius: 14, background: '#F5DED8', color: '#A84235', padding: '15px 18px', textAlign: 'center', fontSize: 26, fontWeight: 900 }}>
          還要下拉公式，下面才會計算
        </div>
      </div>

      <div style={{ borderRadius: 22, border: '3px solid #4C9A69', background: '#F3FBF6', padding: 24, boxShadow: '0 14px 34px rgba(45,126,76,0.12)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 30, fontWeight: 900, color: '#1F7A4B' }}>加上 #：整欄逐列計算</div>
          <div style={{ borderRadius: 999, background: '#DDF2E5', color: '#1F7A4B', padding: '7px 17px', fontSize: 22, fontWeight: 900 }}>自動延伸</div>
        </div>
        <div style={{ marginTop: 18, borderRadius: 14, background: '#FFFFFF', border: '3px solid #4C9A69', padding: '14px 20px', fontFamily: 'monospace', fontSize: 31, fontWeight: 900, color: '#D92D20', textAlign: 'center' }}>
          =E2#+F2#-G2#
        </div>

        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '0.8fr 1fr 1fr 1fr 1fr', border: '1px solid #BFD7C7' }}>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '10px 8px', fontSize: 20, fontWeight: 900, textAlign: 'center' }}>物料ID</div>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '10px 8px', fontSize: 20, fontWeight: 900, textAlign: 'center', borderLeft: '1px solid #FFFFFF' }}>期初庫存</div>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '10px 8px', fontSize: 20, fontWeight: 900, textAlign: 'center', borderLeft: '1px solid #FFFFFF' }}>累計進貨</div>
          <div style={{ background: '#1F4E78', color: '#FFFFFF', padding: '10px 8px', fontSize: 20, fontWeight: 900, textAlign: 'center', borderLeft: '1px solid #FFFFFF' }}>銷售消耗量</div>
          <div style={{ background: '#1F6F43', color: '#FFFFFF', padding: '10px 8px', fontSize: 20, fontWeight: 900, textAlign: 'center', borderLeft: '1px solid #FFFFFF' }}>目前庫存</div>

          <div style={{ padding: '10px 8px', fontSize: 22, background: '#FFFFFF' }}>M001</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#FFFFFF' }}>100</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#FFFFFF' }}>300</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#FFFFFF' }}>220</div>
          <div style={{ padding: '10px 8px', fontSize: 23, fontWeight: 900, textAlign: 'right', background: '#EAF6EF' }}>180</div>

          <div style={{ padding: '10px 8px', fontSize: 22, background: '#F6F8F9', borderTop: '1px solid #D7DFE3' }}>M002</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#F6F8F9', borderTop: '1px solid #D7DFE3' }}>20,000</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#F6F8F9', borderTop: '1px solid #D7DFE3' }}>4,500</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#F6F8F9', borderTop: '1px solid #D7DFE3' }}>18,000</div>
          <div style={{ padding: '10px 8px', fontSize: 23, fontWeight: 900, textAlign: 'right', background: '#E3F3E9', borderTop: '1px solid #BFD7C7' }}>6,500</div>

          <div style={{ padding: '10px 8px', fontSize: 22, background: '#FFFFFF', borderTop: '1px solid #D7DFE3' }}>M003</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#FFFFFF', borderTop: '1px solid #D7DFE3' }}>40</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#FFFFFF', borderTop: '1px solid #D7DFE3' }}>120</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#FFFFFF', borderTop: '1px solid #D7DFE3' }}>95</div>
          <div style={{ padding: '10px 8px', fontSize: 23, fontWeight: 900, textAlign: 'right', background: '#EAF6EF', borderTop: '1px solid #BFD7C7' }}>65</div>

          <div style={{ padding: '10px 8px', fontSize: 22, background: '#F6F8F9', borderTop: '1px solid #D7DFE3' }}>M005</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#F6F8F9', borderTop: '1px solid #D7DFE3' }}>500</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#F6F8F9', borderTop: '1px solid #D7DFE3' }}>0</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', background: '#F6F8F9', borderTop: '1px solid #D7DFE3' }}>620</div>
          <div style={{ padding: '10px 8px', fontSize: 23, fontWeight: 900, textAlign: 'right', color: '#B5502E', background: '#FFF0EC', borderTop: '1px solid #EDB9AB' }}>-120</div>

          <div style={{ padding: '10px 8px', fontSize: 22, fontWeight: 900, color: '#9A6700', background: '#FFF3D6', borderTop: '2px solid #E6B64E' }}>＋ M006</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', fontWeight: 900, color: '#9A6700', background: '#FFF3D6', borderTop: '2px solid #E6B64E' }}>200</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', fontWeight: 900, color: '#9A6700', background: '#FFF3D6', borderTop: '2px solid #E6B64E' }}>80</div>
          <div style={{ padding: '10px 8px', fontSize: 22, textAlign: 'right', fontWeight: 900, color: '#9A6700', background: '#FFF3D6', borderTop: '2px solid #E6B64E' }}>50</div>
          <div style={{ padding: '10px 8px', fontSize: 23, textAlign: 'right', fontWeight: 900, color: '#1F7A4B', background: '#DDF2E5', borderTop: '2px solid #E6B64E' }}>230</div>
        </div>

        <div style={{ marginTop: 16, borderRadius: 14, background: '#DDF2E5', color: '#1F7A4B', padding: '13px 18px', textAlign: 'center', fontSize: 25, fontWeight: 900 }}>
          新增 M006，結果 230 自動出現，不用下拉公式
        </div>
      </div>
    </div>

    <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
      <div style={{ borderRadius: 14, background: '#EAF3FF', padding: '14px 18px', fontSize: 23, textAlign: 'center' }}><b style={{ color: '#1859A8' }}>E2#</b>＝整段期初庫存</div>
      <div style={{ borderRadius: 14, background: '#EAF3FF', padding: '14px 18px', fontSize: 23, textAlign: 'center' }}><b style={{ color: '#1859A8' }}>F2#</b>＝整段累計進貨</div>
      <div style={{ borderRadius: 14, background: '#EAF3FF', padding: '14px 18px', fontSize: 23, textAlign: 'center' }}><b style={{ color: '#1859A8' }}>G2#</b>＝整段銷售消耗量</div>
    </div>
    <PageFooter />
  </div>
);

const Part3CostSetup: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.19-20</Eyebrow>
    <PageHeading>一、同一個商品，內用外帶算出的獲利不一樣</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 21：讓 AI 建立「商品成本」計算表</div>
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
        依 PROMPT 16 建立
      </span>
    </div>
    <div style={{ marginTop: 10 }}>
      <Steps>
        <Step>
          <div>
            <NotTableBadge text="商品ID 用 tbl_商品 整欄溢出，「營收毛利」也會依此查成本" />
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '0.8fr 1.1fr 0.7fr 0.9fr 0.9fr 0.9fr 1fr 0.9fr 1fr 0.7fr',
              }}
            >
              <BomHeaderCell label="商品ID" />
              <BomHeaderCell label="商品名稱" />
              <BomHeaderCell label="售價" />
              <BomHeaderCell label="單品成本" />
              <BomHeaderCell label="外帶成本" />
              <BomHeaderCell label="內用毛利" />
              <BomHeaderCell label="內用毛利率" />
              <BomHeaderCell label="外帶毛利" />
              <BomHeaderCell label="外帶毛利率" />
              <BomHeaderCell label="備註" />

              <BomCell value="P001" formula />
              <BomCell value="原味鍋貼" formula />
              <BomCell value="60" formula />
              <BomCell value="30" formula />
              <BomCell value="30" formula />
              <BomCell value="30" formula />
              <BomCell value="50%" formula />
              <BomCell value="30" formula />
              <BomCell value="50%" formula />
              <BomCell value="—" />

              <BomCell value="P002" formula band />
              <BomCell value="韓式泡菜鍋貼" formula band />
              <BomCell value="70" formula band />
              <BomCell value="42" formula band />
              <BomCell value="28" formula band />
              <BomCell value="28" formula band />
              <BomCell value="40%" formula band />
              <BomCell value="42" formula band />
              <BomCell value="60%" formula band />
              <BomCell value="僅內用附泡菜" band />

              <BomCell value="P003" formula />
              <BomCell value="玉米濃湯" formula />
              <BomCell value="45" formula />
              <BomCell value="15" formula />
              <BomCell value="20" formula />
              <BomCell value="30" formula />
              <BomCell value="67%" formula />
              <BomCell value="25" formula />
              <BomCell value="56%" formula />
              <BomCell value="外帶專屬紙盒" />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', gap: 32, marginTop: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 20, height: 20, borderRadius: 5, background: bomBlue, flexShrink: 0 }} />
              <span style={{ fontSize: 25 }}>公式／動態陣列溢出——整欄皆為計算結果，無須手動輸入</span>
            </div>
          </div>
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 25, color: muted, marginBottom: 6 }}>
              成本用「適用通路」判斷歸屬（不是物料分類＝包材），才能正確排除／納入外帶專屬料件與內用限定料件：
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 1fr',
                gap: 1,
                background: cardBorder,
                border: `1px solid ${cardBorder}`,
                borderRadius: 12,
                overflow: 'hidden',
                maxWidth: 640,
              }}
            >
              <MatrixHead>料件適用通路</MatrixHead>
              <MatrixHead>算入單品成本（內用）</MatrixHead>
              <MatrixHead>算入外帶成本</MatrixHead>
              <MatrixCell>僅內用</MatrixCell>
              <MatrixCell center><Check /></MatrixCell>
              <MatrixCell center><Cross /></MatrixCell>
              <MatrixCell>通用</MatrixCell>
              <MatrixCell center><Check /></MatrixCell>
              <MatrixCell center><Check /></MatrixCell>
              <MatrixCell>僅外帶</MatrixCell>
              <MatrixCell center><Cross /></MatrixCell>
              <MatrixCell center><Check /></MatrixCell>
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 25, color: muted, marginTop: 8 }}>{''}</div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 7b — 十一、新增「庫存管理」計算表 ───────────────────────────────────
const Part3InventorySetup: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.20</Eyebrow>
    <PageHeading>二、庫存不用兜帳，公式自動幫你算好</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 22：讓 AI 建立「庫存管理」計算表</div>
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
        依 PROMPT 17 建立
      </span>
    </div>
    <div style={{ marginTop: 10 }}>
      <Steps>
        <Step>
          <div>
            <NotTableBadge text="前 5 欄各自整欄結構化參照溢出，轉表格會與範圍衝突" />
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '0.7fr 0.9fr 0.8fr 0.7fr 0.8fr 0.8fr 0.9fr 0.8fr 0.8fr 0.9fr 1fr 0.9fr 0.8fr',
              }}
            >
              <BomHeaderCell small label="物料ID" />
              <BomHeaderCell small label="物料名稱" />
              <BomHeaderCell small label="物料分類" />
              <BomHeaderCell small label="庫存單位" />
              <BomHeaderCell small label="期初庫存" />
              <BomHeaderCell small label="累計進貨" />
              <BomHeaderCell small label="銷售消耗量" />
              <BomHeaderCell small label="目前庫存" />
              <BomHeaderCell small label="安全庫存" />
              <BomHeaderCell small label="建議補貨量" />
              <BomHeaderCell small label="庫存狀態" />
              <BomHeaderCell small label="主要供應商" />
              <BomHeaderCell small label="通知狀態" />

              <BomCell small value="M001" formula />
              <BomCell small value="麵皮" formula />
              <BomCell small value="皮類" formula />
              <BomCell small value="張" formula />
              <BomCell small value="100" formula />
              <BomCell small value="50" formula />
              <BomCell small value="45" formula />
              <BomCell small value="105" formula />
              <BomCell small value="80" formula />
              <BomCell small value="0" formula />
              <BomCell small value="正常" formula />
              <BomCell small value="麵皮行" formula />
              <BomCell small value="不通知" formula />

              <BomCell small value="M002" formula band />
              <BomCell small value="豬絞肉" formula band />
              <BomCell small value="肉類" formula band />
              <BomCell small value="克" formula band />
              <BomCell small value="20000" formula band />
              <BomCell small value="4500" formula band />
              <BomCell small value="18000" formula band />
              <BomCell small value="6500" formula band />
              <BomCell small value="8000" formula band />
              <BomCell small value="5000" formula band />
              <BomCell small value="低於安全庫存" formula band />
              <BomCell small value="肉品商" formula band />
              <BomCell small value="待通知" formula band />

              <BomCell small value="M005" formula />
              <BomCell small value="外帶紙盒" formula />
              <BomCell small value="包材" formula />
              <BomCell small value="個" formula />
              <BomCell small value="500" formula />
              <BomCell small value="0" formula />
              <BomCell small value="620" formula />
              <BomCell small value="-120" formula />
              <BomCell small value="200" formula />
              <BomCell small value="800" formula />
              <BomCell small value="缺料" formula />
              <BomCell small value="包材行" formula />
              <BomCell small value="待通知" formula />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', gap: 32, marginTop: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 20, height: 20, borderRadius: 5, background: bomBlue, flexShrink: 0 }} />
              <span style={{ fontSize: 25 }}>公式／動態陣列溢出——全表皆為計算結果，無須手動輸入</span>
            </div>
          </div>
          <div style={{ marginTop: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <FlowChip label="商品配方BOM［每份用量］" color={taskColor} />
              <FlowArrow />
              <FlowChip label="× 銷售紀錄［銷售數量］" color={taskColor} />
              <FlowArrow />
              <FlowChip label="Σ 加總＝銷售消耗量" color={taskColor} />
            </div>
            <div style={{ fontSize: 25, color: muted, marginTop: 6, marginBottom: 6 }}>
              「僅外帶」包材只計非內用銷售，避免內用成本被高估：
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 1.3fr',
                gap: 1,
                background: cardBorder,
                border: `1px solid ${cardBorder}`,
                borderRadius: 12,
                overflow: 'hidden',
                maxWidth: 640,
              }}
            >
              <MatrixHead>料件適用通路</MatrixHead>
              <MatrixHead>算入內用銷售</MatrixHead>
              <MatrixHead>算入外帶等非內用銷售</MatrixHead>
              <MatrixCell>僅內用</MatrixCell>
              <MatrixCell center><Check /></MatrixCell>
              <MatrixCell center><Cross /></MatrixCell>
              <MatrixCell>通用</MatrixCell>
              <MatrixCell center><Check /></MatrixCell>
              <MatrixCell center><Check /></MatrixCell>
              <MatrixCell>僅外帶</MatrixCell>
              <MatrixCell center><Cross /></MatrixCell>
              <MatrixCell center><Check /></MatrixCell>
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 25, color: muted, marginTop: 8 }}>{''}</div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 7c — 十二、新增「營收毛利」計算表 ───────────────────────────────────
const Part3RevenueSetup: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.22</Eyebrow>
    <PageHeading>三、每一筆銷售，自動算出賺多少</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 23：讓 AI 建立「營收毛利」計算表</div>
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
        依 PROMPT 18 建立
      </span>
    </div>
    <div style={{ marginTop: 10 }}>
      <Steps>
        <Step>
          <div>
            <NotTableBadge text="各欄皆為 tbl_銷售 整欄溢出＋輔助清單，轉表格會打斷動態陣列" />
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '0.9fr 1fr 0.7fr 1.1fr 0.8fr 0.8fr 0.9fr 0.9fr 0.9fr 0.7fr 0.8fr 0.9fr',
              }}
            >
              <BomHeaderCell small label="銷售日期" />
              <BomHeaderCell small label="訂單編號" />
              <BomHeaderCell small label="商品ID" />
              <BomHeaderCell small label="商品名稱" />
              <BomHeaderCell small label="商品分類" />
              <BomHeaderCell small label="銷售數量" />
              <BomHeaderCell small label="銷售金額" />
              <BomHeaderCell small label="單品成本" />
              <BomHeaderCell small label="銷售成本" />
              <BomHeaderCell small label="毛利" />
              <BomHeaderCell small label="毛利率" />
              <BomHeaderCell small label="銷售通路" />

              <BomCell small value="2026/6/1" formula />
              <BomCell small value="O20260601001" formula />
              <BomCell small value="P001" formula />
              <BomCell small value="原味鍋貼" formula />
              <BomCell small value="鍋貼類" formula />
              <BomCell small value="5" formula />
              <BomCell small value="300" formula />
              <BomCell small value="30" formula />
              <BomCell small value="150" formula />
              <BomCell small value="150" formula />
              <BomCell small value="50%" formula />
              <BomCell small value="內用" formula />

              <BomCell small value="2026/6/1" formula band />
              <BomCell small value="O20260601002" formula band />
              <BomCell small value="P002" formula band />
              <BomCell small value="韓式泡菜鍋貼" formula band />
              <BomCell small value="鍋貼類" formula band />
              <BomCell small value="3" formula band />
              <BomCell small value="200" formula band />
              <BomCell small value="28" formula band />
              <BomCell small value="84" formula band />
              <BomCell small value="116" formula band />
              <BomCell small value="58%" formula band />
              <BomCell small value="外帶" formula band />

              <BomCell small value="2026/6/2" formula />
              <BomCell small value="O20260602001" formula />
              <BomCell small value="P003" formula />
              <BomCell small value="玉米濃湯" formula />
              <BomCell small value="湯品類" formula />
              <BomCell small value="8" formula />
              <BomCell small value="360" formula />
              <BomCell small value="20" formula />
              <BomCell small value="160" formula />
              <BomCell small value="200" formula />
              <BomCell small value="56%" formula />
              <BomCell small value="外送平台" formula />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', gap: 32, marginTop: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 20, height: 20, borderRadius: 5, background: bomBlue, flexShrink: 0 }} />
              <span style={{ fontSize: 25 }}>公式／動態陣列溢出——單品成本依銷售通路取「商品成本」內用或外帶欄位</span>
            </div>
          </div>
          <div style={{ marginTop: 8 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.6fr',
                gap: 1,
                background: cardBorder,
                border: `1px solid ${cardBorder}`,
                borderRadius: 12,
                overflow: 'hidden',
                maxWidth: 640,
              }}
            >
              <MatrixHead>銷售通路</MatrixHead>
              <MatrixHead>單品成本來源</MatrixHead>
              <MatrixCell>內用</MatrixCell>
              <MatrixCell>
                <span style={{ color: bomBlue, fontWeight: 700 }}>商品成本［單品成本］</span>
              </MatrixCell>
              <MatrixCell>內用以外（外帶等）</MatrixCell>
              <MatrixCell>
                <span style={{ color: bomBlue, fontWeight: 700 }}>商品成本［外帶成本］</span>
              </MatrixCell>
            </div>
          </div>
          <div style={{ fontSize: 25, color: muted, marginTop: 8, lineHeight: 1.5 }}>
            另有 4 個輔助欄——篩選遮罩、年／月／日清單：依「儀表板」下拉即時算 1／0 與萃取不重複清單，供彙總與下拉使用。
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 25, color: muted, marginTop: 6 }}>完成後請驗證：無 #N/A、遮罩與清單能隨資料更新。</div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

const Part3CostGuide: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.19</Eyebrow>
    <PageHeading>一、每份商品的成本，從 BOM 自動算出來</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={productCostGuide}
        alt="商品成本教學圖：BOM、原料成本與適用通路共同算出內用及外帶成本"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

const Part3InventoryGuide: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.20</Eyebrow>
    <PageHeading>二、庫存不用兜帳，公式自動幫你算好</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={inventoryManagementGuide}
        alt="庫存管理教學圖：期初庫存加進貨減銷售消耗，得到目前庫存與建議補貨量"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

const Part3RevenueGuide: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.22</Eyebrow>
    <PageHeading>三、每一筆銷售，自動算出賺多少</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={revenueMarginGuide}
        alt="營收毛利教學圖：銷售金額、單品成本、銷售成本、毛利與毛利率自動計算"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

const Part3CostTableGuide: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 真實表格對照</Eyebrow>
    <PageHeading>商品成本：概念怎麼落到 Excel 欄位</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={productCostTableGuide}
        alt="真實商品成本表格：內用與外帶成本、毛利及毛利率公式結果"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

const Part3InventoryTableGuide: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 真實表格對照</Eyebrow>
    <PageHeading>庫存管理：概念怎麼落到 Excel 欄位</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={inventoryTableGuide}
        alt="真實庫存管理表格：目前庫存、安全庫存、補貨量與庫存狀態"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

const Part3RevenueTableGuide: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 真實表格對照</Eyebrow>
    <PageHeading>營收毛利：概念怎麼落到 Excel 欄位</PageHeading>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={revenueMarginTableGuide}
        alt="真實營收毛利表格：銷售金額、單品成本、銷售成本、毛利與毛利率"
        style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 8 — Part 3b：格式規則 ───────────────────────────────────────────────
const FormatExampleRow = ({
  icon,
  label,
  example,
  note,
  accent,
  underline,
}: {
  icon: string;
  label: string;
  example: React.ReactNode;
  note: string;
  accent: string;
  underline?: boolean;
}) => (
  <div
    style={{
      minHeight: 92,
      display: 'grid',
      gridTemplateColumns: '74px 280px 390px 1fr',
      alignItems: 'center',
      borderTop: '1px solid #DCE3EA',
      background: '#FFFFFF',
    }}
  >
    <div
      style={{
        width: 48,
        height: 48,
        marginLeft: 14,
        borderRadius: 14,
        background: `${accent}18`,
        color: accent,
        fontSize: 27,
        fontWeight: 900,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </div>
    <div style={{ fontSize: 30, fontWeight: 800 }}>{label}</div>
    <div
      style={{
        width: 340,
        minHeight: 56,
        padding: '8px 18px',
        border: '2px solid #9FB6CC',
        background: '#F8FBFD',
        fontSize: 31,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textDecoration: underline ? 'underline' : undefined,
        textUnderlineOffset: underline ? 5 : undefined,
      }}
    >
      {example}
    </div>
    <div style={{ fontSize: 28, color: muted }}>{note}</div>
  </div>
);

const Part3FormatRules: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 成本與利潤</Eyebrow>
    <PageHeading>格式規則：同一種資料，就用同一種樣子</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 12 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 24：讓 AI 套用一致的儲存格格式</div>
      <span style={{ fontSize: 25, fontWeight: 800, color: taskColor, background: `${taskColor}14`, borderRadius: 999, padding: '5px 14px' }}>
        依 PROMPT 19 建立
      </span>
    </div>
    <p style={{ fontSize: 29, color: muted, margin: '10px 0 18px' }}>
      不必讀公式，光看儲存格的樣子，就知道它是選項、計算結果、金額、日期或比例。
    </p>
    <div style={{ border: '1px solid #D7DEE5', borderRadius: 18, overflow: 'hidden', boxShadow: '0 12px 32px rgba(32,52,68,0.08)' }}>
      <div style={{ height: 54, background: '#1F6F43', color: '#FFFFFF', display: 'flex', alignItems: 'center', padding: '0 24px', gap: 12 }}>
        <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#FFCC66' }} />
        <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#E7F0EA' }} />
        <span style={{ fontSize: 25, fontWeight: 800, marginLeft: 10 }}>格式規則預覽.xlsx</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '74px 280px 390px 1fr', alignItems: 'center', minHeight: 54, background: '#EAF1F7', color: '#3C5266', fontSize: 25, fontWeight: 800 }}>
        <div />
        <div>資料類型</div>
        <div>Excel 顯示</div>
        <div>看懂規則</div>
      </div>
      <FormatExampleRow icon="▼" label="下拉儲存格" example={<><span>外帶</span><span style={{ color: '#70777E' }}>▼</span></>} note="加上字型底線" accent="#5E7A2F" underline />
      <FormatExampleRow icon="fx" label="公式儲存格" example={<span style={{ color: bomBlue }}>=D9*F9</span>} note="字型色彩 #3072C2" accent={bomBlue} />
      <FormatExampleRow icon="$" label="金額儲存格" example="$1,234" note="貨幣格式、整數" accent="#C58A24" />
      <FormatExampleRow icon="日" label="日期儲存格" example="2026/06/05" note="YYYY/MM/DD" accent="#4D7B91" />
      <FormatExampleRow icon="%" label="毛利率儲存格" example="65%" note="百分比格式" accent="#A44A69" />
    </div>
    <PageFooter />
  </div>
);

const TabGroupLabel = ({ n, title, detail, color }: { n: string; title: string; detail: string; color: string }) => (
  <div style={{ flex: 1, minWidth: 0, borderTop: `8px solid ${color}`, background: '#FFFFFF', borderRadius: 14, padding: '18px 20px', boxShadow: '0 8px 22px rgba(32,52,68,0.07)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 42, height: 42, borderRadius: '50%', background: color, color: '#FFFFFF', fontSize: 25, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</div>
      <div style={{ fontSize: 31, fontWeight: 900 }}>{title}</div>
    </div>
    <div style={{ fontSize: 24, color: muted, marginTop: 10, lineHeight: 1.4 }}>{detail}</div>
  </div>
);

const SheetTab = ({ label, color }: { label: string; color: string }) => (
  <div
    style={{
      height: 58,
      padding: '0 18px',
      borderRadius: '12px 12px 0 0',
      border: '1px solid #D9DDD8',
      borderBottom: `7px solid ${color}`,
      background: '#FFFFFF',
      fontSize: 22,
      fontWeight: 800,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {label}
  </div>
);

const Part3TabOrder: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p3}>PART 3 · 成本與利潤</Eyebrow>
    <PageHeading>頁籤順序與顏色：先分類，再固定位置</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 12 }}>任務 24：讓 AI 整理工作表頁籤</div>
    <p style={{ fontSize: 29, color: muted, margin: '10px 0 22px' }}>
      開檔後由左到右閱讀：先設定、再查主檔、接著輸入交易，最後看計算結果。
    </p>
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 16 }}>
      <TabGroupLabel n="1" title="設定" detail="流程架構／設定選單" color="#9AA0A6" />
      <div style={{ fontSize: 42, color: '#B8B9B5', display: 'flex', alignItems: 'center' }}>›</div>
      <TabGroupLabel n="2" title="主檔" detail="商品／供應商／原物料／BOM" color={partColor.p4} />
      <div style={{ fontSize: 42, color: '#B8B9B5', display: 'flex', alignItems: 'center' }}>›</div>
      <TabGroupLabel n="3" title="交易" detail="銷售／進貨" color={partColor.p2} />
      <div style={{ fontSize: 42, color: '#B8B9B5', display: 'flex', alignItems: 'center' }}>›</div>
      <TabGroupLabel n="4" title="計算" detail="商品成本／庫存／營收毛利" color="#D08A34" />
    </div>
    <div style={{ marginTop: 30, border: '1px solid #D7DEE5', borderRadius: 18, overflow: 'hidden', background: '#FFFFFF', boxShadow: '0 12px 32px rgba(32,52,68,0.08)' }}>
      <div style={{ height: 64, background: '#1F6F43', color: '#FFFFFF', display: 'flex', alignItems: 'center', padding: '0 24px', fontSize: 26, fontWeight: 800 }}>
        AI Excel 課程－營業用表格
      </div>
      <div
        style={{
          height: 210,
          backgroundImage: 'linear-gradient(#E5EBEE 1px, transparent 1px), linear-gradient(90deg, #E5EBEE 1px, transparent 1px)',
          backgroundSize: '82px 42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ background: '#FFFFFFE8', border: '1px solid #DCE2E5', borderRadius: 14, padding: '18px 28px', fontSize: 29, fontWeight: 800, color: '#486156' }}>
          顏色看分類，位置看流程
        </div>
      </div>
      <div style={{ minHeight: 128, padding: '22px 20px 0', background: '#F2F3F0', display: 'flex', gap: 6, alignItems: 'flex-end', overflow: 'hidden' }}>
        <SheetTab label="流程架構" color="#9AA0A6" />
        <SheetTab label="設定選單" color="#9AA0A6" />
        <SheetTab label="商品主檔" color={partColor.p4} />
        <SheetTab label="供應商主檔" color={partColor.p4} />
        <SheetTab label="原物料主檔" color={partColor.p4} />
        <SheetTab label="商品配方BOM" color={partColor.p4} />
        <SheetTab label="銷售紀錄" color={partColor.p2} />
        <SheetTab label="進貨紀錄" color={partColor.p2} />
        <SheetTab label="商品成本" color="#D08A34" />
        <SheetTab label="庫存管理" color="#D08A34" />
        <SheetTab label="營收毛利" color="#D08A34" />
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — numbered rank badge for dashboard ranking lists ────────────────
const RankBadge = ({ n, color }: { n: number; color: string }) => (
  <div
    style={{
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: color,
      color: '#fff',
      fontSize: 25,
      fontWeight: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    {n}
  </div>
);

const FlowChip = ({ label, color }: { label: string; color: string }) => (
  <div
    style={{
      fontSize: 25,
      fontWeight: 800,
      color,
      background: `${color}14`,
      border: `1px solid ${color}44`,
      borderRadius: 10,
      padding: '10px 18px',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </div>
);

const FlowArrow = () => <span style={{ fontSize: 32, color: muted }}>→</span>;

// ─── Page 9a — 十三、篩選一按，儀表板全部指標跟著動 ────────────────────────────
const Part4DashboardSetup: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={partColor.p4}>PART 4 · 儀表板</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.23</Eyebrow>
    </div>
    <PageHeading>篩選一按，儀表板全部指標跟著動</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 25：讓 AI 建立「儀表板」工作表</div>
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
        依 PROMPT 20 建立
      </span>
    </div>
    <div style={{ marginTop: 22 }}>
      <Steps>
        <Step>
          <Callout color={taskColor}>
            白話文：三個下拉選「年／月／日」，「營收毛利」表裡的<b>篩選遮罩</b>欄就對每一筆銷售算出
            1（符合）或 0（不符合）；儀表板每個指標都用這欄遮罩去加總，篩選一換，指標全部自動跟著變。
          </Callout>
        </Step>
        <Step>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
            <FlowChip label="① 年／月／日 下拉" color={partColor.p4} />
            <FlowArrow />
            <FlowChip label="② 營收毛利［篩選遮罩］→ 1／0" color={partColor.p4} />
            <FlowArrow />
            <FlowChip label="③ SUMPRODUCT(遮罩 × 數值)" color={partColor.p4} />
            <FlowArrow />
            <FlowChip label="④ KPI 即時更新" color={partColor.p4} />
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 30, fontWeight: 800, marginTop: 34 }}>① 核心指標（KPI）</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 18, marginTop: 16 }}>
            <KpiTile color={partColor.p4} label="營業額" hint="Σ(遮罩 × 銷售金額)" />
            <KpiTile color={partColor.p4} label="總毛利" hint="Σ(遮罩 × 毛利)" />
            <KpiTile color={partColor.p4} label="平均毛利率" hint="IFERROR(總毛利÷營業額,0)" />
            <KpiTile color={partColor.p4} label="來客數" hint="篩選後不重複訂單編號數" />
            <KpiTile color={partColor.p4} label="銷售數量" hint="Σ(遮罩 × 數量)" />
            <KpiTile color={partColor.p4} label="客單價" hint="IFERROR(營業額÷來客數,0)" />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 9b — 十四、AI 幫你排出商品排行榜與通路熱區 ──────────────────────────
const Part4DashboardRanking: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.24</Eyebrow>
    <PageHeading>AI 幫你排出商品排行榜與通路熱區</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 24 }}>
      任務 25（續）：② 商品銷售排行 ／ ③ 通路別分析
    </div>
    <div style={{ marginTop: 20 }}>
      <Steps>
        <Step>
          <Callout color={taskColor}>白話文：不是手動排序，是用 動態陣列 公式依目前篩選結果自動彙總、排名——資料一變、排行榜跟著換。</Callout>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 32, marginTop: 24 }}>
            <div style={{ border: `1px solid ${cardBorder}`, borderRadius: 16, padding: '20px 24px', background: cardBg }}>
              <div style={{ fontSize: 34, fontWeight: 800, marginBottom: 14 }}>② 商品銷售排行 Top 5</div>
              {[
                { name: '原味鍋貼', qty: '86', amt: '5,160', margin: '50%' },
                { name: '韓式泡菜鍋貼', qty: '54', amt: '3,780', margin: '58%' },
                { name: '玉米濃湯', qty: '47', amt: '2,115', margin: '56%' },
                { name: '古早味紅茶', qty: '39', amt: '975', margin: '62%' },
                { name: '肉燥飯', qty: '31', amt: '2,480', margin: '45%' },
              ].map((row, i) => (
                <div
                  key={row.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '9px 0',
                    borderTop: i === 0 ? 'none' : `1px solid ${cardBorder}`,
                  }}
                >
                  <RankBadge n={i + 1} color={partColor.p4} />
                  <span style={{ fontSize: 25, fontWeight: 700, flex: 1 }}>{row.name}</span>
                  <span style={{ fontSize: 25, color: muted, width: 64, textAlign: 'right' }}>{row.qty} 份</span>
                  <span style={{ fontSize: 25, color: bomBlue, fontWeight: 700, width: 84, textAlign: 'right' }}>
                    ${row.amt}
                  </span>
                  <span style={{ fontSize: 25, color: muted, width: 56, textAlign: 'right' }}>{row.margin}</span>
                </div>
              ))}
            </div>
            <div style={{ border: `1px solid ${cardBorder}`, borderRadius: 16, padding: '20px 24px', background: cardBg }}>
              <div style={{ fontSize: 34, fontWeight: 800, marginBottom: 14 }}>③ 通路別分析 Top 3</div>
              {[
                { name: '內用', orders: '128', amt: '18,400', pct: 46 },
                { name: '外帶', orders: '96', amt: '13,200', pct: 33 },
                { name: '外送平台', orders: '52', amt: '7,900', pct: 21 },
              ].map((row, i) => (
                <div key={row.name} style={{ padding: '10px 0', borderTop: i === 0 ? 'none' : `1px solid ${cardBorder}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <RankBadge n={i + 1} color={partColor.p4} />
                    <span style={{ fontSize: 25, fontWeight: 700, flex: 1 }}>{row.name}</span>
                    <span style={{ fontSize: 25, color: muted }}>{row.orders} 單</span>
                    <span style={{ fontSize: 25, color: bomBlue, fontWeight: 700, width: 84, textAlign: 'right' }}>
                      ${row.amt}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
                    <div style={{ flex: 1, height: 8, borderRadius: 4, background: `${partColor.p4}18`, overflow: 'hidden' }}>
                      <div style={{ width: `${row.pct}%`, height: '100%', background: partColor.p4 }} />
                    </div>
                    <span style={{ fontSize: 25, color: muted, width: 40 }}>{row.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 9c — 十五、庫存燈號 + 練習：讓下拉自己連動縮小選項 ──────────────────
const Part4DashboardInventoryDrill: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.24-25</Eyebrow>
    <PageHeading>庫存燈號一看就懂，下拉還能連動</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 24 }}>
      任務 25（續）：④ 庫存重點 ＋ 練習：連動篩選
    </div>
    <div style={{ marginTop: 18 }}>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <KpiTile color={taskColor} label="總品項數" hint="COUNTA(物料ID)" />
            <KpiTile color="#1F7A4B" label="正常" hint="COUNTIF(庫存狀態,「正常」)" />
            <KpiTile color="#C0902E" label="低於安全庫存" hint="COUNTIF(庫存狀態,「低於安全庫存」)" />
            <KpiTile color={painRed} label="缺料" hint="COUNTIF(庫存狀態,「缺料」)" />
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 25, fontWeight: 800, marginBottom: 10 }}>
              FILTER 動態列出「低於安全庫存或缺料」品項
            </div>
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '0.7fr 0.9fr 0.8fr 0.8fr 0.8fr 0.9fr 1fr 0.8fr',
              }}
            >
              <BomHeaderCell small label="物料ID" />
              <BomHeaderCell small label="物料名稱" />
              <BomHeaderCell small label="物料分類" />
              <BomHeaderCell small label="目前庫存" />
              <BomHeaderCell small label="安全庫存" />
              <BomHeaderCell small label="建議補貨量" />
              <BomHeaderCell small label="庫存狀態" />
              <BomHeaderCell small label="主要供應商" />

              <BomCell small value="M002" formula />
              <BomCell small value="豬絞肉" formula />
              <BomCell small value="肉類" formula />
              <BomCell small value="6500" formula />
              <BomCell small value="8000" formula />
              <BomCell small value="5000" formula />
              <BomCell small value="低於安全庫存" formula />
              <BomCell small value="肉品商" formula />

              <BomCell small value="M005" formula band />
              <BomCell small value="外帶紙盒" formula band />
              <BomCell small value="包材" formula band />
              <BomCell small value="-120" formula band />
              <BomCell small value="200" formula band />
              <BomCell small value="800" formula band />
              <BomCell small value="缺料" formula band />
              <BomCell small value="包材行" formula band />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 25, color: muted, marginTop: 20 }}>
            完成後請驗證：篩選切換時指標會連動、無 #REF!／#DIV/0!。
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — formula-glossary building blocks ───────────────────────────────
const FuncCard = ({
  color,
  name,
  tagline,
  children,
}: {
  color: string;
  name: string;
  tagline: string;
  children: React.ReactNode;
}) => (
  <div
    style={{
      border: `1px solid ${cardBorder}`,
      borderTop: `5px solid ${color}`,
      borderRadius: 16,
      padding: '20px 24px',
      background: cardBg,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 190,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
      <span style={{ fontFamily: 'monospace', fontSize: 31, fontWeight: 800, color }}>{name}</span>
      <span style={{ fontSize: 25, fontWeight: 700, color: 'var(--osd-text)' }}>{tagline}</span>
    </div>
    {children}
  </div>
);

const GlossaryChip = ({ children, dim, color }: { children: React.ReactNode; dim?: boolean; color?: string }) => (
  <span
    style={{
      display: 'inline-flex',
      fontSize: 25,
      fontWeight: 700,
      padding: '5px 12px',
      borderRadius: 999,
      background: dim ? `${muted}14` : `${color}1C`,
      color: dim ? muted : color,
      textDecoration: dim ? 'line-through' : 'none',
    }}
  >
    {children}
  </span>
);

// ─── Page 9d — 小提醒：UNIQUE／FILTER／SORTBY／LET 快速理解 ───────────────────
const Part4DashboardGlossary: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p4}>小提醒 · 公式名詞快速理解</Eyebrow>
    <PageHeading>看到 UNIQUE／FILTER／SORTBY／LET 不再霧煞煞</PageHeading>
    <p style={{ fontSize: 34, color: muted, margin: '18px 0 0' }}>先用生活例子理解，之後在 Prompt 裡看到這些名稱就不會霧煞煞。</p>
    <div style={{ marginTop: 24 }}>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            <FuncCard color={partColor.p1} name="UNIQUE" tagline="找不重複的名單">
              <div style={{ fontSize: 25, color: muted }}>30 筆點心紀錄，種類只有 3 種：</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                <GlossaryChip dim>布丁</GlossaryChip>
                <GlossaryChip dim>布丁</GlossaryChip>
                <GlossaryChip dim>餅乾</GlossaryChip>
                <GlossaryChip dim>布丁</GlossaryChip>
                <GlossaryChip dim>糖果</GlossaryChip>
                <GlossaryChip dim>餅乾</GlossaryChip>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FlowArrow />
                <GlossaryChip color={partColor.p1}>布丁</GlossaryChip>
                <GlossaryChip color={partColor.p1}>餅乾</GlossaryChip>
                <GlossaryChip color={partColor.p1}>糖果</GlossaryChip>
              </div>
            </FuncCard>

            <FuncCard color={partColor.p2} name="FILTER" tagline="篩出符合條件的資料">
              <div style={{ fontSize: 25, color: muted }}>只想看「喜歡布丁」的同學：</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 25 }}>
                  <Check /><span>小明 — 布丁</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 25, color: muted, textDecoration: 'line-through' }}>
                  <Cross /><span>小華 — 餅乾</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 25 }}>
                  <Check /><span>小美 — 布丁</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 25, color: muted, textDecoration: 'line-through' }}>
                  <Cross /><span>阿凱 — 糖果</span>
                </div>
              </div>
            </FuncCard>

            <FuncCard color={partColor.p3} name="SORTBY" tagline="依某一欄排序">
              <div style={{ fontSize: 25, color: muted }}>依「買的數量」由多排到少：</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
                {[
                  { label: '布丁', pct: 100 },
                  { label: '餅乾', pct: 65 },
                  { label: '糖果', pct: 35 },
                ].map((row) => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 25, width: 36 }}>{row.label}</span>
                    <div style={{ flex: 1, height: 12, borderRadius: 6, background: `${partColor.p3}18`, overflow: 'hidden' }}>
                      <div style={{ width: `${row.pct}%`, height: '100%', background: partColor.p3 }} />
                    </div>
                  </div>
                ))}
              </div>
            </FuncCard>

            <FuncCard color={partColor.p5} name="LET" tagline="算式先取名字">
              <div style={{ fontSize: 25, color: muted }}>同一段算式不用複製貼上好幾次：</div>
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: 25,
                  color: muted,
                  background: `${muted}0D`,
                  borderRadius: 8,
                  padding: '6px 10px',
                  textDecoration: 'line-through',
                }}
              >
                SUMIFS(...)+SUMIFS(...)+SUMIFS(...)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FlowArrow />
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 25,
                    fontWeight: 700,
                    color: partColor.p5,
                    background: `${partColor.p5}14`,
                    borderRadius: 8,
                    padding: '6px 10px',
                  }}
                >
                  LET(小計,SUMIFS(...),小計+小計)
                </div>
              </div>
            </FuncCard>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 32 }}>
            <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 14 }}>串起來看：排行、清單為什麼能自動更新</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <FlowChip label="FILTER 挑出符合條件的資料" color={partColor.p2} />
              <FlowArrow />
              <FlowChip label="SORTBY 依毛利率／銷量排序" color={partColor.p3} />
              <FlowArrow />
              <FlowChip label="UNIQUE 抓出不重複的商品清單" color={partColor.p1} />
              <FlowArrow />
              <FlowChip label="LET 命名、串起中間步驟" color={partColor.p5} />
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — cascading-filter example card ──────────────────────────────────
const CascadeExampleCard = ({ month, day }: { month: string; day: string }) => (
  <div style={{ border: `1px solid ${cardBorder}`, borderRadius: 14, padding: '22px 26px', background: cardBg }}>
    <div style={{ fontSize: 25, color: muted, marginBottom: 6 }}>選擇月份</div>
    <div style={{ fontSize: 30, fontWeight: 800, color: taskColor }}>{month}</div>
    <div style={{ height: 1, background: cardBorder, margin: '16px 0' }} />
    <div style={{ fontSize: 25, color: muted, marginBottom: 10 }}>日期下拉只會出現</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <Check />
      <span style={{ fontSize: 31, fontWeight: 800 }}>{day}</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
      <Cross />
      <span style={{ fontSize: 25, color: muted }}>其餘日期（無資料，不會列出）</span>
    </div>
  </div>
);

// ─── Page 9d — 十六、下拉選單也要「連動」，才不會選到空清單 ──────────────────
const Part4DashboardCascade: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.25</Eyebrow>
    <PageHeading>下拉選單也要「連動」，才不會選到空清單</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 26：讓 AI 幫你把下拉選單自動「連動」</div>
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
        PROMPT 20 練習延伸
      </span>
    </div>
    <div style={{ marginTop: 20 }}>
      <Steps>
        <Step>
          <Callout color={taskColor}>白話文：原本三個下拉互不相干，選了年，月份下拉還是列出 1～12 月，選到根本沒資料的月份。用UNIQUE、FILTER、SORTBY、LET把清單改成「依上層選擇即時縮小」，下層永遠只列出真的有資料的選項。</Callout>
        </Step>
        <Step>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
            <FlowChip label="年下拉：UNIQUE(銷售日期年份)" color={taskColor} />
            <FlowArrow />
            <FlowChip label="月下拉：FILTER(月清單, 年=已選年)" color={taskColor} />
            <FlowArrow />
            <FlowChip label="日下拉：FILTER(日清單, 月=已選月)" color={taskColor} />
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 30 }}>
            <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>舉例：銷售日期只有 5/1、6/2 兩筆資料</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, maxWidth: 900 }}>
              <CascadeExampleCard month="5 月" day="1 號" />
              <CascadeExampleCard month="6 月" day="2 號" />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 25, color: muted, marginTop: 24 }}>
            完成後請驗證：切換年／月後，下層下拉不會出現該範圍內根本沒有資料的選項。
          </div>
        </Step>
      </Steps>
    </div>
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
    <Eyebrow color={partColor.p6}>PART 5 · Excel X VBA與巨集</Eyebrow>
    <PageHeading>在 Excel 裡，按一個鈕跑完一整段工作</PageHeading>
    <div style={{ marginTop: 26 }}>
      <Steps>
        <Step>
          <div
            style={{
              background: `${partColor.p6}0D`,
              border: `1px solid ${partColor.p6}33`,
              borderLeft: `4px solid ${partColor.p6}`,
              borderRadius: 12,
              padding: '18px 26px',
            }}
          >
            <div style={{ fontSize: 31, fontWeight: 800, color: partColor.p6, marginBottom: 6 }}>什麼是 VBA？</div>
            <div style={{ fontSize: 25, lineHeight: 1.55 }}>
              VBA（Visual Basic for Applications）是內建在 Excel
              裡的程式語言，把「點選、篩選、複製貼上、存檔」這些重複性操作寫成一段程式，按一個按鈕就自動跑完——且能在
              Excel 本地端離線執行，不需要網路。你不必自己寫程式：把「需求 prompt」貼給 AI，讓它產出 VBA，再貼回
              Excel 執行即可。
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 22 }}>
      <Steps>
        <Step>
          <Callout color={partColor.p6}>
            講得越清楚，AI 寫出來的巨集越好用——模糊的一句話 vs. 講清楚的 Prompt，結果差很多。
          </Callout>
        </Step>
      </Steps>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 36 }}>
      <Steps>
        <Step><MiniFeature color={partColor.p6} title="銷售日報" desc="一鍵彙總當日營收、毛利、排行，另存新檔" /></Step>
        <Step><MiniFeature color={partColor.p6} title="叫貨單" desc="依供應商自動分組，產出可直接傳的採購訊息" /></Step>
        <Step><MiniFeature color={partColor.p6} title="送出前檢查" desc="抓出商品ID錯誤、重複編號、非法通路" /></Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <p style={{ fontSize: 31, color: muted, marginTop: 28 }}>
          記得另存成「Excel 啟用巨集的活頁簿（.xlsm）」——存成 .xlsx 巨集會不見。
        </p>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Shared — dark VBA code block ─────────────────────────────────────────────
const VbaCodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre
    style={{
      margin: 0,
      background: '#1E1E1E',
      color: '#D4D4D4',
      borderRadius: 10,
      padding: '14px 16px',
      fontFamily: 'Consolas, monospace',
      fontSize: 25,
      lineHeight: 1.5,
      whiteSpace: 'pre-wrap',
      overflowWrap: 'anywhere',
    }}
  >
    {children}
  </pre>
);

const VbaSyntaxRow = ({ code, desc }: { code: string; desc: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
    <span
      style={{
        fontFamily: 'Consolas, monospace',
        fontSize: 25,
        fontWeight: 700,
        color: taskColor,
        background: `${taskColor}14`,
        border: `1px solid ${taskColor}33`,
        borderRadius: 6,
        padding: '3px 10px',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {code}
    </span>
    <span style={{ fontSize: 25, lineHeight: 1.45 }}>{desc}</span>
  </div>
);

const VbaRunChip = () => (
  <span
    style={{
      alignSelf: 'flex-start',
      fontSize: 25,
      fontWeight: 800,
      color: '#1F7A4B',
      background: '#1F7A4B14',
      border: '1px solid #1F7A4B44',
      borderRadius: 999,
      padding: '4px 14px',
    }}
  >
    ▶ 執行（F5）
  </span>
);

const VbaNote = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 25,
      fontWeight: 700,
      color: taskColor,
      background: `${taskColor}14`,
      border: `1px solid ${taskColor}33`,
      borderRadius: 8,
      padding: '6px 12px',
      lineHeight: 1.4,
    }}
  >
    作用：{children}
  </div>
);

// ─── Shared — mockup illustrations for the VBA first-try pages ───────────────
const MsgBoxMock = ({ text }: { text: string }) => (
  <div
    style={{
      width: 420,
      margin: '0 auto',
      borderRadius: 8,
      overflow: 'hidden',
      border: '1px solid #B8B8B4',
      boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
      background: '#fff',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#F1F1EF',
        padding: '8px 14px',
        borderBottom: '1px solid #DDDDD8',
      }}
    >
      <span style={{ fontSize: 25, fontWeight: 700 }}>Microsoft Excel</span>
      <span style={{ fontSize: 25, color: muted }}>✕</span>
    </div>
    <div style={{ padding: '26px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: '#2E6FBF',
            color: '#fff',
            fontSize: 25,
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          i
        </span>
        <span style={{ fontSize: 28, fontWeight: 700 }}>{text}</span>
      </div>
      <div
        style={{
          border: '1px solid #B8B8B4',
          borderRadius: 4,
          padding: '6px 30px',
          fontSize: 25,
          fontWeight: 700,
          background: '#FAFAF8',
        }}
      >
        確定
      </div>
    </div>
  </div>
);

const miniHeadCell = {
  background: '#F5F5F0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 25,
  fontWeight: 700,
  color: muted,
} as const;

const MiniCell = ({ value, highlight }: { value: React.ReactNode; highlight?: boolean }) => (
  <div
    style={{
      background: highlight ? `${partColor.p1}18` : '#fff',
      border: highlight ? `2px solid ${partColor.p1}` : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 27,
      fontWeight: 800,
      color: highlight ? partColor.p1 : 'var(--osd-text)',
    }}
  >
    {value}
  </div>
);

const MiniSheetStrip = ({ col, row, value, highlight }: { col: string; row: number; value: React.ReactNode; highlight?: boolean }) => (
  <div
    style={{
      display: 'inline-grid',
      gridTemplateColumns: '36px 96px',
      gridTemplateRows: '32px 44px',
      border: `1px solid ${cardBorder}`,
      borderRadius: 6,
      overflow: 'hidden',
    }}
  >
    <div style={{ ...miniHeadCell, borderRight: `1px solid ${cardBorder}`, borderBottom: `1px solid ${cardBorder}` }} />
    <div style={{ ...miniHeadCell, borderBottom: `1px solid ${cardBorder}` }}>{col}</div>
    <div style={{ ...miniHeadCell, borderRight: `1px solid ${cardBorder}` }}>{row}</div>
    <MiniCell value={value} highlight={highlight} />
  </div>
);

const MiniColumnStrip = ({ col, values }: { col: string; values: number[] }) => (
  <div
    style={{
      display: 'inline-grid',
      gridTemplateColumns: '36px 96px',
      border: `1px solid ${cardBorder}`,
      borderRadius: 6,
      overflow: 'hidden',
    }}
  >
    <div style={{ ...miniHeadCell, height: 32, borderRight: `1px solid ${cardBorder}`, borderBottom: `1px solid ${cardBorder}` }} />
    <div style={{ ...miniHeadCell, height: 32, borderBottom: `1px solid ${cardBorder}` }}>{col}</div>
    {values.flatMap((v, i) => [
      <div
        key={`r${i}`}
        style={{ ...miniHeadCell, height: 40, borderRight: `1px solid ${cardBorder}`, borderTop: i > 0 ? `1px solid ${cardBorder}` : undefined }}
      >
        {i + 2}
      </div>,
      <div
        key={`c${i}`}
        style={{ height: 40, borderTop: i > 0 ? `1px solid ${cardBorder}` : undefined, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 27, fontWeight: 700 }}
      >
        {v}
      </div>,
    ])}
  </div>
);

// ─── Page 11a0 — 一、試試看寫簡單的VBA（一）：MsgBox ───────────────────────────
const Part6VbaFirstTryMsgBox: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.25</Eyebrow>
    <PageHeading>一、試試看寫簡單的VBA：先讓巨集跳出一句話</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 20 }}>
      任務 27：建立 Module 1，貼上以下程式碼，點選執行（綠色三角形）或按 F5
    </div>
    <div style={{ display: 'flex', gap: 40, marginTop: 22, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Steps>
          <Step>
            <VbaNote>跳出訊息證明巨集有跑</VbaNote>
          </Step>
          <Step>
            <VbaCodeBlock>{'Sub VBA練習()\nMsgBox"嗨，大家好"\nEnd Sub'}</VbaCodeBlock>
          </Step>
          <Step>
            <VbaRunChip />
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 27, fontWeight: 800, color: muted }}>語法拆解</div>
        <Steps>
          <Step>
            <VbaSyntaxRow
              code="Sub 名稱() ... End Sub"
              desc="定義一個「巨集」（子程序），中間夾的程式碼會依序執行——這是 VBA 最基本的程式容器。"
            />
          </Step>
          <Step>
            <VbaSyntaxRow
              code='MsgBox "文字"'
              desc="跳出一個訊息框顯示指定文字，是最簡單的「證明程式真的有跑」的方式。"
            />
          </Step>
        </Steps>
      </div>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 25, fontWeight: 800, color: muted }}>執行結果</div>
          <MsgBoxMock text="嗨，大家好" />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 11a0-2 — 一、試試看寫簡單的VBA（二）：寫入儲存格 ─────────────────────
const Part6VbaFirstTryRange: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.25</Eyebrow>
    <PageHeading>把固定值直接寫進儲存格</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 20 }}>
      任務 27（續）：覆蓋為以下程式碼，再次執行
    </div>
    <div style={{ display: 'flex', gap: 40, marginTop: 22, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Steps>
          <Step>
            <VbaNote>把固定值寫進儲存格</VbaNote>
          </Step>
          <Step>
            <VbaCodeBlock>{'Sub VBA練習()\nWorksheets("商品主檔").Range("I1").Value = 100\nEnd Sub'}</VbaCodeBlock>
          </Step>
          <Step>
            <VbaRunChip />
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 27, fontWeight: 800, color: muted }}>語法拆解</div>
        <Steps>
          <Step>
            <VbaSyntaxRow code='Worksheets("商品主檔")' desc="用工作表「名稱」取得該工作表物件。" />
          </Step>
          <Step>
            <VbaSyntaxRow code='.Range("I1")' desc="在該工作表裡指定儲存格（這裡是單一儲存格 I1）。" />
          </Step>
          <Step>
            <VbaSyntaxRow
              code=".Value = 100"
              desc={
                <>
                  把該儲存格的內容值設成 100——<code>.Value</code> 是儲存格的值屬性，用「=」賦值就是寫入資料。
                </>
              }
            />
          </Step>
        </Steps>
      </div>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 25, fontWeight: 800, color: muted }}>執行結果 — 商品主檔！I1</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 25, color: muted }}>執行前</span>
              <MiniSheetStrip col="I" row={1} value="" />
            </div>
            <span style={{ fontSize: 34, color: muted }}>→</span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 25, color: muted }}>執行後</span>
              <MiniSheetStrip col="I" row={1} value="100" highlight />
            </div>
          </div>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 11a0-3 — 一、試試看寫簡單的VBA（三）：呼叫內建函數 ───────────────────
const Part6VbaFirstTrySum: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.25</Eyebrow>
    <PageHeading>呼叫 Excel 內建函數，算出結果再寫回儲存格</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 20 }}>
      任務 27（續）：再次覆蓋為以下程式碼，執行後查看 I1
    </div>
    <div style={{ display: 'flex', gap: 40, marginTop: 22, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Steps>
          <Step>
            <VbaNote>呼叫 Excel 內建的 SUM 函數算出結果再寫回儲存格</VbaNote>
          </Step>
          <Step>
            <VbaCodeBlock>
              {
                'Sub VBA練習()\nWorksheets("商品主檔").Range("I1").Value = Application.WorksheetFunction.Sum(Worksheets("商品主檔").Range("E:E"))\nEnd Sub'
              }
            </VbaCodeBlock>
          </Step>
          <Step>
            <VbaRunChip />
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 27, fontWeight: 800, color: muted }}>語法拆解</div>
        <Steps>
          <Step>
            <VbaSyntaxRow code="Application" desc="代表整個 Excel 應用程式本身。" />
          </Step>
          <Step>
            <VbaSyntaxRow
              code=".WorksheetFunction.Sum(...)"
              desc="讓 VBA 呼叫 Excel 內建的 SUM 函數（就是平常打 =SUM() 那個），對括號裡的範圍加總。"
            />
          </Step>
          <Step>
            <VbaSyntaxRow code='Range("E:E")' desc="商品主檔工作表的 E 整欄。" />
          </Step>
          <Step>
            <VbaSyntaxRow
              code="整句意思"
              desc="把「E 欄加總」算出來的結果寫進 I1——效果跟在 I1 打 =SUM(E:E) 一樣，但寫進去的是算好的固定數值，不是公式本身。"
            />
          </Step>
        </Steps>
      </div>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 25, color: muted }}>商品主檔！E 欄</span>
            <MiniColumnStrip col="E" values={[60, 70, 45, 25]} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <span style={{ fontSize: 32, fontWeight: 800, color: muted }}>Σ</span>
            <span style={{ fontSize: 32, color: muted }}>→</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 25, color: muted }}>商品主檔！I1</span>
            <MiniSheetStrip col="I" row={1} value="200" highlight />
          </div>
        </div>
      </Step>
    </Steps>
    <div style={{ marginTop: 16 }}>
      <Callout color={taskColor}>
        每次覆蓋整段 Sub 重新貼上，Module 1 只保留最新一版，執行只會跑目前這版。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 11a — 二、牛刀小試：先用一句話試試看 ──────────────────────────────
const Part6VbaLazyTry: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.26</Eyebrow>
    <PageHeading>二、牛刀小試：先用一句話試試看</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 28：分開輸入兩句話，要求 AI 產出結果</div>
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
        PROMPT 21–22
      </span>
    </div>
    <div style={{ marginTop: 18 }}>
      <Steps>
        <Step>
          <div style={{ fontSize: 25, color: muted, lineHeight: 1.5 }}>
            先別急著用完整的 prompt。先故意「偷懶」一次，把這兩句話分別丟給 AI，感受一下差別：
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 16 }}>
            <div style={{ border: `1px solid ${cardBorder}`, borderRadius: 14, padding: '18px 22px', background: cardBg }}>
              <div style={{ fontSize: 25, fontWeight: 800, color: muted, letterSpacing: '0.06em', marginBottom: 8 }}>
                PROMPT 21（偷懶版）
              </div>
              <div style={{ fontSize: 25, lineHeight: 1.4 }}>我要一個 Excel VBA 巨集，一鍵產出營業日報。</div>
            </div>
            <div style={{ border: `1px solid ${cardBorder}`, borderRadius: 14, padding: '18px 22px', background: cardBg }}>
              <div style={{ fontSize: 25, fontWeight: 800, color: muted, letterSpacing: '0.06em', marginBottom: 8 }}>
                PROMPT 22（偷懶版）
              </div>
              <div style={{ fontSize: 25, lineHeight: 1.4 }}>我要一個 Excel VBA 巨集，一鍵產出叫貨單。</div>
            </div>
          </div>
        </Step>
        <Step>
          <div
            style={{
              marginTop: 22,
              background: `${painRed}0A`,
              border: `1px solid ${painRed}33`,
              borderLeft: `4px solid ${painRed}`,
              borderRadius: 12,
              padding: '18px 26px',
            }}
          >
            <div style={{ fontSize: 25, fontWeight: 800, color: painRed, marginBottom: 12 }}>
              你會發現 AI 產出的結果通常很簡陋、又很容易出錯
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Cross />
                <span style={{ fontSize: 25, lineHeight: 1.4 }}>它不知道你的工作表叫什麼、有哪些欄位，只能自己亂猜，猜錯就抓不到資料。</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Cross />
                <span style={{ fontSize: 25, lineHeight: 1.4 }}>不會問你要哪一天，也不會處理「那天沒有銷售資料」的情況。</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Cross />
                <span style={{ fontSize: 25, lineHeight: 1.4 }}>彙總方式、輸出格式、檔名都由它隨便決定，常常不是你要的。</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Cross />
                <span style={{ fontSize: 25, lineHeight: 1.4 }}>換一台電腦或換個檔案，就可能整個跑不動。</span>
              </div>
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 20 }}>
            <Callout color={partColor.p6}>
              重點來了：AI 只能照你講的做——講得越模糊，它自己補的猜測就越多，也越容易出錯。接下來三、四、五節每一段「講清楚」的
              prompt，就是要示範把需求說明白之後，結果差多少。
            </Callout>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — Excel-screenshot-style report mockup ───────────────────────────
const XlSheet = ({ children }: { children: React.ReactNode }) => (
  <div style={{ border: '1px solid #D8D8D4', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>{children}</div>
);

const XlTitle = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '10px 16px', fontSize: 34, fontWeight: 800 }}>{children}</div>
);

const XlKpiRow = ({ a, av, b, bv }: { a: string; av: string; b?: string; bv?: string }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 0.7fr 1fr 0.7fr',
      gap: 18,
      padding: '3px 16px',
      borderTop: '1px solid #EDEDED',
      fontSize: 25,
    }}
  >
    <span style={{ color: '#1C6B57', fontWeight: 700 }}>{a}</span>
    <span style={{ textAlign: 'right' }}>{av}</span>
    <span style={{ color: '#1C6B57', fontWeight: 700 }}>{b}</span>
    <span style={{ textAlign: 'right' }}>{bv}</span>
  </div>
);

const XlSectionHead = ({ title, cols }: { title: string; cols: string }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 16px 2px',
      borderTop: '1px solid #EDEDED',
      fontSize: 25,
    }}
  >
    <span style={{ fontWeight: 800, color: '#1F7A4B' }}>【{title}】</span>
    <span style={{ color: muted, fontSize: 25 }}>{cols}</span>
  </div>
);

const XlDataRow = ({ cols }: { cols: string[] }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols.length}, 1fr)`,
      gap: 12,
      padding: '3px 16px',
      borderTop: '1px solid #F3F3F0',
      fontSize: 25,
    }}
  >
    {cols.map((c, i) => (
      <span key={i} style={{ textAlign: i === 0 ? 'left' : 'right' }}>
        {c}
      </span>
    ))}
  </div>
);

// ─── Page 11a-2 — 三、銷售日報：打烊後，一鍵生出當天的營運報告 ────────────────
const Part6VbaSalesReport: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.27</Eyebrow>
    <PageHeading>三、銷售日報：打烊後，一鍵生出當天的營運報告</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 29：一鍵產生銷售日報</div>
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
        依 PROMPT 23 建立
      </span>
    </div>
    <div style={{ marginTop: 8 }}>
      <Steps>
        <Step>
          <div style={{ fontSize: 25, color: muted, lineHeight: 1.5 }}>
            情境：每天打烊要一份當日營業日報（營收、訂單數、毛利、熱銷排行、明細），並另存成一個獨立檔案存檔。
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', gap: 32, marginTop: 8, alignItems: 'flex-start' }}>
            <div style={{ flex: 1.3 }}>
              <XlSheet>
                <XlTitle>鍋貼店營業日報</XlTitle>
                <XlKpiRow a="營業日期" av="2026/6/2" />
                <XlKpiRow a="營業額合計" av="$5,660" b="銷售筆數" bv="15" />
                <XlKpiRow a="訂單數" av="12" b="銷售總數量" bv="42" />
                <XlKpiRow a="折扣合計" av="$85" b="估計銷售成本" bv="$2,830" />
                <XlKpiRow a="估計毛利" av="$2,830" b="毛利率" bv="50.0%" />
                <XlSectionHead title="各通路小計" cols="通路／數量／金額" />
                <XlDataRow cols={['內用', '18', '$2,400']} />
                <XlDataRow cols={['外帶', '24', '$3,260']} />
                <XlSectionHead title="熱銷商品排行" cols="商品／數量／金額" />
                <XlDataRow cols={['原味鍋貼', '20', '$1,200']} />
                <XlDataRow cols={['韓式泡菜鍋貼', '12', '$840']} />
                <XlSectionHead title="銷售明細" cols="訂單編號／商品／通路／數量／單價／金額" />
                <XlDataRow cols={['O20260602001', '原味鍋貼', '內用', '5', '$60', '$300']} />
              </XlSheet>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <RuleChip text="A2/B2 對話框先問要哪一天，預設今天" />
              <RuleChip text="沒有銷售資料就跳訊息提醒，不強行產出空報表" />
              <RuleChip text="另存新檔到桌面，檔名「2024年02月15日鍋貼店營業日報」" />
              <RuleChip text="金額用 $ 符號＋千分位、毛利率用百分比顯示" />
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 11a-3 — 四、叫貨單：庫存不夠，訊息自動生好幫你傳 ───────────────────
const Part6VbaPurchaseMessage: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.27-28</Eyebrow>
    <PageHeading>四、叫貨單：庫存不夠，訊息自動生好幫你傳</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 30：一鍵產出叫貨單（給供應商的訊息）</div>
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
        依 PROMPT 24 建立
      </span>
    </div>
    <div style={{ marginTop: 8 }}>
      <Steps>
        <Step>
          <div style={{ fontSize: 25, color: muted, lineHeight: 1.5 }}>
            情境：庫存低於安全量時，要快速生出一段能直接貼給供應商 LINE 的叫貨訊息，並依供應商分開。
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', gap: 32, marginTop: 10, alignItems: 'flex-start' }}>
            <div
              style={{
                flex: 1.2,
                background: '#DCF3D2',
                borderRadius: '18px 18px 18px 4px',
                padding: '12px 24px',
                fontSize: 25,
                lineHeight: 1.5,
              }}
            >
              <b>麵皮行</b> 您好！這邊是鍋貼店，想跟您訂購以下品項：
              <br />
              ・麵皮 × 50 張
              <br />
              ・高筋麵粉 × 10 公斤
              <br />
              請於 ___ 月 ___ 日（禮拜 ___）送貨，謝謝！
              <div style={{ fontSize: 25, color: muted, marginTop: 6 }}>聯絡人電話：0912-345-678（供參考）</div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <RuleChip text="依「主要供應商」自動分組，一家一段訊息" />
              <RuleChip text="送貨日期留白，自己事後手動填" />
              <RuleChip text="沒有品項需要補貨→跳訊息「不用叫貨」" />
              <RuleChip text="執行出錯→跳出好懂的訊息，說明卡在哪個步驟" />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 25, color: muted, marginTop: 10 }}>
            所有訊息放進一個新活頁簿，每家一段方便複製，另存新檔（檔名含日期）到桌面。
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — Windows-dialog-box mockup (VBA interactive prompt flow) ────────
const DialogMock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div
    style={{
      border: '1px solid #B8B8B4',
      borderRadius: 6,
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 6px 18px rgba(0,0,0,0.10)',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#F1F1EF',
        padding: '7px 12px',
        borderBottom: '1px solid #DDDDD8',
      }}
    >
      <span style={{ fontSize: 25, fontWeight: 700 }}>{title}</span>
      <span style={{ fontSize: 25, color: muted }}>✕</span>
    </div>
    <div style={{ padding: '14px 16px', display: 'flex', gap: 12 }}>{children}</div>
  </div>
);

const DialogButtons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
    <div
      style={{
        border: '1px solid #B8B8B4',
        borderRadius: 3,
        padding: '4px 14px',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center',
        background: '#FAFAF8',
      }}
    >
      確定
    </div>
    <div
      style={{
        border: '1px solid #B8B8B4',
        borderRadius: 3,
        padding: '4px 14px',
        fontSize: 25,
        textAlign: 'center',
        color: muted,
        background: '#FAFAF8',
      }}
    >
      取消
    </div>
  </div>
);

const DialogInput = ({ value, highlight }: { value?: string; highlight?: boolean }) => (
  <div
    style={{
      border: `1px solid ${highlight ? taskColor : '#C6C6C0'}`,
      borderRadius: 3,
      padding: '4px 8px',
      fontSize: 25,
      minHeight: 18,
      background: '#fff',
      color: 'var(--osd-text)',
    }}
  >
    {value}
  </div>
);

// ─── Page 11a-4 — 練習：讓叫貨單更聰明 ────────────────────────────────────
const Part6VbaPurchaseSmart: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.28-29</Eyebrow>
    <PageHeading>練習：讓叫貨單更聰明</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 20 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 31：[練習] 讓叫貨單更聰明</div>
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
        自訂對話練習
      </span>
    </div>
    <div style={{ marginTop: 14 }}>
      <Steps>
        <Step>
          <div style={{ fontSize: 25, color: muted, lineHeight: 1.5 }}>
            請你跟 AI 對話，一步步引導 AI 幫你寫出一支新的巨集，功能要求如下面三個對話框：
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <DialogMock title="選擇要調整的品項">
                <div style={{ flex: 1, fontSize: 25, lineHeight: 1.6 }}>
                  建議補貨清單（請參考編號）：
                  <br />
                  1. 麵皮 × 1500 張（北區麵皮行）
                  <br />
                  2. 玉米粒 × 10 公斤（新鮮蔬果商行）
                  <div style={{ marginTop: 6, color: taskColor, fontWeight: 700 }}>
                    請輸入要「調整數量」的品項編號（例：1,3,5），全部不調整請留白：
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <DialogInput highlight />
                  </div>
                </div>
                <DialogButtons />
              </DialogMock>
              <div style={{ fontSize: 25, fontWeight: 700, color: taskColor }}>① 新增：指定要調整的品項</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <DialogMock title="調整叫貨量 - 編號 1">
                <div style={{ flex: 1, fontSize: 25, lineHeight: 1.6 }}>
                  品項：麵皮（張，北區麵皮行）
                  <br />
                  目前建議數量：1500
                  <div style={{ marginTop: 6, color: taskColor, fontWeight: 700 }}>請輸入新的叫貨量（輸入 0 可移除）：</div>
                  <div style={{ marginTop: 4 }}>
                    <DialogInput value="1500" highlight />
                  </div>
                </div>
                <DialogButtons />
              </DialogMock>
              <div style={{ fontSize: 25, fontWeight: 700, color: taskColor }}>② 新增：逐項修改建議數量</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <DialogMock title="到貨日期 - 北區麵皮行">
                <div style={{ flex: 1, fontSize: 25, lineHeight: 1.6 }}>
                  <div style={{ color: taskColor, fontWeight: 700 }}>請輸入「北區麵皮行」的到貨日期</div>
                  （例：7/15 或 2026/7/15，取消則留空白由您手動填寫）
                  <div style={{ marginTop: 6 }}>
                    <DialogInput highlight />
                  </div>
                </div>
                <DialogButtons />
              </DialogMock>
              <div style={{ fontSize: 25, fontWeight: 700, color: taskColor }}>③ 新增：逐店詢問到貨日期</div>
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 25, fontWeight: 800, marginTop: 22, marginBottom: 10 }}>Tips</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            <RuleChip text="1. 多了指定店家修改數量的功能" />
            <RuleChip text="2. 多了詢問送貨日的功能" />
            <RuleChip text="4. 全程不可修改／寫入「庫存管理」或「供應商主檔」，只能讀取" />
            <RuleChip text="5. 要有基本錯誤處理，讓使用者知道是在哪個步驟出錯" />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — small numbered step row (ribbon-setup walkthrough) ────────────
const MiniStep = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
    <span
      style={{
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: partColor.p6,
        color: '#fff',
        fontSize: 25,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: 2,
      }}
    >
      {n}
    </span>
    <span style={{ fontSize: 25, lineHeight: 1.5 }}>{children}</span>
  </div>
);

// ─── Page 11a-5 — 五、關檔前防呆檢查＋待補貨提醒 ──────────────────────────────
const Part6VbaCloseCheck: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.29</Eyebrow>
    <PageHeading>五、關檔前防呆檢查＋待補貨提醒</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 32：關閉前防呆檢查＋待補貨提醒</div>
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
        依 PROMPT 25 建立
      </span>
    </div>
    <div style={{ marginTop: 8 }}>
      <Steps>
        <Step>
          <div style={{ fontSize: 25, color: muted, lineHeight: 1.5 }}>
            情境：關閉檔案前，自動檢查整張表有沒有打錯（商品ID、數量、重複、通路），並順便提醒有沒有該叫的貨。
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 25, fontWeight: 800, color: painRed, marginBottom: 6 }}>
              逐列檢查，紅色標示打錯的儲存格
            </div>
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '1fr 0.8fr 0.8fr 1fr 1.4fr',
              }}
            >
              <BomHeaderCell small label="銷售明細編號" />
              <BomHeaderCell small label="商品ID" />
              <BomHeaderCell small label="銷售數量" />
              <BomHeaderCell small label="銷售通路" />
              <BomHeaderCell small label="問題原因" />

              <BomCell small value="D010" />
              <BomCell small value="P002" formula />
              <BomCell small value="3" />
              <BomCell small value="內用" />
              <BomCell small value="—" />

              <BomCell small value="D011" band />
              <BomCell small value="（空白）" band error />
              <BomCell small value="5" band />
              <BomCell small value="外帶" band />
              <BomCell small value="商品ID 空白" band error />

              <BomCell small value="D012" />
              <BomCell small value="P003" formula />
              <BomCell small value="0" error />
              <BomCell small value="外送平台" />
              <BomCell small value="銷售數量 ≤ 0" error />

              <BomCell small value="D010" band error />
              <BomCell small value="P001" formula band />
              <BomCell small value="2" band />
              <BomCell small value="外帶" band />
              <BomCell small value="明細編號 重複" band error />

              <BomCell small value="D013" />
              <BomCell small value="P002" formula />
              <BomCell small value="4" />
              <BomCell small value="郵寄" error />
              <BomCell small value="通路不在允許清單" error />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 25, fontWeight: 800, marginBottom: 6 }}>檢查完，順帶提醒庫存</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <div
                style={{
                  border: `2px solid ${partColor.p6}`,
                  borderRadius: 12,
                  background: `${partColor.p6}0F`,
                  padding: '6px 28px',
                  fontSize: 25,
                  fontWeight: 800,
                  textAlign: 'center',
                }}
              >
                庫存有「低於安全庫存」或「缺料」品項？
              </div>
              <div style={{ display: 'flex', width: '100%', maxWidth: 620, justifyContent: 'space-between', marginTop: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <span style={{ fontSize: 32, color: '#1F7A4B' }}>↓</span>
                  <span style={{ fontSize: 25, fontWeight: 800, color: '#1F7A4B' }}>是</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <span style={{ fontSize: 32, color: painRed }}>↓</span>
                  <span style={{ fontSize: 25, fontWeight: 800, color: painRed }}>否</span>
                </div>
              </div>
              <div style={{ display: 'flex', width: '100%', maxWidth: 620, gap: 24 }}>
                <div
                  style={{
                    flex: 1,
                    border: `1px solid #1F7A4B44`,
                    background: '#1F7A4B0D',
                    borderRadius: 12,
                    padding: '8px 18px',
                    fontSize: 25,
                    lineHeight: 1.4,
                  }}
                >
                  跳訊息預覽待補貨清單 → 直接呼叫既有「產出叫貨單」巨集<b>（同模組，不重寫）</b>
                </div>
                <div
                  style={{
                    flex: 1,
                    border: `1px solid ${cardBorder}`,
                    background: cardBg,
                    borderRadius: 12,
                    padding: '8px 18px',
                    fontSize: 25,
                    color: muted,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  結束，不執行叫貨
                </div>
              </div>
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 11a-6 — 六、把巨集設定成「自訂功能區」按鈕 ──────────────────────────
const RibbonButton = ({ glyph, label }: { glyph: string; label: string }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      padding: '10px 14px',
      border: `1px solid ${cardBorder}`,
      borderRadius: 8,
      background: '#fff',
    }}
  >
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: partColor.p6,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 800,
      }}
    >
      {glyph}
    </div>
    <span style={{ fontSize: 25, fontWeight: 700, whiteSpace: 'nowrap' }}>{label}</span>
  </div>
);

const Part6VbaRibbon: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.30</Eyebrow>
    <PageHeading>六、把巨集設定成「自訂功能區」按鈕</PageHeading>
    <div style={{ marginTop: 8 }}>
      <Steps>
        <Step>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 20 }}>
            <div
              style={{
                flex: 1,
                border: `1px solid ${cardBorder}`,
                borderRadius: 12,
                padding: '10px 14px',
                background: cardBg,
              }}
            >
              <div style={{ fontSize: 25, fontWeight: 800, color: muted, marginBottom: 6 }}>之前</div>
              <div
                style={{
                  display: 'inline-block',
                  border: '1px solid #C6C6C0',
                  borderRadius: 6,
                  padding: '6px 14px',
                  fontSize: 25,
                  background: '#F5F5F0',
                }}
              >
                產出銷售日報
              </div>
              <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Cross />
                <span style={{ fontSize: 25, color: painRed, fontWeight: 700 }}>換一頁、換檔案就要重貼一次</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FlowArrow />
            </div>
            <div
              style={{
                flex: 1.6,
                border: `1px solid ${cardBorder}`,
                borderRadius: 12,
                padding: '10px 14px',
                background: cardBg,
              }}
            >
              <div style={{ fontSize: 25, fontWeight: 800, color: muted, marginBottom: 4 }}>之後——自訂功能區</div>
              <div style={{ display: 'flex', gap: 4, borderBottom: `2px solid ${cardBorder}` }}>
                {['檔案', '常用', '插入', '版面配置'].map((t) => (
                  <div key={t} style={{ fontSize: 25, color: muted, padding: '4px 10px' }}>
                    {t}
                  </div>
                ))}
                <div
                  style={{
                    fontSize: 25,
                    fontWeight: 800,
                    color: partColor.p6,
                    padding: '4px 10px',
                    borderBottom: `2px solid ${partColor.p6}`,
                    marginBottom: -2,
                  }}
                >
                  巨集按鈕
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                <RibbonButton glyph="日" label="產出銷售日報" />
                <RibbonButton glyph="叫" label="產出叫貨單" />
                <RibbonButton glyph="月" label="產出營業月報" />
              </div>
            </div>
          </div>
        </Step>
        <Step>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 8,
              marginTop: 10,
              border: `1px solid ${cardBorder}`,
              borderRadius: 16,
              padding: '12px 20px',
              background: cardBg,
            }}
          >
            <MiniStep n={1}>「檔案」→「選項」→「自訂功能區」</MiniStep>
            <MiniStep n={2}>左側改選「巨集」，列出所有巨集名稱</MiniStep>
            <MiniStep n={3}>右側點一個索引標籤，再「新增群組」</MiniStep>
            <MiniStep n={4}>點選巨集 → 按「新增 &gt;&gt;」加進群組</MiniStep>
            <MiniStep n={5}>「重新命名」換成看得懂的名稱與圖示</MiniStep>
            <MiniStep n={6}>
              三個巨集都加進同一群組（<b style={{ color: partColor.p6 }}>日報／叫貨單／月報</b>），按「確定」
            </MiniStep>
          </div>
        </Step>
        <Step>
          <div
            style={{
              marginTop: 8,
              background: `${painRed}0A`,
              border: `1px solid ${painRed}33`,
              borderLeft: `4px solid ${painRed}`,
              borderRadius: 12,
              padding: '8px 22px',
              fontSize: 25,
            }}
          >
            提醒：自訂功能區的設定存在「這台電腦的 Excel」，不是存在活頁簿裡——換一台電腦要重新設定一次。
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — tiny inline-SVG chart icons for report-sheet cards ─────────────
const MiniBarLineIcon = ({ color }: { color: string }) => (
  <svg width="86" height="58" viewBox="0 0 86 58">
    <line x1="2" y1="52" x2="84" y2="52" stroke={cardBorder} strokeWidth="1.5" />
    <rect x="4" y="30" width="9" height="22" rx="1.5" fill={color} opacity="0.85" />
    <rect x="18" y="14" width="9" height="38" rx="1.5" fill={color} opacity="0.85" />
    <rect x="32" y="24" width="9" height="28" rx="1.5" fill={color} opacity="0.85" />
    <rect x="46" y="8" width="9" height="44" rx="1.5" fill={color} opacity="0.85" />
    <rect x="60" y="20" width="9" height="32" rx="1.5" fill={color} opacity="0.85" />
    <rect x="74" y="4" width="9" height="48" rx="1.5" fill={color} opacity="0.85" />
    <polyline
      points="8,34 22,38 36,20 50,26 64,10 78,16"
      fill="none"
      stroke={painRed}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[8, 22, 36, 50, 64, 78].map((cx, i) => (
      <circle key={i} cx={cx} cy={[34, 38, 20, 26, 10, 16][i]} r="2.5" fill={painRed} />
    ))}
  </svg>
);

const MiniParetoIcon = ({ color }: { color: string }) => (
  <svg width="86" height="58" viewBox="0 0 86 58">
    <line x1="2" y1="52" x2="84" y2="52" stroke={cardBorder} strokeWidth="1.5" />
    <rect x="4" y="8" width="9" height="44" rx="1.5" fill={color} />
    <rect x="18" y="18" width="9" height="34" rx="1.5" fill={color} opacity="0.85" />
    <rect x="32" y="27" width="9" height="25" rx="1.5" fill={color} opacity="0.7" />
    <rect x="46" y="35" width="9" height="17" rx="1.5" fill={color} opacity="0.55" />
    <rect x="60" y="42" width="9" height="10" rx="1.5" fill={color} opacity="0.4" />
    <rect x="74" y="47" width="9" height="5" rx="1.5" fill={color} opacity="0.3" />
    <polyline
      points="8,44 22,26 36,15 50,9 64,6 78,5"
      fill="none"
      stroke={taskColor}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[8, 22, 36, 50, 64, 78].map((cx, i) => (
      <circle key={i} cx={cx} cy={[44, 26, 15, 9, 6, 5][i]} r="2.5" fill={taskColor} />
    ))}
  </svg>
);

const MiniPieIcon = ({ slices }: { slices: { color: string; pct: number }[] }) => {
  let acc = 0;
  const stops = slices
    .map((s) => {
      const start = acc;
      acc += s.pct;
      return `${s.color} ${start}% ${acc}%`;
    })
    .join(', ');
  return (
    <div
      style={{
        width: 58,
        height: 58,
        borderRadius: '50%',
        background: `conic-gradient(${stops})`,
        flexShrink: 0,
        boxShadow: '0 2px 6px rgba(0,0,0,0.18), inset 0 0 0 3px #fff',
      }}
    />
  );
};

const MiniListIcon = ({ color }: { color: string }) => (
  <svg width="72" height="58" viewBox="0 0 72 58">
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect
          x="2"
          y={4 + i * 13.5}
          width="11"
          height="11"
          rx="2.5"
          fill={i < 3 ? color : '#fff'}
          stroke={color}
          strokeWidth="1.5"
        />
        {i < 3 && (
          <path
            d={`M5,${9.5 + i * 13.5} l2,2.5 l4,-5`}
            fill="none"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <rect x="18" y={5.5 + i * 13.5} width={i === 3 ? 30 : 50} height="8" rx="2" fill={`${color}${i === 3 ? '33' : '1F'}`} />
      </g>
    ))}
  </svg>
);

const MiniKpiIcon = ({ color }: { color: string }) => (
  <svg width="70" height="58" viewBox="0 0 70 58">
    {[
      [1, 1],
      [36, 1],
      [1, 30],
      [36, 30],
    ].map(([x, y], i) => (
      <g key={i}>
        <rect x={x} y={y} width="33" height="27" rx="4" fill={`${color}18`} stroke={color} strokeWidth="1.5" />
        <rect x={x + 6} y={y + 15} width="10" height="6" rx="1.5" fill={color} opacity="0.8" />
        <rect x={x + 18} y={y + 8} width="10" height="13" rx="1.5" fill={color} opacity="0.55" />
      </g>
    ))}
  </svg>
);

// ─── Shared — "business question → report page" card ────────────────────────
const ReportQA = ({ q, page, chart }: { q: string; page: string; chart: React.ReactNode }) => (
  <div
    style={{
      border: `1px solid ${cardBorder}`,
      borderRadius: 14,
      padding: '14px 18px',
      background: cardBg,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}
  >
    <div style={{ fontSize: 25, fontWeight: 800 }}>「{q}」</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <FlowArrow />
      <span style={{ fontSize: 25, fontWeight: 800, color: partColor.p7 }}>{page}</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>{chart}</div>
  </div>
);

// ─── Page 12a — 決策者想看什麼？好的營業月報長怎樣 ────────────────────────────
const Part7RollupIntro: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p7}>PART6 · 跨檔案彙總</Eyebrow>
    <PageHeading>好的營業月報，要幫老闆回答哪些問題？</PageHeading>
    <div style={{ marginTop: 12 }}>
      <Steps>
        <Step>
          <Callout color={partColor.p7}>
            想像你是鍋貼店老闆，月底打開這份報表——你不是想看一堆數字，你是想知道幾個具體問題的答案。月報的每一頁，其實都是在回答老闆心裡的一個問題。
          </Callout>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 16 }}>
            <ReportQA q="這個月到底賺不賺錢？" page="月報摘要" chart={<MiniKpiIcon color={partColor.p7} />} />
            <ReportQA q="生意是變好還是變差？" page="每日趨勢" chart={<MiniBarLineIcon color={partColor.p7} />} />
            <ReportQA q="哪些商品在幫我賺錢？" page="商品排行" chart={<MiniParetoIcon color={partColor.p7} />} />
            <ReportQA
              q="客人都從哪裡來？"
              page="通路分析"
              chart={
                <MiniPieIcon
                  slices={[
                    { color: partColor.p7, pct: 46 },
                    { color: '#D08A34', pct: 33 },
                    { color: '#E0C9A6', pct: 21 },
                  ]}
                />
              }
            />
            <ReportQA q="有沒有賠錢在賣的？" page="毛利分析" chart={<MiniBarLineIcon color={painRed} />} />
            <ReportQA q="這些數字可以相信嗎？" page="檢查清單" chart={<MiniListIcon color={painRed} />} />
          </div>
        </Step>
        <Step>
          <div style={{ fontSize: 25, color: muted, marginTop: 16, lineHeight: 1.5 }}>
            這一節，就是要示範怎麼用 VBA 把「一整個月零散的日報檔案」自動讀進來，直接彙總成這 6 個問題的答案。
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — 3-column check-outcome column for cross-file validation ────────
const CheckColumn = ({
  color,
  title,
  items,
}: {
  color: string;
  title: string;
  items: string[];
}) => (
  <div
    style={{
      flex: 1,
      background: `${color}0A`,
      border: `1px solid ${color}33`,
      borderTop: `4px solid ${color}`,
      borderRadius: 12,
      padding: '14px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}
  >
    <div style={{ fontSize: 25, fontWeight: 800, color }}>{title}</div>
    {items.map((it) => (
      <div key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
        <span style={{ color, fontWeight: 800, flexShrink: 0 }}>●</span>
        <span style={{ fontSize: 25, lineHeight: 1.4 }}>{it}</span>
      </div>
    ))}
  </div>
);

// ─── Page 12b — 六、月底跨檔案彙總，先把資料讀對、抓錯 ───────────────────────
const Part7RollupRead: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.31</Eyebrow>
    <PageHeading>一、月底跨檔案彙總，先把資料讀對、抓錯</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 16 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 33：一鍵產出鍋貼店營業月報（讀取與檢查）</div>
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
        依 PROMPT 26 建立
      </span>
    </div>
    <div style={{ marginTop: 10 }}>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr', alignItems: 'start', gap: 8 }}>
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
        </Step>
        <Step>
          <div style={{ fontSize: 25, color: muted, lineHeight: 1.5, marginTop: 16 }}>
            情境：把這個月每天各自的營業日報彙總成一份月報，且要能抓出缺檔、重複、金額兜不起來——不能漏掉、也不能算錯。
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
            <FlowChip label="問月份＋選資料夾" color={partColor.p7} />
            <FlowArrow />
            <FlowChip label="逐一開啟每份日報" color={partColor.p7} />
            <FlowArrow />
            <FlowChip label="讀出 8 項數字＋銷售明細" color={partColor.p7} />
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
            <CheckColumn
              color={muted}
              title="跳過該檔（不納入彙總）"
              items={['找不到「日報」工作表', '日期讀不到', '日期不在選定月份內', '這天已經彙總過（重複日報）']}
            />
            <CheckColumn
              color="#C0902E"
              title="納入，但記一筆警告"
              items={['明細金額加總 ≠ 日報營業額', '明細數量加總 ≠ 銷售總數量', '明細筆數 ≠ 銷售筆數']}
            />
            <CheckColumn color={painRed} title="整月掃描缺漏" items={['這個月有日期完全沒有對應的日報檔', '記一筆「缺少日報」，並列出是哪一天']} />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 12c — 七、一次產出七頁月報表，圖表也要跟著做好 ─────────────────────
const Part7RollupReports: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.32</Eyebrow>
    <PageHeading>一次產出七頁月報表，圖表也要跟著做好</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 16 }}>
      <div style={{ fontSize: 31, fontWeight: 800, color: taskColor }}>任務 33（續）：彙總後自動產出的 7 份報表</div>
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
        依 PROMPT 26 建立
      </span>
    </div>
    <div style={{ marginTop: 10 }}>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            <ReportQA q="月報摘要" page="KPI 總覽" chart={<MiniKpiIcon color={partColor.p7} />} />
            <ReportQA q="每日趨勢" page="長條＋雙軸折線" chart={<MiniBarLineIcon color={partColor.p7} />} />
            <ReportQA q="商品排行" page="Pareto 圖" chart={<MiniParetoIcon color={partColor.p7} />} />
            <ReportQA
              q="通路分析"
              page="圓餅圖"
              chart={
                <MiniPieIcon
                  slices={[
                    { color: partColor.p7, pct: 46 },
                    { color: '#D08A34', pct: 33 },
                    { color: '#E0C9A6', pct: 21 },
                  ]}
                />
              }
            />
            <ReportQA q="毛利分析" page="長條＋折線，低於20%標紅" chart={<MiniBarLineIcon color={painRed} />} />
            <ReportQA q="銷售明細彙總" page="全月總表" chart={<MiniListIcon color={taskColor} />} />
            <ReportQA q="檢查清單" page="紅／黃警示" chart={<MiniListIcon color={painRed} />} />
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginTop: 16 }}>
            <RuleChip text="每頁：標題列＋粗體表頭，欄寬自動調整" />
            <RuleChip text="金額 $ 千分位、百分比一位小數，風格一致" />
            <RuleChip text="檔名「西元年＋月份＋鍋貼店營業月報」存到同資料夾" />
            <RuleChip text="整月完全沒有效日報→提醒我，不硬產出空報表" />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 12d — 還記得怎麼建立巨集嗎？使用步驟回顧 ───────────────────────────
const Part7RollupRecap: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p7}>PART6 · 跨檔案彙總</Eyebrow>
    <PageHeading>還記得怎麼建立巨集嗎？</PageHeading>
    <p style={{ fontSize: 30, color: muted, margin: '16px 0 0' }}>
      這一章每一支巨集，從貼上程式碼到一鍵執行，都是同樣的三個步驟。
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 36 }}>
      <Steps>
        <Step>
          <StepCard
            num="1"
            color={partColor.p7}
            title="貼上程式碼"
            desc={
              <>
                <b style={{ color: partColor.p7 }}>Alt + F11</b> 開啟 VBA 編輯器 → 插入 → 模組，把 AI 產出的程式碼貼進去。
              </>
            }
          />
        </Step>
        <Step>
          <StepCard
            num="2"
            color={partColor.p7}
            title="建立按鈕"
            desc={
              <>
                回 Excel，<b style={{ color: partColor.p7 }}>開發人員 → 插入 → 按鈕</b>，指定給這個巨集，命名「產出營業月報」。
              </>
            }
          />
        </Step>
        <Step>
          <StepCard
            num="3"
            color={partColor.p7}
            title="一鍵執行"
            desc={
              <>
                按鈕 → <b style={{ color: partColor.p7 }}>輸入年／月 → 選擇資料夾</b> → 自動跨檔彙總並另存新檔。
              </>
            }
          />
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Steps>
        <Step>
          <Callout color={partColor.p7}>不同顆按鈕、同一套流程——不管是銷售日報、叫貨單，還是這次的跨檔案月報，建立與使用的方式都一樣。</Callout>
        </Step>
        <Step>
          <Callout color={muted}>
            備註：也可以把「產出營業月報」巨集加進自訂功能區的工作列按鈕，跟「產出叫貨單」「產出銷售日報」放在一起，一鍵就能執行。
          </Callout>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — restaurant-metaphor role card (front-of-house / back-of-house) ─
const RoleCard = ({
  color,
  emoji,
  role,
  file,
  title,
  desc,
}: {
  color: string;
  emoji: string;
  role: string;
  file: string;
  title: string;
  desc: string;
}) => (
  <div
    style={{
      flex: 1,
      border: `1px solid ${cardBorder}`,
      borderTop: `5px solid ${color}`,
      borderRadius: 16,
      padding: '22px 26px',
      background: cardBg,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: color,
          color: '#fff',
          fontSize: 25,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {emoji}
      </div>
      <div>
        <div style={{ fontSize: 25, fontWeight: 700, color: muted }}>{role}</div>
        <div style={{ fontSize: 25, fontWeight: 800 }}>{title}</div>
      </div>
    </div>
    <div
      style={{
        fontFamily: 'monospace',
        fontSize: 25,
        fontWeight: 700,
        color,
        background: `${color}14`,
        borderRadius: 8,
        padding: '4px 10px',
        alignSelf: 'flex-start',
      }}
    >
      {file}
    </div>
    <div style={{ fontSize: 25, color: muted, lineHeight: 1.5 }}>{desc}</div>
  </div>
);

// ─── Page 10a — 前端負責「畫面」，後端負責「處理」 ────────────────────────────
const Part5FrontBack: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>PART 5 · 雲端 POS 系統</Eyebrow>
    <PageHeading>先懂幾個名詞：前端負責「畫面」，後端負責「處理」</PageHeading>
    <div style={{ marginTop: 14 }}>
      <Steps>
        <Step>
          <div style={{ fontSize: 25, color: muted, lineHeight: 1.5 }}>
            動手之前，先花幾分鐘搞懂這幾個常聽到、卻常常搞不清楚的名詞——之後看 Prompt 才不會霧煞煞。
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 25, fontWeight: 800, marginBottom: 12 }}>用「開餐廳」比喻：外場 vs 內場廚房</div>
            <div style={{ display: 'flex', gap: 24, alignItems: 'stretch' }}>
              <RoleCard
                color={partColor.p5}
                emoji="◧"
                role="前端 FRONTEND"
                file="index.html"
                title="外場——客人看得到的畫面"
                desc="手機上的點餐介面、儀表板上的按鈕和圖表。客人（使用者）能看、能操作的一切。"
              />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span style={{ fontSize: 33, color: muted }}>⇄</span>
                <span style={{ fontSize: 25, color: muted, whiteSpace: 'nowrap' }}>資料來回傳遞</span>
              </div>
              <RoleCard
                color="#C0902E"
                emoji="◨"
                role="後端 BACKEND"
                file="Code.gs"
                title="內場廚房——客人看不到的處理"
                desc="負責讀寫 Google 試算表、計算資料，再把結果送給前端顯示。沒有它，前端就只是空殼。"
              />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 18 }}>
            <Callout color={partColor.p5}>
              什麼是 GAS？Google Apps Script 是 Google
              的程式語言，可以直接操作試算表、表單、Gmail，寫好的程式碼放在
              <b> Google 雲端伺服器</b>上執行——這是它跟 Excel VBA 最大的不同。
            </Callout>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 16 }}>
            <div
              style={{
                border: `1px solid ${cardBorder}`,
                borderRadius: 14,
                padding: '16px 20px',
                background: cardBg,
              }}
            >
              <div style={{ fontSize: 25, fontWeight: 800, color: muted, marginBottom: 8 }}>Excel VBA</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <Cross />
                <span style={{ fontSize: 25, lineHeight: 1.4 }}>只能在「打開這個活頁簿」的那台電腦上跑</span>
              </div>
            </div>
            <div
              style={{
                border: `1px solid ${partColor.p5}44`,
                borderRadius: 14,
                padding: '16px 20px',
                background: `${partColor.p5}0A`,
              }}
            >
              <div style={{ fontSize: 25, fontWeight: 800, color: partColor.p5, marginBottom: 8 }}>GAS（雲端）</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <Check />
                <span style={{ fontSize: 25, lineHeight: 1.4 }}>放上雲端，全年無休都能運作，不受限於自己的電腦</span>
              </div>
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── 補充教學：從基礎的 html、.gs 開始學習 ──────────────────────────────────
const GasCodeBlock = ({
  maxHeight,
  fontSize,
  truncated,
  children,
}: {
  maxHeight?: number;
  fontSize?: number;
  truncated?: boolean;
  children: string;
}) => (
  <div style={{ position: 'relative' }}>
    <pre
      style={{
        margin: 0,
        background: '#1E1E1E',
        color: '#D4D4D4',
        borderRadius: 10,
        padding: '14px 16px',
        fontFamily: 'Consolas, monospace',
        fontSize: fontSize ?? 21,
        lineHeight: 1.45,
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere',
        maxHeight: maxHeight ?? 260,
        overflow: 'hidden',
      }}
    >
      {children}
    </pre>
    {truncated && (
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 48,
          borderRadius: '0 0 10px 10px',
          background: 'linear-gradient(rgba(30,30,30,0), rgba(30,30,30,0.95))',
        }}
      />
    )}
  </div>
);

const GasBasicsStep = ({
  section,
  n,
  desc,
  code,
  codeMaxHeight,
  codeFontSize,
  codeTruncated,
  src,
  alt,
}: {
  section: string;
  n: number;
  desc: string;
  code?: string;
  codeMaxHeight?: number;
  codeFontSize?: number;
  codeTruncated?: boolean;
  src: string;
  alt: string;
}) => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>補充教學 · {section}</Eyebrow>
    <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: partColor.p5,
          color: '#fff',
          fontSize: 23,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {n}
      </span>
      <div style={{ fontSize: 34, fontWeight: 800, color: 'var(--osd-text)' }}>{desc}</div>
    </div>
    {code && (
      <div style={{ marginTop: 16 }}>
        <GasCodeBlock maxHeight={codeMaxHeight} fontSize={codeFontSize} truncated={codeTruncated}>
          {code}
        </GasCodeBlock>
      </div>
    )}
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }} />
    </div>
    <PageFooter />
  </div>
);

const GasBasics01: Page = () => (
  <GasBasicsStep
    section="1. 最基礎的本地端 html 網頁"
    n={1}
    desc="在桌面點擊右鍵→新增→文字文件"
    src={gasBasics01}
    alt="在桌面點擊右鍵，選擇新增→文字文件"
  />
);

const GasBasics02: Page = () => (
  <GasBasicsStep
    section="1. 最基礎的本地端 html 網頁"
    n={2}
    desc="貼上 HTML 程式碼"
    code={'<!DOCTYPE html>\n<html>\n<body>\n  <p>哈囉，這是我的第一個網頁！</p>\n</body>\n</html>'}
    codeMaxHeight={155}
    codeFontSize={17}
    src={gasBasics02}
    alt="在文字文件裡貼上最基礎的 HTML 程式碼"
  />
);

const GasBasics03: Page = () => (
  <GasBasicsStep
    section="1. 最基礎的本地端 html 網頁"
    n={3}
    desc="點擊檔案→另存新檔"
    src={gasBasics03}
    alt="點擊檔案選單，選擇另存新檔"
  />
);

const GasBasics04: Page = () => (
  <GasBasicsStep
    section="1. 最基礎的本地端 html 網頁"
    n={4}
    desc="檔名存 test.html，存檔類型選「所有檔案」"
    src={gasBasics04}
    alt="另存新檔視窗：檔名輸入 test.html，存檔類型選所有檔案"
  />
);

const GasBasics05: Page = () => (
  <GasBasicsStep
    section="1. 最基礎的本地端 html 網頁"
    n={5}
    desc="雙擊打開"
    src={gasBasics05}
    alt="桌面上出現 test 網頁檔案，雙擊打開"
  />
);

const GasBasics06: Page = () => (
  <GasBasicsStep
    section="1. 最基礎的本地端 html 網頁"
    n={6}
    desc="瀏覽器顯示網頁內容，完成第一個本地端 html 網頁"
    src={gasBasics06}
    alt="瀏覽器打開 test.html，顯示：哈囉，這是我的第一個網頁！"
  />
);

const GasBasics07: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={1}
    desc="點擊創建新的 Google Sheet"
    src={gasBasics07}
    alt="Google 搜尋 google sheet，找到 Google 試算表建立頁面"
  />
);

const GasBasics08: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={2}
    desc="填入內容"
    src={gasBasics08}
    alt="新的 Google 試算表填入範例內容：顏色、季節、蔬菜"
  />
);

const GasBasics09: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={3}
    desc="點選 擴充功能→Apps Script"
    src={gasBasics09}
    alt="試算表點選擴充功能選單，選擇 Apps Script"
  />
);

const GasBasics10: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={4}
    desc="點選「+」→HTML"
    src={gasBasics10}
    alt="Apps Script 編輯器點選新增檔案，選擇 HTML"
  />
);

const GasBasics11: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={5}
    desc="名稱輸入「test」，然後按 Enter"
    src={gasBasics11}
    alt="新增 HTML 檔案，名稱輸入 test 並按 Enter"
  />
);

const GasBasics12: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={6}
    desc="貼上 html 程式碼後儲存"
    code={
      '<!DOCTYPE html>\n<html>\n<body>\n  <button onclick="showData(\'A\')">顏色</button>\n  <button onclick="showData(\'B\')">季節</button>\n  <button onclick="showData(\'C\')">蔬菜</button>\n  <p id="result"></p>\n\n  <script>\n    function showData(col) {\n      google.script.run\n        .withSuccessHandler(displayResult)\n        .getColumnData(col);\n    }\n    function displayResult(message) {\n      document.getElementById(\'result\').innerText = message;\n    }\n  </script>\n</body>\n</html>'
    }
    codeMaxHeight={150}
    codeFontSize={15}
    codeTruncated
    src={gasBasics12}
    alt="test.html 貼上前端程式碼，用按鈕呼叫後端並顯示結果"
  />
);

const GasBasics13: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={7}
    desc="貼上 .gs 程式碼後儲存"
    code={
      'function doGet() {\n  return HtmlService.createHtmlOutputFromFile(\'test\');\n}\n\nfunction getColumnData(col) {\n  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();\n  var question = sheet.getRange(col + \'1\').getValue();\n  var answer = sheet.getRange(col + \'2\').getValue();\n  return question + \': \' + answer;\n}'
    }
    src={gasBasics13}
    alt="程式碼.gs 貼上後端程式碼，讀取試算表欄位資料"
  />
);

const GasBasics14: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={8}
    desc="點選「部署」→新增部署作業"
    src={gasBasics14}
    alt="Apps Script 右上角點選部署，選擇新增部署作業"
  />
);

const GasBasics15: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={9}
    desc="部屬類型選「網頁應用程式」、執行身分選「我」、存取權選「所有人」"
    src={gasBasics15}
    alt="新增部署作業設定：類型網頁應用程式、執行身分我、存取權所有人"
  />
);

const GasBasics16: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={10}
    desc="新增說明（版本標題）"
    src={gasBasics16}
    alt="新增部署作業，填寫版本說明：我的第一個 GAS 網頁"
  />
);

const GasBasics17: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={11}
    desc="部署成功，點選並複製網址"
    src={gasBasics17}
    alt="部署成功，顯示網頁應用程式網址"
  />
);

const GasBasics18: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={12}
    desc="開啟網址，出現「應用程式未經驗證」提示，點選 REVIEW PERMISSIONS"
    src={gasBasics18}
    alt="Google Apps Script 未驗證提示，點選 REVIEW PERMISSIONS"
  />
);

const GasBasics19: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={13}
    desc="這個應用程式未經 Google 驗證，點選「進階」"
    src={gasBasics19}
    alt="這個應用程式未經 Google 驗證警告畫面，點選進階"
  />
);

const GasBasics20: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={14}
    desc="點選「前往「未命名的專案」(不安全)」"
    src={gasBasics20}
    alt="展開進階設定後，點選前往未命名的專案（不安全）"
  />
);

const GasBasics21: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={15}
    desc="確認授權範圍，點選「繼續」"
    src={gasBasics21}
    alt="確認應用程式要求存取 Google 帳戶的權限，點選繼續"
  />
);

const GasBasics22: Page = () => (
  <GasBasicsStep
    section="2. GAS 前端＋Google Sheets 後端"
    n={16}
    desc="完成！網頁儀表板正常運作，三個按鈕都能點"
    src={gasBasics22}
    alt="部署完成的網頁應用程式，三個按鈕都能點擊並顯示對應資料"
  />
);

const CloudPracticeNode = ({
  icon,
  title,
  role,
  example,
  color,
}: {
  icon: string;
  title: string;
  role: string;
  example: string;
  color: string;
}) => (
  <div
    style={{
      borderRadius: 24,
      border: `2px solid ${color}55`,
      background: '#FFFFFF',
      padding: '22px 24px',
      boxShadow: '0 12px 30px rgba(39,45,42,0.09)',
      minHeight: 260,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        width: 92,
        height: 92,
        borderRadius: 26,
        background: `${color}16`,
        color,
        display: 'grid',
        placeItems: 'center',
        fontSize: 46,
        fontWeight: 900,
      }}
    >
      {icon}
    </div>
    <div style={{ marginTop: 14, fontSize: 32, fontWeight: 900, color }}>{title}</div>
    <div style={{ marginTop: 6, fontSize: 25, lineHeight: 1.4, color: '#3F4743' }}>{role}</div>
    <div style={{ marginTop: 14, borderRadius: 999, background: `${color}12`, color, padding: '7px 16px', fontSize: 22, fontWeight: 900 }}>
      {example}
    </div>
  </div>
);

const GasPracticeBridge: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>補充教學 · 練習小結</Eyebrow>
    <PageHeading>你剛做的，就是雲端 POS 的縮小版</PageHeading>
    <p style={{ fontSize: 30, color: muted, margin: '12px 0 0' }}>
      「顏色、季節、蔬菜」三個按鈕，已經走完一次完整的雲端資料流程。
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 82px 1fr 82px 1fr', alignItems: 'center', gap: 16, marginTop: 28 }}>
      <CloudPracticeNode icon="▣" title="HTML 前端" role="讓使用者點按鈕、看結果" example="顏色／季節／蔬菜" color="#604294" />
      <div style={{ textAlign: 'center', color: partColor.p5 }}>
        <div style={{ fontSize: 54, fontWeight: 900 }}>→</div>
        <div style={{ fontSize: 18, fontWeight: 900, whiteSpace: 'nowrap' }}>送出指令</div>
      </div>
      <CloudPracticeNode icon="{ }" title="Apps Script 後端" role="收到指令後，決定要讀哪一欄" example="getColumnData()" color="#2B72B8" />
      <div style={{ textAlign: 'center', color: partColor.p5 }}>
        <div style={{ fontSize: 54, fontWeight: 900 }}>→</div>
        <div style={{ fontSize: 18, fontWeight: 900, whiteSpace: 'nowrap' }}>讀取資料</div>
      </div>
      <CloudPracticeNode icon="▦" title="Google Sheets" role="保存問題與答案，讓程式讀取" example="第 1 列問題／第 2 列答案" color="#1F7A4B" />
    </div>

    <div style={{ marginTop: 16, borderRadius: 16, background: '#EAF3FF', border: '1px solid #AFC9EA', padding: '14px 24px', textAlign: 'center', fontSize: 25, color: '#1859A8', fontWeight: 900 }}>
      ← 回傳結果：網頁顯示「我最喜歡的顏色：紅色」
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 130px 1fr', alignItems: 'center', gap: 18, marginTop: 20 }}>
      <div style={{ borderRadius: 18, background: '#F4F1FA', border: '1px solid #D4C9E5', padding: '17px 22px' }}>
        <div style={{ fontSize: 23, fontWeight: 900, color: '#604294' }}>剛才的練習版</div>
        <div style={{ marginTop: 5, fontSize: 28, fontWeight: 900 }}>三個按鈕＋簡單答案</div>
      </div>
      <div style={{ textAlign: 'center', color: '#C0902E' }}>
        <div style={{ fontSize: 42, fontWeight: 900 }}>→</div>
        <div style={{ fontSize: 20, fontWeight: 900 }}>同一套架構</div>
      </div>
      <div style={{ borderRadius: 18, background: '#EAF6EF', border: '2px solid #76B98E', padding: '17px 22px' }}>
        <div style={{ fontSize: 23, fontWeight: 900, color: '#1F7A4B' }}>接下來的營業版</div>
        <div style={{ marginTop: 5, fontSize: 28, fontWeight: 900 }}>銷售、庫存、毛利與儀表板</div>
      </div>
    </div>

    <div style={{ marginTop: 16, borderRadius: 14, background: '#FFF5E5', border: '1px solid #E8C77F', padding: '11px 18px', fontSize: 22, color: '#805A10', textAlign: 'center' }}>
      安全提醒：只有自己建立或確認可信的 Apps Script，才進行進階授權。
    </div>
    <PageFooter />
  </div>
);

// ─── Page 10b — Google 試算表當資料庫＋為什麼要上雲 ──────────────────────────
const Part5CloudConcepts: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>PART 5 · 雲端 POS 系統</Eyebrow>
    <PageHeading>把 Google 試算表當「資料庫」，為什麼要「上雲」？</PageHeading>
    <div style={{ marginTop: 14 }}>
      <Steps>
        <Step>
          <div
            style={{
              border: `1px solid ${cardBorder}`,
              borderRadius: 14,
              padding: '18px 24px',
              background: cardBg,
            }}
          >
            <div style={{ fontSize: 25, fontWeight: 800, color: partColor.p5, marginBottom: 8 }}>
              Google 試算表當「資料庫」是什麼意思？
            </div>
            <div style={{ fontSize: 25, lineHeight: 1.6, marginBottom: 12 }}>
              「資料庫」白話來說，就是一個穩定存放資料、可以被程式讀寫的地方。這裡不架設專業資料庫系統，直接把試算表當資料庫用：GAS
              讀寫儲存格，前端把資料變成好看的儀表板。
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <Check />
                <span style={{ fontSize: 25 }}>優點：已經很熟悉試算表介面，不用學新工具</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <Cross />
                <span style={{ fontSize: 25 }}>缺點：資料量大、多人同時寫入時，速度與穩定度不如正規資料庫</span>
              </div>
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 25, fontWeight: 800, marginBottom: 12 }}>為什麼要「上雲」？——把資料和程式放到網路伺服器</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              <MiniFeature color={partColor.p5} title="隨開即用" desc="手機、平板，只要有網路就能打開儀表板" />
              <MiniFeature color={partColor.p5} title="自動排程" desc="GAS 排程自動執行，例如每天自動寄出缺料通知信" />
              <MiniFeature color={partColor.p5} title="多人共用" desc="同時查看同一份即時資料，不用來回傳檔案" />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 18 }}>
            <Callout color={partColor.p5}>
              這就是為什麼這一章要把 Excel 檔案轉成 Google 試算表，再用 GAS ＋ 網頁前端，做出一個「雲端儀表板」。
            </Callout>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 10c — 學習目標 ─────────────────────────────────────────────────────
const Part5Goals: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>PART 5 · 雲端 POS 系統</Eyebrow>
    <PageHeading>學習目標：完成這一章，你會做到什麼？</PageHeading>
    <div style={{ marginTop: 20 }}>
      <Steps>
        <Step>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <RankBadge n={1} color={partColor.p5} />
            <div style={{ fontSize: 25, lineHeight: 1.5 }}>能把 Excel 檔轉成 Google 試算表，並找到「試算表 ID」</div>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginTop: 18 }}>
            <RankBadge n={2} color={partColor.p5} />
            <div style={{ fontSize: 25, lineHeight: 1.5 }}>能寫出精準的 Prompt，讓 AI 產出可用的 Apps Script 後端與 HTML 前端</div>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginTop: 18 }}>
            <RankBadge n={3} color={partColor.p5} />
            <div style={{ fontSize: 25, lineHeight: 1.5 }}>能在 Apps Script 編輯器貼上程式、部署為「網頁應用程式」並取得網址</div>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginTop: 18 }}>
            <RankBadge n={4} color={partColor.p5} />
            <div style={{ fontSize: 25, lineHeight: 1.5 }}>
              理解常見錯誤——儲存格對不上、權限問題、Excel 動態陣列與 Google 試算表的差異
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared: cloud-setup flow visuals (前置作業) ───────────────────────────────
const CloudPinBadge = ({ n }: { n: number }) => (
  <div
    style={{
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: partColor.p5,
      color: '#fff',
      fontSize: 25,
      fontWeight: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: '0 2px 6px rgba(106,95,203,0.35)',
    }}
  >
    {n}
  </div>
);

const CloudStep = ({ n, title, desc, tag }: { n: number; title: string; desc: string; tag?: string }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
    <CloudPinBadge n={n} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontSize: 31, fontWeight: 800 }}>{title}</div>
        {tag && (
          <span
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: partColor.p5,
              background: `${partColor.p5}14`,
              borderRadius: 999,
              padding: '2px 10px',
            }}
          >
            {tag}
          </span>
        )}
      </div>
      <div style={{ fontSize: 25, color: muted, lineHeight: 1.45 }}>{desc}</div>
    </div>
  </div>
);

const FileIcon = ({ bg, glyph, label, badge }: { bg: string; glyph: string; label: string; badge?: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, position: 'relative' }}>
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: 14,
        background: bg,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        fontWeight: 800,
        boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
      }}
    >
      {glyph}
    </div>
    {badge && (
      <div
        style={{
          position: 'absolute',
          top: -10,
          right: -14,
          background: '#1F7A4B',
          color: '#fff',
          borderRadius: 999,
          fontSize: 25,
          fontWeight: 800,
          padding: '3px 9px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.22)',
          whiteSpace: 'nowrap',
        }}
      >
        {badge}
      </div>
    )}
    <span style={{ fontSize: 25, fontWeight: 700, textAlign: 'center', maxWidth: 160 }}>{label}</span>
  </div>
);

const MenuChip = ({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) => (
  <div
    style={{
      padding: '9px 18px',
      borderRadius: 8,
      border: `1px solid ${highlight ? partColor.p5 : cardBorder}`,
      background: highlight ? `${partColor.p5}14` : cardBg,
      color: highlight ? partColor.p5 : 'var(--osd-text)',
      fontWeight: 800,
      fontSize: 25,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </div>
);

// ─── Page 13a — 三、前置作業：上傳並轉換成 Google 試算表 ───────────────────────
const Part5UploadConvert: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.34</Eyebrow>
    <PageHeading>三、前置作業：把 Excel 搬上雲端，變成 Google 試算表</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 20 }}>
      任務 34：把 Excel 上傳到雲端，並轉換為 Google Sheets
    </div>
    <div style={{ marginTop: 22 }}>
      <MockChrome label="drive.google.com">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
          <FileIcon bg="#1D6F42" glyph="X" label="鍋貼店主檔資料.xlsx" />
          <FlowArrow />
          <FileIcon bg="#F4B400" glyph="▲" label="Google 雲端硬碟" />
          <FlowArrow />
          <FileIcon bg="#0F9D58" glyph="▦" label="鍋貼店主檔資料" badge="已轉換 ✓" />
        </div>
      </MockChrome>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Steps>
        <Step>
          <CloudStep
            n={1}
            tag="可選，一次設定"
            title="開啟自動轉檔設定"
            desc="drive.google.com → 右上角齒輪 →「設定」→ 勾選「將上傳的檔案轉換為 Google 文件編輯器格式」"
          />
        </Step>
        <Step>
          <div style={{ marginTop: 16 }}>
            <CloudStep n={2} title="拖曳上傳檔案" desc="把「鍋貼店主檔資料.xlsx」直接拖曳到雲端硬碟視窗中" />
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 16 }}>
            <CloudStep
              n={3}
              title="右鍵轉換成 Google 試算表"
              desc="對檔案按右鍵 →「開啟工具」→「Google 試算表」（若第 1 步沒勾選，會另存為一份新的 Google 試算表）"
            />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13b — 三、前置作業：安裝 ChatGPT for Google Sheets ──────────────────
const Part5ChatGptSheets: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.34</Eyebrow>
    <PageHeading>安裝外掛，讓 ChatGPT 直接在 Google 試算表裡工作</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 20 }}>
      任務 35：下載 ChatGPT for Google Sheets
    </div>
    <div style={{ display: 'flex', gap: 32, marginTop: 26, alignItems: 'stretch' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <MockChrome label="workspace.google.com/marketplace">
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <AddinIcon bg="#10A37F" glyph="✦" label="ChatGPT for Google Sheets" />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <AddinLink
                label="ChatGPT for Sheets"
                url="https://workspace.google.com/marketplace/app/chatgpt/870214997678"
              />
              <div
                style={{
                  alignSelf: 'flex-start',
                  background: '#10A37F',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 25,
                  borderRadius: 8,
                  padding: '6px 22px',
                }}
              >
                安裝
              </div>
            </div>
          </div>
        </MockChrome>
        <Steps>
          <Step>
            <CloudStep n={1} title="前往 Marketplace 安裝" desc="開啟安裝連結 → 登入 Google 帳號 → 點擊「安裝」" />
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <MockChrome label="Google Sheets — 鍋貼店主檔資料">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <MenuChip>擴充功能</MenuChip>
              <FlowArrow />
              <MenuChip>ChatGPT</MenuChip>
              <FlowArrow />
              <MenuChip highlight>Open Sidebar</MenuChip>
            </div>
            <div style={{ fontSize: 25, color: muted }}>右側會開啟 ChatGPT 側邊欄，可直接對著試算表下指令</div>
          </div>
        </MockChrome>
        <Steps>
          <Step>
            <CloudStep n={2} title="回到 Google Sheets 開啟側邊欄" desc="上方工具列「擴充功能」→ ChatGPT →「Open Sidebar」" />
          </Step>
        </Steps>
      </div>
    </div>
    <div style={{ marginTop: 24 }}>
      <Callout color={partColor.p5}>
        裝好之後，你的 Google 試算表就有了跟 Excel 一樣的 AI 助手——接下來就能直接對著雲端資料下 Prompt。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared: sheet cell-range map (for Apps Script backend pages) ─────────────
const SheetZone = ({ color, label, range, dynamic }: { color: string; label: string; range: string; dynamic?: boolean }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '10px 16px',
      background: `${color}12`,
      borderLeft: `5px solid ${color}`,
      borderRadius: 8,
    }}
  >
    <span style={{ fontWeight: 800, fontSize: 25, color }}>{label}</span>
    <span
      style={{
        fontFamily: 'monospace',
        fontSize: 25,
        fontWeight: 700,
        background: '#fff',
        border: `1px solid ${color}44`,
        borderRadius: 6,
        padding: '3px 10px',
        whiteSpace: 'nowrap',
      }}
    >
      {range}
      {dynamic ? '（動態抓到底）' : ''}
    </span>
  </div>
);

const FnStep = ({ n, title, desc }: { n: number; title: string; desc: string }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
    <CloudPinBadge n={n} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontSize: 25, fontWeight: 800, fontFamily: 'monospace', color: partColor.p5 }}>{title}</div>
      <div style={{ fontSize: 25, color: muted, lineHeight: 1.45 }}>{desc}</div>
    </div>
  </div>
);

// ─── Shared: dark-tech dashboard mockup (for 前端 index.html pages) ───────────
const darkBg = '#0D1B2A';
const darkCard = '#162032';
const darkPrimary = '#1F4E79';
const darkAccent = '#00B4D8';
const darkAlert = '#E74C3C';
const darkOk = '#27AE60';
const darkMuted = '#8CA0B3';

const DarkMock = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: darkBg,
      borderRadius: 18,
      padding: '22px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxShadow: '0 14px 34px rgba(0,0,0,0.28)',
    }}
  >
    {children}
  </div>
);

const DarkHeader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 58,
          height: 58,
          borderRadius: 8,
          background: darkPrimary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: darkAccent,
          fontWeight: 900,
          fontSize: 25,
        }}
      >
        POS
      </div>
      <span style={{ color: '#fff', fontWeight: 800, fontSize: 25 }}>銷售與庫存儀表板</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <span style={{ color: darkMuted, fontSize: 25 }}>更新於 14:32</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: darkOk, fontSize: 25, fontWeight: 700 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: darkOk }} />
        即時同步
      </span>
    </div>
  </div>
);

const DarkFilterRow = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    {['年 2026', '月 07', '日 全部'].map((v) => (
      <div
        key={v}
        style={{
          background: darkCard,
          border: `1px solid ${darkAccent}`,
          color: darkAccent,
          borderRadius: 8,
          padding: '6px 16px',
          fontSize: 25,
          fontWeight: 700,
        }}
      >
        {v} ▾
      </div>
    ))}
    <span style={{ color: darkMuted, fontSize: 25, marginLeft: 6 }}>選好後自動呼叫 setFilter，畫面即時重算</span>
  </div>
);

const DarkKpiCard = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div
    style={{
      background: darkCard,
      border: `1px solid ${color}44`,
      borderRadius: 12,
      padding: '14px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    }}
  >
    <span style={{ color: darkMuted, fontSize: 25, fontWeight: 700 }}>{label}</span>
    <span style={{ color, fontSize: 32, fontWeight: 900 }}>{value}</span>
  </div>
);

const DarkBarRow = ({ label, pct, color }: { label: string; pct: number; color: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <span style={{ color: '#fff', fontSize: 25, width: 190, flexShrink: 0, whiteSpace: 'nowrap' }}>{label}</span>
    <div style={{ flex: 1, height: 14, background: darkBg, borderRadius: 6, overflow: 'hidden' }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 6 }} />
    </div>
    <span style={{ color, fontSize: 25, fontWeight: 800, width: 66, textAlign: 'right' }}>{pct}%</span>
  </div>
);

const DarkRankRow = ({ n, name, gm, level }: { n: number; name: string; gm: string; level: 'high' | 'mid' | 'low' }) => {
  const col = level === 'high' ? darkOk : level === 'mid' ? darkAccent : darkAlert;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid #1F2C3D' }}>
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: col,
          color: darkBg,
          fontSize: 25,
          fontWeight: 900,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {n}
      </span>
      <span style={{ color: '#fff', fontSize: 25, flex: 1 }}>{name}</span>
      <span style={{ color: col, fontSize: 25, fontWeight: 800, background: `${col}22`, borderRadius: 999, padding: '4px 14px' }}>
        {gm}
      </span>
    </div>
  );
};

const DarkDonut = ({ slices }: { slices: { color: string; pct: number }[] }) => {
  let acc = 0;
  const stops = slices
    .map((s) => {
      const start = acc;
      acc += s.pct;
      return `${s.color} ${start}% ${acc}%`;
    })
    .join(', ');
  return (
    <div style={{ position: 'relative', width: 104, height: 104, borderRadius: '50%', background: `conic-gradient(${stops})`, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: 18, borderRadius: '50%', background: darkCard }} />
    </div>
  );
};

const DarkChannelRow = ({ label, pct, color }: { label: string; pct: number; color: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 }} />
    <span style={{ color: '#fff', fontSize: 25, width: 120, flexShrink: 0, whiteSpace: 'nowrap' }}>{label}</span>
    <div style={{ flex: 1, height: 12, background: darkBg, borderRadius: 5, overflow: 'hidden' }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color }} />
    </div>
    <span style={{ color, fontSize: 25, fontWeight: 800, width: 66, textAlign: 'right' }}>{pct}%</span>
  </div>
);

const DarkStackHealth = ({ normal, low, out }: { normal: number; low: number; out: number }) => (
  <div style={{ display: 'flex', height: 42, borderRadius: 8, overflow: 'hidden' }}>
    <div style={{ width: `${normal}%`, background: darkOk, display: 'flex', alignItems: 'center', justifyContent: 'center', color: darkBg, fontSize: 25, fontWeight: 800 }}>
      {normal > 14 ? `正常 ${normal}%` : ''}
    </div>
    <div style={{ width: `${low}%`, background: '#F2C744', display: 'flex', alignItems: 'center', justifyContent: 'center', color: darkBg, fontSize: 25, fontWeight: 800 }}>
      {low > 10 ? `偏低 ${low}%` : ''}
    </div>
    <div style={{ width: `${out}%`, background: darkAlert, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 25, fontWeight: 800 }}>
      {out > 8 ? `缺料 ${out}%` : ''}
    </div>
  </div>
);

const DarkAlertRow = ({ name, status }: { name: string; status: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #1F2C3D' }}>
    <span style={{ color: '#fff', fontSize: 25 }}>{name}</span>
    <span style={{ color: darkAlert, fontSize: 25, fontWeight: 800, background: `${darkAlert}22`, borderRadius: 999, padding: '2px 10px' }}>{status}</span>
  </div>
);

const BehaviorChip = ({ color, text }: { color: string; text: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: `${color}0F`,
      border: `1px solid ${color}33`,
      borderRadius: 12,
      padding: '10px 16px',
      flex: 1,
    }}
  >
    <span style={{ width: 9, height: 9, borderRadius: '50%', background: color, flexShrink: 0 }} />
    <span style={{ fontSize: 25, lineHeight: 1.4 }}>{text}</span>
  </div>
);

// ─── Shared: dark "新增銷售" form mockup (matches real app screenshot) ────────
const DarkFormMock = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 330, borderRadius: 16, overflow: 'hidden', border: '1px solid #1F2C3D', boxShadow: '0 14px 34px rgba(0,0,0,0.3)', flexShrink: 0 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: darkPrimary }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 25 }}>📋</span>
        <span style={{ color: '#fff', fontWeight: 800, fontSize: 25 }}>新增銷售</span>
      </div>
      <span style={{ color: '#fff', fontSize: 25, opacity: 0.7 }}>✕</span>
    </div>
    <div style={{ background: darkBg, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>{children}</div>
  </div>
);

const DarkStatusBanner = ({ ok, text }: { ok: boolean; text: string }) => (
  <div
    style={{
      border: `1px solid ${ok ? darkOk : darkAlert}55`,
      background: `${ok ? darkOk : darkAlert}14`,
      borderRadius: 10,
      padding: '10px 14px',
      color: ok ? darkOk : darkAlert,
      fontSize: 25,
      fontWeight: 700,
      lineHeight: 1.4,
    }}
  >
    {ok ? '✓' : '✗'} {text}
  </div>
);

const DarkFormField = ({ label, value, dropdown, highlight }: { label: string; value: string; dropdown?: boolean; highlight?: boolean }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
    <span style={{ fontSize: 25, color: darkMuted }}>{label}</span>
    <div
      style={{
        border: '1px solid #2A3A4D',
        background: darkCard,
        borderRadius: 8,
        padding: '9px 14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ color: highlight ? darkAccent : '#fff', fontWeight: highlight ? 800 : 600, fontSize: 25 }}>{value}</span>
      {dropdown && <span style={{ color: darkMuted, fontSize: 13 }}>▾</span>}
    </div>
  </div>
);

const DarkSubmitButton = ({ label }: { label: string }) => (
  <div
    style={{
      background: `linear-gradient(90deg, ${darkPrimary}, ${darkAccent})`,
      color: '#fff',
      fontWeight: 800,
      fontSize: 25,
      textAlign: 'center',
      borderRadius: 8,
      padding: '12px',
    }}
  >
    {label}
  </div>
);

// ─── Page 13a — 讓 AI 修改公式與下拉清單 ───────────────────────────────────────
const Part5FixFormulas: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.36</Eyebrow>
    <PageHeading>轉檔後先體檢：讓 AI 修好公式與下拉清單</PageHeading>
    <div style={{ fontSize: 31, fontWeight: 800, color: taskColor, marginTop: 18 }}>
      任務 36：讓 AI 修改公式與下拉清單
    </div>
    <div style={{ marginTop: 16 }}>
      <Steps>
        <Step>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <FlowChip label="① 打開 ChatGPT Sidebar" color={partColor.p5} />
            <FlowArrow />
            <FlowChip label="② 貼上 Prompt 27（12 步驟健檢）" color={partColor.p5} />
            <FlowArrow />
            <FlowChip label="③ 驗證修復結果" color={partColor.p5} />
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 18, flexWrap: 'wrap' }}>
            <FlowChip label="盤點工作表" color={taskColor} />
            <FlowArrow />
            <FlowChip label="揪出錯誤＋轉檔殘留＋固定範圍" color={taskColor} />
            <FlowArrow />
            <FlowChip label="換成 Sheets 原生公式＋修好下拉" color={taskColor} />
            <FlowArrow />
            <FlowChip label="全表回測＋列出修改清單" color={taskColor} />
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 25, fontWeight: 800, color: muted, marginBottom: 8 }}>常見轉檔問題 → 修復方式</div>
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '1.3fr 1fr 1.6fr',
              }}
            >
              <BomHeaderCell small label="問題現象" />
              <BomHeaderCell small label="範例位置" />
              <BomHeaderCell small label="修復方式" />

              <BomCell small value="公式出現 #REF!／#NAME?／#VALUE!／#N/A／#DIV/0!" error />
              <BomCell small value="營收毛利!D15" />
              <BomCell small value="改寫成 Sheets 原生公式（SUMIFS／XLOOKUP…）" formula />

              <BomCell small value="出現 _xlfn.／_xlws.／ARRAY_CONSTRAIN 前綴" error band />
              <BomCell small value="儀表板!C8" band />
              <BomCell small value="移除轉檔殘留語法，改用原生寫法" formula band />

              <BomCell small value="範圍寫死結束列，如 $A$2:$A$100" error />
              <BomCell small value="商品主檔!A2:A100" />
              <BomCell small value="改成整欄動態範圍 A2:A" formula />

              <BomCell small value="新增商品／物料時，下拉抓不到新項目" error band />
              <BomCell small value="供應商主檔 下拉來源" band />
              <BomCell small value="檢查資料驗證規則來源，確認指向正確整欄" formula band />
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'flex', gap: 16, marginTop: 20 }}>
            <RuleChip text="Step 3：數字與原本 Excel 完全一致" />
            <RuleChip text="公式沒有任何錯誤訊息" />
            <RuleChip text="下拉選單已改成整欄參照（例：A2:A）" />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13b — 四、產生後端 Apps Script（一）：對齊試算表位置 ─────────────────
const Part5BackendMap: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.36-37</Eyebrow>
    <PageHeading>四、產生後端 Apps Script：先把「位置」對齊</PageHeading>
    <div style={{ fontSize: 33, fontWeight: 800, color: taskColor, marginTop: 16 }}>
      任務 37：讓 AI 產出後端 Apps Script（Code.gs）
    </div>
    <div style={{ marginTop: 14 }}>
      <Callout color={painRed}>
        ⚠️ 重點：後端 .gs 是靠「固定儲存格範圍」讀值。哪個工作表、哪個範圍放什麼，Prompt 一定要講清楚，AI 才能寫出對齊的程式。
      </Callout>
    </div>
    <div style={{ display: 'flex', gap: 28, marginTop: 18, flex: 1, minHeight: 0 }}>
      <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontSize: 25, fontWeight: 800, color: muted }}>「儀表板」工作表 —— 各區塊的儲存格範圍</div>
        <SheetZone color={partColor.p4} label="篩選輸入格：年／月／日" range="B3:B5" />
        <SheetZone color={partColor.p1} label="KPI 區" range="A8:F9" />
        <SheetZone color={partColor.p3} label="商品排行區" range="A12:E17" />
        <SheetZone color={partColor.p2} label="通路區" range="A20:D23" />
        <SheetZone color="#C0902E" label="庫存統計區" range="A26:B29" />
        <SheetZone color={painRed} label="庫存異常清單" range="第 32 列起、A～H 欄" dynamic />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 25, fontWeight: 800, color: muted }}>「營收毛利」工作表 —— 下拉選單來源</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SheetZone color={partColor.p5} label="年清單" range="N2:N" dynamic />
          <SheetZone color={partColor.p5} label="月清單" range="O2:O" dynamic />
          <SheetZone color={partColor.p5} label="日清單" range="P2:P" dynamic />
        </div>
        <Callout color={muted}>
          Step 2：記下試算表 ID —— 網址列 docs.google.com/spreadsheets/d/【這一段就是 ID】/edit
        </Callout>
        <div style={{ fontSize: 25, color: muted, lineHeight: 1.5 }}>
          Step 3：建議在網頁版 Claude 或 ChatGPT 操作，畫面空間較大，方便貼上完整 Prompt。
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13c — 四、產生後端 Apps Script（二）：5 個核心函式 ───────────────────
const Part5BackendFunctions: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.37</Eyebrow>
    <PageHeading>任務 37（續）：Code.gs 要寫出的 5 個函式</PageHeading>
    <div style={{ display: 'flex', gap: 40, marginTop: 30, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Steps>
          <Step>
            <FnStep n={1} title="doGet()" desc="使用者打開網址時，負責把儀表板網頁顯示出來（允許被 iframe 內嵌）" />
          </Step>
          <Step>
            <div style={{ marginTop: 4 }}>
              <FnStep n={2} title="getFilterOptions()" desc="把可以選的年、月、日撈出來，填進網頁上的三個下拉選單" />
            </div>
          </Step>
          <Step>
            <div style={{ marginTop: 4 }}>
              <FnStep n={3} title="setFilter(year, month, day)" desc="使用者一選年月日，就把選擇寫回試算表讓公式重算，再把新數字送回網頁" />
            </div>
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Steps>
          <Step>
            <FnStep n={4} title="getCurrentFilter()" desc="讀出目前選了哪個年月日，讓網頁的下拉維持在正確選項" />
          </Step>
          <Step>
            <div style={{ marginTop: 4 }}>
              <FnStep n={5} title="getDashboardData()" desc="把 KPI、商品排行、通路、庫存——所有要顯示的數字一次打包送給網頁" />
            </div>
          </Step>
          <Step>
            <div style={{ marginTop: 26 }}>
              <Callout color="#C0902E">
                教學提醒：以上範圍要跟你自己 Google 試算表的實際版面一致；版面不同（例如 KPI 不在 A8:F9），就把 Prompt 裡的範圍改成你的位置——這是最常見的錯誤來源。
              </Callout>
            </div>
          </Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13d — 五、產生前端網頁（一）：視覺風格與版面 ─────────────────────────
const Part5FrontendLayout: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.37-38</Eyebrow>
    <PageHeading>五、產生前端網頁：深色科技風儀表板長這樣</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8, flexWrap: 'wrap' }}>
      <RuleChip text="深藍底 #0D1B2A" />
      <RuleChip text="卡片 #162032" />
      <RuleChip text="主色 #1F4E79" />
      <RuleChip text="強調色 #00B4D8" />
      <RuleChip text="警示紅 #E74C3C" />
      <RuleChip text="成功綠 #27AE60" />
    </div>
    <div style={{ marginTop: 18 }}>
      <DarkMock>
        <DarkHeader />
        <DarkFilterRow />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          <DarkKpiCard label="營業額" value="$68,400" color={darkAccent} />
          <DarkKpiCard label="毛利" value="$29,150" color={darkOk} />
          <DarkKpiCard label="毛利率" value="42.6%" color={darkOk} />
          <DarkKpiCard label="來客數" value="512" color="#fff" />
          <DarkKpiCard label="數量" value="1,203" color="#fff" />
          <DarkKpiCard label="客單價" value="$133.6" color={darkAccent} />
        </div>
      </DarkMock>
    </div>
    <div style={{ marginTop: 18 }}>
      <Callout color={partColor.p5}>
        6 張 KPI 卡片依標籤自動判斷貨幣／百分比／數字格式，卡片要有圖示與滑鼠移入時的 hover 效果。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13e — 五、產生前端網頁（二）：三大區塊與互動行為 ─────────────────────
const Part5FrontendSections: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.37-38</Eyebrow>
    <PageHeading>任務 37（續）：商品／通路／庫存三大區塊</PageHeading>
    <div style={{ marginTop: 12 }}>
      <DarkMock>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ color: darkMuted, fontSize: 25, fontWeight: 700 }}>商品毛利率排行（左圖右表）</span>
            <DarkBarRow label="原味鍋貼" pct={50} color={darkOk} />
            <DarkBarRow label="韓式泡菜鍋貼" pct={40} color={darkAccent} />
            <DarkBarRow label="玉米濃湯" pct={28} color={darkAlert} />
            <div style={{ marginTop: 6 }}>
              <DarkRankRow n={1} name="原味鍋貼" gm="50%" level="high" />
              <DarkRankRow n={2} name="韓式泡菜鍋貼" gm="40%" level="mid" />
              <DarkRankRow n={3} name="玉米濃湯" gm="28%" level="low" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ color: darkMuted, fontSize: 25, fontWeight: 700 }}>通路訂單佔比（SVG 甜甜圈＋圖例）</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <DarkDonut slices={[{ color: darkOk, pct: 45 }, { color: darkAccent, pct: 33 }, { color: darkAlert, pct: 22 }]} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <DarkChannelRow label="內用" pct={45} color={darkOk} />
                <DarkChannelRow label="外帶" pct={33} color={darkAccent} />
                <DarkChannelRow label="外送平台" pct={22} color={darkAlert} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
          <span style={{ color: darkMuted, fontSize: 25, fontWeight: 700 }}>庫存健康度（堆疊條＋異常品項）</span>
          <DarkStackHealth normal={65} low={22} out={13} />
          <DarkAlertRow name="豬絞肉 — 低於安全庫存" status="待通知" />
          <DarkAlertRow name="外帶紙盒 — 缺料" status="待通知" />
        </div>
      </DarkMock>
    </div>
    <div style={{ display: 'flex', gap: 14, marginTop: 16 }}>
      <BehaviorChip color={partColor.p5} text="頁面載入即自動呼叫三支函式，帶出資料、下拉選項與目前篩選" />
      <BehaviorChip color={darkOk} text="withSuccessHandler 顯示資料成功" />
      <BehaviorChip color={darkAlert} text="withFailureHandler 顯示紅色錯誤提示，不會整頁當掉" />
      <BehaviorChip color={taskColor} text="RWD：手機兩欄／單欄，載入時顯示遮罩與 spinner" />
    </div>
    <PageFooter />
  </div>
);

// ─── Shared: light-theme toast message ────────────────────────────────────────
const ToastMsg = ({ ok, text }: { ok: boolean; text: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 25,
      fontWeight: 700,
      color: ok ? '#1F7A4B' : painRed,
      background: `${ok ? '#1F7A4B' : painRed}14`,
      border: `1px solid ${ok ? '#1F7A4B' : painRed}44`,
      borderRadius: 8,
      padding: '8px 12px',
    }}
  >
    <span>{ok ? '✓' : '✗'}</span>
    <span>{text}</span>
  </div>
);

// ─── Shared: trouble/debug card ───────────────────────────────────────────────
const TroubleCard = ({ title, desc }: { title: string; desc: string }) => (
  <div
    style={{
      flex: 1,
      background: `${painRed}0A`,
      border: `1px solid ${painRed}33`,
      borderTop: `4px solid ${painRed}`,
      borderRadius: 14,
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ fontSize: 25 }}>⚠</span>
      <span style={{ fontSize: 25, fontWeight: 800, color: painRed }}>{title}</span>
    </div>
    <div style={{ fontSize: 25, color: 'var(--osd-text)', lineHeight: 1.5 }}>{desc}</div>
  </div>
);

// ─── Shared: email preview mockup ─────────────────────────────────────────────
const EmailMock = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      border: `1px solid ${cardBorder}`,
      borderRadius: 14,
      background: cardBg,
      boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        padding: '12px 18px',
        borderBottom: `1px solid ${cardBorder}`,
        background: '#F7F5EE',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <span style={{ fontSize: 25, color: muted }}>收件人：目前登入的 Google 帳號</span>
      <span style={{ fontSize: 25, fontWeight: 800 }}>【鍋貼店】缺料 ／ 低庫存警示</span>
    </div>
    <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>{children}</div>
  </div>
);

const EmailItemRow = ({ name, status }: { name: string; status: '缺料' | '低於安全庫存' }) => {
  const col = status === '缺料' ? painRed : '#C0902E';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 25 }}>{name}</span>
      <span style={{ fontSize: 25, fontWeight: 800, color: col, background: `${col}14`, borderRadius: 999, padding: '3px 12px' }}>{status}</span>
    </div>
  );
};

// ─── Page 13a — 六、部署步驟：讓網頁應用程式真正上線 ───────────────────────────
const Part5Deploy: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.38</Eyebrow>
    <PageHeading>六、部署步驟：讓網頁應用程式真正上線</PageHeading>
    <div style={{ fontSize: 30, fontWeight: 800, color: taskColor, marginTop: 16 }}>任務 39：部署網頁應用程式</div>
    <div style={{ marginTop: 14 }}>
      <Steps>
        <Step>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <FlowChip label="擴充功能 → Apps Script" color={taskColor} />
            <FlowArrow />
            <FlowChip label="貼上後端 Code.gs" color={taskColor} />
            <FlowArrow />
            <FlowChip label="＋檔案 → HTML，命名 index" color={taskColor} />
            <FlowArrow />
            <FlowChip label="💾 儲存" color={taskColor} />
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: 25, fontWeight: 800, color: muted, marginBottom: 8 }}>右上「部署」→ 新增部署作業 → 類型選「網頁應用程式」</div>
            <DialogMock title="新增部署作業 · 網頁應用程式">
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 25, fontWeight: 700, width: 220 }}>執行身分</span>
                  <DialogInput value="我（本人帳號）" highlight />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 25, fontWeight: 700, width: 220 }}>具有存取權的使用者</span>
                  <DialogInput value="任何人 ／ 僅限我" />
                </div>
                <div style={{ fontSize: 25, color: muted, lineHeight: 1.4, marginTop: 2 }}>
                  執行身分一定要選「我」，這樣程式才有權限讀寫你的試算表。
                </div>
              </div>
              <DialogButtons />
            </DialogMock>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: 25, fontWeight: 800, color: muted, marginBottom: 8 }}>第一次部署會要求授權</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <FlowChip label="檢閱權限" color={partColor.p5} />
              <FlowArrow />
              <FlowChip label="選帳號" color={partColor.p5} />
              <FlowArrow />
              <FlowChip label="進階" color={partColor.p5} />
              <FlowArrow />
              <FlowChip label="前往專案" color={partColor.p5} />
              <FlowArrow />
              <FlowChip label="允許" color={partColor.p5} />
            </div>
            <div style={{ fontSize: 25, color: muted, marginTop: 6 }}>
              出現「Google 尚未驗證這個應用程式」是正常的——這是你自己寫的程式，照步驟按下去即可。
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 18 }}>
            <ToastMsg ok text="部署完成後會拿到一個網頁應用程式網址，開啟即可看到儀表板；切換下拉，資料會即時連動。" />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13b — 七、進階：做一個把資料寫回試算表的輸入頁面 ─────────────────────
const Part5WriteBack: Page = () => (
  <div style={page}>
    <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.39-40</Eyebrow>
    <PageHeading>七、進階：做一個把資料「寫回」試算表的輸入頁面</PageHeading>
    <div style={{ fontSize: 32, fontWeight: 800, color: taskColor, marginTop: 14 }}>
      任務 40：[作業] 跟 AI 討論，做出一個能把資料寫回試算表的輸入頁面
    </div>
    <div style={{ marginTop: 12 }}>
      <Callout color={partColor.p5}>
        情境：儀表板目前只能「看」資料。這次請你自己跟 AI 討論、逐步引導它做出一個手機也能用的網頁表單，讓使用者填一筆銷售就直接寫進「銷售紀錄」。
      </Callout>
    </div>
    <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontSize: 25, fontWeight: 800, color: partColor.p5 }}>後端（Code.gs）要新增</div>
        <MiniFeature
          color={partColor.p5}
          title="讀取下拉選項"
          desc="能讀取「上架中商品清單（含售價）」與「銷售通路清單」，讓表單下拉有選項可用"
        />
        <MiniFeature
          color={partColor.p5}
          title="寫入一筆銷售"
          desc="訂單編號／明細編號接續原本編號規則、日期用台灣時間、寫入失敗要顯示看得懂的中文錯誤訊息"
        />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontSize: 25, fontWeight: 800, color: '#C0902E' }}>前端（index.html）要新增</div>
        <MiniFeature color="#C0902E" title="「新增銷售」彈出視窗" desc="不要讓 AI 自己假設欄位順序或編號規則——先給它看實際欄位格式" />
        <MiniFeature color="#C0902E" title="成功／失敗回饋" desc="成功要清空表單方便連續輸入；失敗顯示紅字提示；成功後儀表板數字要跟著更新" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <DarkFormMock>
          <DarkStatusBanner ok text="已新增銷售紀錄（第 15 列，訂單編號 O20260602003、明細 D014）。" />
          <DarkFormField label="銷售日期" value="2026/06/02" />
          <DarkFormField label="商品" value="請選擇商品" dropdown />
          <DarkFormField label="銷售數量" value="1" />
          <DarkFormField label="折扣金額" value="0" />
          <DarkFormField label="銷售通路" value="外帶" dropdown />
          <DarkFormField label="預估金額" value="NT$ 0" highlight />
          <DarkSubmitButton label="送出並繼續" />
        </DarkFormMock>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 16, marginTop: 18 }}>
      <RuleChip text="部署執行身分要設成「我」，改了後端記得重新部署「新版本」" />
      <RuleChip text="練習：送出成功後，確認儀表板數字也一起刷新" />
    </div>
    <PageFooter />
  </div>
);

// ─── Shared: three-column comparison table (VBA vs GAS) ───────────────────────
const CompareHead = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <div style={{ background: color, color: '#fff', fontWeight: 800, fontSize: 25, padding: '10px 18px' }}>{children}</div>
);

// ─── Page 13c — 八、常見雷點（Debug 清單） ─────────────────────────────────────
const Part5Debug: Page = () => (
  <div style={page}>
    <PageHeading>八、常見雷點：Debug 清單</PageHeading>
    <div style={{ display: 'flex', gap: 24, marginTop: 30 }}>
      <TroubleCard
        title="儲存格對不上"
        desc="後端讀的範圍（B4:K5、A9:E13…）必須和試算表實際版面一致，否則會抓到空值或錯位。改版面時記得同步改 .gs。"
      />
      <TroubleCard
        title="權限／授權出問題"
        desc="換帳號或改動讀取範圍後，需要重新授權一次；「執行身分」一定要設成本人，否則沒有權限讀寫。"
      />
      <TroubleCard
        title="改了程式沒生效"
        desc="Web App 要「重新部署」才會更新：部署 → 管理部署作業 → 編輯 → 版本選「新版本」。"
      />
    </div>
    <div style={{ marginTop: 28 }}>
      <Callout color={muted}>三個雷點的共通點：後端程式碼跟試算表的實際版面／部署狀態，永遠要保持「對齊」與「最新」。</Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13d — 九、缺料自動 Email 通知（進階：主動預警） ─────────────────────
const Part5AutoEmail: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={partColor.p5}>PART 5 · 雲端 POS 系統</Eyebrow>
      <Eyebrow color={taskColor}>課堂練習 · 操作手冊 P.41</Eyebrow>
    </div>
    <PageHeading>九、缺料自動 Email 通知：主動預警，不用一直盯著看</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10 }}>
      <span
        style={{
          fontSize: 25,
          fontWeight: 800,
          color: partColor.p5,
          background: `${partColor.p5}14`,
          borderRadius: 999,
          padding: '5px 14px',
        }}
      >
        Prompt 29
      </span>
    </div>
    <div style={{ marginTop: 10 }}>
      <Callout color={partColor.p5}>
        情境：庫存管理已經能自動算出「缺料」「低於安全庫存」的品項，這一節讓 Apps Script 主動幫你寄信通知，不用每天手動盯著儀表板看。
      </Callout>
    </div>
    <div style={{ display: 'flex', gap: 32, marginTop: 20, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Steps>
          <Step>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FlowChip label="直接從「儀表板」底部既有的異常品項清單抓資料，不要新增頁籤" color={partColor.p5} />
              <FlowArrow />
              <FlowChip label="清單位置不能寫死，用「物料ID」表頭動態定位" color={partColor.p5} />
              <FlowArrow />
              <FlowChip label="只通知庫存狀態為「缺料」或「低於安全庫存」的品項" color={partColor.p5} />
              <FlowArrow />
              <FlowChip label="收件人＝ Apps Script 自動抓目前登入 Google 帳號 Email" color={partColor.p5} />
            </div>
          </Step>
          <Step>
            <div style={{ marginTop: 8 }}>
              <Callout color="#C0902E">
                每天晚上 9:00 自動執行缺料自動 Email 通知——請給我完整 Apps Script 和觸發器設定步驟。
              </Callout>
            </div>
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1 }}>
        <EmailMock>
          <EmailItemRow name="豬絞肉" status="低於安全庫存" />
          <EmailItemRow name="外帶紙盒" status="缺料" />
        </EmailMock>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13e — 十、VBA vs GAS：兩者差在哪 ─────────────────────────────────────
const Part5VbaVsGas: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>課程回顧</Eyebrow>
    <PageHeading>十、VBA vs GAS：兩者差在哪</PageHeading>
    <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginTop: 22 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 34 }}>🖥️</span>
        <span style={{ fontSize: 25, fontWeight: 800, color: partColor.p6 }}>VBA（本章）</span>
      </div>
      <span style={{ fontSize: 32, color: muted }}>vs</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 34 }}>☁️</span>
        <span style={{ fontSize: 25, fontWeight: 800, color: partColor.p5 }}>GAS（Part 5）</span>
      </div>
    </div>
    <div
      style={{
        marginTop: 22,
        borderRadius: 14,
        overflow: 'hidden',
        border: `1px solid ${cardBorder}`,
        boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
        display: 'grid',
        gridTemplateColumns: '0.7fr 1.3fr 1.3fr',
      }}
    >
      <CompareHead color={taskColor}>面向</CompareHead>
      <CompareHead color={partColor.p6}>VBA（本章）</CompareHead>
      <CompareHead color={partColor.p5}>GAS（Part 5）</CompareHead>

      <MatrixCell>定位</MatrixCell>
      <MatrixCell>桌面、離線、即時互動</MatrixCell>
      <MatrixCell>雲端、排程、主動推播</MatrixCell>

      <MatrixCell>招牌功能</MatrixCell>
      <MatrixCell>按鈕一鍵操作、另存新檔、防呆</MatrixCell>
      <MatrixCell>定時自動寄信／LINE 通知、手機可用</MatrixCell>

      <MatrixCell>帶走的觀念</MatrixCell>
      <MatrixCell>事件、按鈕巨集、對話框互動</MatrixCell>
      <MatrixCell>觸發器、外部服務整合</MatrixCell>
    </div>
    <div style={{ marginTop: 24 }}>
      <Callout color={design.palette.accent}>
        小結：需要桌面、離線、即時互動就用 VBA；需要雲端排程與主動通知就用 GAS。兩者搭配，就能把這套鍋貼店系統從建檔、分析到自動通知全部串起來。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13a — Part 0：牛刀小試 ───────────────────────────────────────────────
const QuizExcelBasics: Page = () => (
  <div style={{ ...page, alignItems: 'center', justifyContent: 'center' }}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <Eyebrow color={design.palette.accent}>PART 0 · 牛刀小試</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 56,
          fontWeight: 800,
          margin: '20px 0 0',
          textAlign: 'center',
          color: 'var(--osd-text)',
        }}
      >
        一、牛刀小試：Excel 基礎選擇題
      </h2>
      <p style={{ fontSize: 31, color: muted, margin: '10px 0 0', textAlign: 'center' }}>
        開始上課前，先測試一下你目前的 Excel 基礎
      </p>
      <div
        style={{
          marginTop: 36,
          background: cardBg,
          border: `1px solid ${cardBorder}`,
          borderRadius: 24,
          padding: '32px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        <img src={quizQrCode} alt="測驗 QR Code" style={{ width: 260, height: 260, display: 'block' }} />
        <div style={{ fontSize: 25, color: muted }}>掃描 QR Code，或直接開啟連結：</div>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 31,
            fontWeight: 700,
            color: design.palette.accent,
            background: `${design.palette.accent}0F`,
            border: `1px solid ${design.palette.accent}44`,
            borderRadius: 12,
            padding: '10px 24px',
          }}
        >
          forms.gle/ubVX4Af2LRGoJP1o8
        </div>
      </div>
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
          <Step><RoadmapChip num="5" color={partColor.p6} label="桌面自動化" sub="VBA 一鍵按鈕" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="6" color={partColor.p7} label="跨檔案彙總" sub="月報自動產出" /></Step>
          <RoadmapArrow />
          <Step><RoadmapChip num="7" color={partColor.p5} label="雲端部署" sub="GAS + 網頁" /></Step>
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

// ─── Shared: PPT-imported reference screenshots ────────────────────────────────
const refColor = '#556270';

const PptxShot = ({ src, maxH }: { src: string; maxH?: number }) => (
  <img
    src={src}
    style={{
      maxWidth: '100%',
      maxHeight: maxH ?? 680,
      borderRadius: 10,
      border: `1px solid ${cardBorder}`,
      boxShadow: '0 6px 20px rgba(0,0,0,0.10)',
      display: 'block',
    }}
  />
);

const PptxCaption = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 25, color: muted, textAlign: 'center', marginTop: 10 }}>{children}</div>
);

const PptxSingleShot = ({
  eyebrow,
  heading,
  src,
  caption,
  maxH,
}: {
  eyebrow: string;
  heading: string;
  src: string;
  caption?: string;
  maxH?: number;
}) => (
  <div style={page}>
    <Eyebrow color={refColor}>{eyebrow}</Eyebrow>
    <PageHeading>{heading}</PageHeading>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <PptxShot src={src} maxH={maxH} />
      {caption && <PptxCaption>{caption}</PptxCaption>}
    </div>
    <PageFooter />
  </div>
);

// ───补充教材 1 — 三張主檔範例 ──────────────────────────────────────────────────
const PptxProductMaster: Page = () => (
  <div style={page}>
    <Eyebrow color={refColor}>補充教材 · 主檔與報表範例</Eyebrow>
    <PageHeading>三張主檔的實際欄位，對應前一頁的用途</PageHeading>
    <Steps>
      <Step>
        <div style={{ height: 760, marginTop: 14, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={threeMasterTablesMapping}
            alt="商品主檔、供應商主檔與原物料主檔的實際表格，標示各自的ID與關鍵欄位用途"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', mixBlendMode: 'multiply' }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

const PptxClaudeSidebar: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · Claude for Excel" heading="Claude for Excel 側邊欄長這樣" src={pptx_s2_5} maxH={760} />
);

const PptxDailyReportSpec: Page = () => (
  <div style={page}>
    <Eyebrow color={refColor}>補充教材 · 主檔與報表範例</Eyebrow>
    <PageHeading>銷售日報／叫貨單的規格長這樣</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
      <div>
        <PptxCaption>銷售日報的規格長這樣</PptxCaption>
        <PptxShot src={pptx_s3_5} maxH={420} />
      </div>
      <div>
        <PptxCaption>叫貨單的規格長這樣</PptxCaption>
        <PptxShot src={pptx_s3_7} maxH={200} />
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── 补充教材 2 — 巨集設定步驟 ──────────────────────────────────────────────────
const PptxMacroStep1: Page = () => (
  <div style={page}>
    <Eyebrow color={refColor}>補充教材 · 巨集設定步驟</Eyebrow>
    <PageHeading>開啟巨集步驟一：另存為 .xlsm</PageHeading>
    <div style={{ fontSize: 25, color: muted, marginTop: 8 }}>✅ 進入選項：點選左上角「檔案 (File)」→ 選擇「儲存複本」</div>
    <div style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center', marginTop: 16, flex: 1 }}>
      <PptxShot src={pptx_s4_4} maxH={420} />
      <PptxShot src={pptx_s4_21} maxH={420} />
      <PptxShot src={pptx_s4_5} maxH={560} />
    </div>
    <PageFooter />
  </div>
);

const PptxMacroStep2: Page = () => (
  <div style={page}>
    <Eyebrow color={refColor}>補充教材 · 巨集設定步驟</Eyebrow>
    <PageHeading>開啟巨集步驟二：打開開發人員選項</PageHeading>
    <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
      <div style={{ fontSize: 25, color: muted, flex: 1 }}>✅ 進入選項：點選左上角「檔案」→ 選擇最下方的「選項」</div>
      <div style={{ fontSize: 25, color: muted, flex: 1.4 }}>
        ✅ 自訂功能區：在「選項」視窗左側，點選「自訂功能區」。在右側的「主要索引標籤」列表中，找到並勾選「開發人員」。
      </div>
    </div>
    <div style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center', marginTop: 16, flex: 1 }}>
      <PptxShot src={pptx_s5_21} maxH={480} />
      <PptxShot src={pptx_s5_22} maxH={480} />
      <PptxShot src={pptx_s5_4} maxH={560} />
    </div>
    <PageFooter />
  </div>
);

const PptxMacroStep3: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 巨集設定步驟" heading="依照教學建立模組" src={pptx_s6_7} maxH={700} />
);

const PptxMacroStep4: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 巨集設定步驟" heading="在模組 Module1 內貼入程式碼" src={pptx_s7_5} maxH={700} />
);

const PptxMacroStep5: Page = () => (
  <div style={page}>
    <Eyebrow color={refColor}>補充教材 · 巨集設定步驟</Eyebrow>
    <PageHeading>Module1、Module2 都執行看看，效果如何？</PageHeading>
    <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
      <RuleChip text="貼上 Prompt 21 產出的 vba" />
      <RuleChip text="貼上 Prompt 22 產出的 vba" />
    </div>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
      <PptxShot src={pptx_s8_5} maxH={620} />
    </div>
    <PageFooter />
  </div>
);

const PptxMacroStep6: Page = () => (
  <div style={page}>
    <Eyebrow color={refColor}>補充教材 · 巨集設定步驟</Eyebrow>
    <PageHeading>確認完效果後可以刪掉，接下來教「如何跟 AI 說清楚你要的規格？」</PageHeading>
    <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
      <RuleChip text="刪掉 Prompt 21 產出的 vba" />
      <RuleChip text="刪掉 Prompt 22 產出的 vba" />
    </div>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
      <PptxShot src={pptx_s9_7} maxH={560} />
    </div>
    <PageFooter />
  </div>
);

const PptxMacroStep7: Page = () => (
  <PptxSingleShot
    eyebrow="補充教材 · 巨集設定步驟"
    heading="再新增一個 Module，放入「關檔前防呆」程式碼"
    src={pptx_s10_3}
    maxH={700}
  />
);

// ─── 补充教材 3 — Ribbon 自訂步驟 ───────────────────────────────────────────────
const PptxRibbonStep1: Page = () => (
  <div style={page}>
    <Eyebrow color={refColor}>補充教材 · 功能區 自訂步驟</Eyebrow>
    <PageHeading>自訂功能區：新增巨集索引標籤</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PptxShot src={pptx_s11_3} maxH={140} />
      <PptxShot src={pptx_s11_7} maxH={560} />
    </div>
    <PageFooter />
  </div>
);

const PptxRibbonStep2: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 功能區 自訂步驟" heading="把巨集加入自訂群組" src={pptx_s12_3} maxH={720} />
);

const PptxRibbonStep3: Page = () => (
  <PptxSingleShot
    eyebrow="補充教材 · 功能區 自訂步驟"
    heading="新增三個巨集到群組"
    src={pptx_s13_3}
    maxH={680}
    caption="「產出營業月報」下一個階段才會練習，這邊先加入「產出叫貨單」和「產出銷售日報」兩個即可"
  />
);

const PptxRibbonStep4: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 功能區 自訂步驟" heading="結果：新的「巨集按鈕」頁籤" src={pptx_s14_3} maxH={400} />
);

// ─── 补充教材 4 — 雲端部署步驟 ──────────────────────────────────────────────────
const PptxCloudStep1: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 雲端部署步驟" heading="Google 雲端硬碟設定：自動轉換檔案格式" src={pptx_s15_7} maxH={720} />
);

const PptxCloudStep2: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 雲端部署步驟" heading="選擇開啟工具 → Google 試算表" src={pptx_s16_5} maxH={720} />
);

const PptxCloudStep3: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 雲端部署步驟" heading="擴充功能 → ChatGPT → Open Sidebar" src={pptx_s17_5} maxH={720} />
);

const PptxCloudStep4: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 雲端部署步驟" heading="擴充功能 → Apps Script" src={pptx_s18_5} maxH={720} />
);

const PptxCloudStep5: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 雲端部署步驟" heading="貼上後端程式碼 Code.gs" src={pptx_s19_5} maxH={720} />
);

const PptxCloudStep6: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 雲端部署步驟" heading="新增 HTML 檔案，貼上前端程式碼" src={pptx_s20_5} maxH={720} />
);

const PptxCloudStep7: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 雲端部署步驟" heading="部署 → 新增部署作業" src={pptx_s21_5} maxH={720} />
);

const PptxCloudStep8: Page = () => (
  <PptxSingleShot eyebrow="補充教材 · 雲端部署步驟" heading="設定執行身分與存取權限" src={pptx_s22_5} maxH={720} />
);

// ─── Page 15 — 結尾 ────────────────────────────────────────────────────────────
const Closing: Page = () => (
  <div style={{ ...page, justifyContent: 'center' }}>
    <div style={{ position: 'absolute', top: 48, right: PAD, fontSize: 32, color: muted, letterSpacing: '0.05em' }}>AI excel 課程 · 營業用表格</div>
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
            <Tag>5 大單元</Tag>
            <Tag>1 個完整案例</Tag>
            <Tag>從資料庫到自動化</Tag>
          </div>
        </Step>
      </Steps>
    </div>
  </div>
);

// ─── Priority split pages: one concept per page ─────────────────────────────
const SplitNote = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 27,
      fontWeight: 800,
      color,
      background: `${color}12`,
      border: `1px solid ${color}35`,
      borderRadius: 999,
      padding: '8px 18px',
    }}
  >
    {children}
  </div>
);

const MetricBox = ({
  label,
  value,
  formula,
  color,
}: {
  label: string;
  value: string;
  formula: string;
  color: string;
}) => (
  <div
    style={{
      background: '#fff',
      border: `1px solid ${cardBorder}`,
      borderTop: `7px solid ${color}`,
      borderRadius: 18,
      padding: '24px 26px',
      minHeight: 180,
      boxShadow: '0 8px 24px rgba(30,50,40,0.06)',
    }}
  >
    <div style={{ fontSize: 28, color: muted, fontWeight: 700 }}>{label}</div>
    <div style={{ fontSize: 48, lineHeight: 1.1, fontWeight: 900, color, marginTop: 12 }}>{value}</div>
    <div style={{ fontSize: 23, lineHeight: 1.35, color: muted, marginTop: 14 }}>{formula}</div>
  </div>
);

const FunctionPanel = ({
  name,
  plain,
  before,
  after,
  color,
}: {
  name: string;
  plain: string;
  before: React.ReactNode;
  after: React.ReactNode;
  color: string;
}) => (
  <div
    style={{
      flex: 1,
      background: '#fff',
      border: `1px solid ${cardBorder}`,
      borderRadius: 22,
      padding: '28px 30px',
      boxShadow: '0 8px 24px rgba(30,50,40,0.06)',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
      <div style={{ fontSize: 44, fontWeight: 900, color }}>{name}</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: muted }}>{plain}</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 70px 1fr', alignItems: 'center', gap: 18, marginTop: 26 }}>
      <div style={{ minHeight: 210 }}>{before}</div>
      <div style={{ fontSize: 46, color, textAlign: 'center' }}>›</div>
      <div style={{ minHeight: 210 }}>{after}</div>
    </div>
  </div>
);

const DataLine = ({ text, active, color }: { text: string; active?: boolean; color: string }) => (
  <div
    style={{
      fontSize: 26,
      fontWeight: active ? 800 : 600,
      color: active ? color : muted,
      background: active ? `${color}12` : '#F7F5EF',
      border: `1px solid ${active ? `${color}45` : cardBorder}`,
      borderRadius: 10,
      padding: '10px 14px',
      marginBottom: 8,
    }}
  >
    {text}
  </div>
);

const CheckTile = ({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) => (
  <div
    style={{
      flex: 1,
      background: '#fff',
      border: `1px solid ${cardBorder}`,
      borderRadius: 20,
      padding: '26px 24px',
      minHeight: 250,
      boxShadow: '0 8px 24px rgba(30,50,40,0.05)',
    }}
  >
    <div style={{ fontSize: 48 }}>{icon}</div>
    <div style={{ fontSize: 31, fontWeight: 900, color, marginTop: 14 }}>{title}</div>
    <div style={{ fontSize: 25, color: muted, lineHeight: 1.45, marginTop: 12 }}>{desc}</div>
  </div>
);

const StockAlertRow = ({
  id,
  name,
  current,
  safe,
  reorder,
  supplier,
}: {
  id: string;
  name: string;
  current: string;
  safe: string;
  reorder: string;
  supplier: string;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '0.7fr 1.1fr 0.9fr 0.9fr 0.9fr 1.4fr',
      gap: 12,
      alignItems: 'center',
      background: '#fff',
      border: `1px solid ${cardBorder}`,
      borderLeft: `8px solid ${painRed}`,
      borderRadius: 16,
      padding: '18px 22px',
      marginTop: 14,
      boxShadow: '0 6px 18px rgba(30,50,40,0.04)',
    }}
  >
    <div style={{ fontSize: 28, fontWeight: 900 }}>{id}</div>
    <div style={{ fontSize: 29, fontWeight: 800 }}>{name}</div>
    <div style={{ fontSize: 26, color: painRed, fontWeight: 900 }}>目前 {current}</div>
    <div style={{ fontSize: 25, color: muted }}>安全 {safe}</div>
    <div style={{ fontSize: 26, color: partColor.p6, fontWeight: 900 }}>補 {reorder}</div>
    <div style={{ fontSize: 25, color: muted }}>{supplier}</div>
  </div>
);

const BranchPanel = ({
  status,
  title,
  items,
  color,
}: {
  status: string;
  title: string;
  items: React.ReactNode;
  color: string;
}) => (
  <div
    style={{
      flex: 1,
      background: '#fff',
      border: `1px solid ${cardBorder}`,
      borderTop: `8px solid ${color}`,
      borderRadius: 20,
      padding: '26px 28px',
      minHeight: 480,
      boxShadow: '0 8px 24px rgba(30,50,40,0.05)',
    }}
  >
    <div style={{ fontSize: 25, fontWeight: 900, color }}>{status}</div>
    <div style={{ fontSize: 34, fontWeight: 900, marginTop: 10 }}>{title}</div>
    <div style={{ fontSize: 25, lineHeight: 1.55, color: muted, marginTop: 22 }}>{items}</div>
  </div>
);

const ReportSheet = ({
  no,
  title,
  subtitle,
  color,
  visual,
}: {
  no: string;
  title: string;
  subtitle: string;
  color: string;
  visual: React.ReactNode;
}) => (
  <div
    style={{
      flex: 1,
      minHeight: 330,
      background: '#fff',
      border: `1px solid ${cardBorder}`,
      borderRadius: 20,
      padding: '24px',
      boxShadow: '0 10px 28px rgba(30,50,40,0.06)',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          display: 'grid',
          placeItems: 'center',
          background: color,
          color: '#fff',
          fontSize: 25,
          fontWeight: 900,
        }}
      >
        {no}
      </div>
      <div>
        <div style={{ fontSize: 31, fontWeight: 900 }}>{title}</div>
        <div style={{ fontSize: 24, color: muted, marginTop: 2 }}>{subtitle}</div>
      </div>
    </div>
    <div style={{ height: 160, marginTop: 22, borderRadius: 14, background: `${color}0D`, display: 'grid', placeItems: 'center' }}>
      {visual}
    </div>
  </div>
);

const SheetRange = ({
  label,
  range,
  color,
}: {
  label: string;
  range: string;
  color: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 18,
      background: `${color}0D`,
      border: `1px solid ${color}35`,
      borderRadius: 14,
      padding: '15px 18px',
    }}
  >
    <span style={{ fontSize: 27, fontWeight: 800 }}>{label}</span>
    <span style={{ fontSize: 25, fontWeight: 900, color, fontFamily: 'Consolas, monospace' }}>{range}</span>
  </div>
);

const FormRow = ({ label, value, dropdown }: { label: string; value: string; dropdown?: boolean }) => (
  <div style={{ marginTop: 12 }}>
    <div style={{ fontSize: 22, color: '#BFC7D5', marginBottom: 5 }}>{label}</div>
    <div
      style={{
        height: 48,
        borderRadius: 10,
        border: '1px solid #526077',
        background: '#1C2635',
        color: '#F5F7FB',
        padding: '0 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 24,
      }}
    >
      <span>{value}</span>
      {dropdown && <span style={{ color: '#93A4BE' }}>▼</span>}
    </div>
  </div>
);

const MaskEvidenceRow = ({
  date,
  order,
  channel,
  mask,
  shade,
}: {
  date: string;
  order: string;
  channel: string;
  mask: '0' | '1';
  shade?: boolean;
}) => (
  <div
    style={{
      minHeight: 62,
      display: 'grid',
      gridTemplateColumns: '230px 320px 90px 220px 120px',
      alignItems: 'center',
      background: mask === '1' ? (shade ? '#EAF6EF' : '#F5FBF7') : shade ? '#F3F5F6' : '#FFFFFF',
      borderTop: '1px solid #DDE3E7',
      fontSize: 27,
      color: '#2D69B2',
    }}
  >
    <div style={{ paddingLeft: 20 }}>{date}</div>
    <div>{order}</div>
    <div style={{ textAlign: 'center', color: '#98A1A8', fontSize: 32 }}>⋯</div>
    <div>{channel}</div>
    <div
      style={{
        justifySelf: 'center',
        width: 48,
        height: 42,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 900,
        color: mask === '1' ? '#1F7A4B' : '#6E7268',
        background: mask === '1' ? '#DDF2E5' : '#ECEFEE',
        border: `1px solid ${mask === '1' ? '#9DD0AE' : '#CCD1CF'}`,
      }}
    >
      {mask}
    </div>
  </div>
);

const Part4DashboardMaskSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p4}>PART 4 · 儀表板</Eyebrow>
    <PageHeading>先看懂「篩選遮罩」：每一筆銷售只會得到 1 或 0</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: '1.18fr 0.82fr', gap: 34, marginTop: 26, flex: 1, minHeight: 0 }}>
      <div
        style={{
          borderRadius: 24,
          overflow: 'hidden',
          border: `1px solid ${cardBorder}`,
          background: '#fff',
          boxShadow: '0 10px 30px rgba(30,50,40,0.07)',
        }}
      >
        <div
          style={{
            minHeight: 76,
            padding: '0 24px',
            background: '#F2F6F8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #D7E0E5',
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 900, color: '#1F4E78' }}>營收毛利｜實際表格</div>
          <div style={{ fontSize: 25, fontWeight: 900, color: '#1F7A4B', background: '#E3F3E9', border: '1px solid #A9D8BB', borderRadius: 999, padding: '8px 18px' }}>
            目前篩選：年份＝2026
          </div>
        </div>
        <div
          style={{
            minHeight: 58,
            display: 'grid',
            gridTemplateColumns: '230px 320px 90px 220px 120px',
            alignItems: 'center',
            background: '#1F4E78',
            color: '#FFFFFF',
            fontSize: 25,
            fontWeight: 900,
          }}
        >
          <div style={{ paddingLeft: 20 }}>銷售日期</div>
          <div>訂單編號</div>
          <div style={{ textAlign: 'center' }}>⋯</div>
          <div>銷售通路</div>
          <div style={{ textAlign: 'center' }}>篩選遮罩</div>
        </div>
        <MaskEvidenceRow date="2024/02/15" order="O20240215001" channel="內用" mask="0" />
        <MaskEvidenceRow date="2024/11/28" order="O20241128001" channel="內用" mask="0" shade />
        <MaskEvidenceRow date="2025/03/22" order="O20250322001" channel="內用" mask="0" />
        <MaskEvidenceRow date="2025/10/03" order="O20251003001" channel="外帶" mask="0" shade />
        <MaskEvidenceRow date="2026/01/20" order="O20260120001" channel="內用" mask="1" />
        <MaskEvidenceRow date="2026/06/02" order="O20260602002" channel="內用" mask="1" shade />
        <MaskEvidenceRow date="2026/06/15" order="O20260615001" channel="外送平台" mask="1" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
        <SplitNote color={partColor.p4}>① 儀表板選擇「2026 年」</SplitNote>
        <SplitNote color={partColor.p4}>② N 欄逐筆比較銷售日期</SplitNote>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 4 }}>
          <div style={{ borderRadius: 18, padding: '24px', background: '#EAF6EF', border: '1px solid #A9D8BB' }}>
            <div style={{ fontSize: 58, fontWeight: 900, color: '#1F7A4B' }}>1</div>
            <div style={{ fontSize: 27, fontWeight: 800 }}>2026 年</div>
            <div style={{ fontSize: 23, color: muted, marginTop: 4 }}>納入報表</div>
          </div>
          <div style={{ borderRadius: 18, padding: '24px', background: '#F0F1EE', border: `1px solid ${cardBorder}` }}>
            <div style={{ fontSize: 58, fontWeight: 900, color: muted }}>0</div>
            <div style={{ fontSize: 27, fontWeight: 800 }}>其他年份</div>
            <div style={{ fontSize: 23, color: muted, marginTop: 4 }}>暫時排除</div>
          </div>
        </div>
        <div style={{ fontSize: 27, color: muted, lineHeight: 1.5, marginTop: 8 }}>
          中間的商品、數量與金額欄先用「⋯」省略；這一頁只看<b style={{ color: partColor.p4 }}>日期如何決定遮罩是 1 還是 0</b>。
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
);

const Part4DashboardKpiSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p4}>PART 4 · 儀表板</Eyebrow>
    <PageHeading>遮罩套進公式後，六個 KPI 會一起更新</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 34 }}>
      <MetricBox label="營業額" value="NT$16,050" formula="SUMPRODUCT（遮罩 × 銷售金額）" color={partColor.p4} />
      <MetricBox label="總毛利" value="NT$3,406.10" formula="SUMPRODUCT（遮罩 × 毛利）" color="#1B84A8" />
      <MetricBox label="平均毛利率" value="21.22%" formula="總毛利 ÷ 營業額" color="#6A5FCB" />
      <MetricBox label="來客數" value="43 單" formula="篩選後的不重複訂單數" color="#1E9076" />
      <MetricBox label="銷售數量" value="310 份" formula="SUMPRODUCT（遮罩 × 數量）" color="#C0902E" />
      <MetricBox label="客單價" value="NT$373.26" formula="營業額 ÷ 來客數" color="#B5502E" />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28 }}>
      <SplitNote color={partColor.p4}>真實位置：儀表板 A8:F9</SplitNote>
      <div style={{ fontSize: 28, color: muted }}>換一個篩選條件，六張數字卡同步重算。</div>
    </div>
    <PageFooter />
  </div>
);

const Part4FunctionsUniqueFilterSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p4}>公式名詞快速理解</Eyebrow>
    <PageHeading>UNIQUE 找名單，FILTER 挑出符合條件的資料</PageHeading>
    <div style={{ display: 'flex', gap: 28, marginTop: 34 }}>
      <FunctionPanel
        name="UNIQUE"
        plain="去除重複"
        color={partColor.p4}
        before={
          <div>
            <DataLine text="酸辣湯" color={partColor.p4} />
            <DataLine text="鍋貼" color={partColor.p4} />
            <DataLine text="酸辣湯" color={partColor.p4} />
            <DataLine text="豆漿" color={partColor.p4} />
          </div>
        }
        after={
          <div>
            <DataLine text="酸辣湯" active color={partColor.p4} />
            <DataLine text="鍋貼" active color={partColor.p4} />
            <DataLine text="豆漿" active color={partColor.p4} />
          </div>
        }
      />
      <FunctionPanel
        name="FILTER"
        plain="只留下符合條件"
        color="#1E9076"
        before={
          <div>
            <DataLine text="內用｜招牌鍋貼" color="#1E9076" />
            <DataLine text="外帶｜酸辣湯" active color="#1E9076" />
            <DataLine text="電話預訂｜豆漿" color="#1E9076" />
            <DataLine text="外帶｜韭菜鍋貼" active color="#1E9076" />
          </div>
        }
        after={
          <div>
            <DataLine text="外帶｜酸辣湯" active color="#1E9076" />
            <DataLine text="外帶｜韭菜鍋貼" active color="#1E9076" />
          </div>
        }
      />
    </div>
    <div style={{ fontSize: 29, color: muted, marginTop: 28 }}>
      先用 UNIQUE 建立不重複清單，再用 FILTER 依條件縮小範圍。
    </div>
    <PageFooter />
  </div>
);

const Part4FunctionsSortLetSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p4}>公式名詞快速理解</Eyebrow>
    <PageHeading>SORTBY 負責排名，LET 把複雜步驟取名字</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginTop: 34 }}>
      <div style={{ background: '#fff', border: `1px solid ${cardBorder}`, borderRadius: 22, padding: 30 }}>
        <div style={{ fontSize: 44, fontWeight: 900, color: '#6A5FCB' }}>SORTBY</div>
        <div style={{ fontSize: 28, color: muted, marginTop: 6 }}>依銷售金額由高到低排列</div>
        <div style={{ marginTop: 24 }}>
          <DataLine text="① 招牌鍋貼　NT$4,870" active color="#6A5FCB" />
          <DataLine text="② 韭菜鍋貼　NT$4,120" active color="#6A5FCB" />
          <DataLine text="③ 玉米鍋貼　NT$2,930" active color="#6A5FCB" />
          <DataLine text="④ 酸辣湯　　NT$2,070" color="#6A5FCB" />
          <DataLine text="⑤ 豆漿　　　NT$2,060" color="#6A5FCB" />
        </div>
      </div>
      <div style={{ background: '#fff', border: `1px solid ${cardBorder}`, borderRadius: 22, padding: 30 }}>
        <div style={{ fontSize: 44, fontWeight: 900, color: '#C0902E' }}>LET</div>
        <div style={{ fontSize: 28, color: muted, marginTop: 6 }}>讓公式像一段有名字的工作流程</div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <SheetRange label="遮罩" range="mask" color="#C0902E" />
          <SheetRange label="商品清單" range="items" color="#C0902E" />
          <SheetRange label="銷售額" range="sales" color="#C0902E" />
          <SheetRange label="排序後前 5 名" range="top5" color="#C0902E" />
        </div>
      </div>
    </div>
    <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 18 }}>
      <SplitNote color={partColor.p4}>FILTER 選資料</SplitNote>
      <span style={{ fontSize: 36, color: muted }}>›</span>
      <SplitNote color="#6A5FCB">SORTBY 排順序</SplitNote>
      <span style={{ fontSize: 36, color: muted }}>›</span>
      <SplitNote color="#C0902E">LET 管理中間步驟</SplitNote>
    </div>
    <PageFooter />
  </div>
);

const PptxDailyReportOnlySplit: Page = () => (
  <div style={page}>
    <Eyebrow color={refColor}>銷售日報規格</Eyebrow>
    <PageHeading>銷售日報：一天的營運結果要能快速看懂</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: 32, marginTop: 26, flex: 1 }}>
      <div style={{ display: 'grid', placeItems: 'center', background: '#fff', border: `1px solid ${cardBorder}`, borderRadius: 22, padding: 20 }}>
        <PptxShot src={pptx_s3_5} maxH={610} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
        <CheckTile icon="①" title="當日摘要" desc="營業額、毛利、訂單數與銷售數量。" color={partColor.p6} />
        <CheckTile icon="②" title="營運拆解" desc="各通路小計、熱銷商品排行與銷售明細。" color={partColor.p6} />
      </div>
    </div>
    <PageFooter />
  </div>
);

const PptxPurchaseOrderOnlySplit: Page = () => (
  <div style={page}>
    <Eyebrow color={refColor}>叫貨單規格</Eyebrow>
    <PageHeading>叫貨單：只列需要補貨的品項，依供應商整理</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 34, marginTop: 32, flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
        <CheckTile icon="①" title="抓異常" desc="只處理「缺料」或「低於安全庫存」。" color={painRed} />
        <CheckTile icon="②" title="依店家分組" desc="同一供應商的品項放進同一則訊息。" color={partColor.p6} />
        <CheckTile icon="③" title="形成可傳送文字" desc="品項、數量、到貨日與聯絡資訊一次備齊。" color="#1E9076" />
      </div>
      <div style={{ display: 'grid', placeItems: 'center', background: '#fff', border: `1px solid ${cardBorder}`, borderRadius: 22, padding: 30 }}>
        <PptxShot src={pptx_s3_7} maxH={560} />
      </div>
    </div>
    <PageFooter />
  </div>
);

const Part6CloseCheckOnlySplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p6}>VBA · 關檔前防呆</Eyebrow>
    <PageHeading>先擋下錯誤資料，再允許關閉檔案</PageHeading>
    <div style={{ display: 'flex', gap: 22, marginTop: 40 }}>
      <CheckTile icon="ID" title="商品 ID" desc="不可空白，而且必須存在於商品主檔。" color={partColor.p6} />
      <CheckTile icon="×2" title="明細編號" desc="同一個銷售明細編號不能重複。" color="#6A5FCB" />
      <CheckTile icon="0" title="銷售數量" desc="必須大於 0，避免把零或負數寫進交易紀錄。" color={painRed} />
      <CheckTile icon="▼" title="銷售通路" desc="只能使用設定選單內允許的合法值。" color="#1E9076" />
    </div>
    <div
      style={{
        marginTop: 34,
        background: '#fff',
        border: `1px solid ${cardBorder}`,
        borderRadius: 20,
        padding: '24px 30px',
        display: 'grid',
        gridTemplateColumns: '0.7fr 0.8fr 0.8fr 1fr 1.7fr',
        gap: 14,
        alignItems: 'center',
      }}
    >
      <b style={{ fontSize: 25 }}>D012</b>
      <b style={{ fontSize: 25 }}>P003</b>
      <b style={{ fontSize: 25, color: painRed }}>0</b>
      <b style={{ fontSize: 25 }}>外送平台</b>
      <span style={{ fontSize: 25, color: painRed, fontWeight: 900 }}>銷售數量必須大於 0</span>
    </div>
    <div style={{ fontSize: 28, color: muted, marginTop: 24 }}>發現錯誤時：標紅儲存格、顯示原因、回到資料列修正。</div>
    <PageFooter />
  </div>
);

const Part6ReorderReminderSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p6}>VBA · 待補貨提醒</Eyebrow>
    <PageHeading>銷售資料檢查完成後，再提醒真正缺料的三個品項</PageHeading>
    <div style={{ marginTop: 30 }}>
      <StockAlertRow id="M001" name="麵皮" current="-1,170" safe="500" reorder="1,500" supplier="北區麵皮行" />
      <StockAlertRow id="M005" name="玉米粒" current="-0.14" safe="3" reorder="10" supplier="新鮮蔬果商行" />
      <StockAlertRow id="M010" name="外帶碗" current="-3" safe="100" reorder="250" supplier="包材世界" />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, marginTop: 34 }}>
      <div style={{ borderRadius: 20, background: '#EAF6EF', border: '1px solid #A9D8BB', padding: '26px 30px' }}>
        <div style={{ fontSize: 31, fontWeight: 900, color: '#1F7A4B' }}>有異常品項</div>
        <div style={{ fontSize: 27, lineHeight: 1.45, marginTop: 10 }}>預覽待補貨清單，再呼叫既有「產生叫貨單」巨集。</div>
      </div>
      <div style={{ borderRadius: 20, background: '#F5F3EC', border: `1px solid ${cardBorder}`, padding: '26px 30px' }}>
        <div style={{ fontSize: 31, fontWeight: 900, color: muted }}>沒有異常品項</div>
        <div style={{ fontSize: 27, lineHeight: 1.45, marginTop: 10 }}>結束檢查，不產生空白叫貨單。</div>
      </div>
    </div>
    <PageFooter />
  </div>
);

const Part7RollupFlowSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p7}>跨檔案彙總</Eyebrow>
    <PageHeading>月報不是把檔案疊起來，而是逐份讀取、檢查、再彙總</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 34, marginTop: 28, flex: 1 }}>
      <div style={{ overflow: 'hidden', borderRadius: 24, border: `1px solid ${cardBorder}`, background: '#fff' }}>
        <img src={monthlyRollupVisual} alt="日報檔案經過檢查後產生月報的視覺圖" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 15 }}>
        <SplitNote color={partColor.p7}>1　選擇整月日報資料夾</SplitNote>
        <SplitNote color={partColor.p7}>2　逐一讀日期、摘要與明細</SplitNote>
        <SplitNote color={partColor.p7}>3　做品質檢查</SplitNote>
        <SplitNote color={partColor.p7}>4　計算成本與毛利</SplitNote>
        <SplitNote color={partColor.p7}>5　輸出七張月報</SplitNote>
      </div>
    </div>
    <PageFooter />
  </div>
);

const Part7RollupErrorsSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p7}>跨檔案彙總</Eyebrow>
    <PageHeading>遇到異常時，不是全部停掉：分成跳過、警告與缺漏</PageHeading>
    <div style={{ display: 'flex', gap: 24, marginTop: 38 }}>
      <BranchPanel
        status="不納入彙總"
        title="跳過該檔"
        color={muted}
        items={
          <>
            • 找不到「日報」工作表<br />
            • 日期讀不到或不在指定月份<br />
            • 同一天的日報已經彙總過
          </>
        }
      />
      <BranchPanel
        status="仍納入，但留下紀錄"
        title="加入警告"
        color="#C0902E"
        items={
          <>
            • 明細金額與日報營業額不一致<br />
            • 明細數量與銷售總數量不同<br />
            • 明細筆數與銷售筆數不一致
          </>
        }
      />
      <BranchPanel
        status="整月掃描後補查"
        title="列為缺漏"
        color={painRed}
        items={
          <>
            • 某一天完全找不到日報檔<br />
            • 在檢查清單標出缺少日期<br />
            • 不用空白資料硬湊完整月份
          </>
        }
      />
    </div>
    <div style={{ fontSize: 29, color: muted, marginTop: 28 }}>月報可信的前提，是錯誤有被留下來，而不是被悄悄忽略。</div>
    <PageFooter />
  </div>
);

const Part7ReportsDecisionSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p7}>七張營業月報</Eyebrow>
    <PageHeading>前四張先回答老闆最常問的營運問題</PageHeading>
    <div style={{ display: 'flex', gap: 20, marginTop: 34 }}>
      <ReportSheet no="1" title="月報摘要" subtitle="KPI 總覽" color={partColor.p7} visual={<MiniKpiIcon color={partColor.p7} />} />
      <ReportSheet no="2" title="每日趨勢" subtitle="長條＋雙軸折線" color="#C0902E" visual={<MiniBarLineIcon color="#C0902E" />} />
      <ReportSheet no="3" title="商品排行" subtitle="Pareto 圖" color="#1B84A8" visual={<MiniParetoIcon color="#1B84A8" />} />
      <ReportSheet
        no="4"
        title="通路分析"
        subtitle="圓餅圖"
        color="#6A5FCB"
        visual={<MiniPieIcon slices={[{ color: partColor.p7, pct: 46 }, { color: '#D08A34', pct: 33 }, { color: '#E0C9A6', pct: 21 }]} />}
      />
    </div>
    <div style={{ fontSize: 30, fontWeight: 800, color: muted, marginTop: 30 }}>看規模、看趨勢、看明星商品、看主要通路。</div>
    <PageFooter />
  </div>
);

const Part7ReportsControlSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p7}>七張營業月報</Eyebrow>
    <PageHeading>後三張負責追原因、查明細與確認資料品質</PageHeading>
    <div style={{ display: 'flex', gap: 24, marginTop: 36 }}>
      <ReportSheet no="5" title="毛利分析" subtitle="低於 20% 標紅" color={painRed} visual={<MiniBarLineIcon color={painRed} />} />
      <ReportSheet no="6" title="銷售明細彙總" subtitle="全月逐筆總表" color={taskColor} visual={<MiniListIcon color={taskColor} />} />
      <ReportSheet no="7" title="檢查清單" subtitle="紅／黃警示" color="#C0902E" visual={<MiniListIcon color="#C0902E" />} />
    </div>
    <div style={{ display: 'flex', gap: 18, marginTop: 34 }}>
      <SplitNote color={painRed}>哪裡賺太少？</SplitNote>
      <SplitNote color={taskColor}>是哪一筆交易？</SplitNote>
      <SplitNote color="#C0902E">資料是否完整可信？</SplitNote>
    </div>
    <PageFooter />
  </div>
);

const Part5BackendRangesSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>Apps Script 後端</Eyebrow>
    <PageHeading>先把工作表位置對齊：後端才知道去哪裡讀資料</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginTop: 32 }}>
      <div style={{ background: '#fff', border: `1px solid ${cardBorder}`, borderRadius: 22, padding: 28 }}>
        <div style={{ fontSize: 34, fontWeight: 900, color: partColor.p4 }}>「儀表板」工作表</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 20 }}>
          <SheetRange label="年／月／日篩選" range="B3:B5" color={partColor.p4} />
          <SheetRange label="六個 KPI" range="A8:F9" color="#1F7A4B" />
          <SheetRange label="商品排行" range="A12:E17" color="#1B84A8" />
          <SheetRange label="通路排行" range="A20:D23" color="#1E9076" />
          <SheetRange label="庫存統計" range="A25:B29" color="#C0902E" />
          <SheetRange label="待補貨清單" range="A31:H35" color={painRed} />
        </div>
      </div>
      <div style={{ background: '#fff', border: `1px solid ${cardBorder}`, borderRadius: 22, padding: 28 }}>
        <div style={{ fontSize: 34, fontWeight: 900, color: partColor.p5 }}>「營收毛利」工作表</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
          <SheetRange label="篩選遮罩" range="N2:N" color={partColor.p5} />
          <SheetRange label="年份清單" range="P2:P" color="#6A5FCB" />
          <SheetRange label="月份清單" range="Q2:Q" color="#6A5FCB" />
          <SheetRange label="日期清單" range="R2:R" color="#6A5FCB" />
        </div>
        <div style={{ marginTop: 34, borderRadius: 16, padding: '22px 24px', background: '#F4F1FB', border: '1px solid #D8D1EE' }}>
          <div style={{ fontSize: 27, fontWeight: 900, color: partColor.p5 }}>再提供試算表 ID</div>
          <div style={{ fontSize: 25, color: muted, lineHeight: 1.5, marginTop: 8 }}>
            Code.gs 才能開啟正確檔案，不必猜工作表名稱或固定位置。
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
);

const Part5BackendFlowSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>Apps Script 後端</Eyebrow>
    <PageHeading>工作表提供資料，Code.gs 整理後交給網頁</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 34, marginTop: 28, flex: 1 }}>
      <div style={{ overflow: 'hidden', borderRadius: 24, border: `1px solid ${cardBorder}`, background: '#fff' }}>
        <img src={backendDataMapVisual} alt="試算表、雲端後端與網頁儀表板的資料關係圖" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 13 }}>
        <SplitNote color={partColor.p5}>doGet()　開啟網頁</SplitNote>
        <SplitNote color={partColor.p5}>getFilterOptions()　讀下拉清單</SplitNote>
        <SplitNote color={partColor.p5}>setFilter()　寫入篩選條件</SplitNote>
        <SplitNote color={partColor.p5}>getCurrentFilter()　讀目前條件</SplitNote>
        <SplitNote color={partColor.p5}>getDashboardData()　整理儀表板資料</SplitNote>
      </div>
    </div>
    <PageFooter />
  </div>
);

const Part5WriteBackFlowSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>網頁寫回試算表</Eyebrow>
    <PageHeading>送出表單後，一筆銷售資料如何安全寫回 Excel 結構？</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 34, marginTop: 28, flex: 1 }}>
      <div style={{ overflow: 'hidden', borderRadius: 24, border: `1px solid ${cardBorder}`, background: '#fff' }}>
        <img src={writebackFlowVisual} alt="網頁表單驗證後寫回試算表並更新儀表板的視覺圖" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
        <SplitNote color={partColor.p5}>1　前端蒐集日期、商品、數量、通路</SplitNote>
        <SplitNote color="#1B84A8">2　後端驗證必填、合法值與資料型別</SplitNote>
        <SplitNote color="#1E9076">3　在 tbl_銷售新增一列</SplitNote>
        <SplitNote color="#C0902E">4　公式與儀表板自動更新</SplitNote>
        <div style={{ fontSize: 27, color: muted, lineHeight: 1.5, marginTop: 8 }}>
          寫回不是「改畫面」；真正的成功是<b style={{ color: partColor.p5 }}>資料列已進入銷售紀錄</b>。
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
);

const Part5WriteBackFormSplit: Page = () => (
  <div style={page}>
    <Eyebrow color={partColor.p5}>網頁寫回試算表</Eyebrow>
    <PageHeading>輸入頁面只讓使用者填必要資料，其餘交給主檔與公式</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 42, marginTop: 28, flex: 1 }}>
      <div style={{ borderRadius: 24, background: '#111827', padding: '26px 30px', boxShadow: '0 16px 38px rgba(20,28,40,0.18)' }}>
        <div style={{ fontSize: 30, fontWeight: 900, color: '#fff' }}>新增銷售</div>
        <FormRow label="銷售日期" value="2026/06/30" />
        <FormRow label="商品" value="酸辣湯（P004）" dropdown />
        <FormRow label="銷售數量" value="2" />
        <FormRow label="折扣金額" value="0" />
        <FormRow label="銷售通路" value="外帶" dropdown />
        <div style={{ marginTop: 18, height: 54, borderRadius: 12, display: 'grid', placeItems: 'center', color: '#fff', background: partColor.p5, fontSize: 27, fontWeight: 900 }}>
          送出並更新儀表板
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22 }}>
        <CheckTile icon="▼" title="主檔控制選項" desc="商品與通路使用下拉，避免拼字不同造成統計失敗。" color={partColor.p5} />
        <CheckTile icon="✓" title="後端再次驗證" desc="即使畫面有下拉，Code.gs 仍要檢查必填值與數字範圍。" color="#1E9076" />
        <CheckTile icon="↻" title="成功後重新讀取" desc="寫入完成後回傳訊息，再更新 KPI、排行與庫存畫面。" color="#C0902E" />
      </div>
    </div>
    <PageFooter />
  </div>
);

export const meta: SlideMeta = {
  title: 'AI Excel 課程',
  createdAt: '2026-07-07T13:18:15.886Z',
};

const AdventureQuestCard = ({
  num,
  src,
  name,
  skill,
  color,
}: {
  num: string;
  src: string;
  name: string;
  skill: string;
  color: string;
}) => (
  <div
    style={{
      height: 236,
      borderRadius: 20,
      background: '#fff',
      border: `1px solid ${cardBorder}`,
      boxShadow: '0 8px 20px rgba(28,35,31,0.08)',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ height: 148, overflow: 'hidden', background: `${color}10`, position: 'relative' }}>
      <img
        src={src}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 88%',
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 12,
          width: 42,
          height: 42,
          borderRadius: 14,
          display: 'grid',
          placeItems: 'center',
          background: color,
          color: '#fff',
          fontSize: 24,
          fontWeight: 900,
          boxShadow: '0 4px 10px rgba(0,0,0,0.14)',
        }}
      >
        {num}
      </div>
    </div>
    <div style={{ padding: '12px 16px 14px', display: 'flex', flexDirection: 'column', gap: 3 }}>
      <div style={{ fontSize: 27, lineHeight: 1.15, fontWeight: 900, color }}>{name}</div>
      <div style={{ fontSize: 22, lineHeight: 1.25, color: muted }}>{skill}</div>
    </div>
  </div>
);

const AdventureSectionTitle: Page = () => (
  <div
    style={{
      ...page,
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #FBF8F1 0%, #F5F1FA 54%, #EEF5F1 100%)',
      overflow: 'hidden',
    }}
  >
    <GridTexture />
    <div style={{ position: 'absolute', width: 760, height: 760, borderRadius: '50%', background: 'rgba(96,66,148,0.08)', right: -150, top: -210 }} />
    <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', background: 'rgba(31,111,67,0.07)', right: 320, bottom: -260 }} />

    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 70, alignItems: 'center', height: '100%' }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, borderRadius: 999, background: '#EEE7F7', color: '#604294', border: '1px solid #CDBEE2', padding: '10px 22px', fontSize: 25, fontWeight: 900, letterSpacing: 1 }}>
          CHAPTER 01 · 基礎操作
        </div>
        <div style={{ width: 100, height: 8, borderRadius: 99, background: '#604294', marginTop: 34 }} />
        <h1 style={{ margin: '28px 0 0', fontFamily: 'var(--osd-font-display)', fontSize: 86, lineHeight: 1.08, fontWeight: 900, color: '#2B2730' }}>
          冒險者公會
        </h1>
        <div style={{ marginTop: 18, fontSize: 50, lineHeight: 1.18, fontWeight: 900, color: '#604294' }}>
          Excel 練習基礎操作
        </div>
        <p style={{ margin: '28px 0 0', maxWidth: 760, fontSize: 30, lineHeight: 1.55, color: muted }}>
          從第一個儲存格出發，完成格式、篩選、公式、查找與分析任務。
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 34 }}>
          <Tag>10 個關卡</Tag>
          <Tag>邊做邊學</Tag>
          <Tag>累積 XP 挑戰魔王</Tag>
        </div>
      </div>

      <div style={{ position: 'relative', height: 700 }}>
        <div style={{ position: 'absolute', left: 18, top: 150, width: 330, height: 360, borderRadius: 34, overflow: 'hidden', background: '#EAF4D8', border: '8px solid #FFFFFF', boxShadow: '0 24px 54px rgba(42,38,47,0.18)', transform: 'rotate(-7deg)' }}>
          <img src={adventure01} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 98%', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', right: 10, top: 118, width: 330, height: 360, borderRadius: 34, overflow: 'hidden', background: '#E9E2F4', border: '8px solid #FFFFFF', boxShadow: '0 24px 54px rgba(42,38,47,0.18)', transform: 'rotate(7deg)' }}>
          <img src={adventure09} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 98%', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', left: '50%', top: 260, width: 390, height: 390, borderRadius: 42, overflow: 'hidden', background: '#EFE6E5', border: '10px solid #FFFFFF', boxShadow: '0 30px 70px rgba(42,38,47,0.24)', transform: 'translateX(-50%)' }}>
          <img src={adventure10} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 98%', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', left: '50%', bottom: 2, transform: 'translateX(-50%)', borderRadius: 999, background: '#2B2730', color: '#FFFFFF', padding: '12px 28px', fontSize: 25, fontWeight: 900, letterSpacing: 2, boxShadow: '0 12px 28px rgba(42,38,47,0.20)' }}>
          READY · START
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
);

const CourseSectionTitle = ({
  chapter,
  title,
  subtitle,
  color,
  symbol,
  kicker,
  chips,
}: {
  chapter: string;
  title: string;
  subtitle?: string;
  color: string;
  symbol: string;
  kicker: string;
  chips: string[];
}) => (
  <div
    style={{
      ...page,
      justifyContent: 'center',
      background: `linear-gradient(135deg, #FBF9F3 0%, ${color}0C 58%, ${color}18 100%)`,
      overflow: 'hidden',
    }}
  >
    <GridTexture />
    <div style={{ position: 'absolute', width: 780, height: 780, borderRadius: '50%', background: `${color}0D`, right: -180, top: -250 }} />
    <div style={{ position: 'absolute', width: 430, height: 430, borderRadius: '50%', background: `${color}0A`, right: 330, bottom: -260 }} />

    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 78, alignItems: 'center', height: '100%' }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 999, background: `${color}14`, color, border: `1px solid ${color}45`, padding: '10px 22px', fontSize: 25, fontWeight: 900, letterSpacing: 1 }}>
          {chapter}
        </div>
        <div style={{ width: 100, height: 8, borderRadius: 99, background: color, marginTop: 34 }} />
        <h1 style={{ margin: '28px 0 0', fontFamily: 'var(--osd-font-display)', fontSize: 78, lineHeight: 1.08, fontWeight: 900, color: '#2B2D2B' }}>
          {title}
        </h1>
        {subtitle ? (
          <div style={{ marginTop: 18, fontSize: 48, lineHeight: 1.18, fontWeight: 900, color }}>
            {subtitle}
          </div>
        ) : null}
        <p style={{ margin: '28px 0 0', maxWidth: 790, fontSize: 30, lineHeight: 1.55, color: muted }}>
          {kicker}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
          {chips.map((chip) => <Tag key={chip}>{chip}</Tag>)}
        </div>
      </div>

      <div style={{ position: 'relative', height: 650 }}>
        <div style={{ position: 'absolute', inset: '34px 10px 34px 44px', borderRadius: 44, background: '#FFFFFF', border: `2px solid ${color}38`, boxShadow: '0 28px 70px rgba(39,45,42,0.15)', overflow: 'hidden' }}>
          <div style={{ height: 72, background: color, color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', fontSize: 24, fontWeight: 900, letterSpacing: 1 }}>
            <span>NEXT SECTION</span>
            <span>AI Excel</span>
          </div>
          <div style={{ position: 'relative', height: 'calc(100% - 72px)', background: `linear-gradient(155deg, #FFFFFF 0%, ${color}0D 100%)` }}>
            <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', background: `${color}16`, left: '50%', top: 42, transform: 'translateX(-50%)', display: 'grid', placeItems: 'center', border: `2px solid ${color}28` }}>
              <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: symbol.length > 4 ? 92 : symbol.length > 2 ? 120 : 170, fontWeight: 900, color, letterSpacing: -4 }}>
                {symbol}
              </div>
            </div>

            <div style={{ position: 'absolute', left: 34, right: 34, bottom: 30, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {chips.slice(0, 3).map((chip, index) => (
                <div key={chip} style={{ borderRadius: 16, background: '#FFFFFF', border: `1px solid ${color}35`, boxShadow: '0 8px 20px rgba(39,45,42,0.08)', padding: '14px 10px', textAlign: 'center' }}>
                  <div style={{ width: 34, height: 34, margin: '0 auto 7px', borderRadius: 10, background: `${color}18`, color, display: 'grid', placeItems: 'center', fontSize: 19, fontWeight: 900 }}>
                    {index + 1}
                  </div>
                  <div style={{ fontSize: 21, fontWeight: 900, color: '#3A423E' }}>{chip}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
);

const OperationsRecapTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 02 · 情境導入"
    title="鍋貼店營運"
    subtitle="前情提要"
    color="#B56A2B"
    symbol="序"
    kicker="從經營情境與常見痛點出發，理解這套營運表格要解決什麼問題。"
    chips={['經營情境', '表格痛點', '課程任務']}
  />
);

const MasterDataTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 03 · 資料庫基礎"
    title="資料庫基礎"
    subtitle="三張主檔"
    color="#1F6F43"
    symbol="ID"
    kicker="先建立商品、物料與供應商主檔，讓後續資料都有一致的名稱與編號。"
    chips={['商品主檔', '物料主檔', '供應商主檔']}
  />
);

const AiToolsTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 04 · AI 工具"
    title="Excel 內使用 AI"
    subtitle="工具介紹"
    color="#8A5A2B"
    symbol="AI"
    kicker="認識 Excel 裡可搭配使用的 AI 工具，以及如何把需求說清楚。"
    chips={['增益集', '提示詞', '操作介面']}
  />
);

const BackToMastersTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 05 · 實際操作"
    title="回到三張主檔"
    color="#2C7A61"
    symbol="↩"
    kicker="把剛認識的 AI 工具實際用進商品、物料與供應商主檔。"
    chips={['檢查欄位', '建立下拉', '修正資料']}
  />
);

const BomSectionTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 06 · 資料庫基礎"
    title="資料庫基礎"
    subtitle="BOM 表"
    color="#2D6F9D"
    symbol="BOM"
    kicker="把一項商品拆成需要的原物料、用量與適用通路，建立成本計算的基礎。"
    chips={['商品', '原物料', '每份用量']}
  />
);

const TransactionsTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 07 · 交易紀錄"
    title="資料庫基礎"
    subtitle="銷售與進貨紀錄"
    color="#3D7196"
    symbol="↕"
    kicker="主檔建立完成後，開始記錄每天真正發生的銷售與進貨。"
    chips={['銷售明細', '進貨明細', '資料驗證']}
  />
);

const ReportsTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 08 · 營業報表"
    title="營業報表"
    subtitle="成本、庫存與毛利"
    color="#1B84A8"
    symbol="Σ"
    kicker="把主檔與交易紀錄串起來，讓成本、庫存與毛利自動更新。"
    chips={['成本計算', '庫存管理', '毛利分析']}
  />
);

const FormattingTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 09 · 輔助判讀"
    title="輔助判讀"
    subtitle="顏色與格式"
    color="#C0902E"
    symbol="Aa"
    kicker="使用顏色、格式與頁籤順序，讓重要狀態更容易被看見。"
    chips={['條件格式', '欄位格式', '頁籤整理']}
  />
);

const DashboardTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 10 · 管理視角"
    title="管理視角"
    subtitle="儀表板"
    color="#604294"
    symbol="▦"
    kicker="把大量明細整理成主管能快速判讀的 KPI、排行與異常提醒。"
    chips={['KPI', '商品排行', '庫存警示']}
  />
);

const VbaSectionTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 11 · 自動化工具"
    title="自動化工具"
    subtitle="Excel × VBA 與巨集"
    color="#35785A"
    symbol="VBA"
    kicker="把每天重複的整理、產表與提醒工作，交給按鈕和巨集完成。"
    chips={['錄製巨集', 'VBA', '一鍵執行']}
  />
);

const CloudSectionTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 12 · 雲端部署"
    title="雲端部署"
    subtitle="Google AppScript"
    color="#2B72B8"
    symbol="</>"
    kicker="把 Excel 的營運邏輯搬到 Google Sheets，並部署成可使用的網頁工具。"
    chips={['Google Sheets', 'AppScript', '網頁部署']}
  />
);

const AdventureExcelIntro: Page = () => (
  <div style={page}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Eyebrow color="#604294">課前基礎任務</Eyebrow>
      <PageHeading maxWidth={1700}>先完成 10 關 Excel 冒險，練習基礎操作</PageHeading>
      <p style={{ fontSize: 31, lineHeight: 1.45, color: muted, margin: '18px 0 0', maxWidth: 1660 }}>
        從輸入、排序、公式一路打到 XLOOKUP 與樞紐分析表；每過一關獲得 XP，最後挑戰資料魔王。
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, marginTop: 26 }}>
        <AdventureQuestCard num="01" src={adventure01} name="格式史萊姆" skill="輸入・填滿・格式" color="#75A928" />
        <AdventureQuestCard num="02" src={adventure02} name="迷霧哥布林" skill="排序・篩選・尋找" color="#567A32" />
        <AdventureQuestCard num="03" src={adventure03} name="算術石像鬼" skill="SUM・AVERAGE" color="#68717B" />
        <AdventureQuestCard num="04" src={adventure04} name="複製骷髏王" skill="相對・絕對參照" color="#68478D" />
        <AdventureQuestCard num="05" src={adventure05} name="審判獅鷲" skill="IF・AND 判斷" color="#B07B24" />
        <AdventureQuestCard num="06" src={adventure06} name="統計巨魔" skill="COUNTIF・SUMIF" color="#56743C" />
        <AdventureQuestCard num="07" src={adventure07} name="幻影模仿獸" skill="XLOOKUP" color="#6E5B91" />
        <AdventureQuestCard num="08" src={adventure08} name="囤貨黏液怪" skill="格式・資料驗證" color="#2E83A7" />
        <AdventureQuestCard num="09" src={adventure09} name="樞紐魔龍" skill="樞紐分析・圖表" color="#58427C" />
        <AdventureQuestCard num="10" src={adventure10} name="資料魔王" skill="綜合應用" color="#8B3C3C" />
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Adventure quest solutions — one page per walkthrough screenshot ────────
const QuestFormula = ({ color, size, children }: { color: string; size?: number; children: React.ReactNode }) => (
  <span
    style={{
      fontFamily: 'monospace',
      fontSize: size ?? 23,
      fontWeight: 700,
      color: '#D92D20',
      background: `${color}12`,
      border: `1px solid ${color}44`,
      borderRadius: 8,
      padding: '6px 14px',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

const QuestStep = ({
  color,
  stage,
  step,
  formulas,
  formulaScale,
  src,
  src2,
  srcWidth,
  src2Width,
  srcScale,
  alt,
}: {
  color: string;
  stage: string;
  step: string[];
  formulas?: string[];
  formulaScale?: number;
  src: string;
  src2?: string;
  srcWidth?: number;
  src2Width?: number;
  srcScale?: number;
  alt: string;
}) => (
  <div style={page}>
    <Eyebrow color={color}>課前基礎任務 · {stage}</Eyebrow>
    <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {step.map((line) => (
        <div key={line} style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.3, maxWidth: 1740, color: 'var(--osd-text)' }}>
          {line}
        </div>
      ))}
    </div>
    {formulas && formulas.length > 0 && (
      <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
        {formulas.map((f) => (
          <QuestFormula key={f} color={color} size={formulaScale ? 23 * formulaScale : undefined}>
            {f}
          </QuestFormula>
        ))}
      </div>
    )}
    <div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: srcWidth,
          maxWidth: srcWidth ? undefined : src2 ? '65%' : '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          transform: srcScale ? `scale(${srcScale})` : undefined,
          transformOrigin: 'center center',
        }}
      />
      {src2 && (
        <img
          src={src2}
          alt={alt}
          style={{ width: src2Width, maxWidth: src2Width ? undefined : '30%', maxHeight: '100%', objectFit: 'contain' }}
        />
      )}
    </div>
    <PageFooter />
  </div>
);

const questColor = {
  s01: '#75A928',
  s02: '#567A32',
  s03: '#68717B',
  s04: '#68478D',
  s05: '#B07B24',
  s06: '#56743C',
  s07: '#6E5B91',
  s08: '#2E83A7',
  s09: '#58427C',
  s10: '#8B3C3C',
};

const AdventureIntroRules: Page = () => (
  <QuestStep
    color={taskColor}
    stage="前情提要"
    step={[
      '你是一位冒險者，每一關會有一個怪物坐鎮，你需要打敗他',
      '關卡狀態、怪物HP、可得XP會依照你解題的進度變化',
      '怪物說的話可能是解題的線索',
      '通關後，關卡狀態會變為「CLEAR」、怪物HP會歸零',
    ]}
    src={qs01a}
    src2={qs01b}
    alt="前情提要：冒險者與怪物的關卡機制說明，關卡狀態、怪物HP、可得XP會依解題進度變化"
  />
);

const AdventureQuest02: Page = () => (
  <QuestStep
    color={questColor.s01}
    stage="01_新手村"
    step={['任務①在 A9:A18 用填滿控點建立 A101～A110', '任務②將缺漏的分會名稱補成「北境分會」']}
    src={qs02}
    alt="新手村任務①②：用填滿控點建立編號 A101～A110，並補齊缺漏的分會名稱"
  />
);

const AdventureQuest03: Page = () => (
  <QuestStep
    color={questColor.s01}
    stage="01_新手村"
    step={['任務③把標題列設為粗體、置中並加底色']}
    src={qs03}
    alt="新手村任務③：把標題列設為粗體、置中並加底色"
  />
);

const AdventureQuest04: Page = () => (
  <QuestStep
    color={questColor.s01}
    stage="01_新手村"
    step={['任務④凍結第 8 列以上的畫面']}
    src={qs04}
    alt="新手村任務④：凍結第 8 列以上的畫面"
  />
);

const AdventureQuest05: Page = () => (
  <QuestStep
    color={questColor.s01}
    stage="01_新手村"
    step={['完成③④後，請在右側人工檢核選擇「完成」', '檢查一下，關卡狀態是否「CLEAR」、怪物HP是否歸零']}
    src={qs05a}
    src2={qs05b}
    srcWidth={823}
    src2Width={761}
    alt="新手村檢核：人工檢核選擇完成後，關卡狀態變為 CLEAR、怪物HP歸零"
  />
);

const AdventureQuest06: Page = () => (
  <QuestStep
    color={questColor.s02}
    stage="02_真實之眼"
    step={['任務①請同時篩選「職業＝法師、地區＝北境、狀態＝出勤」']}
    src={qs06}
    alt="真實之眼任務①②：同時篩選職業＝法師、地區＝北境、狀態＝出勤"
  />
);

const AdventureQuest07: Page = () => (
  <QuestStep
    color={questColor.s02}
    stage="02_真實之眼"
    step={['任務②將符合者依等級由高到低排序', '任務③把五個編號填入上方答案區']}
    src={qs07}
    srcScale={1}
    alt="真實之眼任務②③：符合條件者依等級由高到低排序，前五名編號填入答案區"
  />
);

const AdventureQuest08: Page = () => (
  <QuestStep
    color={questColor.s03}
    stage="03_戰力鑑定"
    step={['任務①算出總戰力']}
    formulas={['=SUM(C9:F9)']}
    formulaScale={1.5}
    src={qs08}
    alt="戰力鑑定任務①：用 SUM 算出總戰力，公式輸入中的儲存格畫面"
  />
);

const AdventureQuest09: Page = () => (
  <QuestStep
    color={questColor.s03}
    stage="03_戰力鑑定"
    step={['任務②算出平均能力']}
    formulas={['=AVERAGE(C9:F9)']}
    formulaScale={1.5}
    src={qs09}
    alt="戰力鑑定任務②：用 AVERAGE 算出平均能力"
  />
);

const AdventureQuest10: Page = () => (
  <QuestStep
    color={questColor.s03}
    stage="03_戰力鑑定"
    step={['任務③算出最高能力']}
    formulas={['=MAX(C9:F9)']}
    formulaScale={1.5}
    src={qs10}
    alt="戰力鑑定任務③：用 MAX 算出最高能力"
  />
);

const AdventureQuest11: Page = () => (
  <QuestStep
    color={questColor.s03}
    stage="03_戰力鑑定"
    step={['任務④算出最低能力']}
    formulas={['=MIN(C9:F9)']}
    formulaScale={1.5}
    src={qs11}
    alt="戰力鑑定任務④：用 MIN 算出最低能力"
  />
);

const AdventureQuest12: Page = () => (
  <QuestStep
    color={questColor.s03}
    stage="03_戰力鑑定"
    step={['最後把C欄及F欄公式往下填滿']}
    src={qs12}
    alt="戰力鑑定最後一步：把 C 欄及 F 欄公式往下填滿"
  />
);

const AdventureQuest13: Page = () => (
  <QuestStep
    color={questColor.s04}
    stage="04_水晶增幅"
    step={['任務①在 G9 計算基礎戰力（攻擊、防禦、魔力、速度加總）並向下填滿']}
    formulas={['=SUM(C9:F9)']}
    formulaScale={1.5}
    src={qs13}
    alt="水晶增幅任務①：G9 計算基礎戰力＝攻擊＋防禦＋魔力＋速度，向下填滿"
  />
);

const AdventureQuest14: Page = () => (
  <QuestStep
    color={questColor.s04}
    stage="04_水晶增幅"
    step={['任務②在 H9 計算增幅後戰力，公式必須以絕對參照鎖定 $B$7，再向下填滿']}
    formulas={['=G9*(1+$B$7)']}
    formulaScale={1.5}
    src={qs14}
    alt="水晶增幅任務②：H9 用絕對參照 $B$7 鎖定固定增幅率，計算增幅後戰力"
  />
);

const AdventureQuest15: Page = () => (
  <QuestStep
    color={questColor.s05}
    stage="05_命運判定"
    step={['任務①階級規則：總戰力≥400 且完成任務≥8 → 黃金；', '否則總戰力≥300 → 白銀；其餘 → 青銅']}
    formulas={['=IF(AND(D9>=400,E9>=8),"黃金",IF(D9>=300,"白銀","青銅"))']}
    formulaScale={1.5}
    src={qs15}
    alt="命運判定任務①：用巢狀 IF 與 AND 判斷冒險者階級為黃金／白銀／青銅"
  />
);

const AdventureQuest16: Page = () => (
  <QuestStep
    color={questColor.s05}
    stage="05_命運判定"
    step={['任務② S 級資格：階級為黃金且等級≥15 → 可接；否則不可接。請用 IF、AND 完成']}
    formulas={['=IF(AND(F9="黃金",C9>=15),"可接","不可接")']}
    formulaScale={1.5}
    src={qs16}
    alt="命運判定任務②：用 IF、AND 判斷 S 級資格是否可接"
  />
);

const AdventureQuest17: Page = () => (
  <QuestStep
    color={questColor.s06}
    stage="06_委託統計"
    step={['任務①使用 COUNTIF 與 SUMIF計算 任務筆數']}
    formulas={['=COUNTIF(C9:C40,G9)']}
    formulaScale={1.5}
    src={qs17}
    alt="委託統計任務①：用 COUNTIF 依難度星等計算任務筆數"
  />
);

const AdventureQuest18: Page = () => (
  <QuestStep
    color={questColor.s06}
    stage="06_委託統計"
    step={['任務②使用 COUNTIF 與 SUMIF計算 報酬總額']}
    formulas={['=SUMIF($C$9:$C$40,G9,$D$9:$D$40)']}
    formulaScale={1.5}
    src={qs18}
    alt="委託統計任務②：用 SUMIF 依難度星等加總報酬總額"
  />
);

const AdventureQuest19: Page = () => (
  <QuestStep
    color={questColor.s07}
    stage="07_追蹤魔法"
    step={['任務①用 XLOOKUP 查找左表 編號 對應的 姓名']}
    formulas={['=IFERROR(XLOOKUP(A9,$J$9:$J$28,$K$9:$K$28),"查無資料")']}
    formulaScale={1.5}
    src={qs19}
    alt="追蹤魔法任務①：用 XLOOKUP 依編號查找對應姓名，查無資料時顯示提示文字"
  />
);

const AdventureQuest20: Page = () => (
  <QuestStep
    color={questColor.s07}
    stage="07_追蹤魔法"
    step={['任務②用 XLOOKUP 查找左表 編號 對應的 職業']}
    formulas={['=IFERROR(XLOOKUP(A9,$J$9:$J$28,$L$9:$L$28),"查無資料")']}
    formulaScale={1.5}
    src={qs20}
    alt="追蹤魔法任務②：用 XLOOKUP 依編號查找對應職業"
  />
);

const AdventureQuest21: Page = () => (
  <QuestStep
    color={questColor.s07}
    stage="07_追蹤魔法"
    step={['任務③用 XLOOKUP 查找左表 編號 對應的 地區']}
    formulas={['=IFERROR(XLOOKUP(A9,$J$9:$J$28,$M$9:$M$28),"查無資料")']}
    formulaScale={1.5}
    src={qs21}
    alt="追蹤魔法任務③：用 XLOOKUP 依編號查找對應地區"
  />
);

const AdventureQuest22: Page = () => (
  <QuestStep
    color={questColor.s08}
    stage="08_倉庫危機"
    step={['任務①在 G 欄用公式計算庫存價值＝庫存量×單價']}
    formulas={['=D9*F9']}
    formulaScale={1.5}
    src={qs22}
    alt="倉庫危機任務①：用公式計算庫存價值＝庫存量乘以單價"
  />
);

const AdventureQuest23: Page = () => (
  <QuestStep
    color={questColor.s08}
    stage="08_倉庫危機"
    step={['任務②用條件式格式標示庫存量低於安全庫存的列']}
    src={qs23}
    alt="倉庫危機任務②：新增條件式格式規則，標示庫存量低於安全庫存的列"
  />
);

const AdventureQuest24: Page = () => (
  <QuestStep
    color={questColor.s08}
    stage="08_倉庫危機"
    step={['任務②用條件式格式標示庫存量低於安全庫存的列']}
    formulas={['=$D9<$E9']}
    formulaScale={1.5}
    src={qs24}
    alt="倉庫危機任務②：條件式格式公式 =$D9<$E9，套用喜歡的格式"
  />
);

const AdventureQuest25: Page = () => (
  <QuestStep
    color={questColor.s08}
    stage="08_倉庫危機"
    step={['任務②用條件式格式標示庫存量低於安全庫存的列']}
    formulas={['=$A$9:$H$28']}
    formulaScale={1.5}
    src={qs25}
    alt="倉庫危機任務②：條件式格式規則管理員，套用到整個物品表格範圍"
  />
);

const AdventureQuest26: Page = () => (
  <QuestStep
    color={questColor.s08}
    stage="08_倉庫危機"
    step={['任務③在 盤點結果欄(H9:H28)', '建立下拉選單：正常／待補貨／停用']}
    src={qs26}
    alt="倉庫危機任務③：資料驗證設定下拉選單，來源為正常、待補貨、停用"
  />
);

const AdventureQuest27: Page = () => (
  <QuestStep
    color={questColor.s08}
    stage="08_倉庫危機"
    step={['將所有缺貨物品編號填入右側答案區，順序不限']}
    src={qs27}
    alt="倉庫危機最後一步：缺貨物品編號填入答案區，人工檢核完成"
  />
);

const AdventureQuest28: Page = () => (
  <QuestStep
    color={questColor.s09}
    stage="09_王國戰況"
    step={['任務①建立樞紐分析表']}
    src={qs28}
    alt="王國戰況任務①：插入樞紐分析表"
  />
);

const AdventureQuest29: Page = () => (
  <QuestStep
    color={questColor.s09}
    stage="09_王國戰況"
    step={['任務①建立樞紐分析表']}
    src={qs29}
    alt="王國戰況任務①：來自表格或範圍的樞紐分析表設定視窗"
  />
);

const AdventureQuest30: Page = () => (
  <QuestStep
    color={questColor.s09}
    stage="09_王國戰況"
    step={['填入正確答案', '下拉選單改完成']}
    src={qs30}
    alt="王國戰況正解：戰況問題答案全部判定正確，人工檢核完成"
  />
);

const AdventureQuest31: Page = () => (
  <QuestStep
    color={questColor.s10}
    stage="10_魔王討伐"
    step={['任務：從名冊中為五種職業各選一人組成戰隊。', '條件：狀態＝出勤、等級≥10，並選該職業中總戰力最高者。', '方法１：建立篩選']}
    src={qs31}
    alt="魔王討伐方法一：用排序與篩選找出各職業中出勤且等級達標的最高戰力者"
  />
);

const AdventureQuest32: Page = () => (
  <QuestStep
    color={questColor.s10}
    stage="10_魔王討伐"
    step={['任務：從名冊中為五種職業各選一人組成戰隊。', '條件：狀態＝出勤、等級≥10，並選該職業中總戰力最高者。', '方法２：建立樞紐分析']}
    src={qs32}
    alt="魔王討伐方法二：用樞紐分析表找出各職業中出勤且等級達標的最高戰力者"
  />
);

const AdventureQuest33: Page = () => (
  <QuestStep
    color={questColor.s09}
    stage="09_王國戰況"
    step={['填入正確答案']}
    src={qs33}
    alt="王國戰況正解：戰況問題答案全部判定正確"
  />
);

const JourneyStage = ({
  part,
  icon,
  title,
  items,
  result,
  color,
}: {
  part: string;
  icon: string;
  title: string;
  items: string;
  result: string;
  color: string;
}) => (
  <div
    style={{
      height: 300,
      borderRadius: 24,
      background: '#fff',
      border: `1px solid ${cardBorder}`,
      borderTop: `8px solid ${color}`,
      boxShadow: '0 10px 26px rgba(28,35,31,0.07)',
      padding: '24px 24px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 42 }}>{icon}</span>
      <span style={{ fontSize: 23, fontWeight: 900, color, letterSpacing: '0.06em' }}>{part}</span>
    </div>
    <div style={{ fontSize: 34, fontWeight: 900, color: 'var(--osd-text)' }}>{title}</div>
    <div style={{ fontSize: 27, lineHeight: 1.35, color: muted, minHeight: 74 }}>{items}</div>
    <div style={{ height: 1, background: cardBorder, marginTop: 'auto' }} />
    <div style={{ fontSize: 25, lineHeight: 1.3, fontWeight: 800, color }}>{result}</div>
  </div>
);

const JourneyArrow = () => (
  <div style={{ fontSize: 42, color: '#B9B5AA', fontWeight: 900, alignSelf: 'center', paddingBottom: 8 }}>→</div>
);

const AutomationRoute = ({
  part,
  title,
  detail,
  color,
}: {
  part: string;
  title: string;
  detail: string;
  color: string;
}) => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      borderRadius: 18,
      padding: '19px 22px',
      background: `${color}10`,
      border: `1px solid ${color}44`,
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 18,
        display: 'grid',
        placeItems: 'center',
        background: color,
        color: '#fff',
        fontSize: 23,
        fontWeight: 900,
        flexShrink: 0,
      }}
    >
      {part}
    </div>
    <div>
      <div style={{ fontSize: 29, fontWeight: 900, color }}>{title}</div>
      <div style={{ fontSize: 23, color: muted, marginTop: 3 }}>{detail}</div>
    </div>
  </div>
);

const CourseJourneyOverview: Page = () => (
  <div style={page}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Eyebrow color={design.palette.accent}>課程全貌｜PART 1–7</Eyebrow>
      <PageHeading maxWidth={1700}>一份資料，從日常記錄一路長成決策系統</PageHeading>
      <p style={{ fontSize: 31, lineHeight: 1.45, color: muted, margin: '18px 0 0' }}>
        前四段建立核心系統；完成後，再選擇雲端、桌面或跨檔案自動化。
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr',
          gap: 16,
          alignItems: 'center',
          marginTop: 34,
        }}
      >
        <JourneyStage
          part="PART 1"
          icon="🗂️"
          title="建立資料基礎"
          items="商品、原物料、供應商、BOM"
          result="用 ID 建立穩定關聯"
          color={partColor.p1}
        />
        <JourneyArrow />
        <JourneyStage
          part="PART 2"
          icon="🧾"
          title="留下每日紀錄"
          items="銷售紀錄、進貨紀錄"
          result="每筆交易都可追蹤"
          color={partColor.p2}
        />
        <JourneyArrow />
        <JourneyStage
          part="PART 3"
          icon="⚙️"
          title="啟動計算引擎"
          items="商品成本、庫存、營收毛利"
          result="公式設定一次，自動更新"
          color={partColor.p3}
        />
        <JourneyArrow />
        <JourneyStage
          part="PART 4"
          icon="📊"
          title="變成決策畫面"
          items="KPI、商品排行、庫存警示"
          result="一眼掌握經營狀況"
          color={partColor.p4}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 26 }}>
        <div style={{ width: 230, fontSize: 27, lineHeight: 1.35, fontWeight: 900, color: 'var(--osd-text)' }}>
          核心完成後
          <br />
          延伸三種自動化
        </div>
        <AutomationRoute part="5" title="雲端網頁" detail="Google Sheets＋GAS" color={partColor.p5} />
        <AutomationRoute part="6" title="桌面按鈕" detail="VBA 一鍵完成重複工作" color={partColor.p6} />
        <AutomationRoute part="7" title="跨檔彙總" detail="多份月報自動整併" color={partColor.p7} />
      </div>
    </div>
    <PageFooter />
  </div>
);

export default [
  Cover,
  AdventureSectionTitle,
  AdventureExcelIntro,
  AdventureIntroRules,
  AdventureQuest02,
  AdventureQuest03,
  AdventureQuest04,
  AdventureQuest05,
  AdventureQuest06,
  AdventureQuest07,
  AdventureQuest08,
  AdventureQuest09,
  AdventureQuest10,
  AdventureQuest11,
  AdventureQuest12,
  AdventureQuest13,
  AdventureQuest14,
  AdventureQuest15,
  AdventureQuest16,
  AdventureQuest17,
  AdventureQuest18,
  AdventureQuest19,
  AdventureQuest20,
  AdventureQuest21,
  AdventureQuest22,
  AdventureQuest23,
  AdventureQuest24,
  AdventureQuest25,
  AdventureQuest26,
  AdventureQuest27,
  AdventureQuest28,
  AdventureQuest29,
  AdventureQuest30,
  AdventureQuest31,
  AdventureQuest32,
  AdventureQuest33,
  OperationsRecapTitle,
  OwnerMoneyBasics,
  CourseJourneyOverview,
  MasterDataTitle,
  Part1Tables,
  PptxProductMaster,
  Part1PromptTechniques,
  AiToolsTitle,
  ClaudeGuideAddin,
  ClaudeGuideSkills,
  ClaudeSkillsTry,
  PptxClaudeSidebar,
  ClaudeGuideToolbar,
  ClaudeGuideTopRight,
  ClaudeGuideConnectorsTask,
  BackToMastersTitle,
  Part1TaskDropdownCheck,
  Part1TaskDropdownFix,
  Part1Task567,
  Part1Task8,
  RangeVsTableAnalogy,
  Part1Task9,
  Part1Task9Tools,
  Part1SupplierIntro,
  Part1SupplierTasks,
  BomSectionTitle,
  Part1BomSetup,
  Part1BomSampleData,
  TransactionsTitle,
  Part1SalesSetup,
  Part1SalesSampleData,
  Part1PurchaseSetup,
  Part1PurchaseSampleData,
  ReportsTitle,
  Part3Engine,
  Part3SpillHash,
  Part3CostGuide,
  Part3CostTableGuide,
  Part3InventoryGuide,
  Part3InventoryTableGuide,
  Part3RevenueGuide,
  Part3RevenueTableGuide,
  FormattingTitle,
  Part3FormatRules,
  Part3TabOrder,
  DashboardTitle,
  Part4DashboardMaskSplit,
  Part4DashboardKpiSplit,
  Part4DashboardRanking,
  Part4DashboardInventoryDrill,
  Part4FunctionsUniqueFilterSplit,
  Part4FunctionsSortLetSplit,
  Part4DashboardCascade,
  VbaSectionTitle,
  Part6Vba,
  PptxMacroStep1,
  PptxMacroStep2,
  PptxMacroStep3,
  PptxMacroStep4,
  Part6VbaFirstTryMsgBox,
  Part6VbaFirstTryRange,
  Part6VbaFirstTrySum,
  PptxDailyReportOnlySplit,
  PptxPurchaseOrderOnlySplit,
  Part6VbaLazyTry,
  PptxMacroStep5,
  PptxMacroStep6,
  Part6VbaSalesReport,
  Part6VbaPurchaseMessage,
  Part6VbaPurchaseSmart,
  Part6CloseCheckOnlySplit,
  Part6ReorderReminderSplit,
  PptxMacroStep7,
  Part6VbaRibbon,
  PptxRibbonStep1,
  PptxRibbonStep2,
  PptxRibbonStep3,
  PptxRibbonStep4,
  Part7RollupIntro,
  Part7RollupFlowSplit,
  Part7RollupErrorsSplit,
  Part7ReportsDecisionSplit,
  Part7ReportsControlSplit,
  Part7RollupRecap,
  CloudSectionTitle,
  Part5Cloud,
  Part5FrontBack,
  GasBasics01,
  GasBasics02,
  GasBasics03,
  GasBasics04,
  GasBasics05,
  GasBasics06,
  GasBasics07,
  GasBasics08,
  GasBasics09,
  GasBasics10,
  GasBasics11,
  GasBasics12,
  GasBasics13,
  GasBasics14,
  GasBasics15,
  GasBasics16,
  GasBasics17,
  GasBasics18,
  GasBasics19,
  GasBasics20,
  GasBasics21,
  GasBasics22,
  GasPracticeBridge,
  Part5CloudConcepts,
  Part5Goals,
  Part5UploadConvert,
  PptxCloudStep1,
  PptxCloudStep2,
  Part5ChatGptSheets,
  PptxCloudStep3,
  Part5FixFormulas,
  Part5BackendRangesSplit,
  Part5BackendFlowSplit,
  Part5BackendFunctions,
  Part5FrontendLayout,
  Part5FrontendSections,
  Part5Deploy,
  PptxCloudStep4,
  PptxCloudStep5,
  PptxCloudStep6,
  PptxCloudStep7,
  PptxCloudStep8,
  Part5WriteBackFlowSplit,
  Part5WriteBackFormSplit,
  Part5Debug,
  Part5AutoEmail,
  Part5VbaVsGas,
  SkillMap,
  Closing,
] satisfies Page[];
