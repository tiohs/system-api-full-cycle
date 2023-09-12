import { randomUUID as uuidv4 } from 'crypto'

export type CategoryProperties = {
  name: string
  isActive?: boolean
  description?: string
  createdAt?: Date
}
export class Category {
  public readonly id: string
  constructor(
    public readonly props: CategoryProperties,
    id?: string,
  ) {
    this.id = id || uuidv4()
    this.description = this.props.description
    this.props.isActive = this.props.isActive ?? true
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  get name(): string {
    return this.props.name
  }

  get isActive(): boolean {
    return this.props.isActive
  }

  get description(): string | undefined {
    return this.props.description
  }

  private set description(value: string) {
    this.props.description = value ?? null
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt
  }
}
