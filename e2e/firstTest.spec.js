describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should show detail page after tap', async () => {
    await element(by.id('button')).tap();
    await expect(element(by.text('This is passed to detail'))).toBeVisible();
  });
});
