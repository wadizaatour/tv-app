import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ShowCard from '@/components/ShowCard.vue'
import type { IShow } from '@/services/api'

const mockShow: IShow = {
  id: 1,
  name: 'Under the Dome',
  premiered: '2013-06-24',
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg',
  },
  genres: ['Drama', 'Science-Fiction', 'Thriller'],
  rating: { average: 6.5 },
}

const mockShowNoImage = {
  id: 2,
  name: 'Show Without Image',
  premiered: '2015-01-01',
  image: null,
  genres: ['Drama', 'Science-Fiction', 'Thriller'],
  rating: { average: 6.5 },
}

const mockShowNoDate = {
  id: 3,
  name: 'Show Without Date',
  premiered: null,
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg',
  },
  genres: ['Drama', 'Science-Fiction', 'Thriller'],
  rating: { average: 6.5 },
}

describe('ShowCard.vue', () => {
  it('should render the show name and premiere year', () => {
    // Arrange
    const wrapper = mount(ShowCard, { props: { show: mockShow as IShow } })

    // Act
    const title = wrapper.find('.show-title').text()
    const year = wrapper.find('.show-year').text()

    // Assert
    expect(title).toBe('Under the Dome')
    expect(year).toBe('2013')
  })

  it('should render the show image when available', () => {
    // Arrange
    const wrapper = mount(ShowCard, { props: { show: mockShow } })

    // Act
    const image = wrapper.find('img')

    // Assert
    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe(mockShow.image?.medium)
    expect(image.attributes('alt')).toBe(mockShow.name)
  })

  it('should not render an image if none is provided', () => {
    // Arrange
    const wrapper = mount(ShowCard, { props: { show: mockShowNoImage } })

    // Act
    const image = wrapper.find('img')

    // Assert
    expect(image.exists()).toBe(false)
    expect(wrapper.find('.show-title').text()).toBe('Show Without Image')
    expect(wrapper.find('.show-year').text()).toBe('2015')
  })

  it('should display "Unknown" when premiere date is missing', () => {
    // Arrange
    const wrapper = mount(ShowCard, { props: { show: mockShowNoDate } })

    // Act
    const year = wrapper.find('.show-year').text()

    // Assert
    expect(year).toBe('Unknown')
  })
})
