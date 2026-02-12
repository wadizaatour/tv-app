import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ShowCard, { type IShowCard } from '@/components/ShowCard.vue'
import type { IShow } from '@/services/api'

const mockShow: IShowCard = {
  id: 1,
  name: 'Under the Dome',
  premiered: '2013-06-24',
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg',
  },
}

const mockShowNoImage: IShowCard = {
  id: 2,
  name: 'Show Without Image',
  premiered: '2015-01-01',
  image: undefined,
}

const mockShowNoDate: IShowCard = {
  id: 3,
  name: 'Show Without Date',
  premiered: null,
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg',
  },
}

describe('ShowCard component show a movie with image title and year', () => {
  const globalStubs = {
    RouterLink: {
      template: '<a><slot /></a>',
    },
  }

  it('should render the show name and premiere year', () => {
    const wrapper = shallowMount(ShowCard, {
      props: { show: mockShow as IShow },
      global: { stubs: globalStubs },
    })

    expect(wrapper.find('.show-title').text()).toBe('Under the Dome')
    expect(wrapper.find('.show-year').text()).toBe('2013')
  })

  it('should render the show image when available', () => {
    const wrapper = shallowMount(ShowCard, {
      props: { show: mockShow },
      global: { stubs: globalStubs },
    })

    const image = wrapper.find('img')
    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe(mockShow.image?.medium)
    expect(image.attributes('alt')).toBe(mockShow.name)
  })

  it('should not render an image if none is provided', () => {
    const wrapper = shallowMount(ShowCard, {
      props: { show: mockShowNoImage },
      global: { stubs: globalStubs },
    })

    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.show-title').text()).toBe('Show Without Image')
    expect(wrapper.find('.show-year').text()).toBe('2015')
  })

  it('should display "Unknown" when premiere date is missing', () => {
    const wrapper = shallowMount(ShowCard, {
      props: { show: mockShowNoDate },
      global: { stubs: globalStubs },
    })

    expect(wrapper.find('.show-year').text()).toBe('Unknown')
  })
})
