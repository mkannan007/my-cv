import { test, expect } from '@playwright/test';

const headerBlock =
  'KANNAN MUTHU MANICKAM — AI SOFTWARE ENGINEER — Full Stack — Birmingham, England, UK — +44 075030 44414 — mkannan007@outlook.com';

test('homepage renders with header block and main nav links', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('header-block')).toHaveText(headerBlock);

  for (const href of ['/about', '/skills', '/experience', '/projects', '/contact', '/resume']) {
    await expect(page.locator(`nav a[href="${href}"]`).first()).toBeVisible();
  }

  await expect(page.getByRole('heading', { level: 1 })).toContainText('KANNAN MUTHU MANICKAM');
});
