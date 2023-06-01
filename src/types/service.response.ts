export type ServiceReponse<T> = {
  status: string,
  data: {
    message: T | undefined
  },
};