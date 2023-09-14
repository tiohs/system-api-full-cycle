import { validate as validateUuid } from 'uuid'
import InvalidUuidError from '../errors/invalid-uuid.error'
import UniqueEntityId from './unique-entity-id.vo'
function skyValidateMethod() {
  return jest.spyOn(UniqueEntityId.prototype as any, 'validate')
}
describe('UniqueEntityId Unit tests', () => {
  const validateSpy = skyValidateMethod()
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should throw error when uuid is invalid', () => {
    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
  it('should accept a uuid passed in constructor', () => {
    const uuid = '37e9346a-1a20-4320-bc41-6349db023d18'
    let vo = new UniqueEntityId(uuid)
    expect(vo.id).toBe(uuid)
    vo = new UniqueEntityId(uuid)
    expect(validateSpy).toHaveBeenCalledTimes(2)
  })

  it('should accept a uuid passed in constructor', () => {
    const vo = new UniqueEntityId()
    expect(validateUuid(vo.id)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})
