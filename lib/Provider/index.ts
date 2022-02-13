export interface IProvider<T> {
  prepare?: () => void

  provide: () => T
}
