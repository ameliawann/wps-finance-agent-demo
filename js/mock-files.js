/* 文件列表 mock 数据。改这里：增删行、改文件名/时间/大小。
   type 取值：wps(文字/docx) | et(表格/xlsx) | wpp(演示/pptx) | pdf | md(按 wps 打开) */
window.MOCK_FILES = [
  { name: 'WPS助手·技能·连接器一期定位稿.docx', type: 'wps', location: '我的云文档', creator: '薛伟成', modified: '2026-08-19', size: '231 KB' },
  { name: 'WPS Cowork 二期｜助手与连接器思路.docx', type: 'wps', location: '我的云文档', creator: '熊轲', modified: '昨天 22:56', size: '50 KB' },
  { name: '《如何做好战略规划与执行》-手册.docx', type: 'wps', location: '团队文档', creator: '刘达开', modified: '昨天 14:14', size: '87.1 MB' },
  { name: '【文字】【独立服务】生成效果竞品评测.xlsx', type: 'et', location: '我的云文档', creator: '唐玉珊', modified: '2026-08-21', size: '15.8 MB' },
  { name: '金山集团战略规划练习模板.pptx', type: 'wpp', location: '我的云文档', creator: '韦伟', modified: '2026-08-22', size: '1.5 MB' },
  { name: '金山办公战略规划练习.md', type: 'md', location: '我的云文档', creator: '韦伟', modified: '2026-08-22', size: '10 KB' },
  { name: '金山集团战略规划练习模板 0822.docx', type: 'wps', location: '我的云文档', creator: '我', modified: '2026-08-22', size: '236 KB' },
  { name: '2026 AI文字润色是输出的内容不对.pdf', type: 'pdf', location: '我的云文档', creator: '宗坤鹏', modified: '2026-08-21', size: '1.2 MB' },
  { name: '2026文档产研测周例会.docx', type: 'wps', location: '团队文档', creator: '王中秋', modified: '2026-08-21', size: '1.92 GB' },
  { name: '网关权益白名单下线通知!!!.docx', type: 'wps', location: '我的云文档', creator: '张麒', modified: '2026-08-21', size: '28 KB' },
  { name: '测试集｜批量制作.xlsx', type: 'et', location: '我的云文档', creator: '叶雅方', modified: '昨天 18:18', size: '2.7 MB' },
];

/* 共享 mock 内容：主页打开的 xlsx 预置数据 = 「数据清洗」剧本的填充数据（一份含重复行的活动报名名单），
   editors.js 预置与 agent-scripts.js 的 action 都引用这里，保持单一事实源（改这里：换数据只改这一处）。 */
window.MOCK_SEED = {
  et: {
    header: ['姓名', '手机号', '部门', '报名时间'],
    rows: [
      ['陈晓', '13812340001', '市场部', '08-01 10:24'],
      ['刘洋', '13812340002', '研发部', '08-01 11:05'],
      ['张倩', '13812340003', '市场部', '08-02 09:12'],
      ['王强', '13812340004', '财务部', '08-02 14:30'],
      ['刘洋', '13812340002', '研发部', '08-01 11:05'],   // 重复：与第 3 行一致
      ['李静', '13812340005', '人事部', '08-03 08:47'],
      ['赵磊', '13812340006', '研发部', '08-03 16:20'],
      ['孙丽', '13812340007', '市场部', '08-04 10:02'],
      ['张倩', '13812340003', '市场部', '08-02 09:12'],   // 重复：与第 4 行一致
      ['周杰', '13812340008', '财务部', '08-04 15:44'],
      ['吴敏', '13812340009', '人事部', '08-05 09:31'],
      ['赵磊', '13812340006', '研发部', '08-03 16:20'],   // 重复：与第 8 行一致
      ['郑爽', '13812340010', '市场部', '08-05 17:08'],
    ],
    dupRows: [6, 10, 13], // 重复行所在的表格行号（含表头行）
  },
  /* 10 月「画布内即时圈选编辑」演示：两个现有 xlsx 各自带一份可识别的数据。
     - 竞品评测：主要演示区选单元格入口
     - 批量制作：额外带一个可选中的图表对象，演示图表悬浮菜单入口 */
  etFiles: {
    '【文字】【独立服务】生成效果竞品评测.xlsx': {
      header: ['方案', '指令理解', '内容质量', '格式还原', '平均耗时'],
      rows: [
        ['WPS AI', '92%', '91%', '94%', '18s'],
        ['WorkBuddy', '89%', '90%', '86%', '22s'],
        ['Microsoft Copilot', '87%', '88%', '91%', '28s'],
        ['Google Workspace', '84%', '86%', '83%', '25s'],
        ['Notion AI', '82%', '85%', '72%', '16s'],
      ],
    },
    '测试集｜批量制作.xlsx': {
      header: ['任务类型', '用例数', '已通过', '待复核', '通过率'],
      rows: [
        ['文字生成', '40', '36', '4', '90%'],
        ['表格处理', '32', '29', '3', '91%'],
        ['演示制作', '24', '20', '4', '83%'],
        ['PDF 处理', '18', '16', '2', '89%'],
      ],
      chart: {
        id: 'chart-pass-rate', name: '各任务类型通过率', kind: 'bar', dataRange: 'A1:E5',
        series: [
          { label: '文字生成', value: 90 },
          { label: '表格处理', value: 91 },
          { label: '演示制作', value: 83 },
          { label: 'PDF 处理', value: 89 },
        ],
      },
    },
  },
};

/* 文件类型 → 彩色产品图标（kdicon-pro *_format）+ 打开时按哪个组件处理（md 走 wps） */
window.FILE_TYPES = {
  wps: { icon: 'wps_format',      openAs: 'wps' },
  et:  { icon: 'et_format',       openAs: 'et'  },
  wpp: { icon: 'wpp_format',      openAs: 'wpp' },
  pdf: { icon: 'pdf_format',      openAs: 'pdf' },
  md:  { icon: 'markdown_format', openAs: 'wps' },
};
