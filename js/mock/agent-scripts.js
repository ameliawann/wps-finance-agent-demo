/* agent-scripts.js — 灵犀侧边栏 mock 数据：欢迎区 + 对话剧本。
   改这里：
   - welcome / cards：各组件欢迎语和「你可以试试」推荐卡片（icon 用 icons.js 注册名）
   - scripts：剧本列表，match 是关键词（用户输入包含任一关键词即命中），steps 是播放步骤
   - fallback：未命中任何关键词时的兜底剧本
   步骤类型：thinking(思考块) / tool_call(工具执行, toolName 仅展示用) / understanding(中间正文) / done(最终回复，必须最后一条)
   tool_call 可带 action 字段：步骤完成（shimmer 停留结束）时由 editor-api.js 执行，画布真实变化。
   action 格式见 editor-api.js 头注释（wps.insertBlocks / et.fillRange / et.highlightRows / wpp.setSlides）。
   注意：文案要与 action 实际效果一致（说建了几行就建几行，说标几行就标几行）。 */
(function () {
  'use strict';

  /* 「数据清洗」用的含重复行报名名单（与主页打开的 xlsx 预置数据同源，见 mock-files.js） */
  var SEED = window.MOCK_SEED.et;

  /* 「快速建表」员工信息表数据（改这里：换数据只改这一段） */
  var EMP_HEADER = ['姓名', '部门', '入职日期', '绩效'];
  var EMP_ROWS = [
    ['王建国', '研发部', '2021-03-15', 'A'],
    ['李秀英', '市场部', '2020-07-02', 'B+'],
    ['张志强', '研发部', '2022-11-20', 'A+'],
    ['刘丽华', '人事部', '2019-05-30', 'B'],
    ['陈明',   '财务部', '2023-02-14', 'B+'],
    ['杨柳',   '市场部', '2021-09-08', 'A'],
    ['赵国庆', '研发部', '2020-12-01', 'B'],
    ['孙晓梅', '产品部', '2022-06-18', 'A'],
    ['周文博', '产品部', '2023-08-22', 'B+'],
    ['吴秀兰', '财务部', '2018-10-09', 'A'],
    ['郑浩然', '研发部', '2024-01-15', 'B'],
    ['冯雪',   '市场部', '2021-04-27', 'A-'],
    ['褚天宇', '人事部', '2022-03-11', 'B+'],
    ['卫东',   '研发部', '2023-05-06', 'A'],
    ['蒋梦琪', '产品部', '2020-08-19', 'B+'],
    ['沈嘉怡', '市场部', '2024-03-25', 'B'],
    ['韩子墨', '研发部', '2019-11-13', 'A+'],
    ['曹语嫣', '财务部', '2022-09-30', 'A-'],
  ];

  window.AGENT_SCRIPTS = {
    /* ── 文字（wps） ── */
    wps: {
      welcome: '灵犀已就绪，想写点什么？',
      cards: [
        { icon: 'doc',           title: '写一份课程教案', desc: '生成完整教学设计与课堂活动' },
        { icon: 'calendar_24',   title: '写一份活动策划', desc: '自动生成可落地的活动方案' },
        { icon: 'flow_chart_format', title: '写一份分析报告', desc: '整理现状、SWOT 和结论建议' },
        { icon: 'note',          title: '写一份合同', desc: '自动生成规范合同初稿' },
      ],
      scripts: [
        {
          match: ['教案', '课程', '教学'],
          steps: [
            { type: 'thinking', content: '用户需要一份课程教案。先看一下当前文档是否已有内容，再按「教学目标—重难点—教学过程—板书设计」的标准结构来生成。' },
            { type: 'tool_call', toolName: 'read_doc', content: '读取当前文档大纲' },
            { type: 'tool_call', toolName: 'search_template', content: '检索教学设计模板' },
            { type: 'understanding', content: '我将以初中语文《背影》第一课时为例，按「教学目标—重难点—教学过程—板书设计」的结构生成完整教案，并直接插入文档正文。' },
            { type: 'tool_call', toolName: 'write_doc', content: '生成教学目标与重难点',
              action: { type: 'wps.insertBlocks', blocks: [
                { h: '《背影》教学设计' },
                { p: '年级：初二语文 · 课时：1 课时（45 分钟）' },
                { h: '一、教学目标' },
                { p: '1. 知识与能力：积累「蹒跚、颓唐、琐屑」等重点字词，理清文章以「背影」为线索的叙事结构。' },
                { p: '2. 过程与方法：通过圈点批注与朗读品味，学习抓住细节描写刻画人物的方法。' },
                { p: '3. 情感态度与价值观：体会父子之间深沉含蓄的爱，联系生活感悟亲情。' },
                { h: '二、教学重难点' },
                { p: '重点：赏析父亲攀爬月台买橘子的细节描写。难点：理解「我」的情感变化与泪眼中的背影。' },
              ] } },
            { type: 'tool_call', toolName: 'write_doc', content: '生成教学过程（导入 / 新授 / 巩固 / 小结）与板书设计',
              action: { type: 'wps.insertBlocks', blocks: [
                { h: '三、教学过程' },
                { p: '1. 导入（5 分钟）：播放歌曲《父亲》片段，请学生分享与父亲相处的一个细节，引出课题。' },
                { p: '2. 整体感知（10 分钟）：默读课文，梳理四次写「背影」的段落，明确详写与略写。' },
                { p: '3. 精读赏析（20 分钟）：聚焦第六段，圈画「攀、缩、倾」等动词，分组讨论细节描写的表达效果。' },
                { p: '4. 小结作业（10 分钟）：总结以细节传情的写法；课后以「父亲的____」为题写一段 200 字片段。' },
                { h: '四、板书设计' },
                { p: '背影（线索）—— 点题 · 刻画 · 惜别 · 再现｜父爱深沉，儿子感念。' },
              ] } },
            { type: 'done', content: '教案已完成并插入文档正文：共 4 个部分、15 个段落，教学过程按 45 分钟课时分配了各环节时间，板书设计附在文末。如需换一篇课文或调整年级，直接告诉我即可。' },
          ],
        },
        {
          match: ['活动策划', '活动方案', '活动'],
          steps: [
            { type: 'thinking', content: '用户要一份活动策划。活动方案通常包含：活动背景、目标、时间地点、流程安排、预算和分工。先确认文档上下文再生成。' },
            { type: 'tool_call', toolName: 'read_doc', content: '读取当前文档大纲' },
            { type: 'understanding', content: '我将生成一份「公司周年庆活动策划」初稿，覆盖背景、目标、时间地点、流程、预算分工五个模块，并直接写入文档。' },
            { type: 'tool_call', toolName: 'write_doc', content: '生成活动背景与目标',
              action: { type: 'wps.insertBlocks', blocks: [
                { h: '公司周年庆活动策划方案' },
                { h: '一、活动背景' },
                { p: '2026 年 10 月公司成立满 10 周年，拟举办周年庆典，答谢员工与客户，集中展示发展成果。' },
                { h: '二、活动目标' },
                { p: '1. 增强员工凝聚力与归属感；2. 深化客户关系，传递品牌价值；3. 对外释放公司战略升级信号。' },
              ] } },
            { type: 'tool_call', toolName: 'write_doc', content: '生成流程安排与预算分工',
              action: { type: 'wps.insertBlocks', blocks: [
                { h: '三、时间与地点' },
                { p: '时间：2026 年 10 月 18 日 14:00–21:00；地点：市国际会议中心三层宴会厅。' },
                { h: '四、活动流程' },
                { p: '14:00 签到入场 → 15:00 开场致辞 → 16:00 十周年回顾影片 → 17:00 颁奖典礼 → 18:30 晚宴 → 20:30 抽奖与闭幕。' },
                { h: '五、预算与分工' },
                { p: '总预算 28 万元（场地 8 万 / 餐饮 10 万 / 物料 4 万 / 演出 4 万 / 机动 2 万）；行政部统筹，市场部负责邀约，人事部负责内部组织。' },
              ] } },
            { type: 'done', content: '周年庆活动策划已生成并写入文档：共 5 个模块、11 个段落，预算按 200 人规模估算。你可以让我调整预算口径，或补充风险评估和应急预案部分。' },
          ],
        },
      ],
      fallback: {
        steps: [
          { type: 'thinking', content: '理解用户的输入，先分析当前文档上下文，判断可以怎样协助。' },
          { type: 'done', content: '请补充需要处理的数据范围和期望结果，也可以选择「你可以试试」中的任务开始处理。' },
        ],
      },
    },

    /* ── 演示（wpp） ── */
    wpp: {
      welcome: '准备一场精彩的演示',
      cards: [
        { icon: 'slide_24',    title: '生成 PPT', desc: '输入主题生成 PPT，智能排版' },
        { icon: 'refresh',     title: '批量修改', desc: '一次更新所有页面' },
        { icon: 'flow_chart_format', title: '调整图表', desc: '柱状折线随心切换' },
      ],
      scripts: [
        {
          match: ['ppt', 'PPT', '演示', '幻灯片', '主题'],
          steps: [
            { type: 'thinking', content: '用户想生成一份 PPT。先解析演示文稿的主题和现有页面，再规划大纲、逐页生成内容并套用版式。' },
            { type: 'tool_call', toolName: 'read_slides', content: '解析演示文稿主题' },
            { type: 'understanding', content: '当前只有 1 页空白演示。我将围绕「新能源汽车行业分析」生成 5 页结构：封面、目录、行业概览、趋势洞察、总结建议。' },
            { type: 'tool_call', toolName: 'gen_outline', content: '生成 5 页内容大纲' },
            { type: 'tool_call', toolName: 'gen_slides', content: '逐页生成正文与要点',
              action: { type: 'wpp.setSlides', slides: [
                { title: '新能源汽车行业分析', subtitle: '2026 年市场洞察报告 · 战略发展部' },
                { title: '目录', subtitle: '行业概览 / 竞争格局 / 趋势洞察 / 总结建议' },
                { title: '行业概览', subtitle: '2026 年上半年销量同比增长 32%，渗透率突破 45%' },
                { title: '趋势洞察', subtitle: '智能化成为竞争焦点，出海打开第二增长曲线' },
                { title: '总结与建议', subtitle: '聚焦智能座舱赛道，把握出口窗口期' },
              ] } },
            { type: 'tool_call', toolName: 'apply_layout', content: '套用主题版式并智能排版' },
            { type: 'done', content: 'PPT 已生成完毕：共 5 页，已切到第 1 页，左侧缩略图可预览全部页面，整体套用了商务主题配色。你可以继续让我调整某一页，或换一套模板风格。' },
          ],
        },
        {
          match: ['批量', '所有页面', '统一', '修改'],
          steps: [
            { type: 'thinking', content: '用户想批量修改全部页面。先读取所有幻灯片的版式和样式，找出不统一的地方，再一次性应用修改。' },
            { type: 'tool_call', toolName: 'read_slides', content: '读取全部幻灯片版式' },
            { type: 'understanding', content: '检测到各页存在 3 种字体和 2 套配色。我将统一为「微软雅黑」字体和主题配色，并保持各页布局不变。' },
            { type: 'tool_call', toolName: 'batch_font', content: '统一全篇字体为微软雅黑' },
            { type: 'tool_call', toolName: 'batch_color', content: '统一配色为主题色' },
            { type: 'done', content: '已完成批量修改：全篇字体统一为微软雅黑，配色统一到当前主题，文本框样式已对齐。页面布局和内容均未改动，你可以逐页检查效果。' },
          ],
        },
      ],
      fallback: {
        steps: [
          { type: 'thinking', content: '理解用户的输入，先分析当前演示文稿的内容和结构。' },
          { type: 'done', content: '请补充需要处理的数据范围和期望结果，也可以选择「你可以试试」中的任务开始处理。' },
        ],
      },
    },

    /* ── 表格（et） ── */
    et: {
      welcome: '从数字中洞察',
      cards: [
        { icon: 'et_format', title: '快速建表', desc: '帮我创建表格并录入数据' },
        { icon: 'magnifier', title: '数据清洗', desc: '帮我识别并标记表格中的重复数据' },
        { icon: 'ai',        title: '计算分析', desc: '帮我计算核心指标并生成总结' },
        { icon: 'flow_chart_format', title: '可视化', desc: '帮我生成图表展示关键指标的趋势' },
      ],
      scripts: [
        {
          match: ['建表', '创建表格', '新建表', '录入'],
          steps: [
            { type: 'thinking', content: '用户想快速建表。当前工作表看起来是空的，我先确认数据区域，再创建表结构并录入示例数据。' },
            { type: 'tool_call', toolName: 'analyze_range', content: '分析当前工作表数据区域' },
            { type: 'understanding', content: '数据区域为空。我将创建一张「员工信息表」，包含姓名、部门、入职日期、绩效 4 个字段，并录入 18 条示例数据。' },
            { type: 'tool_call', toolName: 'create_header', content: '创建表头（姓名 / 部门 / 入职日期 / 绩效）',
              action: { type: 'et.fillRange', anchor: 'A1', rows: [EMP_HEADER] } },
            { type: 'tool_call', toolName: 'fill_data', content: '录入 18 行示例数据',
              action: { type: 'et.fillRange', anchor: 'A2', rows: EMP_ROWS } },
            { type: 'tool_call', toolName: 'format_cells', content: '设置表头底色与加粗',
              action: { type: 'et.highlightRows', rows: [1], color: 'header' } },
            { type: 'done', content: '表格已建好：A1:D19 共 4 个字段、18 条员工数据，表头已加品牌色底色。你可以直接双击单元格改数据，或让我继续做汇总分析。' },
          ],
        },
        {
          match: ['清洗这块', '清洗这一', '清洗该列', '清洗该行', '清洗整张表'],
          steps: [
            { type: 'thinking', content: '用户已经在画布中圈定了处理范围。我先读取选区结构与数据类型，再检查空值、重复值和格式异常。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取画布中锚定的选区数据' },
            { type: 'tool_call', toolName: 'inspect_data_quality', content: '检查空值、重复值与格式一致性' },
            { type: 'understanding', content: '检查完成：选区字段结构清晰，主要需要统一文本格式并复核少量异常项。' },
            { type: 'done', content: '已完成当前选区的数据清洗。处理范围保留在画布上，本轮读取范围与结果均已记录在侧边栏中。' },
          ],
        },
        {
          match: ['清洗', '重复', '去重'],
          steps: [
            { type: 'thinking', content: '用户要做数据清洗，重点是找出重复数据。先扫描数据区域，按整行比对找出重复行，再用底色标记出来。' },
            /* 当前表为空时先把含重复行的报名名单读进来（onlyIfEmpty：已有数据则跳过，直接标记） */
            { type: 'tool_call', toolName: 'read_range', content: '读取数据区域（A1:D14）',
              action: { type: 'et.fillRange', anchor: 'A1', rows: [SEED.header].concat(SEED.rows), onlyIfEmpty: true } },
            { type: 'tool_call', toolName: 'find_duplicates', content: '按整行比对识别重复记录' },
            { type: 'understanding', content: '扫描完成：13 行报名记录中发现 3 行完全重复（第 6、10、13 行，均与前面的记录重复）。' },
            { type: 'tool_call', toolName: 'mark_cells', content: '将重复行标记为浅红底色',
              action: { type: 'et.highlightRows', rows: SEED.dupRows, color: 'dup' } },
            { type: 'done', content: '数据清洗完成：已从 13 行数据中标记出 3 行重复记录（浅红底色），数据本身未删除，方便你人工核对。确认无误后可以让我「删除重复行」，一键去重。' },
          ],
        },
        {
          match: ['美化图表样式', '调整图表内容', '图表样式'],
          steps: [
            { type: 'thinking', content: '用户正在针对画布中的图表提出要求。我先读取图表类型、数据源与当前样式，再给出调整结果。' },
            { type: 'tool_call', toolName: 'read_chart', content: '读取图表「各任务类型通过率」与数据源 A1:E5' },
            { type: 'understanding', content: '这是一个对比四类任务通过率的柱形图。数据差异较小，适合突出数值标签并降低装饰干扰。' },
            { type: 'tool_call', toolName: 'update_chart', content: '优化柱形配色、标签与图表留白' },
            { type: 'done', content: '图表调整完成：已统一柱形配色、保留数值标签并优化标题与留白。画布仍锚定当前图表，你可以继续补充要求。' },
          ],
        },
        {
          match: ['按条件标色', '按条件标注颜色'],
          steps: [
            { type: 'thinking', content: '用户希望对当前选区按条件标色。我先读取选区中的数值分布，再识别适合强调的范围。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取当前选区与字段类型' },
            { type: 'tool_call', toolName: 'apply_conditional_format', content: '为低于目标值的数据添加浅色提醒' },
            { type: 'done', content: '已按当前数据分布完成条件标色，并保留原始数值。选区范围和本轮操作已记录在任务上下文中。' },
          ],
        },
        {
          match: ['分析整张表'],
          steps: [
            { type: 'thinking', content: '用户希望分析整张表。我先确认数据区域与字段含义，再汇总关键指标。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取整表有效数据区域' },
            { type: 'understanding', content: '当前数据包含任务类型、用例数量、通过数量、待复核数量和通过率，可从规模与质量两个维度比较。' },
            { type: 'done', content: '整表分析完成：各任务类型通过率整体在 83%–91% 之间，表格处理最高，演示制作的待复核占比相对更高，建议优先复核该类用例。' },
          ],
        },
      ],
      fallback: {
        steps: [
          { type: 'thinking', content: '理解用户的输入，先分析当前工作表的数据区域和内容结构。' },
          { type: 'done', content: '请补充需要处理的数据范围和期望结果，也可以选择「你可以试试」中的任务开始处理。' },
        ],
      },
    },

    /* ── PDF（pdf） ── */
    pdf: {
      welcome: '思绪流淌于纸张之上',
      cards: [
        { icon: 'doc',       title: '全文总结', desc: '深度解析文档，提炼核心内容' },
        { icon: 'ai',        title: '全文翻译', desc: '多语言精准翻译，保持原文排版' },
        { icon: 'refresh',   title: '文档转换', desc: '多格式无损转换，适配不同场景' },
        { icon: 'download',  title: '内容提取', desc: '提取文档内容，高效二次处理' },
      ],
      scripts: [
        {
          match: ['总结', '摘要', '概括'],
          steps: [
            { type: 'thinking', content: '用户想要全文总结。先解析文档的目录结构，再逐章提取关键段落，最后归纳成核心观点。' },
            { type: 'tool_call', toolName: 'parse_toc', content: '解析文档目录结构' },
            { type: 'tool_call', toolName: 'extract_text', content: '逐章提取关键段落' },
            { type: 'understanding', content: '文档共 12 页、3 个章节，是一份行业研究报告。我将按章节提炼核心观点。' },
            { type: 'tool_call', toolName: 'summarize', content: '归纳核心观点与结论' },
            { type: 'done', content: '全文总结如下：报告指出行业整体增速放缓，但细分赛道仍有结构性机会；第二章对比了三家头部公司的策略差异；结论建议关注下沉市场与出海两条主线。需要我把总结导出为一份新文档吗？' },
          ],
        },
        {
          match: ['翻译', '英文', '外语'],
          steps: [
            { type: 'thinking', content: '用户要全文翻译。先识别文档语言和内容结构，再分段翻译，注意保持原有排版不变。' },
            { type: 'tool_call', toolName: 'parse_toc', content: '解析文档目录结构' },
            { type: 'tool_call', toolName: 'detect_lang', content: '识别文档语言（中文 → 英文）' },
            { type: 'understanding', content: '文档为中文，共 12 页。我将翻译为英文，并完整保留原有的标题层级、表格和页眉页脚排版。' },
            { type: 'tool_call', toolName: 'translate', content: '分段翻译全文（保持排版）' },
            { type: 'done', content: '全文翻译已完成：12 页内容全部译为英文，标题层级、表格和页眉页脚均保持原样，专业术语按行业惯用译法处理。你可以让我把译文导出为新的 PDF 文件。' },
          ],
        },
      ],
      fallback: {
        steps: [
          { type: 'thinking', content: '理解用户的输入，先解析当前 PDF 的内容和结构。' },
          { type: 'done', content: '请补充需要处理的数据范围和期望结果，也可以选择「你可以试试」中的任务开始处理。' },
        ],
      },
    },
  };
})();
