export const fromExternalToLocalLogin = (googleResponse) =>  {
    return {
            id: googleResponse.sub,
            name: googleResponse.name,
            fistName:googleResponse.given_name,
            lastName: googleResponse.family_name,
            avatar: googleResponse.picture,
            email: googleResponse.email
    }
}