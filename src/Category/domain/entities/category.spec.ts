import { Category } from './category'
import { omit } from 'lodash'
describe('Category Test ', () => {
  test('constructor of category', () => {
    let category = new Category({
      name: 'Homem Aranha',
    })
    const props = omit(category.props, 'createdAt')
    expect(props).toStrictEqual({
      name: 'Homem Aranha',
      description: null,
      isActive: true,
    })
    expect(category.props.createdAt).toBeInstanceOf(Date)
    category = new Category({
      name: 'Movie',
      description: 'some description',
      isActive: false,
    })
    let createdAt = new Date()

    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'some description',
      isActive: false,
      createdAt,
    })

    category = new Category({
      name: 'Movie',
      description: 'some description',
    })
    expect(category.props).toMatchObject({
      name: 'Movie',
      description: 'some description',
    })

    category = new Category({
      name: 'Movie',
      isActive: false,
    })
    expect(category.props).toMatchObject({
      name: 'Movie',
      isActive: false,
    })

    createdAt = new Date()

    category = new Category({
      name: 'Movie',
      createdAt,
    })
    expect(category.props).toMatchObject({
      name: 'Movie',
      createdAt,
    })
  })
})
