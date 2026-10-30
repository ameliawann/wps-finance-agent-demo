/* lui-scripts.js — 文内 LUI（lui.js）mock 剧本，本期只有 wps 文字组件。
   步骤结构复用 agent-scripts.js 的格式：
     thinking(思考块) / tool_call(工具执行，可带 action) / understanding(中间正文) / done(最终回复，必须最后一条)
   新增步骤类型：
     ask(澄清卡片) —— { type:'ask', content:'标题', options:[{ label, desc, recommend?, sidebar?, steps? }] }
       渲染为过程面板内的独立表单卡片（序号选项 + 推荐 tag + 自定义输入 + 跳过/确认）：
       确认=按选中项继续；跳过=走 recommend 推荐项；自定义输入=把文本当新指令重新发起。
       选项带 sidebar 字段 → 转灵犀侧边栏；带 steps 字段 → 文内继续播放该分支步骤。
   剧本级字段：
     deliver:'sidebar' —— 该剧本不改动文内（只产出内容），lui.js 直接拉开侧边栏承载，文内不出过程面板。
   占位符：步骤 content 里的 {sel} 播放时替换为当前选中文本（截断 12 字）。
   action 说明：
     - { type:'wps.rewriteRange', text } 省略 blockIdx/start/end 时由 lui.js 注入当前选区上下文；
       续写这类「插入」场景用 insertAt:'end' 表示在选区末尾插入（不改原文）。
     - { type:'wps.annotate', text } 文内批注（不改文本，红色高亮+右侧批注栏）；选区省略时批注整段。
     - { type:'wps.styleTable', style:'three-line'|'zebra' } / { type:'wps.tableAddRow', cells:[...] }
       内嵌表格动作，blockIdx 省略时注入当前表格上下文。
     - 文案要与 action 实际效果一致（说改了什么就改什么）。
   改这里：match 关键词、步骤文案、action 内容。 */
(function () {
  'use strict';

  window.LUI_SCRIPTS = {
    wps: {
      scripts: [
        /* ── 润色：改写选中文本（含子推荐 更正式/更口语/精简） ── */
        {
          match: ['润色', '更正式', '更口语', '精简', '改写', '帮我改'],
          steps: [
            { type: 'thinking', content: '用户想润色选中的这段文字：「{sel}」。先读取选区内容，分析语气和表达上的问题，再给出更通顺的改写。' },
            { type: 'tool_call', toolName: 'read_selection', content: '读取选中文本' },
            { type: 'understanding', content: '原文表述略松散，个别用语不统一。我将保留原意，把句子收紧并统一为合同文风。' },
            { type: 'tool_call', toolName: 'polish_text', content: '改写选中文本',
              action: { type: 'wps.rewriteRange', text: '本协议由甲乙双方本着平等互利、诚实信用的原则共同签署，旨在明确办公系统智能化改造项目中双方的权利与义务，确保项目按期保质交付。' } },
            { type: 'tool_call', toolName: 'check_text', content: '校验改写结果（语意一致性检查）' },
            { type: 'done', content: '已完成润色，改动处已用紫色标出。满意请点「完成」；想换种风格可点「补充要求」继续调整，或点「撤销」恢复原样。' },
          ],
        },
        /* ── 翻译：选中文本译成英文（含子推荐 译成英文/译成中文） ── */
        {
          match: ['翻译', '译成英文', '译成中文', '英文'],
          steps: [
            { type: 'thinking', content: '用户想翻译选中的内容：「{sel}」。先识别源语言，再按目标语言翻译，注意保持法律文本的严谨语气。' },
            { type: 'tool_call', toolName: 'detect_lang', content: '识别选中文本语言（中文 → 英文）' },
            { type: 'tool_call', toolName: 'translate', content: '翻译并替换选中文本',
              action: { type: 'wps.rewriteRange', text: 'This Agreement is jointly executed by Party A and Party B on the principles of equality, mutual benefit and good faith, defining the rights and obligations of both parties in the office-system intelligentization project.' } },
            { type: 'done', content: '已将选中文本翻译为英文并原位替换（紫色高亮）。如需译回中文或调整语气，点「补充要求」告诉我即可。' },
          ],
        },
        /* ── 续写：在选区末尾接着写一段 ── */
        {
          match: ['续写', '接着写', '继续写'],
          steps: [
            { type: 'thinking', content: '用户想基于「{sel}」续写。先理解这段协议条款的语气和结构，再顺着往下补一条，保持合同文风一致。' },
            { type: 'tool_call', toolName: 'read_selection', content: '读取选中文本与上下文' },
            { type: 'tool_call', toolName: 'write_doc', content: '在选区末尾续写一段',
              action: { type: 'wps.rewriteRange', insertAt: 'end', text: ' 任何一方违反本协议约定的，应承担相应违约责任；因不可抗力导致无法履行的，双方可协商变更或解除本协议。' } },
            { type: 'done', content: '已在选中内容末尾续写一段（紫色高亮）。点「完成」保留，点「撤销」回退，或「补充要求」换个方向继续写。' },
          ],
        },
        /* ── 美化表格·三线表（内嵌表格；点「美化表格」默认三线表） ── */
        {
          match: ['三线表', '美化表格', '美化'],
          steps: [
            { type: 'thinking', content: '用户想美化内嵌表格。三线表是合同/论文场景的经典样式：去掉竖线，只保留顶线、表头线和底线，顶底线加粗。' },
            { type: 'tool_call', toolName: 'read_table', content: '读取表格结构（3 列 × 4 行）' },
            { type: 'tool_call', toolName: 'style_table', content: '改成三线表（去竖线、上下粗线）',
              action: { type: 'wps.styleTable', style: 'three-line' } },
            { type: 'done', content: '已改成三线表，整张表格已用紫色标出。点「完成」保留，点「撤销」恢复原样式。' },
          ],
        },
        /* ── 美化表格·斑马纹 ── */
        {
          match: ['斑马纹'],
          steps: [
            { type: 'thinking', content: '用户想给内嵌表格填充斑马纹：隔行加浅色底，提升长表格的可读性。' },
            { type: 'tool_call', toolName: 'read_table', content: '读取表格结构（3 列 × 4 行）' },
            { type: 'tool_call', toolName: 'style_table', content: '填充斑马纹（隔行浅色底）',
              action: { type: 'wps.styleTable', style: 'zebra' } },
            { type: 'done', content: '已填充斑马纹，整张表格已用紫色标出。点「完成」保留，点「撤销」恢复原样式。' },
          ],
        },
        /* ── 填写表格：末尾补全一行 ── */
        {
          match: ['填写表格', '填表', '填写'],
          steps: [
            { type: 'thinking', content: '用户想让 AI 帮忙填写表格。先看现有行列结构，推断缺失字段，再按同样的格式补全一行。' },
            { type: 'tool_call', toolName: 'read_table', content: '读取表格现有行列' },
            { type: 'tool_call', toolName: 'fill_row', content: '按现有格式补全一行（签署人）',
              action: { type: 'wps.tableAddRow', cells: ['签署人', '王建国', '李秀英'] } },
            { type: 'done', content: '已在表格末尾补全一行（紫色高亮）。内容不准可点「撤销」，或「补充要求」告诉我正确的填写内容。' },
          ],
        },
        /* ── 图片场景：编辑图片 = 文内闭环假编辑（加品牌描边框，紫框高亮+决策条）；
           提取内容/解释 = deliver:'sidebar' 只产出内容不动文内，直接拉侧边栏承载 ── */
        {
          match: ['编辑图片'],
          steps: [
            { type: 'thinking', content: '用户想编辑选中的图片「{sel}」，将为图片添加描边并检查显示效果。' },
            { type: 'tool_call', toolName: 'edit_image', content: '编辑图片（添加品牌描边框）',
              action: { type: 'wps.styleImage', style: 'framed' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（图片样式检查）' },
            { type: 'done', content: '已为图片添加品牌描边框（紫色框线标出）。点「完成」保留，点「撤销」还原。' },
          ],
        },
        {
          match: ['提取内容'], deliver: 'sidebar',
          steps: [
            { type: 'thinking', content: '用户想提取图片中的内容。先对图片做 OCR 识别，再整理成结构化文字。' },
            { type: 'tool_call', toolName: 'ocr_image', content: '识别图片中的文字与结构' },
            { type: 'done', content: '图片内容提取结果：该架构示意图分三层——接入层（Web / 移动端）、服务层（账号 / 文档 / 协作服务）、数据层（对象存储 / 索引）。需要我把提取结果插入文档吗？' },
          ],
        },
        {
          match: ['解释'], deliver: 'sidebar',
          steps: [
            { type: 'thinking', content: '用户想让我解释这张图片。结合文档主题理解图片含义。' },
            { type: 'done', content: '这张「项目架构示意图」展示了办公系统智能化改造的整体架构：底层是数据存储，中间是账号与协作服务，顶层面向 Web 和移动端接入，与正文中「分两期交付」的实施节奏对应。' },
          ],
        },
        /* ── 审阅文档：带反问（交付结果表查看→转侧边栏 / 直接批注文内→文内闭环） ── */
        {
          match: ['审阅', '检查', '校对'],
          steps: [
            { type: 'thinking', content: '用户想快速审阅当前文档。先通读全文，找出错别字、表述不统一和格式问题，再确认用户希望的交付方式。' },
            { type: 'tool_call', toolName: 'read_doc', content: '通读全文（含 1 张表格、1 张图片）' },
            { type: 'tool_call', toolName: 'proofread', content: '检查错别字与表述一致性' },
            { type: 'understanding', content: '通读完成：发现 3 处可优化——1 处术语不统一、1 处称谓不统一、1 处标点全半角混用。' },
            { type: 'ask', content: '这份文档的审阅结果希望怎么给你？', options: [
              { label: '直接批注文内', desc: '批注直接写在文档里，边看边改', recommend: true, steps: [
                { type: 'tool_call', toolName: 'annotate_doc', content: '在文内标记批注（2 处）',
                  action: { type: 'wps.annotate', text: '建议统一为「WPS AI 编辑专项」，与专项正式名称保持一致；另外本段长句建议拆分。' } },
                /* 第二条批注：静态指向种子文档「项目总投资…」段的「120 万元」（blockIdx 5，依赖预置内容） */
                { type: 'tool_call', toolName: 'annotate_doc', content: '核对金额与付款条款',
                  action: { type: 'wps.annotate', blockIdx: 5, start: 5, end: 11,
                    text: '「120 万元」建议同时大写（壹佰贰拾万元整），付款比例建议与里程碑挂钩。' } },
                { type: 'done', content: '已在文内添加 2 条批注（红色下划线标记 + 右侧批注栏，点击可查看/切换）。点「完成」批注保留在文档中，点「撤销」还原。' },
              ] },
              { label: '交付结果表查看', desc: '整理成审阅结果表，在右侧灵犀侧边栏呈现', sidebar: '把刚才的审阅结果整理成结果表给我看' },
            ] },
          ],
        },
        /* ── 更新目录：目录块场景（chips 一级「更新目录」，二级「同步标题变化」「修正页码」） ── */
        {
          match: ['更新目录', '目录'],
          steps: [
            { type: 'thinking', content: '用户想更新目录。目录应与正文标题结构同步，先读标题再修正条目与页码。' },
            { type: 'tool_call', toolName: 'read_doc', content: '读取正文标题结构' },
            { type: 'tool_call', toolName: 'update_toc', content: '同步目录条目并修正页码',
              action: { type: 'wps.updateToc', entries: [
                { text: '一、项目概述', page: '1' },
                { text: '二、合作内容与双方信息', page: '1' },
                { text: '三、投资与付款方式', page: '2' },
                { text: '四、生效与文本', page: '2' },
              ] } },
            { type: 'done', content: '已更新目录：同步了标题变化并修正页码（目录整块紫色高亮）。点「完成」保留，点「撤销」还原。' },
          ],
        },
      ],
      /* 兜底：未命中任何剧本时纯对话回复（不动文档、不出决策条） */
      fallback: {
        steps: [
          { type: 'thinking', content: '理解用户的输入，结合当前选区/光标位置分析可以怎样协助。' },
          { type: 'done', content: '请补充希望修改的内容和目标，也可以选择输入框下方的润色、翻译、续写或快速审阅任务。' },
        ],
      },
    },

    /* ── 表格（et）：区选（cells 场景）注入 range/锚点；计算写入格/样式格按粒度记高亮 ── */
    et: {
      scripts: [
        {
          match: ['斑马纹'],
          steps: [
            { type: 'thinking', content: '用户想给选区填充斑马纹。先确认选区范围，再按「选区内隔行浅底」应用样式。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取选区范围' },
            { type: 'tool_call', toolName: 'style_range', content: '填充斑马纹（选区内隔行浅底）',
              action: { type: 'et.styleRange', style: 'zebra' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（样式应用范围检查）' },
            { type: 'done', content: '已为选区填充斑马纹：隔行浅底，改动格以紫框标出。点「完成」保留，点「撤销」还原。' },
          ],
        },
        {
          match: ['表头加粗'],
          steps: [
            { type: 'thinking', content: '用户想强化表头。将选区首行设为加粗 + 底色，其余行不动。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取选区范围' },
            { type: 'tool_call', toolName: 'style_range', content: '表头加粗（首行加粗 + 底色）',
              action: { type: 'et.styleRange', style: 'headerBold' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（样式应用范围检查）' },
            { type: 'done', content: '已完成表头加粗：选区首行加粗并加底色（紫框标出）。点「完成」保留，点「撤销」还原。' },
          ],
        },
        {
          match: ['美化表格', '美化'], // 区选「美化表格」默认 = 斑马纹
          steps: [
            { type: 'thinking', content: '用户想美化选区表格。默认先填充斑马纹提升可读性，也可以再让我改成表头加粗。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取选区范围' },
            { type: 'tool_call', toolName: 'style_range', content: '填充斑马纹（选区内隔行浅底）',
              action: { type: 'et.styleRange', style: 'zebra' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（样式应用范围检查）' },
            { type: 'done', content: '已为选区填充斑马纹（紫框标出改动格）。想要表头加粗可以点「补充要求」继续。' },
          ],
        },
        {
          match: ['填写表格', '填表', '填写'],
          steps: [
            { type: 'thinking', content: '用户想让 AI 帮忙填写选区。先看选区已有表头，按同样格式补全示例数据。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取选区已有内容' },
            { type: 'tool_call', toolName: 'fill_range', content: '按现有格式填写示例数据',
              action: { type: 'et.fillRange', rows: [
                ['张三', '138****1111', '已缴费'],
                ['李四', '139****2222', '未缴费'],
                ['王五', '137****3333', '已缴费'],
              ] } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（必填项完整性检查）' },
            { type: 'done', content: '已从选区左上角起填写 3 行示例数据。内容不准可点「撤销」，或「补充要求」告诉我正确数据。' },
          ],
        },
        {
          match: ['求和'],
          steps: [
            { type: 'thinking', content: '用户想对选区求和。先读取选区数值，求和后写入选区下方最近空单元格。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取选区数值' },
            { type: 'tool_call', toolName: 'calc', content: '求和并写入选区下方空格',
              action: { type: 'et.calcRange', op: 'sum' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（数值格式检查）' },
            { type: 'done', content: '求和完成，结果已写入选区下方空格（紫框标出）。点「完成」保留，点「撤销」还原。' },
          ],
        },
        {
          match: ['平均值', '均值'],
          steps: [
            { type: 'thinking', content: '用户想对选区求平均值。先读取选区数值，求均值后写入选区下方最近空单元格。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取选区数值' },
            { type: 'tool_call', toolName: 'calc', content: '求平均值并写入选区下方空格',
              action: { type: 'et.calcRange', op: 'avg' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（数值格式检查）' },
            { type: 'done', content: '平均值计算完成，结果已写入选区下方空格（紫框标出）。点「完成」保留，点「撤销」还原。' },
          ],
        },
        {
          match: ['计算'], // 「计算」默认 = 求和
          steps: [
            { type: 'thinking', content: '用户想对选区做计算。默认先求和，写入选区下方最近空单元格；也可以再让我改求平均值。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取选区数值' },
            { type: 'tool_call', toolName: 'calc', content: '求和并写入选区下方空格',
              action: { type: 'et.calcRange', op: 'sum' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（数值格式检查）' },
            { type: 'done', content: '求和完成，结果已写入选区下方空格（紫框标出）。想求平均值可点「补充要求」。' },
          ],
        },
        /* deliver:'sidebar' = 只产出内容不动文内，直接拉侧边栏承载（不出文内过程面板） */
        {
          match: ['分析数据', '分析'], deliver: 'sidebar',
          steps: [
            { type: 'thinking', content: '用户想分析选区数据。先读取选区，计算核心指标并给出结论。' },
            { type: 'tool_call', toolName: 'read_range', content: '读取选区数据' },
            { type: 'done', content: '选区数据分析：共 13 行记录，缴费率约 77%；「未缴费」集中在 3 条记录，建议优先跟进。需要我生成图表或导出结论吗？' },
          ],
        },
      ],
      fallback: {
        steps: [
          { type: 'thinking', content: '理解用户的输入，结合当前选区/光标位置分析可以怎样协助。' },
          { type: 'done', content: '请说明需要处理的区域和期望结果，也可以选择输入框下方的美化表格、填写表格或计算任务。' },
        ],
      },
    },

    /* ── 演示（wpp）：elements 场景注入选中元素 ids；page 场景 = 当页全部元素 ── */
    wpp: {
      scripts: [
        {
          match: ['改写'],
          steps: [
            { type: 'thinking', content: '用户想改写选中元素的文案：「{sel}」。先读选中元素，再把文案改得更凝练有力。' },
            { type: 'tool_call', toolName: 'read_elements', content: '读取选中元素内容' },
            { type: 'tool_call', toolName: 'rewrite_text', content: '改写元素文案',
              action: { type: 'wpp.updateText', text: '增长引擎：AI 渗透率突破 50%' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（文案长度与版式检查）' },
            { type: 'done', content: '已改写选中元素的文案（紫色外框标出）。点「完成」保留，点「撤销」还原。' },
          ],
        },
        {
          match: ['美化元素', '品牌强调', '美化选'],
          steps: [
            { type: 'thinking', content: '用户想美化选中元素。统一加品牌强调色（描边/字色），不动布局。' },
            { type: 'tool_call', toolName: 'read_elements', content: '读取选中元素类型' },
            { type: 'tool_call', toolName: 'style_elements', content: '应用品牌强调样式',
              action: { type: 'wpp.styleElements', style: 'accent' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（样式应用范围检查）' },
            { type: 'done', content: '已为选中元素应用品牌强调样式（紫色外框标出）。点「完成」保留，点「撤销」还原。' },
          ],
        },
        {
          match: ['美化本页', '美化这一页', '美化'],
          steps: [
            { type: 'thinking', content: '用户想美化当前页。先分析本页元素构成，统一套用品牌强调样式。' },
            { type: 'tool_call', toolName: 'read_slide', content: '读取本页元素构成' },
            { type: 'tool_call', toolName: 'style_elements', content: '本页元素统一品牌强调样式',
              action: { type: 'wpp.styleElements', style: 'accent' } },
            { type: 'tool_call', toolName: 'check_result', content: '校验结果（元素对齐与样式检查）' },
            { type: 'done', content: '已美化本页：所有元素统一品牌强调样式（紫色外框标出）。点「完成」保留，点「撤销」还原。' },
          ],
        },
        /* deliver:'sidebar' = 只产出内容不动文内，直接拉侧边栏承载 */
        {
          match: ['总结本页', '总结'], deliver: 'sidebar',
          steps: [
            { type: 'thinking', content: '用户想总结当前页。读取本页标题与正文，提炼核心观点。' },
            { type: 'tool_call', toolName: 'read_slide', content: '读取本页内容' },
            { type: 'done', content: '本页总结：核心信息是「增长目标与关键举措」——收入 +30%、MAU 破 6 亿、AI 渗透过半，配套成立专项组保障。需要我压缩成一句话金句吗？' },
          ],
        },
        {
          match: ['解释'], deliver: 'sidebar',
          steps: [
            { type: 'thinking', content: '用户想解释选中内容。结合当前页主题说明其含义与作用。' },
            { type: 'done', content: '选中内容是本页的核心要点区：柱状图展示 Q1–Q4 增长曲线，配合左侧四条举措说明增长路径，用于汇报时先讲结论再讲动作。' },
          ],
        },
      ],
      fallback: {
        steps: [
          { type: 'thinking', content: '理解用户的输入，结合当前选中元素/页面分析可以怎样协助。' },
          { type: 'done', content: '请说明需要修改的页面或元素，也可以选择输入框下方的改写、美化或总结任务。' },
        ],
      },
    },

    /* ── PDF（阅读器，不改文内：全部 deliver:'sidebar'，拉侧边栏承载） ── */
    pdf: {
      scripts: [
        {
          match: ['翻译'], deliver: 'sidebar',
          steps: [
            { type: 'thinking', content: '用户想翻译选中的内容。识别语言后翻译，保持术语一致。' },
            { type: 'tool_call', toolName: 'translate', content: '翻译选中内容（中文 → 英文）' },
            { type: 'done', content: '翻译完成：The office software market maintained steady growth in H1 2026, with AI feature penetration becoming the core driver of subscription revenue. 需要我把译文导出为文档吗？' },
          ],
        },
        {
          match: ['解释'], deliver: 'sidebar',
          steps: [
            { type: 'thinking', content: '用户想解释选中的内容。结合报告上下文说明。' },
            { type: 'done', content: '这段的意思是：AI 功能已从「卖点」变成「增长引擎」——头部厂商 AI 月活渗透超 35%，直接拉动订阅收入；「边写边改」的编辑链路交互正在取代对话框式交互。' },
          ],
        },
        {
          match: ['总结', '摘要'], deliver: 'sidebar',
          steps: [
            { type: 'thinking', content: '用户想要总结。提取选中范围/全文的核心观点。' },
            { type: 'tool_call', toolName: 'extract_text', content: '提取范围内的关键段落' },
            { type: 'done', content: '总结：国内办公软件市场上半年稳健增长（订阅收入 +18.6%），AI 渗透率成增长核心；竞争焦点正转向「指哪改哪」的 AI 编辑体验。' },
          ],
        },
        {
          match: ['提取文字', '提取'], deliver: 'sidebar',
          steps: [
            { type: 'thinking', content: '用户想提取框选区域的文字。对区域做 OCR 识别并整理。' },
            { type: 'tool_call', toolName: 'ocr_region', content: '识别区域文字' },
            { type: 'done', content: '区域文字提取完成（共 86 字）：从产品结构看，文字、表格、演示三大组件仍是用户使用时长最高的场景，合计占比超过七成。已可直接复制。' },
          ],
        },
      ],
      fallback: {
        steps: [
          { type: 'thinking', content: '理解用户的输入，结合当前选中内容分析可以怎样协助。' },
          { type: 'done', content: '请补充需要处理的内容，也可以选择翻译、解释、总结或提取文字任务，结果将在侧边栏中呈现。' },
        ],
      },
    },
  };
})();
