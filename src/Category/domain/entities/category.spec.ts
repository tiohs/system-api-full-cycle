/* eslint-disable dot-notation */
import { Category } from './category'
import { omit } from 'lodash'
const regexExp =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

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
    expect(regexExp.test(category.id)).toBeTruthy()

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
      '92f08736-5165-4b92-9d5a-caa0df9e7811',
    )
    expect(regexExp.test(category.id)).not.toBeNull()
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
