export type CategoryProperties = {
  name: string
  isActive?: boolean
  description?: string
  createdAt?: Date
}
export class Category {
  constructor(public readonly props: CategoryProperties) {
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
