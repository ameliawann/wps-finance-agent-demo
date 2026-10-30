window.RIBBONS=window.RIBBONS||{};
window.RIBBONS.wps=`<header class="rb-ribbon" role="banner">
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
              <button type="button" class="rb-tool" title="保存" aria-label="保存" data-qat-keep="1"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="save"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>保存</desc><style>
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
    }</style><g id="qat-save-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="qat-save-line" d="M1.5 2V14C1.5 14.2761 1.72386 14.5 2 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V5.40719C14.5 5.27458 14.4473 5.1474 14.3536 5.05364L10.9464 1.64645C10.8527 1.55268 10.7255 1.5 10.5929 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="qat-save-line_2" d="M5.5 5.5H8.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="qat-save-line_3" d="M5.5 14.5L5.5 10C5.5 9.72386 5.72386 9.5 6 9.5H10C10.2761 9.5 10.5 9.72386 10.5 10V14.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
              <button type="button" data-qat-item="pdf" class="rb-tool" title="输出为 PDF" aria-label="输出为 PDF"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="pdf"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>PDF</desc><style>
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
    }</style><g id="pdf-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="pdf-line" d="M6.54308 9.49463L9.55243 9.49981C11.1805 9.49981 13.5774 8.49982 13.5774 5.49982C13.5774 2.49982 11.1805 1.49982 9.55243 1.49982L6.93612 1.49463C6.69192 1.49463 6.49395 1.70843 6.49395 1.97218L6.49593 14.0225C6.49593 14.2862 6.29797 14.5 6.05376 14.5H4.68794" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="pdf-line_2" d="M6.5 9.5H3.88505C2.56634 9.5 1.49731 10.4615 1.49731 12C1.49731 13.5385 2.56634 14.4996 3.88505 14.4996H5.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
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
              <div class="rb-split" data-qat-item="undo" title="撤销">
  <button type="button" class="rb-tool" aria-label="撤销"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>撤销16_Undo_UndoQat_上一步_恢复</desc><style>
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
    }</style><g id="undo-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="undo-line" d="M2.5 2.52246V6.10206C2.5 6.10934 2.5059 6.11523 2.51317 6.11523H6.09277" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="undo-line_2" d="M2.92578 5.68784L5.9162 2.69742C7.59427 1.01935 10.2945 0.955099 12.0505 2.55145C13.9287 4.25896 13.9985 7.18986 12.2035 8.98478L6.51855 14.6698" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="撤销菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr1-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr1-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              <button type="button" data-qat-item="redo" class="rb-tool" title="恢复" aria-label="恢复"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>重做16_下一步_redo_恢复_Redo_RedoQat</desc><style>
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
    }</style><g id="redo-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="redo-line" d="M13.5 2.52197V6.10038C13.5 6.10765 13.4941 6.11355 13.4868 6.11355H9.90842" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="redo-line_2" d="M13.0686 5.68592L10.0792 2.6965C8.40166 1.01899 5.70236 0.954758 3.94695 2.55058C2.06932 4.25752 1.9996 7.18745 3.79392 8.98176L9.47702 14.6649" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
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
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="page">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">页面</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="ref">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">引用</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="review">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">审阅</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="view">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">视图</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="tools">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">工具</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="vip">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">会员专享</span></div>
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
        <!-- 剪切 -->
        <section class="rb-group" aria-label="剪切" data-group-id="clipboard">
          <div class="rb-group-content">
            <button type="button" class="rb-large" title="格式刷" aria-label="格式刷">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>刷24_格式刷_FormatPainter_brush_FormatPainterQat</desc><style>
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
    }</style><g id="format_painter-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="format_painter-line" d="M4.5 10.5H19.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="format_painter-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="format_painter-line_2" d="M14.5 16C14.3794 17.4168 14 19 13 20.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="format_painter-line_3" d="M4 10.5H4.5V14.1999C4.5 16.3517 3.86306 18.4554 2.66945 20.2458C2.59702 20.3545 2.67491 20.5 2.80548 20.5H17.2947C17.4245 20.5 17.5472 20.441 17.6282 20.3397C18.8399 18.8251 19.5 16.9433 19.5 15.0037V10.5H20C20.2761 10.5 20.5 10.2761 20.5 10V8.5C20.5 7.39543 19.6046 6.5 18.5 6.5H13.5V5.5L13.9348 4.63049C14.6539 3.19223 13.608 1.5 12 1.5C10.392 1.5 9.34612 3.19223 10.0652 4.63049L10.5 5.5V6.5H5.5C4.39543 6.5 3.5 7.39543 3.5 8.5V10C3.5 10.2761 3.72386 10.5 4 10.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">格式刷</span>
</button>
            <div class="rb-large-split" role="group" aria-label="粘贴" data-control="split-button-vertical">
  <button type="button" class="rb-large-split-main" title="粘贴" aria-label="粘贴">
    <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>粘贴24_Paste</desc><style>
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
    }
    .kd-color-icon-blue-quaternary {
       fill: var(--kd-color-icon-blue-quaternary, #D6E6FF);
       stroke: var(--kd-color-icon-blue-quaternary, #D6E6FF);
       km_fill: #D6E6FF;
       km_stroke: #D6E6FF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="paste-group-2" class="kd-color-icon-blue-quaternary kd-stroke-width-icon-regular"><path id="paste-fill" d="M12.5 11C12.5 10.7239 12.7239 10.5 13 10.5H21C21.2761 10.5 21.5 10.7239 21.5 11V21C21.5 21.2761 21.2761 21.5 21 21.5H13C12.7239 21.5 12.5 21.2761 12.5 21V11Z" stroke="none"/></g><g id="paste-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="paste-line" d="M12.5 19.5H3C2.72386 19.5 2.5 19.2761 2.5 19V4C2.5 3.72386 2.72386 3.5 3 3.5H7.5V2C7.5 1.72386 7.72386 1.5 8 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V3.5H17C17.2761 3.5 17.5 3.72386 17.5 4V10.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="paste-line_2" d="M5.5 3.5V6C5.5 6.27614 5.72386 6.5 6 6.5H14C14.2761 6.5 14.5 6.27614 14.5 6V3.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="paste-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="paste-line_3" d="M21 10.5H13C12.7239 10.5 12.5 10.7239 12.5 11V21C12.5 21.2761 12.7239 21.5 13 21.5H21C21.2761 21.5 21.5 21.2761 21.5 21V11C21.5 10.7239 21.2761 10.5 21 10.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  </button>
  <button type="button" class="rb-large-split-menu" title="粘贴菜单" aria-label="粘贴菜单" aria-haspopup="menu" aria-expanded="false">
    <span class="rb-large-label">粘贴<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr2-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr2-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
  </button>
</div>
            <div class="rb-stack">
              <button type="button" class="rb-tool" title="剪切" aria-label="剪切"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>剪16_剪切_剪贴_Cut_CutQat</desc><style>
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
    }</style><g id="cut-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="cut-line" d="M5.5 1.5L10.55 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="cut-line_2" d="M10.4991 1.5L5.44922 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="cut-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="cut-line_3" d="M5.5 11.5C5.5 12.6046 4.60457 13.5 3.5 13.5C2.39543 13.5 1.5 12.6046 1.5 11.5C1.5 10.3954 2.39543 9.5 3.5 9.5C4.60457 9.5 5.5 10.3954 5.5 11.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="cut-line_4" d="M14.5 11.5C14.5 12.6046 13.6046 13.5 12.5 13.5C11.3954 13.5 10.5 12.6046 10.5 11.5C10.5 10.3954 11.3954 9.5 12.5 9.5C13.6046 9.5 14.5 10.3954 14.5 11.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="复制" aria-label="复制"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>复制16_副本_Copy_CopyQat</desc><style>
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
    }</style><g id="copy-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="copy-line" d="M9.5 4.5V2C9.5 1.72386 9.27614 1.5 9 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V11C1.5 11.2761 1.72386 11.5 2 11.5H6.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="copy-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="copy-line_2" d="M11 4.5H7C6.72386 4.5 6.5 4.72386 6.5 5V14C6.5 14.2761 6.72386 14.5 7 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V8L11 4.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="copy-line_3" d="M10.5 4.5V8C10.5 8.27614 10.7239 8.5 11 8.5H14.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
            </div>
          </div>
          <button type="button" class="rb-group-more" title="剪切对话框" aria-label="剪切对话框"><span class="rb-icon rb-icon-11" aria-hidden="true" data-icon="arrow_up_right"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clip-path="url(#gm-clip-clip)"><path d="M4.5 7.5H7.5V4.5" stroke="var(--kd-color-icon-secondary, #757575)" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 7.5L4.5 4.5" stroke="var(--kd-color-icon-secondary, #757575)" stroke-linecap="round"/></g><defs><clipPath id="gm-clip-clip"><rect width="11" height="11" rx="2" fill="white"/></clipPath></defs></svg></span></button>
          <div class="rb-group-label">剪切</div>
        </section>
        <div class="rb-divider-v"></div>

        <!-- 字体 · Figma 57:20047 -->
        <section class="rb-group" aria-label="字体" data-group-id="font">
          <div class="rb-font-panel rb-group-expanded" data-compact-hide="group-font">
            <div class="rb-font-row rb-font-row-top">
              <div class="rb-font-combo" data-control="font-size-combo">
                <div class="kd-input kd-input-small rb-select font-name" data-select-mode="single">
                <div class="kd-select-trigger">
                  <div class="kd-input-wrap">
                    <input class="kd-input-inner" value="微软雅黑" readonly aria-label="字体" />
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
    }</style><g id="adr3-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr3-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
                  </div>
                </div>
              </div>
                <div class="kd-input kd-input-small rb-select font-size" data-select-mode="single">
                <div class="kd-select-trigger">
                  <div class="kd-input-wrap">
                    <input class="kd-input-inner" value="五号" readonly aria-label="字号" />
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
    }</style><g id="adr4-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr4-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
                  </div>
                </div>
              </div>
              </div>
              <div class="rb-font-tools">
                <button type="button" class="rb-tool" title="增大字号" aria-label="增大字号"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_size_increase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>增加字号16_增大字号_IncreaseFontSize</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="line" d="M10 3.5H15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M12.5 1V6" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_3" d="M3.80078 9.59961H10.2" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M2 13.5L6.99083 2.02109C6.99432 2.01308 7.00569 2.01308 7.00917 2.02109L12 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                <button type="button" class="rb-tool" title="减小字号" aria-label="减小字号"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_size_reduce_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>减小字号16_DecreaseFontSize</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="line" d="M8.5 4.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_2" d="M3 10.6001H8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_3" d="M1.5 13.5L5.49072 3.52321C5.49407 3.51483 5.50593 3.51483 5.50928 3.52321L9.5 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                <div class="rb-split" title="拼音指南">
  <button type="button" class="rb-tool" aria-label="拼音指南"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg lang="zh_CN" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>拼音指南16_PhoneticGuide</desc><style>
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
    }</style><g id="phonetic-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="phonetic-line" d="M10 8.5C9.83333 11.1667 8.2 14.1 3 14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="phonetic-line_2" d="M5.99927 8.5C5.8326 11 6.99921 13.7 12.9992 14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="phonetic-line_3" d="M3 8.5H13" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="phonetic-line_4" d="M7 6L9 7" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="phonetic-line_5" d="M14.5008 4.5V2.85C14.5008 2.10442 13.8964 1.5 13.1508 1.5C12.4052 1.5 11.8008 2.10442 11.8008 2.85" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="phonetic-line_6" d="M11.8008 1.5V4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="phonetic-line_7" d="M1 1.5L2 4.5L3 1.5L4 4.5L5 1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="phonetic-line_8" d="M9.30129 4.37931C8.87118 4.59282 8.47099 4.64511 8.02356 4.59995C7.26263 4.52315 6.76563 3.91011 6.76563 3.28801L6.76562 2.81514C6.76562 2.05971 7.25547 1.40039 8.13346 1.40039C9.01144 1.40039 9.50129 2.05971 9.50129 2.81514L9.50129 2.98365C9.50129 2.98911 9.49686 2.99354 9.4914 2.99354H6.98589" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="拼音指南菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr5-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr5-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
                <button type="button" class="rb-tool" title="清除格式" aria-label="清除格式"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="eraser"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>橡皮擦16_消除污点_清除_擦除_清除格式_btn_photoerasepen2_ClearFormat_EraserOne_Pdf_CorrectionFluid_ClearContents2</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M4 6.99997L9.5 12.5M5.70711 14.5H7.29289C7.4255 14.5 7.55268 14.4473 7.64645 14.3535L14.6464 7.35352C14.8417 7.15826 14.8417 6.84168 14.6464 6.64642L9.85355 1.85352C9.65829 1.65826 9.34171 1.65826 9.14645 1.85352L1.35355 9.64642C1.15829 9.84168 1.15829 10.1583 1.35355 10.3535L5.35355 14.3535C5.44732 14.4473 5.5745 14.5 5.70711 14.5Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M7.5 14.5H14" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              </div>
            </div>
            <div class="rb-font-row">
              <button type="button" class="rb-tool" title="加粗" aria-label="加粗"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>加粗16_Bold_BoldQat_bookmarkBold</desc><style>
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
    }</style><g id="bold-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="bold-B" d="M4 3H8.00586C8.79883 3 9.389 3.03418 9.77637 3.10254C10.1683 3.16634 10.5169 3.30306 10.8223 3.5127C11.1322 3.72233 11.3896 4.0026 11.5947 4.35352C11.7998 4.69987 11.9023 5.08952 11.9023 5.52246C11.9023 5.99186 11.7747 6.42253 11.5195 6.81445C11.2689 7.20638 10.9271 7.50033 10.4941 7.69629C11.1048 7.87402 11.5742 8.17708 11.9023 8.60547C12.2305 9.03385 12.3945 9.53744 12.3945 10.1162C12.3945 10.5719 12.2874 11.0163 12.0732 11.4492C11.8636 11.8776 11.5742 12.2217 11.2051 12.4814C10.8405 12.7367 10.3893 12.8939 9.85156 12.9531C9.51432 12.9896 8.70085 13.0124 7.41113 13.0215H4V3ZM6.02344 4.66797V6.98535H7.34961C8.13802 6.98535 8.62793 6.97396 8.81934 6.95117C9.16569 6.91016 9.43685 6.79167 9.63281 6.5957C9.83333 6.39518 9.93359 6.13314 9.93359 5.80957C9.93359 5.49967 9.84701 5.24902 9.67383 5.05762C9.50521 4.86165 9.25228 4.74316 8.91504 4.70215C8.71452 4.67936 8.13802 4.66797 7.18555 4.66797H6.02344ZM6.02344 8.65332V11.333H7.89648C8.62565 11.333 9.08822 11.3125 9.28418 11.2715C9.58496 11.2168 9.82878 11.0846 10.0156 10.875C10.207 10.6608 10.3027 10.376 10.3027 10.0205C10.3027 9.71973 10.2298 9.46452 10.084 9.25488C9.93815 9.04525 9.72624 8.89258 9.44824 8.79688C9.1748 8.70117 8.5778 8.65332 7.65723 8.65332H6.02344Z" stroke="none"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="倾斜" aria-label="倾斜"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>斜体16_倾斜_Italic</desc><style>
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
    }</style><g id="italic-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="italic-group-0_2" d="M7.5 2.6001H9M10.5 2.6001H9M4.5 13.4001H6M7.5 13.4001H6M9 2.6001L6 13.4001" stroke-linecap="round" stroke-linejoin="bevel" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <div class="rb-split" title="下划线">
  <button type="button" class="rb-tool" aria-label="下划线"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>下划线16_Underline_Pdf_Underline_v2_Pdf_Underline</desc><style>
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
    }</style><g id="underline-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="underline-line" d="M3.5 13.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="underline-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="underline-line_2" d="M4.59961 3.5V8.5C4.59961 10.1016 5.89798 11.4 7.49961 11.4C9.10124 11.4 10.3996 10.1016 10.3996 8.5V3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="下划线菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr6-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr6-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              <div class="rb-split" title="删除线">
  <button type="button" class="rb-tool" title="删除线" aria-label="删除线"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>删除线16_Strikethought_DeleteLine</desc><style>
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
    }</style><g id="strikethrough-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="strikethrough-line" d="M1 9.40039H15" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="strikethrough-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="strikethrough-line_2" d="M2.3985 6.79177C3.5952 5.94347 4.98188 5.94618 5.66269 6.44278C6.38697 6.97109 6.50161 7.79437 6.50161 8.85078C6.50161 9.69591 6.50161 11.4643 6.50161 12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="strikethrough-line_3" d="M6.46021 9.00684C5.07284 9.36141 2.50801 9.07317 2.03645 10.5715C1.6371 11.8403 2.68931 12.7242 3.56247 12.7242C4.42012 12.7242 5.73564 12.1649 6.47974 10.1514" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="strikethrough-line_4" d="M8.5 3.5V12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="strikethrough-line_5" d="M13.4992 9.6C13.4992 11.4377 12.4675 12.7 11.0881 12.7C9.58691 12.7 8.69922 11.36 8.69922 9.6C8.69922 7.80021 9.65433 6.5 11.0881 6.5C12.4494 6.5 13.4992 7.71199 13.4992 9.6Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="删除线菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="--adr3-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="--adr3-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              <div class="rb-split" title="上标">
  <button type="button" class="rb-tool" title="上标" aria-label="上标"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>上标16_Superscript</desc><style>
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
    }</style><g id="superscript-group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="superscript-line" d="M14.5 6.49963H11.5C12.0257 5.3685 13.1658 4.89816 13.9027 4.1849C14.9748 3.14721 14.4115 1.67701 13.1517 1.60268C12.3834 1.55735 11.8729 2.02347 11.6715 2.60892" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="superscript-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="superscript-line_2" d="M2 4L9 13" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="superscript-line_3" d="M9 4L2 13" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="上标菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="--adr3-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="--adr3-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              <button type="button" class="rb-tool rb-menu" title="文字效果" aria-label="文字效果" aria-haspopup="menu"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文字效果16_艺术字_FontEffec_InsertWordArt_WordArtStyle_FontEffec_InsertWordArt</desc><style>
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
    }</style><g id="font_effect-group-1"><g id="font_effect-fill" opacity="0.4"><path d="M7.87105 2H8.26567C8.46876 2 8.65167 2.12284 8.7285 2.31084L13.1326 13.0865C13.2132 13.2839 13.0681 13.5 12.8549 13.5H11.8737C12.0504 13.8063 12.3791 14 12.7398 14H14.6548C15.2233 14 15.6104 13.4236 15.3953 12.8973L10.9912 2.12167C10.8376 1.74569 10.4717 1.5 10.0656 1.5H8.73712C8.37659 1.5 8.04785 1.69356 7.87105 2Z" stroke="none"/><path d="M10.0014 12L9.80136 11.5H5.40136L4.72711 13.1857C4.65118 13.3755 4.46732 13.5 4.26287 13.5H3.40625C3.52282 13.7861 3.80182 14 4.14813 14H6.06277C6.47168 14 6.83939 13.751 6.99125 13.3714L7.53978 12H10.0014Z" stroke="none"/><path d="M8.80132 9L9.00133 9.5H6.20133L7.60127 6L8.77052 8.92302L8.73973 9H8.80132Z" stroke="none"/></g></g><g id="font_effect-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="font_effect-A" fill-rule="evenodd" clip-rule="evenodd" d="M2.07143 13.0865L6.47528 2.31084C6.55211 2.12285 6.73503 2 6.93812 2H8.26657C8.46966 2 8.65257 2.12284 8.72941 2.31084L13.1335 13.0865C13.2141 13.2839 13.069 13.5 12.8558 13.5H10.9408C10.7364 13.5 10.5525 13.3755 10.4766 13.1857L9.80226 11.5H5.40226L4.72801 13.1857C4.65208 13.3755 4.46823 13.5 4.26377 13.5H2.34913C2.13594 13.5 1.99077 13.2839 2.07143 13.0865ZM6.20223 9.5H9.00223L7.60217 6L6.20223 9.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="feffect-adr3-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="feffect-adr3-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
              <div class="rb-split" title="高亮">
  <button type="button" class="rb-tool rb-swatch highlight" aria-label="高亮"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>高亮文本16</desc><style>
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
    }</style><g id="hl-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="hl-line" d="M4 8C4 9.80392 3.48431 12.147 1.5 13.4999L4.5 13.5C5.16144 12.8987 6.01569 11.6392 8 12" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="hl-line_2" d="M10 1.5L4 8L8 12L14.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="高亮菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="--adr3-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="--adr3-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              <div class="rb-split" title="字体颜色">
  <button type="button" class="rb-tool rb-swatch font" aria-label="字体颜色"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredcustomfeatures="data-kd-color-scheme">
<desc>字体颜色</desc>
<style>
        .kd-stroke-width-icon-bold { 
            stroke-width: var(--kd-stroke-width-icon-bold, 1.2px);
        }
    .c58A401 {
  color: #58A401;
  fill: currentColor;
  stroke: currentColor;
}
    .c0E52D4 {
  color: #0E52D4;
  fill: currentColor;
  stroke: currentColor;
}
</style>
<g id="font_color-group-0" class="kd-stroke-width-icon-bold c58A401">
<path d="M3.5 12.9442L7.75077 2.74233C7.84308 2.52079 8.15692 2.52079 8.24923 2.74233L12.5 12.9442M5 9.6H11" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</g>
<g id="font_color-group-1" class="kd-stroke-width-icon-bold c0E52D4">
<path d="M3.5 12.9442L7.75077 2.74233C7.84308 2.52079 8.15692 2.52079 8.24923 2.74233L12.5 12.9442M5 9.6H11" stroke="url(#font_color-paint0_linear_4059_2307)" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
<defs>
<linearGradient id="font_color-paint0_linear_4059_2307" x1="3" y1="7.52" x2="13" y2="7.52" gradientUnits="userSpaceOnUse">
                <stop stop-color="currentColor" stop-opacity="0"/>
                <stop offset="1" stop-color="currentColor" stop-opacity="1"/>
</linearGradient>
</defs>
</g>
</svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="字体颜色菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="--adr3-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="--adr3-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              <button type="button" class="rb-tool" title="字符底纹" aria-label="字符底纹"><span class="rb-icon rb-icon-16" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>字符底纹16_CharacterShading</desc><style>
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
    .kd-color-icon-quaternary {
       fill: var(--kd-color-icon-quaternary, #E6E6E6);
       stroke: var(--kd-color-icon-quaternary, #E6E6E6);
       km_fill: #E6E6E6;
       km_stroke: #E6E6E6;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="char_shading-group-2" class="kd-color-icon-quaternary kd-stroke-width-icon-regular"><path id="char_shading-fill" d="M0.5 1.00012C0.5 0.72398 0.723858 0.500122 1 0.500122H15C15.2761 0.500122 15.5 0.72398 15.5 1.00012V15.0001C15.5 15.2763 15.2761 15.5001 15 15.5001H1C0.723858 15.5001 0.5 15.2763 0.5 15.0001V1.00012Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="char_shading-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="char_shading-fill_2" opacity="0.2" d="M0.5 1.00012C0.5 0.72398 0.723858 0.500122 1 0.500122H15C15.2761 0.500122 15.5 0.72398 15.5 1.00012V15.0001C15.5 15.2763 15.2761 15.5001 15 15.5001H1C0.723858 15.5001 0.5 15.2763 0.5 15.0001V1.00012Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="char_shading-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="char_shading-line" d="M5.5 9.59998H10.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="char_shading-line_2" d="M4 12.5L8 3.5L12 12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            </div>
          </div>
          <button type="button" class="rb-group-more" title="字体对话框" aria-label="字体对话框"><span class="rb-icon rb-icon-11" aria-hidden="true" data-icon="arrow_up_right"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clip-path="url(#gm-font-clip)"><path d="M4.5 7.5H7.5V4.5" stroke="var(--kd-color-icon-secondary, #757575)" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 7.5L4.5 4.5" stroke="var(--kd-color-icon-secondary, #757575)" stroke-linecap="round"/></g><defs><clipPath id="gm-font-clip"><rect width="11" height="11" rx="2" fill="white"/></clipPath></defs></svg></span></button>

          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-font" hidden>
            <button type="button" class="rb-large-menu" title="字体" aria-label="字体" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="symbol_a"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>字母A_样式_字体样式_文本_单个字符_single_character_themeFont</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line" d="M7.5 13.5996H16.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M5 19.5996L11.9908 3.62055C11.9943 3.61256 12.0057 3.61256 12.0092 3.62055L19 19.5996" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
              <span class="rb-large-label">字体<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <div class="rb-group-label">字体</div>
        </section>
        <div class="rb-divider-v"></div>

        <!-- 段落 · Figma 57:20070 -->
        <section class="rb-group" aria-label="段落" data-group-id="para">
          <div class="rb-para-panel rb-group-expanded" data-compact-hide="group-para">
            <div class="rb-para-row">
              <div class="rb-cluster">
                <div class="rb-split" title="项目符号">
  <button type="button" class="rb-tool" aria-label="项目符号"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="list_bullets_ten"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>项目符号十16_BulletsNumber_符号</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="fill" d="M3.79922 2.5002C3.79922 3.21817 3.21719 3.8002 2.49922 3.8002C1.78125 3.8002 1.19922 3.21817 1.19922 2.5002C1.19922 1.78223 1.78125 1.2002 2.49922 1.2002C3.21719 1.2002 3.79922 1.78223 3.79922 2.5002Z" stroke="none"/><path id="fill_2" d="M3.80117 7.49971C3.80117 8.21768 3.21914 8.79971 2.50117 8.79971C1.7832 8.79971 1.20117 8.21768 1.20117 7.49971C1.20117 6.78174 1.7832 6.19971 2.50117 6.19971C3.21914 6.19971 3.80117 6.78174 3.80117 7.49971Z" stroke="none"/><path id="fill_3" d="M3.80117 12.4997C3.80117 13.2177 3.21914 13.7997 2.50117 13.7997C1.7832 13.7997 1.20117 13.2177 1.20117 12.4997C1.20117 11.7817 1.7832 11.1997 2.50117 11.1997C3.21914 11.1997 3.80117 11.7817 3.80117 12.4997Z" stroke="none"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M6.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M6.5 7.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M6.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="项目符号菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr0-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr0-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
                <div class="rb-split" title="编号">
  <button type="button" class="rb-tool" aria-label="编号"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="number"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>编号16_InsertNumber_自动编号_号码_NO</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="Vector 2034" d="M14.5 1.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 2035" d="M14.5 6.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 2036" d="M13.5 1.5V6.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 2037" d="M11.5 1.5V6.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 2038" d="M10.5 11.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 2039" d="M10.5 13.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 2040" d="M11.5 10.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 2041" d="M13.5 10.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 2042" d="M8.5 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V12C1.5 12.2761 1.72386 12.5 2 12.5H8.20505" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 2043" d="M6.5 10.5L8.49293 12.4929C8.49683 12.4968 8.49683 12.5032 8.49293 12.5071L6.5 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="编号菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr0-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr0-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              </div>
              <button type="button" class="rb-tool" title="减少缩进量" aria-label="减少缩进量"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="indent_decrease"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>减少缩进16_减少缩进量_DecreaseIndent</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line" d="M7.5 7.5H1.5M1.5 7.5L3.5 5.5M1.5 7.5L3.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_2" d="M1.5 1.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 13.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M10.5 5.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5" d="M10.5 9.5L13.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="增加缩进量" aria-label="增加缩进量"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="indent_increase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>增加缩进16_增加缩进量_IncreaseIndent</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line" d="M1.5 7.5H7.5M7.5 7.5L5.5 5.5M7.5 7.5L5.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_2" d="M1.5 1.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 13.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M10.5 5.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5" d="M10.5 9.5L13.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <div class="rb-cluster">
                <button type="button" class="rb-tool rb-menu" title="中文版式" aria-label="中文版式" aria-haspopup="menu"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_scaling"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>字符缩放16_中文版式_CharacterScaling</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line" d="M9.5 3.5H14.5M14.5 3.5L12.5 1.5M14.5 3.5L12.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M6.5 3.5H1.5M1.5 3.5L3.5 1.5M1.5 3.5L3.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_3" d="M5.5 11.5H10.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M4 14.5L8 5.5L12 14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr0-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr0-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
                <button type="button" class="rb-tool rb-menu" title="显示/隐藏编辑标记" aria-label="显示/隐藏编辑标记" aria-haspopup="menu"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="paragraph_tags"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>显示/隐藏编辑标记16_编辑标记_ShowHideFormatting
Marks</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M3 11.5H13.5M13.5 11.5L10.5 8.5M13.5 11.5L10.5 14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M12.5 1.5V3.5C12.5 4.60457 11.6046 5.5 10.5 5.5H2.5M2.5 5.5L5.5 2.5M2.5 5.5L5.5 8.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr0-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr0-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
              </div>
              <button type="button" class="rb-tool" title="排序" aria-label="排序"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="sort_letter_ascending"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>字母升序16_排序_降序_DataSort_descending_SortAscending_SortDescending</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="line" d="M3.5 5.5H6.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M2.5 7.49988L4.99077 1.52215C4.99419 1.51395 5.00581 1.51395 5.00923 1.52215L7.5 7.49988" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_3" d="M12.5 2.5V14M10 12L12.4929 14.4929C12.4968 14.4968 12.5032 14.4968 12.5071 14.4929L15 12" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-2" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_4" d="M2.5 9.5H6.97755C6.9862 9.5 6.99077 9.51025 6.98498 9.51669L2.51502 14.4833C2.50923 14.4897 2.5138 14.5 2.52245 14.5H7" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="制表位" aria-label="制表位"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="ruler_format_tabs"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>制表位16_FormatTabs_尺子_标尺</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M4.5 2.5V5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M7.5 2.5V5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M7.5 6.5V9" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M10.5 2.5V5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5" d="M4.5 11V13.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_6" d="M7.5 11V13.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_7" d="M10.5 11V13.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_8" d="M1.5 5.5V3C1.5 2.72386 1.72386 2.5 2 2.5H13C13.2761 2.5 13.5 2.72386 13.5 3V5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_9" d="M1.5 10.5V13C1.5 13.2761 1.72386 13.5 2 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            </div>
            <div class="rb-para-row rb-para-row-bottom">
              <div class="rb-para-align">
                <button type="button" class="rb-tool" title="左对齐" aria-label="左对齐"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_left"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>左对齐16_AlignLeft_AlignLeftQat_居左_靠左对齐</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M1.5 7.5H7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                <button type="button" class="rb-tool" title="居中" aria-label="居中"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>水平居中16_居中对齐_水平居中_垂直居中_AlignCenter_AlignCenterQat</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M4.5 7.5H10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                <button type="button" class="rb-tool" title="右对齐" aria-label="右对齐"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>右对齐16_AlignRight_居右_靠右对齐</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M7.5 7.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                <button type="button" class="rb-tool" title="两端对齐" aria-label="两端对齐"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_both_side"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>两端对齐16_alignjustify_更多菜单</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="Vector 1909" d="M1.5 2.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 1910" d="M1.5 7.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 1911" d="M1.5 12.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
                <button type="button" class="rb-tool" title="分散对齐" aria-label="分散对齐"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_distributed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>分散对齐16_AlignDistributed</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line" d="M6.5 1.5L4.50707 3.49293C4.50317 3.49683 4.50317 3.50317 4.50707 3.50707L6.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M9.5 1.5L11.4929 3.49293C11.4968 3.49683 11.4968 3.50317 11.4929 3.50707L9.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_3" d="M1.5 1.5V13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M4.5 8.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5" d="M4.5 12.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_6" d="M14.5 1.5V13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                <button type="button" class="rb-tool rb-menu" title="行距" aria-label="行距" aria-haspopup="menu"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="line_spacing"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>行距16_增大段落行距_IncreaseSpace_LineSpacing_TightLineSpacing_LooseLineSpacing_行间距</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line" d="M3.5 1.5V13.5M3.5 1.5L1.5 3.5M3.5 1.5L5.5 3.5M3.5 13.5L1.5 11.5M3.5 13.5L5.5 11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_2" d="M8.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M8.5 7.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M8.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr0-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr0-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
              </div>
              <div class="rb-divider-v soft rb-para-sep" aria-hidden="true"></div>
              <div class="rb-cluster">
                <div class="rb-split" title="底纹">
  <button type="button" class="rb-tool rb-swatch para" aria-label="底纹"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="color_paint_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>油漆桶16_底纹颜色_TableShadingColor_填充_填充色</desc><style>
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
    .kd-color-icon-quaternary {
       fill: var(--kd-color-icon-quaternary, #E6E6E6);
       stroke: var(--kd-color-icon-quaternary, #E6E6E6);
       km_fill: #E6E6E6;
       km_stroke: #E6E6E6;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="group-2" class="kd-color-icon-quaternary kd-stroke-width-icon-regular"><path id="fill" d="M11.5 5H3.5L2.85355 5.64645C2.65829 5.84171 2.65829 6.15829 2.85355 6.35355L6.14645 9.64645C6.34171 9.84171 6.65829 9.84171 6.85355 9.64645L11.5 5Z" stroke="none"/></g><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="fill_2" d="M13.5 8.48463C13.5 7.92668 13.3431 7.09848 12.5048 6C11.6664 7.09848 11.5 7.92668 11.5 8.48463C11.5 9.32155 11.8102 10 12.5048 10C13.1993 10 13.5 9.32155 13.5 8.48463Z" stroke="none"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M2.5 2.5H8" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M6 2.5L7.64645 0.853553C7.84171 0.658291 8.15829 0.658291 8.35355 0.853553L11.6464 4.14645C11.8417 4.34171 11.8417 4.65829 11.6464 4.85355L6.85355 9.64645C6.65829 9.84171 6.34171 9.84171 6.14645 9.64645L2.85355 6.35355C2.65829 6.15829 2.65829 5.84171 2.85355 5.64645L4.5 4" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="底纹菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr0-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr0-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
                <div class="rb-split" title="框线">
  <button type="button" class="rb-tool" aria-label="框线"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="border_outer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>外侧框线16_边框_OutsideBorders</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" opacity="0.3" d="M7.5 2V4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" opacity="0.3" d="M7.5 5V7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_3" opacity="0.3" d="M7.5 8V10" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" opacity="0.3" d="M7.5 11V13" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_5" opacity="0.3" d="M2 7.5H4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_6" opacity="0.3" d="M5 7.5H7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_7" opacity="0.3" d="M8 7.5H10" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_8" opacity="0.3" d="M11 7.5H13" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_9" d="M12.8995 1.6001H2.09961C1.82347 1.6001 1.59961 1.82396 1.59961 2.1001V12.9001C1.59961 13.1763 1.82347 13.4001 2.09961 13.4001H12.8995C13.1757 13.4001 13.3995 13.1763 13.3995 12.9001V2.1001C13.3995 1.82396 13.1757 1.6001 12.8995 1.6001Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="框线菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="adr0-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="adr0-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              </div>
            </div>
          </div>
          <button type="button" class="rb-group-more" title="段落对话框" aria-label="段落对话框"><span class="rb-icon rb-icon-11" aria-hidden="true" data-icon="arrow_up_right"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clip-path="url(#gm-para-clip)"><path d="M4.5 7.5H7.5V4.5" stroke="var(--kd-color-icon-secondary, #757575)" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 7.5L4.5 4.5" stroke="var(--kd-color-icon-secondary, #757575)" stroke-linecap="round"/></g><defs><clipPath id="gm-para-clip"><rect width="11" height="11" rx="2" fill="white"/></clipPath></defs></svg></span></button>

          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-para" hidden>
            <button type="button" class="rb-large-menu" title="段落" aria-label="段落" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="align_both_side"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>两端对齐16_alignjustify_更多菜单</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="Vector 1909" d="M1.5 2.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 1910" d="M1.5 7.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 1911" d="M1.5 12.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
              <span class="rb-large-label">段落<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <div class="rb-group-label">段落</div>
        </section>

        <div class="rb-divider-v"></div>

        <!-- 样式 · Figma 57:20009 展台 -->
        <section class="rb-group" aria-label="样式" data-group-id="style">
          <div class="rb-styles rb-group-expanded" data-compact-hide="style-menu">
            <div class="rb-style-gallery" data-control="style-gallery">
              <div class="rb-style-gallery-box">
                <div class="rb-style-gallery-track" role="listbox" aria-label="文字样式">
                  <button type="button" class="rb-style-item is-selected" role="option" aria-selected="true" aria-label="正文">
                    <span class="rb-style-item-inner"><span class="rb-style-item-label">正文</span></span>
                  </button>
                  <button type="button" class="rb-style-item" role="option" aria-selected="false" aria-label="标题 1">
                    <span class="rb-style-item-inner"><span class="rb-style-item-label is-h1">标题 1</span></span>
                  </button>
                  <button type="button" class="rb-style-item rb-style-item-extra" role="option" aria-selected="false" aria-label="标题 2">
                    <span class="rb-style-item-inner"><span class="rb-style-item-label is-h2">标题 2</span></span>
                  </button>
                </div>
                <div class="rb-style-gallery-ctrl" aria-label="展台控制器">
                  <button type="button" class="rb-style-gallery-btn" title="上翻" aria-label="上翻"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_up_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon上箭头</desc><style>
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
    }</style><g id="style-up-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="style-up-path" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 7.98633C8.91542 7.98633 9.08273 7.5824 8.84649 7.34616L6.26546 4.76519C6.11902 4.61875 5.8816 4.61875 5.73515 4.76518L3.15392 7.34615C2.91766 7.58238 3.08497 7.98633 3.41907 7.98633H4.35744C4.45684 7.98633 4.55217 7.94687 4.62249 7.87661L5.73507 6.76505C5.88156 6.61869 6.11897 6.61878 6.26536 6.76526L7.37582 7.87641C7.44616 7.94679 7.54157 7.98633 7.64107 7.98633H8.58133Z" stroke="none"/></g></svg></span></button>
                  <button type="button" class="rb-style-gallery-btn" title="下翻" aria-label="下翻"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="style-down-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="style-down-path" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
                  <button type="button" class="rb-style-gallery-btn" title="展开更多" aria-label="展开更多"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="tab_expand_more"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>选项卡展开更多</desc><style>
    .kd-color-icon-primary {
       fill: var(--kd-color-icon-primary, #333333);
       stroke: var(--kd-color-icon-primary, #333333);
       km_fill: #333333;
       km_stroke: #333333;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7;
    }</style><g id="style-more-group-0" class="kd-color-icon-primary" transform="translate(3,3.36)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.29203 1.999C1.42456 1.999 1.55166 2.05162 1.64542 2.14529L2.63293 3.13189C2.82831 3.32699 3.14485 3.32687 3.34008 3.13162L4.32553 2.14556C4.41931 2.05172 4.54654 1.999 4.6792 1.999H5.4725C5.70137 1.999 5.88691 2.18454 5.88691 2.41341C5.88691 2.52333 5.84325 2.62873 5.76553 2.70645L3.3402 5.13173C3.14492 5.32696 2.82835 5.32697 2.63307 5.13175L0.20679 2.70572C0.0451136 2.54406 0.0451 2.28194 0.206759 2.12027C0.284396 2.04262 0.389699 1.999 0.4995 1.999H1.29203ZM5.5 0C5.77614 0 6 0.223858 6 0.5C6 0.776142 5.77614 1 5.5 1H0.5C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0H5.5Z" stroke="none"/></g></svg></span></button>
                </div>
              </div>
            </div>
            <button type="button" class="rb-style-set" aria-label="样式集" aria-haspopup="menu" hidden>
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="font_style_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>样式集24_字符样式_新样式_样式_艺术字样式_StyleFormat_FontStyles</desc><style>
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
    }</style><g id="style-set-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="style-set-line" d="M21 10L14.5 16.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="style-set-line_2" d="M21 14L16.5 18.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="style-set-group-3" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="style-set-line_3" d="M6 14.4H12" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="style-set-line_4" d="M11 3L15 12" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="style-set-line_5" d="M3 21L11 3" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="style-set-group-2" class="kd-color-icon-orange-quaternary kd-stroke-width-icon-regular"><path id="style-set-fill" d="M10.5 21.5H14C15.3807 21.5 16.5 20.3807 16.5 19C16.5 17.6193 15.3807 16.5 14 16.5C12.6193 16.5 11.5 17.6193 11.5 19V19.1866C11.5 19.717 11.343 20.2355 11.0488 20.6768L10.5 21.5Z" stroke="none"/></g><g id="style-set-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="style-set-line_6" d="M10.5 21.5H14C15.3807 21.5 16.5 20.3807 16.5 19C16.5 17.6193 15.3807 16.5 14 16.5C12.6193 16.5 11.5 17.6193 11.5 19V19.1866C11.5 19.717 11.343 20.2355 11.0488 20.6768L10.5 21.5Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
              <span class="rb-large-label">样式集<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="style-set-caret-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="style-set-caret-path" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <button type="button" class="rb-group-more" title="样式对话框" aria-label="样式对话框"><span class="rb-icon rb-icon-11" aria-hidden="true" data-icon="arrow_up_right"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clip-path="url(#gm-style-clip)"><path d="M4.5 7.5H7.5V4.5" stroke="var(--kd-color-icon-secondary, #757575)" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 7.5L4.5 4.5" stroke="var(--kd-color-icon-secondary, #757575)" stroke-linecap="round"/></g><defs><clipPath id="gm-style-clip"><rect width="11" height="11" rx="2" fill="white"/></clipPath></defs></svg></span></button>
          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="style-menu" hidden>
            <button type="button" class="rb-large-menu" title="样式" aria-label="样式" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="font_style_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>样式集24_字符样式_新样式_样式_艺术字样式_StyleFormat_FontStyles</desc><style>
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
    }</style><g id="style-set-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="style-set-line" d="M21 10L14.5 16.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="style-set-line_2" d="M21 14L16.5 18.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="style-set-group-3" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="style-set-line_3" d="M6 14.4H12" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="style-set-line_4" d="M11 3L15 12" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="style-set-line_5" d="M3 21L11 3" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="style-set-group-2" class="kd-color-icon-orange-quaternary kd-stroke-width-icon-regular"><path id="style-set-fill" d="M10.5 21.5H14C15.3807 21.5 16.5 20.3807 16.5 19C16.5 17.6193 15.3807 16.5 14 16.5C12.6193 16.5 11.5 17.6193 11.5 19V19.1866C11.5 19.717 11.343 20.2355 11.0488 20.6768L10.5 21.5Z" stroke="none"/></g><g id="style-set-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="style-set-line_6" d="M10.5 21.5H14C15.3807 21.5 16.5 20.3807 16.5 19C16.5 17.6193 15.3807 16.5 14 16.5C12.6193 16.5 11.5 17.6193 11.5 19V19.1866C11.5 19.717 11.343 20.2355 11.0488 20.6768L10.5 21.5Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
              <span class="rb-large-label">样式<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <div class="rb-group-label">样式</div>
        </section>
        <div class="rb-divider-v"></div>

        <!-- 查找 · Figma 80:104301 -->
        <section class="rb-group" aria-label="查找" data-group-id="find">
          <div class="rb-group-content rb-edit-content rb-group-expanded" data-compact-hide="group-find">
            <div class="rb-large-split" role="group" aria-label="查找替换" data-control="split-button-vertical">
  <button type="button" class="rb-large-split-main" title="查找替换" aria-label="查找替换">
    <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>缩小_放大镜24_Pdf_ZoomIn_zoom-out</desc><style>
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
    }</style><g id="find-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="find-line" d="M19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="find-line_2" d="M6.5 10.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="find-line_3" d="M16.7002 16.7002L22.5002 22.5002" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  </button>
  <button type="button" class="rb-large-split-menu" title="查找替换菜单" aria-label="查找替换菜单" aria-haspopup="menu" aria-expanded="false">
    <span class="rb-large-label">查找替换<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="caret-find-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="caret-find-path" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
  </button>
</div>
            <div class="rb-edit-stack" data-compact-icon="find-icon">
            <button type="button" class="rb-tool rb-menu" title="选择" aria-label="选择" aria-haspopup="menu" aria-expanded="false">
              <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="select_value"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>选择-值24_select_value</desc><style>
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
    .kd-color-icon-green-primary {
       fill: var(--kd-color-icon-green-primary, #20804E);
       stroke: var(--kd-color-icon-green-primary, #20804E);
       km_fill: #20804E;
       km_stroke: #20804E;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="01" d="M8.5 8.5V2.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="02" d="M2.5 8.5H8.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="03" d="M20.5 8.50006V3C20.5 2.72386 20.2761 2.5 20 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V20C2.5 20.2761 2.72386 20.5 3 20.5H8.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-1" class="kd-color-icon-green-primary kd-stroke-width-icon-regular"><path id="04" d="M20.5 8.5H8.5V20.5H20C20.2761 20.5 20.5 20.2761 20.5 20V8.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
              <span class="rb-tool-label">选择</span>
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
    }</style><g id="caret-select-h-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="caret-select-h-path" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
            </button>
            <div class="rb-split" title="翻译" role="group" aria-label="翻译" data-control="split-button-horizontal">
              <button type="button" class="rb-tool has-label" aria-label="翻译">
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line" d="M1.5 3.5L9.5 3.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M5.5 1.5V3.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_3" d="M8 3.5C7.01778 6.44667 5.26776 9.07821 2.93021 11.1236L2.5 11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M7.5 10.5L7.06155 10.0616C5.69235 8.69235 4.49624 7.1604 3.5 5.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_5" d="M9.5 12.5H12.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_6" d="M8.5 14.5L10.9908 8.52215C10.9942 8.51395 11.0058 8.51395 11.0092 8.52215L13.5 14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-2" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="Subtract" d="M13.5 2C13.5882 2 13.6624 2.06578 13.6828 2.15159C13.7721 2.52625 13.8256 2.73318 13.9082 2.91602C14.1438 3.43734 14.5618 3.85504 15.083 4.09082C15.2656 4.17339 15.4725 4.22675 15.8464 4.31595C15.9328 4.33656 16 4.41117 16 4.5C16 4.58824 15.9332 4.66237 15.8474 4.68288C15.4727 4.77241 15.2658 4.82653 15.083 4.90918C14.5618 5.14496 14.1438 5.56266 13.9082 6.08398C13.8257 6.26666 13.772 6.47335 13.6828 6.84739C13.6624 6.93322 13.5882 7 13.5 7C13.4112 7 13.3366 6.93284 13.316 6.84643C13.2271 6.4731 13.1742 6.26647 13.0918 6.08398C12.8562 5.56266 12.4382 5.14496 11.917 4.90918C11.7341 4.82646 11.5269 4.77249 11.1516 4.68286C11.0658 4.66237 11 4.58821 11 4.5C11 4.4112 11.0662 4.33656 11.1525 4.31597C11.5271 4.22667 11.7343 4.17346 11.917 4.09082C12.4382 3.85504 12.8562 3.43734 13.0918 2.91602C13.1743 2.73337 13.227 2.5265 13.316 2.15254C13.3366 2.06616 13.4112 2 13.5 2Z" stroke="none"/></g></svg></span>
                <span class="rb-tool-label">翻译</span>
              </button>
              <button type="button" class="rb-tool rb-caret" aria-label="翻译菜单" aria-haspopup="menu" aria-expanded="false">
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
    }</style><g id="caret-translate-h-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="caret-translate-h-path" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
              </button>
            </div>
            </div>
          </div>

          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-find" hidden>
            <button type="button" class="rb-large-menu" title="查找" aria-label="查找" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="magnifier"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>放大镜_搜索_查看_查找</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M11.5 11.5L15 15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
              <span class="rb-large-label">查找<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <div class="rb-group-label">查找</div>
        </section>
        <div class="rb-divider-v"></div>

        <!-- 排版 · Figma 80:104301 -->
        <section class="rb-group" aria-label="排版" data-group-id="layout">
          <div class="rb-group-content rb-group-expanded" data-compact-hide="group-layout">
            <div class="rb-large-split" role="group" aria-label="AI排版" data-control="split-button-vertical">
  <button type="button" class="rb-large-split-main" title="AI排版" aria-label="AI排版">
    <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="ai_layout_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>AI排版24_ai_typeset_论文智能排版_intelligent_composition_paper</desc><style>
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
    }</style><g id="ai-layout-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="ai-layout-line" d="M20.5 11V3C20.5 2.72386 20.2761 2.5 20 2.5H4C3.72386 2.5 3.5 2.72386 3.5 3V21C3.5 21.2761 3.72386 21.5 4 21.5H12" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="ai-layout-line_2" d="M6.5 13.5H16.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="ai-layout-line_3" d="M6.5 17.5H13.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="ai-layout-line_4" d="M6.5 6C6.5 5.72386 6.72386 5.5 7 5.5H17C17.2761 5.5 17.5 5.72386 17.5 6V9C17.5 9.27614 17.2761 9.5 17 9.5H7C6.72386 9.5 6.5 9.27614 6.5 9V6Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="ai-layout-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="ai-layout-Subtract" d="M15.5 18C15.5882 18 15.6624 18.0658 15.6828 18.1516C15.7721 18.5262 15.8256 18.7332 15.9082 18.916C16.1438 19.4373 16.5618 19.855 17.083 20.0908C17.2656 20.1734 17.4725 20.2267 17.8464 20.3159C17.9328 20.3366 18 20.4112 18 20.5C18 20.5882 17.9332 20.6624 17.8474 20.6829C17.4727 20.7724 17.2658 20.8265 17.083 20.9092C16.5618 21.145 16.1438 21.5627 15.9082 22.084C15.8257 22.2667 15.772 22.4734 15.6828 22.8474C15.6624 22.9332 15.5882 23 15.5 23C15.4112 23 15.3366 22.9328 15.316 22.8464C15.2271 22.4731 15.1742 22.2665 15.0918 22.084C14.8562 21.5627 14.4382 21.145 13.917 20.9092C13.7341 20.8265 13.5269 20.7725 13.1516 20.6829C13.0658 20.6624 13 20.5882 13 20.5C13 20.4112 13.0662 20.3366 13.1525 20.316C13.5271 20.2267 13.7343 20.1735 13.917 20.0908C14.4382 19.855 14.8562 19.4373 15.0918 18.916C15.1743 18.7334 15.227 18.5265 15.316 18.1525C15.3366 18.0662 15.4112 18 15.5 18Z" stroke="none"/><path id="ai-layout-Subtract_2" d="M19.5 12.5C19.6059 12.5 19.6948 12.5789 19.7194 12.6819C19.8266 13.1315 19.8907 13.3798 19.9898 13.5992C20.2726 14.2248 20.7741 14.726 21.3996 15.009C21.6187 15.1081 21.8669 15.1721 22.3157 15.2791C22.4194 15.3039 22.5 15.3934 22.5 15.5C22.5 15.6059 22.4199 15.6948 22.3169 15.7195C21.8673 15.8269 21.6189 15.8918 21.3996 15.991C20.7741 16.274 20.2726 16.7752 19.9898 17.4008C19.8908 17.62 19.8265 17.868 19.7194 18.3169C19.6948 18.4199 19.6059 18.5 19.5 18.5C19.3934 18.5 19.3039 18.4194 19.2792 18.3157C19.1725 17.8677 19.1091 17.6198 19.0102 17.4008C18.7274 16.7752 18.2259 16.274 17.6004 15.991C17.3809 15.8917 17.1323 15.827 16.6819 15.7194C16.5789 15.6948 16.5 15.6059 16.5 15.5C16.5 15.3934 16.5794 15.3039 16.683 15.2792C17.1326 15.172 17.3811 15.1082 17.6004 15.009C18.2259 14.726 18.7274 14.2248 19.0102 13.5992C19.1092 13.38 19.1724 13.1318 19.2792 12.6831C19.3039 12.5794 19.3934 12.5 19.5 12.5Z" stroke="none"/></g></svg></span></span>
  </button>
  <button type="button" class="rb-large-split-menu" title="AI排版菜单" aria-label="AI排版菜单" aria-haspopup="menu" aria-expanded="false">
    <span class="rb-large-label">AI排版<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="caret-ai-layout-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="caret-ai-layout-path" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
  </button>
</div>
            <div class="rb-layout-v-pair" data-compact-hide="layout-stack">
            <button type="button" class="rb-large-menu" title="排版" aria-label="排版" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>排版24_文字排版_WordTools_WordTools_one_click_typesetting</desc><style>
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
    }</style><g id="word_tools-group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="word_tools-line" d="M4 12.6H9" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_2" d="M2.5 16L6.49086 7.02056C6.49438 7.01264 6.50562 7.01264 6.50914 7.02056L10.5 16" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="word_tools-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="word_tools-line_3" d="M2.5 3.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_4" d="M2.5 19.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_5" d="M14.5 7.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_6" d="M14.5 11.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_7" d="M14.5 15.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">排版<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="caret-layout-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="caret-layout-path" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
</button>
            <button type="button" class="rb-large-menu" title="排列" aria-label="排列" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>置于顶层24_排列_置顶_BringToFront</desc><style>
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
    .kd-color-icon-quaternary {
       fill: var(--kd-color-icon-quaternary, #E6E6E6);
       stroke: var(--kd-color-icon-quaternary, #E6E6E6);
       km_fill: #E6E6E6;
       km_stroke: #E6E6E6;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="bring_front-group-1" class="kd-color-icon-quaternary kd-stroke-width-icon-regular"><path id="bring_front-fill" d="M17 6.5H7C6.72386 6.5 6.5 6.72386 6.5 7V17C6.5 17.2761 6.72386 17.5 7 17.5H17C17.2761 17.5 17.5 17.2761 17.5 17V7C17.5 6.72386 17.2761 6.5 17 6.5Z" stroke="none"/></g><g id="bring_front-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="bring_front-line" d="M6.5 10.5H3C2.72386 10.5 2.5 10.2761 2.5 10V3C2.5 2.72386 2.72386 2.5 3 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V6.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="bring_front-line_2" d="M17 6.5H7C6.72386 6.5 6.5 6.72386 6.5 7V17C6.5 17.2761 6.72386 17.5 7 17.5H17C17.2761 17.5 17.5 17.2761 17.5 17V7C17.5 6.72386 17.2761 6.5 17 6.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="bring_front-line_3" d="M17.5 13.5H21C21.2761 13.5 21.5 13.7239 21.5 14V21C21.5 21.2761 21.2761 21.5 21 21.5H14C13.7239 21.5 13.5 21.2761 13.5 21V17.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">排列<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="caret-arrange-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="caret-arrange-path" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
</button>

            </div>
            <div class="rb-edit-stack rb-layout-h-stack" data-compact-show="layout-stack" data-compact-icon="layout-icon" hidden>
              <button type="button" class="rb-tool rb-menu" title="排版" aria-label="排版" aria-haspopup="menu" aria-expanded="false">
                <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="doc_tools"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>排版16_文字排版_排版_WordTools_WordTools_one_click_typesetting</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line" d="M2.5 8.49988H5.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M1.5 10.4999L3.99077 4.52215C3.99419 4.51395 4.00581 4.51395 4.00923 4.52215L6.5 10.4999" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_3" d="M1.5 1.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M1.5 13.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_5" d="M9.5 5.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_6" d="M9.5 9.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
                <span class="rb-tool-label">排版</span>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
              </button>
              <button type="button" class="rb-tool rb-menu" title="排列" aria-label="排列" aria-haspopup="menu" aria-expanded="false">
                <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="bring_front"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>置于顶层24_排列_置顶_BringToFront</desc><style>
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
    .kd-color-icon-quaternary {
       fill: var(--kd-color-icon-quaternary, #E6E6E6);
       stroke: var(--kd-color-icon-quaternary, #E6E6E6);
       km_fill: #E6E6E6;
       km_stroke: #E6E6E6;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="bring_front-group-1" class="kd-color-icon-quaternary kd-stroke-width-icon-regular"><path id="bring_front-fill" d="M17 6.5H7C6.72386 6.5 6.5 6.72386 6.5 7V17C6.5 17.2761 6.72386 17.5 7 17.5H17C17.2761 17.5 17.5 17.2761 17.5 17V7C17.5 6.72386 17.2761 6.5 17 6.5Z" stroke="none"/></g><g id="bring_front-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="bring_front-line" d="M6.5 10.5H3C2.72386 10.5 2.5 10.2761 2.5 10V3C2.5 2.72386 2.72386 2.5 3 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V6.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="bring_front-line_2" d="M17 6.5H7C6.72386 6.5 6.5 6.72386 6.5 7V17C6.5 17.2761 6.72386 17.5 7 17.5H17C17.2761 17.5 17.5 17.2761 17.5 17V7C17.5 6.72386 17.2761 6.5 17 6.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="bring_front-line_3" d="M17.5 13.5H21C21.2761 13.5 21.5 13.7239 21.5 14V21C21.5 21.2761 21.2761 21.5 21 21.5H14C13.7239 21.5 13.5 21.2761 13.5 21V17.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
                <span class="rb-tool-label">排列</span>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
              </button>
            </div>
          </div>

          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-layout" hidden>
            <button type="button" class="rb-large-menu" title="排版" aria-label="排版" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="doc_tools_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>排版24_文字排版_WordTools_WordTools_one_click_typesetting</desc><style>
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
    }</style><g id="word_tools-group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="word_tools-line" d="M4 12.6H9" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_2" d="M2.5 16L6.49086 7.02056C6.49438 7.01264 6.50562 7.01264 6.50914 7.02056L10.5 16" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="word_tools-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="word_tools-line_3" d="M2.5 3.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_4" d="M2.5 19.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_5" d="M14.5 7.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_6" d="M14.5 11.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="word_tools-line_7" d="M14.5 15.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
              <span class="rb-large-label">排版<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <div class="rb-group-label">排版</div>
        </section>
        <div class="rb-divider-v"></div>

        <!-- 模式 · Figma 80:104301 -->
        <section class="rb-group" aria-label="模式" data-group-id="mode">
          <div class="rb-group-content">
            <button type="button" class="rb-large" title="智能公文" aria-label="智能公文">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="doc_official_mode_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>专业模式24_字公文模式_OfficialDocumentMode_official_document_mode</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M4 2.50018H15.7929C15.9255 2.50018 16.0527 2.55286 16.1464 2.64663L20.3536 6.8538C20.4473 6.94757 20.5 7.07474 20.5 7.20735V21.0002C20.5 21.2763 20.2761 21.5002 20 21.5002H4C3.72386 21.5002 3.5 21.2763 3.5 21.0002V3.00018C3.5 2.72404 3.72386 2.50018 4 2.50018Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M15.5 2.50018V7.00018C15.5 7.27633 15.7239 7.50018 16 7.50018H20.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line_3" d="M11.9912 7.77945C11.9942 7.77024 12.0072 7.77024 12.0102 7.77945L12.893 10.4965H15.7499C15.7596 10.4965 15.7636 10.5089 15.7558 10.5146L13.4445 12.1938L14.3274 14.9109C14.3304 14.9201 14.3198 14.9278 14.312 14.9221L12.0007 13.2428L9.68943 14.9221C9.6816 14.9278 9.67105 14.9201 9.67404 14.9109L10.5569 12.1938L8.2456 10.5146C8.23776 10.5089 8.24179 10.4965 8.25148 10.4965H11.1084L11.9912 7.77945Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M6.5 17.5002H17.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
              <span class="rb-large-label">智能公文</span>
            </button>
          </div>
          <div class="rb-group-label">模式</div>
        </section>
      </div>
      <div class="rb-body rb-body-single" role="toolbar" aria-label="开始" hidden data-sr-compact="0">
        <!-- 单行 · Figma 80:103417 -->
        <div class="rb-sr-rail">
          <div class="rb-sr-group" aria-label="剪贴板">
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="格式刷" aria-label="格式刷"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="brush"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>刷16_格式刷_FormatPainter_brush_FormatPainterQat</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="line" d="M2.5 7.5H13.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_2" d="M9.5 11C9.5 11.6667 9.3 13.3 8.5 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_3" d="M14.5 6V7.00002C14.5 7.27615 14.2762 7.50001 14 7.50002L13.5 7.50003V11.3436C13.5 12.4237 13.1803 13.4796 12.5812 14.3782C12.5305 14.4543 12.4451 14.5 12.3536 14.5H1.77781C1.64474 14.5 1.55376 14.3656 1.60317 14.2421C2.19562 12.761 2.5 11.1804 2.5 9.58525V7.5H2C1.72386 7.5 1.5 7.27614 1.5 7V6C1.5 5.17157 2.17157 4.5 3 4.5H6.5V4L6.29057 3.37171C5.90164 2.20492 6.7701 1 8 1C9.2299 1 10.0984 2.20492 9.70943 3.37171L9.5 4V4.5H13C13.8284 4.5 14.5 5.17157 14.5 6Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
            <button type="button" class="rb-tool rb-menu" title="粘贴" aria-label="粘贴" aria-haspopup="menu"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>表单_账单</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M13.5 13.9991V3.99906C13.5 3.72292 13.2761 3.49906 13 3.49906H10V2C10 1.72386 9.77614 1.5 9.5 1.5H8H6.5C6.22386 1.5 6 1.72386 6 2L6 3.49906H3C2.72386 3.49906 2.5 3.72292 2.5 3.99906V13.9991C2.5 14.2752 2.72386 14.4991 3 14.4991H13C13.2761 14.4991 13.5 14.2752 13.5 13.9991Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M4.5 4V5.5C4.5 5.77614 4.72386 6 5 6H11C11.2761 6 11.5 5.77614 11.5 5.5V4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
          </div>
          <div class="rb-sr-sep" aria-hidden="true"></div>
          <div class="rb-sr-group" aria-label="字体">
            <button type="button" class="rb-sr-light-menu rb-sr-font-name" title="字体" aria-label="字体" aria-haspopup="menu" data-sr-hide="16"><span class="rb-sr-light-label">微软雅黑</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
            <button type="button" class="rb-sr-light-menu rb-sr-font-size" title="字号" aria-label="字号" aria-haspopup="menu" data-sr-hide="16"><span class="rb-sr-light-label">五号</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="增大字号" aria-label="增大字号" data-sr-hide="12"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_size_increase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>增加字号16_增大字号_IncreaseFontSize</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="line" d="M10 3.5H15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M12.5 1V6" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_3" d="M3.80078 9.59961H10.2" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M2 13.5L6.99083 2.02109C6.99432 2.01308 7.00569 2.01308 7.00917 2.02109L12 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="减小字号" aria-label="减小字号" data-sr-hide="12"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_size_reduce_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>减小字号16_DecreaseFontSize</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="line" d="M8.5 4.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_2" d="M3 10.6001H8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_3" d="M1.5 13.5L5.49072 3.52321C5.49407 3.51483 5.50593 3.51483 5.50928 3.52321L9.5 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="清除格式" aria-label="清除格式" data-sr-hide="13"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="eraser"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>橡皮擦16_消除污点_清除_擦除_清除格式_btn_photoerasepen2_ClearFormat_EraserOne_Pdf_CorrectionFluid_ClearContents2</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M4 6.99997L9.5 12.5M5.70711 14.5H7.29289C7.4255 14.5 7.55268 14.4473 7.64645 14.3535L14.6464 7.35352C14.8417 7.15826 14.8417 6.84168 14.6464 6.64642L9.85355 1.85352C9.65829 1.65826 9.34171 1.65826 9.14645 1.85352L1.35355 9.64642C1.15829 9.84168 1.15829 10.1583 1.35355 10.3535L5.35355 14.3535C5.44732 14.4473 5.5745 14.5 5.70711 14.5Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M7.5 14.5H14" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="加粗" aria-label="加粗"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="bold_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>加粗16_Bold_BoldQat_bookmarkBold</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="B" d="M4 3H8.00586C8.79883 3 9.389 3.03418 9.77637 3.10254C10.1683 3.16634 10.5169 3.30306 10.8223 3.5127C11.1322 3.72233 11.3896 4.0026 11.5947 4.35352C11.7998 4.69987 11.9023 5.08952 11.9023 5.52246C11.9023 5.99186 11.7747 6.42253 11.5195 6.81445C11.2689 7.20638 10.9271 7.50033 10.4941 7.69629C11.1048 7.87402 11.5742 8.17708 11.9023 8.60547C12.2305 9.03385 12.3945 9.53744 12.3945 10.1162C12.3945 10.5719 12.2874 11.0163 12.0732 11.4492C11.8636 11.8776 11.5742 12.2217 11.2051 12.4814C10.8405 12.7367 10.3893 12.8939 9.85156 12.9531C9.51432 12.9896 8.70085 13.0124 7.41113 13.0215H4V3ZM6.02344 4.66797V6.98535H7.34961C8.13802 6.98535 8.62793 6.97396 8.81934 6.95117C9.16569 6.91016 9.43685 6.79167 9.63281 6.5957C9.83333 6.39518 9.93359 6.13314 9.93359 5.80957C9.93359 5.49967 9.84701 5.24902 9.67383 5.05762C9.50521 4.86165 9.25228 4.74316 8.91504 4.70215C8.71452 4.67936 8.13802 4.66797 7.18555 4.66797H6.02344ZM6.02344 8.65332V11.333H7.89648C8.62565 11.333 9.08822 11.3125 9.28418 11.2715C9.58496 11.2168 9.82878 11.0846 10.0156 10.875C10.207 10.6608 10.3027 10.376 10.3027 10.0205C10.3027 9.71973 10.2298 9.46452 10.084 9.25488C9.93815 9.04525 9.72624 8.89258 9.44824 8.79688C9.1748 8.70117 8.5778 8.65332 7.65723 8.65332H6.02344Z" stroke="none"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="倾斜" aria-label="倾斜"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="italic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>斜体16_倾斜_Italic</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="group-0_2" d="M7.5 2.6001H9M10.5 2.6001H9M4.5 13.4001H6M7.5 13.4001H6M9 2.6001L6 13.4001" stroke-linecap="round" stroke-linejoin="bevel" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <div class="rb-split" title="下划线"><button type="button" class="rb-tool" aria-label="下划线"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="underscore_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>下划线16_Underline_Pdf_Underline_v2_Pdf_Underline</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M3.5 13.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_2" d="M4.59961 3.5V8.5C4.59961 10.1016 5.89798 11.4 7.49961 11.4C9.10124 11.4 10.3996 10.1016 10.3996 8.5V3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="下划线菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-split" title="删除线" data-sr-hide="2"><button type="button" class="rb-tool" aria-label="删除线"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="strikethrough"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>删除线16_Strikethought_DeleteLine</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M1 9.40039H15" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_2" d="M2.3985 6.79177C3.5952 5.94347 4.98188 5.94618 5.66269 6.44278C6.38697 6.97109 6.50161 7.79437 6.50161 8.85078C6.50161 9.69591 6.50161 11.4643 6.50161 12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M6.46021 9.00684C5.07284 9.36141 2.50801 9.07317 2.03645 10.5715C1.6371 11.8403 2.68931 12.7242 3.56247 12.7242C4.42012 12.7242 5.73564 12.1649 6.47974 10.1514" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M8.5 3.5V12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5" d="M13.4992 9.6C13.4992 11.4377 12.4675 12.7 11.0881 12.7C9.58691 12.7 8.69922 11.36 8.69922 9.6C8.69922 7.80021 9.65433 6.5 11.0881 6.5C12.4494 6.5 13.4992 7.71199 13.4992 9.6Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="删除线菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-split" title="上标" data-sr-hide="5"><button type="button" class="rb-tool" aria-label="上标"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="math_superscript"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>上标16_Superscript</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line" d="M14.5 6.49963H11.5C12.0257 5.3685 13.1658 4.89816 13.9027 4.1849C14.9748 3.14721 14.4115 1.67701 13.1517 1.60268C12.3834 1.55735 11.8729 2.02347 11.6715 2.60892" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_2" d="M2 4L9 13" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M9 4L2 13" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="上标菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-split" title="高亮" data-sr-hide="15"><button type="button" class="rb-tool" aria-label="高亮"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="color_marker"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>马克笔_填充_显示协作者颜色_高亮</desc><style>
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
    .kd-color-icon-quaternary {
       fill: var(--kd-color-icon-quaternary, #E6E6E6);
       stroke: var(--kd-color-icon-quaternary, #E6E6E6);
       km_fill: #E6E6E6;
       km_stroke: #E6E6E6;
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
    }</style><g id="group-1" class="kd-color-icon-quaternary kd-stroke-width-icon-regular"><path id="fill" d="M5.85355 3.14645L7.64645 1.35355C7.84171 1.15829 8.15829 1.15829 8.35355 1.35355L12.1464 5.14645C12.3417 5.34171 12.3417 5.65829 12.1464 5.85355L10.3536 7.64645C10.1583 7.84171 9.84171 7.84171 9.64645 7.64645L5.85355 3.85355C5.65829 3.65829 5.65829 3.34171 5.85355 3.14645Z" stroke="none"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M8 1L5.5 3.5L10 8L12.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M5.5 3.5C5.5 5.5 4.5 8 2.5 9.5H5.5C6.16667 8.83333 8 7.6 10 8" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-2" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="fill_2" d="M0 13.5001C0 12.1194 1.11929 11.0001 2.5 11.0001H13.5C14.8807 11.0001 16 12.1194 16 13.5001C16 14.8808 14.8807 16.0001 13.5 16.0001H2.5C1.11929 16.0001 0 14.8808 0 13.5001Z" stroke="none"/></g><g id="group-3" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line (Stroke) (Stroke)" opacity="0.5" d="M13.5 11C14.8807 11 16 12.1193 16 13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5C0 12.1193 1.11929 11 2.5 11H13.5ZM2.5 12C1.67157 12 1 12.6716 1 13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5C15 12.6716 14.3284 12 13.5 12H2.5Z" stroke="none"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="高亮菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-split" title="字体颜色"><button type="button" class="rb-tool" aria-label="字体颜色"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="color_font"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>字体颜色16_ChartFontColor</desc><style>
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
    .kd-color-icon-orange-primary {
       fill: var(--kd-color-icon-orange-primary, #BF5513);
       stroke: var(--kd-color-icon-orange-primary, #BF5513);
       km_fill: #BF5513;
       km_stroke: #BF5513;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line" d="M5.5 6.59998H10.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M4 9.5L8 1L12 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="fill" d="M0 13.5001C0 12.1194 1.11929 11.0001 2.5 11.0001H13.5C14.8807 11.0001 16 12.1194 16 13.5001C16 14.8808 14.8807 16.0001 13.5 16.0001H2.5C1.11929 16.0001 0 14.8808 0 13.5001Z" stroke="none"/></g><g id="group-2" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line (Stroke) (Stroke)" opacity="0.5" d="M13.5 11C14.8807 11 16 12.1193 16 13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5C0 12.1193 1.11929 11 2.5 11H13.5ZM2.5 12C1.67157 12 1 12.6716 1 13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5C15 12.6716 14.3284 12 13.5 12H2.5Z" stroke="none"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="字体颜色菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="更多" aria-label="更多"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="more"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>更多_more</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="Ellipse 545" d="M9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30964 9.25 8Z" stroke="none"/><path id="Ellipse 547" d="M14.75 8C14.75 8.69036 14.1904 9.25 13.5 9.25C12.8096 9.25 12.25 8.69036 12.25 8C12.25 7.30964 12.8096 6.75 13.5 6.75C14.1904 6.75 14.75 7.30964 14.75 8Z" stroke="none"/><path id="Ellipse 546" d="M3.75 8C3.75 8.69036 3.19036 9.25 2.5 9.25C1.80964 9.25 1.25 8.69036 1.25 8C1.25 7.30964 1.80964 6.75 2.5 6.75C3.19036 6.75 3.75 7.30964 3.75 8Z" stroke="none"/></g></svg></span></button>
          </div>
          <div class="rb-sr-sep" aria-hidden="true"></div>
          <div class="rb-sr-group" aria-label="段落" data-sr-para-group>
            <div class="rb-split" title="项目符号" data-sr-hide="11"><button type="button" class="rb-tool" aria-label="项目符号"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="list_bullets_ten"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>项目符号十16_BulletsNumber_符号</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="fill" d="M3.79922 2.5002C3.79922 3.21817 3.21719 3.8002 2.49922 3.8002C1.78125 3.8002 1.19922 3.21817 1.19922 2.5002C1.19922 1.78223 1.78125 1.2002 2.49922 1.2002C3.21719 1.2002 3.79922 1.78223 3.79922 2.5002Z" stroke="none"/><path id="fill_2" d="M3.80117 7.49971C3.80117 8.21768 3.21914 8.79971 2.50117 8.79971C1.7832 8.79971 1.20117 8.21768 1.20117 7.49971C1.20117 6.78174 1.7832 6.19971 2.50117 6.19971C3.21914 6.19971 3.80117 6.78174 3.80117 7.49971Z" stroke="none"/><path id="fill_3" d="M3.80117 12.4997C3.80117 13.2177 3.21914 13.7997 2.50117 13.7997C1.7832 13.7997 1.20117 13.2177 1.20117 12.4997C1.20117 11.7817 1.7832 11.1997 2.50117 11.1997C3.21914 11.1997 3.80117 11.7817 3.80117 12.4997Z" stroke="none"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M6.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M6.5 7.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M6.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="项目符号菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-split" title="编号" data-sr-hide="11"><button type="button" class="rb-tool" aria-label="编号"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="list_ordered_number"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="variant" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-variant-scheme"><desc>有序列表_数字16_编号_项目编号_Numbering_显示行号</desc><style>
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

    .kd-dir-ltr { 
       visibility: var(--kd-visibility-dir-ltr, visible)
    }
    .kd-dir-rtl { 
       visibility: var(--kd-visibility-dir-rtl, hidden)
    }
</style><g class="kd-dir-ltr"><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M7.5 2.5L14.5 2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M7.5 7.5L14.5 7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M7.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_4" d="M2 2.5L3.5 1.5V5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5" d="M4.75 13.5006H2C2.43805 12.3694 3.3549 12.3459 4.08333 11.7499C5 10.9998 4.5 9.50016 3.37642 9.5C2.73459 9.49991 2.16786 9.91443 2 10.4999" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></g><g class="kd-dir-rtl"><g transform="translate(16,0) scale(-1,1)"><g id="group-0-rtl" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line-rtl" d="M7.5 2.5L14.5 2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2-rtl" d="M7.5 7.5L14.5 7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3-rtl" d="M7.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-1-rtl" class="kd-color-icon-primary kd-stroke-width-icon-regular"><g transform="matrix(-1,0,0,1,6.75,0)"><path id="line_4-rtl" d="M2 2.5L3.5 1.5V5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5-rtl" d="M4.75 13.5006H2C2.43805 12.3694 3.3549 12.3459 4.08333 11.7499C5 10.9998 4.5 9.50016 3.37642 9.5C2.73459 9.49991 2.16786 9.91443 2 10.4999" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></g></g></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="编号菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="减少缩进量" aria-label="减少缩进量" data-sr-hide="1"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="indent_decrease"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>减少缩进16_减少缩进量_DecreaseIndent</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line" d="M7.5 7.5H1.5M1.5 7.5L3.5 5.5M1.5 7.5L3.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_2" d="M1.5 1.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 13.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M10.5 5.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5" d="M10.5 9.5L13.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="增加缩进量" aria-label="增加缩进量" data-sr-hide="1"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="indent_increase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>增加缩进16_增加缩进量_IncreaseIndent</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line" d="M1.5 7.5H7.5M7.5 7.5L5.5 5.5M7.5 7.5L5.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_2" d="M1.5 1.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 13.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M10.5 5.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5" d="M10.5 9.5L13.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="左对齐" aria-label="左对齐" data-sr-hide="14"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_left"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>左对齐16_AlignLeft_AlignLeftQat_居左_靠左对齐</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M1.5 7.5H7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="居中" aria-label="居中" data-sr-hide="14"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>水平居中16_居中对齐_水平居中_垂直居中_AlignCenter_AlignCenterQat</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M4.5 7.5H10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="右对齐" aria-label="右对齐" data-sr-hide="4"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>右对齐16_AlignRight_居右_靠右对齐</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M7.5 7.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="两端对齐" aria-label="两端对齐" data-sr-hide="14"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_both_side"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>两端对齐16_alignjustify_更多菜单</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="Vector 1909" d="M1.5 2.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 1910" d="M1.5 7.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="Vector 1911" d="M1.5 12.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="分散对齐" aria-label="分散对齐" data-sr-hide="4"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_distributed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>分散对齐16_AlignDistributed</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line" d="M6.5 1.5L4.50707 3.49293C4.50317 3.49683 4.50317 3.50317 4.50707 3.50707L6.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M9.5 1.5L11.4929 3.49293C11.4968 3.49683 11.4968 3.50317 11.4929 3.50707L9.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_3" d="M1.5 1.5V13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M4.5 8.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_5" d="M4.5 12.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_6" d="M14.5 1.5V13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
            <button type="button" class="rb-tool rb-menu" title="行距" aria-label="行距" aria-haspopup="menu" data-sr-hide="3"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="line_spacing"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>行距16_增大段落行距_IncreaseSpace_LineSpacing_TightLineSpacing_LooseLineSpacing_行间距</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line" d="M3.5 1.5V13.5M3.5 1.5L1.5 3.5M3.5 1.5L5.5 3.5M3.5 13.5L1.5 11.5M3.5 13.5L5.5 11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_2" d="M8.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M8.5 7.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_4" d="M8.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
            <div class="rb-split" title="底纹" data-sr-hide="10"><button type="button" class="rb-tool" aria-label="底纹"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="color_paint_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>油漆桶16_底纹颜色_TableShadingColor_填充_填充色</desc><style>
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
    .kd-color-icon-quaternary {
       fill: var(--kd-color-icon-quaternary, #E6E6E6);
       stroke: var(--kd-color-icon-quaternary, #E6E6E6);
       km_fill: #E6E6E6;
       km_stroke: #E6E6E6;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="group-2" class="kd-color-icon-quaternary kd-stroke-width-icon-regular"><path id="fill" d="M11.5 5H3.5L2.85355 5.64645C2.65829 5.84171 2.65829 6.15829 2.85355 6.35355L6.14645 9.64645C6.34171 9.84171 6.65829 9.84171 6.85355 9.64645L11.5 5Z" stroke="none"/></g><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="fill_2" d="M13.5 8.48463C13.5 7.92668 13.3431 7.09848 12.5048 6C11.6664 7.09848 11.5 7.92668 11.5 8.48463C11.5 9.32155 11.8102 10 12.5048 10C13.1993 10 13.5 9.32155 13.5 8.48463Z" stroke="none"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M2.5 2.5H8" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M6 2.5L7.64645 0.853553C7.84171 0.658291 8.15829 0.658291 8.35355 0.853553L11.6464 4.14645C11.8417 4.34171 11.8417 4.65829 11.6464 4.85355L6.85355 9.64645C6.65829 9.84171 6.34171 9.84171 6.14645 9.64645L2.85355 6.35355C2.65829 6.15829 2.65829 5.84171 2.85355 5.64645L4.5 4" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="底纹菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-split" title="框线" data-sr-hide="10"><button type="button" class="rb-tool" aria-label="框线"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="border_outer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>外侧框线16_边框_OutsideBorders</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" opacity="0.3" d="M7.5 2V4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" opacity="0.3" d="M7.5 5V7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_3" opacity="0.3" d="M7.5 8V10" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" opacity="0.3" d="M7.5 11V13" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_5" opacity="0.3" d="M2 7.5H4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_6" opacity="0.3" d="M5 7.5H7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_7" opacity="0.3" d="M8 7.5H10" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_8" opacity="0.3" d="M11 7.5H13" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_9" d="M12.8995 1.6001H2.09961C1.82347 1.6001 1.59961 1.82396 1.59961 2.1001V12.9001C1.59961 13.1763 1.82347 13.4001 2.09961 13.4001H12.8995C13.1757 13.4001 13.3995 13.1763 13.3995 12.9001V2.1001C13.3995 1.82396 13.1757 1.6001 12.8995 1.6001Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="框线菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" title="更多" aria-label="更多" data-sr-hide="14"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="more"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>更多_more</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="Ellipse 545" d="M9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30964 9.25 8Z" stroke="none"/><path id="Ellipse 547" d="M14.75 8C14.75 8.69036 14.1904 9.25 13.5 9.25C12.8096 9.25 12.25 8.69036 12.25 8C12.25 7.30964 12.8096 6.75 13.5 6.75C14.1904 6.75 14.75 7.30964 14.75 8Z" stroke="none"/><path id="Ellipse 546" d="M3.75 8C3.75 8.69036 3.19036 9.25 2.5 9.25C1.80964 9.25 1.25 8.69036 1.25 8C1.25 7.30964 1.80964 6.75 2.5 6.75C3.19036 6.75 3.75 7.30964 3.75 8Z" stroke="none"/></g></svg></span></button>
          <button type="button" class="rb-sr-light-menu rb-sr-para-entry" title="段落" aria-label="段落" aria-haspopup="menu" data-sr-show="14" hidden><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_left"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>左对齐16_AlignLeft_AlignLeftQat_居左_靠左对齐</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M1.5 7.5H7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span><span class="rb-sr-light-label">段落</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
          <div class="rb-sr-sep" aria-hidden="true"></div>
          <div class="rb-sr-group" aria-label="样式" data-sr-hide="9">
            <button type="button" class="rb-sr-light-menu rb-sr-style" title="样式" aria-label="样式" aria-haspopup="menu" data-sr-hide="9"><span class="rb-sr-light-label">正文</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
          </div>
          <div class="rb-sr-sep" aria-hidden="true" data-sr-hide="9"></div>
          <div class="rb-sr-group" aria-label="查找">
            <div class="rb-sr-light-split" title="查找替换" data-control="split-button-horizontal" data-sr-icon="8"><button type="button" class="rb-sr-light-main" aria-label="查找替换"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="magnifier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>放大镜_搜索_查看_查找</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M11.5 11.5L15 15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">查找替换</span></button><button type="button" class="rb-sr-light-caret" aria-label="查找替换菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-sr-light-split" title="翻译" data-control="split-button-horizontal"><button type="button" class="rb-sr-light-main" aria-label="翻译"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="translation_ai"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>AI翻译16_划词翻译_Pdf_TranslationSelect_itranslation_itranslation-dis</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line" d="M1.5 3.5L9.5 3.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M5.5 1.5V3.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_3" d="M8 3.5C7.01778 6.44667 5.26776 9.07821 2.93021 11.1236L2.5 11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M7.5 10.5L7.06155 10.0616C5.69235 8.69235 4.49624 7.1604 3.5 5.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line_5" d="M9.5 12.5H12.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_6" d="M8.5 14.5L10.9908 8.52215C10.9942 8.51395 11.0058 8.51395 11.0092 8.52215L13.5 14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-2" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="Subtract" d="M13.5 2C13.5882 2 13.6624 2.06578 13.6828 2.15159C13.7721 2.52625 13.8256 2.73318 13.9082 2.91602C14.1438 3.43734 14.5618 3.85504 15.083 4.09082C15.2656 4.17339 15.4725 4.22675 15.8464 4.31595C15.9328 4.33656 16 4.41117 16 4.5C16 4.58824 15.9332 4.66237 15.8474 4.68288C15.4727 4.77241 15.2658 4.82653 15.083 4.90918C14.5618 5.14496 14.1438 5.56266 13.9082 6.08398C13.8257 6.26666 13.772 6.47335 13.6828 6.84739C13.6624 6.93322 13.5882 7 13.5 7C13.4112 7 13.3366 6.93284 13.316 6.84643C13.2271 6.4731 13.1742 6.26647 13.0918 6.08398C12.8562 5.56266 12.4382 5.14496 11.917 4.90918C11.7341 4.82646 11.5269 4.77249 11.1516 4.68286C11.0658 4.66237 11 4.58821 11 4.5C11 4.4112 11.0662 4.33656 11.1525 4.31597C11.5271 4.22667 11.7343 4.17346 11.917 4.09082C12.4382 3.85504 12.8562 3.43734 13.0918 2.91602C13.1743 2.73337 13.227 2.5265 13.316 2.15254C13.3366 2.06616 13.4112 2 13.5 2Z" stroke="none"/></g></svg></span><span class="rb-sr-light-label">翻译</span></button><button type="button" class="rb-sr-light-caret" aria-label="翻译菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
          </div>
          <div class="rb-sr-sep" aria-hidden="true"></div>
          <div class="rb-sr-group" aria-label="排版" data-sr-hide="7">
            <button type="button" class="rb-sr-light-menu" title="排版" aria-label="排版" aria-haspopup="menu" data-sr-hide="7"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="doc_tools"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>排版16_文字排版_排版_WordTools_WordTools_one_click_typesetting</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line" d="M2.5 8.49988H5.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M1.5 10.4999L3.99077 4.52215C3.99419 4.51395 4.00581 4.51395 4.00923 4.52215L6.5 10.4999" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_3" d="M1.5 1.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M1.5 13.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_5" d="M9.5 5.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_6" d="M9.5 9.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">排版</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
          </div>
          <div class="rb-sr-sep" aria-hidden="true" data-sr-hide="7"></div>
          <button type="button" class="kd-button kd-button-light kd-button-sm rb-sr-light-btn" title="智能公文" aria-label="智能公文" data-sr-hide="6"><span class="kd-button-prefix-icon"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="doc_official_mode"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>专业模式16_字公文模式_OfficialDocumentMode_official_document_mode</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M9.79289 1.50012H3C2.72386 1.50012 2.5 1.72398 2.5 2.00012V14.0001C2.5 14.2763 2.72386 14.5001 3 14.5001H13C13.2761 14.5001 13.5 14.2763 13.5 14.0001V5.20735C13.5 5.07474 13.4473 4.94757 13.3536 4.8538L10.1464 1.64657C10.0527 1.5528 9.9255 1.50012 9.79289 1.50012Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M9.50003 1.50012L9.5 5.00016C9.5 5.2763 9.72386 5.50016 10 5.50016H13.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line_3" d="M7.98857 5.52939C7.99156 5.52018 8.00459 5.52018 8.00759 5.52939L8.6422 7.48253H10.6958C10.7055 7.48253 10.7096 7.49492 10.7017 7.50062L9.04029 8.70772L9.6749 10.6609C9.67789 10.6701 9.66735 10.6777 9.65951 10.672L7.99808 9.46493L6.33664 10.672C6.3288 10.6777 6.31826 10.6701 6.32125 10.6609L6.95586 8.70772L5.29443 7.50062C5.28659 7.49492 5.29062 7.48253 5.30031 7.48253H7.35395L7.98857 5.52939Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M4.5 12.5001H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-button-children">智能公文</span></button><div class="rb-sr-overflow" data-sr-show="6" hidden><button type="button" class="rb-sr-light-menu rb-sr-overflow-btn" title="更多" aria-label="更多" aria-haspopup="menu" aria-expanded="false"><span class="rb-sr-light-label">更多</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button><div class="kd-menu kd-menu-vertical rb-sr-overflow-menu" role="menu" hidden><div class="kd-menu-item" role="menuitem" data-sr-more-item="6" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="doc_official_mode"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>专业模式16_字公文模式_OfficialDocumentMode_official_document_mode</desc><style>
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
    }</style><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line" d="M9.79289 1.50012H3C2.72386 1.50012 2.5 1.72398 2.5 2.00012V14.0001C2.5 14.2763 2.72386 14.5001 3 14.5001H13C13.2761 14.5001 13.5 14.2763 13.5 14.0001V5.20735C13.5 5.07474 13.4473 4.94757 13.3536 4.8538L10.1464 1.64657C10.0527 1.5528 9.9255 1.50012 9.79289 1.50012Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="line_2" d="M9.50003 1.50012L9.5 5.00016C9.5 5.2763 9.72386 5.50016 10 5.50016H13.5" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="line_3" d="M7.98857 5.52939C7.99156 5.52018 8.00459 5.52018 8.00759 5.52939L8.6422 7.48253H10.6958C10.7055 7.48253 10.7096 7.49492 10.7017 7.50062L9.04029 8.70772L9.6749 10.6609C9.67789 10.6701 9.66735 10.6777 9.65951 10.672L7.99808 9.46493L6.33664 10.672C6.3288 10.6777 6.31826 10.6701 6.32125 10.6609L6.95586 8.70772L5.29443 7.50062C5.28659 7.49492 5.29062 7.48253 5.30031 7.48253H7.35395L7.98857 5.52939Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M4.5 12.5001H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">智能公文</span></div><div class="kd-menu-item" role="menuitem" data-sr-more-item="7" tabindex="-1" hidden><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="doc_tools"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>排版16_文字排版_排版_WordTools_WordTools_one_click_typesetting</desc><style>
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
    }</style><g id="group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="line" d="M2.5 8.49988H5.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_2" d="M1.5 10.4999L3.99077 4.52215C3.99419 4.51395 4.00581 4.51395 4.00923 4.52215L6.5 10.4999" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="line_3" d="M1.5 1.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_4" d="M1.5 13.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_5" d="M9.5 5.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="line_6" d="M9.5 9.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">排版</span></div></div></div></div>
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
