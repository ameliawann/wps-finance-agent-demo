window.RIBBONS=window.RIBBONS||{};
window.RIBBONS.wpp=`<header class="rb-ribbon" role="banner">
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
              <!-- 注意：WPP 无「文件」选项卡（文件入口是左侧 ≡ 文件按钮），与 docs/screenshots/wpp.png 对齐 -->
              <div class="kd-tabs-tab-bar kd-tabs-tab-bar-active" role="tab" aria-selected="true" tabindex="0" data-tab-id="home">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">开始</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="insert">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">插入</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="design">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">设计</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="transitions">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">切换</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="animations">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">动画</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="slideshow">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">放映</span></div>
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
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="drawing-tools">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">绘图工具</span></div>
                <div class="kd-tabs-tab-bar-ink"></div>
              </div>
              <div class="kd-tabs-tab-bar" role="tab" aria-selected="false" tabindex="-1" data-tab-id="text-tools">
                <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">文本工具</span></div>
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
                <section class="rb-group" aria-label="剪贴板" data-group-id="clipboard">
          <div class="rb-group-content rb-clipboard-large" data-compact-hide="clipboard-compact">
            <button type="button" class="rb-large" title="格式刷" aria-label="格式刷">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="brush_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>刷24_格式刷_FormatPainter_brush_FormatPainterQat</desc><style>
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
    }</style><g id="sc9001-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="sc9001-line" d="M4.5 10.5H19.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9001-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9001-line_2" d="M14.5 16C14.3794 17.4168 14 19 13 20.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9001-line_3" d="M4 10.5H4.5V14.1999C4.5 16.3517 3.86306 18.4554 2.66945 20.2458C2.59702 20.3545 2.67491 20.5 2.80548 20.5H17.2947C17.4245 20.5 17.5472 20.441 17.6282 20.3397C18.8399 18.8251 19.5 16.9433 19.5 15.0037V10.5H20C20.2761 10.5 20.5 10.2761 20.5 10V8.5C20.5 7.39543 19.6046 6.5 18.5 6.5H13.5V5.5L13.9348 4.63049C14.6539 3.19223 13.608 1.5 12 1.5C10.392 1.5 9.34612 3.19223 10.0652 4.63049L10.5 5.5V6.5H5.5C4.39543 6.5 3.5 7.39543 3.5 8.5V10C3.5 10.2761 3.72386 10.5 4 10.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">格式刷</span>
</button>
            <div class="rb-large-split" role="group" aria-label="粘贴" data-control="split-button-vertical">
  <button type="button" class="rb-large-split-main" title="粘贴" aria-label="粘贴">
    <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="paste_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>粘贴24_Paste</desc><style>
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
    }</style><g id="sc9002-group-2" class="kd-color-icon-blue-quaternary kd-stroke-width-icon-regular"><path id="sc9002-fill" d="M12.5 11C12.5 10.7239 12.7239 10.5 13 10.5H21C21.2761 10.5 21.5 10.7239 21.5 11V21C21.5 21.2761 21.2761 21.5 21 21.5H13C12.7239 21.5 12.5 21.2761 12.5 21V11Z" stroke="none"/></g><g id="sc9002-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9002-line" d="M12.5 19.5H3C2.72386 19.5 2.5 19.2761 2.5 19V4C2.5 3.72386 2.72386 3.5 3 3.5H7.5V2C7.5 1.72386 7.72386 1.5 8 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V3.5H17C17.2761 3.5 17.5 3.72386 17.5 4V10.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9002-line_2" d="M5.5 3.5V6C5.5 6.27614 5.72386 6.5 6 6.5H14C14.2761 6.5 14.5 6.27614 14.5 6V3.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9002-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9002-line_3" d="M21 10.5H13C12.7239 10.5 12.5 10.7239 12.5 11V21C12.5 21.2761 12.7239 21.5 13 21.5H21C21.2761 21.5 21.5 21.2761 21.5 21V11C21.5 10.7239 21.2761 10.5 21 10.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
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
    }</style><g id="sc9003-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9003-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
  </button>
</div>
            <div class="rb-stack">
              <button type="button" class="rb-tool" title="剪切" aria-label="剪切"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="cut"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>剪16_剪切_剪贴_Cut_CutQat</desc><style>
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
    }</style><g id="sc9004-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9004-line" d="M5.5 1.5L10.55 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9004-line_2" d="M10.4991 1.5L5.44922 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9004-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9004-line_3" d="M5.5 11.5C5.5 12.6046 4.60457 13.5 3.5 13.5C2.39543 13.5 1.5 12.6046 1.5 11.5C1.5 10.3954 2.39543 9.5 3.5 9.5C4.60457 9.5 5.5 10.3954 5.5 11.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9004-line_4" d="M14.5 11.5C14.5 12.6046 13.6046 13.5 12.5 13.5C11.3954 13.5 10.5 12.6046 10.5 11.5C10.5 10.3954 11.3954 9.5 12.5 9.5C13.6046 9.5 14.5 10.3954 14.5 11.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="复制" aria-label="复制"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="copy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>复制16_副本_Copy_CopyQat</desc><style>
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
    }</style><g id="sc9005-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9005-line" d="M9.5 4.5V2C9.5 1.72386 9.27614 1.5 9 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V11C1.5 11.2761 1.72386 11.5 2 11.5H6.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9005-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9005-line_2" d="M11 4.5H7C6.72386 4.5 6.5 4.72386 6.5 5V14C6.5 14.2761 6.72386 14.5 7 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V8L11 4.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9005-line_3" d="M10.5 4.5V8C10.5 8.27614 10.7239 8.5 11 8.5H14.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
            </div>
          </div>
          <div class="rb-group-content rb-clipboard-compact" data-compact-show="clipboard-compact" hidden>
            <div class="rb-font-panel">
              <div class="rb-font-row">
                <button type="button" class="rb-tool has-label" title="格式刷" aria-label="格式刷"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="brush"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>刷16_格式刷_FormatPainter_brush_FormatPainterQat</desc><style>
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
    }</style><g id="dl20001-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="dl20001-line" d="M2.5 7.5H13.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="dl20001-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20001-line_2" d="M9.5 11C9.5 11.6667 9.3 13.3 8.5 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20001-line_3" d="M14.5 6V7.00002C14.5 7.27615 14.2762 7.50001 14 7.50002L13.5 7.50003V11.3436C13.5 12.4237 13.1803 13.4796 12.5812 14.3782C12.5305 14.4543 12.4451 14.5 12.3536 14.5H1.77781C1.64474 14.5 1.55376 14.3656 1.60317 14.2421C2.19562 12.761 2.5 11.1804 2.5 9.58525V7.5H2C1.72386 7.5 1.5 7.27614 1.5 7V6C1.5 5.17157 2.17157 4.5 3 4.5H6.5V4L6.29057 3.37171C5.90164 2.20492 6.7701 1 8 1C9.2299 1 10.0984 2.20492 9.70943 3.37171L9.5 4V4.5H13C13.8284 4.5 14.5 5.17157 14.5 6Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-tool-label">格式刷</span></button>
                <button type="button" class="rb-tool" title="剪切" aria-label="剪切"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="cut"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>剪16_剪切_剪贴_Cut_CutQat</desc><style>
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
    }</style><g id="dl20002-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20002-line" d="M5.5 1.5L10.55 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20002-line_2" d="M10.4991 1.5L5.44922 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="dl20002-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="dl20002-line_3" d="M5.5 11.5C5.5 12.6046 4.60457 13.5 3.5 13.5C2.39543 13.5 1.5 12.6046 1.5 11.5C1.5 10.3954 2.39543 9.5 3.5 9.5C4.60457 9.5 5.5 10.3954 5.5 11.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20002-line_4" d="M14.5 11.5C14.5 12.6046 13.6046 13.5 12.5 13.5C11.3954 13.5 10.5 12.6046 10.5 11.5C10.5 10.3954 11.3954 9.5 12.5 9.5C13.6046 9.5 14.5 10.3954 14.5 11.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
              </div>
              <div class="rb-font-row">
                <div class="rb-split" title="粘贴" data-control="split-button-horizontal" role="group" aria-label="粘贴">
                  <button type="button" class="rb-tool has-label" aria-label="粘贴"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="paste"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>粘贴16_Paste</desc><style>
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
    }</style><g id="dl20003-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20003-line" d="M7.5 13.5H2C1.72386 13.5 1.5 13.2761 1.5 13V3C1.5 2.72386 1.72386 2.5 2 2.5H4.5V2C4.5 1.72386 4.72386 1.5 5 1.5H8C8.27614 1.5 8.5 1.72386 8.5 2V2.5H11C11.2761 2.5 11.5 2.72386 11.5 3V6.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20003-line_2" d="M3.5 2.5V4C3.5 4.27614 3.72386 4.5 4 4.5H9C9.27614 4.5 9.5 4.27614 9.5 4V2.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="dl20003-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="dl20003-line_3" d="M14 6.5H8C7.72386 6.5 7.5 6.72386 7.5 7V14C7.5 14.2761 7.72386 14.5 8 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V7C14.5 6.72386 14.2761 6.5 14 6.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-tool-label">粘贴</span></button>
                  <button type="button" class="rb-tool rb-caret" aria-label="粘贴菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="dl20004-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20004-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
                </div>
                <button type="button" class="rb-tool" title="复制" aria-label="复制"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="copy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>复制16_副本_Copy_CopyQat</desc><style>
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
    }</style><g id="dl20005-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20005-line" d="M9.5 4.5V2C9.5 1.72386 9.27614 1.5 9 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V11C1.5 11.2761 1.72386 11.5 2 11.5H6.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="dl20005-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="dl20005-line_2" d="M11 4.5H7C6.72386 4.5 6.5 4.72386 6.5 5V14C6.5 14.2761 6.72386 14.5 7 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V8L11 4.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20005-line_3" d="M10.5 4.5V8C10.5 8.27614 10.7239 8.5 11 8.5H14.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
              </div>
            </div>
          </div>
          <button type="button" class="rb-group-more" title="剪贴板对话框" aria-label="剪贴板对话框"><span class="rb-icon rb-icon-11" aria-hidden="true" data-icon="arrow_up_right"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#sc9006-clip0_57_20044)">
<path d="M4.5 7.5H7.5V4.5" stroke="#757575" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 7.5L4.5 4.5" stroke="#757575" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="sc9006-clip0_57_20044">
<rect width="11" height="11" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
</span></button>
          <div class="rb-group-label">剪贴板</div>
        </section>
        <div class="rb-divider-v"></div>
                <section class="rb-group" aria-label="开始放映" data-group-id="slideshow-start">
          <div class="rb-group-content">
            <div class="rb-large-split" role="group" aria-label="当页开始" data-control="split-button-vertical">
  <button type="button" class="rb-large-split-main" title="当页开始" aria-label="当页开始">
    <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="slide_show_view_menu_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>幻灯片放映24_slide_show_view_menu</desc><style>
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
    }</style><g id="sc9007-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9007-line" d="M2.5 3.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9007-line_2" d="M20.5 3.5V13" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9007-line_3" d="M3.5 3.5V16C3.5 16.2761 3.72386 16.5 4 16.5H12" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9007-line_4" d="M9.5 16.5L3.5 21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9007-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="sc9007-line_5" d="M14.5 21.9587V13.0413C14.5 12.8056 14.7592 12.662 14.959 12.7869L22.093 17.2456C22.281 17.3631 22.281 17.6369 22.093 17.7544L14.959 22.2131C14.7592 22.338 14.5 22.1944 14.5 21.9587Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  </button>
  <button type="button" class="rb-large-split-menu" title="当页开始菜单" aria-label="当页开始菜单" aria-haspopup="menu" aria-expanded="false">
    <span class="rb-large-label">当页开始<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sc9008-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9008-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
  </button>
</div>
          </div>
          
          <div class="rb-group-label">开始放映</div>
        </section>
        <div class="rb-divider-v"></div>
                <section class="rb-group" aria-label="幻灯片" data-group-id="slides">
                    <div class="rb-group-content rb-slides-large" data-compact-hide="slides-stack">

            <div class="rb-large-split" role="group" aria-label="新建幻灯片" data-control="split-button-vertical">
  <button type="button" class="rb-large-split-main" title="新建幻灯片" aria-label="新建幻灯片">
    <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="slide_add_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>新建幻灯片24_newslide_新建绘图画布_InsertCanvas</desc><style>
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
    }</style><g id="sc9009-group-1" class="kd-color-icon-green-primary kd-stroke-width-icon-regular"><path id="sc9009-line" d="M11.5 16.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9009-line_2" d="M16.5 11.5V21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9009-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9009-line_3" d="M14 20.5H3C2.72386 20.5 2.5 20.2761 2.5 20V4C2.5 3.72386 2.72386 3.5 3 3.5H21C21.2761 3.5 21.5 3.72386 21.5 4V14" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  </button>
  <button type="button" class="rb-large-split-menu" title="新建幻灯片菜单" aria-label="新建幻灯片菜单" aria-haspopup="menu" aria-expanded="false">
    <span class="rb-large-label">新建幻灯片<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sc9010-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9010-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
  </button>
</div>
            <button type="button" class="rb-large-menu" title="版式" aria-label="版式" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
  <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="slide_layout_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>幻灯片版式</desc><style>
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
    }</style><g id="sc9011-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9011-line" d="M12.75 13.5H6.25C5.83579 13.5 5.5 13.8358 5.5 14.25V16.75C5.5 17.1642 5.83579 17.5 6.25 17.5H12.75C13.1642 17.5 13.5 17.1642 13.5 16.75V14.25C13.5 13.8358 13.1642 13.5 12.75 13.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9011-line_2" d="M17.75 6.5H6.25C5.83579 6.5 5.5 6.83579 5.5 7.25V9.75C5.5 10.1642 5.83579 10.5 6.25 10.5H17.75C18.1642 10.5 18.5 10.1642 18.5 9.75V7.25C18.5 6.83579 18.1642 6.5 17.75 6.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9011-line_3" d="M20.75 3.5H3.25C2.83579 3.5 2.5 3.83579 2.5 4.25V19.75C2.5 20.1642 2.83579 20.5 3.25 20.5L20.75 20.5C21.1642 20.5 21.5 20.1642 21.5 19.75V4.25C21.5 3.83579 21.1642 3.5 20.75 3.5Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  <span class="rb-large-label">版式<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sc9012-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9012-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
</button>
            <div class="rb-edit-stack">
              <button type="button" class="rb-tool" title="重置" aria-label="重置">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="resetting_two"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>重置16_ResetSlide_Section</desc><style>
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
    }</style><g id="sc9013-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9013-Rectangle 41382" d="M14.5 7V2C14.5 1.72386 14.2761 1.5 14 1.5H7H2C1.72386 1.5 1.5 1.72386 1.5 2V2.93478V13C1.5 13.2761 1.72386 13.5 2 13.5H7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9013-Vector 1749" d="M4.5 4.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9013-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9013-line" d="M8.5 12.5L10.4929 14.4929C10.4968 14.4968 10.5032 14.4968 10.5071 14.4929L12.5 12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9013-line_2" d="M10.5 14V10.5C10.5 9.39543 11.3954 8.5 12.5 8.5V8.5C13.6046 8.5 14.5 9.39543 14.5 10.5V12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  <span class="rb-tool-label">重置</span>
</button>
              <button type="button" class="rb-tool rb-menu" title="节" aria-label="节" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="section_add"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>新增节16_section_breaks</desc><style>
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
    }</style><g id="sc9014-group-1" class="kd-color-icon-green-primary kd-stroke-width-icon-regular"><path id="sc9014-line" d="M8.5 11.5H14.5M11.5 8.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9014-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9014-line_2" d="M1.5 1.5L2.99293 2.99293C2.99683 2.99683 3.00317 2.99683 3.00707 2.99293L4.5 1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9014-line_3" d="M6.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9014-line_4" d="M14.5 10V6C14.5 5.72386 14.2761 5.5 14 5.5H2C1.72386 5.5 1.5 5.72386 1.5 6V14C1.5 14.2761 1.72386 14.5 2 14.5H10" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">节</span>
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
    }</style><g id="sc9015-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9015-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
            </div>
          </div>
          <div class="rb-group-content rb-slides-stack" data-compact-show="slides-stack" hidden>
            <div class="rb-slides-panel">
              <div class="rb-draw-col" data-compact-icon="slides-icon-l">
                <button type="button" class="rb-tool rb-menu" title="新建幻灯片" aria-label="新建幻灯片" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="slide_add"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>新建幻灯片16_newslide_新建绘图画布_InsertCanvas</desc><style>
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
    }</style><g id="st40002-group-1" class="kd-color-icon-green-primary kd-stroke-width-icon-regular"><path id="st40002-line" d="M6.5 10.5H14.5M10.5 6.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="st40002-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="st40002-line_2" d="M14.5 7V2C14.5 1.72386 14.2761 1.5 14 1.5H7H2C1.72386 1.5 1.5 1.72386 1.5 2V2.93478V13C1.5 13.2761 1.72386 13.5 2 13.5H7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">新建幻灯片</span>
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
    }</style><g id="st40001-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="st40001-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
                <button type="button" class="rb-tool rb-menu" title="版式" aria-label="版式" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="slide_layout"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>幻灯片版式</desc><style>
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
    }</style><g id="st40004-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="st40004-line" d="M9 8.5H4C3.72386 8.5 3.5 8.72386 3.5 9V11C3.5 11.2761 3.72386 11.5 4 11.5H9C9.27614 11.5 9.5 11.2761 9.5 11V9C9.5 8.72386 9.27614 8.5 9 8.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="st40004-line_2" d="M12 3.5H4C3.72386 3.5 3.5 3.72386 3.5 4V6C3.5 6.27614 3.72386 6.5 4 6.5H12C12.2761 6.5 12.5 6.27614 12.5 6V4C12.5 3.72386 12.2761 3.5 12 3.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="st40004-line_3" d="M14 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V13C1.5 13.2761 1.72386 13.5 2 13.5H14C14.2761 13.5 14.5 13.2761 14.5 13V2C14.5 1.72386 14.2761 1.5 14 1.5Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">版式</span>
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
    }</style><g id="st40003-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="st40003-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
              </div>
              <div class="rb-draw-col" data-compact-icon="slides-icon-r">
                <button type="button" class="rb-tool" title="重置" aria-label="重置">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="resetting_two"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>重置16_ResetSlide_Section</desc><style>
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
    }</style><g id="st40005-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="st40005-Rectangle 41382" d="M14.5 7V2C14.5 1.72386 14.2761 1.5 14 1.5H7H2C1.72386 1.5 1.5 1.72386 1.5 2V2.93478V13C1.5 13.2761 1.72386 13.5 2 13.5H7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="st40005-Vector 1749" d="M4.5 4.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="st40005-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="st40005-line" d="M8.5 12.5L10.4929 14.4929C10.4968 14.4968 10.5032 14.4968 10.5071 14.4929L12.5 12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="st40005-line_2" d="M10.5 14V10.5C10.5 9.39543 11.3954 8.5 12.5 8.5V8.5C13.6046 8.5 14.5 9.39543 14.5 10.5V12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  <span class="rb-tool-label">重置</span>
</button>
                <button type="button" class="rb-tool rb-menu" title="节" aria-label="节" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="section_add"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>新增节16_section_breaks</desc><style>
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
    }</style><g id="st40007-group-1" class="kd-color-icon-green-primary kd-stroke-width-icon-regular"><path id="st40007-line" d="M8.5 11.5H14.5M11.5 8.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="st40007-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="st40007-line_2" d="M1.5 1.5L2.99293 2.99293C2.99683 2.99683 3.00317 2.99683 3.00707 2.99293L4.5 1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="st40007-line_3" d="M6.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="st40007-line_4" d="M14.5 10V6C14.5 5.72386 14.2761 5.5 14 5.5H2C1.72386 5.5 1.5 5.72386 1.5 6V14C1.5 14.2761 1.72386 14.5 2 14.5H10" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">节</span>
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
    }</style><g id="st40006-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="st40006-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
              </div>
            </div>
          </div>
          <div class="rb-group-label">幻灯片</div>
        </section>
        <div class="rb-divider-v"></div>
        <section class="rb-group" aria-label="字体" data-group-id="font">
          <div class="rb-font-panel rb-group-expanded" data-compact-hide="group-font">
            <div class="rb-font-row rb-font-row-top">
              <div class="rb-font-combo" data-control="font-size-combo">
                <div class="kd-input kd-input-small rb-select font-name" data-select-mode="single">
  <div class="kd-select-trigger">
    <div class="kd-input-wrap">
      <input class="kd-input-inner" value="苹方-简 (标题)" readonly aria-label="字体" />
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
    }</style><g id="sl15-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sl15-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
    </div>
  </div>
</div>
                <div class="kd-input kd-input-small rb-select font-size" data-select-mode="single" style="width:60px">
  <div class="kd-select-trigger">
    <div class="kd-input-wrap">
      <input class="kd-input-inner" value="60" readonly aria-label="字号" />
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
    }</style><g id="sl16-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sl16-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
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
    }</style><g id="sl17-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="sl17-line" d="M10 3.5H15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sl17-line_2" d="M12.5 1V6" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sl17-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sl17-line_3" d="M3.80078 9.59961H10.2" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sl17-line_4" d="M2 13.5L6.99083 2.02109C6.99432 2.01308 7.00569 2.01308 7.00917 2.02109L12 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
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
    }</style><g id="sl18-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="sl18-line" d="M8.5 4.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sl18-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sl18-line_2" d="M3 10.6001H8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sl18-line_3" d="M1.5 13.5L5.49072 3.52321C5.49407 3.51483 5.50593 3.51483 5.50928 3.52321L9.5 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                <button type="button" class="rb-tool" title="清除所有格式" aria-label="清除所有格式"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="clear_format"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>清除内容16_clear_contents_ClearFormat</desc><style>
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
    }</style><g id="sl19-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sl19- line" d="M13.5 6V2C13.5 1.72386 13.2761 1.5 13 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V13C1.5 13.2761 1.72386 13.5 2 13.5H6" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sl19-line" d="M7.5 1.5V9" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sl19-line_2" d="M1.5 7.5H9" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sl19-group-1" class="kd-color-icon-red-primary kd-stroke-width-icon-regular"><path id="sl19-line_3" d="M9 10L12 13M9.70711 14.5H10.2929C10.4255 14.5 10.5527 14.4473 10.6464 14.3536L14.6464 10.3536C14.8417 10.1583 14.8417 9.84171 14.6464 9.64645L12.3536 7.35355C12.1583 7.15829 11.8417 7.15829 11.6464 7.35355L7.35355 11.6464C7.15829 11.8417 7.15829 12.1583 7.35355 12.3536L9.35355 14.3536C9.44732 14.4473 9.5745 14.5 9.70711 14.5Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sl19-line_4" d="M10 14.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              </div>
            </div>
            <div class="rb-font-row">
              <div class="rb-font-tools">
                <button type="button" class="rb-tool" title="加粗" aria-label="加粗"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="bold_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>加粗16_Bold_BoldQat_bookmarkBold</desc><style>
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
    }</style><g id="sc9016-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9016-B" d="M4 3H8.00586C8.79883 3 9.389 3.03418 9.77637 3.10254C10.1683 3.16634 10.5169 3.30306 10.8223 3.5127C11.1322 3.72233 11.3896 4.0026 11.5947 4.35352C11.7998 4.69987 11.9023 5.08952 11.9023 5.52246C11.9023 5.99186 11.7747 6.42253 11.5195 6.81445C11.2689 7.20638 10.9271 7.50033 10.4941 7.69629C11.1048 7.87402 11.5742 8.17708 11.9023 8.60547C12.2305 9.03385 12.3945 9.53744 12.3945 10.1162C12.3945 10.5719 12.2874 11.0163 12.0732 11.4492C11.8636 11.8776 11.5742 12.2217 11.2051 12.4814C10.8405 12.7367 10.3893 12.8939 9.85156 12.9531C9.51432 12.9896 8.70085 13.0124 7.41113 13.0215H4V3ZM6.02344 4.66797V6.98535H7.34961C8.13802 6.98535 8.62793 6.97396 8.81934 6.95117C9.16569 6.91016 9.43685 6.79167 9.63281 6.5957C9.83333 6.39518 9.93359 6.13314 9.93359 5.80957C9.93359 5.49967 9.84701 5.24902 9.67383 5.05762C9.50521 4.86165 9.25228 4.74316 8.91504 4.70215C8.71452 4.67936 8.13802 4.66797 7.18555 4.66797H6.02344ZM6.02344 8.65332V11.333H7.89648C8.62565 11.333 9.08822 11.3125 9.28418 11.2715C9.58496 11.2168 9.82878 11.0846 10.0156 10.875C10.207 10.6608 10.3027 10.376 10.3027 10.0205C10.3027 9.71973 10.2298 9.46452 10.084 9.25488C9.93815 9.04525 9.72624 8.89258 9.44824 8.79688C9.1748 8.70117 8.5778 8.65332 7.65723 8.65332H6.02344Z" stroke="none"/></g></svg></span></button>
                <button type="button" class="rb-tool" title="倾斜" aria-label="倾斜"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="italic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>斜体16_倾斜_Italic</desc><style>
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
    }</style><g id="sc9017-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sc9017-group-0_2" d="M7.5 2.6001H9M10.5 2.6001H9M4.5 13.4001H6M7.5 13.4001H6M9 2.6001L6 13.4001" stroke-linecap="round" stroke-linejoin="bevel" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
                <div class="rb-split" title="下划线" role="group" aria-label="下划线" data-control="split-button-horizontal">
  <button type="button" class="rb-tool" aria-label="下划线"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="underscore_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>下划线16_Underline_Pdf_Underline_v2_Pdf_Underline</desc><style>
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
    }</style><g id="sc9018-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9018-line" d="M3.5 13.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sc9018-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sc9018-line_2" d="M4.59961 3.5V8.5C4.59961 10.1016 5.89798 11.4 7.49961 11.4C9.10124 11.4 10.3996 10.1016 10.3996 8.5V3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
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
    }</style><g id="sc9019-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9019-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
                <div class="rb-split" title="字符间距" role="group" aria-label="字符间距" data-control="split-button-horizontal">
  <button type="button" class="rb-tool" aria-label="字符间距"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_spacing"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>字符间距16_ArtisticWordCharacterSpacing</desc><style>
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
    }</style><g id="sc9020-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9020-Vector 2018" d="M3 11L1.50707 12.4929C1.50317 12.4968 1.50317 12.5032 1.50707 12.5071L3 14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9020-Vector 2020" d="M13 11L14.4929 12.4929C14.4968 12.4968 14.4968 12.5032 14.4929 12.5071L13 14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9020-Vector 2019" d="M2 12.5H14.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9020-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sc9020-line" d="M9.5 7.3999H13.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9020-line_2" d="M8.5 9.50012L11.4908 2.52145C11.4943 2.51337 11.5057 2.51337 11.5092 2.52145L14.5 9.50012" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9020-line_3" d="M1.5 2.49976L4.49081 9.47843C4.49427 9.48651 4.50573 9.48651 4.50919 9.47843L7.5 2.49976" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="字符间距菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sc9021-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9021-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
                <button type="button" class="rb-tool" title="文本阴影" aria-label="文本阴影"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_shadow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>阴影16_font_shadow_ongmani</desc><style>
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
    }</style><g id="sc9022-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9022-fill" opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M7.1383 1.99997C7.32425 1.75203 7.61882 1.59998 7.93836 1.59998H9.26681C9.67299 1.59998 10.0388 1.84566 10.1925 2.22165L14.5966 12.9973C14.8117 13.5236 14.4246 14.1 13.856 14.1H11.941C11.5425 14.1 11.1831 13.8635 11.0245 13.5H12.856C13.0692 13.5 13.2144 13.2838 13.1337 13.0865L8.72963 2.31081C8.65279 2.12281 8.46988 1.99997 8.26679 1.99997H7.1383ZM2.57422 13.5C2.66161 13.8348 2.96376 14.1 3.34937 14.1H5.26401C5.67292 14.1 6.04063 13.851 6.19249 13.4714L6.74102 12.1H10.0425L9.80248 11.5H5.40248L4.72823 13.1857C4.6523 13.3755 4.46845 13.5 4.26399 13.5H2.57422ZM7.24249 9.49997L8.12244 7.30002L7.60239 5.99997L6.20245 9.49997H7.24249Z" stroke="none"/><path id="sc9022-fill_2" opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M7.72596 1.99994C7.91049 1.81175 8.16613 1.69995 8.44013 1.69995H9.76858C10.1748 1.69995 10.5406 1.94564 10.6943 2.32162L15.0983 13.0973C15.3134 13.6236 14.9263 14.2 14.3578 14.2H12.4428C12.0339 14.2 11.6662 13.951 11.5143 13.5714L11.4858 13.4999H12.8558C13.069 13.4999 13.2142 13.2838 13.1335 13.0864L8.72945 2.31078C8.65261 2.12278 8.4697 1.99994 8.26661 1.99994H7.72596ZM3.05664 13.4999C3.10511 13.8804 3.42783 14.2 3.85114 14.2H5.76578C6.17469 14.2 6.5424 13.951 6.69426 13.5713L7.24279 12.2H10.0823L9.8023 11.4999H5.4023L4.72805 13.1856C4.65212 13.3755 4.46827 13.4999 4.26381 13.4999H3.05664ZM8.39324 7.97744L7.60221 5.99994L6.20227 9.49994H7.78426L8.39324 7.97744Z" stroke="none"/><path id="sc9022-fill_3" opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M8.33453 2.0045C8.50511 1.87456 8.71672 1.79993 8.94058 1.79993H10.269C10.6752 1.79993 11.041 2.04561 11.1947 2.4216L15.5988 13.1973C15.8139 13.7235 15.4268 14.2999 14.8582 14.2999H12.9433C12.5344 14.2999 12.1667 14.051 12.0148 13.6713L11.9462 13.4999H12.8563C13.0695 13.4999 13.2146 13.2838 13.134 13.0864L8.7299 2.31078C8.66168 2.14387 8.50986 2.02832 8.33453 2.0045ZM3.55078 13.4999C3.55045 13.9227 3.89165 14.2999 4.35159 14.2999H6.26623C6.67514 14.2999 7.04285 14.051 7.19471 13.6713L7.74324 12.2999H10.1228L9.80275 11.4999H5.40275L4.7285 13.1856C4.65257 13.3755 4.46871 13.4999 4.26426 13.4999H3.55078ZM8.6637 8.65242L7.60266 5.99994L6.20272 9.49994H8.3247L8.6637 8.65242Z" stroke="none"/></g><g id="sc9022-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9022-A" fill-rule="evenodd" clip-rule="evenodd" d="M2.07143 13.0865L6.47528 2.31084C6.55211 2.12285 6.73503 2 6.93812 2H8.26657C8.46966 2 8.65257 2.12284 8.72941 2.31084L13.1335 13.0865C13.2141 13.2839 13.069 13.5 12.8558 13.5H10.9408C10.7364 13.5 10.5525 13.3755 10.4766 13.1857L9.80226 11.5H5.40226L4.72801 13.1857C4.65208 13.3755 4.46823 13.5 4.26377 13.5H2.34913C2.13594 13.5 1.99077 13.2839 2.07143 13.0865ZM6.20223 9.5H9.00223L7.60217 6L6.20223 9.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
                <div class="rb-split" title="上标" role="group" aria-label="上标" data-control="split-button-horizontal">
  <button type="button" class="rb-tool" aria-label="上标"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="math_superscript"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>上标16_Superscript</desc><style>
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
    }</style><g id="sc9023-group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sc9023-line" d="M14.5 6.49963H11.5C12.0257 5.3685 13.1658 4.89816 13.9027 4.1849C14.9748 3.14721 14.4115 1.67701 13.1517 1.60268C12.3834 1.55735 11.8729 2.02347 11.6715 2.60892" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sc9023-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sc9023-line_2" d="M2 4L9 13" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9023-line_3" d="M9 4L2 13" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
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
    }</style><g id="sc9024-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9024-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
                <div class="rb-split" title="字体颜色" role="group" aria-label="字体颜色" data-control="split-button-horizontal">
  <button type="button" class="rb-tool rb-swatch font" aria-label="字体颜色"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_color_gradient"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredcustomfeatures="data-kd-color-scheme">
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
<g id="sc9025-group-0" class="kd-stroke-width-icon-bold c58A401">
<path d="M3.5 12.9442L7.75077 2.74233C7.84308 2.52079 8.15692 2.52079 8.24923 2.74233L12.5 12.9442M5 9.6H11" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</g>
<g id="sc9025-group-1" class="kd-stroke-width-icon-bold c0E52D4">
<path d="M3.5 12.9442L7.75077 2.74233C7.84308 2.52079 8.15692 2.52079 8.24923 2.74233L12.5 12.9442M5 9.6H11" stroke="url(#sc9025-paint0_linear_4059_2307)" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
<defs>
<linearGradient id="sc9025-paint0_linear_4059_2307" x1="3" y1="7.52" x2="13" y2="7.52" gradientUnits="userSpaceOnUse">
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
    }</style><g id="sc9026-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9026-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
                <div class="rb-split" title="文本突出显示颜色" role="group" aria-label="文本突出显示颜色" data-control="split-button-horizontal">
  <button type="button" class="rb-tool rb-swatch highlight" aria-label="文本突出显示颜色"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>高亮文本16</desc><style>
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
    }</style><g id="sc9027-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9027-line" d="M4 8C4 9.80392 3.48431 12.147 1.5 13.4999L4.5 13.5C5.16144 12.8987 6.01569 11.6392 8 12" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9027-line_2" d="M10 1.5L4 8L8 12L14.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="文本突出显示颜色菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sc9028-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9028-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
</div>
            </div>
          </div>
          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-font" hidden>
            <button type="button" class="rb-large-menu" title="字体" aria-label="字体" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="symbol_a_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>字母A_样式_字体样式_文本_单个字符_single_character_themeFont</desc><style>
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
    }</style><g id="dl20006-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="dl20006-line" d="M7.5 13.5996H16.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20006-line_2" d="M5 19.5996L11.9908 3.62055C11.9943 3.61256 12.0057 3.61256 12.0092 3.62055L19 19.5996" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span>
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
    }</style><g id="dl20007-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20007-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <button type="button" class="rb-group-more" title="字体对话框" aria-label="字体对话框"><span class="rb-icon rb-icon-11" aria-hidden="true" data-icon="arrow_up_right"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#sl73-clip0_57_20044)">
<path d="M4.5 7.5H7.5V4.5" stroke="#757575" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 7.5L4.5 4.5" stroke="#757575" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="sl73-clip0_57_20044">
<rect width="11" height="11" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
</span></button>
          <div class="rb-group-label">字体</div>
        </section>
        <div class="rb-divider-v"></div>
                <section class="rb-group" aria-label="段落" data-group-id="paragraph">
          <div class="rb-para-panel rb-group-expanded" data-compact-hide="group-para">
            <div class="rb-para-row">
              <div class="rb-split" title="项目符号" role="group" aria-label="项目符号" data-control="split-button-horizontal">
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
    }</style><g id="sc9029-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9029-fill" d="M3.79922 2.5002C3.79922 3.21817 3.21719 3.8002 2.49922 3.8002C1.78125 3.8002 1.19922 3.21817 1.19922 2.5002C1.19922 1.78223 1.78125 1.2002 2.49922 1.2002C3.21719 1.2002 3.79922 1.78223 3.79922 2.5002Z" stroke="none"/><path id="sc9029-fill_2" d="M3.80117 7.49971C3.80117 8.21768 3.21914 8.79971 2.50117 8.79971C1.7832 8.79971 1.20117 8.21768 1.20117 7.49971C1.20117 6.78174 1.7832 6.19971 2.50117 6.19971C3.21914 6.19971 3.80117 6.78174 3.80117 7.49971Z" stroke="none"/><path id="sc9029-fill_3" d="M3.80117 12.4997C3.80117 13.2177 3.21914 13.7997 2.50117 13.7997C1.7832 13.7997 1.20117 13.2177 1.20117 12.4997C1.20117 11.7817 1.7832 11.1997 2.50117 11.1997C3.21914 11.1997 3.80117 11.7817 3.80117 12.4997Z" stroke="none"/></g><g id="sc9029-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9029-line" d="M6.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9029-line_2" d="M6.5 7.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9029-line_3" d="M6.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
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
    }</style><g id="sc9030-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9030-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              <div class="rb-split" title="编号" role="group" aria-label="编号" data-control="split-button-horizontal">
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
    }</style><g id="sc9031-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9031-Vector 2034" d="M14.5 1.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9031-Vector 2035" d="M14.5 6.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9031-Vector 2036" d="M13.5 1.5V6.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9031-Vector 2037" d="M11.5 1.5V6.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9031-Vector 2038" d="M10.5 11.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9031-Vector 2039" d="M10.5 13.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9031-Vector 2040" d="M11.5 10.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9031-Vector 2041" d="M13.5 10.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9031-Vector 2042" d="M8.5 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V12C1.5 12.2761 1.72386 12.5 2 12.5H8.20505" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9031-Vector 2043" d="M6.5 10.5L8.49293 12.4929C8.49683 12.4968 8.49683 12.5032 8.49293 12.5071L6.5 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
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
    }</style><g id="sc9032-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9032-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
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
    }</style><g id="sc9033-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9033-line" d="M7.5 7.5H1.5M1.5 7.5L3.5 5.5M1.5 7.5L3.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sc9033-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9033-line_2" d="M1.5 1.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9033-line_3" d="M1.5 13.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9033-line_4" d="M10.5 5.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9033-line_5" d="M10.5 9.5L13.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
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
    }</style><g id="sc9034-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9034-line" d="M1.5 7.5H7.5M7.5 7.5L5.5 5.5M7.5 7.5L5.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sc9034-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9034-line_2" d="M1.5 1.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9034-line_3" d="M1.5 13.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9034-line_4" d="M10.5 5.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9034-line_5" d="M10.5 9.5L13.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <div class="rb-para-sep" aria-hidden="true"></div>
              <div class="rb-split" title="文字方向" role="group" aria-label="文字方向" data-control="split-button-horizontal">
  <button type="button" class="rb-tool" aria-label="文字方向"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="text_direction"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文字方向16_TextDirection</desc><style>
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
    }</style><g id="sc9035-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9035-line" d="M4.5 1.5V14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9035-line_2" d="M2 12L4.49293 14.4929C4.49683 14.4968 4.50317 14.4968 4.50707 14.4929L7 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9035-group-2" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9035-line_3" d="M11.5 9.5V14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9035-line_4" d="M9 12L11.4929 14.4929C11.4968 14.4968 11.5032 14.4968 11.5071 14.4929L14 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9035-group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sc9035-line_5" d="M10 5.5H13" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9035-line_6" d="M9 7.5L11.4908 1.52215C11.4942 1.51395 11.5058 1.51395 11.5092 1.52215L14 7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="文字方向菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sc9036-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9036-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              <div class="rb-split" title="对齐文本" role="group" aria-label="对齐文本" data-control="split-button-horizontal">
  <button type="button" class="rb-tool" aria-label="对齐文本"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>对齐文本16_TextAlign</desc><style>
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
    }</style><g id="sc9037-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9037-line" d="M6 3.5L7.99293 1.50707C7.99683 1.50317 8.00317 1.50317 8.00707 1.50707L10 3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9037-line_2" d="M6 12.5L7.99293 14.4929C7.99683 14.4968 8.00317 14.4968 8.00707 14.4929L10 12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9037-Vector 1755" d="M4.5 6.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9037-Vector 1756" d="M4.5 9.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9037-Vector 1757" d="M4 3.5H2C1.72386 3.5 1.5 3.72386 1.5 4V12C1.5 12.2761 1.72386 12.5 2 12.5H4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9037-Vector 1758" d="M12 3.5H14C14.2761 3.5 14.5 3.72386 14.5 4V12C14.5 12.2761 14.2761 12.5 14 12.5H12" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="对齐文本菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sc9038-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9038-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              <button type="button" class="rb-tool rb-menu" title="行距" aria-label="行距" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="line_spacing"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>行距16_增大段落行距_IncreaseSpace_LineSpacing_TightLineSpacing_LooseLineSpacing_行间距</desc><style>
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
    }</style><g id="sc9039-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9039-line" d="M3.5 1.5V13.5M3.5 1.5L1.5 3.5M3.5 1.5L5.5 3.5M3.5 13.5L1.5 11.5M3.5 13.5L5.5 11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sc9039-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9039-line_2" d="M8.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9039-line_3" d="M8.5 7.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9039-line_4" d="M8.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  
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
    }</style><g id="sc9040-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9040-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
              <div class="rb-split" title="分栏" role="group" aria-label="分栏" data-control="split-button-horizontal">
  <button type="button" class="rb-tool" aria-label="分栏"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="columns"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>分栏16_Columns</desc><style>
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
    }</style><g id="sc9041-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9041-line" d="M7.5 1V14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9041-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9041-line_2" d="M5.5 1.5H1.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9041-line_3" d="M5.5 5.5H1.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9041-line_4" d="M5.5 9.5H1.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9041-line_5" d="M5.5 13.5H1.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9041-line_6" d="M13.5 1.5H9.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9041-line_7" d="M13.5 5.5H9.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9041-line_8" d="M13.5 9.5H9.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9041-line_9" d="M13.5 13.5H9.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="分栏菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sc9042-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9042-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
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
    }</style><g id="sc9043-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9043-line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9043-line_2" d="M1.5 7.5H7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9043-line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
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
    }</style><g id="sc9044-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9044-line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9044-line_2" d="M4.5 7.5H10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9044-line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
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
    }</style><g id="sc9045-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9045-line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9045-line_2" d="M7.5 7.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9045-line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
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
    }</style><g id="sc9046-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9046-Vector 1909" d="M1.5 2.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9046-Vector 1910" d="M1.5 7.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9046-Vector 1911" d="M1.5 12.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
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
    }</style><g id="sc9047-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sc9047-line" d="M6.5 1.5L4.50707 3.49293C4.50317 3.49683 4.50317 3.50317 4.50707 3.50707L6.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9047-line_2" d="M9.5 1.5L11.4929 3.49293C11.4968 3.49683 11.4968 3.50317 11.4929 3.50707L9.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sc9047-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9047-line_3" d="M1.5 1.5V13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9047-line_4" d="M4.5 8.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9047-line_5" d="M4.5 12.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9047-line_6" d="M14.5 1.5V13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              </div>
              <div class="rb-para-sep" aria-hidden="true"></div>
              <button type="button" class="rb-tool" title="转换为 SmartArt" aria-label="转换为 SmartArt"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="smart_art_shape"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>智能图形形状</desc><style>
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
    .kd-color-icon-white {
       fill: var(--kd-color-icon-white, #FFFFFF);
       stroke: var(--kd-color-icon-white, #FFFFFF);
       km_fill: #FFFFFF;
       km_stroke: #FFFFFF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="sc9048-group-0" class="kd-color-icon-white kd-stroke-width-icon-regular"><path id="sc9048-fill" d="M10.6484 1.72265L13.3171 5.72567C13.4281 5.8921 13.4292 6.10862 13.3199 6.27616L12 8.3L10.6489 10.2816C10.5557 10.4182 10.4011 10.4999 10.2358 10.4999L6.5 10.5H2.06056C1.82095 10.5 1.67803 10.233 1.81094 10.0336L4.3151 6.27735C4.42707 6.1094 4.42707 5.8906 4.3151 5.72265L1.81094 1.96641C1.67803 1.76704 1.82095 1.5 2.06056 1.5H10.2324C10.3996 1.5 10.5557 1.58355 10.6484 1.72265Z" stroke="none"/><path id="sc9048-fill_2" d="M14 8.5H7C6.72386 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.72386 14.5 7 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V9C14.5 8.72386 14.2761 8.5 14 8.5Z" stroke="none"/></g><g id="sc9048-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9048-line" d="M6.5 10.5H2.06056C1.82095 10.5 1.67803 10.233 1.81094 10.0336L4.3151 6.27735C4.42707 6.1094 4.42707 5.8906 4.3151 5.72265L1.81094 1.96641C1.67803 1.76704 1.82095 1.5 2.06056 1.5H10.2324C10.3996 1.5 10.5557 1.58355 10.6484 1.72265L13.3277 5.7416C13.4332 5.89985 13.4398 6.10424 13.3447 6.26895L12.0367 8.53449" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9048-line_2" d="M14 8.5H7C6.72386 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.72386 14.5 7 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V9C14.5 8.72386 14.2761 8.5 14 8.5Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sc9048-line_3" d="M8.5 11.5H12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="换行" aria-label="换行"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="over_wrap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>自动换行16_换行_LineWrap2</desc><style>
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
    }</style><g id="sc9049-group-1" class="kd-color-icon-green-primary kd-stroke-width-icon-regular"><path id="sc9049- line" d="M8.5 12.5H14C14.2761 12.5 14.5 12.2761 14.5 12V7.8C14.5 7.63431 14.3657 7.5 14.2 7.5H2.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9049-line" d="M10 10.5L8.00707 12.4929C8.00317 12.4968 8.00317 12.5032 8.00707 12.5071L10 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sc9049-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9049- line_2" d="M2.5 2.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9049- line_3" d="M2.5 12.5H5.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
            </div>
          </div>
          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-para" hidden>
            <button type="button" class="rb-large-menu" title="段落" aria-label="段落" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="align_both_side_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>两端对齐24_alignjustify_更多菜单</desc><style>
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
    }</style><g id="dl20008-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20008-Vector 1909" d="M2.5 2.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20008-Vector 1910" d="M2.5 11.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20008-Vector 1911" d="M2.5 20.5H21.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
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
    }</style><g id="dl20009-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20009-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <button type="button" class="rb-group-more" title="段落对话框" aria-label="段落对话框"><span class="rb-icon rb-icon-11" aria-hidden="true" data-icon="arrow_up_right"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#sc9050-clip0_57_20044)">
<path d="M4.5 7.5H7.5V4.5" stroke="#757575" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 7.5L4.5 4.5" stroke="#757575" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="sc9050-clip0_57_20044">
<rect width="11" height="11" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
</span></button>
          <div class="rb-group-label">段落</div>
        </section>
        <div class="rb-divider-v"></div>
                        <section class="rb-group" aria-label="绘图" data-group-id="drawing">
          <div class="rb-group-content rb-group-expanded" data-compact-hide="group-drawing">
            <div class="rb-draw-panel">
              <div class="rb-draw-col" data-compact-icon="drawing-icon-l">
                <button type="button" class="rb-tool rb-menu" title="形状" aria-label="形状" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="shape"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>形状16_Shapes</desc><style>
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
    }</style><g id="dg13001-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13001-line" d="M5.5 10.5H2C1.72386 10.5 1.5 10.2761 1.5 10V2C1.5 1.72386 1.72386 1.5 2 1.5H10C10.2761 1.5 10.5 1.72386 10.5 2V5.50006" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dg13001-line_2" d="M5.5 10.5837C5.67419 13.0518 7.7316 15 10.244 15C12.8707 15 15 12.8707 15 10.244C15 7.7316 13.0518 5.67419 10.5837 5.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="dg13001-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="dg13001-line_3" d="M10.1667 5.48828C7.58934 5.48828 5.5 7.57762 5.5 10.1549C5.5 10.267 5.50395 10.3782 5.51172 10.4883H10.5V5.5C10.3899 5.49223 10.2787 5.48828 10.1667 5.48828Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">形状</span>
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
    }</style><g id="dg13002-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13002-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
                <button type="button" class="rb-tool rb-menu" title="文本框" aria-label="文本框" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="text_frame"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文本框16_Pdf_InsertTextCommentBox_InsertTextboxHorizontal_CTB_TextBox_text_box_ScreenGrabOcr</desc><style>
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
    }</style><g id="dg13003-group-2" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="dg13003-fill" d="M1 1.5C1 1.22386 1.22386 1 1.5 1H2.5C2.77614 1 3 1.22386 3 1.5V2.5C3 2.77614 2.77614 3 2.5 3H1.5C1.22386 3 1 2.77614 1 2.5V1.5Z" stroke="none"/><path id="dg13003-fill_2" d="M1 13.5C1 13.2239 1.22386 13 1.5 13H2.5C2.77614 13 3 13.2239 3 13.5V14.5C3 14.7761 2.77614 15 2.5 15H1.5C1.22386 15 1 14.7761 1 14.5V13.5Z" stroke="none"/><path id="dg13003-fill_3" d="M13 1.5C13 1.22386 13.2239 1 13.5 1H14.5C14.7761 1 15 1.22386 15 1.5V2.5C15 2.77614 14.7761 3 14.5 3H13.5C13.2239 3 13 2.77614 13 2.5V1.5Z" stroke="none"/><path id="dg13003-fill_4" d="M13 13.5C13 13.2239 13.2239 13 13.5 13H14.5C14.7761 13 15 13.2239 15 13.5V14.5C15 14.7761 14.7761 15 14.5 15H13.5C13.2239 15 13 14.7761 13 14.5V13.5Z" stroke="none"/></g><g id="dg13003-group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="dg13003-line" d="M6.5 8.5H9.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dg13003-line_2" d="M5.5 10.4992L7.99082 4.72052C7.99429 4.71247 8.00571 4.71247 8.00918 4.72052L10.5 10.4992" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="dg13003-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13003-line_3" d="M1.5 4V12" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="dg13003-line_4" d="M14.5 4V12" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="dg13003-line_5" d="M12 2.5H4" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="dg13003-line_6" d="M12 13.5H4" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span>
  <span class="rb-tool-label">文本框</span>
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
    }</style><g id="dg13004-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13004-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
              </div>
              <div class="rb-draw-col" data-compact-icon="drawing-icon-r">
                <button type="button" class="rb-tool rb-menu" title="图片" aria-label="图片" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="pic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>图片16_稻壳资源_插入图片_本地图片_图像_pic_InsertPictureFromFile_Pdf_AddImage_PictureFill_CTB_InsertPictureFromFile</desc><style>
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
    }</style><g id="dg13005-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13005-line" d="M4.5 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V2C1.5 1.72386 1.72386 1.5 2 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V12.3662" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="dg13005-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="dg13005-line_2" d="M6.5 6C6.5 6.82843 5.82843 7.5 5 7.5C4.17157 7.5 3.5 6.82843 3.5 6C3.5 5.17157 4.17157 4.5 5 4.5C5.82843 4.5 6.5 5.17157 6.5 6Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dg13005-line_3" d="M10.1464 8.85348L4.5 14.4999H14C14.2761 14.4999 14.5 14.2761 14.5 13.9999V12.4999L10.8536 8.85348C10.6583 8.65822 10.3417 8.65822 10.1464 8.85348Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">图片</span>
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
    }</style><g id="dg13006-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13006-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
                <button type="button" class="rb-tool rb-menu" title="排列" aria-label="排列" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="level_top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>置于顶层16_排列_置顶_BringToFront</desc><style>
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
    }</style><g id="dg13007-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13007-line" d="M4.5 7.5H2C1.72386 7.5 1.5 7.27614 1.5 7V2C1.5 1.72386 1.72386 1.5 2 1.5H7C7.27614 1.5 7.5 1.72386 7.5 2V4.50031" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dg13007-line_2" d="M11 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V11C4.5 11.2761 4.72386 11.5 5 11.5H11C11.2761 11.5 11.5 11.2761 11.5 11V5C11.5 4.72386 11.2761 4.5 11 4.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dg13007-line_3" d="M11.5 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V14C14.5 14.2761 14.2761 14.5 14 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V11.5003" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
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
    }</style><g id="dg13008-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13008-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
              </div>
            
            </div>
            <div class="rb-edit-stack">
                <div class="rb-split" title="填充" role="group" aria-label="填充" data-control="split-button-horizontal">
  <button type="button" class="rb-tool rb-swatch fill" aria-label="填充"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="color_paint_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>油漆桶16_底纹颜色_TableShadingColor_填充_填充色</desc><style>
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
    }</style><g id="dg13009-group-2" class="kd-color-icon-quaternary kd-stroke-width-icon-regular"><path id="dg13009-fill" d="M11.5 5H3.5L2.85355 5.64645C2.65829 5.84171 2.65829 6.15829 2.85355 6.35355L6.14645 9.64645C6.34171 9.84171 6.65829 9.84171 6.85355 9.64645L11.5 5Z" stroke="none"/></g><g id="dg13009-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13009-fill_2" d="M13.5 8.48463C13.5 7.92668 13.3431 7.09848 12.5048 6C11.6664 7.09848 11.5 7.92668 11.5 8.48463C11.5 9.32155 11.8102 10 12.5048 10C13.1993 10 13.5 9.32155 13.5 8.48463Z" stroke="none"/></g><g id="dg13009-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13009-line" d="M2.5 2.5H8" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="dg13009-line_2" d="M6 2.5L7.64645 0.853553C7.84171 0.658291 8.15829 0.658291 8.35355 0.853553L11.6464 4.14645C11.8417 4.34171 11.8417 4.65829 11.6464 4.85355L6.85355 9.64645C6.65829 9.84171 6.34171 9.84171 6.14645 9.64645L2.85355 6.35355C2.65829 6.15829 2.65829 5.84171 2.85355 5.64645L4.5 4" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="填充菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="dg13010-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13010-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
                <div class="rb-split" title="轮廓" role="group" aria-label="轮廓" data-control="split-button-horizontal">
  <button type="button" class="rb-tool rb-swatch outline" aria-label="轮廓"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="color_border_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>边框颜色</desc><style>
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
    }</style><g id="dg13011-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13011-ine" d="M13.5 10V2C13.5 1.72386 13.2761 1.5 13 1.5H3C2.72386 1.5 2.5 1.72386 2.5 2V10" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dg13011-ine_2" d="M11.5 10V3.51C11.5 3.50448 11.4955 3.5 11.49 3.5H4.51C4.50448 3.5 4.5 3.50448 4.5 3.51V10" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
  <button type="button" class="rb-tool rb-caret" aria-label="轮廓菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="dg13012-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dg13012-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
</div>
              </div>
          </div>
          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-drawing" hidden>
            <button type="button" class="rb-large-menu" title="绘图" aria-label="绘图" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="shape_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>形状24_Shapes</desc><style>
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
    }</style><g id="dl20010-group-2" class="kd-color-icon-orange-quaternary kd-stroke-width-icon-regular"><path id="dl20010-fill" d="M15 8C11.134 8 8 11.134 8 15C8 15.1681 8.00593 15.3348 8.01758 15.5H15.5V8.01758C15.3348 8.00593 15.1681 8 15 8Z" stroke="none"/></g><g id="dl20010-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20010-line" d="M8 15.5H3C2.72386 15.5 2.5 15.2761 2.5 15V3C2.5 2.72386 2.72386 2.5 3 2.5H15C15.2761 2.5 15.5 2.72386 15.5 3V8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20010-line_2" d="M8.01758 15.5C8.27395 19.1326 11.3021 22 15 22C18.866 22 22 18.866 22 15C22 11.3021 19.1326 8.27395 15.5 8.01758" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="dl20010-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="dl20010-line_3" d="M15 8C11.134 8 8 11.134 8 15C8 15.1681 8.00593 15.3348 8.01758 15.5H15.5V8.01758C15.3348 8.00593 15.1681 8 15 8Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
              <span class="rb-large-label">绘图<span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="dl20011-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20011-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <button type="button" class="rb-group-more" title="绘图对话框" aria-label="绘图对话框"><span class="rb-icon rb-icon-11" aria-hidden="true" data-icon="arrow_up_right"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#dg13013-clip0_57_20044)">
<path d="M4.5 7.5H7.5V4.5" stroke="#757575" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 7.5L4.5 4.5" stroke="#757575" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="dg13013-clip0_57_20044">
<rect width="11" height="11" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
</span></button>
          <div class="rb-group-label">绘图</div>
        </section>
        <div class="rb-divider-v"></div>
                <section class="rb-group" aria-label="查找" data-group-id="editing">
          <div class="rb-group-content rb-edit-content rb-group-expanded" data-compact-hide="group-find">

            <div class="rb-large-split" role="group" aria-label="查找" data-control="split-button-vertical">
  <button type="button" class="rb-large-split-main" title="查找" aria-label="查找">
    <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="magnifier_zoom_out_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>缩小_放大镜24_Pdf_ZoomIn_zoom-out</desc><style>
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
    }</style><g id="sc9064-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9064-line" d="M19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9064-line_2" d="M6.5 10.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sc9064-line_3" d="M16.7002 16.7002L22.5002 22.5002" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
  </button>
  <button type="button" class="rb-large-split-menu" title="查找菜单" aria-label="查找菜单" aria-haspopup="menu" aria-expanded="false">
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
    }</style><g id="sc9065-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sc9065-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
  </button>
</div>
            <div class="rb-edit-stack" data-compact-icon="find-icon">
              <button type="button" class="rb-tool rb-menu" title="替换" aria-label="替换" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="replace"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>替换16_Replace_tab_replacetext</desc><style>
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
    }</style><g id="fx30002-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="fx30002-line" d="M6.5 10.5L8.49293 12.4929C8.49683 12.4968 8.49683 12.5032 8.49293 12.5071L6.5 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="fx30002-line_2" d="M2.5 9.5V10.5C2.5 11.6046 3.39543 12.5 4.5 12.5H8" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="fx30002-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="fx30002-line_3" d="M3.5 5.5H6.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="fx30002-line_4" d="M2.5 7.5L4.99077 1.52215C4.99419 1.51395 5.00581 1.51395 5.00923 1.52215L7.5 7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="fx30002-line_5" d="M10.5 11.5002L12.2001 11.5001C13.0285 11.5001 13.7 10.8285 13.7 10.0001V10.0001C13.7 9.17155 13.0283 8.49993 12.1998 8.49999L10.51 8.50012C10.5045 8.50012 10.5 8.5046 10.5 8.51012V14.4901C10.5 14.4956 10.5045 14.5001 10.51 14.5001L13.0002 14.5C13.8285 14.4999 14.5 13.8284 14.5 13.0001V13.0001C14.5 12.1716 13.8284 11.5001 12.9999 11.5001L12 11.5002" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
  <span class="rb-tool-label">替换</span>
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
    }</style><g id="fx30001-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="fx30001-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
              <button type="button" class="rb-tool rb-menu" title="选择" aria-label="选择" aria-haspopup="menu" aria-expanded="false">
  <span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="select_value"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>选择-值16_select_value</desc><style>
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
    }</style><g id="fx30003-group-1" class="kd-color-icon-green-primary kd-stroke-width-icon-regular"><path id="fx30003-04" d="M14.5 5.5H5.5V14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V5.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="fx30003-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="fx30003-01" d="M5.5 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V5.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="fx30003-02" d="M5.5 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V5.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="fx30003-03" d="M5.5 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V5.5H5.5V1.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span>
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
    }</style><g id="fx30001-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="fx30001-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span>
</button>
            
            </div>
          </div>
          <div class="rb-group-content rb-group-collapse-entry" data-compact-show="group-find" hidden>
            <button type="button" class="rb-large-menu" title="查找" aria-label="查找" aria-haspopup="menu" aria-expanded="false" data-control="menu-button-vertical">
              <span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true" data-icon="magnifier_zoom_out_24"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>缩小_放大镜24_Pdf_ZoomIn_zoom-out</desc><style>
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
    }</style><g id="dl20012-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20012-line" d="M19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20012-line_2" d="M6.5 10.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="dl20012-line_3" d="M16.7002 16.7002L22.5002 22.5002" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span>
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
    }</style><g id="dl20013-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="dl20013-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></span>
            </button>
          </div>
          <button type="button" class="rb-group-more" title="查找对话框" aria-label="查找对话框"><span class="rb-icon rb-icon-11" aria-hidden="true" data-icon="arrow_up_right"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#sc9070-clip0_57_20044)">
<path d="M4.5 7.5H7.5V4.5" stroke="#757575" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 7.5L4.5 4.5" stroke="#757575" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="sc9070-clip0_57_20044">
<rect width="11" height="11" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
</span></button>
          <div class="rb-group-label">查找</div>
        </section>
      </div>
      <div class="rb-body rb-body-single" role="toolbar" aria-label="开始单行" hidden data-sr-compact="0">

                        <div class="rb-sr-rail" role="toolbar" aria-label="开始单行">
          <div class="rb-sr-group" data-sr-group="clipboard">
            <button type="button" class="rb-tool" title="格式刷" aria-label="格式刷"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="brush"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>刷16_格式刷_FormatPainter_brush_FormatPainterQat</desc><style>
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
    }</style><g id="sr30062-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="sr30062-line" d="M2.5 7.5H13.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30062-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30062-line_2" d="M9.5 11C9.5 11.6667 9.3 13.3 8.5 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30062-line_3" d="M14.5 6V7.00002C14.5 7.27615 14.2762 7.50001 14 7.50002L13.5 7.50003V11.3436C13.5 12.4237 13.1803 13.4796 12.5812 14.3782C12.5305 14.4543 12.4451 14.5 12.3536 14.5H1.77781C1.64474 14.5 1.55376 14.3656 1.60317 14.2421C2.19562 12.761 2.5 11.1804 2.5 9.58525V7.5H2C1.72386 7.5 1.5 7.27614 1.5 7V6C1.5 5.17157 2.17157 4.5 3 4.5H6.5V4L6.29057 3.37171C5.90164 2.20492 6.7701 1 8 1C9.2299 1 10.0984 2.20492 9.70943 3.37171L9.5 4V4.5H13C13.8284 4.5 14.5 5.17157 14.5 6Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button>
            <div class="rb-split" title="粘贴" role="group" aria-label="粘贴" data-control="split-button-horizontal"><button type="button" class="rb-tool" aria-label="粘贴"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>表单_账单</desc><style>
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
    }</style><g id="sr30063-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30063-line" d="M13.5 13.9991V3.99906C13.5 3.72292 13.2761 3.49906 13 3.49906H10V2C10 1.72386 9.77614 1.5 9.5 1.5H8H6.5C6.22386 1.5 6 1.72386 6 2L6 3.49906H3C2.72386 3.49906 2.5 3.72292 2.5 3.99906V13.9991C2.5 14.2752 2.72386 14.4991 3 14.4991H13C13.2761 14.4991 13.5 14.2752 13.5 13.9991Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30063-line_2" d="M4.5 4V5.5C4.5 5.77614 4.72386 6 5 6H11C11.2761 6 11.5 5.77614 11.5 5.5V4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="粘贴菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30064-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30064-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
          </div>
          <div class="rb-sr-sep" aria-hidden="true"></div>
          <div class="rb-sr-group" data-sr-group="slideshow">
            <div class="rb-sr-light-split" title="当页开始" data-control="split-button-horizontal"><button type="button" class="rb-sr-light-main" aria-label="当页开始"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="slide_show_view_menu"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>幻灯片放映16_slide_show_view_menu</desc><style>
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
    }</style><g id="sr30065-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30065-line" d="M1.5 1.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30065-line_2" d="M13.5 2V8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30065-line_3" d="M2.5 2V10C2.5 10.2761 2.72386 10.5 3 10.5H5.98008C5.98692 10.5 5.99007 10.5085 5.98488 10.513L2.5 13.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30065-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="sr30065-line_4" d="M8.5 13.9777V8.02231C8.5 7.79077 8.75116 7.64651 8.95116 7.76318L14.0558 10.7409C14.2542 10.8566 14.2542 11.1434 14.0558 11.2591L8.95116 14.2368C8.75116 14.3535 8.5 14.2092 8.5 13.9777Z" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">当页开始</span></button><button type="button" class="rb-sr-light-caret" aria-label="当页开始菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30066-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30066-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
          </div>
          <div class="rb-sr-sep" aria-hidden="true"></div>
          <div class="rb-sr-group" data-sr-group="slides">
            <button type="button" class="rb-sr-light-menu" title="新建幻灯片" aria-label="新建幻灯片" aria-haspopup="menu"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="slide_add"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>新建幻灯片16_newslide_新建绘图画布_InsertCanvas</desc><style>
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
    }</style><g id="sr30067-group-1" class="kd-color-icon-green-primary kd-stroke-width-icon-regular"><path id="sr30067-line" d="M6.5 10.5H14.5M10.5 6.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30067-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30067-line_2" d="M14.5 7V2C14.5 1.72386 14.2761 1.5 14 1.5H7H2C1.72386 1.5 1.5 1.72386 1.5 2V2.93478V13C1.5 13.2761 1.72386 13.5 2 13.5H7" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">新建幻灯片</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30068-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30068-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
          </div>
          <div class="rb-sr-sep" aria-hidden="true"></div>
          <div class="rb-sr-group" data-sr-group="font">
            <div class="rb-sr-font-expanded" data-sr-hide="10">
              <button type="button" class="rb-sr-light-menu rb-sr-font-name" title="字体" aria-label="字体名" aria-haspopup="menu"><span class="rb-sr-light-label">微软雅黑 (标题)</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30069-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30069-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
              <button type="button" class="rb-sr-light-menu rb-sr-font-size" title="字号" aria-label="字号" aria-haspopup="menu"><span class="rb-sr-light-label">60</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30070-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30070-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="增大字号" aria-label="增大字号" data-sr-hide="9"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_size_increase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>增加字号16_增大字号_IncreaseFontSize</desc><style>
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
    }</style><g id="sr30071-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="sr30071-line" d="M10 3.5H15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30071-line_2" d="M12.5 1V6" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30071-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30071-line_3" d="M3.80078 9.59961H10.2" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30071-line_4" d="M2 13.5L6.99083 2.02109C6.99432 2.01308 7.00569 2.01308 7.00917 2.02109L12 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="减小字号" aria-label="减小字号" data-sr-hide="9"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_size_reduce_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>减小字号16_DecreaseFontSize</desc><style>
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
    }</style><g id="sr30072-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="sr30072-line" d="M8.5 4.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30072-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30072-line_2" d="M3 10.6001H8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30072-line_3" d="M1.5 13.5L5.49072 3.52321C5.49407 3.51483 5.50593 3.51483 5.50928 3.52321L9.5 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="加粗" aria-label="加粗" data-sr-hide="8"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="bold_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>加粗16_Bold_BoldQat_bookmarkBold</desc><style>
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
    }</style><g id="sr30073-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30073-B" d="M4 3H8.00586C8.79883 3 9.389 3.03418 9.77637 3.10254C10.1683 3.16634 10.5169 3.30306 10.8223 3.5127C11.1322 3.72233 11.3896 4.0026 11.5947 4.35352C11.7998 4.69987 11.9023 5.08952 11.9023 5.52246C11.9023 5.99186 11.7747 6.42253 11.5195 6.81445C11.2689 7.20638 10.9271 7.50033 10.4941 7.69629C11.1048 7.87402 11.5742 8.17708 11.9023 8.60547C12.2305 9.03385 12.3945 9.53744 12.3945 10.1162C12.3945 10.5719 12.2874 11.0163 12.0732 11.4492C11.8636 11.8776 11.5742 12.2217 11.2051 12.4814C10.8405 12.7367 10.3893 12.8939 9.85156 12.9531C9.51432 12.9896 8.70085 13.0124 7.41113 13.0215H4V3ZM6.02344 4.66797V6.98535H7.34961C8.13802 6.98535 8.62793 6.97396 8.81934 6.95117C9.16569 6.91016 9.43685 6.79167 9.63281 6.5957C9.83333 6.39518 9.93359 6.13314 9.93359 5.80957C9.93359 5.49967 9.84701 5.24902 9.67383 5.05762C9.50521 4.86165 9.25228 4.74316 8.91504 4.70215C8.71452 4.67936 8.13802 4.66797 7.18555 4.66797H6.02344ZM6.02344 8.65332V11.333H7.89648C8.62565 11.333 9.08822 11.3125 9.28418 11.2715C9.58496 11.2168 9.82878 11.0846 10.0156 10.875C10.207 10.6608 10.3027 10.376 10.3027 10.0205C10.3027 9.71973 10.2298 9.46452 10.084 9.25488C9.93815 9.04525 9.72624 8.89258 9.44824 8.79688C9.1748 8.70117 8.5778 8.65332 7.65723 8.65332H6.02344Z" stroke="none"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="倾斜" aria-label="倾斜" data-sr-hide="8"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="italic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>斜体16_倾斜_Italic</desc><style>
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
    }</style><g id="sr30074-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30074-group-0_2" d="M7.5 2.6001H9M10.5 2.6001H9M4.5 13.4001H6M7.5 13.4001H6M9 2.6001L6 13.4001" stroke-linecap="round" stroke-linejoin="bevel" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <button type="button" class="rb-tool" title="下划线" aria-label="下划线" data-sr-hide="8"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="underscore_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>下划线16_Underline_Pdf_Underline_v2_Pdf_Underline</desc><style>
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
    }</style><g id="sr30075-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30075-line" d="M3.5 13.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sr30075-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30075-line_2" d="M4.59961 3.5V8.5C4.59961 10.1016 5.89798 11.4 7.49961 11.4C9.10124 11.4 10.3996 10.1016 10.3996 8.5V3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button>
              <div class="rb-split" title="字体颜色" role="group" aria-label="字体颜色" data-control="split-button-horizontal" data-sr-hide="7"><button type="button" class="rb-tool rb-swatch font" aria-label="字体颜色"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_color_gradient"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredcustomfeatures="data-kd-color-scheme">
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
<g id="sr30076-group-0" class="kd-stroke-width-icon-bold c58A401">
<path d="M3.5 12.9442L7.75077 2.74233C7.84308 2.52079 8.15692 2.52079 8.24923 2.74233L12.5 12.9442M5 9.6H11" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</g>
<g id="sr30076-group-1" class="kd-stroke-width-icon-bold c0E52D4">
<path d="M3.5 12.9442L7.75077 2.74233C7.84308 2.52079 8.15692 2.52079 8.24923 2.74233L12.5 12.9442M5 9.6H11" stroke="url(#sr30076-paint0_linear_4059_2307)" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
<defs>
<linearGradient id="sr30076-paint0_linear_4059_2307" x1="3" y1="7.52" x2="13" y2="7.52" gradientUnits="userSpaceOnUse">
                <stop stop-color="currentColor" stop-opacity="0"/>
                <stop offset="1" stop-color="currentColor" stop-opacity="1"/>
</linearGradient>
</defs>
</g>
</svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="字体颜色菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30077-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30077-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
              <div class="rb-split" title="文本突出显示颜色" role="group" aria-label="文本突出显示颜色" data-control="split-button-horizontal" data-sr-hide="6"><button type="button" class="rb-tool rb-swatch highlight" aria-label="文本突出显示颜色"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>高亮文本16</desc><style>
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
    }</style><g id="sr30078-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30078-line" d="M4 8C4 9.80392 3.48431 12.147 1.5 13.4999L4.5 13.5C5.16144 12.8987 6.01569 11.6392 8 12" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30078-line_2" d="M10 1.5L4 8L8 12L14.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="文本突出显示颜色菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30079-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30079-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
              <div class="rb-sr-group-overflow"><button type="button" class="rb-tool rb-sr-group-overflow-btn" title="更多" aria-label="字体更多" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="more"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>更多_more</desc><style>
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
    }</style><g id="sr30091-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30091-Ellipse 545" d="M9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30964 9.25 8Z" stroke="none"/><path id="sr30091-Ellipse 547" d="M14.75 8C14.75 8.69036 14.1904 9.25 13.5 9.25C12.8096 9.25 12.25 8.69036 12.25 8C12.25 7.30964 12.8096 6.75 13.5 6.75C14.1904 6.75 14.75 7.30964 14.75 8Z" stroke="none"/><path id="sr30091-Ellipse 546" d="M3.75 8C3.75 8.69036 3.19036 9.25 2.5 9.25C1.80964 9.25 1.25 8.69036 1.25 8C1.25 7.30964 1.80964 6.75 2.5 6.75C3.19036 6.75 3.75 7.30964 3.75 8Z" stroke="none"/></g></svg></span></button><div class="kd-menu kd-menu-vertical rb-sr-group-overflow-menu" role="menu" hidden><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="clear_format"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>清除内容16_clear_contents_ClearFormat</desc><style>
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
    }</style><g id="sr30080-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30080- line" d="M13.5 6V2C13.5 1.72386 13.2761 1.5 13 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V13C1.5 13.2761 1.72386 13.5 2 13.5H6" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30080-line" d="M7.5 1.5V9" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30080-line_2" d="M1.5 7.5H9" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30080-group-1" class="kd-color-icon-red-primary kd-stroke-width-icon-regular"><path id="sr30080-line_3" d="M9 10L12 13M9.70711 14.5H10.2929C10.4255 14.5 10.5527 14.4473 10.6464 14.3536L14.6464 10.3536C14.8417 10.1583 14.8417 9.84171 14.6464 9.64645L12.3536 7.35355C12.1583 7.15829 11.8417 7.15829 11.6464 7.35355L7.35355 11.6464C7.15829 11.8417 7.15829 12.1583 7.35355 12.3536L9.35355 14.3536C9.44732 14.4473 9.5745 14.5 9.70711 14.5Z" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30080-line_4" d="M10 14.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">清除所有格式</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_spacing"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>字符间距16_ArtisticWordCharacterSpacing</desc><style>
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
    }</style><g id="sr30081-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sr30081-Vector 2018" d="M3 11L1.50707 12.4929C1.50317 12.4968 1.50317 12.5032 1.50707 12.5071L3 14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30081-Vector 2020" d="M13 11L14.4929 12.4929C14.4968 12.4968 14.4968 12.5032 14.4929 12.5071L13 14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30081-Vector 2019" d="M2 12.5H14.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30081-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30081-line" d="M9.5 7.3999H13.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30081-line_2" d="M8.5 9.50012L11.4908 2.52145C11.4943 2.51337 11.5057 2.51337 11.5092 2.52145L14.5 9.50012" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30081-line_3" d="M1.5 2.49976L4.49081 9.47843C4.49427 9.48651 4.50573 9.48651 4.50919 9.47843L7.5 2.49976" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">字符间距</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_shadow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>阴影16_font_shadow_ongmani</desc><style>
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
    }</style><g id="sr30082-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30082-fill" opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M7.1383 1.99997C7.32425 1.75203 7.61882 1.59998 7.93836 1.59998H9.26681C9.67299 1.59998 10.0388 1.84566 10.1925 2.22165L14.5966 12.9973C14.8117 13.5236 14.4246 14.1 13.856 14.1H11.941C11.5425 14.1 11.1831 13.8635 11.0245 13.5H12.856C13.0692 13.5 13.2144 13.2838 13.1337 13.0865L8.72963 2.31081C8.65279 2.12281 8.46988 1.99997 8.26679 1.99997H7.1383ZM2.57422 13.5C2.66161 13.8348 2.96376 14.1 3.34937 14.1H5.26401C5.67292 14.1 6.04063 13.851 6.19249 13.4714L6.74102 12.1H10.0425L9.80248 11.5H5.40248L4.72823 13.1857C4.6523 13.3755 4.46845 13.5 4.26399 13.5H2.57422ZM7.24249 9.49997L8.12244 7.30002L7.60239 5.99997L6.20245 9.49997H7.24249Z" stroke="none"/><path id="sr30082-fill_2" opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M7.72596 1.99994C7.91049 1.81175 8.16613 1.69995 8.44013 1.69995H9.76858C10.1748 1.69995 10.5406 1.94564 10.6943 2.32162L15.0983 13.0973C15.3134 13.6236 14.9263 14.2 14.3578 14.2H12.4428C12.0339 14.2 11.6662 13.951 11.5143 13.5714L11.4858 13.4999H12.8558C13.069 13.4999 13.2142 13.2838 13.1335 13.0864L8.72945 2.31078C8.65261 2.12278 8.4697 1.99994 8.26661 1.99994H7.72596ZM3.05664 13.4999C3.10511 13.8804 3.42783 14.2 3.85114 14.2H5.76578C6.17469 14.2 6.5424 13.951 6.69426 13.5713L7.24279 12.2H10.0823L9.8023 11.4999H5.4023L4.72805 13.1856C4.65212 13.3755 4.46827 13.4999 4.26381 13.4999H3.05664ZM8.39324 7.97744L7.60221 5.99994L6.20227 9.49994H7.78426L8.39324 7.97744Z" stroke="none"/><path id="sr30082-fill_3" opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M8.33453 2.0045C8.50511 1.87456 8.71672 1.79993 8.94058 1.79993H10.269C10.6752 1.79993 11.041 2.04561 11.1947 2.4216L15.5988 13.1973C15.8139 13.7235 15.4268 14.2999 14.8582 14.2999H12.9433C12.5344 14.2999 12.1667 14.051 12.0148 13.6713L11.9462 13.4999H12.8563C13.0695 13.4999 13.2146 13.2838 13.134 13.0864L8.7299 2.31078C8.66168 2.14387 8.50986 2.02832 8.33453 2.0045ZM3.55078 13.4999C3.55045 13.9227 3.89165 14.2999 4.35159 14.2999H6.26623C6.67514 14.2999 7.04285 14.051 7.19471 13.6713L7.74324 12.2999H10.1228L9.80275 11.4999H5.40275L4.7285 13.1856C4.65257 13.3755 4.46871 13.4999 4.26426 13.4999H3.55078ZM8.6637 8.65242L7.60266 5.99994L6.20272 9.49994H8.3247L8.6637 8.65242Z" stroke="none"/></g><g id="sr30082-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30082-A" fill-rule="evenodd" clip-rule="evenodd" d="M2.07143 13.0865L6.47528 2.31084C6.55211 2.12285 6.73503 2 6.93812 2H8.26657C8.46966 2 8.65257 2.12284 8.72941 2.31084L13.1335 13.0865C13.2141 13.2839 13.069 13.5 12.8558 13.5H10.9408C10.7364 13.5 10.5525 13.3755 10.4766 13.1857L9.80226 11.5H5.40226L4.72801 13.1857C4.65208 13.3755 4.46823 13.5 4.26377 13.5H2.34913C2.13594 13.5 1.99077 13.2839 2.07143 13.0865ZM6.20223 9.5H9.00223L7.60217 6L6.20223 9.5Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">文本阴影</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="math_superscript"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>上标16_Superscript</desc><style>
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
    }</style><g id="sr30083-group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30083-line" d="M14.5 6.49963H11.5C12.0257 5.3685 13.1658 4.89816 13.9027 4.1849C14.9748 3.14721 14.4115 1.67701 13.1517 1.60268C12.3834 1.55735 11.8729 2.02347 11.6715 2.60892" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sr30083-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30083-line_2" d="M2 4L9 13" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30083-line_3" d="M9 4L2 13" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">上标</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>高亮文本16</desc><style>
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
    }</style><g id="sr30084-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30084-line" d="M4 8C4 9.80392 3.48431 12.147 1.5 13.4999L4.5 13.5C5.16144 12.8987 6.01569 11.6392 8 12" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30084-line_2" d="M10 1.5L4 8L8 12L14.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">文本突出显示颜色</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_color_gradient"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredcustomfeatures="data-kd-color-scheme">
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
<g id="sr30085-group-0" class="kd-stroke-width-icon-bold c58A401">
<path d="M3.5 12.9442L7.75077 2.74233C7.84308 2.52079 8.15692 2.52079 8.24923 2.74233L12.5 12.9442M5 9.6H11" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</g>
<g id="sr30085-group-1" class="kd-stroke-width-icon-bold c0E52D4">
<path d="M3.5 12.9442L7.75077 2.74233C7.84308 2.52079 8.15692 2.52079 8.24923 2.74233L12.5 12.9442M5 9.6H11" stroke="url(#sr30085-paint0_linear_4059_2307)" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
<defs>
<linearGradient id="sr30085-paint0_linear_4059_2307" x1="3" y1="7.52" x2="13" y2="7.52" gradientUnits="userSpaceOnUse">
                <stop stop-color="currentColor" stop-opacity="0"/>
                <stop offset="1" stop-color="currentColor" stop-opacity="1"/>
</linearGradient>
</defs>
</g>
</svg></span></span><span class="kd-menu-item-content">字体颜色</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="bold_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>加粗16_Bold_BoldQat_bookmarkBold</desc><style>
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
    }</style><g id="sr30086-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30086-B" d="M4 3H8.00586C8.79883 3 9.389 3.03418 9.77637 3.10254C10.1683 3.16634 10.5169 3.30306 10.8223 3.5127C11.1322 3.72233 11.3896 4.0026 11.5947 4.35352C11.7998 4.69987 11.9023 5.08952 11.9023 5.52246C11.9023 5.99186 11.7747 6.42253 11.5195 6.81445C11.2689 7.20638 10.9271 7.50033 10.4941 7.69629C11.1048 7.87402 11.5742 8.17708 11.9023 8.60547C12.2305 9.03385 12.3945 9.53744 12.3945 10.1162C12.3945 10.5719 12.2874 11.0163 12.0732 11.4492C11.8636 11.8776 11.5742 12.2217 11.2051 12.4814C10.8405 12.7367 10.3893 12.8939 9.85156 12.9531C9.51432 12.9896 8.70085 13.0124 7.41113 13.0215H4V3ZM6.02344 4.66797V6.98535H7.34961C8.13802 6.98535 8.62793 6.97396 8.81934 6.95117C9.16569 6.91016 9.43685 6.79167 9.63281 6.5957C9.83333 6.39518 9.93359 6.13314 9.93359 5.80957C9.93359 5.49967 9.84701 5.24902 9.67383 5.05762C9.50521 4.86165 9.25228 4.74316 8.91504 4.70215C8.71452 4.67936 8.13802 4.66797 7.18555 4.66797H6.02344ZM6.02344 8.65332V11.333H7.89648C8.62565 11.333 9.08822 11.3125 9.28418 11.2715C9.58496 11.2168 9.82878 11.0846 10.0156 10.875C10.207 10.6608 10.3027 10.376 10.3027 10.0205C10.3027 9.71973 10.2298 9.46452 10.084 9.25488C9.93815 9.04525 9.72624 8.89258 9.44824 8.79688C9.1748 8.70117 8.5778 8.65332 7.65723 8.65332H6.02344Z" stroke="none"/></g></svg></span></span><span class="kd-menu-item-content">加粗</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="italic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>斜体16_倾斜_Italic</desc><style>
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
    }</style><g id="sr30087-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30087-group-0_2" d="M7.5 2.6001H9M10.5 2.6001H9M4.5 13.4001H6M7.5 13.4001H6M9 2.6001L6 13.4001" stroke-linecap="round" stroke-linejoin="bevel" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">倾斜</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="underscore_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>下划线16_Underline_Pdf_Underline_v2_Pdf_Underline</desc><style>
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
    }</style><g id="sr30088-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30088-line" d="M3.5 13.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sr30088-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30088-line_2" d="M4.59961 3.5V8.5C4.59961 10.1016 5.89798 11.4 7.49961 11.4C9.10124 11.4 10.3996 10.1016 10.3996 8.5V3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">下划线</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_size_increase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>增加字号16_增大字号_IncreaseFontSize</desc><style>
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
    }</style><g id="sr30089-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="sr30089-line" d="M10 3.5H15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30089-line_2" d="M12.5 1V6" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30089-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30089-line_3" d="M3.80078 9.59961H10.2" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30089-line_4" d="M2 13.5L6.99083 2.02109C6.99432 2.01308 7.00569 2.01308 7.00917 2.02109L12 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">增大字号</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="font_size_reduce_wps"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>减小字号16_DecreaseFontSize</desc><style>
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
    }</style><g id="sr30090-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-bold"><path id="sr30090-line" d="M8.5 4.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30090-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30090-line_2" d="M3 10.6001H8" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30090-line_3" d="M1.5 13.5L5.49072 3.52321C5.49407 3.51483 5.50593 3.51483 5.50928 3.52321L9.5 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">减小字号</span></div></div></div>
            </div>
            <button type="button" class="rb-sr-light-menu rb-sr-font-entry" title="字体" aria-label="字体" aria-haspopup="menu" data-sr-show="10" hidden><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="symbol_a"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>字母A_样式_字体样式_文本_单个字符_single_character_themeFont</desc><style>
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
    }</style><g id="sr30092-group-0" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30092-line" d="M4.80078 9.59961H11.2" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30092-line_2" d="M3 13.5L7.99083 2.02109C7.99432 2.01308 8.00569 2.01308 8.00917 2.02109L13 13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span><span class="rb-sr-light-label">字体</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30093-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30093-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
          </div>
          <div class="rb-sr-sep" aria-hidden="true" data-sr-hide="5"></div>
          <div class="rb-sr-group" data-sr-group="paragraph" data-sr-hide="5">
            <div class="rb-split" title="项目符号" role="group" aria-label="项目符号" data-control="split-button-horizontal"><button type="button" class="rb-tool" aria-label="项目符号"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="list_bullets_ten"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>项目符号十16_BulletsNumber_符号</desc><style>
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
    }</style><g id="sr30094-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30094-fill" d="M3.79922 2.5002C3.79922 3.21817 3.21719 3.8002 2.49922 3.8002C1.78125 3.8002 1.19922 3.21817 1.19922 2.5002C1.19922 1.78223 1.78125 1.2002 2.49922 1.2002C3.21719 1.2002 3.79922 1.78223 3.79922 2.5002Z" stroke="none"/><path id="sr30094-fill_2" d="M3.80117 7.49971C3.80117 8.21768 3.21914 8.79971 2.50117 8.79971C1.7832 8.79971 1.20117 8.21768 1.20117 7.49971C1.20117 6.78174 1.7832 6.19971 2.50117 6.19971C3.21914 6.19971 3.80117 6.78174 3.80117 7.49971Z" stroke="none"/><path id="sr30094-fill_3" d="M3.80117 12.4997C3.80117 13.2177 3.21914 13.7997 2.50117 13.7997C1.7832 13.7997 1.20117 13.2177 1.20117 12.4997C1.20117 11.7817 1.7832 11.1997 2.50117 11.1997C3.21914 11.1997 3.80117 11.7817 3.80117 12.4997Z" stroke="none"/></g><g id="sr30094-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30094-line" d="M6.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30094-line_2" d="M6.5 7.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30094-line_3" d="M6.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="项目符号菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30095-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30095-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-split" title="编号" role="group" aria-label="编号" data-control="split-button-horizontal" data-sr-hide="4"><button type="button" class="rb-tool" aria-label="编号"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="number"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>编号16_InsertNumber_自动编号_号码_NO</desc><style>
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
    }</style><g id="sr30096-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30096-Vector 2034" d="M14.5 1.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30096-Vector 2035" d="M14.5 6.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30096-Vector 2036" d="M13.5 1.5V6.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30096-Vector 2037" d="M11.5 1.5V6.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30096-Vector 2038" d="M10.5 11.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30096-Vector 2039" d="M10.5 13.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30096-Vector 2040" d="M11.5 10.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30096-Vector 2041" d="M13.5 10.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30096-Vector 2042" d="M8.5 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V12C1.5 12.2761 1.72386 12.5 2 12.5H8.20505" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30096-Vector 2043" d="M6.5 10.5L8.49293 12.4929C8.49683 12.4968 8.49683 12.5032 8.49293 12.5071L6.5 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="编号菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30097-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30097-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-split" title="对齐文本" role="group" aria-label="对齐文本" data-control="split-button-horizontal" data-sr-hide="3"><button type="button" class="rb-tool" aria-label="对齐文本"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>对齐文本16_TextAlign</desc><style>
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
    }</style><g id="sr30098-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30098-line" d="M6 3.5L7.99293 1.50707C7.99683 1.50317 8.00317 1.50317 8.00707 1.50707L10 3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30098-line_2" d="M6 12.5L7.99293 14.4929C7.99683 14.4968 8.00317 14.4968 8.00707 14.4929L10 12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30098-Vector 1755" d="M4.5 6.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30098-Vector 1756" d="M4.5 9.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30098-Vector 1757" d="M4 3.5H2C1.72386 3.5 1.5 3.72386 1.5 4V12C1.5 12.2761 1.72386 12.5 2 12.5H4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30098-Vector 1758" d="M12 3.5H14C14.2761 3.5 14.5 3.72386 14.5 4V12C14.5 12.2761 14.2761 12.5 14 12.5H12" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></button><button type="button" class="rb-tool rb-caret" aria-label="对齐文本菜单" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30099-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30099-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button></div>
            <div class="rb-sr-group-overflow"><button type="button" class="rb-tool rb-sr-group-overflow-btn" title="更多" aria-label="段落更多" aria-haspopup="menu" aria-expanded="false"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="more"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>更多_more</desc><style>
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
    }</style><g id="sr30114-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30114-Ellipse 545" d="M9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30964 9.25 8Z" stroke="none"/><path id="sr30114-Ellipse 547" d="M14.75 8C14.75 8.69036 14.1904 9.25 13.5 9.25C12.8096 9.25 12.25 8.69036 12.25 8C12.25 7.30964 12.8096 6.75 13.5 6.75C14.1904 6.75 14.75 7.30964 14.75 8Z" stroke="none"/><path id="sr30114-Ellipse 546" d="M3.75 8C3.75 8.69036 3.19036 9.25 2.5 9.25C1.80964 9.25 1.25 8.69036 1.25 8C1.25 7.30964 1.80964 6.75 2.5 6.75C3.19036 6.75 3.75 7.30964 3.75 8Z" stroke="none"/></g></svg></span></button><div class="kd-menu kd-menu-vertical rb-sr-group-overflow-menu" role="menu" hidden><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>对齐文本16_TextAlign</desc><style>
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
    }</style><g id="sr30100-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30100-line" d="M6 3.5L7.99293 1.50707C7.99683 1.50317 8.00317 1.50317 8.00707 1.50707L10 3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30100-line_2" d="M6 12.5L7.99293 14.4929C7.99683 14.4968 8.00317 14.4968 8.00707 14.4929L10 12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30100-Vector 1755" d="M4.5 6.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30100-Vector 1756" d="M4.5 9.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30100-Vector 1757" d="M4 3.5H2C1.72386 3.5 1.5 3.72386 1.5 4V12C1.5 12.2761 1.72386 12.5 2 12.5H4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30100-Vector 1758" d="M12 3.5H14C14.2761 3.5 14.5 3.72386 14.5 4V12C14.5 12.2761 14.2761 12.5 14 12.5H12" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">对齐文本</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="number"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>编号16_InsertNumber_自动编号_号码_NO</desc><style>
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
    }</style><g id="sr30101-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30101-Vector 2034" d="M14.5 1.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30101-Vector 2035" d="M14.5 6.5H10.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30101-Vector 2036" d="M13.5 1.5V6.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30101-Vector 2037" d="M11.5 1.5V6.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30101-Vector 2038" d="M10.5 11.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30101-Vector 2039" d="M10.5 13.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30101-Vector 2040" d="M11.5 10.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30101-Vector 2041" d="M13.5 10.5V14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30101-Vector 2042" d="M8.5 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3V12C1.5 12.2761 1.72386 12.5 2 12.5H8.20505" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30101-Vector 2043" d="M6.5 10.5L8.49293 12.4929C8.49683 12.4968 8.49683 12.5032 8.49293 12.5071L6.5 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">编号</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="indent_decrease"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>减少缩进16_减少缩进量_DecreaseIndent</desc><style>
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
    }</style><g id="sr30102-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sr30102-line" d="M7.5 7.5H1.5M1.5 7.5L3.5 5.5M1.5 7.5L3.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sr30102-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30102-line_2" d="M1.5 1.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30102-line_3" d="M1.5 13.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30102-line_4" d="M10.5 5.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30102-line_5" d="M10.5 9.5L13.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">减少缩进量</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="indent_increase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>增加缩进16_增加缩进量_IncreaseIndent</desc><style>
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
    }</style><g id="sr30103-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sr30103-line" d="M1.5 7.5H7.5M7.5 7.5L5.5 5.5M7.5 7.5L5.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sr30103-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30103-line_2" d="M1.5 1.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30103-line_3" d="M1.5 13.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30103-line_4" d="M10.5 5.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30103-line_5" d="M10.5 9.5L13.5 9.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">增加缩进量</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="text_direction"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>文字方向16_TextDirection</desc><style>
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
    }</style><g id="sr30104-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30104-line" d="M4.5 1.5V14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30104-line_2" d="M2 12L4.49293 14.4929C4.49683 14.4968 4.50317 14.4968 4.50707 14.4929L7 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30104-group-2" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sr30104-line_3" d="M11.5 9.5V14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30104-line_4" d="M9 12L11.4929 14.4929C11.4968 14.4968 11.5032 14.4968 11.5071 14.4929L14 12" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30104-group-1" class="kd-color-icon-primary kd-stroke-width-icon-bold"><path id="sr30104-line_5" d="M10 5.5H13" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30104-line_6" d="M9 7.5L11.4908 1.52215C11.4942 1.51395 11.5058 1.51395 11.5092 1.52215L14 7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">文字方向</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="line_spacing"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>行距16_增大段落行距_IncreaseSpace_LineSpacing_TightLineSpacing_LooseLineSpacing_行间距</desc><style>
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
    }</style><g id="sr30105-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sr30105-line" d="M3.5 1.5V13.5M3.5 1.5L1.5 3.5M3.5 1.5L5.5 3.5M3.5 13.5L1.5 11.5M3.5 13.5L5.5 11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sr30105-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30105-line_2" d="M8.5 2.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30105-line_3" d="M8.5 7.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30105-line_4" d="M8.5 12.5H14.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">行距</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="columns"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>分栏16_Columns</desc><style>
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
    }</style><g id="sr30106-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sr30106-line" d="M7.5 1V14" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30106-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30106-line_2" d="M5.5 1.5H1.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30106-line_3" d="M5.5 5.5H1.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30106-line_4" d="M5.5 9.5H1.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30106-line_5" d="M5.5 13.5H1.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30106-line_6" d="M13.5 1.5H9.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30106-line_7" d="M13.5 5.5H9.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30106-line_8" d="M13.5 9.5H9.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30106-line_9" d="M13.5 13.5H9.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">分栏</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_left"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>左对齐16_AlignLeft_AlignLeftQat_居左_靠左对齐</desc><style>
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
    }</style><g id="sr30107-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30107-line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30107-line_2" d="M1.5 7.5H7.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30107-line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">左对齐</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>水平居中16_居中对齐_水平居中_垂直居中_AlignCenter_AlignCenterQat</desc><style>
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
    }</style><g id="sr30108-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30108-line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30108-line_2" d="M4.5 7.5H10.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30108-line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">居中</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>右对齐16_AlignRight_居右_靠右对齐</desc><style>
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
    }</style><g id="sr30109-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30109-line" d="M1.5 2.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30109-line_2" d="M7.5 7.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30109-line_3" d="M1.5 12.5H13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">右对齐</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_both_side"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>两端对齐16_alignjustify_更多菜单</desc><style>
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
    }</style><g id="sr30110-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30110-Vector 1909" d="M1.5 2.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30110-Vector 1910" d="M1.5 7.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30110-Vector 1911" d="M1.5 12.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">两端对齐</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_distributed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>分散对齐16_AlignDistributed</desc><style>
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
    }</style><g id="sr30111-group-1" class="kd-color-icon-blue-primary kd-stroke-width-icon-regular"><path id="sr30111-line" d="M6.5 1.5L4.50707 3.49293C4.50317 3.49683 4.50317 3.50317 4.50707 3.50707L6.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30111-line_2" d="M9.5 1.5L11.4929 3.49293C11.4968 3.49683 11.4968 3.50317 11.4929 3.50707L9.5 5.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g><g id="sr30111-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30111-line_3" d="M1.5 1.5V13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30111-line_4" d="M4.5 8.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30111-line_5" d="M4.5 12.5H11.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30111-line_6" d="M14.5 1.5V13.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">分散对齐</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="smart_art_shape"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>智能图形形状</desc><style>
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
    .kd-color-icon-white {
       fill: var(--kd-color-icon-white, #FFFFFF);
       stroke: var(--kd-color-icon-white, #FFFFFF);
       km_fill: #FFFFFF;
       km_stroke: #FFFFFF;
       km_darkmode_fill: #C7C7C7;
       km_darkmode_stroke: #C7C7C7; 
    }</style><g id="sr30112-group-0" class="kd-color-icon-white kd-stroke-width-icon-regular"><path id="sr30112-fill" d="M10.6484 1.72265L13.3171 5.72567C13.4281 5.8921 13.4292 6.10862 13.3199 6.27616L12 8.3L10.6489 10.2816C10.5557 10.4182 10.4011 10.4999 10.2358 10.4999L6.5 10.5H2.06056C1.82095 10.5 1.67803 10.233 1.81094 10.0336L4.3151 6.27735C4.42707 6.1094 4.42707 5.8906 4.3151 5.72265L1.81094 1.96641C1.67803 1.76704 1.82095 1.5 2.06056 1.5H10.2324C10.3996 1.5 10.5557 1.58355 10.6484 1.72265Z" stroke="none"/><path id="sr30112-fill_2" d="M14 8.5H7C6.72386 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.72386 14.5 7 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V9C14.5 8.72386 14.2761 8.5 14 8.5Z" stroke="none"/></g><g id="sr30112-group-1" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30112-line" d="M6.5 10.5H2.06056C1.82095 10.5 1.67803 10.233 1.81094 10.0336L4.3151 6.27735C4.42707 6.1094 4.42707 5.8906 4.3151 5.72265L1.81094 1.96641C1.67803 1.76704 1.82095 1.5 2.06056 1.5H10.2324C10.3996 1.5 10.5557 1.58355 10.6484 1.72265L13.3277 5.7416C13.4332 5.89985 13.4398 6.10424 13.3447 6.26895L12.0367 8.53449" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30112-line_2" d="M14 8.5H7C6.72386 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.72386 14.5 7 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V9C14.5 8.72386 14.2761 8.5 14 8.5Z" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30112-line_3" d="M8.5 11.5H12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/></g></svg></span></span><span class="kd-menu-item-content">转换为 SmartArt</span></div><div class="kd-menu-item" role="menuitem" tabindex="-1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="over_wrap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" km_stroke-width="1" km_darkmode="true" kd_rtl="mirror" requiredCustomFeatures="data-kd-color-scheme,data-kd-rtl-mirror-scheme"><desc>自动换行16_换行_LineWrap2</desc><style>
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
    }</style><g id="sr30113-group-1" class="kd-color-icon-green-primary kd-stroke-width-icon-regular"><path id="sr30113- line" d="M8.5 12.5H14C14.2761 12.5 14.5 12.2761 14.5 12V7.8C14.5 7.63431 14.3657 7.5 14.2 7.5H2.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30113-line" d="M10 10.5L8.00707 12.4929C8.00317 12.4968 8.00317 12.5032 8.00707 12.5071L10 14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30113-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30113- line_2" d="M2.5 2.5H14.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30113- line_3" d="M2.5 12.5H5.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">换行</span></div></div></div>
          </div>
          <div class="rb-sr-sep" aria-hidden="true" data-sr-hide="2"></div>
          <div class="rb-sr-group" data-sr-group="drawing" data-sr-hide="2">
            <button type="button" class="rb-sr-light-menu" title="绘图" aria-label="绘图" aria-haspopup="menu"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="shape"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>形状16_Shapes</desc><style>
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
    }</style><g id="sr30115-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30115-line" d="M5.5 10.5H2C1.72386 10.5 1.5 10.2761 1.5 10V2C1.5 1.72386 1.72386 1.5 2 1.5H10C10.2761 1.5 10.5 1.72386 10.5 2V5.50006" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30115-line_2" d="M5.5 10.5837C5.67419 13.0518 7.7316 15 10.244 15C12.8707 15 15 12.8707 15 10.244C15 7.7316 13.0518 5.67419 10.5837 5.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30115-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="sr30115-line_3" d="M10.1667 5.48828C7.58934 5.48828 5.5 7.57762 5.5 10.1549C5.5 10.267 5.50395 10.3782 5.51172 10.4883H10.5V5.5C10.3899 5.49223 10.2787 5.48828 10.1667 5.48828Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">绘图</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30116-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30116-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
          </div>
          <div class="rb-sr-sep" aria-hidden="true" data-sr-hide="1"></div>
          <div class="rb-sr-group" data-sr-group="editing" data-sr-hide="1">
            <button type="button" class="rb-sr-light-menu" title="查找" aria-label="查找" aria-haspopup="menu"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="magnifier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>放大镜_搜索_查看_查找</desc><style>
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
    }</style><g id="sr30117-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30117-line" d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30117-line_2" d="M11.5 11.5L15 15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span><span class="rb-sr-light-label">查找</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30118-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30118-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
          </div>
          <div class="rb-sr-sep" aria-hidden="true" data-sr-show="1" hidden></div>
          <div class="rb-sr-overflow" data-sr-show="1" hidden>
            <button type="button" class="rb-sr-light-menu rb-sr-overflow-btn" title="更多" aria-label="更多" aria-haspopup="menu" aria-expanded="false"><span class="rb-sr-light-label">更多</span><span class="rb-icon rb-icon-12" aria-hidden="true" data-icon="arrow_down_ribbon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" km_stroke-width="1" km_darkmode="true" requiredCustomFeatures="data-kd-color-scheme"><desc>ribbon下箭头</desc><style>
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
    }</style><g id="sr30119-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30119-è·¯å¾" fill-rule="evenodd" clip-rule="evenodd" d="M8.58133 5C8.91542 5 9.08273 5.40393 8.84649 5.64017L6.26546 8.22114C6.11902 8.36757 5.8816 8.36758 5.73515 8.22115L3.15392 5.64018C2.91766 5.40395 3.08497 5 3.41907 5H4.35744C4.45684 5 4.55217 5.03946 4.62249 5.10971L5.73507 6.22128C5.88156 6.36764 6.11897 6.36755 6.26536 6.22107L7.37582 5.10992C7.44616 5.03954 7.54157 5 7.64107 5H8.58133Z" stroke="none"/></g></svg></span></button>
            <div class="kd-menu kd-menu-vertical rb-sr-overflow-menu" role="menu" hidden>
              <div class="kd-menu-item" role="menuitem" tabindex="-1" data-sr-more-item="1"><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="magnifier"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>放大镜_搜索_查看_查找</desc><style>
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
    }</style><g id="sr30120-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30120-line" d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30120-line_2" d="M11.5 11.5L15 15" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">查找</span></div>
              <div class="kd-menu-item" role="menuitem" tabindex="-1" data-sr-more-item="2" hidden><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="shape"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>形状16_Shapes</desc><style>
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
    }</style><g id="sr30121-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30121-line" d="M5.5 10.5H2C1.72386 10.5 1.5 10.2761 1.5 10V2C1.5 1.72386 1.72386 1.5 2 1.5H10C10.2761 1.5 10.5 1.72386 10.5 2V5.50006" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30121-line_2" d="M5.5 10.5837C5.67419 13.0518 7.7316 15 10.244 15C12.8707 15 15 12.8707 15 10.244C15 7.7316 13.0518 5.67419 10.5837 5.5" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g><g id="sr30121-group-1" class="kd-color-icon-orange-primary kd-stroke-width-icon-regular"><path id="sr30121-line_3" d="M10.1667 5.48828C7.58934 5.48828 5.5 7.57762 5.5 10.1549C5.5 10.267 5.50395 10.3782 5.51172 10.4883H10.5V5.5C10.3899 5.49223 10.2787 5.48828 10.1667 5.48828Z" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">绘图</span></div>
              <div class="kd-menu-item" role="menuitem" tabindex="-1" data-sr-more-item="5" hidden><span class="kd-menu-item-prefix"><span class="rb-icon rb-icon-16" aria-hidden="true" data-icon="align_text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" requiredCustomFeatures="data-kd-color-scheme" km_stroke-width="1" km_darkmode="true"><desc>对齐文本16_TextAlign</desc><style>
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
    }</style><g id="sr30122-group-0" class="kd-color-icon-primary kd-stroke-width-icon-regular"><path id="sr30122-line" d="M6 3.5L7.99293 1.50707C7.99683 1.50317 8.00317 1.50317 8.00707 1.50707L10 3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30122-line_2" d="M6 12.5L7.99293 14.4929C7.99683 14.4968 8.00317 14.4968 8.00707 14.4929L10 12.5" stroke-linecap="round" stroke-linejoin="round" fill="none" vector-effect="non-scaling-stroke"/><path id="sr30122-Vector 1755" d="M4.5 6.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30122-Vector 1756" d="M4.5 9.5H11.5" stroke-linecap="round" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30122-Vector 1757" d="M4 3.5H2C1.72386 3.5 1.5 3.72386 1.5 4V12C1.5 12.2761 1.72386 12.5 2 12.5H4" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><path id="sr30122-Vector 1758" d="M12 3.5H14C14.2761 3.5 14.5 3.72386 14.5 4V12C14.5 12.2761 14.2761 12.5 14 12.5H12" fill="none" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></g></svg></span></span><span class="kd-menu-item-content">段落</span></div>
            </div>
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
