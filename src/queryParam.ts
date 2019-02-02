export default interface QueryParam {
  toString(): string
  toJson(): { field: string, value: string }
}
