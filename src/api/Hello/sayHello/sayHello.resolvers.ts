import { SayHelloQueryArgs, SayHelloResponse } from "src/types/graphql";

const resolvers = {
    Query: {
        sayHello: (_, args: SayHelloQueryArgs, context): SayHelloResponse => ({
            text: `Hello ${args.name} how are you`,
            error: true,
        })
    }
}

export default resolvers;