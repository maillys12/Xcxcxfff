function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('MONTYSTORE | เงื่อนไขการใช้งาน')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover');
}

