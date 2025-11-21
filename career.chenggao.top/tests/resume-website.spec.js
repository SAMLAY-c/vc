import { test, expect } from '@playwright/test';

test.describe('个人简历网站功能测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('页面基本元素检查', async ({ page }) => {
    // 检查页面标题
    await expect(page).toHaveTitle(/林承列|简历/);

    // 检查主要section存在
    await expect(page.locator('section#hero')).toBeVisible();
    await expect(page.locator('section#education')).toBeVisible();
    await expect(page.locator('section#internships')).toBeVisible();
    await expect(page.locator('section#projects')).toBeVisible();
    await expect(page.locator('section#portfolio')).toBeVisible();
    await expect(page.locator('section#ai')).toBeVisible();
    await expect(page.locator('section#contact')).toBeVisible();
  });

  test('导航功能测试', async ({ page }) => {
    // 检查导航链接存在
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(7); // Hero, Education, Internships, Projects, Portfolio, AI, Contact

    // 测试导航跳转
    await page.locator('nav a[href="#portfolio"]').click();
    await expect(page.locator('section#portfolio')).toBeInViewport();

    await page.locator('nav a[href="#ai"]').click();
    await expect(page.locator('section#ai')).toBeInViewport();

    await page.locator('nav a[href="#contact"]').click();
    await expect(page.locator('section#contact')).toBeInViewport();
  });

  test('个人信息显示正确', async ({ page }) => {
    // 检查姓名
    await expect(page.locator('h1')).toContainText('林承列');

    // 检查职位
    await expect(page.locator('.text-xl.md\\:text-2xl')).toContainText('AI产品经理');

    // 检查邮箱链接
    const emailLink = page.locator('a[href="mailto:224040166@link.cuhk.edu.cn"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:224040166@link.cuhk.edu.cn');
  });

  test('教育背景信息', async ({ page }) => {
    // 检查学校信息
    await expect(page.locator('section#education')).toContainText('香港中文大学（深圳）');
    await expect(page.locator('section#education')).toContainText('数据科学学院');
    await expect(page.locator('section#education')).toContainText('金融学硕士');
  });

  test('实习经历信息', async ({ page }) => {
    // 检查实习公司
    await expect(page.locator('section#internships')).toContainText('一起科技教育');
    await expect(page.locator('section#internships')).toContainText('AI产品部');
    await expect(page.locator('section#internships')).toContainText('AI产品经理');

    // 检查状态显示
    const statusElement = page.locator('section#internships .text-xs').filter({ hasText: '进行中' });
    await expect(statusElement).toBeVisible();
  });

  test('项目展示功能', async ({ page }) => {
    // 检查项目数量
    const projectCards = page.locator('section#projects .bg-white.rounded-xl');
    await expect(projectCards).toHaveCount(3);

    // 检查项目名称
    await expect(page.locator('section#projects')).toContainText('AI驱动的个性化教育内容推荐系统');
    await expect(page.locator('section#projects')).toContainText('AI辅助基金策略分析系统');
    await expect(page.locator('section#projects')).toContainText('AIGC内容审核与推荐系统');
  });

  test('作品集功能测试', async ({ page }) => {
    // 检查作品集标题
    await expect(page.locator('section#portfolio h2')).toContainText('作品集');

    // 检查筛选按钮
    const filterButtons = page.locator('section#portfolio button');
    await expect(filterButtons.first()).toContainText('全部作品');

    // 检查作品卡片
    const portfolioCards = page.locator('section#portfolio .group');
    await expect(portfolioCards.first()).toBeVisible();

    // 检查具体作品
    await expect(page.locator('section#portfolio')).toContainText('AI卡片制作网页工具');
    await expect(page.locator('section#portfolio')).toContainText('个人生活网站');
  });

  test('AI工具箱交互功能', async ({ page }) => {
    // 检查AI标签页
    const aiTabs = page.locator('section#ai button');
    await expect(aiTabs).toHaveCount(3);

    // 检查默认选中的工具箱标签
    const toolsTab = aiTabs.filter({ hasText: 'AI工具箱' });
    await expect(toolsTab).toHaveClass(/bg-blue-600/);

    // 测试标签切换
    await aiTabs.filter({ hasText: 'AI理念' }).click();
    await expect(page.locator('section#ai')).toContainText('AI时代的编程观');

    await aiTabs.filter({ hasText: 'AI历程' }).click();
    await expect(page.locator('section#ai')).toContainText('AI历程内容正在完善中');

    // 切换回工具箱
    await aiTabs.filter({ hasText: 'AI工具箱' }).click();
    await expect(page.locator('section#ai')).toContainText('Claude Code');
  });

  test('联系方式验证', async ({ page }) => {
    // 检查联系信息
    await expect(page.locator('section#contact')).toContainText('学术邮箱');
    await expect(page.locator('section#contact')).toContainText('深圳市');
    await expect(page.locator('section#contact')).toContainText('工作日 9:00-18:00');

    // 检查社交链接
    const githubLink = page.locator('a[href="https://github.com/Cheng-hun-gu-ren"]');
    await expect(githubLink).toBeVisible();

    const twitterLink = page.locator('a[href="https://x.com/Gary_Chen9527"]');
    await expect(twitterLink).toBeVisible();

    // 检查邮件发送按钮
    const emailButton = page.locator('a[href="mailto:224040166@link.cuhk.edu.cn"]');
    await expect(emailButton).toContainText('发送邮件');
  });

  test('响应式设计测试', async ({ page }) => {
    // 测试桌面视图
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('nav')).toBeVisible();

    // 测试平板视图
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('section#hero h1')).toBeVisible();

    // 测试手机视图
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('section#hero h1')).toBeVisible();
    await expect(page.locator('section#contact')).toBeVisible();
  });

  test('页面性能测试', async ({ page }) => {
    // 检查页面加载时间
    const startTime = Date.now();
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // 页面应该在合理时间内加载完成（5秒）
    expect(loadTime).toBeLessThan(5000);

    // 检查关键元素是否快速显示
    await expect(page.locator('h1')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('section#hero')).toBeVisible({ timeout: 3000 });
  });

  test('图片加载检查', async ({ page }) => {
    // 检查关键图片是否加载
    const images = page.locator('img');
    const imageCount = await images.count();

    if (imageCount > 0) {
      // 检查前几个图片的加载状态
      for (let i = 0; i < Math.min(imageCount, 3); i++) {
        const img = images.nth(i);
        await expect(img).toBeVisible();

        // 检查图片是否有效加载
        const naturalWidth = await img.evaluate(img => img.naturalWidth);
        expect(naturalWidth).toBeGreaterThan(0);
      }
    }
  });
});