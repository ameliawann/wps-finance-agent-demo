window.RIBBONS=window.RIBBONS||{};
window.RIBBONS.pdf=`<header class="rb-ribbon" role="banner">
      <!-- [Tabs: line small] 功能区选项卡（KD Tabs：激活加粗+黑 ink；hover 灰 ink） -->
      <div class="kd-tabs kd-tabs-horizontal kd-tabs-line kd-tabs-small">
      <!-- 顶栏：快速访问 + Tabs 导航 + 右侧动作 -->
      <div class="rb-top">
        <div class="rb-top-left">
          <div class="rb-qat" aria-label="快速访问工具栏">
            <button type="button" class="rb-tool rb-qat-file" title="文件" aria-label="文件" aria-haspopup="menu" aria-expanded="false">
              <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="menu"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>菜单</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="file-menu-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="file-menu-line" d="M3 2.5H13" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="file-menu-line_2" d="M3 12.5H13" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="file-menu-line_3" d="M3 7.5H13" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
              <span class="rb-qat-file-label">文件</span>
            </button>
            <div class="rb-divider-v"></div>
            <div class="rb-qat-group" data-ribbon-qat>
              <button type="button" class="rb-tool" title="打开" aria-label="打开" data-qat-item="open"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="folder"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文件夹</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf61-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf61-line" d="M1.5 6.5V2C1.5 1.72386 1.72386 1.5 2 1.5H5.82461C5.93815 1.5 6.0483 1.53864 6.13696 1.60957L8.5 3.5H14C14.2761 3.5 14.5 3.72386 14.5 4V6.5M1.5 6.5V13C1.5 13.2761 1.72386 13.5 2 13.5H14C14.2761 13.5 14.5 13.2761 14.5 13V6.5M1.5 6.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="保存" aria-label="保存" data-qat-keep="1"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="disk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>磁盘_硬盘</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf62-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf62-line" d="M3.5 10.5V12.5M5.5 10.5V12.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf62-line_2" d="M1.5 8.5L3.39639 1.86264C3.45772 1.64799 3.65391 1.5 3.87715 1.5H12.1228C12.3461 1.5 12.5423 1.64799 12.6036 1.86264L14.5 8.5M1.5 8.5V14C1.5 14.2761 1.72386 14.5 2 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V8.5M1.5 8.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
              <button type="button" data-qat-item="print" class="rb-tool" title="打印" aria-label="打印"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>打印16_Print_PrintPreviewAndPrint_PrintQat</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="print-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="print-line" d="M3.5 9V14C3.5 14.2761 3.72386 14.5 4 14.5H12C12.2761 14.5 12.5 14.2761 12.5 14V9C12.5 8.72386 12.2761 8.5 12 8.5H4C3.72386 8.5 3.5 8.72386 3.5 9Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="print-line_2" d="M3.5 10.5H2C1.72386 10.5 1.5 10.2761 1.5 10V6C1.5 5.17157 2.17157 4.5 3 4.5H13C13.8284 4.5 14.5 5.17157 14.5 6V10C14.5 10.2761 14.2761 10.5 14 10.5H12.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="print-line_3" d="M3.5 4.5V2C3.5 1.72386 3.72386 1.5 4 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V4.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="print-line_4" d="M12.5 6.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
              <button type="button" data-qat-item="preview" class="rb-tool" title="打印预览" aria-label="打印预览"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>打印预览16_PrintPreview_PrintPreviewQat_PrintPreview
AndPrintQat</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="preview_print-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="preview_print-line" d="M6 8.5H4C3.72386 8.5 3.5 8.72386 3.5 9V14C3.5 14.2761 3.72386 14.5 4 14.5H6" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="preview_print-line_2" d="M3.5 10.5H2C1.72386 10.5 1.5 10.2761 1.5 10V6C1.5 5.17157 2.17157 4.5 3 4.5H13C13.8284 4.5 14.5 5.17157 14.5 6V8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="preview_print-line_3" d="M3.5 4.5V2C3.5 1.72386 3.72386 1.5 4 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V4.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="preview_print-line_4" d="M12.5 6.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="preview_print-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="preview_print-line_5" d="M13.5 11.5C13.5 13.1569 12.1569 14.5 10.5 14.5C8.84315 14.5 7.5 13.1569 7.5 11.5C7.5 9.84315 8.84315 8.5 10.5 8.5C12.1569 8.5 13.5 9.84315 13.5 11.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="preview_print-line_6" d="M14.1465 15.8535C14.3417 16.0487 14.6583 16.0487 14.8536 15.8534C15.0488 15.6582 15.0488 15.3416 14.8535 15.1463L14.1465 15.8535ZM12.1465 13.8536L14.1465 15.8535L14.8535 15.1463L12.8535 13.1464L12.1465 13.8536Z" stroke="none"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="撤销" aria-label="撤销" data-qat-item="undo"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="arrow_revoke"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>撤销16_Undo_UndoQat_上一步_恢复</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf63-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf63-line" d="M2.5 2.52246V6.10206C2.5 6.10934 2.5059 6.11523 2.51317 6.11523H6.09277" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf63-line_2" d="M2.92578 5.68784L5.9162 2.69742C7.59427 1.01935 10.2945 0.955099 12.0505 2.55145C13.9287 4.25896 13.9985 7.18986 12.2035 8.98478L6.51855 14.6698" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="恢复" aria-label="恢复" data-qat-item="redo" disabled><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="arrow_recover"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>重做16_下一步_redo_恢复_Redo_RedoQat</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf64-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf64-line" d="M13.5 2.52197V6.10038C13.5 6.10765 13.4941 6.11355 13.4868 6.11355H9.90842" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf64-line_2" d="M13.0686 5.68592L10.0792 2.6965C8.40166 1.01899 5.70236 0.954758 3.94695 2.55058C2.06932 4.25752 1.9996 7.18745 3.79392 8.98176L9.47702 14.6649" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <button type="button" data-qat-item="customize" class="rb-tool" title="自定义快速访问工具栏" aria-label="自定义快速访问工具栏" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="arrow_down_s"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>下箭头16_大_Pdf_spin_down</desc><style>
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="qat-more-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="qat-more-area1" d="M12 6.5L8.00718 10H7.99262L4 6.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <div class="rb-qat-overflow" data-qat-overflow hidden>
                <button type="button" class="rb-tool rb-qat-overflow-btn" title="更多" aria-label="更多" aria-haspopup="menu" aria-expanded="false" id="rb-qat-overflow-btn">
                  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="more"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>更多_more</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="qat-overflow-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="qat-overflow-Ellipse 545" d="M9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30964 9.25 8Z" stroke="none"/><path id="qat-overflow-Ellipse 547" d="M14.75 8C14.75 8.69036 14.1904 9.25 13.5 9.25C12.8096 9.25 12.25 8.69036 12.25 8C12.25 7.30964 12.8096 6.75 13.5 6.75C14.1904 6.75 14.75 7.30964 14.75 8Z" stroke="none"/><path id="qat-overflow-Ellipse 546" d="M3.75 8C3.75 8.69036 3.19036 9.25 2.5 9.25C1.80964 9.25 1.25 8.69036 1.25 8C1.25 7.30964 1.80964 6.75 2.5 6.75C3.19036 6.75 3.75 7.30964 3.75 8Z" stroke="none"/></g></svg></span>
                </button>
                <div class="rb-qat-overflow-menu" role="menu" aria-labelledby="rb-qat-overflow-btn" hidden>
                  <ul class="kd-menu" data-qat-overflow-list></ul>
                </div>
              </div>
              <div class="rb-divider-v" data-qat-end-divider></div>
            </div>
          </div>
        </div>

        <div class="rb-top-center">
          <!-- [Tabs: nav] -->
          <div class="kd-tabs-nav rb-tabs-nav" aria-label="功能区选项卡" data-ribbon-tabs>
            <div class="kd-tabs-nav-list" role="tablist">
              <div class="kd-tabs-tab-bar kd-tabs-tab-bar-active" role="tab" aria-selected="true" tabindex="0" data-tab-id="home">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">开始</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="insert">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">插入</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="edit">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">编辑</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="page">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">页面</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="annotate">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">批注</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="tools">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">工具</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="protect">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">保护</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="convert">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">转换</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
            </div>
            <div class="rb-tabs-overflow" data-tabs-overflow hidden>
              <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm rb-tabs-overflow-btn" title="更多选项卡" aria-label="更多选项卡" aria-haspopup="menu" aria-expanded="false" id="rb-tabs-overflow-btn">
                <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="arrow_right_double_s"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme" km_stroke-width="1" km_darkmode="true"><desc>双右箭头_小_双线</desc><style>
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="tabs-overflow-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="tabs-overflow-area1" d="M9 4L13 7.99282V8.00738L9 12" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="tabs-overflow-area1_2" d="M4 4L8 7.99282V8.00738L4 12" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
              </button>
              <div class="rb-tabs-overflow-menu" role="menu" aria-labelledby="rb-tabs-overflow-btn" hidden>
                <ul class="kd-menu" data-tabs-overflow-list></ul>
              </div>
            </div>
          </div>
          <div class="rb-divider-v soft"></div>
          <!-- [Tabs: nav] WPS AI（与功能区 Tab 平级，可互斥选中） -->
          <div class="kd-tabs-nav rb-tabs-ai" aria-label="WPS AI" data-ribbon-ai>
            <div class="kd-tabs-nav-list" role="tablist">
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="wps-ai">
                <div class="kd-tabs-tab-bar-btn">
                  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="ai"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>AI16_人工智能_ai</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="ai-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="ai-line" d="M5.73355 3.0862C5.89582 2.7292 6.25177 2.5 6.64391 2.5H10.4845C10.4917 2.5 10.4966 2.50752 10.4936 2.51414L5.76645 12.9138C5.60418 13.2708 5.24823 13.5 4.85609 13.5H1.01553C1.00826 13.5 1.00342 13.4925 1.00643 13.4859L5.73355 3.0862Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="ai-line_2" d="M8.3 7.5H11.7435C12.1421 7.5 12.5026 7.73668 12.661 8.10239L14.9939 13.486C14.9968 13.4926 14.992 13.5 14.9848 13.5H11.1594C10.7594 13.5 10.3978 13.2616 10.2403 12.8939L6 3" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
                  <span class="kd-tabs-tab-bar-label">WPS AI</span>
                </div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
            </div>
          </div>
          <div class="rb-divider-v soft"></div>
          <button type="button" class="rb-tool" title="搜索" aria-label="搜索"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>放大镜_搜索_查看_查找</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="search-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="search-line" d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="search-line_2" d="M11.5 11.5L15 15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
        </div>

        <div class="rb-top-right">
          <button type="button" class="rb-tool" title="云状态：未上云" aria-label="云状态：未上云"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>未上云16_cloud_absent</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="cloud-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="cloud-line" d="M12 6C12 6.02501 11.9998 6.04997 11.9993 6.07488C13.7113 6.42206 15 7.93554 15 9.75C15 11.8211 13.3211 13.5 11.25 13.5H4.75C2.67893 13.5 1 11.8211 1 9.75C1 7.93554 2.28866 6.42206 4.00069 6.07487C4.00023 6.04997 4 6.02501 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="cloud-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="cloud-Ellipse 451" d="M5.5 9C5.5 9.27614 5.27614 9.5 5 9.5C4.72386 9.5 4.5 9.27614 4.5 9C4.5 8.72386 4.72386 8.5 5 8.5C5.27614 8.5 5.5 8.72386 5.5 9Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="cloud-Ellipse 452" d="M8.5 9C8.5 9.27614 8.27614 9.5 8 9.5C7.72386 9.5 7.5 9.27614 7.5 9C7.5 8.72386 7.72386 8.5 8 8.5C8.27614 8.5 8.5 8.72386 8.5 9Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="cloud-Ellipse 453" d="M11.5 9C11.5 9.27614 11.2761 9.5 11 9.5C10.7239 9.5 10.5 9.27614 10.5 9C10.5 8.72386 10.7239 8.5 11 8.5C11.2761 8.5 11.5 8.72386 11.5 9Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
          <!-- [Button: primary small] -->
          <button type="button" class="kd-button kd-button-primary kd-button-sm">
            <span class="kd-button-prefix-icon"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>分享16_转发_filepageshare_icloudlink_Share_TopRight</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="share-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="share-line" d="M2.5 7.4995C3.66667 5.83283 7.7 2.6995 14.5 3.4995" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="share-line_2" d="M1.5 9.5V13C1.5 13.2761 1.72386 13.5 2 13.5H14C14.2761 13.5 14.5 13.2761 14.5 13V9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="share-line_3" d="M12 6L14.4929 3.50703C14.4968 3.50313 14.4968 3.4968 14.4929 3.49289L12 1" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
            <span class="kd-button-children">分享</span>
          </button>
        </div>
      </div>

      <div class="kd-tabs-pane-list">
      <!-- 开始选项卡命令区 -->
      <div class="kd-tabs-pane kd-tabs-pane-active" role="tabpanel" aria-label="开始" data-pane="home">
      <div class="rb-home" data-ribbon-layout="double">
      <div class="rb-body rb-body-double" role="toolbar" aria-label="开始" data-ribbon-compact="0">
        <section class="rb-group" aria-label="选择" data-group-id="cursor">
          <div class="rb-group-content">
            <div class="rb-stack" data-compact-icon="cursor-icon">
              <button type="button" class="rb-tool" title="手型" aria-label="手型">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="gesture_drag"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>拖拽_手_手形16</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf1-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf1-line" d="M3.0004 8.5C2.00109 7 3.50036 6 4.50036 7C5.30036 7.8 5.33336 8.16667 5.5 8.5L5.50001 3.5C5.50001 2.94771 5.94772 2.5 6.50001 2.5V2.5C7.0523 2.5 7.50001 2.94772 7.50001 3.5L7.50001 7.5L7.50001 2C7.50001 1.44771 7.94772 1 8.50001 1V1C9.05229 1 9.50001 1.44772 9.50001 2L9.50001 7L9.50001 3.5C9.50001 2.94771 9.94772 2.5 10.5 2.5V2.5C11.0523 2.5 11.5 2.94771 11.5 3.5L11.5 7.5L11.5 5C11.5 4.44772 11.9477 4 12.5 4V4C13.0523 4 13.5 4.44772 13.5 5L13.5 10.329C13.5 12.9087 11.4087 15 8.82901 15V15C6.60244 15 4.71315 13.4189 4.09119 11.281C3.7648 10.1591 3.38255 9.07361 3.0004 8.5Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  <span class="rb-tool-label">手型</span>
</button>
              <button type="button" class="rb-tool" title="选择" aria-label="选择" aria-pressed="true">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="object_select"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>选择窗格16_ObjectSelect</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf2-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf2-line" d="M7 13.5H2C1.72386 13.5 1.5 13.2761 1.5 13V2C1.5 1.72386 1.72386 1.5 2 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf2-line_2" d="M1.5 5.5H10C10.2761 5.5 10.5 5.27614 10.5 5V1.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf2-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf2-line_3" d="M9.7749 14.9747L7.50546 7.51794C7.50313 7.51028 7.51028 7.50313 7.51794 7.50546L14.9747 9.7749C14.9835 9.77758 14.9843 9.78975 14.9759 9.79357L11.413 11.413L9.79357 14.9759C9.78975 14.9843 9.77758 14.9835 9.7749 14.9747Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">选择</span>
</button>
            </div>
          </div>
          <div class="rb-group-label">选择</div>
        </section>
        <div class="rb-divider-v"></div>
        <section class="rb-group" aria-label="PDF处理" data-group-id="pdf_ops">
          <div class="rb-group-content">
            <button type="button" class="rb-large-menu" title="PDF转换" aria-label="PDF转换" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="change_to_word_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>转文字24_导出为word_wpp2doc_pdf2doc_PDF转Word_appcmd_pdf2word_PDF2Word</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf3-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf3-line" d="M7 18L9.49293 20.4929C9.49683 20.4968 9.49683 20.5032 9.49293 20.5071L7 23" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf3-line_2" d="M2.5 15.5V20C2.5 20.2761 2.72386 20.5 3 20.5H9" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf3-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf3-line_3" d="M12 20.5001L20 20.5002C20.2761 20.5002 20.5 20.2764 20.5 20.0002V3.00024C20.5 2.7241 20.2761 2.50024 20 2.50024H3C2.72386 2.50024 2.5 2.7241 2.5 3.00024V13.0001" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf3-group-2" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="pdf3-line_4" d="M8 7.49976L9.69207 14.4671C9.69441 14.4768 9.7079 14.4774 9.71121 14.4681L11.9906 8.0264C11.9937 8.01751 12.0063 8.01751 12.0094 8.0264L14.2888 14.4681C14.2921 14.4774 14.3056 14.4768 14.3079 14.4671L16 7.49976" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">PDF转换<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf4-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf4-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
</button>
            <div class="rb-export-large" data-compact-hide="export-stack">
              <button type="button" class="rb-large-menu" title="输出为图片" aria-label="输出为图片" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="change_to_pic_two_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>转换为图片24_convert_to_pic</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf5-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf5-line" d="M7 18L9.49293 20.4929C9.49683 20.4968 9.49683 20.5032 9.49293 20.5071L7 23" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf5-line_2" d="M2.5 15.5V20C2.5 20.2761 2.72386 20.5 3 20.5H9" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf5-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf5-line_3" d="M12 20.5001L20 20.5002C20.2761 20.5002 20.5 20.2764 20.5 20.0002V3.00024C20.5 2.7241 20.2761 2.50024 20 2.50024H3C2.72386 2.50024 2.5 2.7241 2.5 3.00024V13.0001" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf5-line_4" d="M8.5 7C8.5 7.82843 7.82843 8.5 7 8.5C6.17157 8.5 5.5 7.82843 5.5 7C5.5 6.17157 6.17157 5.5 7 5.5C7.82843 5.5 8.5 6.17157 8.5 7Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf5-line_5" d="M10.5 15.5L16.5 9.5L20.5 12.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">输出为图片<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf6-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf6-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
</button>
              <button type="button" class="rb-large-menu" title="拆分合并" aria-label="拆分合并" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="doc_merge_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文档合并</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf7-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf7-line" d="M15.5 7.5V6.20722C15.5 6.07462 15.4473 5.94744 15.3536 5.85368L12.1464 2.64645C12.0527 2.55268 11.9255 2.5 11.7929 2.5H4C3.72386 2.5 3.5 2.72386 3.5 3L3.5 16C3.5 16.2761 3.72386 16.5 4 16.5H8.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf7-line_2" d="M15.5 7.5H16.7929C16.9255 7.5 17.0527 7.55268 17.1464 7.64645L20.3536 10.8537C20.4473 10.9474 20.5 11.0746 20.5 11.2072V21C20.5 21.2761 20.2761 21.5 20 21.5H9C8.72386 21.5 8.5 21.2761 8.5 21V16.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf7-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf7-line_3" d="M15.5 7.5H9C8.72386 7.5 8.5 7.72386 8.5 8V16.5H15C15.2761 16.5 15.5 16.2761 15.5 16V7.5Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">拆分合并<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf8-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf8-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
</button>
            </div>
            <div class="rb-edit-stack rb-export-stack" data-compact-show="export-stack" data-compact-icon="export-icon" hidden>
              <button type="button" class="rb-tool rb-menu" title="输出为图片" aria-label="输出为图片" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="change_to_pic_two"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>转换为图片16_convert_to_pic</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf9-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf9-line" d="M8 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V2C13.5 1.72386 13.2761 1.5 13 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf9-line_2" d="M6.5 5.5C6.5 6.05228 6.05228 6.5 5.5 6.5C4.94772 6.5 4.5 6.05228 4.5 5.5C4.5 4.94772 4.94772 4.5 5.5 4.5C6.05228 4.5 6.5 4.94772 6.5 5.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf9-line_3" d="M7.5 10.5L11.5 6.5L13.5 8.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf9-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf9-line_4" d="M5 12L6.49293 13.4929C6.49683 13.4968 6.49683 13.5032 6.49293 13.5071L5 15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf9-line_5" d="M1.5 10.5V13C1.5 13.2761 1.72386 13.5 2 13.5H6" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">输出为图片</span>
  <span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf10-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf10-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
              <button type="button" class="rb-tool rb-menu" title="拆分合并" aria-label="拆分合并" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="doc_merge"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文档合并</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf11-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf11-line" d="M10.5 5.5V3.70711C10.5 3.5745 10.4473 3.44732 10.3536 3.35355L8.64645 1.64645C8.55268 1.55268 8.4255 1.5 8.29289 1.5H3C2.72386 1.5 2.5 1.72386 2.5 2V10C2.5 10.2761 2.72386 10.5 3 10.5H5.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf11-line_2" d="M10.5 5.5H11.2929C11.4255 5.5 11.5527 5.55268 11.6464 5.64645L13.3536 7.35355C13.4473 7.44732 13.5 7.5745 13.5 7.70711V14C13.5 14.2761 13.2761 14.5 13 14.5H6C5.72386 14.5 5.5 14.2761 5.5 14V10.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf11-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf11-line_3" d="M10.5 5.5H6C5.72386 5.5 5.5 5.72386 5.5 6V10.5H10C10.2761 10.5 10.5 10.2761 10.5 10V5.5Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">拆分合并</span>
  <span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf12-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf12-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
            </div>
          </div>
          <div class="rb-group-label">PDF处理</div>
        </section>
        <div class="rb-divider-v"></div>
        <section class="rb-group" aria-label="视图" data-group-id="view">
          <div class="rb-group-content rb-group-expanded" data-compact-hide="group-view">
            <button type="button" class="rb-large" title="播放" aria-label="播放" aria-pressed="false">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="play_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>播放_24</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-orange-primary {
       fill: var(--kd-color-icon-orange-primary, #BF5513);
       stroke: var(--kd-color-icon-orange-primary, #BF5513);
       km_fill: #BF5513;
       km_stroke: #BF5513;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-orange-quaternary {
       fill: var(--kd-color-icon-orange-quaternary, #FDE0CE);
       stroke: var(--kd-color-icon-orange-quaternary, #FDE0CE);
       km_fill: #FDE0CE;
       km_stroke: #FDE0CE;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf13-group-2" class="kd-color-icon-orange-quaternary kd-stroke-width-icon-regular"><path id="pdf13-fill" d="M9.5 15.483V8.51695C9.5 8.28661 9.74884 8.1422 9.94884 8.25648L16.0442 11.7395C16.2457 11.8547 16.2457 12.1453 16.0442 12.2605L9.94884 15.7435C9.74884 15.8578 9.5 15.7134 9.5 15.483Z" stroke="none"/></g><g id="pdf13-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="pdf13-line" d="M9.5 15.483V8.51695C9.5 8.28661 9.74884 8.1422 9.94884 8.25648L16.0442 11.7395C16.2457 11.8547 16.2457 12.1453 16.0442 12.2605L9.94884 15.7435C9.74884 15.8578 9.5 15.7134 9.5 15.483Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf13-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf13-line_2" d="M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H21C21.2761 3.5 21.5 3.72386 21.5 4V20C21.5 20.2761 21.2761 20.5 21 20.5H3C2.72386 20.5 2.5 20.2761 2.5 20V4Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">播放</span>
</button>
            <div class="rb-font-panel" aria-label="缩放">
              <div class="rb-font-row rb-font-row-top">
                <div class="rb-font-tools">
                  <div class="kd-input kd-input-small rb-select " data-select-mode="single" style="width:88px">
  <div class="kd-select-trigger">
    <div class="kd-input-wrap">
      <input class="kd-input-inner" value="75.73%" readonly aria-label="显示比例" />
      <span class="kd-select-arrow"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf14-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf14-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
    </div>
  </div>
</div>
                  <button type="button" class="rb-tool" title="缩小" aria-label="缩小"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="magnifier_zoom_out"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>缩小_放大镜16_Pdf_ZoomIn_zoom-out</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf15-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf15-line" d="M13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf15-line_2" d="M12 12L14.9999 15.0002" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf15-line_3" d="M4.5 7.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
                  <button type="button" class="rb-tool" title="放大" aria-label="放大"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="magnifier_zoom_in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>放大_放大镜16_Pdf_Zoom Out_zoom-in</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf16-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf16-line" d="M13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf16-line_2" d="M12 12L14.9999 15.0002" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf16-line_3" d="M4.5 7.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf16-line_4" d="M7.5 4.5V10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
                </div>
              </div>
              <div class="rb-font-row">
                <div class="rb-font-tools">
                  <button type="button" class="rb-tool" title="实际大小" aria-label="实际大小"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="screen_actual_size"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>实际尺寸_一比一_1比1_原始大小_原始尺寸_实际大小_原始比例_实际比例_PageActualSize</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf17-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf17-line" d="M7.5 6.5H8.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf17-line_2" d="M7.5 9.5H8.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf17-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf17-line_3" d="M1.5 3C1.5 2.72386 1.72386 2.5 2 2.5H14C14.2761 2.5 14.5 2.72386 14.5 3V13C14.5 13.2761 14.2761 13.5 14 13.5H2C1.72386 13.5 1.5 13.2761 1.5 13V3Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf17-group-2" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="pdf17-line_4" d="M3.5 6.50006L4.5 5.5V10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf17-line_5" d="M10.5 6.50006L11.5 5.5V10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                  <button type="button" class="rb-tool" title="适合宽度" aria-label="适合宽度"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="fit_width"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>适合宽度16_Pdf_PageFitWidth_v2</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf18-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf18-line" d="M13.5 9V2C13.5 1.72386 13.2761 1.5 13 1.5H3C2.72386 1.5 2.5 1.72386 2.5 2V9" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf18-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf18-line_2" d="M13 12.5H3M4.5 10.5L2.50707 12.4928C2.50317 12.4967 2.50317 12.503 2.50707 12.5069L4.5 14.5M11.5 10.5L13.4929 12.4929C13.4968 12.4968 13.4968 12.5032 13.4929 12.5071L11.5 14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                  <button type="button" class="rb-tool" title="适合页面" aria-label="适合页面"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="screen_fit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>最佳显示比例16_适合屏幕_适应屏幕_适应_屏幕_ZoomFitPageSize_ZoomFit-s_适合页面16_Pdf_FitPageSize_v2</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf19-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf19-line" d="M1.5 4.5V2C1.5 1.72386 1.72386 1.5 2 1.5H4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf19-line_2" d="M11.5 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf19-line_3" d="M1.5 11.5V14C1.5 14.2761 1.72386 14.5 2 14.5H4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf19-line_4" d="M14.5 11.5V14C14.5 14.2761 14.2761 14.5 14 14.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf19-line_5" d="M11 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V11C4.5 11.2761 4.72386 11.5 5 11.5H11C11.2761 11.5 11.5 11.2761 11.5 11V5C11.5 4.72386 11.2761 4.5 11 4.5Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                  <button type="button" class="rb-tool" title="向左旋转" aria-label="向左旋转"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="rotate_left"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>左旋转_向左旋转16_Pdf_ImageRotateLeft</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf20-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf20-line" d="M11 5.5H3C2.72386 5.5 2.5 5.72386 2.5 6V14C2.5 14.2761 2.72386 14.5 3 14.5H11C11.2761 14.5 11.5 14.2761 11.5 14V6C11.5 5.72386 11.2761 5.5 11 5.5Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf20-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf20-line_2" d="M9.99976 4L8.50684 2.50707C8.50293 2.50317 8.50293 2.49683 8.50684 2.49293L9.99976 1" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf20-line_3" d="M9 2.5H12.5C13.6046 2.5 14.5 3.39543 14.5 4.5V7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                  <button type="button" class="rb-tool" title="向右旋转" aria-label="向右旋转"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="rotate_right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>向右旋转_右旋转16_Pdf_ImageRotateRight</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf21-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf21-line" d="M13 5.5H5C4.72386 5.5 4.5 5.72386 4.5 6V14C4.5 14.2761 4.72386 14.5 5 14.5H13C13.2761 14.5 13.5 14.2761 13.5 14V6C13.5 5.72386 13.2761 5.5 13 5.5Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf21-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf21-line_2" d="M6 4L7.49293 2.50725C7.49683 2.50335 7.49683 2.49702 7.49293 2.49311L6 1" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf21-line_3" d="M7 2.5H3.5C2.39543 2.5 1.5 3.39543 1.5 4.5V7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                </div>
              </div>
            </div>
            <button type="button" class="rb-large" title="旋转文档" aria-label="旋转文档" aria-pressed="false">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="direction_rotate_doc_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>方向24_纸张方向_Orientation_切换方向_竖屏转横屏</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf22-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf22-line" d="M21.5 12V17.2929C21.5 17.4255 21.4473 17.5527 21.3536 17.6464L17.6464 21.3536C17.5527 21.4473 17.4255 21.5 17.2929 21.5H9C8.72386 21.5 8.5 21.2761 8.5 21V12C8.5 11.7239 8.72386 11.5 9 11.5H21C21.2761 11.5 21.5 11.7239 21.5 12Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf22-line_2" d="M8.5 15.5H3C2.72386 15.5 2.5 15.2761 2.5 15V3C2.5 2.72386 2.72386 2.5 3 2.5H8.29289C8.4255 2.5 8.55268 2.55268 8.64645 2.64645L12.3536 6.35355C12.4473 6.44732 12.5 6.5745 12.5 6.70711V11.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf22-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf22-line_3" d="M22.5 6.99994L20.5071 8.99287C20.5032 8.99677 20.4968 8.99677 20.4929 8.99287L18.5 6.99994" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf22-line_4" d="M14 3.5H20C20.2761 3.5 20.5 3.72386 20.5 4V9" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf22-line_5" d="M15.5 1.5L13.5071 3.49293C13.5032 3.49683 13.5032 3.50317 13.5071 3.50707L15.5 5.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">旋转文档</span>
</button>
            <div class="rb-font-panel rb-page-nav-panel" aria-label="页面导航与显示">
              <div class="rb-font-row rb-font-row-top">
                <div class="rb-font-tools rb-page-nav-tools">
                  <div class="rb-page-nav-side">
                    <button type="button" class="rb-tool" title="第一页" aria-label="第一页" disabled><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="arrow_first_s"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme" km_stroke-width="1" km_darkmode="true"><desc>首页16</desc><style>
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf23-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="pdf23-line" d="M4.5 4V12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf23-area1" d="M11.25 12L7.5 8.00718V7.99262L11.25 4" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                    <button type="button" class="rb-tool" title="上一页" aria-label="上一页" disabled><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="arrow_left_s"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme" km_stroke-width="1" km_darkmode="true"><desc>左箭头_小</desc><style>
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-secondary {
       fill: var(--kd-color-icon-secondary, #757575);
       stroke: var(--kd-color-icon-secondary, #757575);
       km_fill: #757575;
       km_stroke: #757575;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf24-group-0" class="kd-color-icon-secondary kd-stroke-width-icon-bold"><path id="pdf24-area1" d="M9.5 12L6 8.00718V7.99262L9.5 4" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                  </div>
                  <div class="kd-input kd-input-small rb-input-center" style="width:64px">
  <div class="kd-input-wrap">
    <input class="kd-input-inner" value="1/1" readonly aria-label="页码" />
  </div>
</div>
                  <div class="rb-page-nav-side">
                    <button type="button" class="rb-tool" title="下一页" aria-label="下一页" disabled><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="arrow_right_s"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme" km_stroke-width="1" km_darkmode="true"><desc>右箭头_小</desc><style>
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-secondary {
       fill: var(--kd-color-icon-secondary, #757575);
       stroke: var(--kd-color-icon-secondary, #757575);
       km_fill: #757575;
       km_stroke: #757575;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf25-group-0" class="kd-color-icon-secondary kd-stroke-width-icon-bold"><path id="pdf25-area1" d="M6.5 4L10 7.99282V8.00738L6.5 12" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                    <button type="button" class="rb-tool" title="最后一页" aria-label="最后一页" disabled><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="arrow_last_s"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme" km_stroke-width="1" km_darkmode="true"><desc>尾页16</desc><style>
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf26-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="pdf26-line" d="M11.5 4V12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf26-area1" d="M4.5 4L8.5 7.99282V8.00738L4.5 12" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                  </div>
                </div>
              </div>
              <div class="rb-font-row">
                <div class="rb-font-tools">
                  <button type="button" class="rb-tool" title="单页" aria-label="单页" aria-pressed="true">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="doc_two"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>单页16_OnePage_pdf-ebook-singlepage_statusbar_Pdf_SinglePage_v2_ReadingView_OneColumn_隐藏页码16_pagenum_none_通用排版_common_typeset</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf27-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf27-line" d="M2.5 2C2.5 1.72386 2.72386 1.5 3 1.5H13C13.2761 1.5 13.5 1.72386 13.5 2V14C13.5 14.2761 13.2761 14.5 13 14.5H3C2.72386 14.5 2.5 14.2761 2.5 14V2Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf27-line_2" d="M5.5 4.5H10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf27-line_3" d="M5.5 7.5H8.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  <span class="rb-tool-label">单页</span>
</button>
                  <button type="button" class="rb-tool rb-menu" title="双页" aria-label="双页" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="double_page"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>双页16_DoublePages_Pdf_DoublePage_v2_ReadingViewTwoColumn</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf28-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf28-line" d="M1.5 2C1.5 1.72386 1.72386 1.5 2 1.5H6C6.27614 1.5 6.5 1.72386 6.5 2V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V2Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf28-line_2" d="M9.5 2C9.5 1.72386 9.72386 1.5 10 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V14C14.5 14.2761 14.2761 14.5 14 14.5H10C9.72386 14.5 9.5 14.2761 9.5 14V2Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf28-line_3" d="M3.5 4.5H4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf28-line_4" d="M3.5 7.5H4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf28-line_5" d="M11.5 4.5H12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf28-line_6" d="M11.5 7.5H12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  <span class="rb-tool-label">双页</span>
  <span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf29-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf29-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
                  <button type="button" class="rb-tool" title="连续阅读" aria-label="连续阅读">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="continuous_read"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>连续阅读16_Pdf_Continuous_Read_Pdf_ContinuousRead</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf30-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf30-line" d="M2.5 1.5V6.49C2.5 6.49552 2.50448 6.5 2.51 6.5H13.49C13.4955 6.5 13.5 6.49552 13.5 6.49V1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf30-line_2" d="M2.5 14.5V9.51C2.5 9.50448 2.50448 9.5 2.51 9.5H13.49C13.4955 9.5 13.5 9.50448 13.5 9.51V14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  <span class="rb-tool-label">连续阅读</span>
</button>
                </div>
              </div>
            </div>
          </div>
          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-view" hidden>
            <button type="button" class="rb-large-menu" title="视图" aria-label="视图" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="play_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>播放_24</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-orange-primary {
       fill: var(--kd-color-icon-orange-primary, #BF5513);
       stroke: var(--kd-color-icon-orange-primary, #BF5513);
       km_fill: #BF5513;
       km_stroke: #BF5513;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-orange-quaternary {
       fill: var(--kd-color-icon-orange-quaternary, #FDE0CE);
       stroke: var(--kd-color-icon-orange-quaternary, #FDE0CE);
       km_fill: #FDE0CE;
       km_stroke: #FDE0CE;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf43-group-2" class="kd-color-icon-orange-quaternary kd-stroke-width-icon-regular"><path id="pdf43-fill" d="M9.5 15.483V8.51695C9.5 8.28661 9.74884 8.1422 9.94884 8.25648L16.0442 11.7395C16.2457 11.8547 16.2457 12.1453 16.0442 12.2605L9.94884 15.7435C9.74884 15.8578 9.5 15.7134 9.5 15.483Z" stroke="none"/></g><g id="pdf43-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="pdf43-line" d="M9.5 15.483V8.51695C9.5 8.28661 9.74884 8.1422 9.94884 8.25648L16.0442 11.7395C16.2457 11.8547 16.2457 12.1453 16.0442 12.2605L9.94884 15.7435C9.74884 15.8578 9.5 15.7134 9.5 15.483Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf43-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf43-line_2" d="M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H21C21.2761 3.5 21.5 3.72386 21.5 4V20C21.5 20.2761 21.2761 20.5 21 20.5H3C2.72386 20.5 2.5 20.2761 2.5 20V4Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
              <span class="rb-large-label">视图<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf44-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf44-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <div class="rb-group-label">视图</div>
        </section>
        <div class="rb-divider-v"></div>
        <section class="rb-group" aria-label="常用" data-group-id="shortcuts">
          <div class="rb-group-content rb-group-expanded" data-compact-hide="group-shortcuts">
            <button type="button" class="rb-large" title="查找" aria-label="查找" aria-pressed="false">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="magnifier_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>放大镜_搜索_查看_查找</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf31-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf31-line" d="M19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf31-line_2" d="M16.7002 16.7002L22.5002 22.5002" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">查找</span>
</button>
            <button type="button" class="rb-large" title="编辑内容" aria-label="编辑内容" aria-pressed="false">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="doc_pen_two_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>备注_描述_修订_签署_文档编辑</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf32-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf32-line" d="M20.5 9.00006V3.00006C20.5 2.72392 20.2761 2.50006 20 2.50006H4C3.72386 2.50006 3.5 2.72392 3.5 3.00006V21.0001C3.5 21.2762 3.72386 21.5001 4 21.5001H9" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf32-line_2" d="M6.5 6.50006H13.9999M6.5 9.50006H10.9999" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf32-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf32-line_3" d="M19.1464 11.3537L11.6464 18.8537C11.5527 18.9474 11.5 19.0746 11.5 19.2072V21.4902C11.5 21.4957 11.5045 21.5002 11.51 21.5002H13.7929C13.9255 21.5002 14.0527 21.4475 14.1464 21.3538L21.6465 13.8537C21.8417 13.6584 21.8417 13.3418 21.6464 13.1466L19.8536 11.3537C19.6583 11.1584 19.3417 11.1584 19.1464 11.3537Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf32-line_4" d="M13.5 21.5002H21.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
  <span class="rb-large-label">编辑内容</span>
</button>
            <button type="button" class="rb-large" title="识别表格" aria-label="识别表格" aria-pressed="false">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="sheet_extract_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>提取表格</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf33-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf33-line" d="M7 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V7" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf33-line_2" d="M17 2.5H21C21.2761 2.5 21.5 2.72386 21.5 3V7" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf33-line_3" d="M7 21.5H3C2.72386 21.5 2.5 21.2761 2.5 21V17" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf33-line_4" d="M17 21.5H21C21.2761 21.5 21.5 21.2761 21.5 21V17" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf33-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf33-Rectangle 346246808" d="M6.5 7C6.5 6.72386 6.72386 6.5 7 6.5H16C16.2761 6.5 16.5 6.72386 16.5 7V16C16.5 16.2761 16.2761 16.5 16 16.5H7C6.72386 16.5 6.5 16.2761 6.5 16V7Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf33-Vector 4751" d="M6.5 9.5H16.5M9.5 6.5V16.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">识别表格</span>
</button>
            <div class="rb-edit-stack" data-compact-icon="translate-icon">
              <button type="button" class="rb-tool" title="全文翻译" aria-label="全文翻译">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="translation_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>翻译_全文翻译</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf34-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf34-line" d="M13.1463 2.5643L2.91056 4.42535C2.67281 4.46858 2.5 4.67565 2.5 4.91729V19.0827C2.5 19.3244 2.67281 19.5314 2.91056 19.5746L13.1463 21.4357C13.3305 21.4692 13.5 21.3277 13.5 21.1405V2.85946C13.5 2.67229 13.3305 2.53082 13.1463 2.5643Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf34-line_2" d="M13.5 4.5H21C21.2761 4.5 21.5 4.72386 21.5 5V19C21.5 19.2761 21.2761 19.5 21 19.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf34-line_3" d="M15.6426 7.80078L16.4769 9.20073" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf34-line_4" d="M14 9.5H19.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf34-line_5" d="M18.3 9.5C17.9766 12.2113 16.0747 14.3309 14.5 15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf34-line_6" d="M14.5 11C15.1465 12.9846 16.8138 14.8262 19 15.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf34-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf34-line_7" d="M6 12.5H10" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf34-line_8" d="M5 15.3996L7.99067 7.62388C7.99395 7.61533 8.00605 7.61533 8.00933 7.62388L11 15.3996" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  <span class="rb-tool-label">全文翻译</span>
</button>
              <button type="button" class="rb-tool rb-menu" title="划词翻译" aria-label="划词翻译" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="translation_ai"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>AI翻译16_划词翻译_Pdf_TranslationSelect_itranslation_itranslation-dis</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf35-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="pdf35-line" d="M1.5 3.5L9.5 3.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf35-line_2" d="M5.5 1.5V3.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf35-line_3" d="M8 3.5C7.01778 6.44667 5.26776 9.07821 2.93021 11.1236L2.5 11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf35-line_4" d="M7.5 10.5L7.06155 10.0616C5.69235 8.69235 4.49624 7.1604 3.5 5.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf35-group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="pdf35-line_5" d="M9.5 12.5H12.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf35-line_6" d="M8.5 14.5L10.9908 8.52215C10.9942 8.51395 11.0058 8.51395 11.0092 8.52215L13.5 14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf35-group-2" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf35-Subtract" d="M13.5 2C13.5882 2 13.6624 2.06578 13.6828 2.15159C13.7721 2.52625 13.8256 2.73318 13.9082 2.91602C14.1438 3.43734 14.5618 3.85504 15.083 4.09082C15.2656 4.17339 15.4725 4.22675 15.8464 4.31595C15.9328 4.33656 16 4.41117 16 4.5C16 4.58824 15.9332 4.66237 15.8474 4.68288C15.4727 4.77241 15.2658 4.82653 15.083 4.90918C14.5618 5.14496 14.1438 5.56266 13.9082 6.08398C13.8257 6.26666 13.772 6.47335 13.6828 6.84739C13.6624 6.93322 13.5882 7 13.5 7C13.4112 7 13.3366 6.93284 13.316 6.84643C13.2271 6.4731 13.1742 6.26647 13.0918 6.08398C12.8562 5.56266 12.4382 5.14496 11.917 4.90918C11.7341 4.82646 11.5269 4.77249 11.1516 4.68286C11.0658 4.66237 11 4.58821 11 4.5C11 4.4112 11.0662 4.33656 11.1525 4.31597C11.5271 4.22667 11.7343 4.17346 11.917 4.09082C12.4382 3.85504 12.8562 3.43734 13.0918 2.91602C13.1743 2.73337 13.227 2.5265 13.316 2.15254C13.3366 2.06616 13.4112 2 13.5 2Z" stroke="none"/></g></svg></span>
  <span class="rb-tool-label">划词翻译</span>
  <span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf36-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf36-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
            </div>
            <div class="rb-shot-large" data-compact-hide="shot-stack">
              <button type="button" class="rb-large-menu" title="截屏" aria-label="截屏" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="cut_screen_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>截屏24_GrabScreenMenu</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf37-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf37-line" d="M18.5 5V3C18.5 2.72386 18.2761 2.5 18 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V18C2.5 18.2761 2.72386 18.5 3 18.5H5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf37-line_2" d="M14.5 10.5L18.5 20" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf37-line_3" d="M18.5 10.5L14.5 20" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf37-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf37-line_4" d="M18.5 9V7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf37-line_5" d="M9 18.5H7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf37-line_6" d="M14.5 19.5C14.5 20.6046 13.6046 21.5 12.5 21.5C11.3954 21.5 10.5 20.6046 10.5 19.5C10.5 18.3954 11.3954 17.5 12.5 17.5C13.6046 17.5 14.5 18.3954 14.5 19.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf37-line_7" d="M22.5 19.5C22.5 20.6046 21.6046 21.5 20.5 21.5C19.3954 21.5 18.5 20.6046 18.5 19.5C18.5 18.3954 19.3954 17.5 20.5 17.5C21.6046 17.5 22.5 18.3954 22.5 19.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">截屏<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf38-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf38-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
</button>
              <button type="button" class="rb-large" title="压缩" aria-label="压缩" aria-pressed="false">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="file_compression_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文件瘦身_文件压缩_瘦身_压缩</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-red-primary {
       fill: var(--kd-color-icon-red-primary, #BF3942);
       stroke: var(--kd-color-icon-red-primary, #BF3942);
       km_fill: #BF3942;
       km_stroke: #BF3942;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf39-group-1" class="kd-color-icon-red-primary kd-stroke-width-icon-regular"><path id="pdf39-line" d="M2.5 7.5V7.5C4.55865 10.1468 4.55865 13.8532 2.5 16.5V16.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf39-line_2" d="M21.5 7.5V7.5C19.4414 10.1468 19.4414 13.8532 21.5 16.5V16.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf39-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf39-line_3" d="M20.3643 3.5H3.63569C3.38216 3.5 3.24294 3.795 3.40412 3.99071L3.71772 4.37151C7.36683 8.80258 7.36683 15.1974 3.71772 19.6285L3.40412 20.0093C3.24294 20.205 3.38216 20.5 3.63569 20.5H20.3643C20.6178 20.5 20.7571 20.205 20.5959 20.0093L20.2823 19.6285C16.6332 15.1974 16.6332 8.80258 20.2823 4.37151L20.5959 3.99071C20.7571 3.795 20.6178 3.5 20.3643 3.5Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf39-line_4" d="M8.5 6.5H15.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf39-line_5" d="M9.5 10.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
  <span class="rb-large-label">压缩</span>
</button>
            </div>
            <div class="rb-edit-stack rb-shot-stack" data-compact-show="shot-stack" data-compact-icon="shot-icon" hidden>
              <button type="button" class="rb-tool rb-menu" title="截屏" aria-label="截屏" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="cut_screen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>截屏16_GrabScreenMenu</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf40-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf40-line" d="M8.5 6.5L11.58 13.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf40-line_2" d="M11.5017 6.5L8.42188 13.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf40-line_3" d="M13.5 3V2C13.5 1.72386 13.2761 1.5 13 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V12C1.5 12.2761 1.72386 12.5 2 12.5H4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf40-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf40-line_4" d="M8.5 13C8.5 13.8284 7.82843 14.5 7 14.5C6.17157 14.5 5.5 13.8284 5.5 13C5.5 12.1716 6.17157 11.5 7 11.5C7.82843 11.5 8.5 12.1716 8.5 13Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf40-line_5" d="M14.5 13C14.5 13.8284 13.8284 14.5 13 14.5C12.1716 14.5 11.5 13.8284 11.5 13C11.5 12.1716 12.1716 11.5 13 11.5C13.8284 11.5 14.5 12.1716 14.5 13Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf40-line_6" d="M13.5 6V4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">截屏</span>
  <span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf41-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf41-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
              <button type="button" class="rb-tool" title="压缩" aria-label="压缩">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="file_compression"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文件瘦身_文件压缩_瘦身_压缩</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-red-primary {
       fill: var(--kd-color-icon-red-primary, #BF3942);
       stroke: var(--kd-color-icon-red-primary, #BF3942);
       km_fill: #BF3942;
       km_stroke: #BF3942;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf42-group-1" class="kd-color-icon-red-primary kd-stroke-width-icon-regular"><path id="pdf42-line" d="M1 5.5V5.5C2.38071 6.88071 2.38071 9.11929 1 10.5V10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf42-line_2" d="M15 5.5V5.5C13.6193 6.88071 13.6193 9.11929 15 10.5V10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf42-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf42-line_3" d="M13.9901 1.49976H2.00993C1.80857 1.49976 1.69933 1.73534 1.82939 1.88905C4.8138 5.41621 4.81393 10.5834 1.82939 14.1105C1.69933 14.2642 1.80858 14.4998 2.00993 14.4998H13.9901C14.1914 14.4998 14.3007 14.2642 14.1706 14.1105C11.1861 10.5834 11.1862 5.41621 14.1706 1.88905C14.3007 1.73534 14.1914 1.49976 13.9901 1.49976Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf42-line_4" d="M6.5 4.49976H9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf42-line_5" d="M7 7.5H9" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  <span class="rb-tool-label">压缩</span>
</button>
            </div>
          </div>
          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-shortcuts" hidden>
            <button type="button" class="rb-large-menu" title="阅读与编辑" aria-label="阅读与编辑" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="doc_pen_two_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>备注_描述_修订_签署_文档编辑</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf45-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf45-line" d="M20.5 9.00006V3.00006C20.5 2.72392 20.2761 2.50006 20 2.50006H4C3.72386 2.50006 3.5 2.72392 3.5 3.00006V21.0001C3.5 21.2762 3.72386 21.5001 4 21.5001H9" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf45-line_2" d="M6.5 6.50006H13.9999M6.5 9.50006H10.9999" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf45-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf45-line_3" d="M19.1464 11.3537L11.6464 18.8537C11.5527 18.9474 11.5 19.0746 11.5 19.2072V21.4902C11.5 21.4957 11.5045 21.5002 11.51 21.5002H13.7929C13.9255 21.5002 14.0527 21.4475 14.1464 21.3538L21.6465 13.8537C21.8417 13.6584 21.8417 13.3418 21.6464 13.1466L19.8536 11.3537C19.6583 11.1584 19.3417 11.1584 19.1464 11.3537Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf45-line_4" d="M13.5 21.5002H21.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
              <span class="rb-large-label">阅读与编辑<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf46-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf46-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <div class="rb-group-label">常用</div>
        </section>
      </div>
      <div class="rb-body rb-body-single" role="toolbar" aria-label="开始单行" hidden data-sr-compact="0">

        <div class="rb-sr-rail" role="toolbar" aria-label="开始单行">
          <div class="rb-sr-group" data-sr-group="cursor">
            <button type="button" class="rb-sr-light-btn" title="手型" aria-label="手型" aria-pressed="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="gesture_drag"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>拖拽_手_手形16</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf47-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf47-line" d="M3.0004 8.5C2.00109 7 3.50036 6 4.50036 7C5.30036 7.8 5.33336 8.16667 5.5 8.5L5.50001 3.5C5.50001 2.94771 5.94772 2.5 6.50001 2.5V2.5C7.0523 2.5 7.50001 2.94772 7.50001 3.5L7.50001 7.5L7.50001 2C7.50001 1.44771 7.94772 1 8.50001 1V1C9.05229 1 9.50001 1.44772 9.50001 2L9.50001 7L9.50001 3.5C9.50001 2.94771 9.94772 2.5 10.5 2.5V2.5C11.0523 2.5 11.5 2.94771 11.5 3.5L11.5 7.5L11.5 5C11.5 4.44772 11.9477 4 12.5 4V4C13.0523 4 13.5 4.44772 13.5 5L13.5 10.329C13.5 12.9087 11.4087 15 8.82901 15V15C6.60244 15 4.71315 13.4189 4.09119 11.281C3.7648 10.1591 3.38255 9.07361 3.0004 8.5Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span><span class="rb-sr-light-label">手型</span></button>
            <button type="button" class="rb-sr-light-btn is-selected" title="选择" aria-label="选择" aria-pressed="true"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="object_select"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>选择窗格16_ObjectSelect</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf48-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf48-line" d="M7 13.5H2C1.72386 13.5 1.5 13.2761 1.5 13V2C1.5 1.72386 1.72386 1.5 2 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf48-line_2" d="M1.5 5.5H10C10.2761 5.5 10.5 5.27614 10.5 5V1.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf48-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf48-line_3" d="M9.7749 14.9747L7.50546 7.51794C7.50313 7.51028 7.51028 7.50313 7.51794 7.50546L14.9747 9.7749C14.9835 9.77758 14.9843 9.78975 14.9759 9.79357L11.413 11.413L9.79357 14.9759C9.78975 14.9843 9.77758 14.9835 9.7749 14.9747Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">选择</span></button>
          </div>
          <div class="rb-sr-sep" role="separator"></div>
          <div class="rb-sr-group" data-sr-group="pdf_ops">
            <button type="button" class="rb-sr-light-menu" title="PDF转换" aria-label="PDF转换" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="change_to_word_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>转文字24_导出为word_wpp2doc_pdf2doc_PDF转Word_appcmd_pdf2word_PDF2Word</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf49-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf49-line" d="M7 18L9.49293 20.4929C9.49683 20.4968 9.49683 20.5032 9.49293 20.5071L7 23" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf49-line_2" d="M2.5 15.5V20C2.5 20.2761 2.72386 20.5 3 20.5H9" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf49-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf49-line_3" d="M12 20.5001L20 20.5002C20.2761 20.5002 20.5 20.2764 20.5 20.0002V3.00024C20.5 2.7241 20.2761 2.50024 20 2.50024H3C2.72386 2.50024 2.5 2.7241 2.5 3.00024V13.0001" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf49-group-2" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="pdf49-line_4" d="M8 7.49976L9.69207 14.4671C9.69441 14.4768 9.7079 14.4774 9.71121 14.4681L11.9906 8.0264C11.9937 8.01751 12.0063 8.01751 12.0094 8.0264L14.2888 14.4681C14.2921 14.4774 14.3056 14.4768 14.3079 14.4671L16 7.49976" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">PDF转换</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf50-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf50-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
            <button type="button" class="rb-sr-light-menu" title="拆分合并" aria-label="拆分合并" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="doc_merge_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文档合并</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf51-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf51-line" d="M15.5 7.5V6.20722C15.5 6.07462 15.4473 5.94744 15.3536 5.85368L12.1464 2.64645C12.0527 2.55268 11.9255 2.5 11.7929 2.5H4C3.72386 2.5 3.5 2.72386 3.5 3L3.5 16C3.5 16.2761 3.72386 16.5 4 16.5H8.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf51-line_2" d="M15.5 7.5H16.7929C16.9255 7.5 17.0527 7.55268 17.1464 7.64645L20.3536 10.8537C20.4473 10.9474 20.5 11.0746 20.5 11.2072V21C20.5 21.2761 20.2761 21.5 20 21.5H9C8.72386 21.5 8.5 21.2761 8.5 21V16.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf51-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf51-line_3" d="M15.5 7.5H9C8.72386 7.5 8.5 7.72386 8.5 8V16.5H15C15.2761 16.5 15.5 16.2761 15.5 16V7.5Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">拆分合并</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf52-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf52-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
          </div>
          <div class="rb-sr-sep" role="separator"></div>
          <div class="rb-sr-group" data-sr-group="view">
            <button type="button" class="rb-sr-light-btn" title="播放" aria-label="播放" aria-pressed="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="play_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>播放_24</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-orange-primary {
       fill: var(--kd-color-icon-orange-primary, #BF5513);
       stroke: var(--kd-color-icon-orange-primary, #BF5513);
       km_fill: #BF5513;
       km_stroke: #BF5513;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-orange-quaternary {
       fill: var(--kd-color-icon-orange-quaternary, #FDE0CE);
       stroke: var(--kd-color-icon-orange-quaternary, #FDE0CE);
       km_fill: #FDE0CE;
       km_stroke: #FDE0CE;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf53-group-2" class="kd-color-icon-orange-quaternary kd-stroke-width-icon-regular"><path id="pdf53-fill" d="M9.5 15.483V8.51695C9.5 8.28661 9.74884 8.1422 9.94884 8.25648L16.0442 11.7395C16.2457 11.8547 16.2457 12.1453 16.0442 12.2605L9.94884 15.7435C9.74884 15.8578 9.5 15.7134 9.5 15.483Z" stroke="none"/></g><g id="pdf53-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="pdf53-line" d="M9.5 15.483V8.51695C9.5 8.28661 9.74884 8.1422 9.94884 8.25648L16.0442 11.7395C16.2457 11.8547 16.2457 12.1453 16.0442 12.2605L9.94884 15.7435C9.74884 15.8578 9.5 15.7134 9.5 15.483Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf53-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf53-line_2" d="M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H21C21.2761 3.5 21.5 3.72386 21.5 4V20C21.5 20.2761 21.2761 20.5 21 20.5H3C2.72386 20.5 2.5 20.2761 2.5 20V4Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">播放</span></button>
            <button type="button" class="rb-tool" title="适合宽度" aria-label="适合宽度"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="fit_width"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>适合宽度16_Pdf_PageFitWidth_v2</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf54-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf54-line" d="M13.5 9V2C13.5 1.72386 13.2761 1.5 13 1.5H3C2.72386 1.5 2.5 1.72386 2.5 2V9" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf54-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf54-line_2" d="M13 12.5H3M4.5 10.5L2.50707 12.4928C2.50317 12.4967 2.50317 12.503 2.50707 12.5069L4.5 14.5M11.5 10.5L13.4929 12.4929C13.4968 12.4968 13.4968 12.5032 13.4929 12.5071L11.5 14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="rb-tool" title="适合页面" aria-label="适合页面"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="screen_fit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>最佳显示比例16_适合屏幕_适应屏幕_适应_屏幕_ZoomFitPageSize_ZoomFit-s_适合页面16_Pdf_FitPageSize_v2</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf55-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf55-line" d="M1.5 4.5V2C1.5 1.72386 1.72386 1.5 2 1.5H4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf55-line_2" d="M11.5 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf55-line_3" d="M1.5 11.5V14C1.5 14.2761 1.72386 14.5 2 14.5H4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf55-line_4" d="M14.5 11.5V14C14.5 14.2761 14.2761 14.5 14 14.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf55-line_5" d="M11 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V11C4.5 11.2761 4.72386 11.5 5 11.5H11C11.2761 11.5 11.5 11.2761 11.5 11V5C11.5 4.72386 11.2761 4.5 11 4.5Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="rb-sr-light-btn" title="旋转文档" aria-label="旋转文档" aria-pressed="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="direction_rotate_doc_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>方向24_纸张方向_Orientation_切换方向_竖屏转横屏</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf56-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf56-line" d="M21.5 12V17.2929C21.5 17.4255 21.4473 17.5527 21.3536 17.6464L17.6464 21.3536C17.5527 21.4473 17.4255 21.5 17.2929 21.5H9C8.72386 21.5 8.5 21.2761 8.5 21V12C8.5 11.7239 8.72386 11.5 9 11.5H21C21.2761 11.5 21.5 11.7239 21.5 12Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf56-line_2" d="M8.5 15.5H3C2.72386 15.5 2.5 15.2761 2.5 15V3C2.5 2.72386 2.72386 2.5 3 2.5H8.29289C8.4255 2.5 8.55268 2.55268 8.64645 2.64645L12.3536 6.35355C12.4473 6.44732 12.5 6.5745 12.5 6.70711V11.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="pdf56-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf56-line_3" d="M22.5 6.99994L20.5071 8.99287C20.5032 8.99677 20.4968 8.99677 20.4929 8.99287L18.5 6.99994" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf56-line_4" d="M14 3.5H20C20.2761 3.5 20.5 3.72386 20.5 4V9" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf56-line_5" d="M15.5 1.5L13.5071 3.49293C13.5032 3.49683 13.5032 3.50317 13.5071 3.50707L15.5 5.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">旋转文档</span></button>
            <button type="button" class="rb-sr-light-btn" title="连续阅读" aria-label="连续阅读" aria-pressed="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="continuous_read"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>连续阅读16_Pdf_Continuous_Read_Pdf_ContinuousRead</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf57-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf57-line" d="M2.5 1.5V6.49C2.5 6.49552 2.50448 6.5 2.51 6.5H13.49C13.4955 6.5 13.5 6.49552 13.5 6.49V1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf57-line_2" d="M2.5 14.5V9.51C2.5 9.50448 2.50448 9.5 2.51 9.5H13.49C13.4955 9.5 13.5 9.50448 13.5 9.51V14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span><span class="rb-sr-light-label">连续阅读</span></button>
            <div class="rb-sr-group-more"><button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="更多" aria-label="更多"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="more"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>更多_more</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf58-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf58-Ellipse 545" d="M9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30964 9.25 8Z" stroke="none"/><path id="pdf58-Ellipse 547" d="M14.75 8C14.75 8.69036 14.1904 9.25 13.5 9.25C12.8096 9.25 12.25 8.69036 12.25 8C12.25 7.30964 12.8096 6.75 13.5 6.75C14.1904 6.75 14.75 7.30964 14.75 8Z" stroke="none"/><path id="pdf58-Ellipse 546" d="M3.75 8C3.75 8.69036 3.19036 9.25 2.5 9.25C1.80964 9.25 1.25 8.69036 1.25 8C1.25 7.30964 1.80964 6.75 2.5 6.75C3.19036 6.75 3.75 7.30964 3.75 8Z" stroke="none"/></g></svg></span></button></div>
          </div>
          <div class="rb-sr-sep" role="separator"></div>
          <div class="rb-sr-group" data-sr-group="shortcuts">
            <button type="button" class="rb-sr-light-btn" title="查找替换" aria-label="查找替换" aria-pressed="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="magnifier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>放大镜_搜索_查看_查找</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf59-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf59-line" d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf59-line_2" d="M11.5 11.5L15 15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">查找替换</span></button>
            <button type="button" class="rb-sr-light-btn" title="编辑内容" aria-label="编辑内容" aria-pressed="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="doc_pen_two_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>备注_描述_修订_签署_文档编辑</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }
    .kd-color-icon-blue-primary {
       fill: var(--kd-color-icon-blue-primary, #2661BF);
       stroke: var(--kd-color-icon-blue-primary, #2661BF);
       km_fill: #2661BF;
       km_stroke: #2661BF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="pdf60-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf60-line" d="M20.5 9.00006V3.00006C20.5 2.72392 20.2761 2.50006 20 2.50006H4C3.72386 2.50006 3.5 2.72392 3.5 3.00006V21.0001C3.5 21.2762 3.72386 21.5001 4 21.5001H9" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf60-line_2" d="M6.5 6.50006H13.9999M6.5 9.50006H10.9999" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="pdf60-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="pdf60-line_3" d="M19.1464 11.3537L11.6464 18.8537C11.5527 18.9474 11.5 19.0746 11.5 19.2072V21.4902C11.5 21.4957 11.5045 21.5002 11.51 21.5002H13.7929C13.9255 21.5002 14.0527 21.4475 14.1464 21.3538L21.6465 13.8537C21.8417 13.6584 21.8417 13.3418 21.6464 13.1466L19.8536 11.3537C19.6583 11.1584 19.3417 11.1584 19.1464 11.3537Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="pdf60-line_4" d="M13.5 21.5002H21.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span><span class="rb-sr-light-label">编辑内容</span></button>
          </div>
        </div>

      </div>
      <div class="rb-layout-mode" data-ribbon-layout-control>
          <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm rb-layout-mode-btn" title="功能区显示选项" aria-label="功能区显示选项" aria-haspopup="menu" aria-expanded="false" id="rb-layout-mode-btn"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="arrow_down_s"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>下箭头16_大_Pdf_spin_down</desc><style>
    .kd-stroke-width-icon-bold { 
       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)
    }
    .kd-color-icon-secondary {
       fill: var(--kd-color-icon-secondary, #757575);
       stroke: var(--kd-color-icon-secondary, #757575);
       km_fill: #757575;
       km_stroke: #757575;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="group-0" class="kd-color-icon-secondary kd-stroke-width-icon-bold"><path id="area1" d="M12 6.5L8.00718 10H7.99262L4 6.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
          <div class="rb-layout-mode-menu" role="menu" aria-labelledby="rb-layout-mode-btn" hidden>
            <ul class="kd-menu kd-menu-selectable">
              <li class="kd-menu-item" role="menuitemradio" data-value="single" aria-checked="false" tabindex="-1">
                <span class="kd-menu-item-icon" aria-hidden="true"><span class="rb-icon rb-icon-16" data-icon="window_unhide"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>取消隐藏窗口16_UnhideWindow</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id=" line" d="M1.5 3V13C1.5 13.2761 1.72386 13.5 2 13.5H14C14.2761 13.5 14.5 13.2761 14.5 13V3C14.5 2.72386 14.2761 2.5 14 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line" d="M1.5 6.5H14.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
                <span class="kd-menu-item-content">单行排布</span>
              </li>
              <li class="kd-menu-item kd-menu-item-selected" role="menuitemradio" data-value="double" aria-checked="true" tabindex="0">
                <span class="kd-menu-item-tick" aria-hidden="true"><span class="rb-icon rb-icon-16" data-icon="symbol_tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>勾_勾选_选中_choose</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-public {
       fill: var(--kd-color-icon-public, #1E5FC7);
       stroke: var(--kd-color-icon-public, #1E5FC7);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="group-0" class="kd-color-icon-public kd-stroke-width-icon-regular"><path id="area1" d="M3.89184 8.96007L6.70221 12.2326C6.80068 12.3433 6.96317 12.3641 7.08526 12.2877C7.10974 12.2724 7.12842 12.2498 7.14423 12.2256L12.4719 4.0816" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
                <span class="kd-menu-item-icon" aria-hidden="true"><span class="rb-icon rb-icon-16" data-icon="shape_two"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>2张幻灯片16_TwoSlide_形状2_分组_与上一项同时</desc><style>
    .kd-stroke-width-icon-regular { 
       stroke-width: var(--kd-stroke-width-icon-regular, 1px)
    }
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M14 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V6C1.5 6.27614 1.72386 6.5 2 6.5H14C14.2761 6.5 14.5 6.27614 14.5 6V2C14.5 1.72386 14.2761 1.5 14 1.5Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M14 8.5H2C1.72386 8.5 1.5 8.72386 1.5 9V13C1.5 13.2761 1.72386 13.5 2 13.5H14C14.2761 13.5 14.5 13.2761 14.5 13V9C14.5 8.72386 14.2761 8.5 14 8.5Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
                <span class="kd-menu-item-content">双行排布</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="kd-tabs-pane" role="tabpanel" aria-label="WPS AI" data-pane="wps-ai" hidden>
        <div class="rb-home" data-ribbon-layout="double">
          <div class="rb-body rb-body-double" role="toolbar" aria-label="WPS AI">
            <div class="rb-ai-pane-placeholder">WPS AI 选项卡</div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>

    </header>`;
