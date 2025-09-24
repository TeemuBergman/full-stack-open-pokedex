const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText('kakuna')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('can navigate to pokemon page by clicking a pokemon link', async ({ page }) => {
    await page.goto('/')

    const linkByRole = page.getByRole('link', { name: 'ivysaur' })
    const hasRoleLink = await linkByRole.count() > 0
    const toClick = hasRoleLink ? linkByRole.first() : page.getByText('ivysaur').first()

    await Promise.all([
      page.waitForURL('**/pokemon/ivysaur'),
      toClick.click()
    ])

    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
