import { validate as validateUuid } from 'uuid'
import InvalidUuidError from '../errors/invalid-uuid.error'
import UniqueEntityId from './unique-entity-id.vo'

describe('UniqueEntityId Unit tests', () => {
  it('should throw error when uuid is invalid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalled()
  })
  it('should accept a uuid passed in constructor', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    const uuid = '37e9346a-1a20-4320-bc41-6349db023d18'
    let vo = new UniqueEntityId(uuid)
    expect(vo.id).toBe(uuid)
    vo = new UniqueEntityId(uuid)
    expect(validateUuid(vo.id)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalled()
  })
})
