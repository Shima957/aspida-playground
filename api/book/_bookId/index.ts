/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    /** OK */
    resBody: {
      id: string
      title: string
      isRead: boolean
      rank?: '1' | '2' | '3' | undefined
    }
  }
}
