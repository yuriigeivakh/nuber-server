import { FacebookConnectMutationArgs, FacebookConnectResponse } from "src/types/graphql";
import { Resolvers } from "src/types/resolvers";
import User from "../../../entities/User";

const resolvers: Resolvers = {
    Mutation: {
        FacebookConnect: async(_, args: FacebookConnectMutationArgs): Promise<FacebookConnectResponse> => {
            try {
                const existingUser = await User.findOne({fbId: args.fbId});
                if (existingUser) {
                    return {
                        ok: true,
                        token: 'Comming soon',
                        error: null,
                    }
                } else {
                    try {
                        await User.create({...args, profilePhoto: `https://graph.facebook.com/${args.fbId}/picture?type=square`}).save();
                        return {
                            ok: true,
                            token: 'Comming soon', 
                            error: null,
                        }
                    } catch(error) {
                        return {
                            ok: false,
                            error,
                            token: null,
                        }
                    }
                }
            } catch(error) {
                return {
                    ok: false,
                    error,
                    token: null,
                }
            }
        }
    }
}

export default resolvers;