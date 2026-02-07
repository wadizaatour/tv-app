import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import GenreList from '@/components/GenreList.vue'

const GENRES = ['Drama', 'Comedy', 'Action']

describe('GenreList.vue', () => {
  it('should displays all genres as badges', () => {
    // Arrange
    const wrapper = mount(GenreList, { props: { genres: GENRES } })

    // Act
    const badges = wrapper.findAll('.genre-badge')

    // Assert
    expect(badges).toHaveLength(GENRES.length)
    expect(badges.map((b) => b.text())).toEqual(GENRES)
  })

  it('should emits event with the genre name when a badge is clicked', async () => {
    // Arrange
    const wrapper = mount(GenreList, { props: { genres: GENRES } })

    // Act
    await wrapper.find('.genre-badge').trigger('click')

    // Assert
    const emitted = wrapper.emitted('select-genre')
    expect(emitted).toBeTruthy()
    expect(emitted![0]).toEqual(['Drama'])
  })

  it('should emits multiple times when different badges are clicked', async () => {
    // Arrange
    const wrapper = mount(GenreList, { props: { genres: GENRES } })
    const badges = wrapper.findAll('.genre-badge')

    // Act
    await badges[0]?.trigger('click') // Drama
    await badges[1]?.trigger('click') // Comedy

    // Assert
    const emitted = wrapper.emitted('select-genre')
    expect(emitted).toBeTruthy()
    expect(emitted!.length).toBe(2)
    expect(emitted![0]).toEqual(['Drama'])
    expect(emitted![1]).toEqual(['Comedy'])
  })
})
