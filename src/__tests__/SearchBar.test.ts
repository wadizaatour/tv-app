import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchBar from '@/components/SearchBar.vue'

const mockShows = [
  { id: 1, name: 'Breaking Bad' },
  { id: 2, name: 'Game of Thrones' },
  { id: 3, name: 'The Office' },
]

vi.mock('@/stores/shows', () => ({
  useShowsStore: () => ({ shows: mockShows }),
}))

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

describe('SearchBar - Simple Tests', () => {
  it('should render search input', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.find('input[placeholder="Search shows..."]').exists()).toBe(true)
  })

  it('should filter shows when searching', async () => {
    const wrapper = mount(SearchBar)
    const input = wrapper.find('input')

    await input.setValue('Breaking')

    const results = wrapper.findAll('.results-dropdown li')
    expect(results).toHaveLength(1)
    expect(results[0]?.text()).toBe('Breaking Bad')
  })
})
