const generateUniqueName = (username) => {
  return `${username}-photohub-${Math.floor(Math.random() * 10000)}`;
};

const createRepo = async (octokit, username) => {
  try {
    await octokit.rest.repos.createForAuthenticatedUser({
      name: generateUniqueName(username),
      description: "Your repository generated using my-photohub",
      private: false,
      // TODO: add more props as needed
    });
    return true;
  } catch (e) {
    return false;
  }
};
export default createRepo;
