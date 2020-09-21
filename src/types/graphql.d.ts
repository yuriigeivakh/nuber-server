export const typeDefs = ["type Query {\n  sayBye: String\n  sayHello(name: String!): SayHelloResponse!\n}\n\ntype SayHelloResponse {\n  error: Boolean\n  text: String\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string | null;
  sayHello: SayHelloResponse;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  error: boolean | null;
  text: string | null;
}
