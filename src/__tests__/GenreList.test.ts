import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import GenreList from '@/components/GenreList.vue'

const GENRES = ['Drama', 'Comedy', 'Action']

describe('GenreList.vue', () => {
  it('should display all genres as badges', () => {
    const wrapper = mount(GenreList, { props: { genres: GENRES } })
    const badges = wrapper.findAll('.genre-badge')

    expect(badges).toHaveLength(GENRES.length)
    expect(badges.map((b) => b.text())).toEqual(GENRES)
  })

  it('should emit event with the genre name when a badge is clicked', async () => {
    const wrapper = mount(GenreList, { props: { genres: GENRES } })
    await wrapper.find('.genre-badge').trigger('click')

    const emitted = wrapper.emitted('select-genre')
    expect(emitted).toBeTruthy()
    expect(emitted![0]).toEqual(['Drama'])
  })

  it('should emit multiple times when different badges are clicked', async () => {
    const wrapper = mount(GenreList, { props: { genres: GENRES } })
    const badges = wrapper.findAll('.genre-badge')

    await badges[0]?.trigger('click')
    await badges[1]?.trigger('click')

    const emitted = wrapper.emitted('select-genre')
    expect(emitted).toBeTruthy()
    expect(emitted!.length).toBe(2)
    expect(emitted![0]).toEqual(['Drama'])
    expect(emitted![1]).toEqual(['Comedy'])
  })

  it('should emit empty string when clicking the same badge twice (toggle off)', async () => {
    const wrapper = mount(GenreList, { props: { genres: GENRES } })
    const badge = wrapper.find('.genre-badge')

    await badge.trigger('click')
    await badge.trigger('click')

    const emitted = wrapper.emitted('select-genre')
    expect(emitted).toBeTruthy()
    expect(emitted![0]).toEqual(['Drama'])
    expect(emitted![1]).toEqual([''])
  })
})
