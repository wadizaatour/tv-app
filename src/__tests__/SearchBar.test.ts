import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchBar from '@/components/SearchBar.vue'

const mockShows = [
  { id: 1, name: 'Breaking Bad' },
  { id: 2, name: 'Game of Thrones' },
  { id: 3, name: 'The Office' },
]

vi.mock('@/stores/shows', () => ({
  useShowsStore: () => ({
    shows: mockShows,
  }),
}))

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

describe('SearchBar component to look for shows and redirect to details page', () => {
  it('should renders search input', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').attributes('placeholder')).toBe('Search shows...')
  })

  it('should not show dropdown when query is too short', async () => {
    const wrapper = mount(SearchBar)
    await wrapper.find('input').setValue('ab') // 2 chars

    expect(wrapper.find('.results-dropdown').exists()).toBe(false)
  })

  it('shouldshows dropdown when query has 3+ characters', async () => {
    const wrapper = mount(SearchBar)
    await wrapper.find('input').setValue('bre')

    expect(wrapper.find('.results-dropdown').exists()).toBe(true)
  })

  it('shouldfilters shows correctly', async () => {
    const wrapper = mount(SearchBar)
    await wrapper.find('input').setValue('game')

    const results = wrapper.findAll('.results-dropdown li')
    expect(results).toHaveLength(1)
    expect(results[0]?.text()).toBe('Game of Thrones')
  })

  it('shouldshows no results message when nothing matches', async () => {
    const wrapper = mount(SearchBar)
    await wrapper.find('input').setValue('xyz123')

    expect(wrapper.find('.no-results').exists()).toBe(true)
    expect(wrapper.find('.no-results').text()).toContain('No shows found')
  })

  it('shouldclears search input when clicking a result', async () => {
    const wrapper = mount(SearchBar)
    await wrapper.find('input').setValue('breaking')
    await wrapper.find('li').trigger('click')

    expect(wrapper.find('input').element.value).toBe('')
  })

  it('shouldcalls closeMenu prop when provided', async () => {
    const closeMenu = vi.fn()
    const wrapper = mount(SearchBar, {
      props: { closeMenu },
    })

    await wrapper.find('input').setValue('breaking')
    await wrapper.find('li').trigger('click')

    expect(closeMenu).toHaveBeenCalled()
  })
})
