import createUser from "./auth.repository.js";

const CreateUserService = async ({ fullname, email, password }) => {
    const user = await createUser({ fullname, email, password });
    return user;
}

export default CreateUserService;