/* eslint-disable dot-notation */
import UniqueEntityId from '../../../@seedwork/domain/unique-entity-id.vo'
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
  test('id fiel', () => {
    let category = new Category({
      name: 'Movie',
    })
    expect(category.id).not.toBeNull()
    expect(category.id).not.toBeNull()
    expect(category.id).toBeInstanceOf(UniqueEntityId)

    category = new Category(
      {
        name: 'Movie',
      },
      undefined,
    )
    expect(category.id).not.toBeNull()

    category = new Category(
      {
        name: 'Movie',
      },
      null,
    )
    expect(category.id).not.toBeNull()
    category = new Category(
      {
        name: 'Movie',
      },
      new UniqueEntityId(),
    )
    expect(category.id).toBeInstanceOf(UniqueEntityId)
  })
  test('getter of name field', () => {
    const category = new Category({ name: 'Movie' })
    expect(category.name).toBe('Movie')
  })
  test('getter and setter of description field', () => {
    let category = new Category({
      name: 'Movie',
    })
    expect(category.description).toBeNull()

    category = new Category({
      name: 'Movie',
      description: 'some description',
    })
    expect(category.description).toBe('some description')

    category = new Category({
      name: 'Movie',
    })
    category['description'] = 'other description'
    expect(category.description).toBe('other description')

    category = new Category({
      name: 'Movie',
    })
    category['description'] = null
    expect(category.description).toBeNull()

    category = new Category({
      name: 'Movie',
    })
    category['description'] = undefined
    expect(category.description).toBeNull()
  })
  test('getter and setter of isActive prop', () => {
    let category = new Category({
      name: 'Movie',
    })
    expect(category.isActive).toBeTruthy()

    category = new Category({
      name: 'Movie',
      isActive: false,
    })
    expect(category.isActive).toBeFalsy()

    category = new Category({
      name: 'Movie',
      isActive: true,
    })
    expect(category.isActive).toBeTruthy()
  })
  test('getter of createdAt prop', () => {
    const createdAt = new Date()
    let category = new Category({
      name: 'Movie',
      createdAt,
    })
    expect(category.createdAt).toBe(createdAt)

    category = new Category({
      name: 'Movie',
    })
    expect(category.createdAt).toBeInstanceOf(Date)
  })
})
