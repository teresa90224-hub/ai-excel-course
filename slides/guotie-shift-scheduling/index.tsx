import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps, useSlidePageNumber } from '@open-slide/core';
import busAnalogyPeakHours from './assets/bus-analogy-peak-hours.png';
import scheduleIllustrationTop from './assets/schedule-illustration-top.png';
import scheduleIllustrationMiddle from './assets/schedule-illustration-middle.png';
import scheduleIllustrationBottom from './assets/schedule-illustration-bottom.png';
import vbaStep1FilePicker from './assets/vba-step1-filepicker.png';
import vbaStep2DailyTrend from './assets/vba-step2-dailytrend.png';
import vbaStep3Filtered from './assets/vba-step3-filtered.png';
import vbaStep4Schedule from './assets/vba-step4-schedule.png';
import vbaStep5SalarySetting from './assets/vba-step5-salarysetting.png';
import vbaBackgroundErrorFlow from './assets/vba-background-error-flow.png';
import vbaStep6ScheduleFields from './assets/vba-step6-schedule-fields.png';
import bonusInputFieldCallouts from './assets/bonus-input-field-callouts.png';
import bonusSumByEmployee from './assets/bonus-sum-by-employee.png';
import bonusTotalFormula from './assets/bonus-total-formula.png';
import bonusTotalToSalary from './assets/bonus-total-to-salary.png';
import overtimeSumToSalary from './assets/overtime-sum-to-salary.png';
import salaryGrossPayFormula from './assets/salary-gross-pay-formula.png';
import insuranceBracketTable2026 from './assets/insurance-bracket-table-2026.png';
import insuranceBracketThreeZooms from './assets/insurance-bracket-three-zooms.png';
import insuranceRulesThreeThings from './assets/insurance-rules-three-things.png';
import insuranceAmountsToSalaryDetail from './assets/insurance-amounts-to-salary-detail.png';
import leaveDeductToSalaryDetail from './assets/leave-deduct-to-salary-detail.png';
import leaveDeductFormulaLogic from './assets/leave-deduct-formula-logic.png';
import salaryDeductionsNetPayFormula from './assets/salary-deductions-net-pay-formula.png';
import hoursSummaryFieldCallouts from './assets/hours-summary-field-callouts.png';
import overtimeRateTimeline from './assets/overtime-rate-timeline.png';
import overtimeCalculationFormula from './assets/overtime-calculation-formula.png';
import overtimeDetailCalculationFlow from './assets/overtime-detail-calculation-flow.png';
import salarySettingsOvertimeRates from './assets/salary-settings-overtime-rates.png';
import asset from './assets/日期、營業額 大一點.jpg';
import performanceBonusFlow from './assets/performance-bonus-flow.png';
import salaryPrincipleMorePayLessDeduct from './assets/salary-principle-more-pay-less-deduct.png';
import asset2 from './assets/排班圖解_中.png';
import asset3 from './assets/排班圖解_下.png';
import asset4 from './assets/排班圖解_上.png';
import gasTask46Skeleton from './assets/gas-schedule-task46-skeleton.png';
import gasTask47StaffList from './assets/gas-schedule/task47-staff-list.png';
import gasTask49SidebarSkeleton from './assets/gas-schedule/task49-sidebar-skeleton.png';
import gasTask48IdentityPicker from './assets/gas-schedule/task48-identity-picker.png';
import gasTask48Welcome from './assets/gas-schedule/task48-welcome.png';
import gasTask50MonthlySchedule from './assets/gas-schedule/task50-monthly-schedule.png';
import gasTask51LeaveList from './assets/gas-schedule/task51-leave-list.png';
import gasTask52AddButton from './assets/gas-schedule/task52-add-button.png';
import gasTask52FormEmpty from './assets/gas-schedule/task52-form-empty.png';
import gasTask52FormFilled from './assets/gas-schedule/task52-form-filled.png';
import gasTask52Result from './assets/gas-schedule/task52-result.png';
import gasTask52SheetVerify from './assets/gas-schedule/task52-sheet-verify.png';
import gasTask53ShiftMaintenance from './assets/gas-schedule/task53-shift-maintenance.png';
import gasTask54ExportButtons from './assets/gas-schedule/task54-export-buttons.png';
import gasTask54GoogleCalendar from './assets/gas-schedule/task54-google-calendar.png';
import gasTask54IphoneList from './assets/gas-schedule/task54-iphone-list.png';
import gasTask54IphoneDetail from './assets/gas-schedule/task54-iphone-detail.png';
import gasTask55FinalUi from './assets/gas-schedule/task55-final-ui.png';





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
const gasTeal = '#0E8A82';

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

// Let white-backed diagrams and screenshots inherit the slide's warm background.
const imageOnSlideBackground = {
  mixBlendMode: 'multiply' as const,
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

const PageHeading = ({ children, maxWidth, marginTop }: { children: React.ReactNode; maxWidth?: number; marginTop?: number }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 64,
      fontWeight: 800,
      lineHeight: 1.15,
      margin: `${marginTop ?? 32}px 0 0`,
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

const LegendDot = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <span style={{ width: 20, height: 20, borderRadius: 5, background: color, flexShrink: 0 }} />
    <span style={{ fontSize: 25 }}>{label}</span>
  </div>
);

const SheetChip = ({ color, label }: { color: string; label: string }) => (
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

// ─── Shared — PART section divider ────────────────────────────────────────────
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
            <span>排班與薪資</span>
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

const Part1SectionTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 01 · 情境導入"
    title="排班表是什麼？"
    subtitle="情境與限制"
    color={design.palette.accent}
    symbol="序"
    kicker="從鍋貼店的真實痛點出發，理解排班表要解決什麼問題、有哪些限制。"
    chips={['要素與限制', '案例情境', '人力限制']}
  />
);

const Part2SectionTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 02 · 排班表實作"
    title="排班表實作"
    subtitle="從主檔到公式"
    color={sheetColor.leave}
    symbol="表"
    kicker="建立員工主檔、休假申請、排班表，並用公式自動判斷合理性。"
    chips={['員工主檔', '排班公式', '工時彙總']}
  />
);

const Part3SectionTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 03 · 薪水怎麼算？"
    title="薪水怎麼算？"
    subtitle="從工時到實發"
    color={sheetColor.monthly}
    symbol="$"
    kicker="把工時、加班、獎金、勞健保與請假扣款，串成完整的薪資明細。"
    chips={['薪資設定', '加班獎金', '應扣項目']}
  />
);

const Part4SectionTitle: Page = () => (
  <CourseSectionTitle
    chapter="CHAPTER 04 · 雲端部署"
    title="GAS 排班系統"
    subtitle="從 Excel 到網頁"
    color={gasTeal}
    symbol="</>"
    kicker="把排班與請假邏輯搬上 Google Apps Script，做成員工能自己操作的網頁工具。"
    chips={['身分登入', '請假申請', '匯出行事曆']}
  />
);

const GasOverviewCard = ({
  step,
  icon,
  title,
  description,
  accent,
  width = 300,
}: {
  step: string;
  icon: string;
  title: string;
  description: string;
  accent: string;
  width?: number;
}) => (
  <div
    style={{
      width,
      minHeight: 220,
      padding: '24px 26px',
      borderRadius: 24,
      background: '#FFFFFF',
      border: `2px solid ${accent}28`,
      boxShadow: '0 14px 36px rgba(28, 35, 31, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 22, fontWeight: 900, color: accent, letterSpacing: '0.08em' }}>{step}</span>
      <span
        style={{
          width: 52,
          height: 52,
          borderRadius: 16,
          background: `${accent}16`,
          display: 'grid',
          placeItems: 'center',
          fontSize: 28,
        }}
      >
        {icon}
      </span>
    </div>
    <div style={{ fontSize: 31, fontWeight: 900, color: 'var(--osd-text)', lineHeight: 1.2 }}>{title}</div>
    <div style={{ fontSize: 24, color: muted, lineHeight: 1.45 }}>{description}</div>
  </div>
);

const GasSystemOverview: Page = () => (
  <div style={page}>
    <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
    <PageHeading maxWidth={1650} marginTop={16}>一個入口，完成排班日常的 5 件事</PageHeading>
    <div style={{ fontSize: 28, color: muted, marginTop: 10 }}>
      員工從確認身分開始，一路查看班表、申請請假、維護資料，再把班表帶進自己的行事曆。
    </div>

    <div style={{ position: 'relative', marginTop: 44, display: 'flex', justifyContent: 'center', gap: 26 }}>
      <div style={{ position: 'absolute', left: 150, right: 150, top: 110, height: 4, background: `${gasTeal}20` }} />
      <GasOverviewCard step="01" icon="✓" title="確認身分" description="從員工主檔選擇自己，進入個人化首頁。" accent={gasTeal} />
      <GasOverviewCard step="02" icon="▦" title="查看月班表" description="只看自己的當月班別，快速掌握上班日期。" accent={sheetColor.schedule} />
      <GasOverviewCard step="03" icon="＋" title="申請請假" description="填寫假別與日期，送出後直接寫回試算表。" accent={sheetColor.leave} />
      <GasOverviewCard step="04" icon="↻" title="維護班別" description="管理個人班別資料，讓後續排班保持一致。" accent={sheetColor.settings} />
      <GasOverviewCard step="05" icon="↗" title="匯出行事曆" description="同步 Google 行事曆，也能下載 .ics 給 iPhone。" accent={formulaBlue} />
    </div>

    <div
      style={{
        marginTop: 34,
        padding: '20px 30px',
        borderRadius: 18,
        background: `${gasTeal}10`,
        borderLeft: `8px solid ${gasTeal}`,
        fontSize: 27,
        fontWeight: 800,
        color: 'var(--osd-text)',
      }}
    >
      核心價值：把「問主管、翻班表、手動登記」變成員工可以自己完成的網頁流程。
    </div>
    <PageFooter />
  </div>
);

// ─── Page 1 — Cover ────────────────────────────────────────────────────────────
const Cover: Page = () => (
  <div style={{ ...page, justifyContent: 'center' }}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 36, maxWidth: 1560 }}>
      <Eyebrow color={design.palette.accent}>AI Excel 課程 ·排班與薪資</Eyebrow>
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 140,
          fontWeight: 900,
          lineHeight: 1.05,
          margin: 0,
        }}
      >
        排班與薪資模組
      </h1>
      <p style={{ fontSize: 40, color: muted, lineHeight: 1.5, maxWidth: 1400, margin: 0 }}>
        中山區鍋貼店案例：把排班規則、薪資計算都變成公式與條件式格式，人力疏漏不用再靠記憶把關
      </p>
      <Steps>
        <Step>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <Tag>案例情境：鬧區鍋貼店排班</Tag>
            <Tag>排班表 + 薪資系統</Tag>
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

// ─── Page 1a — 目錄／課程地圖 ───────────────────────────────────────────────────
const Agenda: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>目錄</Eyebrow>
    <PageHeading>兩大主題：排班表怎麼做，薪水怎麼算</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
      <Steps>
        <Step>
          <div
            style={{
              flex: 1,
              background: cardBg,
              border: `2px solid ${sheetColor.schedule}`,
              borderRadius: 20,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 900,
                  color: '#fff',
                  background: sheetColor.schedule,
                  borderRadius: 10,
                  padding: '4px 14px',
                }}
              >
                Part 1
              </span>
              <span style={{ fontSize: 36, fontWeight: 800 }}>排班表是什麼？怎麼做？</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
              <RuleChip text="為什麼要有排班表模組" />
              <RuleChip text="排班表的要素與限制" />
              <RuleChip text="我們的情境：中山區鍋貼店" />
              <RuleChip text="動手做出 5 張表、防呆規則、/skill" />
            </div>
          </div>
        </Step>
        <Step>
          <div
            style={{
              flex: 1,
              background: cardBg,
              border: `2px solid ${formulaBlue}`,
              borderRadius: 20,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 900,
                  color: '#fff',
                  background: formulaBlue,
                  borderRadius: 10,
                  padding: '4px 14px',
                }}
              >
                Part 2
              </span>
              <span style={{ fontSize: 36, fontWeight: 800 }}>薪水怎麼算？</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
              <RuleChip text="薪資設定、工時彙總、薪資明細" color={formulaBlue} />
              <RuleChip text="加班明細、獎金明細" color={formulaBlue} />
              <RuleChip text="加班費、勞健保自負額、請假扣薪" color={formulaBlue} />
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 2 — 一、為什麼要有排班表模組？（打工經驗切入） ─────────────────────
const WhyModule1: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent} style={{ lineHeight: '1.3' }}>PART 1 · 排班表是什麼？</Eyebrow>
    <PageHeading>你有餐飲業或服務業打工經驗嗎？</PageHeading>
    <div src={asset4} style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Steps>
        <Step>
          <div style={{ display: 'flex', justifyContent: 'center', lineHeight: '1.4' }}>
            <img
              src={asset4}
              alt="餐飲門市六日不休息，員工輪流上班、輪流休假，這就是排班"
              style={{ maxWidth: '100%', height: 240, objectFit: 'cover', objectPosition: '50% 50%', objectViewBox: 'inset(0% 3.69% 0% 3.69%)' }}
            />
          </div>
        </Step>
      </Steps>
      <Steps>
        <Step>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={asset2}
              alt="每天要決定哪個時段、要有誰在——開店有人顧、尖峰有人補、打烊有人收"
              style={{ maxWidth: '100%', height: 320, objectFit: 'cover', objectPosition: '50% 50%', objectViewBox: 'inset(3.68% 2.09% 0.53% 2.1%)' }}
            />
          </div>
        </Step>
      </Steps>
      <Steps>
        <Step src={asset3}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={asset3}
              alt="人力沒接上，輕則出餐變慢、客人抱怨，重則違反勞基法挨罰"
              style={{ maxWidth: '100%', height: 175, objectFit: 'cover', objectPosition: '50% 50%', objectViewBox: 'inset(2.42% 2.19% 2.18% 2.44%)' }}
            />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 3 — 一、為什麼要有排班表模組？（傳統做法問題） ─────────────────────
const WhyModule2: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>PART 1 · 排班表是什麼？</Eyebrow>
    <PageHeading>今天誰上班？</PageHeading>
    <div style={{ marginTop: 32 }}>
      <Steps>
        <Step>
          <TxCard color={painRed} title="傳統做法的問題">
            <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
              紙本、群組留言、口頭喬班——誰請假、誰被排過班、早班夠不夠人，全靠人工回想或翻訊息記錄
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 27, fontWeight: 700, color: muted }}>最容易發生的三種疏漏</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <Steps>
          <Step><RuleChip text="同一人被排兩班" color={painRed} /></Step>
          <Step><RuleChip text="休假當天還被排班" color={painRed} /></Step>
          <Step><RuleChip text="假日尖峰人力不足" color={painRed} /></Step>
        </Steps>
      </div>
    </div>
    <div style={{ marginTop: 28 }}>
      <Steps>
        <Step>
          <TxCard color={goodGreen} title="Excel 模組的解法">
            <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
              排班規則變成公式與條件式格式——資料一填，衝突與缺人狀況自動標示，不必每次靠記憶把關
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 4 — 二a、排班表要素 ──────────────────────────────────────────────────
const Elements: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>二、排班表要有哪些要素、限制？</Eyebrow>
    <PageHeading>一份堪用的排班表，要能回答 5 件事</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
      <Steps>
        <Step><MiniFeature color={sheetColor.settings} title="班別定義" desc="每個班別的上下班時間、休息時數" /></Step>
        <Step><MiniFeature color={sheetColor.staff} title="員工可上班時段" desc="不是每個人都能排任何時段" /></Step>
        <Step><MiniFeature color={sheetColor.leave} title="休假紀錄" desc="誰在哪天已請假，假別為何" /></Step>
        <Step><MiniFeature color={sheetColor.schedule} title="每日／每班人力配置" desc="早上、晚上或平日、假日因應營業狀況配置" /></Step>
        <Step><MiniFeature color={sheetColor.monthly} title="工時計算" desc="實際工時要自動扣掉休息時數，而非單純下班－上班" /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 5 — 二b、排班表限制 ──────────────────────────────────────────────────
const BigStat = ({ value, label, color }: { value: string; label: string; color: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
    <div style={{ fontSize: 56, fontWeight: 900, color, lineHeight: 1 }}>{value}</div>
    <div style={{ fontSize: 24, color: muted, fontWeight: 700 }}>{label}</div>
  </div>
);

const PersonRow = ({
  total,
  highlight,
  highlightLabel,
  color,
}: {
  total: number;
  highlight?: number;
  highlightLabel?: string;
  color: string;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
    <div style={{ display: 'flex', gap: 6 }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{ fontSize: 32, opacity: highlight && i < highlight ? 1 : 0.4 }}>
          {highlight && i < highlight ? '🧑🏿' : '🧑🏻'}
        </span>
      ))}
    </div>
    {highlight ? (
      <div style={{ fontSize: 21, fontWeight: 700, color }}>{highlightLabel}</div>
    ) : null}
  </div>
);

const Constraints: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>二、排班表要有哪些要素、限制？</Eyebrow>
    <PageHeading>兩種限制，決定排班表要多聰明</PageHeading>
    <div style={{ display: 'flex', gap: 40, marginTop: 48, justifyContent: 'center', maxWidth: 1560, marginLeft: 'auto', marginRight: 'auto' }}>
      <Steps>
        <Step>
          <div
            style={{
              flex: 1,
              background: `${warnAmber}0D`,
              border: `3px solid ${warnAmber}`,
              borderRadius: 24,
              padding: '34px 38px',
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
            }}
          >
            <div style={{ fontSize: 36, fontWeight: 900, color: warnAmber }}>⚖ 法規面</div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <BigStat value="120天" label="今年紅字（以2026為例）" color={warnAmber} />
              <BigStat value="10天" label="平均月休" color={warnAmber} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
              <RuleChip text="七休一：連續上班不能超過 6 天" color={warnAmber} />
              <RuleChip text="單日正常工時上限 8 小時" color={warnAmber} />
            </div>
          </div>
        </Step>
        <Step>
          <div
            style={{
              flex: 1,
              background: `${sheetColor.staff}0D`,
              border: `3px solid ${sheetColor.staff}`,
              borderRadius: 24,
              padding: '34px 38px',
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
              justifyContent: 'center',
            }}
          >
            <div style={{ fontSize: 36, fontWeight: 900, color: sheetColor.staff }}>🏪 營運面</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 4 }}>
              <RuleChip text="假日／尖峰時段人力需求高於平日" color={sheetColor.staff} />
              <RuleChip text="早班開店、晚班閉店需要固定人數到場" color={sheetColor.staff} />
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 6 — 三、我們的情境是什麼？（店家介紹） ───────────────────────────────
const CaseIntro: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>三、我們的情境是什麼？</Eyebrow>
    <PageHeading>中山區鬧區的鍋貼店，兩段尖峰時間</PageHeading>
    <p style={{ fontSize: 28, color: muted, lineHeight: 1.5, margin: '16px 0 0', maxWidth: 1600 }}>
      住商混合、交通便利，白天最忙是上班族午休，晚上最忙是下班人潮
    </p>
    <div style={{ display: 'flex', gap: 40, marginTop: 48, justifyContent: 'center', maxWidth: 1650, marginLeft: 'auto', marginRight: 'auto' }}>
      <Steps>
        <Step>
          <div
            style={{
              flex: 1,
              background: cardBg,
              border: `3px solid ${warnAmber}`,
              borderRadius: 24,
              padding: '36px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div style={{ fontSize: 34, fontWeight: 900, color: warnAmber }}>☀ 白天尖峰</div>
            <div style={{ fontSize: 58, fontWeight: 900, color: warnAmber }}>12:00–13:00</div>
            <div style={{ fontSize: 28, color: muted }}>上班族午休時間</div>
          </div>
        </Step>
        <Step>
          <div
            style={{
              flex: 1,
              background: cardBg,
              border: `3px solid ${violatePurple}`,
              borderRadius: 24,
              padding: '36px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div style={{ fontSize: 34, fontWeight: 900, color: violatePurple }}>🌙 晚間尖峰</div>
            <div style={{ fontSize: 58, fontWeight: 900, color: violatePurple }}>18:00–20:00</div>
            <div style={{ fontSize: 28, color: muted }}>下班後人潮</div>
          </div>
        </Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 32 }}>
          <Callout color={design.palette.accent}>
            班別設計邏輯：白天班須於 <b>12:00（忙碌開始前）</b>到班；每個班別須於 <b>20:00（忙碌結束後）</b>下班。
          </Callout>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 7 — 三、我們的情境是什麼？（班別時間軸） ─────────────────────────────
const HOUR_START = 10;
const HOUR_END = 22;
const HourAxis = () => {
  const hours = [];
  for (let h = HOUR_START; h <= HOUR_END; h += 2) hours.push(h);
  return (
    <div style={{ display: 'flex', marginLeft: 196 }}>
      {hours.map((h) => (
        <div
          key={h}
          style={{
            flex: h === HOUR_END ? '0 0 0' : '1 1 0',
            fontSize: 22,
            color: muted,
            fontWeight: 700,
          }}
        >
          {h}:00
        </div>
      ))}
    </div>
  );
};

const ShiftTimelineBar = ({
  label,
  start,
  end,
  color,
  note,
}: {
  label: string;
  start: number;
  end: number;
  color: string;
  note?: string;
}) => {
  const totalHours = HOUR_END - HOUR_START;
  const left = ((start - HOUR_START) / totalHours) * 100;
  const width = ((end - start) / totalHours) * 100;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 180, fontSize: 26, fontWeight: 800, textAlign: 'right', flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, position: 'relative', height: 44, background: '#F1EFE4', borderRadius: 10 }}>
        <div style={{ position: 'absolute', left: `${((12 - HOUR_START) / totalHours) * 100}%`, width: `${(1 / totalHours) * 100}%`, height: '100%', background: `${warnAmber}22`, backgroundColor: '#f1efe5' }} />
        <div style={{ position: 'absolute', left: `${((18 - HOUR_START) / totalHours) * 100}%`, width: `${(2 / totalHours) * 100}%`, height: '100%', background: `${violatePurple}22` }} />
        <div
          style={{
            position: 'absolute',
            left: `${left}%`,
            width: `${width}%`,
            height: '100%',
            background: color,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>
            {start}:00–{end}:00{note ? `　${note}` : ''}
          </span>
        </div>
      </div>
    </div>
  );
};

const ShiftTimeline: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>三、我們的情境是什麼？</Eyebrow>
    <PageHeading>4 個班別，接力涵蓋 10:00–22:00</PageHeading>
    <div style={{ marginTop: 44 }}>
      <HourAxis />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 10 }}>
        <Steps>
          <Step><ShiftTimelineBar label="早班" start={10} end={20} color={sheetColor.settings} /></Step>
          <Step><ShiftTimelineBar label="早午班" start={11} end={20} color={sheetColor.staff} /></Step>
          <Step><ShiftTimelineBar label="午晚班" start={12} end={22} color={sheetColor.schedule} /></Step>
          <Step><ShiftTimelineBar label="晚班" start={18} end={22} color={sheetColor.monthly} note="僅限兼職" /></Step>
        </Steps>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 24, marginTop: 28 }}>
      <LegendDot color={`${warnAmber}66`} label="午間忙碌（12–13）" />
      <LegendDot color={`${violatePurple}66`} label="晚間忙碌（18–20）" />
    </div>
    <div style={{ marginTop: 20 }}>
      <Callout color={design.palette.accent}>
        晚班（18:00–22:00）是晚上餐期人力加強，<b>僅限兼職排班</b>。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 7a — 三、我們的情境是什麼？（公車班次比喻） ─────────────────────────
const BusAnalogy: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>三、我們的情境是什麼？</Eyebrow>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
      <img
        src={busAnalogyPeakHours}
        alt="就像公車一樣：離峰班次少、尖峰班次多，對應餐廳早班／餐期／離峰／人太多的人力配置"
        style={{ ...imageOnSlideBackground, maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 20, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', lineHeight: '0.8', letterSpacing: '0.1px' }}
      />
    </div>
    <PageFooter />
  </div>
);

// ─── Page 8 — 三、我們的情境是什麼？（人力線數限制） ───────────────────────────
const StaffingLimits: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>三、我們的情境是什麼？</Eyebrow>
    <PageHeading>每日／每班人力，線數固定不多不少</PageHeading>
    <div style={{ display: 'flex', gap: 40, marginTop: 48, justifyContent: 'center', maxWidth: 1700, marginLeft: 'auto', marginRight: 'auto' }}>
      <Steps>
        <Step>
          <div
            style={{
              flex: 1,
              background: cardBg,
              border: `3px solid ${sheetColor.schedule}`,
              borderRadius: 24,
              padding: '32px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <div style={{ fontSize: 36, fontWeight: 900, color: sheetColor.schedule, textAlign: 'center' }}>平日</div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <BigStat value="3線" label="白天（含 1 早班）" color={sheetColor.schedule} />
                <PersonRow total={3} highlight={1} highlightLabel="早班開店" color={sheetColor.schedule} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <BigStat value="4線" label="晚上（含 1 閉店）" color={sheetColor.schedule} />
                <PersonRow total={4} highlight={1} highlightLabel="閉店收班" color={sheetColor.schedule} />
              </div>
            </div>
          </div>
        </Step>
        <Step>
          <div
            style={{
              flex: 1,
              background: cardBg,
              border: `3px solid ${painRed}`,
              borderRadius: 24,
              padding: '32px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <div style={{ fontSize: 36, fontWeight: 900, color: painRed, textAlign: 'center' }}>假日</div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <BigStat value="4線" label="白天（含 1 早班）" color={painRed} />
                <PersonRow total={4} highlight={1} highlightLabel="早班開店" color={painRed} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <BigStat value="5線" label="晚上（含 1 閉店）" color={painRed} />
                <PersonRow total={5} highlight={1} highlightLabel="閉店收班" color={painRed} />
              </div>
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 32 }}>
          <Callout color={design.palette.accent}>
            員工可上班時段：依據員工提供的可上班別進行排班。
          </Callout>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 9 — 三、我們的情境是什麼？（工時計算表） ─────────────────────────────
const WorkHoursTable: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>三、我們的情境是什麼？</Eyebrow>
    <PageHeading>工時計算：下班－上班，還要扣掉休息</PageHeading>
    <div style={{ marginTop: 44, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.2fr' }}>
        <SheetHeaderCell label="班別" />
        <SheetHeaderCell label="上班時間" />
        <SheetHeaderCell label="下班時間" />
        <SheetHeaderCell label="休息時數" />
        <SheetHeaderCell label="實際工時" />

        <SheetCell value="早班" />
        <SheetCell value="10:00" />
        <SheetCell value="20:00" />
        <SheetCell value="2.0 hr" />
        <SheetCell value="8.0 hr" formula />

        <SheetCell value="早午班" band />
        <SheetCell value="11:00" band />
        <SheetCell value="20:00" band />
        <SheetCell value="1.0 hr" band />
        <SheetCell value="8.0 hr" formula band />

        <SheetCell value="午晚班" />
        <SheetCell value="12:00" />
        <SheetCell value="22:00" />
        <SheetCell value="2.0 hr" />
        <SheetCell value="8.0 hr" formula />

        <SheetCell value="晚班" band />
        <SheetCell value="18:00" band />
        <SheetCell value="22:00" band />
        <SheetCell value="0 hr" band />
        <SheetCell value="4.0 hr" formula band />
      </div>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 24 }}>
          <Callout color={sheetColor.schedule}>
            <b>實際工時 ＝ (下班時間－上班時間) － 休息時數</b>——用公式自動算，不用手動加減。
          </Callout>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 10 — 三、我們的情境是什麼？（防呆需求） ──────────────────────────────
const AntiErrorNeeds: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>三、我們的情境是什麼？</Eyebrow>
    <PageHeading>5 種情況，都要能自動標示出來</PageHeading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 44 }}>
      <Steps>
        <Step><MiniFeature color={painRed} title="① 重複排班" desc="同一人同一天被排兩班以上" /></Step>
        <Step><MiniFeature color={violatePurple} title="② 休假衝突" desc="被排在指定休假的日期" /></Step>
        <Step><MiniFeature color={warnAmber} title="③ 月休天數異常" desc="月休少於或多於 10 天" /></Step>
        <Step><MiniFeature color={sheetColor.staff} title="④ 開關店沒人" desc="早班開店、晚班閉店時段沒人上班" /></Step>
        <Step><MiniFeature color={sheetColor.schedule} title="⑤ 人力超出限制" desc="當日人力低於或高於線數限制" /></Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 32 }}>
          <Callout color={painRed}>
            這幾種情況都要能<b>自動被標示出來</b>，而不是等主管自己肉眼抓。
          </Callout>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Shared — check/cross grid cell for employee-shift / data tables ─────────
const CheckMark = ({ on }: { on: boolean }) =>
  on ? (
    <span
      style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: goodGreen,
        color: '#fff',
        fontSize: 17,
        fontWeight: 900,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      ✓
    </span>
  ) : (
    <span style={{ color: '#D8D4C6', fontSize: 20 }}>—</span>
  );

const GridCell = ({ children, band, center }: { children: React.ReactNode; band?: boolean; center?: boolean }) => (
  <div
    style={{
      padding: '10px 14px',
      fontSize: 24,
      borderTop: `1px solid ${cardBorder}`,
      background: band ? '#FBFAF8' : '#fff',
      color: 'var(--osd-text)',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: center ? 'center' : 'flex-start',
    }}
  >
        {children}
  </div>
);

// ─── Page 11 — 四、為什麼是這五張表？ ──────────────────────────────────────────
const FiveSheets: Page = () => (
  <div style={page}>
    <Eyebrow color={design.palette.accent}>四、為什麼是「這五張表」？</Eyebrow>
    <PageHeading maxWidth={1600}>資料庫設計的概念，搬進 Excel</PageHeading>
    <p style={{ fontSize: 27, color: muted, lineHeight: 1.5, margin: '18px 0 0' }}>
      資料型態不同（設定／名單／事件／明細／呈現），拆成五張表才不會改一處就牽動全部
    </p>
    <div style={{ marginTop: 28, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.5fr 2.3fr', background: taskColor }}>
        <div style={{ padding: '12px 16px', fontSize: 25, fontWeight: 800, color: '#fff' }}>工作表</div>
        <div style={{ padding: '12px 16px', fontSize: 25, fontWeight: 800, color: '#fff' }}>角色</div>
        <div style={{ padding: '12px 16px', fontSize: 25, fontWeight: 800, color: '#fff' }}>為什麼要獨立成一張</div>
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.5fr 2.3fr' }}>
            <GridCell><b style={{ color: sheetColor.settings }}>排班設定</b></GridCell>
            <GridCell>下拉選單與班別對照表的事實來源</GridCell>
            <GridCell>班別時間改一處，所有公式自動連動</GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.5fr 2.3fr' }}>
            <GridCell band><b style={{ color: sheetColor.staff }}>員工主檔</b></GridCell>
            <GridCell band>員工基本資料主檔</GridCell>
            <GridCell band>姓名／時段只維護一次，不會重複輸入打錯字</GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.5fr 2.3fr' }}>
            <GridCell><b style={{ color: sheetColor.leave }}>休假申請</b></GridCell>
            <GridCell>休假事件的獨立紀錄</GridCell>
            <GridCell>休假是事件不是排班，排班表才能反查誤排</GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.5fr 2.3fr' }}>
            <GridCell band><b style={{ color: sheetColor.schedule }}>排班表</b></GridCell>
            <GridCell band>資料庫層，一列＝一人一天一班</GridCell>
            <GridCell band>所有計算與防呆條件式格式都在這裡運算</GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.5fr 2.3fr' }}>
            <GridCell><b style={{ color: sheetColor.monthly }}>月班表</b></GridCell>
            <GridCell>給人看的員工×日期矩陣視圖</GridCell>
            <GridCell>不存資料，即時彙總查詢，方便列印</GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 12 — 任務 1（一）：建立員工主檔欄位 ──────────────────────────────────
const Task1EmployeeSetup: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.5 · Prompt 1</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>任務 1：建立「員工主檔」欄位</PageHeading>
    <p style={{ fontSize: 27, color: muted, lineHeight: 1.5, margin: '16px 0 0', maxWidth: 1650 }}>
      先建好欄位結構，做成 Excel 表格 <b style={{ color: sheetColor.staff }}>tbl_員工</b>——員工ID 先排好，其他欄位留空，之後才批次貼資料。
    </p>
    <div style={{ marginTop: 28, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        <SheetHeaderCell label="員工ID" />
        <SheetHeaderCell label="姓名" />
        <SheetHeaderCell label="雇用類型" dropdown />
        <SheetHeaderCell label="早班" dropdown />
        <SheetHeaderCell label="早午班" dropdown />
        <SheetHeaderCell label="午晚班" dropdown />
        <SheetHeaderCell label="晚班" dropdown />

        <SheetCell value="E001" />
        <SheetCell value="" />
        <SheetCell value="" />
        <SheetCell value="" />
        <SheetCell value="" />
        <SheetCell value="" />
        <SheetCell value="" />

        <SheetCell value="⋮" band />
        <SheetCell value="" band />
        <SheetCell value="" band />
        <SheetCell value="" band />
        <SheetCell value="" band />
        <SheetCell value="" band />
        <SheetCell value="" band />

        <SheetCell value="E007" />
        <SheetCell value="" />
        <SheetCell value="" />
        <SheetCell value="" />
        <SheetCell value="" />
        <SheetCell value="" />
        <SheetCell value="" />
      </div>
    </div>
    <div style={{ marginTop: 24 }}>
      <Callout color={sheetColor.staff}>
        雇用類型（正職／兼職）與 4 個班別欄位，都是「可上班嗎？」的下拉選單——選單來源要接到下一頁的「排班設定」。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 13 — 任務 1（二）：排班設定的下拉選單來源 ─────────────────────────────
const Task1SettingsDropdown: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.5 · Prompt 1</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>「排班設定」：下拉選單集中管理</PageHeading>
    <p style={{ fontSize: 27, color: muted, lineHeight: 1.5, margin: '16px 0 0', maxWidth: 1650 }}>
      員工主檔裡「有括號備註」的欄位，都要在排班設定分頁建成下拉清單——欄位標題＋清單項目直排。
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 28 }}>
      <Steps>
        <Step><MiniFeature color={sheetColor.settings} title="資料驗證來源" desc="OFFSET ＋ COUNTA，確保清單不會抓到空白" /></Step>
        <Step><MiniFeature color={sheetColor.settings} title="套用回主檔" desc="下拉選單格式套用到員工主檔對應欄位" /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 28 }}>
      <Callout color={warnAmber}>
        最後四個班別欄位（早班／早午班／午晚班／晚班）<b>共用同一個來源範圍</b>——不用四個各自建一份清單。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 14 — 任務 1（三）：員工主檔 7 筆資料 ──────────────────────────────────
const EmployeeDataTable: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.6</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>7 位員工，各自能上哪些班？</PageHeading>
    <Steps>
      <Step>
        <div style={{ marginTop: 28, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr 1fr 0.9fr 0.9fr 0.9fr 0.9fr' }}>
            <SheetHeaderCell label="員工ID" tiny />
            <SheetHeaderCell label="姓名" tiny />
            <SheetHeaderCell label="雇用類型" tiny />
            <SheetHeaderCell label="早班" tiny />
            <SheetHeaderCell label="早午班" tiny />
            <SheetHeaderCell label="午晚班" tiny />
            <SheetHeaderCell label="晚班" tiny />

            <GridCell>E001</GridCell><GridCell>王建民</GridCell><GridCell>正職</GridCell>
            <GridCell center><CheckMark on /></GridCell><GridCell center><CheckMark on /></GridCell>
            <GridCell center><CheckMark on={false} /></GridCell><GridCell center><CheckMark on={false} /></GridCell>

            <GridCell band>E002</GridCell><GridCell band>張奕</GridCell><GridCell band>正職</GridCell>
            <GridCell band center><CheckMark on /></GridCell><GridCell band center><CheckMark on /></GridCell>
            <GridCell band center><CheckMark on /></GridCell><GridCell band center><CheckMark on={false} /></GridCell>

            <GridCell>E003</GridCell><GridCell>李多慧</GridCell><GridCell>正職</GridCell>
            <GridCell center><CheckMark on /></GridCell><GridCell center><CheckMark on /></GridCell>
            <GridCell center><CheckMark on /></GridCell><GridCell center><CheckMark on={false} /></GridCell>

            <GridCell band>E004</GridCell><GridCell band>林襄</GridCell><GridCell band>兼職</GridCell>
            <GridCell band center><CheckMark on /></GridCell><GridCell band center><CheckMark on /></GridCell>
            <GridCell band center><CheckMark on /></GridCell><GridCell band center><CheckMark on /></GridCell>

            <GridCell>E005</GridCell><GridCell>陳傑憲</GridCell><GridCell>兼職</GridCell>
            <GridCell center><CheckMark on /></GridCell><GridCell center><CheckMark on /></GridCell>
            <GridCell center><CheckMark on={false} /></GridCell><GridCell center><CheckMark on={false} /></GridCell>

            <GridCell band>E006</GridCell><GridCell band>彭政閔</GridCell><GridCell band>兼職</GridCell>
            <GridCell band center><CheckMark on={false} /></GridCell><GridCell band center><CheckMark on={false} /></GridCell>
            <GridCell band center><CheckMark on /></GridCell><GridCell band center><CheckMark on /></GridCell>

            <GridCell>E007</GridCell><GridCell>林家正</GridCell><GridCell>兼職</GridCell>
            <GridCell center><CheckMark on={false} /></GridCell><GridCell center><CheckMark on={false} /></GridCell>
            <GridCell center><CheckMark on /></GridCell><GridCell center><CheckMark on /></GridCell>
          </div>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 15 — 任務 3（一）：休假申請表結構 ────────────────────────────────────
const Task2LeaveSetup: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.7 · Prompt 2</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>任務 3：休假是「事件」，獨立一張表</PageHeading>
    <p style={{ fontSize: 27, color: muted, lineHeight: 1.5, margin: '16px 0 0', maxWidth: 1650 }}>
      新增「休假申請」工作表，做成 Excel 表格 <b style={{ color: sheetColor.leave }}>tbl_休假</b>。
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 28 }}>
      <Steps>
        <Step><MiniFeature color={sheetColor.leave} title="員工ID 下拉" desc="抓「員工主檔」A 欄全部員工ID" /></Step>
        <Step><MiniFeature color={sheetColor.leave} title="假別下拉" desc="特休／事假／病假／例假，清單維護在排班設定" /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 24 }}>
      <Callout color={formulaBlue}>
        <b>員工姓名自動帶出：</b>依員工ID，用{' '}
        <span style={{ color: formulaBlue, fontWeight: 700 }}>XLOOKUP</span> 從 tbl_員工[姓名] 查出對應名稱，不用手動輸入。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 16 — 任務 3（二）：休假申請 5 筆資料 ──────────────────────────────────
const LeaveDataTable: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.7</Eyebrow>
    </div>
    <PageHeading maxWidth={1600}>先填 5 筆休假申請，驗證下拉與公式</PageHeading>
    <div style={{ marginTop: 32, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr 0.9fr 1.1fr 0.9fr' }}>
        <SheetHeaderCell label="員工ID" />
        <SheetHeaderCell label="姓名" />
        <SheetHeaderCell label="雇用類型" />
        <SheetHeaderCell label="休假日期" />
        <SheetHeaderCell label="假別" dropdown />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr 0.9fr 1.1fr 0.9fr' }}>
            <GridCell>E001</GridCell><GridCell>王建民</GridCell><GridCell>正職</GridCell>
            <GridCell>2026/07/08</GridCell><GridCell><b style={{ color: sheetColor.leave }}>排休</b></GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr 0.9fr 1.1fr 0.9fr' }}>
            <GridCell band>E001</GridCell><GridCell band>王建民</GridCell><GridCell band>正職</GridCell>
            <GridCell band>2026/07/20</GridCell><GridCell band><b style={{ color: sheetColor.leave }}>事假</b></GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr 0.9fr 1.1fr 0.9fr' }}>
            <GridCell>E002</GridCell><GridCell>張奕</GridCell><GridCell>正職</GridCell>
            <GridCell>2026/07/22</GridCell><GridCell><b style={{ color: sheetColor.leave }}>病假</b></GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr 0.9fr 1.1fr 0.9fr' }}>
            <GridCell band>E003</GridCell><GridCell band>李多慧</GridCell><GridCell band>正職</GridCell>
            <GridCell band>2026/07/28</GridCell><GridCell band><b style={{ color: sheetColor.leave }}>特休</b></GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr 0.9fr 1.1fr 0.9fr' }}>
            <GridCell>E004</GridCell><GridCell>林襄</GridCell><GridCell>兼職</GridCell>
            <GridCell>2026/07/09</GridCell><GridCell><b style={{ color: sheetColor.leave }}>排休</b></GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 17 — 任務 5（一）：排班表欄位與下拉設定 ───────────────────────────────
const Task3ScheduleSetup: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.8-9 · Prompt 3</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 5：排班表——承先啟後的核心</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 1660 }}>
      不只記日期和誰上班，還要看得出幾號、平日還假日、上下班幾點、休息幾小時——之後排考勤、算薪資都要靠這張表。
    </p>
    <div style={{ marginTop: 24, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <SheetHeaderCell label="排班日期" tiny />
        <SheetHeaderCell label="員工ID" dropdown tiny />
        <SheetHeaderCell label="員工姓名" tiny />
        <SheetHeaderCell label="班別" dropdown tiny />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <GridCell>2026/07/01</GridCell><GridCell>E001</GridCell><GridCell>王建民</GridCell><GridCell>早班</GridCell>
          </div>
        </Step>
      </Steps>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <SheetHeaderCell label="上班時間" tiny />
        <SheetHeaderCell label="下班時間" tiny />
        <SheetHeaderCell label="休息時數" tiny />
        <SheetHeaderCell label="實際工時" tiny />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <SheetCell tiny value="10:00" formula /><SheetCell tiny value="20:00" formula />
            <SheetCell tiny value="2.0" formula /><SheetCell tiny value="8.0" formula />
          </div>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 20 }}>
      <Callout color={sheetColor.schedule}>
        表格名稱 <b>tbl_排班</b>——員工ID 沿用「休假申請」的下拉選單來源；班別下拉維護在「排班設定」。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 18 — 任務 5（二）：班別對照表 tbl_班別 ───────────────────────────────
const Task3ShiftRef: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.8-9 · Prompt 3</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>班別對照表，四個欄位一次自動帶出</PageHeading>
    <div style={{ marginTop: 28, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1fr' }}>
        <SheetHeaderCell label="班別" />
        <SheetHeaderCell label="上班時間" />
        <SheetHeaderCell label="下班時間" />
        <SheetHeaderCell label="休息時數" />
        <SheetHeaderCell label="實際工時" />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1fr' }}>
            <GridCell>早班</GridCell><GridCell>10:00</GridCell><GridCell>20:00</GridCell><GridCell>2.0</GridCell><GridCell>8.0</GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1fr' }}>
            <GridCell band>早午班</GridCell><GridCell band>11:00</GridCell><GridCell band>20:00</GridCell><GridCell band>1.0</GridCell><GridCell band>8.0</GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1fr' }}>
            <GridCell>午晚班</GridCell><GridCell>12:00</GridCell><GridCell>22:00</GridCell><GridCell>2.0</GridCell><GridCell>8.0</GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1fr' }}>
            <GridCell band>晚班</GridCell><GridCell band>18:00</GridCell><GridCell band>22:00</GridCell><GridCell band>0</GridCell><GridCell band>4.0</GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 24 }}>
      <Callout color={formulaBlue}>
        排班表的上班／下班／休息／實際工時，都用{' '}
        <span style={{ color: formulaBlue, fontWeight: 700 }}>XLOOKUP</span> 依「班別」從 tbl_班別 查出對應數值——不用手動輸入。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 18a — 任務 6：試著排出 7/1 的班 ──────────────────────────────────────
const Task6TryManual: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.9</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 6：先手動試排 7/1 的班</PageHeading>
    <p style={{ fontSize: 27, color: muted, lineHeight: 1.5, margin: '16px 0 0', maxWidth: 1650 }}>
      表格結構都好了，先自己動手排一天，感受一下排班要顧到哪些限制。
    </p>
    <div style={{ marginTop: 28 }}>
      <Callout color={warnAmber}>
        排班線數提醒：平日白天 <b>3 線</b>（固定 1 早班）、晚上 <b>4 線</b>（至少 1 晚班閉店）；假日白天 <b>4 線</b>（固定 1 早班）、晚上 <b>5 線</b>（至少 1 晚班閉店）。
      </Callout>
    </div>
    <div style={{ marginTop: 24 }}>
      <Steps>
        <Step>
          <div style={{ fontSize: 28, lineHeight: 1.6, maxWidth: 1650 }}>
            排完會發現：<b style={{ color: painRed }}>只看日期，很難判斷今天是平日還假日、要排幾個人</b>——這就是下一個任務要解決的問題。
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 19 — 任務 7：新增星期欄 ───────────────────────────────────────────────
const Task7Weekday: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.9 · Prompt 4</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 7：只看日期，很難判斷要排幾個人</PageHeading>
    <p style={{ fontSize: 27, color: muted, lineHeight: 1.5, margin: '16px 0 0', maxWidth: 1650 }}>
      在「排班日期」右邊新增一欄「星期」，用公式帶出（例：星期一、星期二）。
    </p>
    <div style={{ marginTop: 28, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)', maxWidth: 900 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <SheetHeaderCell label="排班日期" />
        <SheetHeaderCell label="星期" />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <GridCell>2026/07/01</GridCell><GridCell><b style={{ color: formulaBlue }}>星期三</b></GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 20 — 任務 8：每筆排班防呆檢查 ─────────────────────────────────────────
const Task5CheckFormula: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.10 · Prompt 5</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 8：一條公式，同時檢查三種問題</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 1660 }}>
      新增「防呆檢查」欄，有問題就用分號串接顯示，都沒問題就空白——用結構化參照，套用到整欄。
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 24 }}>
      <Steps>
        <Step><MiniFeature color={painRed} title="重複排班" desc="同一員工同一天被排了不只一筆" /></Step>
        <Step><MiniFeature color={violatePurple} title="休假衝突" desc="那天已在休假申請表請假，卻還被排班" /></Step>
        <Step><MiniFeature color={warnAmber} title="時段不符" desc="員工主檔對應班別欄沒有標記「✓」" /></Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 24, borderRadius: 14, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr 1fr 1.1fr 1.8fr' }}>
            <SheetHeaderCell label="排班日期" tiny />
            <SheetHeaderCell label="員工ID" tiny />
            <SheetHeaderCell label="員工姓名" tiny />
            <SheetHeaderCell label="班別" tiny />
            <SheetHeaderCell label="防呆檢查" tiny />

            <GridCell>2026/07/01</GridCell><GridCell>E001</GridCell><GridCell>王建民</GridCell><GridCell>早班</GridCell>
            <GridCell>（空白）</GridCell>

            <GridCell band>2026/07/02</GridCell><GridCell band>E002</GridCell><GridCell band>張奕</GridCell><GridCell band>午晚班</GridCell>
            <GridCell band><b style={{ color: painRed }}>重複排班</b></GridCell>

            <GridCell>2026/07/03</GridCell><GridCell>E003</GridCell><GridCell>李多慧</GridCell><GridCell>早午班</GridCell>
            <GridCell><b style={{ color: violatePurple }}>休假衝突</b></GridCell>

            <GridCell band>2026/07/04</GridCell><GridCell band>E006</GridCell><GridCell band>彭政閔</GridCell><GridCell band>早班</GridCell>
            <GridCell band><b style={{ color: warnAmber }}>時段不符</b></GridCell>

            <GridCell>2026/07/05</GridCell><GridCell>E002</GridCell><GridCell>張奕</GridCell><GridCell>早班</GridCell>
            <GridCell>
              <b style={{ color: painRed }}>重複排班</b>；<b style={{ color: warnAmber }}>時段不符</b>
            </GridCell>
          </div>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 21 — 任務 9（一）：排班規則 1～4 ──────────────────────────────────────
const Task6RulesPart1: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.10 · Prompt 6</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 9：把排班規則整理成 Prompt（1／2）</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0' }}>資格與防重複——先確保排的班本身合法</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
      <Steps>
        <Step><RuleChip text="① 員工主檔對應班別欄有標記「✓」才能排" /></Step>
        <Step><RuleChip text="② 跳過該員工在休假申請表裡已請假的日期" /></Step>
        <Step><RuleChip text="③ 同一人同一天最多排 1 個班別" /></Step>
        <Step><RuleChip text="④ 每天早班（10:00 開店）固定 1 人，晚班（22:00 閉店）至少 1 人" /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 22 — 任務 9（二）：排班規則 5～8 ──────────────────────────────────────
const Task6RulesPart2: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.10 · Prompt 6</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 9：把排班規則整理成 Prompt（2／2）</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0' }}>人力與休假天數——精準到人</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
      <Steps>
        <Step>
          <RuleChip
            text="⑤ 尖峰在崗人數要「剛剛好」：白天(12:00)平日 3／假日 4 人；晚上(20:00)平日 4／假日 5 人"
            color={warnAmber}
          />
        </Step>
        <Step><RuleChip text="⑥ 任何人不得連續工作超過 6 天（七休一）" color={warnAmber} /></Step>
        <Step><RuleChip text="⑦ 正職員工每月例假必須剛好休 10 天（不多不少）" color={sheetColor.staff} /></Step>
        <Step><RuleChip text="⑧ 兼職員工休假天數不設限，但一樣要遵守連續 6 天上限" color={sheetColor.staff} /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 23 — 任務 10：把規則包裝成 /auto-schedule ────────────────────────────
const Task7SkillResult: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.11 · Prompt 7</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 10：打一個指令，套用整套排班規則</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
      <Steps>
        <Step>
          <TxCard color={painRed} title="沒有技能">
            <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
              每次都要重講一次 8 條規則——容易漏講、講法不一致
            </div>
          </TxCard>
        </Step>
        <Step>
          <TxCard color={goodGreen} title="/auto-schedule">
            <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
              打一個指令，就照同一套規則把「排班表」排好——規則只需要確認一次
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 32 }}>
          <Callout color={design.palette.accent}>
            把 8 條規則整理好的 Prompt，交給 AI 建立成 <b>/auto-schedule</b> 技能——之後每次呼叫，就重新照規則排一次整月的班。
          </Callout>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 24 — 任務 11：每日人力防呆檢核 ────────────────────────────────────────
const Task8DailyCheck: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.11 · Prompt 8</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 11：沒有 AI 額度時，也要能人工核對</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 1660 }}>
      排班表右側新增「每日人力防呆檢核」區塊，把每個不重複的日期各列一行。
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 24 }}>
      <Steps>
        <Step><MiniFeature color={sheetColor.schedule} title="白天／晚上人數" desc="依上班時間分類加總當天人數" /></Step>
        <Step><MiniFeature color={sheetColor.staff} title="22:00 閉店人數" desc="當天下班時間剛好 22:00 的人數" /></Step>
        <Step><MiniFeature color={warnAmber} title="人數上限" desc="平日 3／4 人、假日 4／5 人" /></Step>
        <Step><MiniFeature color={painRed} title="提醒欄" desc="人數不符、沒人開店／閉店，就跳警示文字" /></Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 20, borderRadius: 14, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 0.7fr 0.6fr 0.9fr 0.9fr 1fr 1.6fr' }}>
            <SheetHeaderCell label="日期" tiny />
            <SheetHeaderCell label="星期" tiny />
            <SheetHeaderCell label="假日" tiny />
            <SheetHeaderCell label="白天人數" tiny />
            <SheetHeaderCell label="晚上人數" tiny />
            <SheetHeaderCell label="22:00閉店" tiny />
            <SheetHeaderCell label="提醒" tiny />

            <GridCell>7/1</GridCell><GridCell>三</GridCell><GridCell>N</GridCell>
            <GridCell center>3</GridCell><GridCell center>4</GridCell><GridCell center>1</GridCell>
            <GridCell>（空白）</GridCell>

            <GridCell band>7/4</GridCell><GridCell band>六</GridCell><GridCell band>Y</GridCell>
            <GridCell band center>4</GridCell><GridCell band center>5</GridCell><GridCell band center>1</GridCell>
            <GridCell band>（空白）</GridCell>

            <GridCell>7/9</GridCell><GridCell>四</GridCell><GridCell>N</GridCell>
            <GridCell center><b style={{ color: painRed }}>2</b></GridCell><GridCell center>4</GridCell><GridCell center>1</GridCell>
            <GridCell><b style={{ color: painRed }}>⚠ 白天人數不足</b></GridCell>

            <GridCell band>7/12</GridCell><GridCell band>日</GridCell><GridCell band>Y</GridCell>
            <GridCell band center>4</GridCell><GridCell band center>5</GridCell><GridCell band center><b style={{ color: painRed }}>0</b></GridCell>
            <GridCell band><b style={{ color: painRed }}>⚠ 沒有人 22:00 閉店</b></GridCell>
          </div>
        </div>
      </Step>
    </Steps>
    <div style={{ marginTop: 20 }}>
      <Callout color={sheetColor.schedule}>
        日期清單從排班表動態抓整月不重複日期——不要手動輸入日期。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 25 — 任務 12（一）：為什麼要月班表 ────────────────────────────────────
const Task9MonthlyWhy: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.12 · Prompt 9</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 12：排班表結構完成 8 成，最後一哩路</PageHeading>
    <div style={{ marginTop: 32 }}>
      <Steps>
        <Step>
          <div style={{ fontSize: 29, lineHeight: 1.65, maxWidth: 1650 }}>
            主管每天上班前，要找半天「今天誰上幾點班」；員工也要從排班表一筆一筆找「我哪天上什麼班」。
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 24 }}>
            <Callout color={sheetColor.monthly}>
              所以要做一張<b>「給人看的月班表」</b>——橫列是日期、直欄是姓名，長得像日曆，主管跟員工一眼看懂。
            </Callout>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 24, fontSize: 27, fontWeight: 700, color: muted }}>基本結構</div>
        </Step>
      </Steps>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 12 }}>
      <Steps>
        <Step><RuleChip text="A1 標題「OO店 O月班表（月視圖）」" color={sheetColor.monthly} /></Step>
        <Step><RuleChip text="第2列：員工ID／姓名／僱用類型／應休天數＋橫向日期" color={sheetColor.monthly} /></Step>
        <Step><RuleChip text="第3列：星期縮寫，週六黃底、週日粉底" color={sheetColor.monthly} /></Step>
        <Step><RuleChip text="第4~11列：7 位員工 ＋ 1 列空白緩衝（未來新增員工用）" color={sheetColor.monthly} /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Shared — month-view calendar mockup cells (Task 12 example) ─────────────
const monthBlue = '#4E7AC7';
const monthNameBg = '#DCE6F7';
const monthOffBg = '#E3E3DD';
const monthOffText = '#8C8C84';

const MonthHeaderCell = ({
  children,
  weekend,
  span,
}: {
  children?: React.ReactNode;
  weekend?: 'sat' | 'sun';
  span?: number;
}) => (
  <div
    style={{
      gridColumn: span ? `span ${span}` : undefined,
      background: weekend === 'sat' ? '#F4C542' : weekend === 'sun' ? '#F5B3C4' : monthBlue,
      color: weekend ? '#3A2E12' : '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 800,
      padding: '8px 6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>
);

const MonthNameCell = ({ children, bold }: { children: React.ReactNode; bold?: boolean }) => (
  <div
    style={{
      padding: '8px 10px',
      fontSize: 20,
      fontWeight: bold ? 800 : 600,
      borderTop: '1px solid #C7D4EC',
      background: monthNameBg,
    }}
  >
    {children}
  </div>
);

const MonthShiftCell = ({ value, kind }: { value: string; kind: 'shift' | 'off' }) => (
  <div
    style={{
      padding: '8px 4px',
      fontSize: 16,
      textAlign: 'center',
      borderTop: `1px solid ${cardBorder}`,
      background: kind === 'off' ? monthOffBg : '#fff',
      color: kind === 'off' ? monthOffText : 'var(--osd-text)',
      fontWeight: kind === 'off' ? 700 : 600,
    }}
  >
    {value}
  </div>
);

const MonthSummaryValue = ({ value }: { value: string }) => (
  <div
    style={{
      padding: '8px 4px',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 800,
      background: monthBlue,
      color: '#fff',
      borderTop: '1px solid #3A5FA0',
    }}
  >
    {value}
  </div>
);

// ─── Page 25a — 任務 12：月班表範例 ────────────────────────────────────────────
const MONTH_COLS = '0.55fr 0.85fr 0.75fr 0.75fr repeat(8, 0.62fr)';
const monthDayNums = ['1', '2', '3', '4', '5', '6', '7', '8'];
const monthDows = ['三', '四', '五', '六', '日', '一', '二', '三'];
const monthWeekend: (undefined | 'sat' | 'sun')[] = [undefined, undefined, undefined, 'sat', 'sun', undefined, undefined, undefined];
const monthEmployees = [
  { id: 'E001', name: '王建民', type: '正職', off: '10', days: ['11:00-20:00', '11:00-20:00', '休', '11:00-20:00', '11:00-20:00', '10:00-20:00', '11:00-20:00', '休'] },
  { id: 'E002', name: '張奕', type: '正職', off: '10', days: ['休', '11:00-20:00', '10:00-20:00', '10:00-20:00', '10:00-20:00', '休', '10:00-20:00', '10:00-20:00'] },
  { id: 'E003', name: '李多慧', type: '正職', off: '10', days: ['10:00-20:00', '10:00-20:00', '11:00-20:00', '休', '11:00-20:00', '11:00-20:00', '11:00-20:00', '休'] },
  { id: 'E004', name: '林襄', type: '兼職', off: '10', days: ['18:00-22:00', '休', '休', '11:00-20:00', '11:00-20:00', '休', '18:00-22:00', '11:00-20:00'] },
  { id: 'E005', name: '陳傑憲', type: '兼職', off: '16', days: ['休', '休', '休', '休', '休', '休', '休', '11:00-20:00'] },
  { id: 'E006', name: '彭政閔', type: '兼職', off: '13', days: ['休', '18:00-22:00', '12:00-22:00', '12:00-22:00', '休', '12:00-22:00', '休', '休'] },
  { id: 'E007', name: '林家正', type: '兼職', off: '13', days: ['12:00-22:00', '休', '18:00-22:00', '18:00-22:00', '18:00-22:00', '18:00-22:00', '休', '18:00-22:00'] },
];
const monthDayCount = ['3', '3', '3', '4', '4', '3', '3', '3'];
const monthNightCount = ['4', '4', '4', '5', '5', '4', '4', '4'];

const Task9MonthlyExample: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.12 · Prompt 9</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>月班表長這樣——一眼看懂全月人力</PageHeading>
    <Steps>
      <Step>
        <div style={{ marginTop: 24, borderRadius: 12, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: MONTH_COLS }}>
            <MonthHeaderCell span={4}>鍋貼店 7月班表（月視圖）</MonthHeaderCell>
            {monthDayNums.map((d, i) => (
              <MonthHeaderCell key={`num-${i}`} weekend={monthWeekend[i]}>{d}</MonthHeaderCell>
            ))}

            <MonthHeaderCell>員工ID</MonthHeaderCell>
            <MonthHeaderCell>員工/日期</MonthHeaderCell>
            <MonthHeaderCell>雇用類型</MonthHeaderCell>
            <MonthHeaderCell>排休天數</MonthHeaderCell>
            {monthDows.map((d, i) => (
              <MonthHeaderCell key={`dow-${i}`} weekend={monthWeekend[i]}>{d}</MonthHeaderCell>
            ))}

            {monthEmployees.flatMap((emp, ri) => [
              <MonthNameCell key={`id-${ri}`} bold>{emp.id}</MonthNameCell>,
              <MonthNameCell key={`name-${ri}`} bold>{emp.name}</MonthNameCell>,
              <MonthNameCell key={`type-${ri}`}>{emp.type}</MonthNameCell>,
              <MonthNameCell key={`off-${ri}`}>{emp.off}</MonthNameCell>,
              ...emp.days.map((d, di) => (
                <MonthShiftCell key={`d-${ri}-${di}`} value={d} kind={d === '休' ? 'off' : 'shift'} />
              )),
            ])}

            <MonthNameCell bold> </MonthNameCell>
            <MonthNameCell> </MonthNameCell>
            <MonthNameCell> </MonthNameCell>
            <MonthNameCell>0</MonthNameCell>
            {monthDayNums.map((_, i) => (
              <MonthShiftCell key={`buf-${i}`} value="" kind="off" />
            ))}

            <MonthHeaderCell span={4}>白天人數</MonthHeaderCell>
            {monthDayCount.map((v, i) => (
              <MonthSummaryValue key={`day-${i}`} value={v} />
            ))}
            <MonthHeaderCell span={4}>晚上人數</MonthHeaderCell>
            {monthNightCount.map((v, i) => (
              <MonthSummaryValue key={`night-${i}`} value={v} />
            ))}
          </div>
        </div>
      </Step>
    </Steps>
    <div style={{ marginTop: 16 }}>
      <Callout color={sheetColor.monthly}>
        <b>休</b>＝公休／法定例假；沒排班也沒請假時同樣顯示「休」。逗號分隔＝同日重複排班。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 26 — 任務 12（二）：判斷邏輯與統計列 ──────────────────────────────────
const Task9MonthlyLogic: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
    <PageHeading maxWidth={1650}>每一格，依序判斷四種狀態</PageHeading>
    <div style={{ marginTop: 28 }}>
      <Steps>
        <Step><RuleChip text="① 該列是空白緩衝列，或日期超出當月 → 空白" color={muted} /></Step>
        <Step><RuleChip text="② 查 tbl_排班當天有沒有班 → 有則列出時段（同日兩班用逗號分隔）" color={sheetColor.schedule} /></Step>
        <Step>
          <RuleChip text="③ 沒班，查 tbl_休假當天是否「非例假」→ 顯示「假」（不揭露特休／事假／病假明細，保護隱私）" color={violatePurple} />
        </Step>
        <Step><RuleChip text="④ 以上皆非 → 顯示「休」（公休／法定例假）" color={warnAmber} /></Step>
      </Steps>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 28 }}>
      <Steps>
        <Step><MiniFeature color={sheetColor.schedule} title="白天人數（第12列）" desc="SUMPRODUCT：班別開始時間在 12:00（含）以前" /></Step>
        <Step><MiniFeature color={sheetColor.schedule} title="晚上人數（第13列）" desc="SUMPRODUCT：班別結束時間在 18:00（含）以後" /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 24 }}>
      <Callout color={sheetColor.monthly}>
        A／B 欄的員工ID、姓名，用 <b>單一溢出陣列</b>（=tbl_員工[員工ID]）只需輸入一次；第15~20列附上圖例，說明休／假／重複班與彙總標色規則。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 27 — 任務 13（一）：突發請假，怎麼找人代班？ ────────────────────────
const Task13ProxyScenarios: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.14</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 13：突發請假，誰能來代班？</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 36 }}>
      <Steps>
        <Step>
          <TxCard color={sheetColor.leave} title="情境 Q1：明天要請整天假">
            <div style={{ fontSize: 26, color: muted, lineHeight: 1.5 }}>找另一位員工代班，條件：</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
              <RuleChip text="當天排休（沒提出休假申請）" color={sheetColor.leave} />
              <RuleChip text="可以配合該班別" color={sheetColor.leave} />
              <RuleChip text="多排這天不會超過連上 6 天" color={sheetColor.leave} />
            </div>
          </TxCard>
        </Step>
        <Step>
          <TxCard color={formulaBlue} title="情境 Q2：只請最後 2 小時（18:00–20:00）">
            <div style={{ fontSize: 26, color: muted, lineHeight: 1.5 }}>安排兼職短時支援，條件：</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
              <RuleChip text="僱用類型為兼職" color={formulaBlue} />
              <RuleChip text="當天排休，且時段涵蓋 18:00–20:00" color={formulaBlue} />
              <RuleChip text="多排這天不會超過連上 6 天" color={formulaBlue} />
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 28 }}>
          <Callout color={sheetColor.leave}>
            與其一個個慢慢找符合條件的員工，更有效率的做法是——讓工作表自己按邏輯判斷。
          </Callout>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 28 — 任務 13（二）：休假申請表新增三欄 ───────────────────────────────
const Task13LeaveFields: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.13</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>先把「請多久的假」記清楚</PageHeading>
    <p style={{ fontSize: 27, color: muted, lineHeight: 1.5, margin: '16px 0 0', maxWidth: 1650 }}>
      在休假申請表新增三欄：<b style={{ color: sheetColor.leave }}>開始時間</b>、
      <b style={{ color: sheetColor.leave }}>結束時間</b>、<b style={{ color: sheetColor.leave }}>請假時數</b>。
    </p>
    <div style={{ marginTop: 32, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        <SheetHeaderCell label="員工ID" tiny />
        <SheetHeaderCell label="姓名" tiny />
        <SheetHeaderCell label="休假日期" tiny />
        <SheetHeaderCell label="開始時間" tiny />
        <SheetHeaderCell label="結束時間" tiny />
        <SheetHeaderCell label="請假時數" tiny />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
            <GridCell>E002</GridCell><GridCell>張奕</GridCell><GridCell>2026/07/15</GridCell>
            <GridCell>18:00</GridCell><GridCell>20:00</GridCell><GridCell><b style={{ color: formulaBlue }}>2</b></GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 29 — 任務 14（一）：候補建議工作表結構 ───────────────────────────────
const Task14CandidateSetup: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.14 · Prompt 10</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務 14：休假衝突自動偵測與候補建議</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 1660 }}>
      新增「候補建議」工作表，根據排班表、休假申請、員工主檔、排班設定，自動列出衝突與候補人選。
    </p>
    <div style={{ marginTop: 28, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <SheetHeaderCell label="衝突日期" tiny />
        <SheetHeaderCell label="員工ID" tiny />
        <SheetHeaderCell label="請假者" tiny />
        <SheetHeaderCell label="原班別" tiny />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <GridCell>2026/07/15</GridCell><GridCell>E002</GridCell><GridCell>張奕</GridCell><GridCell>午晚班</GridCell>
          </div>
        </Step>
      </Steps>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <SheetHeaderCell label="請假開始" tiny />
        <SheetHeaderCell label="請假結束" tiny />
        <SheetHeaderCell label="請假時數" tiny />
        <SheetHeaderCell label="候補建議名單" tiny />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <GridCell>18:00</GridCell><GridCell>20:00</GridCell><GridCell>2</GridCell>
            <GridCell><b style={{ color: goodGreen }}>林襄、陳傑憲</b></GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 30 — 任務 14（二）：候補人員的 5 個條件 ──────────────────────────────
const Task14CandidateRules: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.15 · Prompt 10</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>候補人員，要同時符合 5 個條件</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
      <Steps>
        <Step><RuleChip text="① 當天沒有排班或請假" /></Step>
        <Step><RuleChip text="② 可上班時段完整涵蓋實際請假區間" /></Step>
        <Step><RuleChip text="③ 補班後不可連續工作超過 6 天——須同時檢查前後班表" /></Step>
        <Step><RuleChip text="④ 部分時數請假只推薦兼職；整班請假可推薦正職或兼職" /></Step>
        <Step><RuleChip text="⑤ 多人符合以逗號列出；無人符合則顯示警告" color={warnAmber} /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 28 }}>
      <Callout color={sheetColor.leave}>
        用 Excel 動態陣列公式完成，不修改原始資料——最後要驗證公式沒有 #REF!、#VALUE! 等錯誤。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 33 — 一、薪水內涵哪些項目？（三層邏輯） ──────────────────────────────
const Part2Logic: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>一、薪水不是一個數字，是三層邏輯疊出來的</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
      <Steps>
        <Step><RuleChip text="第一層：本來就該給（本薪／底薪） vs. 額外多給（津貼／獎金）" color={formulaBlue} /></Step>
        <Step><RuleChip text="第二層：固定不變（本薪、久任津貼） vs. 浮動計算（加班費、全勤、業績獎金）" color={formulaBlue} /></Step>
        <Step><RuleChip text="第三層：應發項目（本薪＋津貼＋獎金） － 應扣項目（勞健保、請假扣款）＝ 實發薪資" color={formulaBlue} /></Step>
      </Steps>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 20 }}>
      <Steps>
        <Step><MiniFeature color={formulaBlue} title="本薪＝那杯茶本身" desc="一定會有" /></Step>
        <Step><MiniFeature color={goodGreen} title="加班費、獎金＝加的珍珠椰果" desc="做得多，加得多" /></Step>
        <Step><MiniFeature color={painRed} title="勞健保、請假扣款＝刮掉的浮沫" desc="最後端到手上的才是實發薪資" /></Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 18 }}>
          <Callout color={formulaBlue}>
            <b>比喻：</b>薪水就像一杯全糖珍珠奶茶——本薪是茶本身，加班費、獎金是加的珍珠椰果，勞健保、請假扣款是刮掉的浮沫。<b>範例：</b>兼職林襄時薪 200 元，7 月實際工時 80 小時 → 本薪 <b>200 × 80 ＝ 16,000 元</b>。
          </Callout>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 35 — 我們的情境：加項與扣項 ──────────────────────────────────────────
const Part2OurCase: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>我們的情境：有哪些加項、扣項？</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
      <TxCard color={goodGreen} title="＋ 加項">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Steps>
            <Step><RuleChip text="固定：本薪（正職月薪／兼職時薪）" color={goodGreen} /></Step>
            <Step><RuleChip text="浮動：加班費" color={goodGreen} /></Step>
            <Step><RuleChip text="浮動：全勤獎金（特休不影響／病假比例扣／事假不發）" color={goodGreen} /></Step>
            <Step><RuleChip text="浮動：業績獎金（業績達 $25,000，當日上班每人 $500）" color={goodGreen} /></Step>
          </Steps>
        </div>
      </TxCard>
      <TxCard color={painRed} title="－ 扣項">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Steps>
            <Step><RuleChip text="健保費" color={painRed} /></Step>
            <Step><RuleChip text="勞保費" color={painRed} /></Step>
            <Step><RuleChip text="請假扣款（排休／特休不扣，病假扣50%，事假扣100%，無條件捨去）" color={painRed} /></Step>
          </Steps>
        </div>
      </TxCard>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 35b — 薪資計算原則：只多發，不多扣 ───────────────────────────────────
const SalaryPrincipleMorePayLessDeduct: Page = () => (
  <div style={{ ...page, padding: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
    <div style={{ alignSelf: 'flex-start' }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    </div>
    <div style={{ alignSelf: 'flex-start' }}>
      <PageHeading maxWidth={1650}>最後一個扣項：請假扣薪</PageHeading>
    </div>
    <Steps>
      <Step>
        <div style={{ width: '100%', height: 770, marginTop: 20, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={salaryPrincipleMorePayLessDeduct}
            alt="薪資計算原則：加班費納入本薪、全勤獎金與業績獎金；請假扣款只用本薪計算"
            style={{ ...imageOnSlideBackground, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%', objectViewBox: 'inset(0.48% 0.33% 0.33% 0.48%)' }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

const SalaryPrincipleMorePayLessDeduct2: Page = () => (
  <div style={{ ...page, padding: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
    <div style={{ alignSelf: 'flex-start' }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    </div>
    <div style={{ alignSelf: 'flex-start' }}>
      <PageHeading maxWidth={1650}>最後一個扣項：請假扣薪</PageHeading>
    </div>
    <Steps>
      <Step>
        <div style={{ width: '100%', height: 770, marginTop: 20, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={salaryPrincipleMorePayLessDeduct}
            alt="薪資計算原則：加班費納入本薪、全勤獎金與業績獎金；請假扣款只用本薪計算"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 36 — 員工薪資設定 ─────────────────────────────────────────────────────
const SalarySetup: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.21</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>員工薪資設定：先把月薪／時薪記到主檔</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 1660 }}>
      在員工主檔 D 欄插入「月薪(正職)」、E 欄插入「時薪(兼職)」，貼上 7 位員工對應薪資。
    </p>
    <div style={{ marginTop: 24, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <SheetHeaderCell label="員工ID" tiny />
        <SheetHeaderCell label="姓名" tiny />
        <SheetHeaderCell label="月薪(正職)" tiny />
        <SheetHeaderCell label="時薪(兼職)" tiny />
      </div>
      <Steps>
        <Step>
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E001</GridCell><GridCell>王建民</GridCell><GridCell>36,000</GridCell><GridCell>—</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell band>E002</GridCell><GridCell band>張奕</GridCell><GridCell band>36,000</GridCell><GridCell band>—</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E003</GridCell><GridCell>李多慧</GridCell><GridCell>36,000</GridCell><GridCell>—</GridCell>
            </div>
          </>
        </Step>
        <Step>
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell band>E004</GridCell><GridCell band>林襄</GridCell><GridCell band>—</GridCell><GridCell band>200</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E005</GridCell><GridCell>陳傑憲</GridCell><GridCell>—</GridCell><GridCell>200</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell band>E006</GridCell><GridCell band>彭政閔</GridCell><GridCell band>—</GridCell><GridCell band>200</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E007</GridCell><GridCell>林家正</GridCell><GridCell>—</GridCell><GridCell>200</GridCell>
            </div>
          </>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 37 — 工時彙總表 ───────────────────────────────────────────────────────
const HoursSummary: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.17-18 · Prompt 14</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>工時彙總，彙總成「一人一整月」的總時數</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 20 }}>
      <Steps>
        <Step><MiniFeature color={formulaBlue} title="兼職：工時直接算錢" desc="工時 × 時薪 ＝ 薪資" /></Step>
        <Step><MiniFeature color={sheetColor.staff} title="正職：核對出勤" desc="工時彙總用來核對缺勤異常、是否超時需另計加班費" /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 20, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <SheetHeaderCell label="員工ID" tiny />
        <SheetHeaderCell label="員工姓名" tiny />
        <SheetHeaderCell label="僱用類型" tiny />
        <SheetHeaderCell label="正常工時合計" tiny />
      </div>
      <Steps>
        <Step>
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E001</GridCell><GridCell>王建民</GridCell><GridCell>正職</GridCell><GridCell>160.0</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell band>E002</GridCell><GridCell band>張奕</GridCell><GridCell band>正職</GridCell><GridCell band>160.0</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E003</GridCell><GridCell>李多慧</GridCell><GridCell>正職</GridCell><GridCell>160.0</GridCell>
            </div>
          </>
        </Step>
        <Step>
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell band>E004</GridCell><GridCell band>林襄</GridCell><GridCell band>兼職</GridCell><GridCell band>124.0</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E005</GridCell><GridCell>陳傑憲</GridCell><GridCell>兼職</GridCell><GridCell>120.0</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell band>E006</GridCell><GridCell band>彭政閔</GridCell><GridCell band>兼職</GridCell><GridCell band>112.0</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E007</GridCell><GridCell>林家正</GridCell><GridCell>兼職</GridCell><GridCell>96.0</GridCell>
            </div>
          </>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 14 }}>
      <Callout color={formulaBlue}>
        A4 建立<b>單一動態陣列公式</b>，欄位自動溢出（員工ID／姓名／僱用類型／正常工時）——新增或刪除員工，彙總表自動更新，最後一列合計。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 38 — 薪資明細表 ───────────────────────────────────────────────────────
const SalaryDetail: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.22 · Prompt 16</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>薪資明細：先算出員工每個月的底薪</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 20 }}>
      <Steps>
        <Step>
          <TxCard color={sheetColor.staff} title="正職">
            <div style={{ fontSize: 27, color: muted, lineHeight: 1.5 }}>底薪 ＝ tbl_員工[月薪(正職)]</div>
          </TxCard>
        </Step>
        <Step>
          <TxCard color={formulaBlue} title="兼職">
            <div style={{ fontSize: 27, color: muted, lineHeight: 1.5 }}>
              底薪 ＝ 正常工時 × 「時薪(兼職)」<b>（無條件進位）</b>
              <div style={{ fontSize: 21, marginTop: 6 }}>正常工時＝每天工時先算完，再加總整個月</div>
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 20, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <SheetHeaderCell label="員工ID" tiny />
        <SheetHeaderCell label="員工姓名" tiny />
        <SheetHeaderCell label="僱用類型" tiny />
        <SheetHeaderCell label="底薪" tiny />
      </div>
      <Steps>
        <Step>
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E001</GridCell><GridCell>王建民</GridCell><GridCell>正職</GridCell><GridCell>$36,000</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell band>E002</GridCell><GridCell band>張奕</GridCell><GridCell band>正職</GridCell><GridCell band>$36,000</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E003</GridCell><GridCell>李多慧</GridCell><GridCell>正職</GridCell><GridCell>$36,000</GridCell>
            </div>
          </>
        </Step>
        <Step>
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell band>E004</GridCell><GridCell band>林襄</GridCell><GridCell band>兼職</GridCell><GridCell band>$24,800</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E005</GridCell><GridCell>陳傑憲</GridCell><GridCell>兼職</GridCell><GridCell>$24,000</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell band>E006</GridCell><GridCell band>彭政閔</GridCell><GridCell band>兼職</GridCell><GridCell band>$22,400</GridCell>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <GridCell>E007</GridCell><GridCell>林家正</GridCell><GridCell>兼職</GridCell><GridCell>$19,200</GridCell>
            </div>
          </>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 39 — 加班明細表 ───────────────────────────────────────────────────────
const OvertimeDetail: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.14-15 · Prompt 11</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>超出正常工時的部分，另外算加班</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 1660 }}>
      新增「加班明細」工作表（<b style={{ color: formulaBlue }}>tbl_加班</b>），手動登記加班／休息日出勤，避免與一般排班工時重複計算。
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 24 }}>
      <Steps>
        <Step><MiniFeature color={formulaBlue} title="欄位" desc="日期／員工ID／姓名／加班類型／起訖時間／時數" /></Step>
        <Step><MiniFeature color={sheetColor.staff} title="員工ID 下拉" desc="來源為 tbl_員工，姓名自動帶出" /></Step>
        <Step><MiniFeature color={warnAmber} title="加班類型自動辨識" desc="當天 tbl_排班 有工時→工作日；沒有→休息日" /></Step>
        <Step><MiniFeature color={goodGreen} title="表格化" desc="轉成 Excel 表格，命名 tbl_加班" /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 24, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        <SheetHeaderCell label="日期" tiny />
        <SheetHeaderCell label="員工ID" tiny />
        <SheetHeaderCell label="員工姓名" tiny />
        <SheetHeaderCell label="加班類型" tiny />
        <SheetHeaderCell label="開始時間" tiny />
        <SheetHeaderCell label="結束時間" tiny />
        <SheetHeaderCell label="時數" tiny />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            <GridCell>2026/07/17</GridCell><GridCell>E001</GridCell><GridCell>王建民</GridCell><GridCell>休息日</GridCell><GridCell>11:00</GridCell><GridCell>20:00</GridCell><GridCell>8.0</GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 40 — 加班防呆：對應班表工時 + 工時/連勤提醒 ─────────────────────────
const OvertimeCheck: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.16-17 · Prompt 12、13</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>兩欄防呆：別讓工時被算兩次</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
      <Steps>
        <Step>
          <TxCard color={sheetColor.schedule} title="對應班表工時">
            <div style={{ fontSize: 27, color: muted, lineHeight: 1.5 }}>查出員工當日正常工時，避免加班時數跟原班次工時重複計薪。</div>
            <div style={{ marginTop: 22 }}>
              <div style={{ fontSize: 22, color: muted, marginBottom: 8 }}>範例：班表 8h ＋ 加班 5h ＝ 13h，超過 12h 上限</div>
              <div style={{ position: 'relative', height: 36, background: '#F1EFE4', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '61.5%', background: sheetColor.schedule, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700 }}>
                  班表 8h
                </div>
                <div style={{ position: 'absolute', left: '61.5%', top: 0, bottom: 0, width: '38.5%', background: painRed, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700 }}>
                  加班 5h
                </div>
                <div style={{ position: 'absolute', left: '92.3%', top: -4, bottom: -4, width: 3, background: 'var(--osd-text)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 17, color: muted, marginTop: 4 }}>
                <span>0h</span>
                <span style={{ marginLeft: '82%' }}>12h 上限 ⚠</span>
              </div>
            </div>
          </TxCard>
        </Step>
        <Step>
          <TxCard color={painRed} title="工時／連勤提醒">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <RuleChip text="當日總工時（班表＋加班）超過 12 小時 → ⚠ 提醒" color={painRed} />
              <RuleChip text="加班後連續工作超過 6 天 → ⚠ 提醒" color={painRed} />
              <RuleChip text="兩項都違反，分號隔開同時顯示；提醒文字用紅色" color={painRed} />
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 41 — 獎金明細：全勤獎金 ──────────────────────────────────────────────
const FullAttendanceExamples: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>獎金明細（一）：全勤獎金</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 1660 }}>
      鼓勵員工準時出勤、穩定提供勞務，出勤狀況良好時發放。
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 18 }}>
      <Steps>
        <Step><MiniFeature color={goodGreen} title="金額 / 適用對象" desc="$1,000 元／月，僅正職員工" /></Step>
        <Step><MiniFeature color={goodGreen} title="達成條件" desc="當月排班皆準時出勤，且未請事假" /></Step>
      </Steps>
    </div>
    <div style={{ display: 'flex', gap: 28, marginTop: 18 }}>
      <Steps>
        <Step>
          <TxCard color={painRed} title="1. 當月請事假（不論多少）">
            <div style={{ fontSize: 27, color: muted, lineHeight: 1.5 }}>
              扣全額 <b style={{ color: painRed }}>$1,000</b>
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, marginTop: 8 }}>
              實際發放：$1,000－$1,000＝<span style={{ color: painRed }}>$0</span>
            </div>
          </TxCard>
        </Step>
        <Step>
          <TxCard color={warnAmber} title="2. 當月請病假（8小時）">
            <div style={{ fontSize: 27, color: muted, lineHeight: 1.5 }}>
              扣 $1,000÷30天÷8時×8時＝<b style={{ color: warnAmber }}>$33</b>
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, marginTop: 8 }}>
              實際發放：$1,000－$33＝<span style={{ color: warnAmber }}>$967</span>
            </div>
          </TxCard>
        </Step>
        <Step>
          <TxCard color={goodGreen} title="3. 當月請特休（不論多少小時）">
            <div style={{ fontSize: 27, color: muted, lineHeight: 1.5 }}>
              <b style={{ color: goodGreen }}>不扣款</b>
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, marginTop: 8 }}>
              實際發放：$1,000－0＝<span style={{ color: goodGreen }}>$1,000</span>
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 28 }}>
      <Callout color={sheetColor.staff}>
        <b>※ 特休、排休假</b> 不影響全勤獎金的發放條件。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 42c — 全勤獎金：為什麼扣款要無條件捨去？ ─────────────────────────────
const FullAttendanceRounding: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>為什麼扣款一定要「無條件捨去」？</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 1660 }}>
      試想：當月請了 4 小時病假，扣款＝$1,000÷30天÷8時×4時＝<b>$16.66666667</b>，實際發放＝$1,000－$16.66666667＝<b>$983.3333333</b>，薪水卻不會發到小數點——就會遇到「進位」或「捨去」的選擇。
    </p>
    <div style={{ marginTop: 24, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr' }}>
        <SheetHeaderCell label="項目" />
        <SheetHeaderCell label="無條件進位" />
        <SheetHeaderCell label="四捨五入" />
        <SheetHeaderCell label="無條件捨去" />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr' }}>
            <SheetCell value="全勤獎金" />
            <SheetCell value="$1,000" band />
            <SheetCell value="$1,000" band />
            <SheetCell value="$1,000" band />
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr' }}>
            <SheetCell value="扣款" />
            <SheetCell value="$17" highlight="red" />
            <SheetCell value="$17" highlight="red" />
            <SheetCell value="$16" highlight="yellow" />
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr' }}>
            <SheetCell value="實際發放" band />
            <SheetCell value="$983" band />
            <SheetCell value="$983" band />
            <SheetCell value="$984" band highlight="yellow" />
          </div>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 20 }}>
      <Callout color={painRed}>
        無條件進位／四捨五入都扣 <b>$17</b>，等於多扣了 <b>$0.33</b> 元——金額雖小，依勞基法規只要多扣薪資，就屬於「溢扣薪資」的違法行為。
      </Callout>
    </div>
    <div style={{ marginTop: 16 }}>
      <Callout color={goodGreen}>
        <b>重要觀念：</b>只要碰到「扣款」，一律無條件捨去。後面遇到的請假扣款，同樣適用這個原則。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 42 — 獎金明細表：結構與全勤公式邏輯 ──────────────────────────────────
const BonusDetailSetup: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.25 · Prompt 17</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>建立「獎金明細」，用動態陣列自動算全勤</PageHeading>
    <div style={{ marginTop: 24, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <SheetHeaderCell label="月份" tiny />
        <SheetHeaderCell label="員工ID" tiny />
        <SheetHeaderCell label="員工姓名" tiny />
        <SheetHeaderCell label="全勤獎金" tiny />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <GridCell>2026/07</GridCell><GridCell>E002</GridCell><GridCell>張奕</GridCell><GridCell><b style={{ color: warnAmber }}>967</b></GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <GridCell band>2026/07</GridCell><GridCell band>E003</GridCell><GridCell band>李多慧</GridCell><GridCell band><b style={{ color: goodGreen }}>1,000</b></GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <GridCell>2026/07</GridCell><GridCell>E004</GridCell><GridCell>林襄（兼職）</GridCell><GridCell><b style={{ color: muted }}>0</b></GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 16, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        <SheetHeaderCell label="員工ID" tiny />
        <SheetHeaderCell label="員工姓名" tiny />
        <SheetHeaderCell label="僱用類型" tiny />
        <SheetHeaderCell label="休假日期" tiny />
        <SheetHeaderCell label="假別" tiny />
        <SheetHeaderCell label="請假時數(小時)" tiny />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
            <GridCell>E002</GridCell><GridCell>張奕</GridCell><GridCell>正職</GridCell><GridCell>2026/07/22</GridCell><GridCell>病假</GridCell><GridCell>8</GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
            <GridCell band>E003</GridCell><GridCell band>李多慧</GridCell><GridCell band>正職</GridCell><GridCell band>2026/07/28</GridCell><GridCell band>特休</GridCell><GridCell band>8</GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Steps>
        <Step><RuleChip text="僅正職有資格，兼職固定為 0" color={formulaBlue} /></Step>
        <Step><RuleChip text="如請事假（不管多少只要有請），扣全額 $1,000" color={painRed} /></Step>
        <Step><RuleChip text="如有請病假，按比例扣款（無條件捨去）" color={warnAmber} /></Step>
        <Step><RuleChip text="特休、排休不影響全勤獎金" color={formulaBlue} /></Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 43 — 獎金明細（二）：業績獎金 ────────────────────────────────────────
const PerformanceBonusIntro: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650} marginTop={18}>獎金明細（二）：業績獎金</PageHeading>
    <div
      style={{
        marginTop: 18,
        height: 700,
        display: 'grid',
        gridTemplateColumns: '1.85fr 0.95fr',
        gap: 24,
        alignItems: 'stretch',
      }}
    >
      <Steps>
        <Step>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: 20,
              boxShadow: '0 8px 24px rgba(28,35,31,0.08)',
              padding: 12,
              boxSizing: 'border-box',
            }}
          >
            <img
              src={performanceBonusFlow}
              alt="從營業月報的 tbl_DailyTrend 找出業績達標日，再對照排班並匯入 tbl_獎金輸入，每位當日出勤員工獲得 500 元"
              style={{
                ...imageOnSlideBackground,
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 12,
              }}
            />
          </div>
        </Step>
      </Steps>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Steps>
          <Step><MiniFeature color={goodGreen} title="金額" desc="$500 元／日" /></Step>
          <Step><MiniFeature color={goodGreen} title="適用對象" desc="所有員工" /></Step>
          <Step><MiniFeature color={goodGreen} title="達成條件" desc="當月單日營業額達 $25,000" /></Step>
          <Step>
            <Callout color={formulaBlue}>
              營業額資料來源：<br />「營業月報.xlsx」的每日趨勢頁籤，表格 tbl_DailyTrend，<br />需要「日期」與「營業額」兩欄<br />{''}<b>{''}</b>{''}<b>{''}</b>——這是一份<b>跨檔案</b>的資料。
            </Callout>
          </Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 44 — 獎金明細擴充 + 獎金輸入暫存表 ───────────────────────────────────
const BonusDetailExpandTable: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.32 · Prompt 28</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>「獎金合計」－－每個人總共領多少獎金？</PageHeading>
    <div style={{ position: 'relative', marginTop: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Steps>
          <Step>
            <div style={{ height: 58, display: 'flex', alignItems: 'center' }}>
              <RuleChip text="F4「獎金合計」＝ D欄＋E欄，動態溢出" color={formulaBlue} />
            </div>
          </Step>
        </Steps>
      </div>
      <Steps>
        <Step>
          <div style={{ height: 610, marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img
              src={bonusTotalFormula}
              alt="全勤獎金加上業績獎金，等於獎金合計；以 967 元加 1,500 元等於 2,467 元為例"
              style={{
                ...imageOnSlideBackground,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 14,
                boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
              }}
            />
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 44b — tbl_獎金輸入暫存表 ─────────────────────────────────────────────
const BonusInputTable: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.27 · Prompt 18</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>獎金輸入明細表（tbl_獎金輸入）</PageHeading>
    <p style={{ fontSize: 26, color: muted, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 1660 }}>
      此區作為從月報表匯入獎金明細前的暫存區塊，用來存放已算好的獎金金額。
    </p>
    <div style={{ marginTop: 24, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
        <SheetHeaderCell label="日期" tiny />
        <SheetHeaderCell label="員工ID" tiny />
        <SheetHeaderCell label="員工姓名" tiny />
        <SheetHeaderCell label="獎金項目" tiny />
        <SheetHeaderCell label="金額" tiny />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
            <GridCell><span style={{ color: muted }}>2026/07/04</span></GridCell>
            <GridCell><span style={{ color: muted }}>E001</span></GridCell>
            <GridCell><span style={{ color: muted }}>王建民</span></GridCell>
            <GridCell><span style={{ color: muted }}>業績獎金</span></GridCell>
            <GridCell><span style={{ color: muted }}>$500</span></GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
            <GridCell band center><span style={{ color: muted }}>⁝</span></GridCell>
            <GridCell band center><span style={{ color: muted }}>⁝</span></GridCell>
            <GridCell band center><span style={{ color: muted }}>⁝</span></GridCell>
            <GridCell band center><span style={{ color: muted }}>⁝</span></GridCell>
            <GridCell band center><span style={{ color: muted }}>⁝</span></GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 45 — VBA 跨檔整合：算出業績獎金 ──────────────────────────────────────
const VbaStepImage = ({ src, alt, scale }: { src: string; alt: string; scale?: number }) => (
  <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 8, overflow: 'hidden' }}>
    <img
      src={src}
      alt={alt}
      style={{
        ...imageOnSlideBackground,
        maxWidth: `${(scale ?? 1) * 100}%`,
        maxHeight: `${(scale ?? 1) * 100}%`,
        objectFit: 'contain',
        borderRadius: 14,
        boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
      }}
    />
  </div>
);

// ─── Page 46a — VBA 跨檔整合（一）：選擇月報檔案 ────────────────────────────
const VbaStep1: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.28 · Prompt 19</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務23	讓AI產出第一段VBA－打開報表</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: sheetColor.monthly, marginTop: 6 }}>
      ① 跳出視窗，選擇月報 .xlsx 檔案（唯讀開啟，背景不顯示）
    </div>
    <VbaStepImage src={vbaStep1FilePicker} alt="跳出視窗選擇營業月報檔案" scale={1.1} />
    <PageFooter />
  </div>
);

// ─── Page 46b — VBA 跨檔整合（二）：讀取 tbl_DailyTrend ─────────────────────
const VbaStep2: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.28 · Prompt 20</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16} style={{ fontSize: '51px' }}>任務24 產出第二段VBA－找到tbl_DailyTrend，<br />讀取日期與營業額</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: sheetColor.monthly, marginTop: 6 }}>
      ② 在月報裡找到表格 tbl_DailyTrend，讀出「日期」與「營業額」
    </div>
    <VbaStepImage src={vbaStep2DailyTrend} alt="月報表每日趨勢頁籤的 tbl_DailyTrend 表格" />
    <PageFooter />
  </div>
);

// ─── Page 46c — VBA 跨檔整合（三）：篩出達標日期 ────────────────────────────
const VbaStep3: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.29 · Prompt 21</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務25 產出第三段VBA－找出達標日期</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: sheetColor.monthly, marginTop: 6 }}>
      ③ 篩出營業額 ≥ $25,000 的達標日期
    </div>
    <VbaStepImage src={vbaStep3Filtered} alt="篩出營業額達標的日期" />
    <PageFooter />
  </div>
);

// ─── Page 50 — VBA 背景執行與錯誤示警 ─────────────────────────────────────
const VbaBackgroundSafety: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.29 · Prompt 22</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16} style={{ fontSize: '51px' }}>
      任務26 產出第四段VBA－讓巨集背景執行與錯誤示警
    </PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: sheetColor.monthly, marginTop: 6 }}>
      ④ 背景開啟月報；成功或失敗，都必須關閉月報且不儲存
    </div>
    <VbaStepImage
      src={vbaBackgroundErrorFlow}
      alt="巨集在背景開啟月報、讀取資料，遇到錯誤以 MsgBox 示警，最後一律關閉月報且不儲存"
    />
    <PageFooter />
  </div>
);

// ─── Page 46d — VBA 跨檔整合（四）：比對排班表 ──────────────────────────────
const VbaStep4: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.30 · Prompt 25</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務29 產出第七段VBA－抓出達標日有上班的員工</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: sheetColor.monthly, marginTop: 6 }}>⑥ 比對 tbl_排班，找出達標日當天有上班的員工</div>
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        marginTop: 12,
      }}
    >
      <div style={{ minHeight: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 25, fontWeight: 800, color: sheetColor.monthly }}>• 達標日期</div>
        <img
          src={vbaStep3Filtered}
          alt="第49頁篩出的營業額達標日期"
          style={{ ...imageOnSlideBackground, width: '100%', flex: 1, minHeight: 0, objectFit: 'contain', borderRadius: 14, boxShadow: '0 10px 32px rgba(0,0,0,0.12)' }}
        />
      </div>
      <div style={{ minHeight: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 25, fontWeight: 800, color: sheetColor.monthly }}>• 達標日有上班的員工</div>
        <img
          src={vbaStep4Schedule}
          alt="比對排班表找出達標日出勤員工"
          style={{ ...imageOnSlideBackground, width: '100%', flex: 1, minHeight: 0, objectFit: 'contain', borderRadius: 14, boxShadow: '0 10px 32px rgba(0,0,0,0.12)' }}
        />
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 52 — VBA 抓出排班日期與員工資料 ──────────────────────────────────
const VbaStep6ScheduleFields: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.30 · Prompt 24</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16} style={{ fontSize: '51px' }}>
      任務28 產出第六段VBA－抓出 tbl_排班 的<br />
      日期、員工ID、員工姓名
    </PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: sheetColor.monthly, marginTop: 6 }}>
      ⑥ 抓出 tbl_排班 所有日期、員工ID、員工姓名
    </div>
    <VbaStepImage
      src={vbaStep6ScheduleFields}
      alt="排班表中的排班日期、員工ID、員工姓名與班別資料"
    />
    <PageFooter />
  </div>
);

// ─── Page 46e — VBA 跨檔整合（五）：套用獎金基數 ────────────────────────────
const VbaStep5: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.30 · Prompt 23</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務27 產出第五段VBA－從薪資設定取得業績獎金金額</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: sheetColor.monthly, marginTop: 6 }}>⑤ 從 薪資設定！C8 取得業績獎金金額</div>
    <VbaStepImage src={vbaStep5SalarySetting} alt="薪資設定頁籤的業績獎金基數" scale={1.2} />
    <PageFooter />
  </div>
);

// ─── Page 46 — VBA：把獎金資料寫回 tbl_獎金輸入 ───────────────────────────────
const VbaWriteBack: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.31 · Prompt 26</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>任務30 產出最後一段VBA－輸入業績獎金資料</PageHeading>
    <VbaStepImage
      src={bonusInputFieldCallouts}
      alt="獎金輸入明細表五個欄位的手繪引線標註：日期、員工ID、員工姓名、獎金項目與金額"
    />
    <div style={{ marginTop: 12 }}>
      <Callout color={warnAmber}>
        缺少檔案或資料讀取失敗，都要以 MsgBox 明確指出。
        <br />
        執行後先核對 tbl_獎金輸入 資料正不正確——有問題就把錯誤訊息丟回給 AI 修正，正確才繼續下一步。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 47 — 業績獎金公式串接：獎金明細 → 薪資明細 ──────────────────────────
const BonusFormulaLink: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.32 · Prompt 27</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>把算好的獎金，串回獎金明細</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: formulaBlue, marginTop: 6 }}>
      依員工ID，從 tbl_獎金輸入加總「金額」，再回填業績獎金
    </div>
    <VbaStepImage
      src={bonusSumByEmployee}
      alt="獎金輸入明細表依員工ID加總後，回填獎金計算矩陣的業績獎金"
    />
    <PageFooter />
  </div>
);

// ─── Page 47b — 業績獎金公式串接：獎金明細 → 薪資明細 ─────────────────────────
const SalaryFormulaLink: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.36 · Prompt 31</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>把算好的獎金合計，串回薪資明細</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: formulaBlue, marginTop: 6 }}>依員工ID，將獎金合計顯示在薪資明細</div>
    <Steps>
      <Step>
        <div style={{ height: 690, marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={bonusTotalToSalary}
            alt="依員工ID，把獎金明細的獎金合計同步顯示在薪資明細；張奕的 2,467 元在左右兩表一致"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 14,
              boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 48 — 加班費三大要素 ───────────────────────────────────────────────────
const OvertimeThreeFactors: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>先算出每小時的加班費基數</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 36 }}>
      <div style={{ flex: 1 }}>
        <Steps>
          <Step>
            <TxCard color={sheetColor.staff} title="正職的加班費基數">
              <div style={{ fontSize: 27, color: muted, lineHeight: 1.5 }}>
                （底薪 ＋ 獎金合計）÷ 月天數 ÷ 日時數
              </div>
            </TxCard>
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1 }}>
        <Steps>
          <Step>
            <TxCard color={formulaBlue} title="兼職的加班費基數">
              <div style={{ fontSize: 27, color: muted, lineHeight: 1.5 }}>
                時薪 ＋（獎金合計 ÷ 月天數 ÷ 日時數）
              </div>
            </TxCard>
          </Step>
        </Steps>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 32, marginTop: 28 }}>
      <div style={{ flex: 1 }}>
        <Steps>
          <Step>
            <TxCard color={sheetColor.staff} title="正職王建民">
              <div style={{ fontSize: 25, color: muted, lineHeight: 1.6 }}>
                底薪 $36,000 ＋獎金 $1,500 → 基數 (36,000+1,500)÷30÷8 ＝ <b style={{ color: 'var(--osd-text)' }}>156.25</b> 元/時
              </div>
            </TxCard>
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1 }}>
        <Steps>
          <Step>
            <TxCard color={formulaBlue} title="兼職林襄">
              <div style={{ fontSize: 25, color: muted, lineHeight: 1.6 }}>
                時薪 $200＋獎金 $480 → 基數 $200+($480÷30÷8) ＝ <b style={{ color: 'var(--osd-text)' }}>206.25</b> 元/時
              </div>
            </TxCard>
          </Step>
        </Steps>
      </div>
    </div>
    <div style={{ marginTop: 20 }}>
      <Callout color={painRed}>基數算出來之後，再依「工作日」或「休息日」乘上對應的倍率。</Callout>
    </div>
    <PageFooter />
  </div>
);

const OvertimeCalculationFormula: Page = () => (
  <div style={{ ...page, padding: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    </div>
    <div style={{ alignSelf: 'flex-start' }}>
      <PageHeading maxWidth={1650}>加班費基數怎麼算？</PageHeading>
    </div>
    <Steps>
      <Step>
        <div style={{ width: '100%', height: 800, marginTop: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img
            src={overtimeCalculationFormula}
            alt="加班費等於基數乘以倍率再乘以加班時數，並說明工作日與休息日各時段的倍率"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 49 — 加班費率表 ───────────────────────────────────────────────────────
const OvertimeRateTable: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>倍率分級：加得越多，倍率越高</PageHeading>
    <div style={{ marginTop: 36, borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
        <SheetHeaderCell label="情境" />
        <SheetHeaderCell label="前 2 小時" />
        <SheetHeaderCell label="第 3~4 小時" />
        <SheetHeaderCell label="第 5~12 小時" />
      </div>
      <Steps>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
            <GridCell>工作日加班</GridCell>
            <GridCell center><b style={{ color: warnAmber }}>1.34 倍</b></GridCell>
            <GridCell center><b style={{ color: painRed }}>1.67 倍</b></GridCell>
            <GridCell center>—</GridCell>
          </div>
        </Step>
        <Step>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
            <GridCell band>休息日加班</GridCell>
            <GridCell band center><b style={{ color: warnAmber }}>1.34 倍</b></GridCell>
            <GridCell band center><b style={{ color: painRed }}>1.67 倍（第3~8小時）</b></GridCell>
            <GridCell band center><b style={{ color: violatePurple }}>2.67 倍（第9~12小時）</b></GridCell>
          </div>
        </Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ height: 520, marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={overtimeRateTimeline}
            alt="以早上九點開始上班為例，對照工作日與休息日不同時段的正常工時及加班倍率"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 14,
              boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 50 — 加班費計算範例 ───────────────────────────────────────────────────
const OvertimeExamples: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>兩個範例，實際算一次</PageHeading>
    <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
      <Steps>
        <Step>
          <TxCard color={sheetColor.staff} title="正職王建民：工作日加班 3 小時">
            <div style={{ fontSize: 25, color: muted, lineHeight: 1.6 }}>
              底薪 $36,000 ＋獎金 $1,500 → 基數 (36,000+1,500)÷30÷8 ＝ <b style={{ color: 'var(--osd-text)' }}>156.25</b> 元/時<br />
              $<b style={{ color: 'var(--osd-text)' }}>156.25</b>{' ('}<span style={{ color: '#e69ab3' }}>1.34</span>{'×2 ＋ '}<span style={{ color: '#ff0000' }}>1.67</span>{'×1) ＝ $679.69'}<b style={{ color: '#C15A82' }}>{''}</b>{''}<b style={{ color: 'var(--osd-text)' }}>{''}</b>{''}<b style={{ color: painRed }}>{''}</b>{''}<br />
              → 無條件進位 ＝ <span style={{ fontWeight: '700' }}>$680</span>
            </div>
          </TxCard>
        </Step>
        <Step>
          <TxCard color={formulaBlue} title="兼職林襄：休息日加班 4 小時">
            <div style={{ fontSize: 25, color: muted, lineHeight: 1.6 }}>
              時薪 $200＋獎金 $480 → 基數 $200+($480÷30÷8) ＝ <b style={{ color: 'var(--osd-text)' }}>206.25元/時<br />$206.25<span style={{ fontWeight: '400' }}>{' ('}</span><span style={{ fontWeight: '400' }}><span style={{ color: '#f39696' }}>1.34</span>×2 ＋ <span style={{ color: '#ff0000' }}>1.67</span>×2) ＝ $1241.63</span></b>{''}
              {''}<b style={{ color: 'var(--osd-text)' }}>{''}</b>{''}<b style={{ color: '#C15A82' }}>{''}</b>{''}<b style={{ color: 'var(--osd-text)' }}>{''}</b>{''}<b style={{ color: painRed }}>{''}</b>{''}<br />
              → 無條件進位 ＝ <span style={{ fontWeight: '700' }}>$1,242</span>
            </div>
          </TxCard>
        </Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ height: 430, marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={overtimeRateTimeline}
            alt="工作日與休息日依上班第幾小時適用不同的正常工時及加班倍率"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 14,
              boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 51 — 加班明細：加班費基數與加班費公式 ────────────────────────────────
const OvertimeBaseFormula: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.35、36 · Prompt 29、30</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>把三大要素，接回 tbl_加班 表格</PageHeading>
    <Steps>
      <Step>
        <div style={{ marginTop: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              padding: '14px 24px',
              borderRadius: 14,
              background: `${formulaBlue}0F`,
              border: `1px solid ${formulaBlue}33`,
              fontSize: 25,
              lineHeight: 1.45,
            }}
          >
            <span><b>H 欄：加班費基數</b>依僱用類型計算，保留小數後 2 位。</span>
            <span><b>I 欄：加班費</b>依加班類型與時數分段計算，無條件進位至整數。</span>
          </div>
        </div>
      </Step>
      <Step>
        <div style={{ height: 535, marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={overtimeDetailCalculationFlow}
            alt="tbl_加班的加班類型與加班時數、加班費基數及加班費計算關係"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 14,
              boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 51b — 加班費公式串接：加班明細 → 薪資明細 ───────────────────────────
const OvertimeToSalaryLink: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.37 · Prompt 32</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>把算好的加班費，串回薪資明細</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: formulaBlue, marginTop: 6 }}>
      在薪資明細新增「加班費」欄，依員工ID加總 tbl_加班[加班費] 後回填
    </div>
    <Steps>
      <Step>
        <div style={{ height: 690, marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={overtimeSumToSalary}
            alt="依員工ID加總加班明細表的加班費，回填薪資明細表新增的加班費欄"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 14,
              boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── 應發合計：本薪＋獎金合計＋加班費 ───────────────────────────────────────
const SalaryGrossPayFormula: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.37 · Prompt 33</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>三個欄位加起來，就是應發合計</PageHeading>
    <Steps>
      <Step>
        <div style={{ height: 720, marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={salaryGrossPayFormula}
            alt="本薪加上獎金合計與加班費，得到薪資明細表的應發合計"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 14,
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 51c — 加班費率倍率，統一引用「薪資設定」 ────────────────────────────
const OvertimeRateSource: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.36 · Prompt 30</Eyebrow>
    </div>
    <PageHeading maxWidth={1650}>費率倍率，統一引用「薪資設定」，不寫死在公式裡</PageHeading>
    <div style={{ marginTop: 32 }}>
      <Callout color={formulaBlue}>
        費率倍率（1.34／1.67／2.67）都引用「薪資設定」頁籤（C10~C14），不寫死在公式裡——之後要調整費率，改一處就好。
      </Callout>
    </div>
    <Steps>
      <Step>
        <div style={{ height: 620, marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={salarySettingsOvertimeRates}
            alt="薪資設定頁籤中的工作日與休息日加班費率參數，紅框標示 C10 到 C14"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 14,
              boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 52 — 勞健保自負額規則 ─────────────────────────────────────────────────
const InsuranceRules: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>應發合計算完，接下來設定扣項：勞健保</PageHeading>
    <Steps>
      <Step>
        <div style={{ height: 720, marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={insuranceRulesThreeThings}
            alt="勞健保三個重點：五人以上投勞保、健保由主要工作單位投保，以及雇主與員工負擔比例"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 14,
              boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 53 — 投保級距範例 + 薪資明細公式 ────────────────────────────────────
const InsuranceExample: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>投保級距怎麼選？正職與兼職分開看</PageHeading>
    <Steps>
      <Step>
        <div style={{ marginTop: 14 }}>
          <Callout color={warnAmber}>
            投保級距不能低於常態性薪資——「高薪低報」違法，將面臨罰鍰、賠償與刑事責任。
          </Callout>
        </div>
      </Step>
    </Steps>
    <div style={{ display: 'grid', gridTemplateColumns: '1.18fr 0.82fr', gap: 28, marginTop: 18, minHeight: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Steps>
          <Step>
            <TxCard color={sheetColor.staff} title="正職｜固定薪資決定投保級距">
              <div style={{ fontSize: 24, color: muted, lineHeight: 1.45 }}>
                月薪加上每月固定發放的獎金或全勤
                <div style={{ fontSize: 31, fontWeight: 900, color: sheetColor.staff, margin: '8px 0' }}>
                  $36,000 ＋ $1,000（全勤）＝ $37,000
                </div>
                <div style={{ padding: '8px 12px', borderRadius: 10, background: `${warnAmber}12`, color: 'var(--osd-text)', fontSize: 21 }}>
                  業績獎金達標才有，屬於不固定發放，入職投保時先不列入投保級距。
                </div>
                <div style={{ marginTop: 10 }}>
                  → 勞保、健保投保級距皆為 <b style={{ color: sheetColor.staff }}>38,200</b>
                  <br />
                  → 員工負擔：勞保 <b>$955</b>、健保 <b>$592</b>
                </div>
              </div>
            </TxCard>
          </Step>
          <Step>
            <TxCard color={formulaBlue} title="兼職｜薪資不固定，先採最低級距">
              <div style={{ fontSize: 24, color: muted, lineHeight: 1.5 }}>
                → 勞保投保級距 <b style={{ color: formulaBlue }}>11,100</b>
                <br />
                → 健保投保級距 <b style={{ color: formulaBlue }}>29,500</b>
                <br />
                → 員工負擔：勞保 <b>$277</b>、健保 <b>$458</b>
              </div>
            </TxCard>
          </Step>
        </Steps>
      </div>
      <div
        style={{
          position: 'relative',
          height: 620,
          overflow: 'hidden',
          borderRadius: 14,
          boxShadow: '0 10px 32px rgba(0,0,0,0.12)',
        }}
      >
        <img
          src={insuranceBracketTable2026}
          alt="115年度完整勞健保級距金額表"
          style={{
            ...imageOnSlideBackground,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'top center',
          }}
        />
        {/* Keep this Steps block last on the slide: the zoom graphic must be the final reveal. */}
        <Steps>
          <Step>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--osd-bg)',
              }}
            >
              <img
                src={insuranceBracketThreeZooms}
                alt="放大顯示正職 38,200、兼職勞保 11,100 與兼職健保 29,500 三個級距"
                style={{
                  ...imageOnSlideBackground,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
            </div>
          </Step>
        </Steps>
      </div>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 65b — 依僱用類型回填勞健保自付額 ────────────────────────────────────
const InsuranceAmountsToSalaryDetail: Page = () => (
  <div style={{ ...page, padding: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
        <Eyebrow color={taskColor}>操作手冊 · P.41 · Prompt 36、37</Eyebrow>
      </div>
    </div>
    <Steps>
      <Step>
        <div style={{ width: '100%', height: 870, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' }}>
          <img
            src={insuranceAmountsToSalaryDetail}
            alt="依薪資明細第三欄僱用類型，回填新增的勞保自付與健保自付兩欄"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 54 — 請假扣薪規則 ─────────────────────────────────────────────────────
const LeaveDeductRules: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>請假扣薪怎麼算？</PageHeading>
    <div style={{ marginTop: 24, display: 'flex', borderRadius: 16, overflow: 'hidden', border: `1px solid ${cardBorder}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
      <div style={{ flex: 0.7, display: 'flex', flexDirection: 'column' }}>
        <SheetHeaderCell label="假別" tiny />
        <GridCell>排休</GridCell>
        <GridCell band>特休</GridCell>
        <GridCell>病假</GridCell>
        <GridCell band>事假</GridCell>
      </div>
      <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column' }}>
        <SheetHeaderCell label="扣薪比例" tiny />
        <GridCell><b style={{ color: goodGreen }}>0%</b></GridCell>
        <GridCell band><b style={{ color: goodGreen }}>0%</b></GridCell>
        <GridCell><b style={{ color: warnAmber }}>50%</b></GridCell>
        <GridCell band><b style={{ color: painRed }}>100%</b></GridCell>
      </div>
      <div style={{ flex: 1.2 }}>
        <Steps>
          <Step>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <SheetHeaderCell label="例：正職，月薪36,000（換算時薪$150）" tiny />
              <GridCell>$0</GridCell>
              <GridCell band>$0</GridCell>
              <GridCell>$75</GridCell>
              <GridCell band>$150</GridCell>
            </div>
          </Step>
        </Steps>
      </div>
      <div style={{ flex: 1.2 }}>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <Steps>
            <Step>
              <>
                <SheetHeaderCell label="例：兼職，時薪200" tiny />
                <GridCell>$0</GridCell>
                <GridCell band>$0</GridCell>
                <GridCell>$100</GridCell>
                <GridCell band>$200</GridCell>
              </>
            </Step>
          </Steps>
          <Steps>
            <Step>
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', left: 14, right: 14, top: 73.5, height: 2, background: painRed }} />
                <div style={{ position: 'absolute', left: 14, right: 14, top: 130.5, height: 2, background: painRed }} />
                <div style={{ position: 'absolute', left: 14, right: 14, top: 187.5, height: 2, background: painRed }} />
                <div style={{ position: 'absolute', left: 14, right: 14, top: 244.5, height: 2, background: painRed }} />
              </div>
            </Step>
          </Steps>
        </div>
      </div>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 14 }}>
          <Callout color={painRed}>兼職僅以出勤時數計算薪資，請假不另扣款——上表槓掉的金額都不會真的扣。</Callout>
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 55 — 請假扣薪公式串接 ─────────────────────────────────────────────────
// Leave deductions: aggregate by employee ID, then write back to salary details.
const LeaveDeductToSalaryDetail: Page = () => (
  <div style={{ ...page, padding: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
        <Eyebrow color={taskColor}>操作手冊 · P.42 · Prompt 38</Eyebrow>
      </div>
    </div>
    <Steps>
      <Step>
        <div style={{ width: '100%', height: 870, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img
            src={leaveDeductToSalaryDetail}
            alt="請假明細依員工ID加總請假扣薪，再回填至薪資明細的請假扣薪欄位"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

const LeaveDeductFormulaLogic: Page = () => (
  <div style={{ ...page, padding: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
        <Eyebrow color={taskColor}>操作手冊 · P.40、41 · Prompt 34、35</Eyebrow>
      </div>
    </div>
    <Steps>
      <Step>
        <div style={{ width: '100%', height: 850, marginTop: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img
            src={leaveDeductFormulaLogic}
            alt="休假申請新增正職請假扣薪基數與請假扣薪兩欄的公式邏輯"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

const SalaryDeductionsNetPayFormula: Page = () => (
  <div style={{ ...page, padding: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
        <Eyebrow color={taskColor}>操作手冊 · P.42 · Prompt 39、40</Eyebrow>
      </div>
    </div>
    <Steps>
      <Step>
        <div style={{ width: '100%', height: 850, marginTop: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img
            src={salaryDeductionsNetPayFormula}
            alt="應扣合計等於勞保自付加健保自付加請假扣薪，實發薪資等於應發合計減應扣合計"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

const LeaveDeductFormula: Page = () => (
  <div style={page}>
    <Eyebrow color={sheetColor.monthly}>PART 3 · 薪水怎麼算？</Eyebrow>
    <PageHeading maxWidth={1650}>公式一路串到「實發薪資」</PageHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
      <Steps>
        <Step><RuleChip text="休假申請 I 欄：正職請假扣薪基數(元/時) ＝ 月薪 ÷30÷8（兼職留空）" color={painRed} /></Step>
        <Step>
          <RuleChip text="休假申請 J 欄：請假扣薪 ＝ 請假時數 × 基數 × 假別比例（薪資設定 C23事假／C24病假）" color={painRed} />
        </Step>
        <Step><RuleChip text="薪資明細 J 欄：請假扣薪，依員工ID 從 tbl_休假 對應取得" color={painRed} /></Step>
        <Step><RuleChip text="薪資明細 K 欄：應扣合計 ＝ H＋I＋J（勞保＋健保＋請假扣薪）" color={painRed} /></Step>
      </Steps>
    </div>
    <div style={{ marginTop: 28 }}>
      <Callout color={goodGreen}>
        <b>薪資明細 L 欄：實發薪資 ＝ G＋K</b>（應發合計 ＋ 應扣合計，應扣是負數）——這就是員工銀行帳戶實際收到的金額。
      </Callout>
    </div>
    <PageFooter />
  </div>
);

// ─── Page 56 — 工時彙總表補完 ───────────────────────────────────────────────────
const HoursSummaryComplete: Page = () => (
  <div style={{ ...page, padding: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Eyebrow color={sheetColor.leave}>PART 2 · 排班表實作</Eyebrow>
        <Eyebrow color={taskColor}>操作手冊 · P.18 · Prompt 15</Eyebrow>
      </div>
      <PageHeading maxWidth={1650}>回頭補完「工時彙總」，變成完整出勤報表</PageHeading>
    </div>
    <Steps>
      <Step>
        <div style={{ width: '100%', height: 700, marginTop: 8, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img
            src={hoursSummaryFieldCallouts}
            alt="工時彙總表五個統計欄位，以捲曲引線標示加班時數、出勤天數、特休、事假與病假時數的動態加總來源"
            style={{
              ...imageOnSlideBackground,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
          />
        </div>
      </Step>
    </Steps>
    <PageFooter />
  </div>
);

// ─── Page 73 — Part 4 GAS：Apps Script 骨架 ──────────────────────────────────
const GasTask46Skeleton: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.43 · Prompt 41</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務46：Apps Script 骨架</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ① 先建立最基本的 doGet()，部署成網頁應用程式，確認能正常開啟
    </div>
    <VbaStepImage src={gasTask46Skeleton} alt="部署後的排班系統網頁，顯示「排班系統測試中」" />
    <PageFooter />
  </div>
);

const GasTask47StaffList: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.43 · Prompt 42</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務47：讀員工主檔</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ① 讀取 tbl_員工，把員工ID與姓名顯示在網頁上
    </div>
    <VbaStepImage src={gasTask47StaffList} alt="網頁顯示從 tbl_員工 讀出的員工ID與姓名清單" />
    <PageFooter />
  </div>
);

const GasTask48IdentityPicker: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.44 · Prompt 43</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務48：身分選擇畫面</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ① 把員工名單做成可以點選的卡片，讓使用者選擇自己的身分
    </div>
    <VbaStepImage src={gasTask48IdentityPicker} alt="身分選擇畫面：每位員工一張可點選的卡片" />
    <PageFooter />
  </div>
);

const GasTask48Welcome: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.44 · Prompt 43</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務48：身分選擇畫面</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ② 選擇後顯示歡迎訊息與員工ID，並提供「切換使用者」按鈕
    </div>
    <VbaStepImage src={gasTask48Welcome} alt="選擇身分後的歡迎畫面，顯示員工姓名、員工ID與切換使用者按鈕" />
    <PageFooter />
  </div>
);

const GasTask49SidebarSkeleton: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.44 · Prompt 44</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務49：側邊欄導覽（先做空殼）</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ① 先建好側邊欄的選單結構（月班表、請假申請、班別維護），內容之後再一頁一頁補上
    </div>
    <VbaStepImage src={gasTask49SidebarSkeleton} alt="側邊欄導覽骨架：月班表、請假申請、班別維護選單，內容區塊先留空" />
    <PageFooter />
  </div>
);

const GasTask50MonthlySchedule: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.44 · Prompt 45</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務50：月班表唯讀顯示</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ① 側邊欄「月班表」頁籤，唯讀顯示登入員工當月的排班表
    </div>
    <VbaStepImage src={gasTask50MonthlySchedule} alt="側邊欄導覽完成，月班表頁籤唯讀顯示鍋貼店7月班表" />
    <PageFooter />
  </div>
);

const GasTask51LeaveList: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.45 · Prompt 46</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務51：請假申請——查詢</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ① 「請假申請」頁籤，先做查詢：列出登入員工自己的請假紀錄
    </div>
    <VbaStepImage src={gasTask51LeaveList} alt="請假申請頁籤，列出登入員工的請假紀錄" />
    <PageFooter />
  </div>
);

const GasTask52AddButton: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.45 · Prompt 47</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務52：請假申請——送出</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ① 加上「新增假單」按鈕，準備讓員工可以自己送出請假申請
    </div>
    <VbaStepImage src={gasTask52AddButton} alt="請假申請頁籤新增「新增假單」按鈕" />
    <PageFooter />
  </div>
);

const GasTask52FormEmpty: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.45 · Prompt 47</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務52：請假申請——送出</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ② 點擊後跳出「新增假單」表單：假別、日期、開始／結束時間、時數
    </div>
    <VbaStepImage src={gasTask52FormEmpty} alt="新增假單表單，空白待填" />
    <PageFooter />
  </div>
);

const GasTask52FormFilled: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.45 · Prompt 47</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務52：請假申請——送出</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ③ 填好假別、日期、時間、時數後，按下「送出申請」
    </div>
    <VbaStepImage src={gasTask52FormFilled} alt="新增假單表單填好資料，準備送出" />
    <PageFooter />
  </div>
);

const GasTask52Result: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.45 · Prompt 47</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務52：請假申請——送出</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ④ 送出成功，新的一筆假單立刻出現在請假紀錄清單中
    </div>
    <VbaStepImage src={gasTask52Result} alt="送出成功後，新假單出現在請假紀錄清單最下方" />
    <PageFooter />
  </div>
);

const GasTask52SheetVerify: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.45 · Prompt 47</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務52：請假申請——送出</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ⑤ 回到 Google 試算表確認：tbl_休假 真的多了這一筆資料
    </div>
    <VbaStepImage src={gasTask52SheetVerify} alt="Google 試算表 tbl_休假，新送出的假單已寫入最後一列" />
    <PageFooter />
  </div>
);

const GasTask53ShiftMaintenance: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.45 · Prompt 48</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務53：班別維護</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ① 「班別維護」頁籤：員工自己勾選可上班的班別，儲存後更新到試算表
    </div>
    <VbaStepImage src={gasTask53ShiftMaintenance} alt="班別維護頁籤，員工勾選可上班的班別並儲存" />
    <PageFooter />
  </div>
);

const GasTask54ExportButtons: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.46 · Prompt 49</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務54：匯出行事曆</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ① 月班表頁籤加上兩個按鈕：匯出到 Google 行事曆、下載 .ics 檔（iPhone 行事曆）
    </div>
    <VbaStepImage src={gasTask54ExportButtons} alt="月班表頁籤新增匯出 Google 行事曆與下載 ics 檔兩個按鈕" />
    <PageFooter />
  </div>
);

const GasTask54GoogleCalendar: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.46 · Prompt 49</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務54：匯出行事曆</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ② 點下「匯出我的班表到 Google 行事曆」，整月排班自動變成行事曆事件
    </div>
    <VbaStepImage src={gasTask54GoogleCalendar} alt="Google 行事曆顯示整月自動匯入的排班事件" />
    <PageFooter />
  </div>
);

const GasTask54Iphone: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.46 · Prompt 49</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務54：匯出行事曆</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>
      ③ 下載的 .ics 檔在 iPhone 上打開，也能整批加入內建行事曆
    </div>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
      <img
        src={gasTask54IphoneList}
        alt="iPhone 行事曆匯入清單，顯示20個排班行程"
        style={{ ...imageOnSlideBackground, maxWidth: '32%', maxHeight: '100%', objectFit: 'contain', borderRadius: 14, boxShadow: '0 10px 32px rgba(0,0,0,0.12)' }}
      />
      <img
        src={gasTask54IphoneDetail}
        alt="iPhone 行事曆單一排班事件詳細內容，含員工姓名、員工ID與班別"
        style={{ ...imageOnSlideBackground, maxWidth: '32%', maxHeight: '100%', objectFit: 'contain', borderRadius: 14, boxShadow: '0 10px 32px rgba(0,0,0,0.12)' }}
      />
    </div>
    <PageFooter />
  </div>
);

const GasTask55FinalUi: Page = () => (
  <div style={page}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Eyebrow color={gasTeal}>PART 4 · GAS 排班系統</Eyebrow>
      <Eyebrow color={taskColor}>操作手冊 · P.46</Eyebrow>
    </div>
    <PageHeading maxWidth={1650} marginTop={16}>任務55：介面優化</PageHeading>
    <div style={{ fontSize: 27, fontWeight: 800, color: gasTeal, marginTop: 6 }}>① 換上深色主題、液態玻璃效果，整體介面更完整、更像一套正式上線的系統</div>
    <VbaStepImage src={gasTask55FinalUi} alt="介面優化後的深色主題排班系統，月班表畫面" />
    <PageFooter />
  </div>
);

// ─── Page 57 — Closing ──────────────────────────────────────────────────────────
const Closing: Page = () => (
  <div style={{ ...page, justifyContent: 'center' }}>
    <GridTexture />
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 1600 }}>
      <Eyebrow color={design.palette.accent}>小結</Eyebrow>
      <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 88, fontWeight: 900, lineHeight: 1.1, margin: 0 }}>
        從排班到實發薪資，一套完整系統
      </h1>
      <p style={{ fontSize: 32, color: muted, lineHeight: 1.5, maxWidth: 1500, margin: 0 }}>
        排班表把「誰、何時、上什麼班」變成公式與條件式格式；薪資系統再把排班明細，一路串成本薪、獎金、加班費、勞健保、請假扣薪，直到實發薪資——每一步都有 AI 陪你把 Prompt 講清楚。
      </p>
      <div style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
        <SheetChip color={sheetColor.settings} label="排班設定" />
        <SheetChip color={sheetColor.staff} label="員工主檔" />
        <SheetChip color={sheetColor.leave} label="休假申請" />
        <SheetChip color={sheetColor.schedule} label="排班表" />
        <SheetChip color={sheetColor.monthly} label="月班表" />
        <SheetChip color={formulaBlue} label="薪資系統" />
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
  Part1SectionTitle,
  WhyModule1,
  WhyModule2,
  Elements,
  Constraints,
  CaseIntro,
  ShiftTimeline,
  BusAnalogy,
  StaffingLimits,
  WorkHoursTable,
  AntiErrorNeeds,
  Part2SectionTitle,
  Task1EmployeeSetup,
  Task1SettingsDropdown,
  EmployeeDataTable,
  Task2LeaveSetup,
  LeaveDataTable,
  Task3ScheduleSetup,
  Task3ShiftRef,
  Task6TryManual,
  Task7Weekday,
  Task5CheckFormula,
  Task6RulesPart1,
  Task6RulesPart2,
  Task7SkillResult,
  Task8DailyCheck,
  Task9MonthlyWhy,
  Task9MonthlyExample,
  Task13ProxyScenarios,
  Task13LeaveFields,
  Task14CandidateSetup,
  Task14CandidateRules,
  OvertimeDetail,
  OvertimeCheck,
  HoursSummary,
  HoursSummaryComplete,
  Part3SectionTitle,
  Part2Logic,
  Part2OurCase,
  SalarySetup,
  SalaryDetail,
  FullAttendanceExamples,
  FullAttendanceRounding,
  BonusDetailSetup,
  PerformanceBonusIntro,
  BonusInputTable,
  VbaStep1,
  VbaStep2,
  VbaStep3,
  VbaBackgroundSafety,
  VbaStep5,
  VbaStep6ScheduleFields,
  VbaStep4,
  VbaWriteBack,
  BonusFormulaLink,
  BonusDetailExpandTable,
  OvertimeCalculationFormula,
  SalaryPrincipleMorePayLessDeduct2,
  OvertimeThreeFactors,
  OvertimeRateTable,
  OvertimeExamples,
  OvertimeBaseFormula,
  OvertimeRateSource,
  SalaryFormulaLink,
  OvertimeToSalaryLink,
  SalaryGrossPayFormula,
  InsuranceRules,
  InsuranceExample,
  SalaryPrincipleMorePayLessDeduct,
  LeaveDeductRules,
  LeaveDeductFormulaLogic,
  InsuranceAmountsToSalaryDetail,
  LeaveDeductToSalaryDetail,
  SalaryDeductionsNetPayFormula,
  Part4SectionTitle,
  GasSystemOverview,
  GasTask46Skeleton,
  GasTask47StaffList,
  GasTask48IdentityPicker,
  GasTask48Welcome,
  GasTask49SidebarSkeleton,
  GasTask50MonthlySchedule,
  GasTask51LeaveList,
  GasTask52AddButton,
  GasTask52FormEmpty,
  GasTask52FormFilled,
  GasTask52Result,
  GasTask52SheetVerify,
  GasTask53ShiftMaintenance,
  GasTask54ExportButtons,
  GasTask54GoogleCalendar,
  GasTask54Iphone,
  GasTask55FinalUi,
  Closing,
] satisfies Page[];
